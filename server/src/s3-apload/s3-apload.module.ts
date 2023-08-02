import { Module } from '@nestjs/common';
import { S3AploadService } from './s3-apload.service';
import { S3AploadController } from './s3-apload.controller';

@Module({
  controllers: [S3AploadController],
  providers: [S3AploadService]
})
export class S3AploadModule {}
