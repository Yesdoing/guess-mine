import { handleNewUser, handleDisconnected } from './notification';

let socket = null;

export const getSocket = () => socket;

export const updateSocket = (sc) => socket = sc;

export const initSockets = (sc) => {
  const { events } = window;
  updateSocket(sc);
  sc.on(events.newUser, handleNewUser);
  sc.on(events.disconnected, handleDisconnected);
}