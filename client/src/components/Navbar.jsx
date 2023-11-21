import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import WTF from '../assets/Whatthefork.png'

export default function Nav() {
  return (
    <div role="presentation" className='Navbar'>

      <Box sx={{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between'
      }}>

      <Box sx={{
        display:'flex',
        alignItems:'center'}}>

        <Link href='/' underline='none'>
        <img src={WTF} alt="" id='logo'/>
        </Link>
        
        <Typography variant='h2' component='h1'>
          What the Fork?!
        </Typography>

      </Box>

      <Breadcrumbs aria-label="breadcrumb"  separator=' || ' sx={{
        justifyContent:'flex-end',
        marginRight:'10px'
      }}>
        <Box>
          <form id='Searching'>
            <input type='text' id='searchBar' name='searchBar' placeholder='Clam Chowder'/>
            <input type='submit' value='Search'/>
          </form>
        </Box> 

        <Link
          underline="hover"
          color="inherit"
          href="/">
          Create Recipe
        </Link>

        <Link underline="hover"
          color="inherit"
          href="/Login">Login
        </Link>

          <Link underline="hover"
          color="inherit"
          href="/SignUp">Sign up
        </Link>

      </Breadcrumbs>
      </Box>
    </div>
  );
}
