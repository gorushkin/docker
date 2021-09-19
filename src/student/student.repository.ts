import { DB as STUDENTS_DB } from './student.db';
import { IStudent, StudentDTO } from '../common/types';

const getAll = async (): Promise<IStudent[]> => {
  return STUDENTS_DB.findMany();
};

const getById = async (id: string): Promise<IStudent | 'NOT_FOUND'> => {
  return STUDENTS_DB.findOne(id);
};

const createStudent = async (dto: StudentDTO): Promise<IStudent> => {
  const newStudent = STUDENTS_DB.create(dto);
  const savedStudent = STUDENTS_DB.save(newStudent);
  return savedStudent;
};

const updateStudent = async (id: string, dto: StudentDTO): Promise<IStudent | 'NOT_FOUND'> => {
  const newStudent = STUDENTS_DB.update(id, dto);
  return newStudent;
};

const deleteStudent = async (id: string): Promise<'NOT_FOUND' | 'DELETED'> => {
  return STUDENTS_DB.delete(id);
};

export const studentsRepository = { getAll, getById, createStudent, updateStudent, deleteStudent };
