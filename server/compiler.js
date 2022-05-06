var solc = require("solc");
var fs = require("fs");
const compiler = (contract)=>{
  var input = {
  language: "Solidity",
  sources: {
      'ERC721.sol': {
      content: contract.sourceCode
    }
  },
  settings: {
    optimizer: {
      enabled: true,
      runs:200
    },
    outputSelection: {
      "*": {
        "*": ["*"],
      },
    },
  },
};
var output = JSON.parse(solc.compile(JSON.stringify(input)));
// console.log(output);
// `output` here contains the JSON output as specified in the documentation
var _abi = output.contracts['ERC721.sol'][contract.name].abi;
var _bytecode = output.contracts['ERC721.sol'][contract.name].evm.bytecode.object;
//   console.log(
//     contractName +
//       ': ' +
//       output.contracts['ERC721.sol'][contractName].abi //evm.bytecode.object
//   );
return {abi: _abi, bytecode: _bytecode, sourceCode: contract}
}

module.exports = compiler;