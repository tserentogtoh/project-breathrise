import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto{
    @ApiProperty({
        description: 'User email',
        default: 'discodisco@mailinator.com',
      })
      email: string;
    
      @ApiProperty({ description: 'User password', default: 'Test@123@' })
      password: string;
}