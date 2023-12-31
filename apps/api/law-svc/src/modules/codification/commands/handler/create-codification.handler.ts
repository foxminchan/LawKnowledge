/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { CreateCodificationCommand } from "../impl";
import { LawDataService } from "@law-knowledge/building-block";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";

@CommandHandler(CreateCodificationCommand)
export class CreateCodificationCommandHandler
  implements ICommandHandler<CreateCodificationCommand>
{
	constructor(private readonly dataService: LawDataService) { }

	async execute(payload: CreateCodificationCommand) {
		return await this.dataService.$transaction([
			this.dataService.codificationIndex.create({ data: payload.codification }),
		]);
	}
}