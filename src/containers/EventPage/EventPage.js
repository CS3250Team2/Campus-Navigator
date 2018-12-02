/* Event page for web application
 *  Function: feed from MSU on events
 */

 import React, { Component } from "react";
 import UserForm from "../../components/UserForm/UserForm";

 import classes from "./EventPage.css";

 class EventPage extends Component {
     render() {
         return (
             <div className={classes.EventPage}>
               <div className={classes.Content}>
                  <h1>EVENTS</h1>
                  <a href="https://www.trumba.com/calendars/msudenver-events-calendars.xml">
                    <img src="https://www.w3schools.com/xml/pic_xml.gif" width="36" height="14"></img>
                  </a>
               </div>
             </div>
         );
     }

 }

 export default EventPage;
