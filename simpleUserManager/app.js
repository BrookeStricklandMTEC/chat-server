import { v4 as uuidv4, v6 as uuidv6 } from 'uuid';

uuidv4();
uuidv6();

const { 
    v1: uuidv1,
    v4: uuidv4,
} = require('uuid');
  
uuidv1(); // unique id 
uuidv4(); // unique id 