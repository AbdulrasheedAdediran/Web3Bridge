// SPDX-License-Identifier: MIT



// pragma solidity ^0.8.0;

// import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
// import "@openzeppelin/contracts/utils/Counters.sol";

// contract MyNFT is ERC721URIStorage {
//     using Counters for Counters.Counter;
//     Counters.Counter private _tokenIds;

//     constructor() ERC721("DebutNFT", "DNFT", "https:QmNk7B7FQ8iGYWHycevkCMRKRAJRm7YPJTMmoWV1nygPsQ2") {}


//     function _safeMint(
//         address to,
//         uint256 tokenId,
//         bytes memory _data
//     ) internal virtual {
//         _mint(to, tokenId);
//         require(
//             _checkOnERC721Received(address(0), to, tokenId, _data),
//             "ERC721: transfer to non ERC721Receiver implementer"
//         );
//     }

// }

//     function mintNFT(address recipient, string memory tokenURI)
//     public
//     returns (uint256)
//     {
//         _tokenIds.increment();

//         uint256 newItemId = _tokenIds.current();
//         _mint(recipient, newItemId);
//         _setTokenURI(newItemId, tokenURI);

//         return newItemId;
//     }
// }


// pragma solidity 0.8.4;


// import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
// import "@openzeppelin/contracts/utils/Counters.sol"; 


// contract DebutNFT is ERC721{

// using Counters for Counters.Counter;
// Counters.Counter private _tokenId;



// constructor() public ERC721("Amala", "AML") {}

// function _mint(address to, uint256 tokenId) internal virtual {
//         require(to != address(0), "ERC721: mint to the zero address");
//         require(!_exists(tokenId), "ERC721: token already minted");

//         _beforeTokenTransfer(address(0), to, tokenId);

//         // _balances[to] += 1;
//         // _owners[tokenId] = to;

//         emit Transfer(address(0), to, tokenId);

//         _afterTokenTransfer(address(0), to, tokenId);
//     }


// }


