import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'

function Gift() {
    return (
        <div style={{ marginLeft: 2, marginTop: 2, marginBottom: 2 }}>
            <Card style={{ width: 240 }}>
                <CardContent>
                    <Typography><a href='/' style={{textDecoration: 'none', color: '#007185', fontSize: '14px'}}>All Help Topics</a></Typography>
                    <hr/>   
                    <Typography component='div' sx={{ fontSize: '18px' }}>Gifts, Gift Cards & Registries</Typography>
                    <Typography component='div' sx={{ fontSize: '12px' }}><a href='/' style={{ textDecoration: 'none', color: '#333' }}>Buying & Sending Gift Cards</a></Typography>
                    <Typography component='div' sx={{ fontSize: '12px', fontWeight: 700 }}>Redeeming Gift Cards</Typography>
                    <Typography component='div' sx={{ fontSize: '12px' }}><a href='/' style={{ textDecoration: 'none', color: '#333' }}>Gift Cards</a></Typography>
                    <Typography component='div' sx={{ fontSize: '12px' }}><a href='/' style={{ textDecoration: 'none', color: '#333' }}>Lists</a></Typography>
                    <Typography component='div' sx={{ fontSize: '12px' }}><a href='/' style={{ textDecoration: 'none', color: '#333' }}>Wedding Registries</a></Typography>
                    <Typography component='div' sx={{ fontSize: '12px' }}><a href='/' style={{ textDecoration: 'none', color: '#333' }}>Baby Redistries</a></Typography>
                    <Typography component='div' sx={{ fontSize: '12px' }}><a href='/' style={{ textDecoration: 'none', color: '#333' }}>Gift Orders</a></Typography>
                    <Typography component='div' sx={{ fontSize: '12px' }}><a href='/' style={{ textDecoration: 'none', color: '#333' }}>Birthday Gift List</a></Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Gift