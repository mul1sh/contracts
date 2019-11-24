module.exports = {
  accounts: 310,
  port: 8555,
  testrpcOptions: '--port 8555 --accounts 310 --defaultBalanceEther 2000000',
  testCommand: '../node_modules/.bin/babel-node ../node_modules/.bin/truffle test --network coverage test/conference.js test/erc20_conference.js test/group_admin.js test/deployer.js',
  skipFiles: ['zeppelin/lifecycle/Destructible.sol','zeppelin/ownership/Ownable.sol']
};
