import { IEvent } from "@nestjs/cqrs";

export class DeleteRoleEvent implements IEvent {
	constructor(public readonly id: string) {}
}