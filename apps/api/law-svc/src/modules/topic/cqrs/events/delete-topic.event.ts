import { IEvent } from "@nestjs/cqrs";

export class DeleteTopicEvent implements IEvent {
	constructor(public readonly id: string) {}
}