import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TokensService } from './tokens.service';

@Module({
  imports: [JwtService],
  providers: [TokensService],
  exports: [TokensService]
})
export class TokensModule {}
