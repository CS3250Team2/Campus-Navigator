const port = process.env.PORT || 3000;
   const express = require('express');
   const bodyParser = require('body-parser');
   const multer = require('multer');
   const uuidv4 = require('uuid/v4');
   const path = require('path');
   const spawn = require("child_process").spawn;
   // code found on https://blog.stvmlbrn.com/2017/12/17/upload-files-using-react-to-node-express-server.html
   // configure storage
   const storage = multer.diskStorage({
     destination: (req, file, cb) => {
       /*
         Files will be saved in the 'uploads' directory. Make
         sure this directory already exists!
       */
       cb(null, './uploads');
     },
     filename: (req, file, cb) => {
       /*
         uuidv4() will generate a random ID that we'll use for the
         new filename. We use path.extname() to get
         the extension from the original file name and add that to the new
         generated ID. These combined will create the file name used
         to save the file on the server and will be available as
         req.file.pathname in the router handler.
       */
       const newFilename = `${uuidv4()}${path.extname(file.originalname)}`;
       cb(null, newFilename);
     },
   });
   // create the multer instance that will be used to upload/save the file
   const upload = multer({ storage });

   const app = express();

   app.use(bodyParser.json());
   app.use(bodyParser.urlencoded({ extended: true }));

   app.post('/', upload.single('selectedFile'), (req, res) => {
     /*
       We now have a new req.file object here. At this point the file has been saved
       and the req.file.filename value will be the name returned by the
       filename() function defined in the diskStorage configuration. Other form fields
       are available here in req.body.
     */

     const pythonProcess = spawn('python',["./hi.py"]);
     pythonProcess.stdout.on('data', (data) => {
         // Do something with the data returned from python script
         app.get('/api/hello', (req, res) => {
           res.send({ express: 'Hello From Express' });
         });
     });
     res.send();
   });

   app.listen(port, () => console.log(`Server listening on port ${port}`));
