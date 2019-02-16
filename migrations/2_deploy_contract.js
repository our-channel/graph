const GenerateEvent = artifacts.require('./GenerateEvent.sol')

module.exports = async function(deployer) {
  await deployer.deploy(GenerateEvent)
}
