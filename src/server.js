const port = process.env.PORT || 3000;
    const express = require('express');
    const bodyParser = require('body-parser');
    const multer = require('multer');
    const uuidv4 = require('uuid/v4');
    const path = require('path');
    const htmlparser = require("htmlparser2");
    const fs = require("fs");

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
    app.get("/", (req, res) => {
      res.sendFile(__dirname + "/index.html");
    });

    app.post('/', upload.single('selectedFile'), (req, res) => {
      let summary ='';
      let counter =0;
      let isGood = false;
      fs.readFile('./uploads/'+req.file.filename, 'utf8', function(err, data) {
        if (err) throw err;
        //console.log(data);
        const parser = new htmlparser.Parser({
            onopentag: function(name, attribs){
                // summary="This table lists the scheduled meeting times and assigned instructors for this class.."
                if(name === "tr" && attribs === 'summary'){
                  //console.log(attribs);
                }

            },
            ontext: function(text){
              if(text==='Class'){
                isGood=true;

              }
              if(text!="Lecture"&&text!="Class"&&isGood){

                summary = summary+text;
              }
              if(text==="Lecture"){
                isGood=false;
              }

            },
            // onopentag: function(name, attribs){
            //     // summary="This table lists the scheduled meeting times and assigned instructors for this class.."
            //     if(name === "script" && attribs.type === "text/javascript"){
            //         console.log("JS! Hooray!");
            //     }
            // },
            // ontext: function(text){
            //     console.log("-->", text);
            // },
            // onclosetag: function(tagname){
            //     if(tagname === "script"){
            //         console.log("That's it?!");
            //     }
            // }
        }, {decodeEntities: true});
        parser.write(data);
        parser.end();
        console.log("STTTTTTTTTTTTTTTTTTTTTTTAAAAAAAAAAAAAAAAAAAAAAAAAARRRRRRRRRRRRRRRRRRRRRTTTTTTTTTTTTTTT");
        console.log(summary);
      });



      /*
        We now have a new req.file object here. At this point the file has been saved
        and the req.file.filename value will be the name returned by the
        filename() function defined in the diskStorage configuration. Other form fields
        are available here in req.body.
      */
      res.send();
    });

    app.listen(port, () => console.log(`Server listening on port ${port}`));
