# Data From folder To PostgreSQL

This is a Node.js application that reads files from a specific folder and inserts their details into a PostgreSQL database.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm
- PostgreSQL

### Installing

1. Clone the repository
2. Run `npm install` to install the dependencies
3. Update the `dbConfig` object in `app.js` with your PostgreSQL database details
4. Run `node app.js` to start the application

## Usage

The application reads files from the `C:/xxxxx/xxxxx/xxxxx/Uploads` directory and inserts their details into the `public."LawsuitUploadFile"` table in the PostgreSQL database.

## Built With

- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [pg](https://www.npmjs.com/package/pg) - Non-blocking PostgreSQL client for Node.js

## License

This project is licensed under the ISC License.