'use client';
import { useState, useCallback } from "react";
import Head from 'next/head';
import { Container, Box, Typography, TextField, Button, InputAdornment } from '@mui/material';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import styles from '../styles/Home.module.css';
import { ethers }  from "ethers";
import { Web3Provider } from '@ethersproject/providers';


export interface AccountType {
  address?: string;
  balance?: string;
  chainId?: string;
  network?: string;
}

export default function Home() {
  const [accountData, setAccountData] = useState<AccountType>({});
  // const [isConnected, setIsConnected] = useState(false);

  const _connectToMetaMask = useCallback(async () => {
    // const { ethereum } = window.ethereum;
    const ethereum = (window as any).ethereum;

    if (typeof ethereum !== "undefined") {
      try {
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        const address = accounts[0];
        const provider = new Web3Provider((window as any).ethereum);
        const balance = await provider.getBalance(address);
        const network = await provider.getNetwork();
      
        setAccountData({
          address,
          balance: ethers.formatEther(balance.toString()),
          chainId: network.chainId.toString(),
          network: network.name,
        });
        // setIsConnected(true);
      } catch (error: Error | any) {
        alert(`Error connecting to MetaMask: ${error?.message ?? error}`);
      }
    } else {
      // setIsConnected(false);
      alert("MetaMask not installed");
    }
  }, []);

  return (
    <>
      <Head>
        <title>FHE Swap</title>
        <meta name="description" content="A swap using Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Container className={styles.container}>
        {isConnected ? (
          <Box className={styles.accountBox}>
            <Typography variant="h6">Address: {accountData.address}</Typography>
            <Typography variant="h6">Balance: {accountData.balance} ETH</Typography>
            <Typography variant="h6">Network: {accountData.network}</Typography>
          </Box>
        ) : (
          <Typography variant="h6">Please connect to MetaMask</Typography>
        )}
      </Container> */}

      <header className={styles.header}>
        <img src="/logo_small.png" alt="FHE Swap Logo" className={styles.logo} />
        <Typography variant="h4" component="h1" className={styles.title}>
          FHE Swap
        </Typography>
        {/* <button className={styles.walletButton} onClick={_connectToMetaMask}>
          Connect with Wallet
        </button> */}
        <Button className={styles.walletButton} onClick={_connectToMetaMask}>
          Connect with Wallet
          {/* {isConnected ? '1' : '2'} */}
        </Button>
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
