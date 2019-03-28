import * as prototypeJson from './prototype.json';

const address = '0x000000000000000000000050726f746f74797065';

function get(method) {
    const abi = Object.values(prototypeJson)[0].find(value => value.name === method);
    return connex.thor.account(address).method(abi);
}

const setMaster = () => get('setMaster');
const isUser = () => get('isUser');
const storageFor = () => get('storageFor');
const energy = () => get('energy');
const removeUser = () => get('removeUser');
const currentSponsor = () => get('currentSponsor');
const setCreditPlan = () => get('setCreditPlan');
const selectSponsor = () => get('selectSponsor');
const balance = () => get('balance');
const sponsor = () => get('sponsor');
const creditPlan = () => get('creditPlan');
const addUser = () => get('addUser');
const hasCode = () => get('hasCode');
const master = () => get('master');
const userCredit = () => get('userCredit');
const unsponsor = () => get('unsponsor');
const isSponsor = () => get('isSponsor');


export {
    setMaster,
    isUser,
    storageFor,
    energy,
    removeUser,
    currentSponsor,
    setCreditPlan,
    selectSponsor,
    balance,
    sponsor,
    creditPlan,
    addUser,
    hasCode,
    master,
    userCredit,
    unsponsor,
    isSponsor
}