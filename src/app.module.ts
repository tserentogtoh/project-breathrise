import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [AuthModule, MongooseModule.forRoot('mongodb+srv://BSmoose0512:BSmoose0512@cluster0.8eg3n.mongodb.net/'), UserModule],
  controllers: [AppController],
  providers: [AppService, AuthService, UserService],
})
export class AppModule {}
