# Custom zK-SNARK circuit

## Description

This program generates zero-knowledge circuits, proofs, and solidity verifiers, using hardhat-circom. A `customCircuit` can be visible in the `circuits` directory, which leverages the logic gates templates provided by [circomlib](https://github.com/iden3/circomlib).


## Implemented Circuit Diagram

![Circuit Diagram](https://authoring.metacrafters.io/assets/cms/Assessment_b05f6ed658.png)


## Getting Started

### Pre-configuration

- Place your `PRIVATE_KEY` and `SEPOLIA_URL` into a  `.env`  file as shown in  `.env.sample`.

### Install dependencies

        npm install

### Executing program

- To compile:

        npm run compile

- To deploy:

        npm run deploy

#### Note:
- You can simply use the Polygon Mumbai Testnet, too. In that case, setting the `PRIVATE_KEY` must be enough.
