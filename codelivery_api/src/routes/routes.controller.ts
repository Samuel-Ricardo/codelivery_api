import { Controller, Get, Post, Body, Patch, Param, Delete, Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { RoutesService } from './routes.service';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { Producer } from '@nestjs/microservices/external/kafka.interface';
import { ClientKafka, MessagePattern, Payload } from '@nestjs/microservices';
import { RoutesGateway } from './routes.gateway';

@Controller('routes')
export class RoutesController implements OnModuleInit {

  private kafkaProducer: Producer;

  constructor(
    private readonly routesService: RoutesService,
    @Inject('KAFKA_SERVICE')
    private kafkaClient: ClientKafka,
    private routeGateway: RoutesGateway,
  ) { }

  async onModuleInit() {
    this.kafkaProducer = await this.kafkaClient.connect();
    await this.kafkaProducer.connect()
  
    const events = this.kafkaProducer.events

    this.kafkaProducer.on(events.REQUEST, () => {console.log("REQUEST SEND")})
    this.kafkaProducer.on(events.CONNECT, () => {console.log("CONNECTED")})
  }

  @Post()
  create(@Body() createRouteDto: CreateRouteDto) {
    return this.routesService.create(createRouteDto);
  }

  @Get()
  findAll() {
    return this.routesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.routesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRouteDto: UpdateRouteDto) {
    return this.routesService.update(+id, updateRouteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.routesService.remove(+id);
  }


  @Get(':id/start')
  startRoute(@Param('id') id: string) {
    console.log("START ROUTE: " + id)
    this.kafkaProducer.send({
      topic: 'route.new-direction',
      messages: [
        {
          key: 'route.new-direction',
          value: JSON.stringify({ routeId: id, clientId: '1' })
        }
      ]
    })
  }

  @MessagePattern('route.new-position')
  consumeNewPosition(
    @Payload()
    message: {
//      value: {
        routeId: string;
        clientId: string;
        position: [number, number];
        finished: boolean;
//      };
    },
  ) {
    console.log({message})  
    this.routeGateway.sendPosition(message)
  }
}
