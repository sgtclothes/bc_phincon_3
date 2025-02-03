import { ResponseSuccess } from "../types/user.type";

export abstract class UserAbstract {
    public abstract getAllUsers(): ResponseSuccess;
    public abstract getUserById(id: number): ResponseSuccess;
    public abstract createUser(): ResponseSuccess;
    public abstract updateUser(id: number, user: any): ResponseSuccess;
    public abstract deleteUser(id: number): Omit<ResponseSuccess, "data">;
}


