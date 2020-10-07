# Meme of the Day dApp -- Filecoin & Matic

Discover, upload, vote, comment, and buy your favorite memes in different categories. Discover top memes and share profits from the sales of upvoted memes with this dApp.

<img src="/src/content/Meme-of-the-Day-dApp-Meme-Final.png" width=25% height=25% align="right">Meme of the Day is a fun social platform that was created for use with Matic blockchain and Filecoin for minting and saving meme images as non-fungible tokens (NFTs). The dApp interface runs in a web browser, where the user uploads a meme image that runs through a smart contract to mint an NFT on Matic network. The meme image is then saved in Filecoin via Textile Hub, as well as in IPFS cache for hot storage. The "View Your Memes" page then displays the uploaded image and its associated Matic transaction details. This is our initial proof of concept functionality. It is possible to get the dApp up and running in a local development environment with local Ethereum blockchain (Ganache) or with Matic Mumbai testnet.

Beyond this, our vision is for people to upvote, comment, favorite, and buy memes they like, which would be featured in categorized ranking lists updated in real-time. Users will have the unique opportunity to share in the profits of memes sold that they upvoted. By paying a small amount for votes, they are incentivized to participate in Meme of the Day for fun and for profit. This dApp can also prove that a user is either the true creator or the first to claim title to a particular meme that they upload.

We are hopeful that Meme of the Day and the future voting mechanism would offer a unique, gamified social experience for users and encourage more interest in Filecoin, Matic, and Web3 technology.

**Dependencies are:**
- Node.js at least version 10.1x.x
> Download from https://nodejs.org and follow installation instructions
- Truffle
- Filecoin
- Matic Network
- IPFS
- Textile
- Fleek

Currently it is possible to use local blockchain (Ganache) or Ethereum L2 solution on Matic testnet to run the dApp.

Metamask Web3 wallet may be used to test the dApp.
> Metamask download: https://metamask.io/download.html

## Installation procedure  for local blockchain (ex: ganache-cli)
```shell
git clone https://github.com/Meme-of-the-Day/meme-of-the-day-filecoin
cd meme-of-the-day-filecoin
npm install
npm run deployDev (Spins up ganache-cli and deploys contract(s) on the chain)
npm run start (In another terminal)
```
You should see web browser open up, and the dApp will load and show the latest meme uploaded in browser window.

## Installation procedure for Matic Mumbai testnet
Please follow additional instructions how to setup your Metamask to use Matic Mumbai testnet:
https://docs.matic.network/docs/develop/metamask/config-matic

Here is Matic Mumbai testnet Faucet to get some test Matic coins:
https://faucet.matic.network/

Here is additional information on how to deploy smart contract and dApp on Matic Mumbai testnet. You will need to create .secret file holding seed words from your wallet on Matic testnet Mumbai network:
https://docs.matic.network/docs/develop/truffle<br>

```shell
git clone https://github.com/Meme-of-the-Day/meme-of-the-day-filecoin
cd meme-of-the-day-filecoin
npm install
truffle migrate --reset --network matic
npm run start
```
The truffle migrate command would require the secret file to be updated with the mnemonic which is the secret to the account used to deploy contract on Matic chain.
When you start dApp with last command "npm run start", dApp will load and show the latest meme uploaded in browser window.
<br>

**Command to migrate smart contract to blockchain**
```shell
npm run migrate
```
After successful migration of smart contract to blockchain, you can interact with it using Truffle console.
<br>

**Some commands that you can use with Truffle console after smart contract is deployed**
After smart contract deployment to blockchain with migration, you can use Truffle console to interact with smart contracts using CLI. To start Truffle console from command shell type:
```shell
truffle console
```
After Truffle console is running you can get contract from blockchain with command:
```javascript
truffle(development)> const memeshandler = await MemesHandler.deployed()
```
You can store hash of meme to blockchain using contracts set function:
```javascript
truffle(development)> result = memeshandler.newMeme('QmYHaaWHgpT2iBGNxMCCFpDKgskej6bhubd5cnytUuJKRp')
```
To get the account under which meme was stored on blockchain, you can type:
```javascript
truffle(development)> const memesList = memeshandler.getMemesList()
```
You need to type constant as command to get value stored in it:
```javascript
truffle(development)> memesList
[ '0x787eBC47F34081a0Df4dc3923798828ae52C538C' ]
```
Read the IPFS file hash from meme stored on blockchain:
```javascript
const meme = memeshandler.getMemeByAddress('0x787eBC47F34081a0Df4dc3923798828ae52C538C')
```
Output IPFS file hash into console:
```javascript
meme
'QmYHaaWHgpT2iBGNxMCCFpDKgskej6bhubd5cnytUuJKRp'
```
<br>

**To run tests defined in folder /test run from shell command**  
```javascript
truffle test
```
Tests will check if contract deployment on blockchain was done correctly, and it will check if get and set methods of smart contract are working correctly. After running the command, you will see output similar to:
```shell
Using network 'development'.

Compiling ./src/contracts/FilesHandler.sol...


  Contract: FilesHandler
    deployment
0xDA228234a792cb9C7C8cf9E9E0dB48A8F57C7D08
      ✓ deployed successfully!
    storage access
Saving and retrieveing from Blockhain
test123
      ✓ Hash saved and retrieved (282ms)


  2 passing (422ms)

```
