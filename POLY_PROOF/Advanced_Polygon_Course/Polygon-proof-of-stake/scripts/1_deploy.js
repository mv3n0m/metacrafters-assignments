const hre = require('hardhat');
const fs = require('fs');


async function main() {
  const contract = await hre.ethers.deployContract("CustomNFT");
  const contractAddress = await contract.getAddress();

  console.log(`Contract deployed @ ${ contractAddress }`);

  fs.writeFileSync('assets/config.json', JSON.stringify({ contractAddress, "fxERC721RootAddress": "0xF9bc4a80464E48369303196645e876c8C7D972de" }));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
