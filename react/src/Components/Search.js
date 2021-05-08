import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width:'30ch',
            marginLeft:'750px',
            height:'10ch',
        },
    },
}));

export default function Search() {
    const classes = useStyles();
    return (
        <form className={classes.root} noValidate autocomplete="off">
            <br />
            <TextField id="outlined-basic" label="Buscar" variant="outlined" className="search"/>
        </form> 
    );
}
