import { contextBridge } from 'electron'

contextBridge.exposeInMainWorld('noodElectron', {
  platform: process.platform
})
