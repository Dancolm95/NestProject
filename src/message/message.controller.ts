import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Query } from '@nestjs/common';
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  // @Get()
  // getHello(@Query('name') name: string): string {
  //   return this.messageService.getMessage(name);
  // }
  @Get()
  getHello(@Query('name') name: string): object {
    const message = this.messageService.getMessage(name);
    return { message };
  }

  @Post()
  createMessage(@Body('name') name: string): object {
    this.messageService.saveName(name);
    const message = this.messageService.getMessage(name);
    return { message };
  }

  @Get('names')
  getAllNames(): object {
    const names = this.messageService.getAllNames();
    return { savedNames: names };
  }

  @Delete(':name')
  deleteName(@Param('name') name: string): object {
    const deleted = this.messageService.deleteName(name);
    if (!deleted) {
      throw new HttpException('Nombre no encontrado', HttpStatus.NOT_FOUND);
    }

    return { message: `nombre "${name}" eliminado correctamente.` };
  }
}
