import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Rating from '@mui/material/Rating';


export default function Card() { return(
<>
    <Grid xs={3}>
        <Paper>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Latte_and_dark_coffee.jpg/1200px-Latte_and_dark_coffee.jpg" alt="" className='cardImage'/>
            <Box padding={1.5} sx={{
                textAlign:'center',
                borderBottom: 'dotted'
        }}>
            <Typography variant="subtitle2" component="h2">
                <a href='/'>Title</a>
            </Typography>
            </Box>
            <Box padding={1}>
                <Typography variant="body1" component="div">
                    <MenuBookIcon/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar ipsum eget ante hendrerit fermentum. Praesent porta maximus posuere. In non purus lobortis lectus venenatis euismod. In venenatis, ex pellentesque dignissim scelerisque, augue quam sollicitudin massa, ut commodo risus ipsum vitae magna.
                </Typography>
            </Box>

            <Box sx={{
                display:'flex',
                alignItems:'center',
            }}>
                <Rating precision={.5} name='Rating' value={2.5} size='small' readOnly/>
                <Typography variant='body2' component='p' marginLeft={1.5}>
                    Ratings (456 Reviews)
                </Typography>
            </Box>
        </Paper>
    </Grid>
</>
)}