import { Controller, UseInterceptors, UploadedFile } from "@nestjs/common";
import { S3AploadService } from "./s3-apload.service";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller("s3-apload")
export class S3AploadController {
  constructor(private readonly s3AploadService: S3AploadService) {}

  @UseInterceptors(FileInterceptor("file"))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return this.s3AploadService.uploadImage(file);
  }
}
