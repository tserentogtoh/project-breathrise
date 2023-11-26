import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/user.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private readonly userModel: Model<User>,
        private jwtService: JwtService
    ){}

    async create({ password, email}: CreateUserDto){
        const user = await this.userModel.findOne({email: email})
        if(!user ){
            const newUser = new this.userModel({
                email,
                password,
            });
            await newUser.save();
            return newUser;
        }
        throw {code: 'USER_ALREADY_REGISTERED', message: 'registeread email '}
    
    }

    async findById(userId : String){
        return await this.userModel.findById(userId);
    }

    async findOne(email: string){
        return await this.userModel.findOne({email: email})
    }
    
    async login({password, email}:any){
        const user = await this.findOne(email);
        if(user.password !== password){
            throw new UnauthorizedException();
        }
        const payload = {sub: user.id, username: user.username};
        return {
            access_token: await this.jwtService.signAsync(payload)
        };
    }

}
