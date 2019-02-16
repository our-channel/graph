const GenerateEvent = artifacts.require('./GenerateEvent.sol')

module.exports = async function(deployer) {
  const registry = await GenerateEvent.deployed()

  console.log('Contract address:', registry.address)
}
