import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'

function Gift() {
    return (
        <div style={{ marginLeft: 2, marginTop: 2, marginBottom: 2 }}>
            <Card style={{ width: 203 }}>
                <CardContent>
                    <Typography><a href='/' style={{textDecoration: 'none', color: '#007185', fontSize: '14px'}}>All Help Topics</a></Typography>
                    <hr/>   
                    <Typography component='div' sx={{ fontSize: '18px' }}>Gift Cards</Typography>
                    <Typography component='div' sx={{ fontSize: '12px' }}><a href='/' style={{ textDecoration: 'none', color: '#333' }}>Add Cash to Your Amazon.com Gift Card Balance</a></Typography>
                    <Typography component='div' sx={{ fontSize: '12px' }}><a href='/' style={{ textDecoration: 'none', color: '#333' }}>Buying Amazon.com Gift Cards at a Store</a></Typography>
                    <Typography component='div' sx={{ fontSize: '12px' }}><a href='/' style={{ textDecoration: 'none', color: '#333' }}>Order Gift Cards</a></Typography>
                    <Typography component='div' sx={{ fontSize: '12px' }}><a href='/' style={{ textDecoration: 'none', color: '#333' }}>Add a Custom Image to Gift Cards</a></Typography>
                    <Typography component='div' sx={{ fontSize: '12px' }}><a href='/' style={{ textDecoration: 'none', color: '#333' }}>Resend a Digital Gift Card</a></Typography>
                    <Typography component='div' sx={{ fontSize: '12px' }}><a href='/' style={{ textDecoration: 'none', color: '#333' }}>Reload Your Balance</a></Typography>
                    <Typography component='div' sx={{ fontSize: '12px' }}><a href='/' style={{ textDecoration: 'none', color: '#333' }}>Modify or Turn off Your Amazon Gift Card Balance Auto-Reload</a></Typography>
                    <Typography component='div' sx={{ fontSize: '12px' }}><a href='/' style={{ textDecoration: 'none', color: '#333' }}>Manage Your Email and Text Message Gift Card Delivery Date</a></Typography>
                    <Typography component='div' sx={{ fontSize: '12px' }}><a href='/' style={{ textDecoration: 'none', color: '#333' }}>Print an Amazon.com Gift Card</a></Typography>

                    <Typography component='div' sx={{ fontSize: '12px', fontWeight: 700 }}>Redeeming Gift Cards</Typography>
                    <Typography component='div' sx={{ fontSize: '12px' }}><a href='/' style={{ textDecoration: 'none', color: '#333' }}>Keep Your Gift Card Balance to Use Later</a></Typography>
                    <Typography component='div' sx={{ fontSize: '12px' }}><a href='/' style={{ textDecoration: 'none', color: '#333' }}>Load an Anytime Gift Card</a></Typography>
                    <Typography component='div' sx={{ fontSize: '12px' }}><a href='/' style={{ textDecoration: 'none', color: '#333' }}>About Amazon.com Gift Card Restrictions and Prohibited Activities</a></Typography>
                    <Typography component='div' sx={{ fontSize: '12px' }}><a href='/' style={{ textDecoration: 'none', color: '#333' }}>Gift Card Redemption Issues</a></Typography>
                    <Typography component='div' sx={{ fontSize: '12px' }}><a href='/' style={{ textDecoration: 'none', color: '#333' }}>Use the Corporate Gift Card Email Delivery Service</a></Typography>
                    <Typography component='div' sx={{ fontSize: '12px' }}><a href='/' style={{ textDecoration: 'none', color: '#333' }}>Amazon Corporate Gift Cards</a></Typography>
                    <Typography component='div' sx={{ fontSize: '12px' }}><a href='/' style={{ textDecoration: 'none', color: '#333' }}>Corporate Gift Card Email Delivery Service</a></Typography>
                    <Typography component='div' sx={{ fontSize: '12px' }}><a href='/' style={{ textDecoration: 'none', color: '#333' }}>Customized Messages with Corporate Gift Cards</a></Typography>
                    <Typography component='div' sx={{ fontSize: '12px' }}><a href='/' style={{ textDecoration: 'none', color: '#333' }}>Uploading Custom Images to an Amazon.com Gift Card</a></Typography>
                    <Typography component='div' sx={{ fontSize: '12px' }}><a href='/' style={{ textDecoration: 'none', color: '#333' }}>Amazon.com Balance and Amazon.com Gift Card Terms and Conditions</a></Typography>
                    <Typography component='div' sx={{ fontSize: '12px' }}><a href='/' style={{ textDecoration: 'none', color: '#333' }}>Amazon.com Gift Card Content Submission Terms and Conditions</a></Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Gift