import React from 'react';
import { Grid } from '@material-ui/core';

const style = {
    cont: {
    marginTop:20,
    }
};

const Map=()=>{
    return (
        <Grid container spacing={4} style={style.cont}>
            <Grid item xs={6} sm={2}></Grid>
            <Grid item xs={6} sm={2}>
                <div className="social_media">
                    <label className="title_social">Redes Sociales</label><br /><br />
                    <label className="title_name">Vanessa De Luna: </label><br /><br />
                    <label className="title_name">Facebook: Vanessa De Luna</label><br /><br />
                    <label className="title_name">Messenger: Vanessa De Luna</label><br /><br />

                    <label className="title_name">Mariana Lozano: </label><br /><br />
                    <label className="title_name">Facebook: Mariana Lozano</label><br /><br />
                    <label className="title_name">Messenger: Mariana Lozano</label><br /><br />

                    <label className="title_info">Visitanos, atrevete a tener le mundo a tus pies!</label><br /><br />
                </div>
            </Grid>

            <Grid item xs={5} sm={3}>
                <div className="google-map-code">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3702.4635886222122!2d-102.26500508582672!3d21.878217063613775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429ee069d6cf307%3A0xd93b5294c07171a7!2sTecnol%C3%B3gico%20Nacional%20de%20M%C3%A9xico%20-%20Instituto%20Tecnol%C3%B3gico%20de%20Aguascalientes!5e0!3m2!1ses-419!2smx!4v1615680871883!5m2!1ses-419!2smx" width="600" height="450"  allowfullscreen="" loading="lazy" frameborder="0" ></iframe>
                </div>
            </Grid>
        </Grid>
    );
}
export default Map;