"use client";

// src/contexts/Web3Context.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import Web3 from 'web3';
import myPharma from '../../src/contracts/Pharma.json';

const Web3Context = createContext();



export const Web3Provider = ({ children }) => {
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [PharmaContract, setPharmaContract] = useState(null);

  useEffect(() => {
    const init = async () => {
      try {
        if (window.ethereum) {
          const web3Instance = new Web3(window.ethereum);
          setWeb3(web3Instance);

          const account = await window.ethereum.request({ method: 'eth_requestAccounts' });
          setAccounts(account);

          const contractInstance = new web3Instance.eth.Contract(myPharma.abi, myPharma.networks[1234].address);
          setPharmaContract(contractInstance);

          window.ethereum.on('accountsChanged', (accounts) => {
            setAccounts(accounts);
            window.location.reload();
          });

          window.ethereum.on('chainChanged', () => {
            window.location.reload();
          });
        } else {
          alert('Please install MetaMask!');
        }
      } catch (error) {
        console.error(error);
        alert('A Logged in metamask is required for fun functionality');
      }
    };
    if (!web3){
      init();
    }

  }, []);

  return (
    <Web3Context.Provider value={{ web3, accounts, PharmaContract }}>
      {children}
    </Web3Context.Provider>
  );
};

export const useWeb3 = () => useContext(Web3Context);