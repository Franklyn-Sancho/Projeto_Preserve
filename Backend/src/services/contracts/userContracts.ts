import UserRepository from '../repository/userRepository';
import UserModels from '../../app/models/userModels';

export default class UserContracts implements UserRepository {
    public async getUser(name: string, email: string, password: string) {
        const data = { name, email, password };
        const response = await UserModels.find(data);
        return response;
    }

    public async postUser(name: string, email: string, password: string) {
        const data = { name, email, password };
        const response = await UserModels.create(data);
        return response;
    }
}