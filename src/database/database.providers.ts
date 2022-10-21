import * as mongoose from 'mongoose';
import { DatabaseConnection } from 'src/constants';
export const databaseProviders = [
  {
    provide: DatabaseConnection,
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb://localhost/nest'),
  },
];
