/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import * as aws from '@pulumi/aws';

const bucket = new aws.s3.Bucket('my-bucket');

export const bucketName = bucket.id;
