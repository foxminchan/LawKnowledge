import { capitalize } from 'helper-fns';
import { ApiTags } from '@nestjs/swagger';
import { Controller, applyDecorators } from '@nestjs/common';

export function ApiController(name: string, version?: string) {
  const decsToApply: (ClassDecorator | MethodDecorator | PropertyDecorator)[] =
    [
      ApiTags(capitalize(name)),
      Controller({ path: name, version: version ?? '1' }),
    ];

  return applyDecorators(...decsToApply);
}
