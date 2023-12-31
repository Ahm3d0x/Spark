const { app, BrowserWindow } = require('electron');

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.loadFile('index.html'); // Replace 'index.html' with the path to your HTML file

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});
