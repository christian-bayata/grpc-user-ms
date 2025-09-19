import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import moment from 'moment';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ type: String, required: false })
  institution_name: string;

  @Prop({ type: String, required: false })
  address: string;

  @Prop({ type: String, required: false })
  state: string;

  @Prop({ type: String, required: true })
  contact_name: string;

  @Prop({ type: String, required: true })
  contact_email: string;

  @Prop({ type: String, required: true })
  reference_number: string;

  @Prop({ default: () => moment().utc().toDate(), type: Date })
  created_at: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
