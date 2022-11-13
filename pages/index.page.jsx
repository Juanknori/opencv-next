import { Typography } from '@mui/material';

import { MainLayout } from '../components/layouts';

const Home = () => {
  return (
    <MainLayout title={'Home'} pageDescription={'OpenCV con Next'}>
        <Typography variant='h1' component='h1'>Next</Typography>
        <Typography variant='h2' sx={{ mb: 1 }}>OpenCV</Typography>
    </MainLayout>
  )
}

export default Home
