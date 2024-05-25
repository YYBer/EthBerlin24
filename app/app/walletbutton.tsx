import { Button } from '@mui/material';
import Web3 from 'web3'; // Import Web3 library

const WalletButton = () => {
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        // Request account access
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        // Initialize Web3 with MetaMask provider
        const web3 = new Web3(window.ethereum);
        // Now you can use web3 to interact with the Ethereum blockchain
        const accounts = await web3.eth.getAccounts();
        console.log('Connected to MetaMask. User address:', accounts[0]);
        // Perform additional actions, such as fetching user data or interacting with contracts
      } catch (error) {
        console.error('Error connecting to MetaMask:', error);
      }
    } else {
      alert('MetaMask extension not detected. Please install MetaMask.');
    }
  };

  return (
    <Button variant="contained" color="primary" onClick={connectWallet}>
      Connect with Wallet
    </Button>
  );
};

export default WalletButton;


// const _connectToMetaMask = useCallback(async () => {
//     const ethereum = window.ethereum;
//     // Check if MetaMask is installed
//     if (typeof ethereum !== "undefined") {
//       try {
//         // Request access to the user's MetaMask accounts
//         const accounts = await ethereum.request({
//           method: "eth_requestAccounts",
//         });
//         // Get the connected Ethereum address
//         const address = accounts[0];
//         // Create an ethers.js provider using the injected provider from MetaMask
//         const provider = new ethers.BrowserProvider(ethereum);
//         // Get the account balance
//         const balance = await provider.getBalance(address);
//         // Get the network ID from MetaMask
//         const network = await provider.getNetwork();
//         // Update state with the results
//         setAccountData({
//           address,
//           balance: ethers.formatEther(balance),
//           // The chainId property is a bigint, change to a string
//           chainId: network.chainId.toString(),
//           network: network.name,
//         });
//       } catch (error: Error | any) {
//         alert(`Error connecting to MetaMask: ${error?.message ?? error}`);
//       }
//     } else {
//       alert("MetaMask not installed");
//     }
//   }, []);