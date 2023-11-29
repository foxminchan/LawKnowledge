import {
  ApiController,
  Criteria,
  SwaggerResponse,
} from '@law-knowledge/shared';
import { LawService } from './law-svc.service';
import { Get, Param, Query } from '@nestjs/common';

@ApiController('law')
export class LawController {
  constructor(private readonly lawService: LawService) {}

  @Get('document')
  @SwaggerResponse({
    operation: 'Get documents',
  })
  getDocuments(@Query() criteria?: Criteria) {
    return this.lawService.getDocuments(criteria);
  }

  @Get('document/:id')
  @SwaggerResponse({
    operation: 'Get document by id',
    params: ['id'],
  })
  getDocument(@Param('id') id: string) {
    return this.lawService.getDocument(id);
  }
}
