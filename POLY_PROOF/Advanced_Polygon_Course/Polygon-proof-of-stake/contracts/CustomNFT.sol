// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";
import "erc721a/contracts/ERC721A.sol";


contract CustomNFT is ERC721A, Ownable {

    uint256 public constant mintPrice = 1;
    uint256 public constant maxMintPerTransaction = 5;
    uint256 public constant maxMintPerUser = 12;

    constructor() ERC721A("CustomNFT", "CNFT") {}

    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://QmQRcmYfDiRt7FK8r879jPhnUFtXMGKb6Rdr5D8sVSq7gw/";
    }

    function mint(address to, uint256 quantity) external payable onlyOwner {

        if (msg.value < quantity * mintPrice)
            revert InsufficientFundsError();

        if (quantity > maxMintPerTransaction)
            revert LimitExceededError("Kindly conform to max limit per transaction.");

        if (_numberMinted(to) + quantity > maxMintPerUser)
            revert LimitExceededError("Kindly conform to max limit per user.");

        _safeMint(to, quantity);

    }

    error InsufficientFundsError();
    error LimitExceededError(string message);
}