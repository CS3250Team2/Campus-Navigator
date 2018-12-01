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
               </div>
             </div>
         );
     }
     
 }

 export default EventPage;
