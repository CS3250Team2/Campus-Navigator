import React, { Component } from "react";

class Blog extends Component {
  constructor(){
    super();
    this.state ={
      recentBlogPost:{
        name:'',
        url:''
      }
    }
  }
  FetchDataFromRssFeed(){
    var request = new XMLHttpRequest();
    request.onreadystatechange = ()=>{
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
    request.open("GET","https://api.rss2json.com/v1/api.json?rss_url=https://www.trumba.com/calendars/msu-denver-events-calendars-academic-calendar-student.xml",true);
    request.send();
  }
  componentDidMount() {
    {this.FetchDataFromRssFeed()}
  }
  render(){
    return(
      <div>
        Check out our blog:<a target="_blank" href={this.state.recentBlogPost.url}>{this.state.recentBlogPost.name}</a>
      </div>
    );
  }
}
export default Blog;
