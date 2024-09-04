const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'files');

// write file
for (let i = 0; i < 5; i++) {
    // fs.writeFileSync(dirPath + "/hello" + i + ".txt", "A simple hello");
    fs.writeFileSync(`${dirPath}/hello${i}.txt`, "A simple hello");
}

// read files name
fs.readdir(dirPath, (error, files) => {
    console.log(files);
    files.forEach((item) => {
        console.log(item);
    })
});


// read file
/*
  const data = fs.readFileSync('/Users/joe/test.txt', 'utf8');
  console.log(data);
*/
fs.readFile(`${dirPath}/hello1.txt`, 'utf-8', (error, data) => {
    console.log(data);
    if (error) {
        console.log(error);
    }

})


// update file name
fs.rename(`${dirPath}/hello1.txt`, `${dirPath}/hello1updated.txt`, (error) => {
    if (!error) {
        console.log("File name is updated successfully");
    }
    else { console.log("Error: " + error); }
})

// update file data
fs.appendFile(`${dirPath}/hello1updated.txt`, " to nodejs developer", (error) => {
    if (!error) {
        console.log("File updated successfully");
    }
    else { console.log("Error: " + error); }
})

// delete file
fs.unlink(`${dirPath}/hello4.txt`, (error) => {
    if (!error) {
        console.log("File deleted successfully");
    }
    else { console.log("Error: " + error); }
})


