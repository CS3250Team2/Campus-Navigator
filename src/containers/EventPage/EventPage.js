/* Event page for web application
 *  Function: feed from MSU on events
 */

 import React, { Component } from "react";
 import UserForm from "../../components/UserForm/UserForm";

 import classes from "./EventPage.css";

 class Blog extends Component {
   constructor(){
     super();
     this.state ={
       recentBlogPost:{
         name:'';
         url:'';
       }
     }
   }
   FetchDataFromRssFeed(){
     var request = new XMLHttpRequest();
     request.onreadystatechange = ()={
       if(request.readyState==4&&request.status==200){
         var myObj = JSON.parse(request.responseTest);
         for(let i=0;i<1;i++){
           this.setState({
             recentBlogPost:{
               name:myObj.items[i].title,
               url:myObj.items[i].link
             }
           });
         }
       }
     }
     request.open("GET","url",true);
     request.send();
   }
   componentDidMount(){
     {this.FetchDataFromRssFeed()}
   }
   render(){
     return(
       <div>
         Check out our blog:<a target="_blank" href={this.state.recentBlogPost.url}>{this.state.recentBlogPost.name}</a>
       </div>
     );
   }
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
