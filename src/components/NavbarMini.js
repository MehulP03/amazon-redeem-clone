import * as React from 'react';
import { AppBar, Button, Container} from '@mui/material';

const NavbarMini = () => {

  return (
    <AppBar position="static" sx={{ bgcolor: '#1e2631', height: '40px' }}>
      <Container maxWidth="xl">
        <div>
          <Button variant="outlined" sx={{color: '#fff', border: 'none'}}>Todays's Deals</Button>
          <Button variant="outlined" sx={{color: '#fff', border: 'none'}}>Customer Service</Button>
          <Button variant="outlined" sx={{color: '#fff', border: 'none'}}>Registry</Button>
          <Button variant="outlined" sx={{color: '#fff', border: 'none'}}>Gift Cards</Button>
          <Button variant="outlined" sx={{color: '#fff', border: 'none'}}>Sell</Button>

        </div>
      </Container>
    </AppBar>
  );
};
export default NavbarMini;
