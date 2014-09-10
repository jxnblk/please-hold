(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){


var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="#333">' +
'<g>' +
'<path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(0 16 16)">' +
'<animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0"/>' +
'</path>' +
'<path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(45 16 16)">' +
'<animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.125s"/>' +
'</path>' +
'<path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(90 16 16)">' +
'<animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.25s"/>' +
'</path>' +
'<path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(135 16 16)">' +
'<animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.375s"/>' +
'</path>' +
'<path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(180 16 16)">' +
'<animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.5s"/>' +
'</path>' +
'<path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(225 16 16)">' +
'<animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.675s"/>' +
'</path>' +
'<path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(270 16 16)">' +
'<animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.75s"/>' +
'</path>' +
'<path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(315 16 16)">' +
'<animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.875s"/>' +
'</path>' +
'</g>' +
'</svg>';

var PleaseHoldProto = Object.create(HTMLElement.prototype);

PleaseHoldProto.createdCallback = function() {
    var shadow = this.createShadowRoot();
    shadow.innerHTML = svg;
};

document.registerElement('please-hold', {prototype: PleaseHoldProto});


},{}]},{},[1])