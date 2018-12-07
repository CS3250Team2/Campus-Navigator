import React, { Component } from 'react';

import classes from './Blog.css';

class Blog extends Component {
    constructor() {
        super();
        this.state = {
            recentBlogPosts: {
                name1: '',
                url1: '',
                name2: '',
                url2: '',
                name3: '',
                url3: ''
            },
        };
    }
    FetchDataFromRssFeed() {
        var request = new XMLHttpRequest();
        request.onreadystatechange = () => {
            if (request.readyState === 4 && request.status === 200) {
                var myObj = JSON.parse(request.responseText);
                    this.setState({
                        recentBlogPosts: {
                            name1: myObj.items[0].title,
                            name2: myObj.items[1].title,
                            name3: myObj.items[2].title,
                            url1: myObj.items[0].link,
                            url2: myObj.items[1].link,
                            url3: myObj.items[2].link,
                        },
                    });
            }
        };
        request.open(
            'GET',
            'https://api.rss2json.com/v1/api.json?rss_url=https://www.trumba.com/calendars/msu-denver-events-calendars-academic-calendar-student.xml',
            true
        );
        request.send();
    }
    componentDidMount() {
        this.FetchDataFromRssFeed();
    }
    render() {
        return (
            <div className={classes.Blog}>
                <a target="_blank" rel="noreferrer noopener" href={this.state.recentBlogPosts.url1}>
                    {this.state.recentBlogPosts.name1}
                </a>
                <a target="_blank" rel="noreferrer noopener" href={this.state.recentBlogPosts.url2}>
                    {this.state.recentBlogPosts.name2}
                </a>
                <a target="_blank" rel="noreferrer noopener" href={this.state.recentBlogPosts.url3}>
                    {this.state.recentBlogPosts.name3}
                </a>
            </div>
        );
    }
}
export default Blog;
