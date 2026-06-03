import { Injectable, OnModuleInit } from '@nestjs/common';
import { createClient } from 'redis';

@Injectable()
export class RedisService implements OnModuleInit {

  private client;

  async onModuleInit() {

    this.client = createClient({
      url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
    });

    await this.client.connect();

    console.log('Redis Connected');
  }

  getClient() {
    return this.client;
  }
}