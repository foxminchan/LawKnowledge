import { ChatService } from './chat-svc.service';
import { Get, Param, Query } from '@nestjs/common';
import { Criteria, PagingSwaggerResponse } from '@law-knowledge/shared';
import { ApiController } from '@law-knowledge/shared';

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
}
