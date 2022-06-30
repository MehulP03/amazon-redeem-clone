import React from 'react'
import { Grid, Typography } from '@mui/material';
import Gift from './Gift';
import QuickSolution from './QuickSolution';
import FormComponent from './FormComponent';

function HelpCustomerService() {
    return (
        <div>
            <Typography component='div' sx={{ fontSize: '24px', fontWeight: 700, marginLeft: 2 }}> Help & Customer Service </Typography>
            <Grid container spcaing={2} sx={{ padding: '15px' }}>
                <Grid>
                    <div>
                        <Gift />
                        <QuickSolution />
                    </div>
                </Grid>
                <Grid>
                    <FormComponent />
                </Grid>
            </Grid>
        </div>
    )
}

export default HelpCustomerService