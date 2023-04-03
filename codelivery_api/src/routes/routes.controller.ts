import { Controller, Get, Post, Body, Patch, Param, Delete, Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { RoutesService } from './routes.service';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { Producer } from '@nestjs/microservices/external/kafka.interface';
import { ClientKafka } from '@nestjs/microservices';
import { RoutesGateway } from './routes.gateway';

@Controller('routes')
export class RoutesController implements OnModuleInit {

  private kafkaProducer: Producer;

  constructor(
    private readonly routesService: RoutesService,
    @Inject('KAFKA_SERVICE')
    private kafkaClient: ClientKafka,
    private routeGateway: RoutesGateway,
  ) {}

  async onModuleInit() {
      this.kafkaProducer = await this.kafkaClient.connect();
  }

  
  handleMessage(){

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
}
