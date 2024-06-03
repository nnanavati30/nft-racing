// src/hooks/useWeb3.js
import { useEffect, useState } from "react";
import { ethers } from "ethers";

const useWeb3 = () => {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [address, setAddress] = useState(null);
  const [contract, setContract] = useState(null);

  useEffect(() => {
    const loadProvider = async () => {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(provider);
        const signer = provider.getSigner();
        setSigner(signer);

        const address = await signer.getAddress();
        setAddress(address);

        // const contractAddress = "YOUR_CONTRACT_ADDRESS"; // Replace with your contract address
        // const contractABI = [
        //   "function greeting() view returns (string)"
        // ];

        // const contract = new ethers.Contract(contractAddress, contractABI, signer);
        // setContract(contract);
      }
    };

    loadProvider();
  }, []);

  // Listen for account changes and update the address
  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", async (accounts) => {
        if (accounts.length > 0) {
          setAddress(accounts[0]);
        }
      });
    }
  }, []);

  return { provider, signer, contract, address };
};

export default useWeb3;
