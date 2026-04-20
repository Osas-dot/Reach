const { ethers } = require("ethers");
const fs = require("fs");

const WALLET_FILE = "wallet.json";

function getOrCreateWallet() {
  if (fs.existsSync(WALLET_FILE)) {
    const data = JSON.parse(fs.readFileSync(WALLET_FILE));
    return new ethers.Wallet(data.privateKey);
  }
  const wallet = ethers.Wallet.createRandom();
  fs.writeFileSync(WALLET_FILE, JSON.stringify({
    address: wallet.address,
    privateKey: wallet.privateKey
  }));
  console.log("New wallet created and saved!");
  return wallet;
}

async function main() {
  console.log("==============================");
  console.log("   REACH - Powered by USDC   ");
  console.log("   Built in Nigeria on Arc   ");
  console.log("==============================");

  const wallet = getOrCreateWallet();

  console.log("");
  console.log("=== YOUR PERMANENT REACH WALLET ===");
  console.log("Address:", wallet.address);
  console.log("===================================");
  console.log("Use this address at faucet.circle.com");
  console.log("REACH is ready!");
}

main();
