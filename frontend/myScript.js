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
				"name": "donor",
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
				"name": "_donorName",
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
						"name": "donorName",
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
				"name": "donorName",
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
						"name": "donorName",
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
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "date",
				"type": "uint256"
			}
		],
		"name": "consentGiven",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "date",
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
				"internalType": "contract ITokenContract",
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
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "organId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "condition",
				"type": "string"
			}
		],
		"name": "evaluationDone",
		"type": "event"
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
				"internalType": "contract ITokenContract",
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
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "patient",
				"type": "string"
			}
		],
		"name": "requestCreated",
		"type": "event"
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
				"internalType": "contract ITokenContract",
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
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "requestId",
				"type": "uint256"
			}
		],
		"name": "requestAppoved",
		"type": "event"
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
				"internalType": "contract ITokenContract",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
const BillingContractABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_receptionist",
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
				"name": "patientName",
				"type": "string"
			}
		],
		"name": "InvoiceGenerated",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_requestId",
				"type": "uint256"
			}
		],
		"name": "generateInvoice",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_requestId",
				"type": "uint256"
			}
		],
		"name": "getInvoice",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "requestId",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "patientName",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "generated",
						"type": "bool"
					}
				],
				"internalType": "struct BillingContract.Invoice",
				"name": "invoice",
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
				"name": "",
				"type": "uint256"
			}
		],
		"name": "invoices",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "requestId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "patientName",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "generated",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "receptionist",
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
				"internalType": "contract ITokenContract",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
const tokenCreateContractAddress = '0xE3086cFfF71948dE46c80DDc53D44CF195EE4526';
const consentContractAddress = '0x8e3F7057b95E8D7a9130A91E062b3A2780de7abD';
const evaluateContractAddress = '0x4D78Fa9fe044aB039c6a388ea09dF9EdC9CA4a08';
const assignContractAddress = '0x8514154070bb5EF59C3049785BA55529Ad918EFe';
const availabilityContractAddress = '0x21b4460f99ca13Fc186D3a0FEF04f41357b8f662';
const billingContractAddress = '0xA16fFA03B86911c4F4c4f1a18102bD065420118f';

let web3;
let accounts = [];
let TokenCreateContract;
let ConsentContract;
let EvaluateContract;
let AssignContract;
let AvailabilityContract;
let BillingContract;


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
			BillingContract = new web3.eth.Contract(BillingContractABI, billingContractAddress);

			populateAccountDropdown(accounts);
			loadRequestsToDropdown();
			loadOrgansToDropdown();
			updateAvailableDisplay();
			console.log("Available accounts: ", accounts);
		} catch (err) {
			console.error("User denied wallet connection or error occurred:", err);
		}
	} else {
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
document.getElementById('organID').addEventListener('change', function () {
	updateOrganPreview();
})
document.getElementById('requestID').addEventListener('change', function () {
	updateRequestPreview();
})
document.getElementById('requestForInvoiceID').addEventListener('change', function () {
	updateInvoicePreview();
})


/**
 *Update the organ data display in the 'organPreview'
 *in EventListener to automate the display update
 *
 */
async function updateOrganPreview() {
	const targetOrgan = document.getElementById('organID').value;
	console.log(targetOrgan);

	try {
		const organ = await getOrgan(targetOrgan);
		const name = organ.donerName;
		const date = timestampToDate(organ.dateDonated);
		const condition = organ.condition;
		const patient = organ.donatedTo;

		console.log(`${organ.donerName}${timestampToDate(organ.dateDonated)}${organ.condition}${organ.donatedTo}`);
		document.getElementById('nameID').innerText = name;
		document.getElementById('dateID').innerText = date;
		document.getElementById('conditionID').innerText = condition;
		document.getElementById('patientID').innerText = patient;
	} catch (err) {
		console.error("Failed to fetch organ data:", err);
	}
}

/**
 *Update the request data display in the 'requestPreview'
 *in EventListener to automate the display update
 *
 */
async function updateRequestPreview() {
	const targetRequest = document.getElementById('requestID').value;
	console.log(targetRequest);

	try {
		const request = await getRequest(targetRequest);
		statusText = "";
		const status = request.isApproved;

		if (status) {
			statusText = "Has Been Approved";
		}
		else {
			statusText = "Has Not Been Approved";
		}

		console.log(`${name}${statusText}`);
		document.getElementById('statusID').innerText = statusText;
	} catch (err) {
		console.error("Failed to fetch request data:", err);
	}
}

/**
 *Update the invoice data display in the 'invoicePreview'
 *in EventListener to automate the display update
 *
 */
async function updateInvoicePreview() {
	const targetInvoice = document.getElementById('requestForInvoiceID').value;

	try {
		const invoice = await getInvoice(targetInvoice);
		statusText = "";
		const requestId = invoice.requestId;
		const patientName = invoice.patientName;
		const isGenerated = invoice.generated;

		if (isGenerated) {
			statusText = "\nhas been generated!";
		}
		else {
			statusText = "\nhas not been generated yet."
		}

		document.getElementById('invoiceID').innerText = "Invoice #" + `${requestId}.${patientName} ` + statusText;
	} catch (err) {
		console.error("Failed to print invoice!", err);
	}
}

/**
 *Update the organ available count display in the 'numberDisplay' div
 *(decremental every time a request is approved)
 *in EventListener, automate the display update
 *in approveRequest function, update the display after a selected request is approved
 *
 * @param {*} event
 */
async function updateAvailableDisplay(event) {
	const availableOrganCount = await availableOrganCountGetter();
	const display = document.getElementById("numberDisplay");
	display.innerText = "Organ left to assigned: \n" + availableOrganCount;
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

/**
 *Update and load the existing organ list into the passed parameter, organList
 *in loadOrgansToDropdown function, will pass in a array parameter, organList, organList will be modified and pushed the existing organ list
 *
 * @param {*} organList
 */
function populateOrganDropdown(organList) {
	const select = document.getElementById("organSelect");
	const select1 = document.getElementById("organID");
	select.innerHTML = `<option value="0">-Organ ID-</option>`;
	select1.innerHTML = `<option value="0">-Organ ID-</option>`;
	console.log(organList);
	organList.forEach(organ => {
		const option = document.createElement("option");
		option.value = organ.id;
		option.text = `${organ.id}. ${organ.donorName} (${organ.dateDonated})`;
		select.appendChild(option);
	})
	organList.forEach(organ => {
		const option = document.createElement("option");
		option.value = organ.id;
		option.text = `${organ.id}. ${organ.donorName} (${organ.dateDonated})`;
		select1.appendChild(option);
	})
}

/**
 *Update and load the existing request list into the passed parameter, requestList
 *in loadRequestsToDropdown function, will pass in a array parameter, requestList, requestList will be modified and pushed the existing request list
 *
 * @param {*} requestList
 */
function populateRequestDropdown(requestList) {
	const select = document.getElementById("requestSelect");
	const select1 = document.getElementById("requestID");
	const invoiceRequest = document.getElementById("requestForInvoiceID");
	select.innerHTML = `<option value="0">--Requests--</option>`;
	select1.innerHTML = `<option value="0">--Requests--</option>`;
	invoiceRequest.innerHTML = `<option value="0">--Requests--</option>`;
	console.log(requestList);
	requestList.forEach(request => {
		const option = document.createElement("option");
		option.value = request.id;
		option.text = `${request.id}. ${request.patientName} (${request.approved})`;
		select.appendChild(option);
	})
	requestList.forEach(request => {
		const option = document.createElement("option");
		option.value = request.id;
		option.text = `${request.id}. ${request.patientName}`;
		select1.appendChild(option);
	})
	requestList.forEach(request => {
		const option = document.createElement("option");
		option.value = request.id;
		option.text = `${request.id}. ${request.patientName}`;
		invoiceRequest.appendChild(option);
	})
}

/**
 *Retrieve the selected value (address account) from the dropdown list('accountSelect')
 * @return {*} 
 */
function getSelectedAccount() {
	return document.getElementById("accountSelect").value;
}

/**
 *Parsed time (in timestamp format) to readable format(eg. 26/5/2025)
 *
 * @param {*} time
 * @return {*} 
 */
function timestampToDate(time) {
	const date = new Date(timestamp);
	return date.toLocaleDateString();
}

/**
 *Remove a element with 'targetId' from the dropdown list with 'selectId'
 *
 * @param {*} selectId
 * @param {*} targetId
 */
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

/**
 *Getter to retrieve a specific organ data from the blockchain
 *
 * @param {*} targetId
 * @return {*} 
 */
async function getOrgan(targetId) {
	const contract = TokenCreateContract;
	const theOrgan = await contract.methods.getOrgan(targetId).call();
	return theOrgan;
}

/**
 *Getter to retrieve a specific request data from the blockchain
 *
 * @param {*} targetId
 * @return {*} 
 */
async function getRequest(targetId) {
	const contract = TokenCreateContract;
	const theRequest = await contract.methods.getRequest(targetId).call();
	return theRequest;
}

async function getInvoice(targetId) {
	const contract = BillingContract;
	const theInvoice = await contract.methods.getInvoice(targetId).call();
	return theInvoice;
}

/**
 *Getter to retrieve the available organ count stored in the blockchain
 *
 * @return {*} 
 */
async function availableOrganCountGetter() {
	const contract = TokenCreateContract;
	const availableCount = await contract.methods.getAvailableOrganCount().call();
	return availableCount;
}

/**
 *
 *
 */
async function loadOrgansToDropdown() {
	const organList = await organGetter();
	populateOrganDropdown(organList);
}

/**
 *
 *
 */
async function loadRequestsToDropdown() {
	const requestList = await requestGetter();
	populateRequestDropdown(requestList);
}

/**
 *Getter to retrieve every organ stored in the blockchain
 *
 * @return {*} 
 */
async function organGetter() {
	const organList = [];
	organCount = await TokenCreateContract.methods.organCount().call();

	for (let i = 1; i <= organCount; i++) {
		const organ = await TokenCreateContract.methods.getOrgan(i).call();
		const donateDate = timestampToDate(organ.dateDonated);

		organList.push({ id: i, donorName: organ.donorName, dateDonated: donateDate });
		console.log();
		console.log();
	}
	return organList;
}

/**
 *Getter to retrieve every request stored in the blockchain
 *
 * @return {*} 
 */
async function requestGetter() {
	const requestList = [];
	const requestCount = await TokenCreateContract.methods.requestCount().call();

	for (let i = 1; i <= requestCount; i++) {
		const request = await TokenCreateContract.methods.getRequest(i).call();

		requestList.push({ id: i, patientName: request.patientName, approved: request.isApproved });
	}
	return requestList;
}

/**
 *Create a tokenID by adding a new doner after consent is given
 *
 * @return {*} 
 */
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
		await contract.methods.consent(name, timestamp).send({ from });
		console.log("Donor added!");
	} catch (err) {
		console.error("Error occurred!", err);
	}

	try {
		loadOrgansToDropdown();
		console.log("populatedOrgans!");
	} catch (err) {
		console.error("Error!!", err);
	}
}

/**
 *Create a request with the given patient name
 *
 * @return {*} 
 */
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
		await contract.methods.createRequest(name).send({ from });
		console.log("Request added!");
	} catch (err) {
		console.error("Error occurred!", err);
	}

	try {
		loadRequestsToDropdown();
		console.log("populatedRequests!");
	} catch (err) {
		console.error("Error!!", err);
	}
}

/**
 *Generate an invoice for patient with id 'targetRequest'
 *
 * @return {*} 
 */
async function generateInvoice() {
	const contract = BillingContract;
	const from = getSelectedAccount();
	const targetRequest = document.getElementById('requestForInvoiceID').value;
	console.log(targetRequest);
	if (targetRequest == 0) {
		alert("Please select a patient.");
		return;
	}

	try {
		await contract.methods.generateInvoice(targetRequest).send({ from });
		console.log("Invoice generated and pushed!");
	}
	catch (err) {
		console.error("Error occurred!", err);
	}
}

/**
 *Approve selected request with id 'requestId'
 *
 * @return {*} 
 */
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
		await contract.methods.approveRequest(requestId).send({ from });

		console.log(`Request ${requestSelect} is approved.`);
	} catch (err) {
		console.error("Error occurred!", err);
	}
	updateAvailableDisplay();

}

/**
 *Assign an selected evaluation to the organ with id 'organId'
 *
 * @return {*} 
 */
async function evaluateOrgan() {
	const conditionSelect = document.getElementById("conditionSelect");
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
		await contract.methods.evaluate(organId, conditionText).send({ from });
		removeOptionById("organSelect", organId);
		console.log(`Organ ${organSelect} is evaluated with condition: ${conditionText}`);
	} catch (err) {
		console.error("Error occurred!", err);
	}
}

