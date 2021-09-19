import { IStudent } from '../common/types';

import { v4 as uuid } from 'uuid';

export class Student implements IStudent {
  id: string;
  first_name: string;
  last_name: string;
  age: number;

  constructor({
    id = uuid(),
    first_name = 'Ivan',
    last_name = 'Petrov',
    age = 23,
  }: {
    id?: string;
    first_name: string;
    last_name: string;
    age: number;
  }) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.age = age;
  }
}
