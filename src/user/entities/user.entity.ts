import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({timestamps: true})
export class User {
    @Prop({required: true})
    email: string;
    @Prop({required: true})
    username: string;
    @Prop({required: true})
    passward: string;
    @Prop({default: false})
    isAdmin: boolean;
}

export const UserSchame = SchemaFactory.createForClass(User);