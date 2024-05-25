import Head from "next/head";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>FHE Swap</title>
        <meta name="description" content="A swap using Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <img
          src="/logo_small.png"
          alt="FHE Swap Logo"
          className={styles.logo}
        />
        <Typography variant="h4" component="h1" className={styles.title}>
          FHE Swap
        </Typography>
        <button className={styles.walletButton}>Connect with Wallet</button>
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

// import Head from 'next/head';
// import { Container, Box, Typography, TextField, Button, InputAdornment } from '@mui/material';
// import SwapVertIcon from '@mui/icons-material/SwapVert';
// import styles from '../styles/Home.module.css';

// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>FHE Swap</title>
//         <meta name="description" content="A Uniswap clone using Next.js" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <header className="w-full p-5 bg-blue-600 text-white text-center flex items-center justify-center">
//         <img src="../public/logo.png" alt="FHE Swap Logo" className="h-10 mr-3" />
//         <Typography variant="h4" component="h1">
//           FHE Swap
//         </Typography>
//       </header>
//       <Container className="flex flex-col items-center justify-center h-full">
//         <Box className="w-full max-w-md p-5 rounded-lg shadow-lg bg-white">
//           <Typography variant="h5" component="h2" gutterBottom>
//             Swap
//           </Typography>
//           <TextField
//             fullWidth
//             label="From"
//             variant="outlined"
//             margin="normal"
//             InputProps={{
//               endAdornment: <InputAdornment position="end">ETH</InputAdornment>,
//             }}
//           />
//           <TextField
//             fullWidth
//             label="To"
//             variant="outlined"
//             margin="normal"
//             InputProps={{
//               endAdornment: <InputAdornment position="end">DAI</InputAdornment>,
//             }}
//           />
//           <Button
//             variant="contained"
//             startIcon={<SwapVertIcon />}
//             className="mt-5 w-full p-3 bg-blue-600 text-white hover:bg-blue-700"
//           >
//             Swap
//           </Button>
//         </Box>
//       </Container>
//     </>
//   );
// }
