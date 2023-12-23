import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './use.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private repo: Repository<User>){}

    create(email, password){
        console.log('UsersService::create - email, password: ', {email, password})

        const user = this.repo.create({email: email, password: password})

        return this.repo.save(user)
    }
}
