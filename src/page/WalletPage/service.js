import BlockchainService from "../../service/blockchainService";
const service = {};

service.getWallet = (key) => {
    const wallet = BlockchainService.getWallet(key);
    const transactions = BlockchainService.getTransactionsOfWallet(key);
    
    return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            errorCode: true,
            data: { coin: wallet, transactions: transactions },
          });
        }, 100);
      });
}


export default service;
