/* Event page for web application
 *  Function: feed from MSU on events
 */

 import React, { Component } from "react";

 import classes from "./EventPage.css";
 import Blog from "../../components/Blog/Blog";


 export class EventPage extends Component{
   render() {
       return (
           <div className={classes.EventPage}>
             <div className={classes.Content}>
                <h1>EVENTS</h1>
                <Blog/>
             </div>
           </div>
       );
   }
 }
export default EventPage;
