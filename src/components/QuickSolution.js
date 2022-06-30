import { Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'

function QuickSolution() {
    return (
        <div style={{ marginLeft: 2, marginTop: 2, marginBottom: 30 }}>
            <Card style={{ marginTop: 15, width: 240 }}>
                <CardContent>
                    <Typography component='div' sx={{ fontSize: '18px' }}>Quick Solutions</Typography>
                    <Grid container sx={{ pt: 2 }}>
                        <Grid item xs={4}>
                            <img src='https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/Box_smaller.png' alt='box' height={47.1} width={47.1} />
                        </Grid>
                        <Grid item xs={8}>
                            <a href='/' style={{ textDecoration: 'none' }}>
                                <Typography sx={{ fontSize: '14px', lineHeight: '20px', color: '#000000' }}>Your Orders</Typography>
                                <Typography sx={{ fontSize: '12px', lineHeight: '16px', color: '#565959' }}>Track or cancel Orders</Typography>
                            </a>
                        </Grid>
                    </Grid>

                    <Grid container>
                        <Grid item xs={4}>
                            <img src='https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/returns-box-qs.png' alt='returns-box' height={47.1} width={47.1} />
                        </Grid>
                        <Grid item xs={8}>
                            <a href='/' style={{ textDecoration: 'none' }}>
                                <Typography sx={{ fontSize: '14px', lineHeight: '20px', color: '#000000' }}>Returns & Refunds</Typography>
                                <Typography sx={{ fontSize: '12px', lineHeight: '16px', color: '#565959' }}>Exchange or return items</Typography>
                            </a>
                        </Grid>
                    </Grid>

                    <Grid container>
                        <Grid item xs={4}>
                            <img src='https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/Prime_clear-bg.png' alt='Prime' height={47.1} width={47.1} />
                        </Grid>
                        <Grid item xs={8}>
                            <a href='/' style={{ textDecoration: 'none' }}>
                                <Typography sx={{ fontSize: '14px', lineHeight: '20px', color: '#000000' }}>Manage Prime</Typography>
                                <Typography sx={{ fontSize: '12px', lineHeight: '16px', color: '#565959' }}>Cancle or view benefits</Typography>
                            </a>
                        </Grid>
                    </Grid>

                    <Grid container>
                        <Grid item xs={4}>
                            <img src='https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/Payments_clear-bg.png' alt='Payments' height={47.1} width={47.1} />
                        </Grid>
                        <Grid item xs={8}>
                            <a href='/' style={{ textDecoration: 'none' }}>
                                <Typography sx={{ fontSize: '14px', lineHeight: '20px', color: '#000000' }}>Payment Settings</Typography>
                                <Typography sx={{ fontSize: '12px', lineHeight: '16px', color: '#565959' }}>Add or edit payment methods</Typography>
                            </a>
                        </Grid>
                    </Grid>

                    <Grid container>
                        <Grid item xs={4}>
                            <img src='https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/carrier-qs.png' alt='carrier' height={47.1} width={47.1} />
                        </Grid>
                        <Grid item xs={8}>
                            <a href='/' style={{ textDecoration: 'none' }}>
                                <Typography sx={{ fontSize: '14px', lineHeight: '20px', color: '#000000' }}>Carrier Info</Typography>
                                <Typography sx={{ fontSize: '12px', lineHeight: '16px', color: '#565959' }}>Shipping carrier information</Typography>
                            </a>
                        </Grid>
                    </Grid>

                    <Grid container>
                        <Grid item xs={4}>
                            <img src='https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/profile-qs.png' alt='profile' height={47.1} width={47.1} />
                        </Grid>
                        <Grid item xs={8}>
                            <a href='/' style={{ textDecoration: 'none' }}>
                                <Typography sx={{ fontSize: '14px', lineHeight: '20px', color: '#000000' }}>Account Settings</Typography>
                                <Typography sx={{ fontSize: '12px', lineHeight: '16px', color: '#565959' }}>Change email or password</Typography>
                            </a>
                        </Grid>
                    </Grid>

                </CardContent>
            </Card>
        </div>
    )
}

export default QuickSolution