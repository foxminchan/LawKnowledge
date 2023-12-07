import { ChatService } from './chat-svc.service';
import { Get, Param, Query } from '@nestjs/common';
import {
  Criteria,
  DocumentFileType,
  PagingSwaggerResponse,
  SwaggerResponse,
} from '@law-knowledge/shared';
import { ApiController } from '@law-knowledge/shared';
import { ApiParam } from '@nestjs/swagger';

@ApiController('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Get(':id')
  @PagingSwaggerResponse({
    operation: 'Get chat histories by user',
    params: ['id'],
  })
  getDocuments(@Param('id') id: string, @Query() criteria?: Criteria) {
    return this.chatService.getChatHistoriesByUser(id, criteria);
  }

  @Get('embedding/:type')
  @SwaggerResponse({
    operation: 'Add embedding',
  })
  @ApiParam({ name: 'type', enum: DocumentFileType })
  addEmbedding(@Param('type') type: DocumentFileType) {
    return this.chatService.addEmbedding(type);
  }
}
