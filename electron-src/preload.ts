import { contextBridge } from 'electron';
import { message } from './api/message';

contextBridge.exposeInMainWorld('electron', {
  message,
});
