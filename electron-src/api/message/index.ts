import { ipcRenderer } from 'electron';

export const message = {
  send: (payload: unknown) => ipcRenderer.send('message', payload),
  on: (handler: unknown) => ipcRenderer.on('message', handler as any),
  off: (handler: unknown) => ipcRenderer.off('message', handler as any),
};

export type Message = typeof message;
