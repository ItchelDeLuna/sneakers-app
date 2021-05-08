import React from 'react'; 
import { Grid } from '@material-ui/core';
import Button  from '@material-ui/core/Button';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { Link } from 'react-router-dom';

export default function Footer() {

const style = {
    text_footer: {
        fontSize:23,
        fontWeight:600,
    },
    footer_card: {
        margin:'auto',
    },
    text_copy: {
        fontSize:16,
        fontWeight:800,
    },
    btn: {
        marginLeft:10,
    }
};

    return (
        <div>
            <br /><br /><br /><div className="division"></div><br /><br />
            <Grid container spacing={1}>
                <Grid item xs={6} sm={1}></Grid>
                <Grid item xs={6} sm={3}>
                    <h5 className="title_negocio">SNEAKERS M&V</h5><br />
                    <p className="p_footer">¿Primera compra? Con Sneakers tendrás el mundo a tus pies.</p>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <h5 className="title_negocio">NUESTRA INFORMACIÓN</h5><br />
                    <p className="p_footer">
                    <Button component={Link} to="/termcond" class="menu_nav">Términos y condiciones</Button>
                    </p>
                </Grid>
                <Grid item xs={6} sm={2}>
                    <h5 className="title_negocio">MENSAJE</h5><br />
                    <p className="p_footer">
                        <Link href="#/"><MailOutlineIcon /></Link><br /><br />
                    </p>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <h5 className="title_negocio">CONTACTO</h5><br />
                    <p className="p_footer">
                        <Link href="#/">Facebook</Link><br />
                    </p>
                </Grid>
                <br /><br /><br /><div className="division"></div><br /><br />
                <Grid item xs={2} ></Grid>
                <Grid item xs={6} style={style.footer_card}>
                    <label style={style.text_footer}>
                        ¿Eres nuevo? Comienza a comprar 
                        <Button variant="outlined" color="primary" style={style.btn}>
                            Comprar
                        </Button>
                    </label>
                </Grid>
                <br /><br /><br /><div className="division"></div><br /><br />
                <Grid item xs={4} ></Grid>
                <Grid item xs={6} style={style.footer_card}>
                    <label style={style.text_copy}>
                        @ 2021 Copyright: <Link href="#/">Sneakers M&V</Link>
                    </label>
                </Grid>
            </Grid>
            <br /><br /><br /><br />
        </div>
            
        
    );
}
