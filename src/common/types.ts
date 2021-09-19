export interface IStudent {
  id: string;
  first_name: string;
  last_name: string;
  age: number;
}

export type StudentDTO = Omit<IStudent, 'id'>;
