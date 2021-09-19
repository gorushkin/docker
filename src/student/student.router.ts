import { Router, Request, Response } from 'express';

import { StatusCodes } from 'http-status-codes';

import { studentService } from './student.service';
import { IStudent, StudentDTO } from '../common/types';

const { OK, NOT_FOUND, BAD_REQUEST, NO_CONTENT, CREATED } = StatusCodes;

export const router = Router();

router
  .route('/')
  .get(async (req, res) => {
    const users = await studentService.getAll();
    res.status(OK).send(users);
  })
  .post(async (req, res) => {
    const student = await studentService.createStudent(req.body);
    res.status(CREATED).send(student);
  });

router
  .route('/:id')
  .get(async (req, res) => {
    const { id } = <{ id: string }>req.params;
    const result = await studentService.getById(id);
    if (result === 'NOT_FOUND') {
      return res.status(NOT_FOUND).send({ message: 'student not found! ' });
    }
    return res.status(OK).send(result);
  })
  .patch(async (req, res) => {
    const { id } = <{ id: string }>req.params;
    const result = await studentService.updateStudent(id, req.body as StudentDTO);
    console.log('result: ', result);
    if (result === 'NOT_FOUND') {
      return res.status(NOT_FOUND).send({ message: 'student not found! ' });
    }
    return res.status(OK).send(result);
  })
  .delete(async (req, res) => {
    const { id } = <{ id: string }>req.params;
    const result = await studentService.deleteStudent(id);
    if (result === 'DELETED') {
      return res.status(OK).send({ message: result });
    }
    return res.status(NO_CONTENT).send({ message: result });
  });
