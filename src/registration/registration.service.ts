import { Injectable } from '@nestjs/common';
import { CreateRegistrationDto } from './dto/create-registration.dto';
import { UpdateRegistrationDto } from './dto/update-registration.dto';
import { DataSource } from 'typeorm';

@Injectable()
export class RegistrationService {
  constructor(private DataSource: DataSource) {}


  create(data) {
    console.log('sssssssssss', data)
    let d = this.DataSource.query('select  * from signup where email=?',[data.email])
    console.log('aaaaaaaaaaa', d)
    return d
    // return 'This action adds a new registration';
  }

  findAll() {
    return `This action returns all registration`;
  }

  findOne(id: number) {
    return `This action returns a #${id} registration`;
  }

  update(id: number, updateRegistrationDto: UpdateRegistrationDto) {
    return `This action updates a #${id} registration`;
  }

  remove(id: number) {
    return `This action removes a #${id} registration`;
  }
}
