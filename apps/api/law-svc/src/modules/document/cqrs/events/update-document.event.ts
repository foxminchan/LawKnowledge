import { IEvent } from "@nestjs/cqrs";
import { UpdateDocumentModel } from "../../../../models";

export class UpdateDocumentEvent implements IEvent {
  constructor(
    public readonly id: string,
    public readonly document: UpdateDocumentModel
  ) {}
}