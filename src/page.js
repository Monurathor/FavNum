import React, {useState} from 'react'
import {ethers} from 'ethers'
import abi from './contracts/abi.json'
import './App.css';

const Name = () => {

	let contractAddress = '0x4ecf65798F9016077Ee220E27A1C299d65970245';

	const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);
	const [connButtonText, setConnButtonText] = useState('Connect Wallet');

	const [displayVal, setDisplayVal] = useState(null);

	const [contract, setContract] = useState(null);

	const connectWalletHandler = () => {
		if (window.ethereum && window.ethereum.isMetaMask) {

			window.ethereum.request({ method: 'eth_requestAccounts'})
			.then(result => {
				accountChangedHandler(result[0]);
				setConnButtonText('Wallet Connected');
			})
			.catch(error => {
				setErrorMessage(error.message);
			
			});

		} else {
			console.log('install MetaMask');
			setErrorMessage('install MetaMask browser extension');
		}
	}

	const accountChangedHandler = (newAccount) => {
		setDefaultAccount(newAccount);
		updateEthers();
	}

	const chainChangedHandler = () => {
		window.location.reload();
	}

	window.ethereum.on('accountsChanged', accountChangedHandler);

	window.ethereum.on('chainChanged', chainChangedHandler);

	const updateEthers = () => {
		let tempProvider = new ethers.providers.Web3Provider(window.ethereum);
		let tempSigner = tempProvider.getSigner();
		let tempContract = new ethers.Contract(contractAddress, abi, tempSigner);
		setContract(tempContract);	
	}

	const setHandler = (event) => {
		event.preventDefault();
		contract.set(event.target.setText.value);
		setDisplayVal('done seting ' + event.target.setText.value + ' to the contract');
	}

	const getCurrentVal = async () => {
		let val = await contract.get();
        setDisplayVal('current value is ' + val);
	}
	
	return (
		<div>
			<header>
			<button className='connect' onClick={connectWalletHandler}>{connButtonText}</button>
			</header>
			
			<form onSubmit={setHandler}>
				<input id="setText" type="text"/>
				<button className='setbtn' type={"submit"}>Set New Value</button>
			</form>
			<div>
			<button className='getbtn' onClick={getCurrentVal} style={{marginTop: '5em'}}> Get Value </button>
			</div>
			<h4>{displayVal}</h4>
			{errorMessage}
		</div>
	);
}

export default Name;