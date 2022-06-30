
import { Button, Card, Container, Grid, Typography } from '@mui/material'
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'

function FormComponent() {
    return (
        <Container sx={{ marginTop: 6, width: 650 }}>
            <div style={{ p: 3, marginBottom: 30 }}>
                <Typography sx={{ fontSize: '18px', fontWeight: 700 }}> Find More Solution </Typography>
                <TextField id="outlined-basic" label={<SearchIcon />} variant="outlined" fullWidth />
            </div>

            <div style={{ marginTop: 10, marginBottom: 20 }}>
                <a href='/' style={{ textDecoration: 'none' }}><Typography sx={{ fontSize: '12px', color: '#007185' }}>Gifts, Gift Cards & Registries - Gift Cards </Typography></a>
                <Typography sx={{ fontSize: '28px' }}>Redeeming Gift Cards</Typography>
                <Typography sx={{ fontSize: '16px', color: '#555' }}>When you redeem an Amazon.com Gift Card or gift voucher to your account, the funds are stored in <b>Your Account</b> and will automatically apply to your next eligible order.</Typography>
            </div>
            <hr />

            <div style={{ marginTop: 15, marginBottom: 15, fontSize: '14px' }}>
                <Typography>To redeem a gift card: </Typography>
                <ol>
                    <li>Find the claim code.</li>
                    <li>Go to <a href="/" style={{ textDecoration: 'none', color: '#007185' }}>Redeem a Gift Card</a>.</li>
                    <li>Enter your claim code and select Apply to Your Balance.</li>
                </ol>
            </div>
            <div style={{ marginTop: 10, marginBottom: 20 }}>
                <Typography sx={{ fontSize: '14px', fontWeight: 700 }}>Note:</Typography>
                <ul>
                    <li>If you want to keep your gift card balance to spend on another occasion, see<a href='/' style={{textDecoration:'none', color: '#007185'}}> Keep Your Gift Card Balance to Use Later</a>. </li>
                    <li>If you haven't already redeemed your gift card to your account, you can enter your claim code during checkout by entering the claim code in the <b>Gift Cards & promotional codes</b> field on the <b>Review your order</b> page. </li>
                    <li>If your order total is more than your gift card balance, we'll charge the remaining amount to your default payment method. Often you may use Amazon Gift Cards as a partial form of payment for an item. In some cases, if you are adding Amazon Gift Cards to your Amazon account after the order is placed but not shipped, any new Amazon Gift Card added to your Amazon account will be automatically applied to the order placed once it's shipped.</li>
                    <li>You can't use a gift card to purchase other gift cards.</li>
                    <li>If you are having issues redeeming your gift card, visit our <a href='/' style={{textDecoration:'none', color: '#007185'}}>Gift Card Redemption Issues</a> help page.</li>
                </ul>
            </div>
            <hr />

            <div style={{ marginBottom: 20 }}>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <Typography sx={{ fontSize: '13px', fontWeight: 700 }}>Manage a Gift Card</Typography>
                    </Grid>
                    <Grid item xs={9} >
                        <Typography><a href='/' style={{ textDecoration: 'none', color: '#007185', fontSize: '13px' }}>Save Your Gift Card Balance</a></Typography>
                        <Typography><a href='/' style={{ textDecoration: 'none', color: '#007185', fontSize: '13px' }}>Print a Gift Card</a></Typography>
                    </Grid>
                </Grid>
            </div>

            <div style={{ marginTop: 15, marginBottom: 15 }}>
                <Card sx={{ width: 362, p: 3 }}>
                    <Typography sx={{ p: 2 }}>Was this information helpful?</Typography>
                    <Button variant='outlined' sx={{ marginLeft: 2 }}>Yes</Button>
                    <Button variant='outlined' sx={{ marginLeft: 2 }}>No</Button>
                </Card>
            </div>
        </Container>
    )
}

export default FormComponent