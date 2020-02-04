(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./build/contracts/MetaCoin.json":
/*!***************************************!*\
  !*** ./build/contracts/MetaCoin.json ***!
  \***************************************/
/*! exports provided: contractName, abi, metadata, bytecode, deployedBytecode, sourceMap, deployedSourceMap, source, sourcePath, ast, legacyAST, compiler, networks, schemaVersion, updatedAt, devdoc, userdoc, default */
/***/ (function(module) {

module.exports = {"contractName":"MetaCoin","abi":[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":false,"inputs":[{"name":"receiver","type":"address"},{"name":"amount","type":"uint256"}],"name":"sendCoin","outputs":[{"name":"sufficient","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"getBalanceInEth","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}],"metadata":"{\"compiler\":{\"version\":\"0.5.0+commit.1d4f565a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":true,\"inputs\":[{\"name\":\"addr\",\"type\":\"address\"}],\"name\":\"getBalanceInEth\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"receiver\",\"type\":\"address\"},{\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"sendCoin\",\"outputs\":[{\"name\":\"sufficient\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"addr\",\"type\":\"address\"}],\"name\":\"getBalance\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"_to\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/C/Users/Jamie/Documents/decentralized-providence/contracts/MetaCoin.sol\":\"MetaCoin\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/C/Users/Jamie/Documents/decentralized-providence/contracts/ConvertLib.sol\":{\"keccak256\":\"0x9f8249ffc0dee02477303cf8203490724bb1b4fa95529f57f045b050224f9f3f\",\"urls\":[\"bzzr://ec0c118542cc54ddb3becb123dd560e936da71468f994b39361c5a83c2e48aef\"]},\"/C/Users/Jamie/Documents/decentralized-providence/contracts/MetaCoin.sol\":{\"keccak256\":\"0x58a7063f80afdaa3eddf361e61b30df1d89db41906c152e665795080b0e45ff5\",\"urls\":[\"bzzr://ed518afced0296d8334abee42a303cd6120edfacb9c3ee019fbebfa390267fba\"]}},\"version\":1}","bytecode":"0x608060405234801561001057600080fd5b506127106000803273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610426806100656000396000f3fe608060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680637bd703e81461005c57806390b98a11146100c1578063f8b2cb4f14610134575b600080fd5b34801561006857600080fd5b506100ab6004803603602081101561007f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610199565b6040518082815260200191505060405180910390f35b3480156100cd57600080fd5b5061011a600480360360408110156100e457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610259565b604051808215151515815260200191505060405180910390f35b34801561014057600080fd5b506101836004803603602081101561015757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506103b2565b6040518082815260200191505060405180910390f35b600073__ConvertLib____________________________6396e4ee3d6101be846103b2565b60026040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808381526020018281526020019250505060206040518083038186803b15801561021757600080fd5b505af415801561022b573d6000803e3d6000fd5b505050506040513d602081101561024157600080fd5b81019080805190602001909291905050509050919050565b6000816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410156102aa57600090506103ac565b816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540392505081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190505b92915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905091905056fea165627a7a723058209a5e885446dcc1c5a8099df41e67098dba439b6d15b12d594b4d9088c02925970029","deployedBytecode":"0x608060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680637bd703e81461005c57806390b98a11146100c1578063f8b2cb4f14610134575b600080fd5b34801561006857600080fd5b506100ab6004803603602081101561007f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610199565b6040518082815260200191505060405180910390f35b3480156100cd57600080fd5b5061011a600480360360408110156100e457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610259565b604051808215151515815260200191505060405180910390f35b34801561014057600080fd5b506101836004803603602081101561015757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506103b2565b6040518082815260200191505060405180910390f35b600073__ConvertLib____________________________6396e4ee3d6101be846103b2565b60026040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808381526020018281526020019250505060206040518083038186803b15801561021757600080fd5b505af415801561022b573d6000803e3d6000fd5b505050506040513d602081101561024157600080fd5b81019080805190602001909291905050509050919050565b6000816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410156102aa57600090506103ac565b816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540392505081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190505b92915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905091905056fea165627a7a723058209a5e885446dcc1c5a8099df41e67098dba439b6d15b12d594b4d9088c02925970029","sourceMap":"315:674:1:-;;;452:56;8:9:-1;5:2;;;30:1;27;20:12;5:2;452:56:1;499:5;477:8;:19;486:9;477:19;;;;;;;;;;;;;;;:27;;;;315:674;;;;;;","deployedSourceMap":"315:674:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;778:117;;8:9:-1;5:2;;;30:1;27;20:12;5:2;778:117:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;778:117:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;511:264;;8:9:-1;5:2;;;30:1;27;20:12;5:2;511:264:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;511:264:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;898:89;;8:9:-1;5:2;;;30:1;27;20:12;5:2;898:89:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;898:89:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;778:117;837:4;853:10;:18;872:16;883:4;872:10;:16::i;:::-;889:1;853:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;853:38:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;853:38:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;853:38:1;;;;;;;;;;;;;;;;846:45;;778:117;;;:::o;511:264::-;575:15;623:6;600:8;:20;609:10;600:20;;;;;;;;;;;;;;;;:29;596:47;;;638:5;631:12;;;;596:47;671:6;647:8;:20;656:10;647:20;;;;;;;;;;;;;;;;:30;;;;;;;;;;;703:6;681:8;:18;690:8;681:18;;;;;;;;;;;;;;;;:28;;;;;;;;;;;739:8;718:38;;727:10;718:38;;;749:6;718:38;;;;;;;;;;;;;;;;;;767:4;760:11;;511:264;;;;;:::o;898:89::-;952:4;969:8;:14;978:4;969:14;;;;;;;;;;;;;;;;962:21;;898:89;;;:::o","source":"pragma solidity ^0.5.0;\n\nimport \"./ConvertLib.sol\";\n\n// This is just a simple example of a coin-like contract.\n// It is not standards compatible and cannot be expected to talk to other\n// coin/token contracts. If you want to create a standards-compliant\n// token, see: https://github.com/ConsenSys/Tokens. Cheers!\n\ncontract MetaCoin {\n\tmapping (address => uint) balances;\n\n\tevent Transfer(address indexed _from, address indexed _to, uint256 _value);\n\n\tconstructor() public {\n\t\tbalances[tx.origin] = 10000;\n\t}\n\n\tfunction sendCoin(address receiver, uint amount) public returns(bool sufficient) {\n\t\tif (balances[msg.sender] < amount) return false;\n\t\tbalances[msg.sender] -= amount;\n\t\tbalances[receiver] += amount;\n\t\temit Transfer(msg.sender, receiver, amount);\n\t\treturn true;\n\t}\n\n\tfunction getBalanceInEth(address addr) public view returns(uint){\n\t\treturn ConvertLib.convert(getBalance(addr),2);\n\t}\n\n\tfunction getBalance(address addr) public view returns(uint) {\n\t\treturn balances[addr];\n\t}\n}\n","sourcePath":"C:/Users/Jamie/Documents/decentralized-providence/contracts/MetaCoin.sol","ast":{"absolutePath":"/C/Users/Jamie/Documents/decentralized-providence/contracts/MetaCoin.sol","exportedSymbols":{"MetaCoin":[112]},"id":113,"nodeType":"SourceUnit","nodes":[{"id":18,"literals":["solidity","^","0.5",".0"],"nodeType":"PragmaDirective","src":"0:23:1"},{"absolutePath":"/C/Users/Jamie/Documents/decentralized-providence/contracts/ConvertLib.sol","file":"./ConvertLib.sol","id":19,"nodeType":"ImportDirective","scope":113,"sourceUnit":17,"src":"25:26:1","symbolAliases":[],"unitAlias":""},{"baseContracts":[],"contractDependencies":[],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":112,"linearizedBaseContracts":[112],"name":"MetaCoin","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":23,"name":"balances","nodeType":"VariableDeclaration","scope":112,"src":"336:34:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"},"typeName":{"id":22,"keyType":{"id":20,"name":"address","nodeType":"ElementaryTypeName","src":"345:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Mapping","src":"336:25:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"},"valueType":{"id":21,"name":"uint","nodeType":"ElementaryTypeName","src":"356:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}},"value":null,"visibility":"internal"},{"anonymous":false,"documentation":null,"id":31,"name":"Transfer","nodeType":"EventDefinition","parameters":{"id":30,"nodeType":"ParameterList","parameters":[{"constant":false,"id":25,"indexed":true,"name":"_from","nodeType":"VariableDeclaration","scope":31,"src":"389:21:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":24,"name":"address","nodeType":"ElementaryTypeName","src":"389:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":27,"indexed":true,"name":"_to","nodeType":"VariableDeclaration","scope":31,"src":"412:19:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":26,"name":"address","nodeType":"ElementaryTypeName","src":"412:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":29,"indexed":false,"name":"_value","nodeType":"VariableDeclaration","scope":31,"src":"433:14:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":28,"name":"uint256","nodeType":"ElementaryTypeName","src":"433:7:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"388:60:1"},"src":"374:75:1"},{"body":{"id":41,"nodeType":"Block","src":"473:35:1","statements":[{"expression":{"argumentTypes":null,"id":39,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":34,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":23,"src":"477:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":37,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":35,"name":"tx","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":196,"src":"486:2:1","typeDescriptions":{"typeIdentifier":"t_magic_transaction","typeString":"tx"}},"id":36,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"origin","nodeType":"MemberAccess","referencedDeclaration":null,"src":"486:9:1","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"477:19:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"hexValue":"3130303030","id":38,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"499:5:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_10000_by_1","typeString":"int_const 10000"},"value":"10000"},"src":"477:27:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":40,"nodeType":"ExpressionStatement","src":"477:27:1"}]},"documentation":null,"id":42,"implemented":true,"kind":"constructor","modifiers":[],"name":"","nodeType":"FunctionDefinition","parameters":{"id":32,"nodeType":"ParameterList","parameters":[],"src":"463:2:1"},"returnParameters":{"id":33,"nodeType":"ParameterList","parameters":[],"src":"473:0:1"},"scope":112,"src":"452:56:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":82,"nodeType":"Block","src":"592:183:1","statements":[{"condition":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":56,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":51,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":23,"src":"600:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":54,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":52,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":184,"src":"609:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":53,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"609:10:1","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"600:20:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"<","rightExpression":{"argumentTypes":null,"id":55,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":46,"src":"623:6:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"600:29:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"falseBody":null,"id":59,"nodeType":"IfStatement","src":"596:47:1","trueBody":{"expression":{"argumentTypes":null,"hexValue":"66616c7365","id":57,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"638:5:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"false"},"functionReturnParameters":50,"id":58,"nodeType":"Return","src":"631:12:1"}},{"expression":{"argumentTypes":null,"id":65,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":60,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":23,"src":"647:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":63,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":61,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":184,"src":"656:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":62,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"656:10:1","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"647:20:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"-=","rightHandSide":{"argumentTypes":null,"id":64,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":46,"src":"671:6:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"647:30:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":66,"nodeType":"ExpressionStatement","src":"647:30:1"},{"expression":{"argumentTypes":null,"id":71,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":67,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":23,"src":"681:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":69,"indexExpression":{"argumentTypes":null,"id":68,"name":"receiver","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":44,"src":"690:8:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"681:18:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"+=","rightHandSide":{"argumentTypes":null,"id":70,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":46,"src":"703:6:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"681:28:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":72,"nodeType":"ExpressionStatement","src":"681:28:1"},{"eventCall":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"id":74,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":184,"src":"727:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":75,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"727:10:1","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},{"argumentTypes":null,"id":76,"name":"receiver","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":44,"src":"739:8:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":77,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":46,"src":"749:6:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address_payable","typeString":"address payable"},{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":73,"name":"Transfer","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":31,"src":"718:8:1","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$","typeString":"function (address,address,uint256)"}},"id":78,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"718:38:1","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":79,"nodeType":"EmitStatement","src":"713:43:1"},{"expression":{"argumentTypes":null,"hexValue":"74727565","id":80,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"767:4:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"},"functionReturnParameters":50,"id":81,"nodeType":"Return","src":"760:11:1"}]},"documentation":null,"id":83,"implemented":true,"kind":"function","modifiers":[],"name":"sendCoin","nodeType":"FunctionDefinition","parameters":{"id":47,"nodeType":"ParameterList","parameters":[{"constant":false,"id":44,"name":"receiver","nodeType":"VariableDeclaration","scope":83,"src":"529:16:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":43,"name":"address","nodeType":"ElementaryTypeName","src":"529:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":46,"name":"amount","nodeType":"VariableDeclaration","scope":83,"src":"547:11:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":45,"name":"uint","nodeType":"ElementaryTypeName","src":"547:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"528:31:1"},"returnParameters":{"id":50,"nodeType":"ParameterList","parameters":[{"constant":false,"id":49,"name":"sufficient","nodeType":"VariableDeclaration","scope":83,"src":"575:15:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":48,"name":"bool","nodeType":"ElementaryTypeName","src":"575:4:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"internal"}],"src":"574:17:1"},"scope":112,"src":"511:264:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":98,"nodeType":"Block","src":"842:53:1","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":93,"name":"addr","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":85,"src":"883:4:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"}],"id":92,"name":"getBalance","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":111,"src":"872:10:1","typeDescriptions":{"typeIdentifier":"t_function_internal_view$_t_address_$returns$_t_uint256_$","typeString":"function (address) view returns (uint256)"}},"id":94,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"872:16:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"argumentTypes":null,"hexValue":"32","id":95,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"889:1:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_2_by_1","typeString":"int_const 2"},"value":"2"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"},{"typeIdentifier":"t_rational_2_by_1","typeString":"int_const 2"}],"expression":{"argumentTypes":null,"id":90,"name":"ConvertLib","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":16,"src":"853:10:1","typeDescriptions":{"typeIdentifier":"t_type$_t_contract$_ConvertLib_$16_$","typeString":"type(library ConvertLib)"}},"id":91,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"convert","nodeType":"MemberAccess","referencedDeclaration":15,"src":"853:18:1","typeDescriptions":{"typeIdentifier":"t_function_delegatecall_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$","typeString":"function (uint256,uint256) pure returns (uint256)"}},"id":96,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"853:38:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":89,"id":97,"nodeType":"Return","src":"846:45:1"}]},"documentation":null,"id":99,"implemented":true,"kind":"function","modifiers":[],"name":"getBalanceInEth","nodeType":"FunctionDefinition","parameters":{"id":86,"nodeType":"ParameterList","parameters":[{"constant":false,"id":85,"name":"addr","nodeType":"VariableDeclaration","scope":99,"src":"803:12:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":84,"name":"address","nodeType":"ElementaryTypeName","src":"803:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"802:14:1"},"returnParameters":{"id":89,"nodeType":"ParameterList","parameters":[{"constant":false,"id":88,"name":"","nodeType":"VariableDeclaration","scope":99,"src":"837:4:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":87,"name":"uint","nodeType":"ElementaryTypeName","src":"837:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"836:6:1"},"scope":112,"src":"778:117:1","stateMutability":"view","superFunction":null,"visibility":"public"},{"body":{"id":110,"nodeType":"Block","src":"958:29:1","statements":[{"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":106,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":23,"src":"969:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":108,"indexExpression":{"argumentTypes":null,"id":107,"name":"addr","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":101,"src":"978:4:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"969:14:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":105,"id":109,"nodeType":"Return","src":"962:21:1"}]},"documentation":null,"id":111,"implemented":true,"kind":"function","modifiers":[],"name":"getBalance","nodeType":"FunctionDefinition","parameters":{"id":102,"nodeType":"ParameterList","parameters":[{"constant":false,"id":101,"name":"addr","nodeType":"VariableDeclaration","scope":111,"src":"918:12:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":100,"name":"address","nodeType":"ElementaryTypeName","src":"918:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"917:14:1"},"returnParameters":{"id":105,"nodeType":"ParameterList","parameters":[{"constant":false,"id":104,"name":"","nodeType":"VariableDeclaration","scope":111,"src":"952:4:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":103,"name":"uint","nodeType":"ElementaryTypeName","src":"952:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"951:6:1"},"scope":112,"src":"898:89:1","stateMutability":"view","superFunction":null,"visibility":"public"}],"scope":113,"src":"315:674:1"}],"src":"0:990:1"},"legacyAST":{"absolutePath":"/C/Users/Jamie/Documents/decentralized-providence/contracts/MetaCoin.sol","exportedSymbols":{"MetaCoin":[112]},"id":113,"nodeType":"SourceUnit","nodes":[{"id":18,"literals":["solidity","^","0.5",".0"],"nodeType":"PragmaDirective","src":"0:23:1"},{"absolutePath":"/C/Users/Jamie/Documents/decentralized-providence/contracts/ConvertLib.sol","file":"./ConvertLib.sol","id":19,"nodeType":"ImportDirective","scope":113,"sourceUnit":17,"src":"25:26:1","symbolAliases":[],"unitAlias":""},{"baseContracts":[],"contractDependencies":[],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":112,"linearizedBaseContracts":[112],"name":"MetaCoin","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":23,"name":"balances","nodeType":"VariableDeclaration","scope":112,"src":"336:34:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"},"typeName":{"id":22,"keyType":{"id":20,"name":"address","nodeType":"ElementaryTypeName","src":"345:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Mapping","src":"336:25:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"},"valueType":{"id":21,"name":"uint","nodeType":"ElementaryTypeName","src":"356:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}},"value":null,"visibility":"internal"},{"anonymous":false,"documentation":null,"id":31,"name":"Transfer","nodeType":"EventDefinition","parameters":{"id":30,"nodeType":"ParameterList","parameters":[{"constant":false,"id":25,"indexed":true,"name":"_from","nodeType":"VariableDeclaration","scope":31,"src":"389:21:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":24,"name":"address","nodeType":"ElementaryTypeName","src":"389:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":27,"indexed":true,"name":"_to","nodeType":"VariableDeclaration","scope":31,"src":"412:19:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":26,"name":"address","nodeType":"ElementaryTypeName","src":"412:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":29,"indexed":false,"name":"_value","nodeType":"VariableDeclaration","scope":31,"src":"433:14:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":28,"name":"uint256","nodeType":"ElementaryTypeName","src":"433:7:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"388:60:1"},"src":"374:75:1"},{"body":{"id":41,"nodeType":"Block","src":"473:35:1","statements":[{"expression":{"argumentTypes":null,"id":39,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":34,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":23,"src":"477:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":37,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":35,"name":"tx","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":196,"src":"486:2:1","typeDescriptions":{"typeIdentifier":"t_magic_transaction","typeString":"tx"}},"id":36,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"origin","nodeType":"MemberAccess","referencedDeclaration":null,"src":"486:9:1","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"477:19:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"hexValue":"3130303030","id":38,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"499:5:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_10000_by_1","typeString":"int_const 10000"},"value":"10000"},"src":"477:27:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":40,"nodeType":"ExpressionStatement","src":"477:27:1"}]},"documentation":null,"id":42,"implemented":true,"kind":"constructor","modifiers":[],"name":"","nodeType":"FunctionDefinition","parameters":{"id":32,"nodeType":"ParameterList","parameters":[],"src":"463:2:1"},"returnParameters":{"id":33,"nodeType":"ParameterList","parameters":[],"src":"473:0:1"},"scope":112,"src":"452:56:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":82,"nodeType":"Block","src":"592:183:1","statements":[{"condition":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":56,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":51,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":23,"src":"600:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":54,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":52,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":184,"src":"609:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":53,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"609:10:1","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"600:20:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"<","rightExpression":{"argumentTypes":null,"id":55,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":46,"src":"623:6:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"600:29:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"falseBody":null,"id":59,"nodeType":"IfStatement","src":"596:47:1","trueBody":{"expression":{"argumentTypes":null,"hexValue":"66616c7365","id":57,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"638:5:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"false"},"functionReturnParameters":50,"id":58,"nodeType":"Return","src":"631:12:1"}},{"expression":{"argumentTypes":null,"id":65,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":60,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":23,"src":"647:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":63,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":61,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":184,"src":"656:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":62,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"656:10:1","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"647:20:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"-=","rightHandSide":{"argumentTypes":null,"id":64,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":46,"src":"671:6:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"647:30:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":66,"nodeType":"ExpressionStatement","src":"647:30:1"},{"expression":{"argumentTypes":null,"id":71,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":67,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":23,"src":"681:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":69,"indexExpression":{"argumentTypes":null,"id":68,"name":"receiver","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":44,"src":"690:8:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"681:18:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"+=","rightHandSide":{"argumentTypes":null,"id":70,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":46,"src":"703:6:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"681:28:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":72,"nodeType":"ExpressionStatement","src":"681:28:1"},{"eventCall":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"id":74,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":184,"src":"727:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":75,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"727:10:1","typeDescriptions":{"typeIdentifier":"t_address_payable","typeString":"address payable"}},{"argumentTypes":null,"id":76,"name":"receiver","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":44,"src":"739:8:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":77,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":46,"src":"749:6:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address_payable","typeString":"address payable"},{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":73,"name":"Transfer","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":31,"src":"718:8:1","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$","typeString":"function (address,address,uint256)"}},"id":78,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"718:38:1","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":79,"nodeType":"EmitStatement","src":"713:43:1"},{"expression":{"argumentTypes":null,"hexValue":"74727565","id":80,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"767:4:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"},"functionReturnParameters":50,"id":81,"nodeType":"Return","src":"760:11:1"}]},"documentation":null,"id":83,"implemented":true,"kind":"function","modifiers":[],"name":"sendCoin","nodeType":"FunctionDefinition","parameters":{"id":47,"nodeType":"ParameterList","parameters":[{"constant":false,"id":44,"name":"receiver","nodeType":"VariableDeclaration","scope":83,"src":"529:16:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":43,"name":"address","nodeType":"ElementaryTypeName","src":"529:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":46,"name":"amount","nodeType":"VariableDeclaration","scope":83,"src":"547:11:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":45,"name":"uint","nodeType":"ElementaryTypeName","src":"547:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"528:31:1"},"returnParameters":{"id":50,"nodeType":"ParameterList","parameters":[{"constant":false,"id":49,"name":"sufficient","nodeType":"VariableDeclaration","scope":83,"src":"575:15:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":48,"name":"bool","nodeType":"ElementaryTypeName","src":"575:4:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"internal"}],"src":"574:17:1"},"scope":112,"src":"511:264:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":98,"nodeType":"Block","src":"842:53:1","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":93,"name":"addr","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":85,"src":"883:4:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"}],"id":92,"name":"getBalance","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":111,"src":"872:10:1","typeDescriptions":{"typeIdentifier":"t_function_internal_view$_t_address_$returns$_t_uint256_$","typeString":"function (address) view returns (uint256)"}},"id":94,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"872:16:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"argumentTypes":null,"hexValue":"32","id":95,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"889:1:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_2_by_1","typeString":"int_const 2"},"value":"2"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"},{"typeIdentifier":"t_rational_2_by_1","typeString":"int_const 2"}],"expression":{"argumentTypes":null,"id":90,"name":"ConvertLib","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":16,"src":"853:10:1","typeDescriptions":{"typeIdentifier":"t_type$_t_contract$_ConvertLib_$16_$","typeString":"type(library ConvertLib)"}},"id":91,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"convert","nodeType":"MemberAccess","referencedDeclaration":15,"src":"853:18:1","typeDescriptions":{"typeIdentifier":"t_function_delegatecall_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$","typeString":"function (uint256,uint256) pure returns (uint256)"}},"id":96,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"853:38:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":89,"id":97,"nodeType":"Return","src":"846:45:1"}]},"documentation":null,"id":99,"implemented":true,"kind":"function","modifiers":[],"name":"getBalanceInEth","nodeType":"FunctionDefinition","parameters":{"id":86,"nodeType":"ParameterList","parameters":[{"constant":false,"id":85,"name":"addr","nodeType":"VariableDeclaration","scope":99,"src":"803:12:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":84,"name":"address","nodeType":"ElementaryTypeName","src":"803:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"802:14:1"},"returnParameters":{"id":89,"nodeType":"ParameterList","parameters":[{"constant":false,"id":88,"name":"","nodeType":"VariableDeclaration","scope":99,"src":"837:4:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":87,"name":"uint","nodeType":"ElementaryTypeName","src":"837:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"836:6:1"},"scope":112,"src":"778:117:1","stateMutability":"view","superFunction":null,"visibility":"public"},{"body":{"id":110,"nodeType":"Block","src":"958:29:1","statements":[{"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":106,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":23,"src":"969:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":108,"indexExpression":{"argumentTypes":null,"id":107,"name":"addr","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":101,"src":"978:4:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"969:14:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":105,"id":109,"nodeType":"Return","src":"962:21:1"}]},"documentation":null,"id":111,"implemented":true,"kind":"function","modifiers":[],"name":"getBalance","nodeType":"FunctionDefinition","parameters":{"id":102,"nodeType":"ParameterList","parameters":[{"constant":false,"id":101,"name":"addr","nodeType":"VariableDeclaration","scope":111,"src":"918:12:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":100,"name":"address","nodeType":"ElementaryTypeName","src":"918:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"917:14:1"},"returnParameters":{"id":105,"nodeType":"ParameterList","parameters":[{"constant":false,"id":104,"name":"","nodeType":"VariableDeclaration","scope":111,"src":"952:4:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":103,"name":"uint","nodeType":"ElementaryTypeName","src":"952:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"951:6:1"},"scope":112,"src":"898:89:1","stateMutability":"view","superFunction":null,"visibility":"public"}],"scope":113,"src":"315:674:1"}],"src":"0:990:1"},"compiler":{"name":"solc","version":"0.5.0+commit.1d4f565a.Emscripten.clang"},"networks":{"1557368057496":{"events":{},"links":{"ConvertLib":"0xcBf079F6C7BDA2B3aA2dF9B47A2B1c7038a892c1"},"address":"0xA705aF3439A83e4c47179E2b22F0b7be40871aB8","transactionHash":"0x9f6fbbe9f84267784ae0d587d68f8c587db0e9a28c85b3959c8d500f78199186"}},"schemaVersion":"3.0.9","updatedAt":"2019-05-09T02:49:15.882Z","devdoc":{"methods":{}},"userdoc":{"methods":{}}};

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <span>Bug Tracking Application Secure Software Development</span>\n</mat-toolbar>\n<div>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _meta_meta_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./meta/meta.module */ "./src/app/meta/meta.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./routes */ "./src/app/routes.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user/sign-in/sign-in.component */ "./src/app/user/sign-in/sign-in.component.ts");
/* harmony import */ var _user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user/sign-up/sign-up.component */ "./src/app/user/sign-up/sign-up.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/list/list.component */ "./src/app/components/list/list.component.ts");
/* harmony import */ var _components_create_create_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/create/create.component */ "./src/app/components/create/create.component.ts");
/* harmony import */ var _components_edit_edit_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/edit/edit.component */ "./src/app/components/edit/edit.component.ts");























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_12__["UserComponent"],
                _user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_13__["SignInComponent"],
                _user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_14__["SignUpComponent"],
                _components_list_list_component__WEBPACK_IMPORTED_MODULE_20__["ListComponent"],
                _components_create_create_component__WEBPACK_IMPORTED_MODULE_21__["CreateComponent"],
                _components_edit_edit_component__WEBPACK_IMPORTED_MODULE_22__["EditComponent"]
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _meta_meta_module__WEBPACK_IMPORTED_MODULE_7__["MetaModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_11__["appRoutes"]),
                _angular_fire__WEBPACK_IMPORTED_MODULE_16__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_19__["environment"].firebase),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__["AngularFirestoreModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_18__["AngularFireAuthModule"] // imports firebase/auth, only needed for auth features
            ],
            providers: [_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");



var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth) {
        this.auth = auth;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        return this.auth.isLoggedIn;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);





var AuthService = /** @class */ (function () {
    function AuthService(http, afAuth) {
        this.http = http;
        this.afAuth = afAuth;
        this.loggedInStatus = false;
    }
    AuthService.prototype.setLoggedIn = function (value) {
        this.loggedInStatus = value;
    };
    Object.defineProperty(AuthService.prototype, "isLoggedIn", {
        get: function () {
            return this.loggedInStatus;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.doLogin = function (email, password) {
        return new Promise(function (resolve, reject) {
            firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"]().signInWithEmailAndPassword(email, password)
                .then(function (res) {
                resolve(res);
            }, function (err) { return reject(err); });
        });
    };
    //registers user in the firebase DB
    AuthService.prototype.doRegister = function (email, password) {
        return new Promise(function (resolve, reject) {
            firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"]().createUserWithEmailAndPassword(email, password)
                .then(function (res) {
                resolve(res);
            }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.doLogout = function () {
        firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"]().signOut().then(function () {
            // Sign-out successful.
            console.log("User signed out");
        }, function (error) {
            // An error happened.
            console.log("Error signing out", error);
        });
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/bugs.service.ts":
/*!*********************************!*\
  !*** ./src/app/bugs.service.ts ***!
  \*********************************/
/*! exports provided: BugsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BugsService", function() { return BugsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var BugsService = /** @class */ (function () {
    function BugsService(db) {
        this.db = db;
        this.bugsCollection = db.collection("bugs");
        this.repop();
    }
    //fetch bugs from firebase DB
    BugsService.prototype.getBugs = function () {
        this.repop();
        return this.bugs;
    };
    BugsService.prototype.getBugById = function (id) {
        return this.bugsCollection.doc(id).get();
    };
    //add issue to firebase DB
    BugsService.prototype.addBug = function (bugTicket) {
        this.bugsCollection.add(bugTicket);
    };
    //repopulates bugs
    BugsService.prototype.repop = function () {
        this.bugs = this.bugsCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
            });
        }));
    };
    //deletes issue from backend
    BugsService.prototype.deleteBug = function (id) {
        this.bugsCollection.doc(id).delete();
    };
    BugsService.prototype.updateBug = function (id, newBugTicket) {
        this.bugsCollection.doc(id).update(newBugTicket);
    };
    BugsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], BugsService);
    return BugsService;
}());



/***/ }),

/***/ "./src/app/components/create/create.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/create/create.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3JlYXRlL2NyZWF0ZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/create/create.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/create/create.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <br>\n  <mat-card>\n    <section class=\"mat-typography\">\n      <h3>Create A New Issue</h3>\n    </section>\n    <mat-divider></mat-divider>\n    <br>\n    <form [formGroup]=\"createForm\" class=\"create-form\">\n      <mat-form-field class=\"field-full-width\">\n        <input matInput placeholder=\"Ticket Number\" formControlName=\"ticketNumber\" #ticketNumber>\n      </mat-form-field>\n      <br>\n      <mat-form-field>\n          <mat-select placeholder=\"Type\" formControlName=\"ticketType\" #ticketType>\n            <mat-option value=\"Development\">Development</mat-option>\n            <mat-option value=\"Testing\">Testing</mat-option>\n            <mat-option value=\"Production\">Production</mat-option>\n          </mat-select>\n      </mat-form-field>\n      <br>\n      <mat-form-field class=\"field-full-width\">\n        <input matInput placeholder=\"Bug Description\" formControlName=\"bugDescription\" #bugDescription>\n      </mat-form-field>\n      <br>\n      <mat-form-field class=\"field-full-width\">\n        <input matInput placeholder=\"Bug Finder\" formControlName=\"bugFinder\" #bugFinder>\n      </mat-form-field>\n      <br>\n      <mat-form-field class=\"field-full-width\">\n        <input matInput placeholder=\"Assigned Developer\" formControlName=\"assignedDeveloper\" #assignedDeveloper>\n      </mat-form-field>\n      <br>\n      <mat-form-field>\n          <mat-select placeholder=\"Priority\" formControlName=\"priority\" #priority>\n            <mat-option value=\"Low\">Low</mat-option>\n            <mat-option value=\"Medium\">Medium</mat-option>\n            <mat-option value=\"High\">High</mat-option>\n          </mat-select>\n      </mat-form-field>\n      <br>\n      <mat-form-field>\n          <mat-select placeholder=\"Status\" formControlName=\"status\" #status>\n            <mat-option value=\"Open\">Open</mat-option>\n            <mat-option value=\"Resolved\">Resolved</mat-option>\n            <mat-option value=\"Closed\">Closed</mat-option>\n          </mat-select>\n      </mat-form-field>\n\n\n      <mat-divider></mat-divider>\n      <br><br>\n      <button mat-raised-button color=\"accent\" routerLink=\"/list\">Back</button>&nbsp;\n      <button type=\"submit\" (click)=\"addBug(ticketNumber.value, ticketType.value, bugDescription.value, bugFinder.value, assignedDeveloper.value, priority.value, status.value)\" [disabled]=\"createForm.pristine || createForm.invalid\" mat-raised-button color=\"primary\">Save</button>\n    </form>\n  </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/components/create/create.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/create/create.component.ts ***!
  \*******************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bugs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../bugs.service */ "./src/app/bugs.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_5__);






var CreateComponent = /** @class */ (function () {
    function CreateComponent(fb, router, bugService) {
        this.fb = fb;
        this.router = router;
        this.bugService = bugService;
        this.createForm = this.fb.group({
            ticketNumber: '',
            ticketType: '',
            bugDescription: '',
            bugFinder: '',
            assignedDeveloper: '',
            priority: '',
            status: '',
        });
    }
    CreateComponent.prototype.addBug = function (ticketNumber, ticketType, bugDescription, bugFinder, assignedDev, priority, status) {
        var bugTicket = {
            ticketNumber: ticketNumber,
            ticketType: ticketType,
            bugDescription: bugDescription,
            bugFinder: bugFinder,
            assignedDev: assignedDev,
            priority: priority,
            status: status,
            ticketDate: firebase__WEBPACK_IMPORTED_MODULE_5__["firestore"].FieldValue.serverTimestamp()
        };
        this.bugService.addBug(bugTicket);
        //repops bug early - mainly just to avoid ticketDate getting flagged as not existing
        this.bugService.repop();
        console.log("Bug written to backend DB");
        alert("Bug added");
        this.router.navigate(['/list']);
    };
    CreateComponent.prototype.ngOnInit = function () {
    };
    CreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create',
            template: __webpack_require__(/*! ./create.component.html */ "./src/app/components/create/create.component.html"),
            styles: [__webpack_require__(/*! ./create.component.css */ "./src/app/components/create/create.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _bugs_service__WEBPACK_IMPORTED_MODULE_4__["BugsService"]])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "./src/app/components/edit/edit.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/edit/edit.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdC9lZGl0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/edit/edit.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/edit/edit.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <br>\n    <mat-card>\n      <section class=\"mat-typography\">\n          <h3>Update Issue</h3>\n      </section>\n      <mat-divider></mat-divider>\n      <br>\n      <form [formGroup]=\"updateForm\" class=\"edit-form\">\n        <mat-form-field class=\"field-full-width\">\n        <input matInput placeholder=\"Ticket Number\" formControlName=\"ticketNumber\" #ticketNumber>\n      </mat-form-field>\n      <br>\n      <mat-form-field>\n          <mat-select placeholder=\"Type\" formControlName=\"ticketType\" #ticketType>\n            <mat-option value=\"Development\">Development</mat-option>\n            <mat-option value=\"Testing\">Testing</mat-option>\n            <mat-option value=\"Production\">Production</mat-option>\n          </mat-select>\n      </mat-form-field>\n      <br>\n      <mat-form-field class=\"field-full-width\">\n        <input matInput placeholder=\"Bug Description\" formControlName=\"bugDescription\" #bugDescription>\n      </mat-form-field>\n      <br>\n      <mat-form-field class=\"field-full-width\">\n        <input matInput placeholder=\"Bug Finder\" formControlName=\"bugFinder\" #bugFinder>\n      </mat-form-field>\n      <br>\n      <mat-form-field class=\"field-full-width\">\n        <input matInput placeholder=\"Assigned Developer\" formControlName=\"assignedDeveloper\" #assignedDeveloper>\n      </mat-form-field>\n      <br>\n      <mat-form-field>\n          <mat-select placeholder=\"Priority\" formControlName=\"priority\" #priority>\n            <mat-option value=\"Low\">Low</mat-option>\n            <mat-option value=\"Medium\">Medium</mat-option>\n            <mat-option value=\"High\">High</mat-option>\n          </mat-select>\n      </mat-form-field>\n      <br>\n      <mat-form-field>\n          <mat-select placeholder=\"Status\" formControlName=\"status\" #status>\n            <mat-option value=\"Open\">Open</mat-option>\n            <mat-option value=\"Resolved\">Resolved</mat-option>\n            <mat-option value=\"Closed\">Closed</mat-option>\n          </mat-select>\n      </mat-form-field>\n\n        <mat-divider></mat-divider>\n        <br><br>\n        <button mat-raised-button color=\"accent\" routerLink=\"/list\">Back</button>&nbsp;\n        <button type=\"submit\" (click)=\"updateBug(ticketNumber.value, ticketType.value, bugDescription.value, bugFinder.value, assignedDeveloper.value, priority.value, status.value)\" [disabled]=\"updateForm.pristine || updateForm.invalid\" mat-raised-button color=\"primary\">Save</button>\n      </form>\n    </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/components/edit/edit.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/edit/edit.component.ts ***!
  \***************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _bugs_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../bugs.service */ "./src/app/bugs.service.ts");







var EditComponent = /** @class */ (function () {
    function EditComponent(bugService, router, route, snackBar, fb) {
        this.bugService = bugService;
        this.router = router;
        this.route = route;
        this.snackBar = snackBar;
        this.fb = fb;
        this.bug = {};
        this.createForm();
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params.id;
            _this.bugService.getBugById(_this.id).subscribe(function (res) {
                _this.bug = res;
                _this.updateForm.get('ticketNumber').setValue(_this.bug.ticketNumber);
                _this.updateForm.get('ticketType').setValue(_this.bug.ticketType);
                _this.updateForm.get('bugFinder').setValue(_this.bug.bugFinder);
                _this.updateForm.get('bugDescription').setValue(_this.bug.bugDescription);
                _this.updateForm.get('assignedDeveloper').setValue(_this.bug.assignedDeveloper);
                _this.updateForm.get('priority').setValue(_this.bug.priority);
                _this.updateForm.get('status').setValue(_this.bug.status);
                _this.updateForm.get('ticketDate').setValue(_this.bug.ticketDate);
            });
        });
    };
    EditComponent.prototype.createForm = function () {
        this.updateForm = this.fb.group({
            ticketNumber: '',
            ticketType: '',
            bugFinder: '',
            bugDescription: '',
            assignedDeveloper: '',
            priority: '',
            status: '',
            ticketDate: '',
        });
    };
    EditComponent.prototype.updateBug = function (ticketNumber, ticketType, bugDescription, bugFinder, assignedDev, priority, status) {
        var newBugTicket = {
            ticketNumber: ticketNumber,
            ticketType: ticketType,
            bugDescription: bugDescription,
            bugFinder: bugFinder,
            assignedDev: assignedDev,
            priority: priority,
            status: status,
            ticketDate: firebase__WEBPACK_IMPORTED_MODULE_4__["firestore"].FieldValue.serverTimestamp()
        };
        this.bugService.updateBug(this.id, newBugTicket);
        console.log("Bug Updated");
        alert("Bug Updated");
        this.router.navigate(['/list']);
    };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/components/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/components/edit/edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_bugs_service__WEBPACK_IMPORTED_MODULE_6__["BugsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/components/list/list.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/list/list.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n\twidth: 100%;\n}\n#logoutButton {\n\tfloat:right;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9saXN0L2xpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFdBQVc7QUFDWjtBQUNBO0NBQ0MsV0FBVztBQUNaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9saXN0L2xpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcblx0d2lkdGg6IDEwMCU7XG59XG4jbG9nb3V0QnV0dG9uIHtcblx0ZmxvYXQ6cmlnaHQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/list/list.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/list/list.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <br>\n  <mat-card>\n    <button mat-raised-button color=\"primary\" routerLink=\"/create\">Create Ticket</button>\n    <button id=\"logoutButton\" mat-raised-button color=\"primary\" (click)=\"logoutUser()\">Logout</button>\n    <br><br>\n    <mat-divider></mat-divider>\n    <br>\n    <table mat-table [dataSource]=\"bugs\">\n      <ng-container matColumnDef=\"ticketNumber\">\n        <th mat-header-cell *matHeaderCellDef> Ticket Number </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.ticketNumber}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"ticketType\">\n        <th mat-header-cell *matHeaderCellDef> Ticket Type </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.ticketType}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"bugFinder\">\n        <th mat-header-cell *matHeaderCellDef> Ticket Finder </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.bugFinder}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"bugDescription\">\n        <th mat-header-cell *matHeaderCellDef> Bug Description </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.bugDescription}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"assignedDeveloper\">\n        <th mat-header-cell *matHeaderCellDef> Developer </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.assignedDev}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"priority\">\n        <th mat-header-cell *matHeaderCellDef> Priority </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.priority}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"status\">\n        <th mat-header-cell *matHeaderCellDef> Status </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.status}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"ticketDate\">\n        <th mat-header-cell *matHeaderCellDef> Date </th>\n        <td mat-cell *matCellDef=\"let element\"><div *ngIf=\"element.ticketDate\">{{element?.ticketDate.toDate()}}</div></td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"actions\">\n          <th mat-header-cell *matHeaderCellDef class=\"mat-column-right\"> Actions </th>\n          <td mat-cell *matCellDef=\"let element\" class=\"mat-column-right\">\n            <button mat-button color=\"primary\" (click)=\"editBug(element.id)\"> Edit </button>\n            <button mat-button color=\"warn\" (click)=\"deleteBug(element.id)\"> Delete </button>\n          </td>\n        </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n  </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/components/list/list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/list/list.component.ts ***!
  \***************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bugs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../bugs.service */ "./src/app/bugs.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../auth.service */ "./src/app/auth.service.ts");





var ListComponent = /** @class */ (function () {
    function ListComponent(bugService, router, auth) {
        this.bugService = bugService;
        this.router = router;
        this.auth = auth;
        this.displayedColumns = ['ticketNumber', 'ticketType', 'bugFinder', 'bugDescription', 'assignedDeveloper', 'priority', 'status', 'ticketDate', 'actions'];
        this.fetchBugs();
    }
    ListComponent.prototype.ngOnInit = function () {
        this.fetchBugs();
    };
    ListComponent.prototype.fetchBugs = function () {
        var _this = this;
        this.bugService
            .getBugs()
            .subscribe(function (data) {
            _this.bugs = data;
            console.log('Data requested ... ');
        });
    };
    ListComponent.prototype.deleteBug = function (id) {
        this.bugService.deleteBug(id);
        alert("Bug Deleted");
    };
    ListComponent.prototype.editBug = function (id) {
        this.router.navigate(["/edit/" + id]);
    };
    //logs out user
    ListComponent.prototype.logoutUser = function () {
        this.auth.doLogout();
        this.router.navigate(['/login']);
    };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/components/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/components/list/list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_bugs_service__WEBPACK_IMPORTED_MODULE_3__["BugsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/meta/meta-sender/meta-sender.component.css":
/*!************************************************************!*\
  !*** ./src/app/meta/meta-sender/meta-sender.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".address-field {\n  width: 400px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWV0YS9tZXRhLXNlbmRlci9tZXRhLXNlbmRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvbWV0YS9tZXRhLXNlbmRlci9tZXRhLXNlbmRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZHJlc3MtZmllbGQge1xuICB3aWR0aDogNDAwcHg7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/meta/meta-sender/meta-sender.component.html":
/*!*************************************************************!*\
  !*** ./src/app/meta/meta-sender/meta-sender.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-header>Balance</mat-card-header>\n  <mat-card-content>\n    <mat-form-field id=\"address-selector\" class=\"address-field\">\n      <mat-select name=\"account\" (selectionChange)=\"refreshBalance()\" [(value)]=\"model.account\" placeholder=\"Address\">\n        <mat-option *ngFor=\"let account of accounts\" [value]=\"account\">{{account}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <p>You have <span id=\"balance\">{{model.balance}}</span> META</p>\n  </mat-card-content>\n</mat-card>\n\n<mat-card>\n  <mat-card-header>Send MetaCoin</mat-card-header>\n  <mat-card-content>\n    <mat-form-field>\n      <input type=\"text\" matInput id=\"amount\" placeholder=\"Amount\" (change)=\"setAmount($event)\">\n    </mat-form-field>\n    <mat-form-field class=\"address-field\">\n      <input type=\"text\" matInput id=\"receiver\" placeholder=\"Receiver Address\" (change)=\"setReceiver($event)\">\n    </mat-form-field>\n    <button mat-button id=\"send\" (click)=\"sendCoin()\">Send MetaCoin</button>\n  </mat-card-content>\n</mat-card>\n\n\n"

/***/ }),

/***/ "./src/app/meta/meta-sender/meta-sender.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/meta/meta-sender/meta-sender.component.ts ***!
  \***********************************************************/
/*! exports provided: MetaSenderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetaSenderComponent", function() { return MetaSenderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_web3_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/web3.service */ "./src/app/util/web3.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var metacoin_artifacts = __webpack_require__(/*! ../../../../build/contracts/MetaCoin.json */ "./build/contracts/MetaCoin.json");
var MetaSenderComponent = /** @class */ (function () {
    function MetaSenderComponent(web3Service, matSnackBar) {
        this.web3Service = web3Service;
        this.matSnackBar = matSnackBar;
        this.model = {
            amount: 5,
            receiver: '',
            balance: 0,
            account: ''
        };
        this.status = '';
        console.log('Constructor: ' + web3Service);
    }
    MetaSenderComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('OnInit: ' + this.web3Service);
        console.log(this);
        this.watchAccount();
        this.web3Service.artifactsToContract(metacoin_artifacts)
            .then(function (MetaCoinAbstraction) {
            _this.MetaCoin = MetaCoinAbstraction;
            _this.MetaCoin.deployed().then(function (deployed) {
                console.log(deployed);
                deployed.Transfer({}, function (err, ev) {
                    console.log('Transfer event came in, refreshing balance');
                    _this.refreshBalance();
                });
            });
        });
    };
    MetaSenderComponent.prototype.watchAccount = function () {
        var _this = this;
        this.web3Service.accountsObservable.subscribe(function (accounts) {
            _this.accounts = accounts;
            _this.model.account = accounts[0];
            _this.refreshBalance();
        });
    };
    MetaSenderComponent.prototype.setStatus = function (status) {
        this.matSnackBar.open(status, null, { duration: 3000 });
    };
    MetaSenderComponent.prototype.sendCoin = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var amount, receiver, deployedMetaCoin, transaction, e_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.MetaCoin) {
                            this.setStatus('Metacoin is not loaded, unable to send transaction');
                            return [2 /*return*/];
                        }
                        amount = this.model.amount;
                        receiver = this.model.receiver;
                        console.log('Sending coins' + amount + ' to ' + receiver);
                        this.setStatus('Initiating transaction... (please wait)');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this.MetaCoin.deployed()];
                    case 2:
                        deployedMetaCoin = _a.sent();
                        return [4 /*yield*/, deployedMetaCoin.sendCoin.sendTransaction(receiver, amount, { from: this.model.account })];
                    case 3:
                        transaction = _a.sent();
                        if (!transaction) {
                            this.setStatus('Transaction failed!');
                        }
                        else {
                            this.setStatus('Transaction complete!');
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        console.log(e_1);
                        this.setStatus('Error sending coin; see log.');
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    MetaSenderComponent.prototype.refreshBalance = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var deployedMetaCoin, metaCoinBalance, e_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('Refreshing balance');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this.MetaCoin.deployed()];
                    case 2:
                        deployedMetaCoin = _a.sent();
                        console.log(deployedMetaCoin);
                        console.log('Account', this.model.account);
                        return [4 /*yield*/, deployedMetaCoin.getBalance.call(this.model.account)];
                    case 3:
                        metaCoinBalance = _a.sent();
                        console.log('Found balance: ' + metaCoinBalance);
                        this.model.balance = metaCoinBalance;
                        return [3 /*break*/, 5];
                    case 4:
                        e_2 = _a.sent();
                        console.log(e_2);
                        this.setStatus('Error getting balance; see log.');
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    MetaSenderComponent.prototype.setAmount = function (e) {
        console.log('Setting amount: ' + e.target.value);
        this.model.amount = e.target.value;
    };
    MetaSenderComponent.prototype.setReceiver = function (e) {
        console.log('Setting receiver: ' + e.target.value);
        this.model.receiver = e.target.value;
    };
    MetaSenderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-meta-sender',
            template: __webpack_require__(/*! ./meta-sender.component.html */ "./src/app/meta/meta-sender/meta-sender.component.html"),
            styles: [__webpack_require__(/*! ./meta-sender.component.css */ "./src/app/meta/meta-sender/meta-sender.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_web3_service__WEBPACK_IMPORTED_MODULE_2__["Web3Service"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], MetaSenderComponent);
    return MetaSenderComponent;
}());



/***/ }),

/***/ "./src/app/meta/meta.module.ts":
/*!*************************************!*\
  !*** ./src/app/meta/meta.module.ts ***!
  \*************************************/
/*! exports provided: MetaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetaModule", function() { return MetaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _meta_sender_meta_sender_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./meta-sender/meta-sender.component */ "./src/app/meta/meta-sender/meta-sender.component.ts");
/* harmony import */ var _util_util_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/util.module */ "./src/app/util/util.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");








var MetaModule = /** @class */ (function () {
    function MetaModule() {
    }
    MetaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _util_util_module__WEBPACK_IMPORTED_MODULE_4__["UtilModule"]
            ],
            declarations: [_meta_sender_meta_sender_component__WEBPACK_IMPORTED_MODULE_3__["MetaSenderComponent"]],
            exports: [_meta_sender_meta_sender_component__WEBPACK_IMPORTED_MODULE_3__["MetaSenderComponent"]]
        })
    ], MetaModule);
    return MetaModule;
}());



/***/ }),

/***/ "./src/app/routes.ts":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user/sign-in/sign-in.component */ "./src/app/user/sign-in/sign-in.component.ts");
/* harmony import */ var _user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user/sign-up/sign-up.component */ "./src/app/user/sign-up/sign-up.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _components_create_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/create/create.component */ "./src/app/components/create/create.component.ts");
/* harmony import */ var _components_edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/edit/edit.component */ "./src/app/components/edit/edit.component.ts");
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/list/list.component */ "./src/app/components/list/list.component.ts");







var appRoutes = [
    {
        path: 'create', component: _components_create_create_component__WEBPACK_IMPORTED_MODULE_4__["CreateComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'edit/:id', component: _components_edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["EditComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'list', component: _components_list_list_component__WEBPACK_IMPORTED_MODULE_6__["ListComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'signup', component: _user_user_component__WEBPACK_IMPORTED_MODULE_2__["UserComponent"],
        children: [{ path: '', component: _user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_1__["SignUpComponent"] }]
    },
    {
        path: 'login', component: _user_user_component__WEBPACK_IMPORTED_MODULE_2__["UserComponent"],
        children: [{ path: '', component: _user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_0__["SignInComponent"] }]
    },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];


/***/ }),

/***/ "./src/app/user/sign-in/sign-in.component.css":
/*!****************************************************!*\
  !*** ./src/app/user/sign-in/sign-in.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html,body {\r\n\theight: 100%;\r\n}\r\n\r\nbody.my-login-page {\r\n\tbackground-color: #f7f9fb;\r\n\tfont-size: 14px;\r\n}\r\n\r\n.my-login-page .brand {\r\n\twidth: 90px;\r\n\theight: 90px;\r\n\toverflow: hidden;\r\n\tborder-radius: 50%;\r\n\tmargin: 0 auto;\r\n\tmargin: 40px auto;\r\n\tbox-shadow: 0 4px 8px rgba(0,0,0,.05);\r\n\tposition: relative;\r\n\tz-index: 1;\r\n}\r\n\r\n.my-login-page .brand img {\r\n\twidth: 100%;\r\n}\r\n\r\n.my-login-page .card-wrapper {\r\n\twidth: 400px;\r\n}\r\n\r\n.my-login-page .card {\r\n\tborder-color: transparent;\r\n\tbox-shadow: 0 4px 8px rgba(0,0,0,.05);\r\n}\r\n\r\n.my-login-page .card.fat {\r\n\tpadding: 10px;\r\n}\r\n\r\n.my-login-page .card .card-title {\r\n\tmargin-bottom: 30px;\r\n}\r\n\r\n.my-login-page .form-control {\r\n\tborder-width: 2.3px;\r\n}\r\n\r\n.my-login-page .form-group label {\r\n\twidth: 100%;\r\n}\r\n\r\n.my-login-page .btn.btn-block {\r\n\tpadding: 12px 10px;\r\n}\r\n\r\n.my-login-page .footer {\r\n\tmargin: 40px 0;\r\n\tcolor: #888;\r\n\ttext-align: center;\r\n}\r\n\r\n@media screen and (max-width: 425px) {\r\n\t.my-login-page .card-wrapper {\r\n\t\twidth: 90%;\r\n\t\tmargin: 0 auto;\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: 320px) {\r\n\t.my-login-page .card.fat {\r\n\t\tpadding: 0;\r\n\t}\r\n\r\n\t.my-login-page .card.fat .card-body {\r\n\t\tpadding: 15px;\r\n\t}\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9zaWduLWluL3NpZ24taW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFlBQVk7QUFDYjs7QUFFQTtDQUNDLHlCQUF5QjtDQUN6QixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsV0FBVztDQUNYLFlBQVk7Q0FDWixnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCLGNBQWM7Q0FDZCxpQkFBaUI7Q0FDakIscUNBQXFDO0NBQ3JDLGtCQUFrQjtDQUNsQixVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIscUNBQXFDO0FBQ3RDOztBQUVBO0NBQ0MsYUFBYTtBQUNkOztBQUVBO0NBQ0MsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsV0FBVztBQUNaOztBQUVBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsY0FBYztDQUNkLFdBQVc7Q0FDWCxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQztFQUNDLFVBQVU7RUFDVixjQUFjO0NBQ2Y7QUFDRDs7QUFFQTtDQUNDO0VBQ0MsVUFBVTtDQUNYOztDQUVBO0VBQ0MsYUFBYTtDQUNkO0FBQ0QiLCJmaWxlIjoic3JjL2FwcC91c2VyL3NpZ24taW4vc2lnbi1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCxib2R5IHtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmJvZHkubXktbG9naW4tcGFnZSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2Y3ZjlmYjtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5teS1sb2dpbi1wYWdlIC5icmFuZCB7XHJcblx0d2lkdGg6IDkwcHg7XHJcblx0aGVpZ2h0OiA5MHB4O1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdG1hcmdpbjogMCBhdXRvO1xyXG5cdG1hcmdpbjogNDBweCBhdXRvO1xyXG5cdGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsMCwwLC4wNSk7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5teS1sb2dpbi1wYWdlIC5icmFuZCBpbWcge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubXktbG9naW4tcGFnZSAuY2FyZC13cmFwcGVyIHtcclxuXHR3aWR0aDogNDAwcHg7XHJcbn1cclxuXHJcbi5teS1sb2dpbi1wYWdlIC5jYXJkIHtcclxuXHRib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsMCwwLC4wNSk7XHJcbn1cclxuXHJcbi5teS1sb2dpbi1wYWdlIC5jYXJkLmZhdCB7XHJcblx0cGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLm15LWxvZ2luLXBhZ2UgLmNhcmQgLmNhcmQtdGl0bGUge1xyXG5cdG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5teS1sb2dpbi1wYWdlIC5mb3JtLWNvbnRyb2wge1xyXG5cdGJvcmRlci13aWR0aDogMi4zcHg7XHJcbn1cclxuXHJcbi5teS1sb2dpbi1wYWdlIC5mb3JtLWdyb3VwIGxhYmVsIHtcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm15LWxvZ2luLXBhZ2UgLmJ0bi5idG4tYmxvY2sge1xyXG5cdHBhZGRpbmc6IDEycHggMTBweDtcclxufVxyXG5cclxuLm15LWxvZ2luLXBhZ2UgLmZvb3RlciB7XHJcblx0bWFyZ2luOiA0MHB4IDA7XHJcblx0Y29sb3I6ICM4ODg7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjVweCkge1xyXG5cdC5teS1sb2dpbi1wYWdlIC5jYXJkLXdyYXBwZXIge1xyXG5cdFx0d2lkdGg6IDkwJTtcclxuXHRcdG1hcmdpbjogMCBhdXRvO1xyXG5cdH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcclxuXHQubXktbG9naW4tcGFnZSAuY2FyZC5mYXQge1xyXG5cdFx0cGFkZGluZzogMDtcclxuXHR9XHJcblxyXG5cdC5teS1sb2dpbi1wYWdlIC5jYXJkLmZhdCAuY2FyZC1ib2R5IHtcclxuXHRcdHBhZGRpbmc6IDE1cHg7XHJcblx0fVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/user/sign-in/sign-in.component.html":
/*!*****************************************************!*\
  !*** ./src/app/user/sign-in/sign-in.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"my-login-page\">\r\n\t<section class=\"h-100\">\r\n\t\t<div class=\"container h-100\">\r\n\t\t\t<div class=\"row justify-content-md-center h-100\">\r\n\t\t\t\t<div class=\"card-wrapper\">\r\n\t\t\t\t\t<div class=\"brand\">\r\n\t\t\t\t\t\t<img src=\"../../../assets/images/sign-in-logo.png\" alt=\"logo\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"card fat\">\r\n\t\t\t\t\t\t<div class=\"card-body\">\r\n\t\t\t\t\t\t\t<h4 class=\"card-title\">Login</h4>\r\n\t\t\t\t\t\t\t<form (submit)=\"loginUser($event)\" method=\"POST\" class=\"my-login-validation\" novalidate=\"\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t<label for=\"email\">E-Mail Address</label>\r\n\t\t\t\t\t\t\t\t\t<input id=\"email\" type=\"email\" class=\"form-control\" name=\"email\" value=\"\" required autofocus>\r\n\t\t\t\t\t\t\t\t\t<div class=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t\t\tEmail is invalid\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t<label for=\"password\">Password\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"forgot.html\" class=\"float-right\">\r\n\t\t\t\t\t\t\t\t\t\t\tForgot Password?\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t<input id=\"password\" type=\"password\" class=\"form-control\" name=\"password\" required data-eye>\r\n\t\t\t\t\t\t\t\t    <div class=\"invalid-feedback\">\r\n\t\t\t\t\t\t\t\t    \tPassword is required\r\n\t\t\t\t\t\t\t    \t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"custom-checkbox custom-control\">\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"remember\" id=\"remember\" class=\"custom-control-input\">\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"remember\" class=\"custom-control-label\">Remember Me</label>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"form-group m-0\">\r\n\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary btn-block\">\r\n\t\t\t\t\t\t\t\t\t\tLogin\r\n\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"mt-4 text-center\">\r\n\t\t\t\t\t\t\t\t\tDon't have an account? <a routerLink='/signup'>Create One</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"footer\">\r\n\t\t\t\t\t\tCopyright &copy; 2019 &mdash; Jamie Douglas\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n\r\n  <script src=\"https://code.jquery.com/jquery-3.2.1.slim.min.js\" integrity=\"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN\" crossorigin=\"anonymous\"></script>\r\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js\" integrity=\"sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q\" crossorigin=\"anonymous\"></script>\r\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js\" integrity=\"sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl\" crossorigin=\"anonymous\"></script>\r\n\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\" integrity=\"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm\" crossorigin=\"anonymous\">\r\n</body>\r\n"

/***/ }),

/***/ "./src/app/user/sign-in/sign-in.component.ts":
/*!***************************************************!*\
  !*** ./src/app/user/sign-in/sign-in.component.ts ***!
  \***************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var SignInComponent = /** @class */ (function () {
    function SignInComponent(Auth, Router) {
        this.Auth = Auth;
        this.Router = Router;
    }
    SignInComponent.prototype.ngOnInit = function () {
    };
    SignInComponent.prototype.loginUser = function (event) {
        var _this = this;
        event.preventDefault();
        var target = event.target;
        var email = target.querySelector('#email').value;
        var password = target.querySelector('#password').value;
        this.Auth.doLogin(email, password)
            .then(function (res) {
            console.log(res);
            _this.Auth.setLoggedIn(true);
            _this.Router.navigate(['list']);
        }, function (err) {
            console.log(err);
            alert(err.message);
        });
    };
    SignInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! ./sign-in.component.html */ "./src/app/user/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.css */ "./src/app/user/sign-in/sign-in.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/user/sign-up/sign-up.component.css":
/*!****************************************************!*\
  !*** ./src/app/user/sign-up/sign-up.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html,body {\n\theight: 100%;\n}\n\nbody.my-login-page {\n\tbackground-color: #f7f9fb;\n\tfont-size: 14px;\n}\n\n.my-login-page .brand {\n\twidth: 90px;\n\theight: 90px;\n\toverflow: hidden;\n\tborder-radius: 50%;\n\tmargin: 0 auto;\n\tmargin: 40px auto;\n\tbox-shadow: 0 4px 8px rgba(0,0,0,.05);\n\tposition: relative;\n\tz-index: 1;\n}\n\n.my-login-page .brand img {\n\twidth: 100%;\n}\n\n.my-login-page .card-wrapper {\n\twidth: 400px;\n}\n\n.my-login-page .card {\n\tborder-color: transparent;\n\tbox-shadow: 0 4px 8px rgba(0,0,0,.05);\n}\n\n.my-login-page .card.fat {\n\tpadding: 10px;\n}\n\n.my-login-page .card .card-title {\n\tmargin-bottom: 30px;\n}\n\n.my-login-page .form-control {\n\tborder-width: 2.3px;\n}\n\n.my-login-page .form-group label {\n\twidth: 100%;\n}\n\n.my-login-page .btn.btn-block {\n\tpadding: 12px 10px;\n}\n\n.my-login-page .footer {\n\tmargin: 40px 0;\n\tcolor: #888;\n\ttext-align: center;\n}\n\n@media screen and (max-width: 425px) {\n\t.my-login-page .card-wrapper {\n\t\twidth: 90%;\n\t\tmargin: 0 auto;\n\t}\n}\n\n@media screen and (max-width: 320px) {\n\t.my-login-page .card.fat {\n\t\tpadding: 0;\n\t}\n\n\t.my-login-page .card.fat .card-body {\n\t\tpadding: 15px;\n\t}\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFlBQVk7QUFDYjs7QUFFQTtDQUNDLHlCQUF5QjtDQUN6QixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsV0FBVztDQUNYLFlBQVk7Q0FDWixnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCLGNBQWM7Q0FDZCxpQkFBaUI7Q0FDakIscUNBQXFDO0NBQ3JDLGtCQUFrQjtDQUNsQixVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIscUNBQXFDO0FBQ3RDOztBQUVBO0NBQ0MsYUFBYTtBQUNkOztBQUVBO0NBQ0MsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsV0FBVztBQUNaOztBQUVBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsY0FBYztDQUNkLFdBQVc7Q0FDWCxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQztFQUNDLFVBQVU7RUFDVixjQUFjO0NBQ2Y7QUFDRDs7QUFFQTtDQUNDO0VBQ0MsVUFBVTtDQUNYOztDQUVBO0VBQ0MsYUFBYTtDQUNkO0FBQ0QiLCJmaWxlIjoic3JjL2FwcC91c2VyL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCxib2R5IHtcblx0aGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5Lm15LWxvZ2luLXBhZ2Uge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmOWZiO1xuXHRmb250LXNpemU6IDE0cHg7XG59XG5cbi5teS1sb2dpbi1wYWdlIC5icmFuZCB7XG5cdHdpZHRoOiA5MHB4O1xuXHRoZWlnaHQ6IDkwcHg7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0bWFyZ2luOiAwIGF1dG87XG5cdG1hcmdpbjogNDBweCBhdXRvO1xuXHRib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLDAsMCwuMDUpO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHotaW5kZXg6IDE7XG59XG5cbi5teS1sb2dpbi1wYWdlIC5icmFuZCBpbWcge1xuXHR3aWR0aDogMTAwJTtcbn1cblxuLm15LWxvZ2luLXBhZ2UgLmNhcmQtd3JhcHBlciB7XG5cdHdpZHRoOiA0MDBweDtcbn1cblxuLm15LWxvZ2luLXBhZ2UgLmNhcmQge1xuXHRib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuXHRib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLDAsMCwuMDUpO1xufVxuXG4ubXktbG9naW4tcGFnZSAuY2FyZC5mYXQge1xuXHRwYWRkaW5nOiAxMHB4O1xufVxuXG4ubXktbG9naW4tcGFnZSAuY2FyZCAuY2FyZC10aXRsZSB7XG5cdG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5teS1sb2dpbi1wYWdlIC5mb3JtLWNvbnRyb2wge1xuXHRib3JkZXItd2lkdGg6IDIuM3B4O1xufVxuXG4ubXktbG9naW4tcGFnZSAuZm9ybS1ncm91cCBsYWJlbCB7XG5cdHdpZHRoOiAxMDAlO1xufVxuXG4ubXktbG9naW4tcGFnZSAuYnRuLmJ0bi1ibG9jayB7XG5cdHBhZGRpbmc6IDEycHggMTBweDtcbn1cblxuLm15LWxvZ2luLXBhZ2UgLmZvb3RlciB7XG5cdG1hcmdpbjogNDBweCAwO1xuXHRjb2xvcjogIzg4ODtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjVweCkge1xuXHQubXktbG9naW4tcGFnZSAuY2FyZC13cmFwcGVyIHtcblx0XHR3aWR0aDogOTAlO1xuXHRcdG1hcmdpbjogMCBhdXRvO1xuXHR9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XG5cdC5teS1sb2dpbi1wYWdlIC5jYXJkLmZhdCB7XG5cdFx0cGFkZGluZzogMDtcblx0fVxuXG5cdC5teS1sb2dpbi1wYWdlIC5jYXJkLmZhdCAuY2FyZC1ib2R5IHtcblx0XHRwYWRkaW5nOiAxNXB4O1xuXHR9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/user/sign-up/sign-up.component.html":
/*!*****************************************************!*\
  !*** ./src/app/user/sign-up/sign-up.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"my-login-page\">\n\t<section class=\"h-100\">\n\t\t<div class=\"container h-100\">\n\t\t\t<div class=\"row justify-content-md-center h-100\">\n\t\t\t\t<div class=\"card-wrapper\">\n\t\t\t\t\t<div class=\"brand\">\n\t\t\t\t\t\t<img src=\"../../../assets/images/sign-in-logo.png\" alt=\"logo\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card fat\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<h4 class=\"card-title\">Register</h4>\n\t\t\t\t\t\t\t<form (submit)=\"tryRegister($event)\" method=\"POST\" class=\"my-login-validation\" novalidate=\"\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label for=\"name\">Name</label>\n\t\t\t\t\t\t\t\t\t<input id=\"name\" type=\"text\" class=\"form-control\" name=\"name\" required autofocus>\n\t\t\t\t\t\t\t\t\t<div class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\tWhat's your name?\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label for=\"email\">E-Mail Address</label>\n\t\t\t\t\t\t\t\t\t<input id=\"email\" type=\"email\" class=\"form-control\" name=\"email\" required>\n\t\t\t\t\t\t\t\t\t<div class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\tYour email is invalid\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label for=\"password\">Password</label>\n\t\t\t\t\t\t\t\t\t<input id=\"password\" type=\"password\" class=\"form-control\" name=\"password\" required data-eye>\n\t\t\t\t\t\t\t\t\t<div class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\tPassword is required\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"custom-checkbox custom-control\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"agree\" id=\"agree\" class=\"custom-control-input\" required=\"\">\n\t\t\t\t\t\t\t\t\t\t<label for=\"agree\" class=\"custom-control-label\">I agree to the <a href=\"#\">Terms and Conditions</a></label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"invalid-feedback\">\n\t\t\t\t\t\t\t\t\t\t\tYou must agree with our Terms and Conditions\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"form-group m-0\">\n\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary btn-block\">\n\t\t\t\t\t\t\t\t\t\tRegister\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"mt-4 text-center\">\n\t\t\t\t\t\t\t\t\tAlready have an account? <a routerLink='/login'>Login</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"footer\">\n\t\t\t\t\t\tCopyright &copy; 2019 &mdash; Jamie Douglas\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\n\t<script src=\"https://code.jquery.com/jquery-3.2.1.slim.min.js\" integrity=\"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN\" crossorigin=\"anonymous\"></script>\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js\" integrity=\"sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q\" crossorigin=\"anonymous\"></script>\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js\" integrity=\"sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl\" crossorigin=\"anonymous\"></script>\n\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\" integrity=\"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm\" crossorigin=\"anonymous\">\n</body>"

/***/ }),

/***/ "./src/app/user/sign-up/sign-up.component.ts":
/*!***************************************************!*\
  !*** ./src/app/user/sign-up/sign-up.component.ts ***!
  \***************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(Auth, Router) {
        this.Auth = Auth;
        this.Router = Router;
    }
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent.prototype.tryRegister = function (event) {
        var _this = this;
        event.preventDefault();
        var target = event.target;
        var email = target.querySelector('#email').value;
        var password = target.querySelector('#password').value;
        this.Auth.doRegister(email, password)
            .then(function (res) {
            console.log(res);
            _this.Router.navigate(['']);
        }, function (err) {
            console.log(err);
        });
    };
    SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/user/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.css */ "./src/app/user/sign-up/sign-up.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col s8 offset-s2\">\n      <div class=\"card grey lighten-2\">\n        <div class=\"card-tabs\">\n              <a routerLink='/login' routerLinkActive='active' class=\"btn btn-primary\">Sign In</a>\n              <a routerLink='/signup' routerLinkActive='active' class=\"btn btn-primary\">Sign Up</a>\n        </div>\n        <div class=\"card-content white\">\n          <div class=\"\">\n            <router-outlet></router-outlet>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<script src=\"https://code.jquery.com/jquery-3.2.1.slim.min.js\" integrity=\"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN\" crossorigin=\"anonymous\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js\" integrity=\"sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q\" crossorigin=\"anonymous\"></script>\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js\" integrity=\"sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl\" crossorigin=\"anonymous\"></script>\n\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\" integrity=\"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm\" crossorigin=\"anonymous\">\n"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/util/util.module.ts":
/*!*************************************!*\
  !*** ./src/app/util/util.module.ts ***!
  \*************************************/
/*! exports provided: UtilModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilModule", function() { return UtilModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _web3_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./web3.service */ "./src/app/util/web3.service.ts");




var UtilModule = /** @class */ (function () {
    function UtilModule() {
    }
    UtilModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            providers: [
                _web3_service__WEBPACK_IMPORTED_MODULE_3__["Web3Service"]
            ],
            declarations: []
        })
    ], UtilModule);
    return UtilModule;
}());



/***/ }),

/***/ "./src/app/util/web3.service.ts":
/*!**************************************!*\
  !*** ./src/app/util/web3.service.ts ***!
  \**************************************/
/*! exports provided: Web3Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Web3Service", function() { return Web3Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var truffle_contract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! truffle-contract */ "./node_modules/truffle-contract/index.js");
/* harmony import */ var truffle_contract__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(truffle_contract__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var Web3 = __webpack_require__(/*! web3 */ "./node_modules/web3/src/index.js");
var Web3Service = /** @class */ (function () {
    function Web3Service() {
        var _this = this;
        this.ready = false;
        this.accountsObservable = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        window.addEventListener('load', function (event) {
            _this.bootstrapWeb3();
        });
    }
    Web3Service.prototype.bootstrapWeb3 = function () {
        var _this = this;
        // Checking if Web3 has been injected by the browser (Mist/MetaMask)
        if (typeof window.web3 !== 'undefined') {
            // Use Mist/MetaMask's provider
            this.web3 = new Web3(window.web3.currentProvider);
        }
        else {
            console.log('No web3? You should consider trying MetaMask!');
            // Hack to provide backwards compatibility for Truffle, which uses web3js 0.20.x
            Web3.providers.HttpProvider.prototype.sendAsync = Web3.providers.HttpProvider.prototype.send;
            // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
            this.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
        }
        setInterval(function () { return _this.refreshAccounts(); }, 100);
    };
    Web3Service.prototype.artifactsToContract = function (artifacts) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var delay, contractAbstraction;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.web3) return [3 /*break*/, 3];
                        delay = new Promise(function (resolve) { return setTimeout(resolve, 100); });
                        return [4 /*yield*/, delay];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.artifactsToContract(artifacts)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        contractAbstraction = truffle_contract__WEBPACK_IMPORTED_MODULE_2___default()(artifacts);
                        contractAbstraction.setProvider(this.web3.currentProvider);
                        return [2 /*return*/, contractAbstraction];
                }
            });
        });
    };
    Web3Service.prototype.refreshAccounts = function () {
        var _this = this;
        this.web3.eth.getAccounts(function (err, accs) {
            console.log('Refreshing accounts');
            if (err != null) {
                console.warn('There was an error fetching your accounts.');
                return;
            }
            // Get the initial account balance so it can be displayed.
            if (accs.length === 0) {
                console.warn('Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.');
                return;
            }
            if (!_this.accounts || _this.accounts.length !== accs.length || _this.accounts[0] !== accs[0]) {
                console.log('Observed new accounts');
                _this.accountsObservable.next(accs);
                _this.accounts = accs;
            }
            _this.ready = true;
        });
    };
    Web3Service = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Web3Service);
    return Web3Service;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyC337fkfRSqHb5tgULXxGoUk18kreYMoTw",
        authDomain: "software-d0570.firebaseapp.com",
        databaseURL: "https://software-d0570.firebaseio.com",
        projectId: "software-d0570",
        storageBucket: "software-d0570.appspot.com",
        messagingSenderId: "490832258827",
        appId: "1:490832258827:web:50e3ada77c550802a2e40e"
    },
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jamie/Documents/secure_software/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map