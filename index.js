const { ethers } = require("ethers");
require('dotenv').config()

if(process.argv.length < 3) {
    console.error("Usage : node index.js <nft contract address>");
    process.exit(1);
}

if(process.env.JSON_RPC_URL=="https://mainnet.infura.io/v3/[your_infura_id_here]"){
    console.error("Please set the JSON_RPC_URL environment variable to your Infura mainnet JSON RPC URL");
    process.exit(1);
}

const provider = new ethers.providers.JsonRpcProvider(process.env.JSON_RPC_URL);

const address = process.argv[2];
const erc721abi = require("./erc721abi.json");
const erc721contract = new ethers.Contract(address, erc721abi, provider);

async function getOwnerEns() {
    console.log("Getting owner of ENS");
    const totalSupply = (await erc721contract.totalSupply()).toNumber();
    console.log("Total supply: ", totalSupply);

    for(let i = 0 ; i < totalSupply; i += 1) {
        try{
            const owner = await erc721contract.ownerOf(i);
            const ens = await provider.lookupAddress(owner);
            console.log(`${i}\t${owner}\t${ens}`);
        }
        catch(e){
            console.error(e)
        }
    }   
}

getOwnerEns();
