// ==UserScript==
// @name         Autoclik on timeout
// @namespace
// @version      0.1
// @description  Will keep you logged in
// @author       trondes
// @match        https://skole.visma.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    setInterval(function () {
        if ($('.logout_countdown #dialogContinueButton').length) {
            $('.logout_countdown #dialogContinueButton').trigger('click');
        }
    }, 10000);
})();
