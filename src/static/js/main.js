(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleMessageNotification = handleMessageNotification;

function handleMessageNotification(data) {
  var message = data.message,
      nickname = data.nickname;
  console.log("".concat(nickname, ": ").concat(message));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsiaGFuZGxlTWVzc2FnZU5vdGlmaWNhdGlvbiIsImRhdGEiLCJtZXNzYWdlIiwibmlja25hbWUiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQU8sU0FBU0EseUJBQVQsQ0FBbUNDLElBQW5DLEVBQXlDO0FBQUEsTUFDdENDLE9BRHNDLEdBQ2hCRCxJQURnQixDQUN0Q0MsT0FEc0M7QUFBQSxNQUM3QkMsUUFENkIsR0FDaEJGLElBRGdCLENBQzdCRSxRQUQ2QjtBQUU5Q0MsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLFdBQWVGLFFBQWYsZUFBNEJELE9BQTVCO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gaGFuZGxlTWVzc2FnZU5vdGlmaWNhdGlvbihkYXRhKSB7XG4gIGNvbnN0IHsgbWVzc2FnZSwgbmlja25hbWUgfSA9IGRhdGE7XG4gIGNvbnNvbGUubG9nKGAke25pY2tuYW1lfTogJHttZXNzYWdlfWApO1xufSJdfQ==
},{}],2:[function(require,module,exports){
"use strict";

var _chat = require("./chat");

var socket = io("/");

function sendMessage(message) {
  socket.emit("newMessage", {
    message: message
  });
  console.log("You: ".concat(message));
}

function setNickname(nickname) {
  socket.emit("setNickname", {
    nickname: nickname
  });
}

socket.on("messageNotification", _chat.handleMessageNotification);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfNzI2NjgxMTQuanMiXSwibmFtZXMiOlsic29ja2V0IiwiaW8iLCJzZW5kTWVzc2FnZSIsIm1lc3NhZ2UiLCJlbWl0IiwiY29uc29sZSIsImxvZyIsInNldE5pY2tuYW1lIiwibmlja25hbWUiLCJvbiIsImhhbmRsZU1lc3NhZ2VOb3RpZmljYXRpb24iXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBR0EsSUFBTUEsTUFBTSxHQUFHQyxFQUFFLENBQUMsR0FBRCxDQUFqQjs7QUFFQSxTQUFTQyxXQUFULENBQXFCQyxPQUFyQixFQUE4QjtBQUM1QkgsRUFBQUEsTUFBTSxDQUFDSSxJQUFQLENBQVksWUFBWixFQUEwQjtBQUFFRCxJQUFBQSxPQUFPLEVBQVBBO0FBQUYsR0FBMUI7QUFDQUUsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLGdCQUFvQkgsT0FBcEI7QUFDRDs7QUFFRCxTQUFTSSxXQUFULENBQXFCQyxRQUFyQixFQUErQjtBQUM3QlIsRUFBQUEsTUFBTSxDQUFDSSxJQUFQLENBQVksYUFBWixFQUEyQjtBQUFFSSxJQUFBQSxRQUFRLEVBQVJBO0FBQUYsR0FBM0I7QUFDRDs7QUFJRFIsTUFBTSxDQUFDUyxFQUFQLENBQVUscUJBQVYsRUFBaUNDLCtCQUFqQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhhbmRsZU1lc3NhZ2VOb3RpZmljYXRpb24gfSBmcm9tICcuL2NoYXQnO1xuXG5cbmNvbnN0IHNvY2tldCA9IGlvKFwiL1wiKTtcblxuZnVuY3Rpb24gc2VuZE1lc3NhZ2UobWVzc2FnZSkge1xuICBzb2NrZXQuZW1pdChcIm5ld01lc3NhZ2VcIiwgeyBtZXNzYWdlIH0pO1xuICBjb25zb2xlLmxvZyhgWW91OiAke21lc3NhZ2V9YCk7XG59XG5cbmZ1bmN0aW9uIHNldE5pY2tuYW1lKG5pY2tuYW1lKSB7XG4gIHNvY2tldC5lbWl0KFwic2V0Tmlja25hbWVcIiwgeyBuaWNrbmFtZSB9KTtcbn1cblxuXG5cbnNvY2tldC5vbihcIm1lc3NhZ2VOb3RpZmljYXRpb25cIiwgaGFuZGxlTWVzc2FnZU5vdGlmaWNhdGlvbik7Il19
},{"./chat":1}]},{},[2])