import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { ProductsService } from "./products.service";
import { Device } from "./schemas/device.schema";
import { FileInterceptor } from "@nestjs/platform-express";
@Controller("products")
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get("/")
  async findAll() {
    return await this.productsService.findAll();
  }
  @Get("/find")
  getProductByName(@Query() query: { name: string }): Device[] | any {
    if (!query.name) {
      throw new Error("Please provide a search term.");
    }
    return this.productsService.getProductByName(query.name);
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    return this.productsService.findOne(id);
  }

  @Post()
  @UseInterceptors(FileInterceptor("file"))
  async postDevices(
    @UploadedFile() image: Express.Multer.File,
    @Body() deviceInfo
  ) {
    return this.productsService.postDevices(image,deviceInfo);
  }
}
