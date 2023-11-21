import { Container, Typography, Link, Box, Breadcrumbs } from '@mui/material'

export default function Footer() {
        
    return(<footer>
        <Container sx={{
            textAlign: 'center', display:'flex', flexDirection:'column', alignItems:'center'
        }}>
                <Typography variant='h6' component='h3'>
                Created by 
                </Typography>
            <Typography variant='body2' component='p'>
                    <Breadcrumbs aria-label="breadcrumb" separator=' - '>
                        <Link href="https://github.com/Gabe-Velasquez" target="_blank" rel="noopener noreferrer" color='inherit' underline='hover'>
                            Gabe Velasquez
                        </Link>

                        <Link href="https://github.com/lukehevey" target="_blank" rel="noopener noreferrer" color='inherit' underline='hover'>
                            Luke Hevey
                        </Link>

                        <Link href="https://github.com/Achurale" target="_blank" rel="noopener noreferrer" color='inherit' underline='hover'>
                            Chuyi Lee
                        </Link>

                        <Link href="https://github.com/Hexteezy" target="_blank" rel="noopener noreferrer" color='inherit' underline='hover'>
                            Raul Valverde
                        </Link>
                    </Breadcrumbs>
            </Typography>
        </Container>
    </footer>)
}