import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
    login() {
        return {msg: 'I am logined'};
    }
 
    register() {
        return 'I am registered';
    }
}
