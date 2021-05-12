import BlockchainService from "../../service/blockchainService";
const service = {};

service.getTransactions = () => {
    const transactions = BlockchainService.getAllTransactions();
    
    return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            errorCode: true,
            data: {transactions: transactions },
          });
        }, 100);
      });
}


export default service;
