// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Transactions {
    uint256 transactionCount;

    event Transfer(address from, address receiver, uint amount, string message, uint256 timestamp, string gifurl);

    struct TransferStruct {
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
        string gifurl;
    }

    TransferStruct[] transactions;

    function addToBlockchain(address payable receiver, uint amount, string memory message, string memory gifurl) public {
        transactionCount += 1;
        transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp, gifurl));

        emit Transfer(msg.sender, receiver, amount, message, block.timestamp, gifurl);
    }

    function getAllTransactions() public view returns (TransferStruct[] memory) { 
        return transactions;
    }

    function getTransactionCount() public view returns (uint256) { 
        return transactionCount;
    }

    // send message for website owner
    
    // Memo struct
    struct Memo {
        address from;
        uint256 timestamp;
        string name;
        string message;
    }
 
    // event to emit when new Memo is created
    event NewMemo(
        address from,
        uint256 timestamp,
        string name,
        string message
    );

     // list of all Memos received from friends
    Memo[] memos;

    // address of contract deployer
    address payable owner;

    // deploy logic
    constructor() {
        owner = payable(msg.sender); 
    }

    /**
     * @dev buy a coffee for contract owner
     * @param _name name of coffee buyer
     * @param _message a nice message from the coffee buyer
     */
    function buyCoffee(string memory _name, string memory _message) public payable {
        require(msg.value > 0, "You can not buy coffee with 0 eth");

        // add new Memo to storage
        memos.push(Memo(
            msg.sender, 
            block.timestamp,
            _name, 
            _message
        ));

        // emit a log event when a new memo is created
        emit NewMemo(            
            msg.sender, 
            block.timestamp,
            _name, 
            _message
        );

        
    }
    
    /**
     * @dev send the entire balance stored in this contract to the owner
     */
    function withdrawTips() public {
        require(owner.send(address(this).balance));
    }

    /**
     * @dev retrieve all the memos received and stored on the blockchain
     */
    function getMemos() public view returns(Memo[] memory) {
        return memos;
    }
}