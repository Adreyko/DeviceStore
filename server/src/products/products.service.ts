import { Injectable } from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Device } from "./schemas/device.schema";
import { Model } from "mongoose";

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Device.name) private productModel: Model<Device>) {}
  async findAll(): Promise<Device[]> {
    return await this.productModel.find();
  }
}
