require('dotenv').config()
const hre = require('hardhat');
const fs = require('fs');

const abiFile = "artifacts/contracts/CustomNFT.sol/CustomNFT.json"
const configFile = "assets/config.json"


async function main() {

  if (!fs.existsSync(abiFile)) throw "Contract not compiled!\nRun -> `npm run compile`"
  if (!fs.existsSync(configFile)) throw "Contract not deployed!\nRun -> `npm run deploy`"

  const { abi } = require(`../${abiFile}`)
  const { contractAddress } = require(`../${configFile}`)

  const walletAddress = process.env.WALLET_ADDR;
  if (!walletAddress) throw "Wallet Address not provided!"

  const contract = await hre.ethers.getContractAt(abi, contractAddress);

  console.log("Minting tokens...")
  const numberOfNFTs = 5;
  const tx = await contract.mint(walletAddress, numberOfNFTs, { value: 10 });
  await tx.wait();

  console.log(`Minted ${ numberOfNFTs } NFTs for ${ walletAddress }`)
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});