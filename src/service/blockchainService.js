import { Blockchain, Transaction } from "../data/blockchain";
const SHA256 = require('crypto-js/sha256');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const BlockchainService = {};
BlockchainService.myCoin = new Blockchain();

BlockchainService.createWallet = (password) => {
    // create private & public key
    const key = ec.keyFromPrivate(SHA256(password).toString(), 'hex');
    const publicKey = key.getPublic('hex');

    const block = BlockchainService.myCoin.miningPendingTransactions(publicKey);

    return {key: key, block: block};
};

BlockchainService.getWallet = (key) => {
    // create private & public key
    const privateKey = key.getPrivate('hex');
    const publicKey = key.getPublic('hex');

    const coin = BlockchainService.myCoin.getBalanceOfAddress(publicKey);

    return coin;
};

BlockchainService.createTransaction = (key, toAddress, amount) => {
    const myWalletAddress = key.getPublic('hex');
    // create object transaction
    const transaction = new Transaction(myWalletAddress, toAddress, amount);
    // sign transaction with private key
    transaction.signTransaction(key);
    // add transactions
    BlockchainService.myCoin.addTransaction(transaction);
}

BlockchainService.getTransactionsOfWallet = (key) => {
    const myWalletAddress = key.getPublic('hex');
    return BlockchainService.myCoin.getTransactionsOfWallet(myWalletAddress);
}

BlockchainService.getAllTransactions = () => {
    return BlockchainService.myCoin.getAllTransaction();
}

BlockchainService.getCoinOfWallet = (key) => {
    const walletAddress = key.getPublic('hex');
    return BlockchainService.myCoin.getBalanceOfAddress(walletAddress);
};

export default BlockchainService;
