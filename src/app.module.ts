import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessageModule } from './message/message.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MessageModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
