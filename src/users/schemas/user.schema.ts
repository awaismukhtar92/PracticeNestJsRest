import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  userId: number;
  @Prop()
  name: string;
  @Prop()
  age: number;
  @Prop()
  address: string;
  @Prop()
  gender: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
