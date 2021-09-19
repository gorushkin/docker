import { studentsRepository } from './student.repository';

import { IStudent, StudentDTO } from '../common/types';

const getAll = (): Promise<IStudent[]> => studentsRepository.getAll();

const getById = (id: string): Promise<IStudent | 'NOT_FOUND'> => studentsRepository.getById(id);

const createStudent = (dto: StudentDTO): Promise<IStudent> => studentsRepository.createStudent(dto);

const updateStudent = (id: string, dto: StudentDTO): Promise<IStudent | 'NOT_FOUND'> =>
  studentsRepository.updateStudent(id, dto);

const deleteStudent = (id: string): Promise<'NOT_FOUND' | 'DELETED'> => studentsRepository.deleteStudent(id);

export const studentService = { getAll, getById, createStudent, updateStudent, deleteStudent };
