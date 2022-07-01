import * as React from 'react';
import { AppBar, Container} from '@mui/material';
const NavbarMini = () => {

  return (
    <AppBar position="static" sx={{ bgcolor: '#1e2631', height: '39px', p:0.5}}>
      <Container maxWidth="xl">
        <div>
          <span style={{padding: 10}}>All</span>
          <a href='/' className='miniheader_item'>Today's Deals</a>
          <a href='/' className='miniheader_item'>Customer Service</a>
          <a href='/' className='miniheader_item'>Registry</a>
          <a href='/' className='miniheader_item'>Gift Cards</a>
          <a href='/' className='miniheader_item'>Sell</a>

        </div>
      </Container>
    </AppBar>
  );
};
export default NavbarMini;
