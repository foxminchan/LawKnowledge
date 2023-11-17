import * as aws from "@pulumi/aws";

const bucket = new aws.s3.Bucket("my-bucket");

export const bucketName = bucket.id;
