import { Container, Grid, Typography } from '@mui/material'
import React from 'react'

function Footer() {
  return (
    <div style={{ backgroundColor: '#232F3E' , marginTop:10}}>
      <Container maxWidth="lg" sx={{ p: 6, pb:10 }}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Typography sx={{ fontWeight: 700, fontSize: '16px', color: '#FFF', lineHeight: 2 }} >Get to Know Us</Typography>
            <Typography component="div" sx={{ lineHeight: 1.75 }}><a href="/" style={{ textDecoration: 'none', color: '#DDD', fontSize: '14px' }}>Careers </a></Typography>
            <Typography component="div" sx={{ lineHeight: 1.75 }}><a href="/" style={{ textDecoration: 'none', color: '#DDD', fontSize: '14px' }}>Blog </a></Typography>
            <Typography component="div" sx={{ lineHeight: 1.75 }}><a href="/" style={{ textDecoration: 'none', color: '#DDD', fontSize: '14px' }}>About Amazon </a></Typography>
            <Typography component="div" sx={{ lineHeight: 1.75 }}><a href="/" style={{ textDecoration: 'none', color: '#DDD', fontSize: '14px' }}>Investor Relations</a></Typography>
            <Typography component="div" sx={{ lineHeight: 1.75 }}><a href="/" style={{ textDecoration: 'none', color: '#DDD', fontSize: '14px' }}>Amazon Devices</a></Typography>
            <Typography component="div" sx={{ lineHeight: 1.75 }}><a href="/" style={{ textDecoration: 'none', color: '#DDD', fontSize: '14px' }}>Amazon Science </a></Typography>
          </Grid>

          <Grid item xs={3}>
            <Typography sx={{ fontWeight: 700, fontSize: '16px', color: '#FFF', lineHeight: 2 }} >Make Money with Us</Typography>
            <Typography component="div" sx={{ lineHeight: 1.75 }}><a href="/" style={{ textDecoration: 'none', color: '#DDD', fontSize: '14px' }}>Sell products on Amazon</a></Typography>
            <Typography component="div" sx={{ lineHeight: 1.75 }}><a href="/" style={{ textDecoration: 'none', color: '#DDD', fontSize: '14px' }}>Sell on Amazon Business</a></Typography>
            <Typography component="div" sx={{ lineHeight: 1.75 }}><a href="/" style={{ textDecoration: 'none', color: '#DDD', fontSize: '14px' }}>Sell apps on Amazon</a></Typography>
            <Typography component="div" sx={{ lineHeight: 1.75 }}><a href="/" style={{ textDecoration: 'none', color: '#DDD', fontSize: '14px' }}>Become an Affiliate</a></Typography>
            <Typography component="div" sx={{ lineHeight: 1.75 }}><a href="/" style={{ textDecoration: 'none', color: '#DDD', fontSize: '14px' }}>Advertise Your Products</a></Typography>
            <Typography component="div" sx={{ lineHeight: 1.75 }}><a href="/" style={{ textDecoration: 'none', color: '#DDD', fontSize: '14px' }}>Self-Publish with Us</a></Typography>
            <Typography component="div" sx={{ lineHeight: 1.75 }}><a href="/" style={{ textDecoration: 'none', color: '#DDD', fontSize: '14px' }}>Host an Amazon Hub</a></Typography>
            <Typography component="div" sx={{ lineHeight: 1.75 }}><a href="/" style={{ textDecoration: 'none', color: '#DDD', fontSize: '14px' }}> ›See More Make Money with Us </a></Typography>
          </Grid>

          <Grid item xs={4}>
            <Typography sx={{ fontWeight: 700, fontSize: '16px', color: '#FFF', lineHeight: 2 }} >Amazon Payment Products</Typography>
            <Typography component="div" sx={{ lineHeight: 1.75 }}><a href="/" style={{ textDecoration: 'none', color: '#DDD', fontSize: '14px' }}>Amazon Business Card</a></Typography>
            <Typography component="div" sx={{ lineHeight: 1.75 }}><a href="/" style={{ textDecoration: 'none', color: '#DDD', fontSize: '14px' }}>Shop with Points</a></Typography>
            <Typography component="div" sx={{ lineHeight: 1.75 }}><a href="/" style={{ textDecoration: 'none', color: '#DDD', fontSize: '14px' }}>Reload Your Balance</a></Typography>
            <Typography component="div" sx={{ lineHeight: 1.75 }}><a href="/" style={{ textDecoration: 'none', color: '#DDD', fontSize: '14px' }}>Amazon Currency Converter</a></Typography>
          </Grid>

          <Grid item xs={2}>
            <Typography sx={{ fontWeight: 700, fontSize: '16px', color: '#FFF', lineHeight: 2 }} >Let Us Help You</Typography>
            <Typography component="div" sx={{ lineHeight: 1.75 }}><a href="/" style={{ textDecoration: 'none', color: '#DDD', fontSize: '14px' }}>Amazon and COVID-19</a></Typography>
            <Typography component="div" sx={{ lineHeight: 1.75 }}><a href="/" style={{ textDecoration: 'none', color: '#DDD', fontSize: '14px' }}>Your Account</a></Typography>
            <Typography component="div" sx={{ lineHeight: 1.75 }}><a href="/" style={{ textDecoration: 'none', color: '#DDD', fontSize: '14px' }}>Your Orders</a></Typography>
            <Typography component="div" sx={{ lineHeight: 1.75 }}><a href="/" style={{ textDecoration: 'none', color: '#DDD', fontSize: '14px' }}>Shipping Rates & Policies</a></Typography>
            <Typography component="div" sx={{ lineHeight: 1.75 }}><a href="/" style={{ textDecoration: 'none', color: '#DDD', fontSize: '14px' }}>Returns & Replacements</a></Typography>
            <Typography component="div" sx={{ lineHeight: 1.75 }}><a href="/" style={{ textDecoration: 'none', color: '#DDD', fontSize: '14px' }}>Manage Your Content and Devices</a></Typography>
            <Typography component="div" sx={{ lineHeight: 1.75 }}><a href="/" style={{ textDecoration: 'none', color: '#DDD', fontSize: '14px' }}>Amazon Assistant</a></Typography>
            <Typography component="div" sx={{ lineHeight: 1.75 }}><a href="/" style={{ textDecoration: 'none', color: '#DDD', fontSize: '14px' }}>Help</a></Typography>
          </Grid>

        </Grid>
      </Container>
    </div>
  )
}

export default Footer