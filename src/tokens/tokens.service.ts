import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class TokensService {
    constructor(private readonly jwtService: JwtService){}

    async getTokens(id: number, email: string) {
        const jwtPayload = {
            sub: id,
            email: email,
        }
        const [accessToken, refreshToken] = await Promise.all([
            this.jwtService.signAsync(jwtPayload, {
                secret: process.env.ACCESS_TOKEN_KEY,
                expiresIn: process.env.ACCESS_TOKEN_TIME,
            }),
            this.jwtService.signAsync(jwtPayload, {
                secret: process.env.REFRESH_TOKEN_KEY,
                expiresIn: process.env.REFRESH_TOKEN_TIME,
            })
        ])
        return {
            access_token: accessToken,
            refresh_token: refreshToken
        }
    }
}
