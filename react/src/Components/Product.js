import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import T1 from './img/T1.png';
import T2 from './img/T2.png';
import T3 from './img/T3.png';
import T4 from './img/T4.png';
import T5 from './img/T5.png';
import T6 from './img/T6.png';
import T7 from './img/T7.png';
import T8 from './img/T8.png';


const style = {
    desc: {
        fontSize:20,
        marginLeft:-200,
        marginTop:-50,
    },
    col: {
        fontSize:20,
        marginLeft:-300,
        marginTop:-50,
    },
};

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(0),
        textAlign:'center',
        color: theme.palette.text.secondary,
        border: '1px solid #e0e0e0',
    },
}));

export default function Search() {
    const classes = useStyles();
    return (
        <div>
            <h4>Nuevos Modelos</h4>
            <Grid container spacing={4}>
                <Grid item xs={5} sm={4}>
                    <Paper className={classes.paper}>
                        <img src={T1} alt="T1" width='390' height='500' className="img_product"/>
                        <br />
                        <label className="title_product">Nike Air Max 270 React ENG</label><br /><br></br>
                        <label className="description" style={style.desc}>Calzado para mujer</label>
                        <br /><br />
                        <div className="colors"></div>
                        <label className="description" style={style.col}>1 Color</label>
                        <br /><br />
                    </Paper>
                </Grid>
                <Grid item xs={5} sm={4}>
                    <Paper className={classes.paper}>
                        <img src={T2} alt="T1" width='390' height='500' className="img_product"/>
                        <br />
                        <label className="title_product">Nike Air Max 270 React ENG</label><br /><br></br>
                        <label className="description" style={style.desc}>Calzado para mujer</label>
                        <br /><br />
                        <div className="colors"></div>
                        <label className="description" style={style.col}>1 Color</label>
                        <br /><br />
                    </Paper>
                </Grid>
                <Grid item xs={5} sm={4}>
                    <Paper className={classes.paper}>
                        <img src={T3} alt="T1" width='390' height='500' className="img_product"/>
                        <br />
                        <label className="title_product">Nike Air Max 270 React ENG</label><br /><br></br>
                        <label className="description" style={style.desc}>Calzado para mujer</label>
                        <br /><br />
                        <div className="colors"></div>
                        <label className="description" style={style.col}>1 Color</label>
                        <br /><br />
                    </Paper>
                </Grid>
                <Grid item xs={5} sm={4}>
                    <Paper className={classes.paper}>
                        <img src={T4} alt="T1" width='390' height='500' className="img_product"/>
                        <br />
                        <label className="title_product">Nike Air Max 270 React ENG</label><br /><br></br>
                        <label className="description" style={style.desc}>Calzado para mujer</label>
                        <br /><br />
                        <div className="colors"></div>
                        <label className="description" style={style.col}>1 Color</label>
                        <br /><br />
                    </Paper>
                </Grid>
            </Grid>

            <Grid container spacing={4}>
                <Grid item xs={5} sm={4}>
                    <Paper className={classes.paper}>
                        <img src={T5} alt="T1" width='390' height='500' className="img_product"/>
                        <br />
                        <label className="title_product">Nike Air Max 270 React ENG</label><br /><br></br>
                        <label className="description" style={style.desc}>Calzado para mujer</label>
                        <br /><br />
                        <div className="colors"></div>
                        <label className="description" style={style.col}>1 Color</label>
                        <br /><br />
                    </Paper>
                </Grid>
                <Grid item xs={5} sm={4}>
                    <Paper className={classes.paper}>
                        <img src={T6} alt="T1" width='390' height='500' className="img_product"/>
                        <br />
                        <label className="title_product">Nike Air Max 270 React ENG</label><br /><br></br>
                        <label className="description" style={style.desc}>Calzado para mujer</label>
                        <br /><br />
                        <div className="colors"></div>
                        <label className="description" style={style.col}>1 Color</label>
                        <br /><br />
                    </Paper>
                </Grid>
                <Grid item xs={5} sm={4}>
                    <Paper className={classes.paper}>
                        <img src={T7} alt="T1" width='390' height='500' className="img_product"/>
                        <br />
                        <label className="title_product">Nike Air Max 270 React ENG</label><br /><br></br>
                        <label className="description" style={style.desc}>Calzado para mujer</label>
                        <br /><br />
                        <div className="colors"></div>
                        <label className="description" style={style.col}>1 Color</label>
                        <br /><br />
                    </Paper>
                </Grid>
                <Grid item xs={5} sm={4}>
                    <Paper className={classes.paper}>
                        <img src={T8} alt="T1" width='390' height='500' className="img_product"/>
                        <br />
                        <label className="title_product">Nike Air Max 270 React ENG</label><br /><br></br>
                        <label className="description" style={style.desc}>Calzado para mujer</label>
                        <br /><br />
                        <div className="colors"></div>
                        <label className="description" style={style.col}>1 Color</label>
                        <br /><br />
                    </Paper>
                </Grid>
            </Grid>
            <br /><br /><br /><br />
        </div>   
    );
}
