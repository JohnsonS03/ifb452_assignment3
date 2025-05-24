const contractABI = [
	{
		"inputs": [
			{
				"internalType": "int256",
				"name": "_organId",
				"type": "int256"
			},
			{
				"internalType": "string",
				"name": "_donerName",
				"type": "string"
			}
		],
		"name": "agreeToConsent",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "int256",
				"name": "_organId",
				"type": "int256"
			},
			{
				"internalType": "string",
				"name": "_patient",
				"type": "string"
			}
		],
		"name": "assignOrganToPatient",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "int256",
				"name": "_organId",
				"type": "int256"
			},
			{
				"internalType": "string",
				"name": "_condition",
				"type": "string"
			}
		],
		"name": "evaluateOrganHealth",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "int256",
				"name": "_organId",
				"type": "int256"
			}
		],
		"name": "storeOrgan",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_doner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_specialist",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_healthcare",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_doctor",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "doctors_and_practitioner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "doner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "int256",
				"name": "_organId",
				"type": "int256"
			}
		],
		"name": "getOrganDetails",
		"outputs": [
			{
				"components": [
					{
						"internalType": "int256",
						"name": "organId",
						"type": "int256"
					},
					{
						"internalType": "string",
						"name": "donerName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "dateDonated",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "condition",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "donatedTo",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "isConsented",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "isEvaluated",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "isStored",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "isAssigned",
						"type": "bool"
					}
				],
				"internalType": "struct ExtContract.OrganId",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "healthcare_department",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"name": "organs",
		"outputs": [
			{
				"internalType": "int256",
				"name": "organId",
				"type": "int256"
			},
			{
				"internalType": "string",
				"name": "donerName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "dateDonated",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "condition",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "donatedTo",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "isConsented",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "isEvaluated",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "isStored",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "isAssigned",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "reception",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "specialist_and_surgeons",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
const contractAddress = '0x1bB5bf909d1200fb4730d899BAd7Ab0aE8487B0b';

let web3;
let contract;
let accounts;

window.addEventListener('DOMContentLoaded', async () => {
	if (window.ethereum) {
		web3 = new Web3(window.ethereum);
		await window.ethereum.request({ method: 'eth_requestAccounts' });
		accounts = await web3.eth.getAccounts();
		contract = new web3.eth.Contract(contractABI, contractAddress);
		console.log("Connected to MetaMask:", accounts[0]);

		document.getElementById('donateBtn').addEventListener('click', donateOrgan);
		document.getElementById('evaluateBtn').addEventListener('click', evaluateOrgan);
		document.getElementById('storeBtn').addEventListener('click', storeOrgan);
		document.getElementById('assignBtn').addEventListener('click', assignOrgan);
	} else {
		alert('Please install MetaMask');
	}
});

async function donateOrgan() {
	const organId = 1;
	const donorName = prompt("Enter donor name:");
	await contract.methods.agreeToConsent(organId, donorName).send({ from: accounts[0] });
	alert("Consent given by donor.");
}

async function evaluateOrgan() {
	const organId = 1;
	const condition = prompt("Enter organ condition:");
	await contract.methods.evaluateOrganHealth(organId, condition).send({ from: accounts[0] });
	alert("Organ evaluated.");
}

async function storeOrgan() {
	const organId = 1;
	await contract.methods.storeOrgan(organId).send({ from: accounts[0] });
	alert("Organ stored.");
}

async function assignOrgan() {
	const organId = 1;
	const patient = prompt("Enter patient name:");
	await contract.methods.assignOrganToPatient(organId, patient).send({ from: accounts[0] });
	alert("Organ assigned to patient.");
}
