# Med-rec
Blockchain-Based Electronic Medical Records System with Smart Contract

---

MedChain utilizes IPFS as its underlying technology, serving as the distributed file system for storing patients' medical records. These records can be accessed by either patients or doctors through interactions with a smart contract deployed on the Ethereum blockchain.

The process begins with the client establishing a connection with MetaMask, followed by utilizing the smart contract to create a patient or doctor block, associated with the respective wallet address.

Upon successful creation, the client has the capability to upload a medical record file onto IPFS. This file's IPFS address is then linked to a specific patient block within the Ethereum blockchain. From the smart contract, the client can retrieve all the addresses of records stored within a patient block, and subsequently retrieve a record file by its address from IPFS.
- React
- Truffle
- Ganache

### Demo
https://github.com/itoqsky/med-rec/assets/47076924/5d3eb0a8-88df-4e79-82d9-1fc0e96d4cdb
