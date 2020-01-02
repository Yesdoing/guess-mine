import { handleNewUser, handleDisconnected } from './notification';
import { handleNewMessage } from './chat';
import { handleBeganPath, handleStrokedPath, handleFilled } from './paint';

let socket = null;

export const getSocket = () => socket;

export const updateSocket = (sc) => socket = sc;

export const initSockets = (sc) => {
  const { events } = window;
  updateSocket(sc);
  sc.on(events.newUser, handleNewUser);
  sc.on(events.disconnected, handleDisconnected);
  sc.on(events.newMsg, handleNewMessage);
  sc.on(events.beganPath, handleBeganPath);
  sc.on(events.strokedPath, handleStrokedPath);
  sc.on(events.filled, handleFilled);
}