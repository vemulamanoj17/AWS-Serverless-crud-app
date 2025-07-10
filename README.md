# AWS Serverless CRUD App with React

This is a full-stack **serverless CRUD application** built using:

- **React** (Frontend)
- **AWS Lambda**
- **API Gateway**
- **DynamoDB**
- (Optional) **S3 for hosting**

##  Features

- Create, Read, Update, Delete (CRUD) operations
- RESTful API powered by AWS Lambda
- Scalable, pay-as-you-go infrastructure (serverless)
- Frontend built using React with Axios integration
- Lightweight and optimized for the AWS Free Tier

---

## 📸 Live Demo

 [Live App on Netlify](https://your-app-name.netlify.app)  
 [Source Code on GitHub](https://github.com/vemulamanoj17/AWS-Serverless-crud-app)

---

## Tech Stack

- **Frontend**: React, HTML, CSS, Axios
- **Backend**: Node.js (Lambda Functions)
- **Database**: DynamoDB (NoSQL)
- **Routing**: AWS API Gateway
- **Hosting**: Netlify / GitHub Pages (Frontend), AWS Lambda (Backend)

---

## Folder Structure

AWS-Serverless-crud-app/
│
├── frontend/ # React app (Netlify / GitHub Pages)
│ ├── src/
│ └── package.json
│
├── lambda/ # Backend Lambda functions
│ ├── create/
│ ├── read/
│ ├── update/
│ └── delete/
│
├── serverless.yml # (Optional) For Serverless Framework
└── README.md

---

## Testing

Use [Postman](https://www.postman.com/) or browser console to test endpoints:

POST /create
GET /read
PUT /update
DELETE /delete

## Cost Warning
This project uses AWS Free Tier, but you should:

 Delete Lambda functions

 Delete DynamoDB tables

 Disable API Gateway stages
…after testing to avoid AWS charges.

## Author
Made by Vemula Manoj
