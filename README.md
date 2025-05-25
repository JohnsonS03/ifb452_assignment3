**GITHUB: [LINK TO REPO](https://github.com/JohnsonS03/ifb452_assignment3.git)**

# OrganChain<br/>
This application is designed to ensure legal handling of human organs for transplantation. Each organ will have a Token ID that can be viewed by the application regarding its authenticity and information. This Token will be transferred among stakeholders for them to view its information and legality.<br/>
<br/>

## Stakeholders:<br/>
• **Doner** – A High trust stakeholders, Both living and deceased doners are responsible for the creation of organ ID with appropriate information. <br/>
• **Specialist** – A High trust stakeholders, responsible for evaluating health and performing procedures. <br/>
• **Healthcare department** – A high trust stakeholders, responsible for storing, transporting and distribution of the organ.<br/>
• **Practitioner** – A high trust stakeholder that is responsible for assigning the organ to the patient. Can display Token with its information as proof of authenticity. <br/>
• **Reception**– A stakeholder that is responsible for providing accurate information and ensure secure medical data handling and documentation for payment.<br/>
<br/>

## Smart Contracts:<br/>
• **Create**– create a token with ID for an organ, done by Doners or family members of deceased doner to the organ that they donated. This will carry all its information in “OrganChain” application <br/>
• **Evaluate** – Determined quality of the organ donated by Doner, done by Specialist<br/>
• **Available** – Will approve and add the organ in storage, done by Healthcare Department <br/>
• **Assign** – will allocate the organ to the patient, done by Practitioner<br/>
• **Consent** – Provide legal consent for organ donation, done by Donor <br/>
• **Billing** – Payment processing, done by Reception<br/>
<br/>

The Token ID will be a digital identity of the organ that is donated by the Doner. This displays the origin of the organ, and condition. When this Token ID is entered into OrganChain, it will display the following information: <br/>
**• Organ ID** <br/>
**• By (Name of Doner)** <br/>
**• Date Donated** <br/>
**• Condition** <br/>
**• Donated to (Name of Recipient)**<br/>
<br/>

Initially, Doner will have to sign a consent form for organ donation. <br/>
• **Create** – Permission only for Donor <br/>
• **Evaluate** – Permission only for Specialist <br/>
• **Available** – Permission only for Healthcare Department <br/>
• **Assign** – Permission only for Practitioner 
• **Billing** - will be completed finally as external transaction.<br/>
<br/>

# Functions Explaination:
## Current Address:
![image](https://github.com/user-attachments/assets/4a0933c7-d3ec-4331-95af-3440c8b2bad2)<br/>
**Current Address** allows the application to switch between stakeholder and select the one we desire as to operate on each smart contract, while the function executed will prompt user to verify transaction and smart contract will ensure the selected stakeholder is the assigned function stakeholder.<br/>
<br/>

## Donor:
![image](https://github.com/user-attachments/assets/fd9e18fd-579e-4b58-ad3f-0924d25aac7a)<br/>
**Donor** allows donor(s) to submit organ donation consent into the blockchain.


