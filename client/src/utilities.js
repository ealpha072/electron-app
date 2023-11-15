const fs = require('fs')



console.log(__dirname)

fs.readdir('C:\\Users\\Admin\\Desktop\\Github\\electron-app\\client\\src\\backend', (err, files) => {
    console.log(files);
})