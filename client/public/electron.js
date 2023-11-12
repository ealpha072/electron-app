const {app, BrowserWindow}  = require("electron")
// const url = require( "url")
// const path  = require("path")

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'
const createWindow = () => {

    /*const startUrl = process.env.ELECTRON_START_URL || url.format({
        pathname: path.join(__dirname, "../index.html"),
        protocol: 'file:',
        slashes: true,
    })*/
    const win = new BrowserWindow ({
        width: 800,
        height: 800,
        /*webPreferences: {
            nodeIntegration:true
        }*/
    })

    win.loadURL('http://localhost:3000')
    win.webContents.openDevTools()
}

app.whenReady().then(createWindow)

app.on('window-all-closed', ()=>{
    if(process.platform !== 'darwin'){
        app.quit()
    }
})

app.on('activate', ()=>{
    if(BrowserWindow.getAllWindows().length === 0){
        createWindow()
    }
})