import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

import Card from '../Card'


export default function HomePage() {

  return (
    <>
      <Container>
        <Grid container spacing={5}>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </Grid>
      </Container>
    </>
  )
}