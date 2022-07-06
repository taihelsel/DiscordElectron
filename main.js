const { app, BrowserWindow } = require('electron');

//setup
const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })
    win.loadFile('index.html')
}
//on app ready
app.whenReady().then(() => {
    createWindow();
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})
//exits
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})