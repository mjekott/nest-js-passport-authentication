import { User } from '../entities/user.entity';
declare const CreateUserDto_base: import("@nestjs/mapped-types").MappedType<Pick<User, "email" | "password" | "firstName" | "lastName">>;
export declare class CreateUserDto extends CreateUserDto_base {
}
export {};
