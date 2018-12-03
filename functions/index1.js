const functions = require('firebase-functions');
const cors = require('cors')({ origin: true });
const admin = require('firebase-admin');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const htmlparser = require("htmlparser2");
const fs = require("fs");
const app = express();

exports.parser = functions.https.onRequest((req, res) => {
  return cors(req, res, () => {
let filename = '';
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
    let summary ='';
      let counter = 0;
      let times = [];
      let days = [];
      let building = [];
      let date = [];
      let isGood = false;
      filename = req.file.filename;
      fs.readFile('./uploads/'+filename, 'utf8', function(err, data) {
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
                counter++;
              }
              if(text!="Lecture"&&text!="Class"&&isGood){
                if(counter===2){
                  times.push(text);
                }
                if(counter===4){
                  days.push(text);
                }
                if(counter===6){
                  building.push(text);
                }
                if(counter===8){
                  date.push(text);
                }
                counter++;
                console.log(text);
                console.log(counter);
                summary = summary+text;
              }
              if(text==="Lecture"){
                isGood=false;
                counter=0;
              }
            },
        }, {decodeEntities: true});
        parser.write(data);
        console.log(building);
        console.log(times);
        console.log(date);
        console.log(days);
        fs.unlink('./uploads/'+filename, function(error) {
          if (error) {
              throw error;
          }
          console.log('Deleted filename', filename);
        })
      })
    }
  };
