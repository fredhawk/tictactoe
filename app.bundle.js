!function(e){function r(n){if(t[n])return t[n].exports;var u=t[n]={i:n,l:!1,exports:{}};return e[n].call(u.exports,u,u.exports,r),u.l=!0,u.exports}var t={};return r.m=e,r.c=t,r.i=function(e){return e},r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r.p="",r(r.s=1)}([function(e,r){},function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function u(e){if(Array.isArray(e)){for(var r=0,t=Array(e.length);r<e.length;r++)t[r]=e[r];return t}return Array.from(e)}function a(e,r){var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=!0,u=!1,a=void 0;try{for(var l,o=t[Symbol.iterator]();!(n=(l=o.next()).done);n=!0){if(l.value.every(function(t){return e[t]===r}))return!0}}catch(e){u=!0,a=e}finally{try{!n&&o.return&&o.return()}finally{if(u)throw a}}return!1}function l(e,r){for(var t in e)if(null===e[t]){var n=[].concat(u(e));n[t]=r;var l=a(n,r);if(1==l)return+t}return!1}function o(){"X"==M.currentPlayer?M.currentPlayer="O":M.currentPlayer="X"}function c(){return Math.floor(Math.random()*M.board.length)}function d(){var e=c();if(!M.board[e])return M.board[e]=M.currentPlayer,!0;d()}function s(){if("easy"==M.difficulty){d()}else{var e=l(M.board,M.computer);if(e)M.board[e]=M.computer;else if(l(M.board,M.human))e=l(M.board,M.human),M.board[e]=M.computer;else{d()}}setTimeout(function(){q()},900)}function i(e){return e=null===e?"":e}function f(e,r){return r%3==0?'\n      <tr><td id="square'+(r+1)+'" class="square"><span>'+i(e)+"</span></td>\n    ":(r+1)%3==0?'\n      <td id="square'+(r+1)+'" class="square"><span>'+i(e)+"</span></td></tr>\n    ":'\n      <td id="square'+(r+1)+'" class="square"><span>'+i(e)+"</span></td>\n    "}function m(e){return"draw"===e?"No winner, it is a draw!":e+" has won!"}function y(e){var r=document.createElement("h1"),t=document.createElement("h2"),n=document.createTextNode(e),u=document.createTextNode("Want to play again?");r.classList.add("end-message"),t.classList.add("end-message"),r.appendChild(n),t.appendChild(u),E.insertBefore(r,T),E.insertBefore(t,T),document.querySelector(".modal-title")&&E.removeChild(w),x.classList.toggle("closed"),C.classList.toggle("closed")}function q(){var e=M.board.map(f).join("");if(h.innerHTML=e,document.querySelector(".end-message")&&E.removeChild(document.querySelector(".end-message")),a(M.board,M.currentPlayer)===!0){var r=m(M.currentPlayer);setTimeout(function(){y(r)},600)}else if(M.turn>=8&&0==a(M.board,M.currentPlayer)){var t=m("draw");setTimeout(function(){y(t)},600)}else o(),M.turn++,M.currentPlayer===M.computer&&s()}function p(e){g(e)}function v(e){null===M.board[e.target.id.split("").pop()-1]&&M.currentPlayer===M.human&&(M.board[e.target.id.split("").pop()-1]=M.currentPlayer,q())}function g(e){e.preventDefault();var r=document.querySelector('input[name="player"]:checked').value;M.currentPlayer="X",M.human=r,M.computer="X"===r?"O":"X",M.difficulty=e.target.textContent.toLowerCase(),M.turn=0,M.board=[null,null,null,null,null,null,null,null,null],h.innerHTML='\n      <tr>\n        <td id="square1" class="square"></td>\n        <td id="square2" class="square"></td>\n        <td id="square3" class="square"></td>\n      </tr>\n      <tr>\n        <td id="square4" class="square"></td>\n        <td id="square5" class="square"></td>\n        <td id="square6" class="square"></td>\n      </tr>\n      <tr>\n        <td id="square7" class="square"></td>\n        <td id="square8" class="square"></td>\n        <td id="square9" class="square"></td>\n      </tr>\n    </table>',x.classList.toggle("closed"),C.classList.toggle("closed"),M.currentPlayer===M.computer&&s()}var b=t(0),h=(n(b),document.querySelector(".gameboard")),P=document.querySelector(".reset"),S=(document.querySelectorAll(".square"),document.querySelector(".easy")),L=document.querySelector(".hard"),x=document.querySelector("#modal"),w=document.querySelector(".modal-title"),T=document.querySelector(".modal-tagline"),C=document.querySelector("#modal-overlay"),E=document.querySelector(".modal-guts"),M={currentPlayer:"X",human:"",computer:"",difficulty:"easy",turn:0,board:[null,null,null,null,null,null,null,null,null]};h.addEventListener("click",function(e){return v(e)}),P.addEventListener("click",function(e){return p(e)}),S.addEventListener("click",function(e){return g(e)}),L.addEventListener("click",function(e){return g(e)})}]);