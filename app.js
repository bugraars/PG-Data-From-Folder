const { Client } = require("pg");
const fs = require("fs").promises;
const path = require("path");

const dbConfig = {
  user: "postgresUser",
  password: "**********",
  host: "000.00.000.00",
  port: 5432,
  database: "DBName",
};

const client = new Client(dbConfig);

async function processAddFromFolders() {
  try {
    await client.connect();

    const baseFolderPath = "C:/xxxxxxx/xxxxxxx/xxxxxxx/Uploads";

    const folders = await fs.readdir(baseFolderPath);

    for (let folder of folders) {
      const lawsuitId = folder;

      const folderPath = path.join(baseFolderPath, folder);
      const files = await fs.readdir(folderPath);

      for (let file of files) {
        const filePath = path.join(folder, file);

        try {
          const insertQuery = `
            INSERT INTO public."LawsuitUploadFile" ("LawsuitId", "FileName", "FilePath", "Name")
            VALUES ($1, $2, $3, $4)
          `;

          await client.query(insertQuery, [
            lawsuitId,
            file,
            path.join(folder, file),
            file,
          ]);

          console.log(`${lawsuitId} - File added to the database - ${file}`);
        } catch (insertError) {
          console.error(
            `${lawsuitId} - Unable to insert file to the database - ${file}`
          );
          continue;
        }
      }
    }
  } catch (err) {
    console.error(err);
  } finally {
    await client.end();
  }
}

processAddFromFolders();
