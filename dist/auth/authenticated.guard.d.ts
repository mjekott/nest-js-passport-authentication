import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class AuthenicatedGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean | Promise<boolean>;
}
