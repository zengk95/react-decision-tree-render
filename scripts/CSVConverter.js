//import { csvParser } from 'csv-parser';
const csv = require('csv-parser');
const fs = require('fs');

const results = [];

fs.createReadStream('..\\tmdb-5000-movie-dataset\\tmdb_5000_movies.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
        fs.writeFile("..\\tmdb-5000-movie-dataset\\outputs.json", JSON.stringify(results.slice(0,100)), (err) => {
            if (err) {
                console.log(err);
                return;
            }
        });
    });
