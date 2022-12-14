import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class Tokens {
    constructor(private readonly jwtService: JwtService) {}


    
}