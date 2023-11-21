import * as React from 'react'
import { Container, Typography, Rating, Grid, List, ListItem, ListItemButton, Checkbox, ListItemIcon, ListItemText} from '@mui/material'

export default function Recipe () {

    const list = [0, 1, 2, 3, 4 ,5]
    const instructions = [
      'Like a rock',
      'You must be hard',
      'Like an oak',
      'You must stand firm',
      'Cut quick',
      'Like my blade',
      'Think fast',
      'Unafraid'
    ]

    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (value) => () => {
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];
  
      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }
  
      setChecked(newChecked);
    };

    return (<>
    {/* Top container for general description */}
        <Container sx={{display:'flex', backgroundColor:'secondary.main'}}>
            <Grid container element='div' spacing={5}>
                <Grid item xs={5} sx={{textAlign:'center'}}>
                    <Typography variant='h2' component='h2'>Recipe Name</Typography>
                    
                    <Grid container>
                        <Grid item xs={4}>
                            <Typography>Prep Time</Typography>
                            <Typography>5 Minutes</Typography>
                        </Grid>

                        <Grid item xs={4}>
                            <Typography>Cook Time</Typography>
                            <Typography>10 Minutes</Typography>
                        </Grid>

                        <Grid item xs={4}>
                            <Typography>Total Time</Typography>
                            <Typography>15 Minutes</Typography>
                        </Grid>
                    </Grid>
                    <Rating precision={.5} name='Rating' value={2.5} size='large' readOnly/>
                    <Typography variant='body1' component='p'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare ut nulla ac condimentum. Ut hendrerit lectus nunc, vel rhoncus massa euismod et. Aliquam cursus ante eget magna maximus rutrum. Phasellus sodales, nisl accumsan suscipit venenatis, risus augue suscipit nunc, nec faucibus nisl eros sit amet eros. Aliquam commodo ullamcorper elit vel lacinia. Quisque imperdiet neque in nulla aliquet, nec rhoncus lectus mattis. Nam eu ullamcorper orci, non posuere risus. Aliquam tellus turpis, consectetur sed nibh eget, dapibus tincidunt felis. Nunc vel dolor eleifend, vehicula felis ut, posuere urna. Cras sapien risus, interdum quis massa nec, rhoncus auctor augue. Sed eget mollis ligula, sed tristique elit. Aenean eu faucibus mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
                    </Typography>
                </Grid>

                <Grid item xs={7}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Latte_and_dark_coffee.jpg/1200px-Latte_and_dark_coffee.jpg" alt="" className='recipeImage' sx={{minWidth:'100%'}}/>
                </Grid>
            </Grid>
        </Container>

        {/* Inconsequential divider */}
        <Container sx={{backgroundColor:'white', height:'5px', marginTop:'5px', marginBottom:'5px'}}></Container>
        
        {/* Bottom container for ingredients and instructions */}
        <Container sx={{backgroundColor:'pink'}}>
          <Grid container>
            {/* Ingredients Grid */}
            <Grid item xs={6} sx={{marginTop:'10px'}}>
              <Typography variant='h4' component='h3'>
                Ingredients
              </Typography>

              <List sx={{ width: '100%', maxWidth: 360}}>
                {list.map((value) => {
                const labelId = `checkbox-list-label-${value}`;
                return (
                <ListItem key={value} disablePadding>

                <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={checked.indexOf(value) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ 'aria-labelledby': labelId }}
                    />
                  </ListItemIcon>
                  <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
                </ListItemButton>
              </ListItem>
                      );})}
                </List>
            </Grid>
                {/* Instructions grid */}
            <Grid item xs={6} sx={{marginTop:'10px'}}>
            <Typography variant='h4' component='h3'>
                Instructions
              </Typography>

              <List sx={{ width: '100%', maxWidth: 360}}>
                {instructions.map((instruction, index) => {
                const labelId = `instructions-list-label-${index}`;
                return (
                <ListItem key={index} disablePadding>

                <ListItemButton role={undefined}>
                  <ListItemIcon>
                    <span role='img' aria-label='bullet point'>
                      &#8226;
                    </span>
                  </ListItemIcon>
                  <ListItemText id={labelId} primary={instruction} />
                </ListItemButton>
              </ListItem>
                      );})}
                </List>
            </Grid>
          </Grid>
          
        </Container>
        </>)}