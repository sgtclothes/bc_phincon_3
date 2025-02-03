import { mockUser } from "../mocks/user.mock";
import { ResponseSuccess } from "../types/user.type";
import { UserAbstract } from "../abstract/user.abstract";

export class UserController extends UserAbstract {
    public getAllUsers(): ResponseSuccess {
        const users = User.findAll();
        mockUser.data = users;
        return mockUser;
    }
    public getUserById(id: number): ResponseSuccess {
        return mockUser;
    }
    public createUser(): ResponseSuccess {
        return mockUser;
    }
    public updateUser(id: number, user: any): ResponseSuccess {
        return mockUser;
    }
    public deleteUser(id: number): Omit<ResponseSuccess, "data"> {
        return mockUser;
    }
}
