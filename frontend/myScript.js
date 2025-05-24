const tokenCreateContractABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "doner",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "date",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "condition",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "donatedTo",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "isConsented",
				"type": "bool"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "isEvaluated",
				"type": "bool"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "isStored",
				"type": "bool"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "isAssigned",
				"type": "bool"
			}
		],
		"name": "organIdCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "requestId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "patient",
				"type": "string"
			}
		],
		"name": "requestApproved",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "patient",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "isApproved",
				"type": "bool"
			}
		],
		"name": "requestIdCreated",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			},
			{
				"components": [
					{
						"internalType": "string",
						"name": "patientName",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "isApproved",
						"type": "bool"
					}
				],
				"internalType": "struct TokenCreateContract.RequestId",
				"name": "_request",
				"type": "tuple"
			}
		],
		"name": "approveRequest",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "availableOrgan",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_donerName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_date",
				"type": "uint256"
			}
		],
		"name": "createOrgan",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "patientName",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "createRequest",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAvailableOrganCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "count",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "getOrgan",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "donerName",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "dateDonated",
						"type": "uint256"
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
				"internalType": "struct TokenCreateContract.OrganId",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "getRequest",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "patientName",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "isApproved",
						"type": "bool"
					}
				],
				"internalType": "struct TokenCreateContract.RequestId",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "organCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "organs",
		"outputs": [
			{
				"internalType": "string",
				"name": "donerName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "dateDonated",
				"type": "uint256"
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
		"name": "requestCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "requests",
		"outputs": [
			{
				"internalType": "string",
				"name": "patientName",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "isApproved",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalRequest",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			},
			{
				"components": [
					{
						"internalType": "string",
						"name": "donerName",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "dateDonated",
						"type": "uint256"
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
				"internalType": "struct TokenCreateContract.OrganId",
				"name": "_organ",
				"type": "tuple"
			}
		],
		"name": "updateOrgan",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];
const ConsentContractABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_donor",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_tokenCreate",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_date",
				"type": "uint256"
			}
		],
		"name": "consent",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "donor",
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
		"name": "tokenCreate",
		"outputs": [
			{
				"internalType": "contract ITokenCreate",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
const EvaluateContractABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_specialist",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_tokenAddr",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "organId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "condition",
				"type": "string"
			}
		],
		"name": "evaluate",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "specialist",
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
		"name": "tokenContract",
		"outputs": [
			{
				"internalType": "contract ITokenCreate",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
const AssignContractABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_doctor",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_tokenAddr",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "patient",
				"type": "string"
			}
		],
		"name": "createRequest",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "doctor",
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
		"name": "tokenContract",
		"outputs": [
			{
				"internalType": "contract ITokenCreate",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
const AvailabilityContractABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_healthcare",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_tokenAddr",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "requestId",
				"type": "uint256"
			}
		],
		"name": "approveRequest",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "healthcare",
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
		"name": "tokenContract",
		"outputs": [
			{
				"internalType": "contract ITokenCreate",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
const tokenCreateContractAddress = '0xF973B766ef18340D8AB76FFcaC0D53C75C1A143f';
const consentContractAddress = '0x9627744033843fEd1ffc4cd8cE62C9f88c333d83';
const evaluateContractAddress = '0xa22E8564c0c297eee6897DCB2045Ae0855A2937f';
const assignContractAddress = '0xAb53C3dACCD38C105B704bE1bcCdF3B6cB700b03';
const availabilityContractAddress = '0x7a4b6993b04dB4a85E5016c1FB65727822f1ecbe';	

let web3;
let accounts = [];
let TokenCreateContract;
let ConsentContract;
let EvaluateContract;
let AssignContract;
let AvailabilityContract;


(async () => {
	if (window.ethereum) {
		try {
			web3 = new Web3(window.ethereum);
			accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
			
			TokenCreateContract = new web3.eth.Contract(tokenCreateContractABI, tokenCreateContractAddress);
			ConsentContract = new web3.eth.Contract(ConsentContractABI, consentContractAddress);
			EvaluateContract = new web3.eth.Contract(EvaluateContractABI, evaluateContractAddress);
			AssignContract = new web3.eth.Contract(AssignContractABI, assignContractAddress);
			AvailabilityContract = new web3.eth.Contract(AvailabilityContractABI, availabilityContractAddress);
			
			populateAccountDropdown(accounts);
			loadRequestsToDropdown();
			loadOrgansToDropdown();
			updateAvailableDisplay();
			console.log("Available accounts: ", accounts);
		} catch (err) {
			console.error("User denied wallet connection or error occurred:", err);
		}
	}else {
		alert("MetaMask is not installed. Please install it to use this app.");
	}
})();

window.addEventListener("load", async () => {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log("Connected account:", accounts);
      } else {
        alert("MetaMask not found.");
      }
    });

    window.ethereum?.on('accountsChanged', (newAccounts) => {
      accounts = newAccounts;
      populateAccountDropdown(accounts);
    });


const todayDate = new Date();
const timestamp = todayDate.getTime();
let organCount = 0;
document.getElementById('button').addEventListener("click", updateAvailableDisplay());

async function updateAvailableDisplay(event) {
	const availableOrganCount = await availableOrganCountGetter();
	const display = document.getElementById("numberDisplay");
	display.innerHTML = availableOrganCount;
}

function populateAccountDropdown(accountList) {
      const select = document.getElementById("accountSelect");
      select.innerHTML = "";
      accountList.forEach(account => {
        const option = document.createElement("option");
        option.value = account;
        option.text = account;
        select.appendChild(option);
      });
}
	
function populateOrganDropdown(organList) {
	const select = document.getElementById("organSelect");
	select.innerHTML = "";
	console.log(organList);
	organList.forEach(organ => {
		const option = document.createElement("option");
		option.value = organ.id;
		option.text = `${organ.id} ${organ.donerName} (${organ.dateDonated})`;
		select.appendChild(option);
	})
}

function populateRequestDropdown(requestList) {
	const select = document.getElementById("requestSelect");
	select.innerHTML = "";
	console.log(requestList);
	requestList.forEach(request => {
		const option = document.createElement("option");
		option.value = request.id;
		option.text = `${request.id} ${request.patientName} (${request.approved})`;
		select.appendChild(option);
	})
}
	
function getSelectedAccount() {
	return document.getElementById("accountSelect").value;
}

function timestampToDate(time) {
	const date = new Date(timestamp);
	return date.toLocaleDateString();
}

function removeOptionById(selectId, targetId) {
	const select = document.getElementById(selectId);
	for (let i = 1; i < select.options.length; i++) {
		console.log(select.options[i].value);
		if (select.options[i].value === targetId) {
			select.remove(i);
			break;
		}
	}
}

async function availableOrganCountGetter() {
	const contract = TokenCreateContract;
	const availableCount = await contract.methods.getAvailableOrganCount().call();
	return availableCount; 
}

async function loadOrgansToDropdown() {
	const organList = await organGetter();
	populateOrganDropdown(organList);
}

async function loadRequestsToDropdown() {
	const requestList = await requestGetter();
	populateRequestDropdown(requestList);
}

async function organGetter() {
	const organList = [];
	organCount = await TokenCreateContract.methods.organCount().call();
	
	for (let i = 1; i <= organCount; i++) {
	const organ = await TokenCreateContract.methods.getOrgan(i).call();
	const donateDate = timestampToDate(organ.dateDonated);
	
	organList.push({id: i, donerName: organ.donerName, dateDonated: donateDate});
	console.log();
	console.log();
	}
	return organList;
}

async function requestGetter() {
	const requestList = [];
	const requestCount = await TokenCreateContract.methods.requestCount().call();
	
	for (let i = 1; i <= requestCount; i++) {
	const request = await TokenCreateContract.methods.getRequest(i).call();
	
	requestList.push({id: i, patientName: request.patientName, approved: request.isApproved});
	console.log();
	console.log();
	}
	return requestList;
}

async function addDoner() {
	const name = document.getElementById("donerName").value; //to retrieve and assign the name to 'name'
	if (!name) return alert("Please enter your name.");
	const contract = ConsentContract;
	const from = getSelectedAccount();
	
	if (!contract) {
  alert("Please connect your wallet first and make sure the contract is loaded.");
  return;
}
	try {
		await contract.methods.consent(name, timestamp).send({from});
		console.log("Donor added!");
	}catch (err) {
	console.error("Error occurred!", err);
	}
	
	try {
		loadOrgansToDropdown();
		console.log("populatedOrgans!");
	}catch (err) {
		console.error("Error!!", err);
	}
}

async function createRequest() {
	const name = document.getElementById("patientName").value; //to retrieve and assign the name to 'name'
	if (!name) return alert("Please enter your name.");
	const contract = AssignContract;
	const from = getSelectedAccount();
	
	if (!contract) {
  alert("Please connect your wallet first and make sure the contract is loaded.");
  return;
}
	try {
		await contract.methods.createRequest(name).send({from});
		console.log("Request added!");
	}catch (err) {
	console.error("Error occurred!", err);
	}
	
	try {
		loadRequestsToDropdown();
		console.log("populatedRequests!");
	}catch (err) {
		console.error("Error!!", err);
	}
}

async function approveRequest() {
	const requestSelect = document.getElementById("requestSelect");
	const requestId = requestSelect.value;
	const contract = AvailabilityContract;
	const from = getSelectedAccount();
	
	if (!contract) {
  alert("Please connect your wallet first and make sure the contract is loaded.");
  return;
}
	try {
		await contract.methods.approveRequest(requestId).send({from});
		removeOptionById("requestSelect", requestId);
		updateAvailableDisplay();
		
		console.log(`Request ${requestSelect} is approved.`);
	}catch (err) {
	console.error("Error occurred!", err);
	}
}

async function evaluateOrgan() {
	const conditionSelect = document.getElementById("conditionSelect");
	const conditionValue = conditionSelect.value;
	const conditionText = conditionSelect.options[conditionSelect.selectedIndex].text;
	console.log(conditionText);
	const organSelect = document.getElementById("organSelect");
	const organId = organSelect.value;
	if (conditionSelect == "0") return alert("Condition is not selected.");
	const contract = EvaluateContract;
	const from = getSelectedAccount();
	
	if (!contract) {
  alert("Please connect your wallet first and make sure the contract is loaded.");
  return;
}
	try {
		await contract.methods.evaluate(organId, conditionText).send({from});
		removeOptionById("organSelect", organId);
		console.log(`Organ ${organSelect} is evaluated with condition: ${conditionText}`);
	}catch (err) {
	console.error("Error occurred!", err);
	}
}

