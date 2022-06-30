
import { Button, Card, Container, Grid, Typography } from '@mui/material'
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'

function FormComponent() {
    return (
        <Container sx={{marginTop: 6, width: 637 }}>
            <div style={{ p: 3 , marginBottom:30}}>
                <Typography sx={{ fontSize: '18px', fontWeight: 700 }}> Find More Solution </Typography>
                <TextField id="outlined-basic" label={<SearchIcon/>} variant="outlined" fullWidth  />
            </div>

            <div style={{ marginTop: 10, marginBottom: 20 }}>
                <a href='/' style={{ textDecoration: 'none' }}><Typography sx={{ fontSize: '12px', color: '#007185' }}>Gifts, Gift Cards & Registries</Typography></a>
                <Typography sx={{ fontSize: '28px' }}>Redeeming Gift Cards</Typography>
            </div>
            <hr />

            <div style={{ marginTop: 15, marginBottom: 15 }}>
                <Card sx={{ height: 96, width: 558, marginLeft: 4 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={2}>
                            <img src='/assets/takeaction.png' alt='Take Action' />
                        </Grid>
                        <Grid item xs={8} >
                            <Typography sx={{ p: 1, alignText: 'left' , textSize:'14px'}}>Need to redeem a Gift Card? </Typography>
                            <Button sx={{ color: '#000', backgroundColor: '#FFD700' , height:29 ,width:135, textSize: '13px'}}>Redeem a Gift</Button>
                        </Grid>
                    </Grid>
                </Card>
            </div>
            <div style={{marginBottom: 20}}>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <Typography sx={{fontSize: '13px', fontWeight: 700}}>Redeem a Gift Card</Typography>
                    </Grid>
                    <Grid item xs={9} >
                        <Typography><a href='/' style={{ textDecoration: 'none', color: '#007185', fontSize: '13px' }}>Redeem a Gift Card</a></Typography>
                        <Typography><a href='/' style={{ textDecoration: 'none', color: '#007185', fontSize: '13px' }}>About Gift Card Redemption Problems</a></Typography>
                        <Typography><a href='/' style={{ textDecoration: 'none', color: '#007185', fontSize: '13px' }}>Use a Gift Card for Digital Downloads</a></Typography>
                    </Grid>
                </Grid>
            </div>
            <hr/>

            <div style={{marginBottom: 20}}>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <Typography sx={{fontSize: '13px', fontWeight: 700}}>Manage a Gift Card</Typography>
                    </Grid>
                    <Grid item xs={9} >
                        <Typography><a href='/' style={{ textDecoration: 'none', color: '#007185', fontSize: '13px' }}>Save Your Gift Card Balance</a></Typography>
                        <Typography><a href='/' style={{ textDecoration: 'none', color: '#007185', fontSize: '13px' }}>Print a Gift Card</a></Typography>
                    </Grid>
                </Grid>
            </div>
            
            <div style={{ marginTop: 15, marginBottom: 15 }}>
                <Card sx={{ width: 362, p:3 }}>
                    <Typography sx={{p:2}}>Was this information helpful?</Typography>
                    <Button variant='outlined' sx={{marginLeft:2}}>Yes</Button>
                    <Button variant='outlined' sx={{marginLeft:2}}>No</Button>
                </Card>
            </div>
        </Container>
    )
}

export default FormComponent