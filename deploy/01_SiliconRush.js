const {network } = require("hardhat")
const { verify } = require("../utils/verify")


module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()

    const name = "Silicon Rush"
    const symbol = "SRPESU"

    const ourToken = await deploy("SiliconRush", {
      from: deployer,
      args: [name, symbol],
      log: true,
      waitConfirmations: network.config.blockConfirmations || 1,
    })
    log(`ourToken deployed at ${ourToken.address}`)

    if (process.env.POLYGONSCAN_API_KEY) 
    {
      await verify(ourToken.address, [name, symbol])
    }
  }
  
module.exports.tags = ["all", "sr"]