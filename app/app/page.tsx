import Head from 'next/head';
import { Container, Box, Typography, TextField, Button, InputAdornment } from '@mui/material';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>FHE Swap</title>
        <meta name="description" content="A swap using Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <Typography variant="h4" component="h1">
          Fhe Swap
        </Typography>
      </header>
      <Container className={styles.container}>
        <Box className={styles.swapBox}>
          <Typography variant="h5" component="h2" gutterBottom>
            Swap
          </Typography>
          <TextField
            fullWidth
            label="From"
            variant="outlined"
            margin="normal"
            InputProps={{
              endAdornment: <InputAdornment position="end">ETH</InputAdornment>,
            }}
          />
          <TextField
            fullWidth
            label="To"
            variant="outlined"
            margin="normal"
            InputProps={{
              endAdornment: <InputAdornment position="end">DAI</InputAdornment>,
            }}
          />
          <Button
            variant="contained"
            startIcon={<SwapVertIcon />}
            className={styles.button}
          >
            Swap
          </Button>
        </Box>
      </Container>
    </>
  );
}
