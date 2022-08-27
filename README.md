# CLI NFT-ENS-EXTRACTOR
Extract ENS of all the owners of NFTs in a particular collection

# Usage
## Clone this repo
```
git clone https://github.com/madhavanmalolan/nft-ens-extractor.git
cd nft-ens-extractor
```

## Set provider URL
```
mv .env.example .env
```
In `.env` set the `JSON_RPC_URL` to an endpoint from Infura/Alchemy/Local Node

## Install deps
```
npm install
```

## Run
```
node index.js ADDRESS_OF_NFT_CONTRACT > output.tsv
```

# Misc
- The code assumes that the NFT is of type `ERC-721 Enumerable`

