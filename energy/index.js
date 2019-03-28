import * as energyJson from './energy.json';

const address = '0x000000000000000000000050726f746f74797065';

function get(method) {
    const abi = Object.values(energyJson)[0].find(value => value.name === method);
    return connex.thor.account(address).method(abi);
}

const name = () => get('name');
const approve = () => get('approve');
const totalSupply = () => get('totalSupply');
const transferFrom = () => get('transferFrom');
const decimals = () => get('decimals');
const balanceOf = () => get('balanceOf');
const symbol = () => get('symbol');
const transfer = () => get('transfer');
const move = () => get('move');
const totalBurned = () => get('totalBurned');
const allowance = () => get('allowance');
const Transfer = () => get('Transfer');
const Approval = () => get('Approval');

export {
	name,
	approve,
	totalSupply,
	transferFrom,
	decimals,
	balanceOf,
	symbol,
	transfer,
	move,
	totalBurned,
	allowance,
	Transfer,
	Approval
}