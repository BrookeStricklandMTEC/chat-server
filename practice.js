


// Day One // 

// const value = process.argv[2]

// if(value === 'even'){
//     for(let i=1; i <= 10; i++)
//     console.log(i + ':' + ' counting: ' + (i*2))
// }

// if(value === 'odd'){
//     for(let i=1; i <= 10; i++)
//     console.log(i + ':' + ' counting: ' + (i*2-1))
// }


// Day Two // 


// Classes
// class rectangle {
//     constructor(a,b){
//         this.a = a;
//         this.b = b;
//         this.name = "rectangle";
//     }
//     getArea(){
//         return this.a*this.b;
//     }
//     getPerimiter(){
//         return 2*this.a + 2*this.b;
//     }
// }

// class square extends rectangle{
//     constructor(a){
//         super(a,a);
//         this.name = "square";
//     }
// }

// Event Emitters
// const EventEmitter = require('events');

// class MyEmitter extends EventEmitter {}

// const myEmitter = new MyEmitter(); 

// myEmitter.on('message logged', () => {
//     console.log('new message');
// })

// myEmitter.on('with parameters', (first, second, third) => {
//     console.log(`${first} ${second} ${third}`)
// })

// myEmitter.emit('message logged'); 

//  Error
// const myEmitter = new MyEmitter();
// myEmitter.emit('error', new Error('you done effed up boy!'));

// Robot Class
// const EventEmitter = require('events');

// class Robot extends EventEmitter{
//     constructor(name){
//         super(); 
//         this.name = name;
//         this.addListener(); 
//         this.isActive = false; 
//         this.once('activate', () => {
//             this.isActive = true;
//             console.log(`${this.name} has been activated`)
//         });
//         this.on('speak', (said) => {
//             if (this.isActive){
//                 console.log(`${this.name} : ${said}`)
//             }
//             else {
//                 console.log('robot is not active')
//             }
//         })
//     }
//     addListener(){
//         this.once('activate', this.activateListener);
//         this.on('speak', this.speakListener)
//     }
//     activateListener(){
//         this.isActive = true;
//         console.log('activated')
//     }
//     speakListener(said) {
//         if(this.isActive){
//             console.log(`${this.name}: ${said}`)
//         }
//     }
// }

// let Chappie = new Robot('Chappie')
// Chappie.emit('activate');
// Chappie.emit('speak', 'hello, Brooke.');
// Chappie.removeAllListeners()
// Chappie.emit('speak', 'my fart fell on the floor');


// Plant Exercise 
// const EventEmitter = require('events');

// class Plant extends EventEmitter {
//     constructor(size, hasBeenPlanted){
//         super();
//         this.size = 0;
//         this.hasBeenPlanted = false;
//         this.water = false
//         this.bugAttack = false
//         this.harvest = false;
//         this.quit = false; 
//         this.once('plant', () => {
//             this.hasBeenPlanted = true; 
//             if(this.hasBeenPlanted = true){
//                 console.log('seed has been planted!')
//                 console.log(`your seed is ${this.size} inches high! Try watering your plant?`)
//             }
//             else{
//                 console.log('plant a seed')
//             }
//         })
//         this.on('water', () => {
//             this.water = true;
//             if(this.water = true){
//                 this.size++
//                 console.log(`You watered your plant! Your plant is now ${this.size} inches high!`)
//             }
//             else{
//                 console.log(`Your plant is ${this.size} inches high!`)
//             }
//         })
//         this.on('bug attack', () => {
//             this.bugAttack = true;
//             if(this.bugAttack = true){
//                 this.size--
//                 console.log(`Shoot! You're being attacked! Your plant is now ${this.size} inches high ;(`)
//             }
//             else{
//                 console.log(`Your plant is ${this.size} inches high!`)
//             }
//         })
//         this.on('harvest', () => {
//             this.harvest = true;
//             if(this.harvest = true){
//                 console.log(`You harvseted a ${this.size}-inch-plant. Great season!`)
//                 this.removeAllListeners()
//             }
//             else{
//                 console.log(`Your plant is ${this.size} inches high!`)
//             }
//         })
//         this.on('quit', () => {
//             this.quit = true;
//             if(this.quit = true){
//                 console.log('Thanks for playing! See you next season!')
//             }
//             else{
//                 console.log(`Your plant is ${this.size} inches high!`)
//             }
//         })
//     }
// }

// let plant = new Plant('plant')

// plant.emit('plant');
// plant.emit('water');
// plant.emit('water');
// plant.emit('water');
// plant.emit('bug attack');
// plant.emit('water'); 
// plant.emit('harvest');
// plant.emit('quit');

// Process STDIN
// process.stdin.on('data', data => {
//     console.log(`You typed ${data.toString()}`);
//     process.exit() 
// });

// process.stdin.on('readable', () => {
//     let chunk;
//     // Use a loop to make sure we read all available data.
//     while ((chunk = process.stdin.read()) !== null) {
//      process.stdout.write(`data: ${chunk}`);
//     }
// });

// Day Three //

// Streams

// const require = ('fs');
// const file = fs.createWriteStream('bigFile.txt');

// for(let i=0; i<1e5;i++){
//  file.write('lorem ipsum.\n')
// }
// file.end(); 


// stdin usage 
// const fs = require('fs')
// const file = fs.createWriteStream('./newFile.txt')
// process.stdin.setEncoding('utf8')

// process.stdin.on('readable', () => {
//         let userInput;
//     while ((userInput = process.stdin.read()) !== null) {
//         process.stdout.write(`data: ${userInput}`);
//         file.write(`${userInput}`)
//         if(userInput.trim() === 'exit'){
//          break
//         }
//     }
// });

// encryption exercise 

// const crypto = require('crypto');
// const fs = require('fs');

// const fileName = 'simpleText.txt';
// const algorithm = 'aes-192-cbc';
// const password = 'abc123';

// const key = crypto.scryptSync(password, 'salt', 24);
// const iv = Buffer.alloc(16, 0)
// const inFile = fs.createReadStream(fileName)
// const outFile = fs.createWriteStream(fileName + ".aes")
// const encrypt = crypto.createCipheriv(algorithm, key, iv)

// inFile.pipe(encrypt).pipe(outFile)

// decryption 

// const crypto = require('crypto');
// const fs = require('fs');

// const fileName = 'simpleText.txt';
// const algorithm = 'aes-192-cbc';
// const password = 'abc123';

// const key = crypto.scryptSync(password, 'salt', 24);
// const iv = Buffer.alloc(16, 0)
// const inFile = fs.createReadStream(fileName)
// const outFile = fs.createWriteStream(fileName + ".aes")
// const encrypt = crypto.createCipher(algorithm, key, iv)

// inFile.pipe(encrypt).pipe(outFile)

// const crypto = require('crypto');
// const fs = require('fs');

// const fileName = 'cypher.aes'; //input
// const algorithm = 'aes-192-cbc'; 
// const password = 'password';
// const key = crypto.scryptSync(password, 'salt', 24)
// const iv = Buffer.alloc(16,0);
// const inFile = fs.createReadStream(fileName); 
// const outFile = fs.createWriteStream(fileName + '.txt') //output 
// const decrypt = crypto.createDecipheriv(algorithm, key, iv );

// inFile.pipe(decrypt).pipe(outFile);


// Server Client Example 

// const net = require('net'); // Server Code .
// const server = net.createServer((socket) => {
//     console.log('Welcome to Echo Server\r\n');
//     socket.on('data', (chunk) => {
//         socket.write(chunk);
//     });
//     socket.on('end', socket.end);
// });

// server.listen(3000, () => {
//     console.log('server is up');
// });

// const net = require('net'); // Client Code .
// const client = net.createConnection({ port: 3000 },
//     () => { // once connected .
//     console.log('connected to server!');
//     client.write('1 ... Anyone there!\r\n');
//     client.write('2 ... What did you say!\r\n');
// });

// client.on('data', (data) => {
//     console.log("Msg from server:" + data.toString());
//     client.end();
// });

// client.on('end', () => {
//     console.log('End of Message');
// });

// Client 2

// const net = require('net'); // Server Code

// const server = net.createServer((socket) => {

//     console.log('client connected');

//     socket.on('end', () => {

//         console.log('client disconnected');

//     });


//     socket.on('data', (data) => {

//         console.log("Msg from client:" +
//             data.toString());

//     });

//     socket.write('Welcome to echo server\r\n');

//     socket.pipe(socket);

// });

// server.on('error', (err) => {

//     throw err;

// });

// server.listen(3000, () => {

//     console.log('server is up');

// });


// Day Four // 

// File System and Reading Data

// const fs = require('fs');

// fs.readdir('./', (err, files) => {
//     if(err) throw err;
//     console.log(files, 'asynch'); 
// });
// console.log('reading dir');

// const files = fs.readdirSync('./');
// console.log(files, 'synch'); 

// Asynchronous version
// const fs = require('fs')

// fs.readFile('./filename', 'utf8' , (err, data) => { //utf8 allows you to convert binary into readable text  
//     if (err) throw err;
//     console.log(data);
// })

// Synchronous version 
// const fs = require('fs')

// const data = fs.readFileSync('./filename', 'utf8')
// console.log(data); 


// replacing bacon.txt with tasty.txt 
// const fs = require('fs');

// const fileToRead = process.argv[0];
// const fileToWrite = process.argv[1];

// fs.readFile(fileToRead, 'utf8', (err, data) => {

//   if(err) throw err;
//     const baconRegex = /\bbacon\b/gi;
//     const result = data.replace(baconRegex, 'tasty');
//     const count = data.match(baconRegex).length;
//     console.log(count);

//     fs.writeFile(fileToWrite, result, err => {
//       if (err) throw err;
//       console.log('file written');
//     });

// }); 

// Reading stats of file 
// const fs = require('fs')
// const data = fs.readFileSync('./message.txt', 'utf8') 
// console.log(data)

// fs.stat('./message.txt' , (err, stats) => {
//     if (err) throw err; 
//     console.log(stats)
//     if (stats.isFile()) 
//     console.log('i am file')
// })

// const fs = require('fs')

// fs.access('./message.txt'), fs.constants.R_OK | fs.constants.W_OK, (err) => {
//     if(err){
//         console.log('file is not readable or not writable');
//     }
//     else{
//         console.log('file is OK')
//     }
// }

// Exercise 
// 


// Day Five // 

// NPM and CSV

// const jsonfile = require('jsonfile');
// const path = './sample.json'
// jsonfile.readFile(path)
// .then((data) => {
//     console.log(data)
//     data.forEach(employee => {
//         console.log(`${employee.first_name} ${employee.last_name} from ${employee.state}! Contact them at ${employee.email}`)
//     });
// })

// jsonfile.writeFile(PATH, JsonObject, Options, () err => {
// error handling 
//})

// const jsonfile = require('jsonfile');
// const path = './sample.json'
// jsonfile.readFile(path)
// .then((data) => {
//     console.log(data)
//     data.forEach(employee => {
//         console.log(`${employee.title} has won Game of The Year for ${employee.year} !!! `)
//     });
// })

// const jsonfile = require('jsonfile')

// const file = './data.json'
// const obj = { name : 'Brooke', last : 'Strickland', year: '2004' }

// jsonfile.writeFile(file, obj, {spaces: 2}, function(err){
//     if (err) console.error(err)
// })


// 
