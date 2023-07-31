import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Device } from "./schemas/device.schema";
import { Model, Types } from "mongoose";

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Device.name) private productModel: Model<Device>) {}

  async findAll(): Promise<Device[]> {
    return await this.productModel.find();
  }

  async getProductByName(name: string): Promise<Device[] | any> {
    try {
      const devices = await this.productModel.find({
        $expr: {
          $regexMatch: {
            input: "$name",
            regex: name,
            options: "i",
          },
        },
      });

      if (!devices || devices.length === 0) {
        return "";
      }
      return devices;
    } catch (error) {
      throw new HttpException("Error occurs", HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: string) {
    try {
      if (!Types.ObjectId.isValid(id)) {
        throw new HttpException("Wrong id format", HttpStatus.BAD_REQUEST);
      }
      const product = await this.productModel.findById(id);

      if (!product) {
        throw new HttpException("Product not found", HttpStatus.BAD_REQUEST);
      }
      return product;
    } catch {
      throw new HttpException("Error occsurs", HttpStatus.BAD_REQUEST);
    }
  }
}
