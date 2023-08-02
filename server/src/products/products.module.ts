import { Module } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { ProductsController } from "./products.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Device, DeviceSchema } from "./schemas/device.schema";
import { ConfigModule } from "@nestjs/config";
import { S3AploadModule } from "src/s3-apload/s3-apload.module";
import { S3AploadService } from "src/s3-apload/s3-apload.service";

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([{ name: Device.name, schema: DeviceSchema }]),
    S3AploadModule,
  ],
  controllers: [ProductsController],
  providers: [ProductsService,S3AploadService],
})
export class ProductsModule {}
