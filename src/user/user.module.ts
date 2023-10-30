import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose'
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User, UserSchame } from './entities/user.entity';

@Module({
  imports:[
    MongooseModule.forFeature([
      {name: User.name, schema: UserSchame}
    ])
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule {}
