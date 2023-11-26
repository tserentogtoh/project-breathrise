import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://BSmoose0512:BSmoose0512@cluster0.8eg3n.mongodb.net/'), 
  UserModule, 
  AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
