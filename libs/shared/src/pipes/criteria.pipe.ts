/* eslint-disable @typescript-eslint/no-explicit-any */
import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class CriteriaPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (metadata.type === 'query') {
      if (value.page) {
        value.page = parseInt(value.page, 10);
      }
      if (value.limit) {
        value.limit = parseInt(value.limit, 10);
      }
    }
    return value;
  }
}
