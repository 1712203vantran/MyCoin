import BlockchainService from "../../service/blockchainService";
const service = {};

service.createWallet = (password) => {
    const wallet = BlockchainService.createWallet(password);
    
    return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            errorCode: true,
            data: { wallet },
          });
        }, 500);
      });
}


export default service;
