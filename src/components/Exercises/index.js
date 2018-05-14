import React, { Component } from 'react';
import { Grid, Paper } from 'material-ui';

const styles = {
    paper: {
        padding: 20,
        marginTop: 10,
        marginBottom: 10
    }
}

class Exerices extends Component {
    render() {
        return (
            <Grid container>
                <Grid item sm>
                    <Paper style={styles.paper}>
                    Left
                    </Paper>
                </Grid>
                <Grid item sm>
                    <Paper style={styles.paper}>
                    Right
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

export default Exerices;