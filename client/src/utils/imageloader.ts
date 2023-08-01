'use client'
import { s3Url } from "@/constants/url";

export const imageLoader = ( src : string | any) => {
  return `${s3Url}/${src}`;
};

