const {network } = require("hardhat")
const { verify } = require("../utils/verify")

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()

    const name = "Silicon Rush"
    const symbol = "SRPESU"

    if (process.env.POLYGONSCAN_API_KEY) 
    {
      await verify(ourToken.address, [name, symbol])
    }
  }
  
module.exports.tags = ["all", "sr"]