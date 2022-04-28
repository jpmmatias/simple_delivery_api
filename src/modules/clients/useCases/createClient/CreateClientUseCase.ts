import { hash } from 'bcrypt';
import { prisma } from '../../../../database/prismaClient';
import { ICreateClient } from '../../@types/Clients';

export class CreateClientUseCase {
	async execute({ password, username }: ICreateClient) {
		const hashPassword = await hash(password, 10);

		const client = await prisma.clients.create({
			data: {
				username,
				password: hashPassword,
			},
		});

		return client;
	}

	//	private async clientExist(username: string) {
	//	return await prisma.clients.findFirst({
	//where: {
	//			username: {
	//		mode: 'insensitive',
	//			},
	//		},
	//	});
	//}
}
