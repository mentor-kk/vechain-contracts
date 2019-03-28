# Description

Javascript smart contract wrapper for connex driven dapps

# Supported smart contracts

- https://github.com/vechain/thor-builtins/blob/master/contracts/prototype.sol
- https://github.com/vechain/thor-builtins/blob/master/contracts/energy.sol


# Install

`npm i --save vechain-contracts`

# Example


### With vechain-contracts wrapper

```
import { currentSponsor } from 'vechain-contracts/prototype';

currentSponsor().call(address)
  .then(data => { ... })
  .catch(error => { ... });

```

alternatively

```
import * as mpp from 'vechain-contracts/prototype';

mpp.currentSponsor().call(address)
  .then(data => { ... })
  .catch(error => { ... });
```

### Without vechain-contracts wrapper

```
// get smart contract method ABI definition
const currentSponsorABI = {
    "constant": true,
    "inputs": [
        {
            "name": "_self",
            "type": "address"
        }
    ],
    "name": "currentSponsor",
    "outputs": [
        {
            "name": "",
            "type": "address"
        }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
};

// create method by providing contract address
const currentSponsorMethod = connex.thor.account('0x000000000000000000000050726f746f74797065').method(currentSponsorABI);

// finally call method
currentSponsorMethod.call(address)
  .then(data => { ... })
  .catch(error => { ... });

```

# Current development

With next major version all contracts from `thor-builtins` will be supported
- https://github.com/vechain/thor-builtins/tree/master/contracts