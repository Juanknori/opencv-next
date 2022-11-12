import NextLink from 'next/link';

import { AppBar, Badge, Box, Button, IconButton, Link, Toolbar, Typography } from '@mui/material';
import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';

export const Navbar = () => {
  return (
    <AppBar>
        <Toolbar>
            <NextLink href='/' passHref>
                <Link display='flex' alignItems='center'>
                    <Typography variant='h6'>Next |</Typography>
                    <Typography sx={{ ml: 0.5 }}>OpenCV</Typography>
                </Link>  
            </NextLink>

            <Box flex={ 1 } />

            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                {/* <NextLink href='/opencv/image' passHref>
                    <Link>
                        <Button>Image</Button>
                    </Link>
                </NextLink>
                <NextLink href='/opencv/mask' passHref>
                    <Link>
                        <Button>Mask</Button>
                    </Link>
                </NextLink> */}
                <NextLink href='/opencv/face-detected' passHref>
                    <Link>
                        <Button>Face-Detected</Button>
                    </Link>
                </NextLink>
                {/* <NextLink href='/opencv/screenshot1' passHref>
                    <Link>
                        <Button>ScreenShot1</Button>
                    </Link>
                </NextLink>
                <NextLink href='/opencv/face-detected1' passHref>
                    <Link>
                        <Button>Face-Detected1</Button>
                    </Link>
                </NextLink> */}
            </Box>


            <Box flex={ 1 } />

            <Button>
                Menú
            </Button>

        </Toolbar>
    </AppBar>
  )
}
