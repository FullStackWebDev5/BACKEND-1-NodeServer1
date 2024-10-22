/*
  # FileSystem (fs) module
    - Two work with files in node server and perform operations like read, write, update and delete
    - Synchronous Methods
      - readFileSync(): Read the content of a file synchronously, returns buffer data
        - path: Path to the file along with filename and extension
        - options:
        - encoding: utf8 - Converts buffer data to string data
      - writeFileSync(): Synchronously,
        - Create a new file and write a content
        - Or overwrite content in an existing file
        - Arguments:
          - path: Path to the file along with filename and extension
          - data: Buffer/String data to write
      - appendFileSync(): Append content in an existing file synchronously
        - path: Path to the file along with filename and extension
        - data: Buffer/String data to write
      - unlinkSync(): Delete a file synchronously
        - path: Path to the file along with filename and extension

    - Asynchronous Methods
      - readFile(): Read the content of a file asynchronously, returns buffer data
        - path: Path to the file along with filename and extension
        - callback: error (Any error occured while reading the file), data (file data)
      - writeFile(): Asynchronously,
        - Create a new file and write a content
        - Or overwrite content in an existing file
        - Arguments:
          - path: Path to the file along with filename and extension
          - data: Buffer/String data to write
          - callback: error (Any error occured while reading the file)
      - appendFile(): Append content in an existing file asynchronously
        - path: Path to the file along with filename and extension
        - data: Buffer/String data to write
        - callback: error (Any error occured while reading the file)
      - unlink(): Delete a file asynchronously
        - path: Path to the file along with filename and extension
        - callback: error (Any error occured while reading the file)
*/

/* -------------------------------- */
// # READ A FILE SYNCHRONOUSLY
// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req, res) => {
//   if(req.url == '/favicon.ico') {
//     return res.end()
//   }
//   const data = fs.readFileSync('text1.txt', { encoding: 'utf8' })
//   res.end(data)
// })

// server.listen(3000)

/* -------------------------------- */
// # WRITE TO A FILE SYNCHRONOUSLY
// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req, res) => {
//   if(req.url == '/favicon.ico') {
//     return res.end()
//   }
//   fs.writeFileSync('text1.txt', 'HTML')
//   res.end('Content added to the file')
// })

// server.listen(3000)

/* -------------------------------- */
// # UPDATE A FILE SYNCHRONOUSLY (Append data)
// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req, res) => {
//   if(req.url == '/favicon.ico') {
//     return res.end()
//   }

//   fs.appendFileSync('text1.txt', ', CSS, JavaScript and Node.js')
//   res.end('Content appended to the file')
// })

// server.listen(3000)

/* -------------------------------- */
// # DELETE A FILE SYNCHRONOUSLY
// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req, res) => {
//   if(req.url == '/favicon.ico') {
//     return res.end()
//   }

//   fs.unlinkSync('text2.txt')
//   res.end('File deleted')
// })

// server.listen(3000)

/* -------------------------------- */
// # READ A FILE ASYNCHRONOUSLY
// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req, res) => {
//   if(req.url == '/favicon.ico') {
//     return res.end()
//   }
//   fs.readFile('text1.txt', (error, data) => {
//     if(error) {
//       console.log('Some error occurred', error)
//     } else {
//       console.log(data.toString())
//     }
//   })
//   res.end('File is being read asynchronously')
// })

// server.listen(3000)

/* -------------------------------- */
// # WRITE TO A FILE ASYNCHRONOUSLY
// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req, res) => {
//   if(req.url == '/favicon.ico') {
//     return res.end()
//   }
//   fs.writeFile('text1.txt', 'Node.js is interesting :)', (error) => {
//     if(error) {
//       console.log('Some error occurred', error)
//     } else {
//       console.log('Data written successfully')
//     }
//   })
//   res.end('Data written successfully')
// })

// server.listen(3000)

/* -------------------------------- */
// # UPDATE A FILE ASYNCHRONOUSLY (APPEND)
// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req, res) => {
//   if(req.url == '/favicon.ico') {
//     return res.end()
//   }
//   fs.appendFile('text1.txt', '\nWe are learning fs module right now!', (error) => {
//     if(error) {
//       console.log('Some error occurred', error)
//     } else {
//       console.log('Data appended successfully')
//     }
//   })
//   res.end('Data appended successfully')
// })

// server.listen(3000)

/* -------------------------------- */
// # DELETE A FILE ASYNCHRONOUSLY
// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req, res) => {
//   if(req.url == '/favicon.ico') {
//     return res.end()
//   }
//   fs.unlink('text1.txt', (error) => {
//     if(error) {
//       console.log('Some error occurred', error)
//     } else {
//       console.log('File deleted successfully')
//     }
//   })
//   res.end('File deleted successfully')
// })

// server.listen(3000)


/*
  # Additional Notes:
    - Core modules can start with an optional 'node:'
      - Example: require('http') similar to require('node:http')
*/