const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('desktop', {
  chooseFolder: () => ipcRenderer.invoke('choose-folder'),
  saveOutput: (payload) => ipcRenderer.invoke('save-output', payload),
  openFile: (file) => ipcRenderer.invoke('open-file', file)
});
