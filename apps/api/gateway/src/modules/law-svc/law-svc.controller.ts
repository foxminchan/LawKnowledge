import {
  Criteria,
  ApiController,
  SwaggerResponse,
  PagingSwaggerResponse,
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

  @Get('topic')
  @PagingSwaggerResponse({
    operation: 'Get topics',
  })
  getTopics(@Query() criteria?: Criteria) {
    return this.lawService.getTopics(criteria);
  }

  @Get('topic/:id')
  @SwaggerResponse({
    operation: 'Get topic by id',
    params: ['id'],
  })
  getTopic(@Param('id') id: string) {
    return this.lawService.getTopic(id);
  }

  @Get('heading')
  @SwaggerResponse({
    operation: 'Get headings',
  })
  getHeadings(@Query() criteria?: Criteria) {
    return this.lawService.getHeadings(criteria);
  }

  @Get('heading/:id')
  @SwaggerResponse({
    operation: 'Get heading by id',
    params: ['id'],
  })
  getHeading(@Param('id') id: string) {
    return this.lawService.getHeading(id);
  }
}
