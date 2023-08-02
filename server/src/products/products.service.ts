import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Device } from "./schemas/device.schema";
import { Model, Types } from "mongoose";
import { S3AploadService } from "src/s3-apload/s3-apload.service";

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Device.name) private productModel: Model<Device>,
    private readonly S3AploadService: S3AploadService
  ) {}

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
      return { status: HttpStatus.OK, data: product };
    } catch {
      throw new HttpException("Error occsurs", HttpStatus.BAD_REQUEST);
    }
  }

  async postDevices(file, deviceInfo) {
    

    const { name, price, description, category } = deviceInfo;
    const deviceExist = await this.productModel.findOne({ name: name });
    if (deviceExist) {
      throw new HttpException(
        "This device already exist",
        HttpStatus.BAD_REQUEST
      );
    }
    try {
      const newDevice = new this.productModel({
        name: name,
        image: file.originalname,
        price,
        description,
        category,
        availability: true,
      });
      await newDevice.save();
      await this.S3AploadService.uploadImage(file);
      return { status: HttpStatus.OK, data: newDevice };
    } catch {
      throw new HttpException("something went wrong", HttpStatus.BAD_REQUEST);
    }
  }
}
