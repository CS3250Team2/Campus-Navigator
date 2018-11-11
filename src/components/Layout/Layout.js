/* Component Name: Layout
 * Function: Handles the layout of the application
 *
 * Props Received: None
 *
 */

import React, { Component } from "react";

import Aux from "../../hoc/Auxiliary";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import Toolbar from "../Navigation/Toolbar/Toolbar";

class Layout extends Component {
    state = {
        showDrawer: false
    };

    closeDrawerHandler = () => {
        this.setState({ showDrawer: false });
    };

    toggleDrawerHandler = () => {
        this.setState(prevState => {
            return { showDrawer: !prevState.showDrawer };
        });
    };

    render() {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.toggleDrawerHandler} />
                <SideDrawer
                    open={this.state.showDrawer}
                    closed={this.closeDrawerHandler}
                />
                {this.props.children}
            </Aux>
        );
    }
}

export default Layout;
