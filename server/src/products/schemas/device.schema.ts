import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type DeviceDocument = HydratedDocument<Device>;
@Schema()
export class Device {
  @Prop()
  name: string;
  @Prop()
  image: string;
  @Prop()
  price: number;
  @Prop()
  description: string;
  @Prop()
  category: string;
  @Prop()
  availability: boolean;
}

export const DeviceSchema = SchemaFactory.createForClass(Device);
