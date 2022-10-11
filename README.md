# Silicon Rush NFT Smart Contract

## Technologies Used -
- ### HardHat
- ### Solidity
- ### Infura
- ### Javascript


&nbsp;
## Getting Started -

## To install all required packages -
```sh
yarn install
```

### Add ```.env``` file in root directory and add required env variables(Refer .env.local file)
&nbsp;

#### Replace ```<name>``` and ```<token>``` with your NFT _*Name*_ and _*Token*_ in ```deploy/01_SiliconRush.js```,line numbers - ```9 and 10```
&nbsp;

Modify ```baseURI```, ```baseExtension```, ```cost```, ```maxSupply```, ```maxMintAmount``` in contracts/SiliconRush.sol 


### To deploy SiliconRush -

```sh
npx hardhat deploy
```

OR
```sh
hh deploy
```
### By default it contract is deployed to local HardHat Network

### To deploy contract to ```Rinkeby``` Testnet 
```sh
hh deploy --network rinkeby
```

### To deploy contract to ```ETHEREUM``` Mainnet
```sh
hh deploy --network mainnet
```

### To deploy contract to ```POLYGON Mumbai``` Testnet 
```sh
hh deploy --network mumbai
```

### To deploy contract to ```POLYGON``` Mainnet 
```sh
hh deploy --network polygon
```

### Add other blockchain network configurations in ```hardhat.config.js``` file.
&nbsp;


## If you want to list your custom NFT Token on ```OpenSea``` -

### Modify .env file to add ```MNEMONIC```, ```INFURA_KEY```, ```NFT_CONTRACT_ADDRESS```, ```OWNER_ADDRESS```

and then run,
```sh
hh run scripts/list.js
```
OR
```sh
npx hardhat run scripts/list.js
```
