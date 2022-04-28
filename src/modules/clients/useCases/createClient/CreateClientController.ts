import { Request, Response } from 'express';
import { CreateClientUseCase } from './CreateClientUseCase';

export class CreateClienteController {
	async handle(request: Request, response: Response) {
		if (!request.body) {
			return response.status(409).send();
		}
		const { username, password } = request.body;

		const createClientUseCase = new CreateClientUseCase();

		const client = await createClientUseCase.execute({
			username,
			password,
		});

		return response.status(201).json({ client });
	}
}
