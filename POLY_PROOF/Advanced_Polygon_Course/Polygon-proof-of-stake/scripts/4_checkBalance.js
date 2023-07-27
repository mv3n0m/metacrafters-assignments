require('dotenv').config()
const hre = require('hardhat');
const fs = require('fs');


const contractAddress = ""
const abiFile = "artifacts/contracts/CustomNFT.sol/CustomNFT.json"

async function main() {

  if (!fs.existsSync(abiFile)) throw "Contract not compiled!\nRun -> `npm run compile`"

  const { abi } = require(`../${abiFile}`)

  const walletAddress = process.env.WALLET_ADDR;
  if (!walletAddress) throw "Wallet Address not provided!"

  const contract = await hre.ethers.getContractAt(abi, contractAddress);

  console.log(`Total balance of ${walletAddress}: ${await contract.balanceOf(walletAddress)} tokens`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});