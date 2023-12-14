/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  BigNumberish,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../common";
import type { Token, TokenInterface } from "../../contracts/Token";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "decimal",
        type: "uint8",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "allowance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientAllowance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientBalance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ERC20InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ERC20InvalidReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSpender",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001ac038038062001ac083398181016040528101906200003791906200055a565b828281600390816200004a91906200083f565b5080600490816200005c91906200083f565b50505080600660006101000a81548160ff021916908360ff160217905550600660009054906101000a900460ff16600a62000098919062000aa9565b6305f5e100620000a9919062000afa565b600581905550620000c333600554620000cc60201b60201c565b50505062000c4d565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603620001415760006040517fec442f0500000000000000000000000000000000000000000000000000000000815260040162000138919062000b8a565b60405180910390fd5b62000155600083836200015960201b60201c565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603620001af578060026000828254620001a2919062000ba7565b9250508190555062000285565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050818110156200023e578381836040517fe450d38c000000000000000000000000000000000000000000000000000000008152600401620002359392919062000bf3565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603620002d057806002600082825403925050819055506200031d565b806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516200037c919062000c30565b60405180910390a3505050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620003f282620003a7565b810181811067ffffffffffffffff82111715620004145762000413620003b8565b5b80604052505050565b60006200042962000389565b9050620004378282620003e7565b919050565b600067ffffffffffffffff8211156200045a5762000459620003b8565b5b6200046582620003a7565b9050602081019050919050565b60005b838110156200049257808201518184015260208101905062000475565b60008484015250505050565b6000620004b5620004af846200043c565b6200041d565b905082815260208101848484011115620004d457620004d3620003a2565b5b620004e184828562000472565b509392505050565b600082601f8301126200050157620005006200039d565b5b8151620005138482602086016200049e565b91505092915050565b600060ff82169050919050565b62000534816200051c565b81146200054057600080fd5b50565b600081519050620005548162000529565b92915050565b60008060006060848603121562000576576200057562000393565b5b600084015167ffffffffffffffff81111562000597576200059662000398565b5b620005a586828701620004e9565b935050602084015167ffffffffffffffff811115620005c957620005c862000398565b5b620005d786828701620004e9565b9250506040620005ea8682870162000543565b9150509250925092565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200064757607f821691505b6020821081036200065d576200065c620005ff565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620006c77fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000688565b620006d3868362000688565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620007206200071a6200071484620006eb565b620006f5565b620006eb565b9050919050565b6000819050919050565b6200073c83620006ff565b620007546200074b8262000727565b84845462000695565b825550505050565b600090565b6200076b6200075c565b6200077881848462000731565b505050565b5b81811015620007a0576200079460008262000761565b6001810190506200077e565b5050565b601f821115620007ef57620007b98162000663565b620007c48462000678565b81016020851015620007d4578190505b620007ec620007e38562000678565b8301826200077d565b50505b505050565b600082821c905092915050565b60006200081460001984600802620007f4565b1980831691505092915050565b60006200082f838362000801565b9150826002028217905092915050565b6200084a82620005f4565b67ffffffffffffffff811115620008665762000865620003b8565b5b6200087282546200062e565b6200087f828285620007a4565b600060209050601f831160018114620008b75760008415620008a2578287015190505b620008ae858262000821565b8655506200091e565b601f198416620008c78662000663565b60005b82811015620008f157848901518255600182019150602085019450602081019050620008ca565b868310156200091157848901516200090d601f89168262000801565b8355505b6001600288020188555050505b505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008160011c9050919050565b6000808291508390505b6001851115620009b4578086048111156200098c576200098b62000926565b5b60018516156200099c5780820291505b8081029050620009ac8562000955565b94506200096c565b94509492505050565b600082620009cf576001905062000aa2565b81620009df576000905062000aa2565b8160018114620009f8576002811462000a035762000a39565b600191505062000aa2565b60ff84111562000a185762000a1762000926565b5b8360020a91508482111562000a325762000a3162000926565b5b5062000aa2565b5060208310610133831016604e8410600b841016171562000a735782820a90508381111562000a6d5762000a6c62000926565b5b62000aa2565b62000a82848484600162000962565b9250905081840481111562000a9c5762000a9b62000926565b5b81810290505b9392505050565b600062000ab682620006eb565b915062000ac3836200051c565b925062000af27fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484620009bd565b905092915050565b600062000b0782620006eb565b915062000b1483620006eb565b925082820262000b2481620006eb565b9150828204841483151762000b3e5762000b3d62000926565b5b5092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600062000b728262000b45565b9050919050565b62000b848162000b65565b82525050565b600060208201905062000ba1600083018462000b79565b92915050565b600062000bb482620006eb565b915062000bc183620006eb565b925082820190508082111562000bdc5762000bdb62000926565b5b92915050565b62000bed81620006eb565b82525050565b600060608201905062000c0a600083018662000b79565b62000c19602083018562000be2565b62000c28604083018462000be2565b949350505050565b600060208201905062000c47600083018462000be2565b92915050565b610e638062000c5d6000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063313ce56711610066578063313ce5671461013457806370a082311461015257806395d89b4114610182578063a9059cbb146101a0578063dd62ed3e146101d057610093565b806306fdde0314610098578063095ea7b3146100b657806318160ddd146100e657806323b872dd14610104575b600080fd5b6100a0610200565b6040516100ad9190610ab7565b60405180910390f35b6100d060048036038101906100cb9190610b72565b610292565b6040516100dd9190610bcd565b60405180910390f35b6100ee6102b5565b6040516100fb9190610bf7565b60405180910390f35b61011e60048036038101906101199190610c12565b6102bf565b60405161012b9190610bcd565b60405180910390f35b61013c6102ee565b6040516101499190610c81565b60405180910390f35b61016c60048036038101906101679190610c9c565b610305565b6040516101799190610bf7565b60405180910390f35b61018a61034d565b6040516101979190610ab7565b60405180910390f35b6101ba60048036038101906101b59190610b72565b6103df565b6040516101c79190610bcd565b60405180910390f35b6101ea60048036038101906101e59190610cc9565b610402565b6040516101f79190610bf7565b60405180910390f35b60606003805461020f90610d38565b80601f016020809104026020016040519081016040528092919081815260200182805461023b90610d38565b80156102885780601f1061025d57610100808354040283529160200191610288565b820191906000526020600020905b81548152906001019060200180831161026b57829003601f168201915b5050505050905090565b60008061029d610489565b90506102aa818585610491565b600191505092915050565b6000600254905090565b6000806102ca610489565b90506102d78582856104a3565b6102e2858585610537565b60019150509392505050565b6000600660009054906101000a900460ff16905090565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606004805461035c90610d38565b80601f016020809104026020016040519081016040528092919081815260200182805461038890610d38565b80156103d55780601f106103aa576101008083540402835291602001916103d5565b820191906000526020600020905b8154815290600101906020018083116103b857829003601f168201915b5050505050905090565b6000806103ea610489565b90506103f7818585610537565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b61049e838383600161062b565b505050565b60006104af8484610402565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146105315781811015610521578281836040517ffb8f41b200000000000000000000000000000000000000000000000000000000815260040161051893929190610d78565b60405180910390fd5b6105308484848403600061062b565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036105a95760006040517f96c6fd1e0000000000000000000000000000000000000000000000000000000081526004016105a09190610daf565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361061b5760006040517fec442f050000000000000000000000000000000000000000000000000000000081526004016106129190610daf565b60405180910390fd5b610626838383610802565b505050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff160361069d5760006040517fe602df050000000000000000000000000000000000000000000000000000000081526004016106949190610daf565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361070f5760006040517f94280d620000000000000000000000000000000000000000000000000000000081526004016107069190610daf565b60405180910390fd5b81600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555080156107fc578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516107f39190610bf7565b60405180910390a35b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036108545780600260008282546108489190610df9565b92505081905550610927565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050818110156108e0578381836040517fe450d38c0000000000000000000000000000000000000000000000000000000081526004016108d793929190610d78565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361097057806002600082825403925050819055506109bd565b806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610a1a9190610bf7565b60405180910390a3505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610a61578082015181840152602081019050610a46565b60008484015250505050565b6000601f19601f8301169050919050565b6000610a8982610a27565b610a938185610a32565b9350610aa3818560208601610a43565b610aac81610a6d565b840191505092915050565b60006020820190508181036000830152610ad18184610a7e565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610b0982610ade565b9050919050565b610b1981610afe565b8114610b2457600080fd5b50565b600081359050610b3681610b10565b92915050565b6000819050919050565b610b4f81610b3c565b8114610b5a57600080fd5b50565b600081359050610b6c81610b46565b92915050565b60008060408385031215610b8957610b88610ad9565b5b6000610b9785828601610b27565b9250506020610ba885828601610b5d565b9150509250929050565b60008115159050919050565b610bc781610bb2565b82525050565b6000602082019050610be26000830184610bbe565b92915050565b610bf181610b3c565b82525050565b6000602082019050610c0c6000830184610be8565b92915050565b600080600060608486031215610c2b57610c2a610ad9565b5b6000610c3986828701610b27565b9350506020610c4a86828701610b27565b9250506040610c5b86828701610b5d565b9150509250925092565b600060ff82169050919050565b610c7b81610c65565b82525050565b6000602082019050610c966000830184610c72565b92915050565b600060208284031215610cb257610cb1610ad9565b5b6000610cc084828501610b27565b91505092915050565b60008060408385031215610ce057610cdf610ad9565b5b6000610cee85828601610b27565b9250506020610cff85828601610b27565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610d5057607f821691505b602082108103610d6357610d62610d09565b5b50919050565b610d7281610afe565b82525050565b6000606082019050610d8d6000830186610d69565b610d9a6020830185610be8565b610da76040830184610be8565b949350505050565b6000602082019050610dc46000830184610d69565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610e0482610b3c565b9150610e0f83610b3c565b9250828201905080821115610e2757610e26610dca565b5b9291505056fea2646970667358221220c21d36678f499575aa5ed4368929e033ba952e67304968357f1927dd485fec6e64736f6c63430008140033";

type TokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Token__factory extends ContractFactory {
  constructor(...args: TokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    name: string,
    symbol: string,
    decimal: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(name, symbol, decimal, overrides || {});
  }
  override deploy(
    name: string,
    symbol: string,
    decimal: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(name, symbol, decimal, overrides || {}) as Promise<
      Token & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Token__factory {
    return super.connect(runner) as Token__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenInterface {
    return new Interface(_abi) as TokenInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Token {
    return new Contract(address, _abi, runner) as unknown as Token;
  }
}
