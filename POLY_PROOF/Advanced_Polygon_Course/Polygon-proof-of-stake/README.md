# ETH PROOF | Polygon - Proof of Stake | Assignment - 1

## Getting Started

### Description

This program consists of a simple Smart contract and corresponding scripts, for minting Non-Fungible Tokens (NFTs) in batch. An extended version of ERC721 standard contract is being used here, namely [ERC721A, a brainchild of the Azuki Team](https://chiru-labs.github.io/ERC721A). Using this project, one can batchmint NFTs, reducing transaction costs on Ethereum, and can tranfer those NFTs to the Polygon network using a FxERC721RootTunnel.

### Pre-configuration

- Place your wallet address and private key into a  `.env`  file as shown in  `.env.sample`.
- Download or copy ABI from [FxERC721RootTunnel Contract on Goerli](https://goerli.etherscan.io/address/0xF9bc4a80464E48369303196645e876c8C7D972de#code) and place it in the  `assets`  directory as  `fxRootContractABI.json`.

### Install dependencies

        npm install

### Executing program

- While the scripts are divided into separate commands, we can still run  `npm start`  to run first 4 commands (viz.: compile, deploy, mint and transfer) merged into one.

- To compile:

        npm run compile

- To deploy:

        npm run deploy

- To mint:

        npm run mint

- To transfer:

        npm run transfer

- To check balance:

        npm run balance

#### Note:
- Deployment, minting and transfer are being done on the Goerli testnet.
- After transfer, we need to wait for around half an hour for the transactions to show up in the Polygon network.
- When the transactions are available on the Polygon network, we can copy the contract address from there and place it in  `contractAddress`  variable inside  `4_checkbalance.js`  script, before running it.

