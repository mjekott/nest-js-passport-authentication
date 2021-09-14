import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly userService;
    private jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        firstName: string;
        lastName: string;
    }>;
    login(user: any): Promise<{
        access_token: string;
    }>;
}
