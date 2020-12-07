// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title MemeOfTheDay
 * @notice An ERC1155 compliant token that manages meme NFTs
 * @author MemeOfTheDay
 */
contract MemeOfTheDay is ERC1155, Ownable {
    // Hashes of meme pictures on IPFS
    string[] public hashes;

    // Mapping for enforcing unique hashes
    mapping(string => bool) _hashExists;

    mapping(uint256 => address payable) public creatorOf;
    mapping(uint256 => address payable) public ownerOf;
    mapping(uint256 => int256) public creatorFee;

    event MemeMinted(address creator, uint256 tokenId);

    constructor() public ERC1155("https://game.example/api/item/{id}.json") {}

    /**
     * @notice Changes the URI to fetch NFTs info from
     * @param _newUri   the new URI to fetch NFTs info from
     */
    function setUri(string memory _newUri) external onlyOwner {
        _setURI(_newUri);
    }

    /**
     * @notice Mints a new meme NFT
     * @param _hash IPFS hash of the NFT
     * @param _creatorFee custom fee to send to the creator, if is -1 it uses the default one set in the MOTDSaleParametersProviderContract
     */
    function mint(string memory _hash, int256 _creatorFee) public {
        require(!_hashExists[_hash], "Token with this hash is already minted");

        hashes.push(_hash);
        uint256 _id = hashes.length - 1;
        _mint(msg.sender, _id, 1, "");

        _hashExists[_hash] = true;

        creatorOf[_id] = msg.sender;
        ownerOf[_id] = msg.sender;
        creatorFee[_id] = _creatorFee;

        emit MemeMinted(msg.sender, _id);
    }

    /**
     * @notice Returns the number of minted memes
     * @return count the number of memes
     */
    function getMemesCount() public view returns (uint256 count) {
        return hashes.length;
    }
}