import { IStudent, StudentDTO } from '../common/types';
import { Student } from './student.model';

class STUDENTS_DB {
  _db: IStudent[] = [
    {
      id: '32570ee4-a47e-4745-affb-789523faefe2',
      first_name: 'Ivan',
      last_name: 'Petrov',
      age: 23,
    },
  ];

  findMany(): IStudent[] {
    return this._db;
  }

  findOne(id: string): IStudent | 'NOT_FOUND' {
    const student = this._db.find((student) => student.id === id);
    if (student) {
      return student;
    }
    return 'NOT_FOUND';
  }

  create(dto: StudentDTO): IStudent {
    const newStudent = new Student(dto);
    return newStudent;
  }

  save(student: IStudent): Student {
    this._db.push(student);
    return student;
  }

  update(id: string, dto: StudentDTO): IStudent | 'NOT_FOUND' {
    const student = this.findOne(id);
    if (student !== 'NOT_FOUND') {
      const updatedStudent = { ...student, ...dto };
      const updatedDB = this._db.map((item) => (item.id !== id ? item : updatedStudent));
      this._db = updatedDB;
      return updatedStudent;
    }
    return 'NOT_FOUND';
  }

  delete(id: string): 'DELETED' | 'NOT_FOUND' {
    const student = this.findOne(id);
    if (student !== 'NOT_FOUND') {
      this._db = this._db.filter((student) => student.id !== id);
      return 'DELETED';
    }
    return 'NOT_FOUND';
  }
}

export const DB = new STUDENTS_DB();
