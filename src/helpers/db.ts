import { config } from '../common/ormconfig';

import { getConnection, createConnection } from 'typeorm';

const connectToDb = async () => {
  let connection;

  try {
    connection = getConnection();
  } catch (error) {
    // console.error(error);
  }

  try {
    if (connection) {
      if (!connection.isConnected) await connection.connect();
    } else {
      await createConnection(config);
    }
    console.log('SuccesfullyConnected');
  } catch (error) {
    console.log(error);
  }
};

export const TryDBConnect = async (cb: () => void) => {
  try {
    await connectToDb();
    cb();
  } catch (error) {
    console.log(error);
  }
};
