import BlockchainService from "../../service/blockchainService";
const service = {};

service.trans = (key, toAddress, amount) => {
    BlockchainService.createTransaction(key, toAddress, parseInt(amount));
    
    return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            errorCode: true,
            data: {  },
          });
        }, 500);
      });
}


export default service;
