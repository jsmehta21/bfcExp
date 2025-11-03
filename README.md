# Blockchain Fabric Composer Experiment 12

This project demonstrates the implementation of a simple Hyperledger Fabric Composer business network.  
It defines participants, assets, and transactions, and implements logic using JavaScript.

---

## 📁 Project Structure
```
JIYA-BFC-EXP12/
│
├── lib/
│ └── logic.js # Contains transaction logic (JavaScript)
│
├── models/
│ ├── org.example.basic.cto # Model definitions (Participants, Assets, Transactions)
│
├── output-demo.txt # Sample output file
├── BFC_Exp12.docx # Coursework documentation
├── package.json # Network metadata and dependencies
├── permission.acl # Access control list for participants
└── README.md # Instructions (this file)
```

---

## ⚙️ Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 8.x or later)
- [npm](https://www.npmjs.com/)
- [Hyperledger Composer CLI](https://hyperledger.github.io/composer/latest/installing/installing-prereqs.html)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Fabric Development Server](https://hyperledger.github.io/composer/latest/tutorials/developer-tutorial)

---

## 🚀 Steps to Run

### 1. Install Composer CLI globally
```bash
npm install -g composer-cli
npm install -g composer-playground
npm install -g generator-hyperledger-composer
npm install -g yo
```

### 2. Start the Fabric runtime
```
cd fabric-dev-servers
./startFabric.sh
./createPeerAdminCard.sh
```

### 3. Generate a Business Network Archive (BNA)

Run this command from inside the project folder:
```
composer archive create -t dir -n .
```

### 4. Deploy the network
```
composer network install --card PeerAdmin@hlfv1 --archiveFile jiya-bfc-exp12@0.0.1.bna
composer network start --networkName jiya-bfc-exp12 --networkVersion 0.0.1 --adminUser admin --adminPassword adminpw --card PeerAdmin@hlfv1 --file networkadmin.card
```

### 5. Import and test the network
```
composer card import --file networkadmin.card
composer network ping --card admin@jiya-bfc-exp12
```

### 6. Launch Composer Playground (Optional)
```
composer-playground
```

Then open your browser at http://localhost:8080 to interact with the network visually.

🧠 Files Overview
File	Description
- org.example.basic.cto -> Defines participants, assets, and transactions
- logic.js -> Contains the business logic for transaction execution
- permission.acl ->	Specifies access permissions for network participants
- package.json ->	Holds metadata for the business network
- output-demo.txt -> Shows sample output or transaction logs
- BFC_Exp12.docx ->	Documentation for coursework submission
