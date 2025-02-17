
// Import the 'express' module along with 'Request' and 'Response' types from express
import express, { Request, Response , Application, NextFunction} from 'express';

import { port , Database} from './config';
import { environment } from './config';
// import { Database } from './config/dbinstance';
import { Connection } from 'mysql2/typings/mysql/lib/Connection';

import router from './api/routes';

// Create an Express application 
const app: Application = express();

//routes
app.use('/api/v1',router);


// Error-handelig middleware
app.use((err:Error, req:Request, res:Response, next:NextFunction)=>{
  console.error(err.stack);
  res.status(500).json({
    message: err.message,
  });
  });
  
  

// Start the server and listen on the specified port
app.listen(port, () => {
  // Log a message when the server is successfully running
  console.log(`Server is running on http://localhost:${port} in ${environment} server`);
});

//database connection

Database.connection();