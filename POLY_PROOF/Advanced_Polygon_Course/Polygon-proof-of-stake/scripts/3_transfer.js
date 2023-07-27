require('dotenv').config()
const hre = require("hardhat");
const fs = require('fs');

const fxAbiFile = "assets/fxRootContractABI.json"
const abiFile = "artifacts/contracts/CustomNFT.sol/CustomNFT.json"
const configFile = "assets/config.json"


async function main() {

  if (!fs.existsSync(fxAbiFile)) throw "FxContract not declared!"
  if (!fs.existsSync(abiFile)) throw "Contract not compiled!\nRun -> `npm run compile`"
  if (!fs.existsSync(configFile)) throw "Contract not deployed!\nRun -> `npm run deploy`"

  const fxAbi = require(`../${fxAbiFile}`)
  const { abi } = require(`../${abiFile}`)
  const { contractAddress, fxERC721RootAddress } = require(`../${configFile}`)

  const walletAddress = process.env.WALLET_ADDR;
  if (!walletAddress) throw "Wallet Address not provided!"

  const contract = await hre.ethers.getContractAt(abi, contractAddress);
  const fxContract = await hre.ethers.getContractAt(fxAbi, fxERC721RootAddress);

  const numberOfNFTs = 2;
  for (let i = 1; i <= numberOfNFTs; i++) {
    const approveTx = await contract.approve(fxERC721RootAddress, i);
    await approveTx.wait();

    console.log(`NFT Id ${i} approved`);

    const depositTx = await fxContract.deposit(contractAddress, walletAddress, i, "0x6556");
    await depositTx.wait();

    console.log(`NFT Id ${i} deposited`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});