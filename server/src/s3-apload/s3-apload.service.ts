import { Injectable } from "@nestjs/common";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

@Injectable()
export class S3AploadService {
  AWS_S3_BUCKET = "andriydevices";
  s3Client = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
      accessKeyId: process.env.ACCES_KEY_ID,
      secretAccessKey: process.env.SECRET_ACCES_KEY,
    },
  });

  async uploadImage(file: Express.Multer.File) {
    const { originalname, buffer, mimetype } = file;

    const folderPath = `images/${String(originalname)}`;
    const params = {
      Bucket: this.AWS_S3_BUCKET,
      Key: folderPath,
      Body: buffer,
      ACL: "public-read",
      ContentType: mimetype,
      CreateBucketConfiguration: {
        LocationConstraint: process.env.AWS_REGION,
      },
    };

    try {
      const command = new PutObjectCommand(params);
      const s3Response = await this.s3Client.send(command);
      return s3Response;
    } catch (e) {
      console.log(e);
      throw new Error("Error uploading image to S3.");
    }
  }
}
