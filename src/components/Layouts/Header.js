import React, { Component } from 'react';
import { AppBar, Toolbar, Typography  } from 'material-ui';

class Header extends Component {
    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="headline" color="inherit">
                            Exercise Database
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default Header;