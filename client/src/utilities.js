const fs = require('fs')


fs.readdir('C:\\Users\\Admin\\Desktop\\Github\\electron-app\\client\\src\\backend', (err, files) => {
    console.log(files);
})