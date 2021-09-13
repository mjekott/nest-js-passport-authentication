import { UsersService } from 'src/users/users.service';
export declare class AuthService {
    private readonly userService;
    constructor(userService: UsersService);
    validateUser(email: string, password: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        firstName: string;
        lastName: string;
    }>;
}
