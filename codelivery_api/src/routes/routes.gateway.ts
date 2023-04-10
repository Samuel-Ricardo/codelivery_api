import { Inject, Injectable, OnModuleInit } from "@nestjs/common";
import { ClientKafka } from "@nestjs/microservices";
import { Producer } from "@nestjs/microservices/external/kafka.interface";
import { SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server, Socket } from "socket.io";

@WebSocketGateway({cors:true})
export class RoutesGateway implements OnModuleInit {
  private kafkaProducer: Producer;

  @WebSocketServer()
  server: Server;

  constructor(
    @Inject('KAFKA_SERVICE')
    private kafkaClient: ClientKafka,
  ){}
 
  async onModuleInit() { this.kafkaProducer = await this.kafkaClient.connect() }

  @SubscribeMessage('new-direction')
  handleMessage(client: Socket, payload: {routeId:string}) {
    this.kafkaProducer.send({
      topic: 'route.new-direction',
      messages: [
        {
          key: 'route.new-direction',
          value: JSON.stringify({
            routeId: payload.routeId,
            clientId: client.id,
          })
        }
      ]
    })
    console.log(payload);
  } 

  sendPosition(
    data: {
      clientId: string;
      routeId: string;
      position: [number, number];
      finished: boolean;
    }
  ){
    console.log({data})
    const {clientId, ...rest} = data;
    const clients = this.server.sockets.sockets;

    console.log({has: clients.has(clientId), client: clients.get(clientId),clientId,clients,})

    if (!clients.has(clientId)) {
      console.error('Client not exists :/ refresh React Application and resend new direction again.')
      return; 
    }

    clients.get(clientId).emit('new-position', rest);
  }
}
