import { OnModuleInit } from "@nestjs/common";
import { WebSocketGateway } from "@nestjs/websockets";

@WebSocketGateway()
export class RoutesGateway implements OnModuleInit {
  
}
