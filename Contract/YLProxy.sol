//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.9;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

import "hardhat/console.sol";

contract YLProxy is ReentrancyGuard, Ownable{
    address public _ylOwner;
    address public prevadmin;
    uint256 public sufficientstakeamount;
    bool public paused;

    IERC20 public ylt;

    constructor() {
        _ylOwner = msg.sender;
        sufficientstakeamount = 100*10**18;
        ylt = IERC20(0x8e0B7Ced8867D512C75335883805cD564c343cB9);
    }
    
    mapping(address =>mapping(address =>uint256)) public stakedAmount;
    mapping(address => bool) public mintableAccounts; 
    mapping(address => bool) public burnableAccounts; 
    mapping(address => bool) public pausableAccounts;
    mapping(address => bool) public transferableAccounts; 

    //events
    event DepositStake(address indexed stakedUser, uint256 amount, address stakedContract, address tokenContract);
    event WithdrawStake(address indexed withdrawUser, uint256 amount, address withdrawContract, address tokenContract);

    event GrantACLto(address indexed _superadmin,address indexed admin,uint256 timestamp);
    event RemoveACLfrom(address indexed _superadmin,address indexed admin,uint256 timestamp);

    //YLT token address
    function setYLTAddress(address _yltToken) external onlyOwner returns(bool) {
        ylt = IERC20(_yltToken);
        return true;
    }

    //sufficient Amount
    function setSufficientAmount(uint256 _amount) public onlyOwner returns(bool) {
        sufficientstakeamount = _amount;
        return true;
    }

    //deposit
    function depositYLT(uint256 _amount) public {
        require(ylt.balanceOf(msg.sender) >= _amount, "Insufficient balance");
        require(ylt.allowance(msg.sender, address(this)) >= _amount, "Insufficient allowance");
        ylt.transferFrom(msg.sender, address(this), _amount);
        stakedAmount[msg.sender][address(ylt)] += _amount;
        emit DepositStake(msg.sender, _amount, address(this), address(ylt));
    }

    //withdraw
    function withdrawYLT(uint256 _amount) public nonReentrant {
        require(stakedAmount[msg.sender][address(ylt)] >= _amount, "Insufficient staked amount");
        ylt.transfer(msg.sender, _amount);
        stakedAmount[msg.sender][address(ylt)] -= _amount;
        emit WithdrawStake(msg.sender, _amount, address(this), address(ylt));
    }

    function changeSuperAdmin(address _superadmin) external onlyOwner {
           _ylOwner = _superadmin;
    }

    //mintable
    function accessMint(address _address, bool _value) public onlyOwner {
        if(_value== true){
            mintableAccounts[_address] = _value;
            emit GrantACLto(msg.sender, _address, block.timestamp);
        } else {
            mintableAccounts[_address]=_value;
            emit RemoveACLfrom(msg.sender, _address, block.timestamp);
        }
    }

    //burnable
    function accessBurn(address _address, bool _value) public onlyOwner {
        if(_value == true) {
            burnableAccounts[_address] = _value;
            emit GrantACLto(msg.sender, _address, block.timestamp);
        } else {
            burnableAccounts[_address] = _value;
            emit RemoveACLfrom(msg.sender, _address ,block.timestamp);
        }
    }

    //pausable
    function accessPause(address _address, bool _value) public onlyOwner {
        if(_value== true){
            pausableAccounts[_address] = _value;
            emit GrantACLto(msg.sender, _address, block.timestamp);
        } else {
            pausableAccounts[_address] = _value;
            emit RemoveACLfrom(msg.sender, _address, block.timestamp);
        }
    }

    //transferable
    function accessTransfer(address _address,bool _value) public onlyOwner {
        if(_value== true){
            transferableAccounts[_address] = _value;
            emit GrantACLto(msg.sender, _address, block.timestamp);
        } else {
            transferableAccounts[_address]=_value;
            emit RemoveACLfrom(msg.sender, _address, block.timestamp);
        }
    }

    function isMintableAccount(address _address) external view returns(bool) {
        if( stakedAmount[_address][address(ylt)] >= sufficientstakeamount && mintableAccounts[_address] == true) {
            return true;
        } else {
            return false;
        }
    }
    function isBurnAccount(address _address) external view returns(bool){
        if( stakedAmount[_address][address(ylt)] >= sufficientstakeamount && burnableAccounts[_address] == true) {
            return true;
        } else {
            return false;
        }
    }
    function isTransferAccount(address _address) external view returns(bool){
        if( stakedAmount[_address][address(ylt)] >= sufficientstakeamount && transferableAccounts[_address]==true) {
            return true;
        } else {
            return false;
        }
        
    }
    function isPauseAccount(address _address) external view returns(bool){
        if( stakedAmount[_address][address(ylt)] >= sufficientstakeamount && pausableAccounts[_address] == true) {
            return true;
        } else {
            return false;
        }
    }
}