import { IEvent } from "@nestjs/cqrs";

export class GetUserEvent implements IEvent {
	constructor(public readonly email: string) {}
}