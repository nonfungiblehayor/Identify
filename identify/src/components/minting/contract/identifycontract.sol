pragma solidity ^0.8.0; //SPDX-License-Identifier: UNLICENSED

// Import the openzepplin contracts
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Identify is ERC721, Ownable {
    
    uint256 public maxTokens = 10000;
    uint256 public tokenReserve = 1;
    uint256 public max_mint_per_tx = 1;

    mapping(address => uint256) public mintedWallets;
    uint256 public totalSupply;


    constructor() ERC721('identify', 'ID') {
        for(uint256 i = 1; i <= tokenReserve; i++) {
            _safeMint(msg.sender, 1000);
        }
        totalSupply = tokenReserve;
    }

    function mint(uint256 amtToken) external {
        require(amtToken <= maxTokens);
        require(amtToken <= max_mint_per_tx);
        require(mintedWallets[msg.sender] + amtToken <= 1);
        require(totalSupply + amtToken <= maxTokens);
        for(uint256 i = 1; i <= amtToken; i++) {
            _safeMint(msg.sender, amtToken);
        }
        mintedWallets[msg.sender] = amtToken;
        totalSupply += amtToken;
    } 
}
