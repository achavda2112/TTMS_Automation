## Name
Traffic Management System.

## Description
Traffic Ticket Management System (TTMS) is a web-based application that was commissioned by the Ministry of National Security (MNS) and was developed with the following objectives in mind:

1. Capture and management of traffic tickets (NEW- TTMS Data Entry Module (TTMS-DE)).
2. Assist the Traffic and Resident Magistrate (RM) Courts to more efficiently manage court decisions/dispositions relating to traffic offences and traffic ticket fines paid at the Courts.
3. Assisting the stakeholders in improving the integrity and consistency of traffic ticket data and information.
4. Improve the efficiency in the processing of traffic ticket data.
5. Improving management and administration of demerit points, expunge demerit points, the suspension, revocation and re-instatement of driver’s licences.
6. Assist in better monitoring traffic ticket payments.
7. Manage warrants issued by the Courts for traffic offences. 
8. Increase awareness of tickets issued, ticket payments, and warrants issued, court decisions, demerit points by the various stakeholders.

## Prerequisite & setup
NodeJS
Java JDK
Set JAVA_HOME path

## Installation
npm init
npm install
npm install @wdio/cli
npx wdio config

## How To Run 
(Use in Static menu) (Use Chrome Browser - 116.0.0)
npm run wdio 
- Enter this Code in terminal(on proper path) To Run File.

wdio.config.js 
- If user wants to run perticuler file then need to give path of that file in above file title.
- specs: [
        './tms-testsuite/ticketProcessing/manualTicket/specs/*.js'

<Filename>TestData file
- User needs to set input data in this file for each file.

<Filename>Locators files
- If user wants to change any locators for elements in pages.

sequential file - 
- User need to select from where ticket number should start to create.

Title file - 
- User need to add number for code for configuration pages auto generation. 

Newuser file - 
- User need to add number for new user generation number start from.  

Function.js file (In Utils)
- If user wants to update any function.

TestData.js file (In Utils)
- To Change Username and password.

Locators.js
- To change Locators of pages.