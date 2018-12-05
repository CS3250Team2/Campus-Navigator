/* Event page for web application
 *  Function: feed from MSU on events
 */

import React, { Component } from 'react';
import Content from '../Content/Content';

import Blog from '../../components/Blog/Blog';

export class EventPage extends Component {
    render() {
        return (
            <Content title="Check Out Some Recent Events">
                <Blog />
            </Content>
        );
    }
}
export default EventPage;
