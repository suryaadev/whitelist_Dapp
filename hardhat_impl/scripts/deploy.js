const { ethers } = require("hardhat");

async function main() {
  
  const WhitelistFactory = await ethers.getContractFactory("Whitelist")

  const whitelist = await WhitelistFactory.deploy(2)

  await whitelist.deployed()

  console.log(`Whitelist contract address : ${whitelist.address}`)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

  // 0x55b89077b7a3dC49b5d5B0810ba2f8e2568a6A5A
