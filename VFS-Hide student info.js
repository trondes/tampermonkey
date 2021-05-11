// ==UserScript==
// @name         VFS-Hide student information 
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Hide student info, option to show.
// @author       trond
// @match        https://skole.visma.com/*
// @grant        none
// ==/UserScript==

var reloadTimer;

(function () {
    'use strict';
    addGlobalStyle('#pupilOverviewContainer{ display:none; }');
    addGlobalStyle('#PupilNINNumberInput{background: #282828;}');
    CheckOverviewButton();
    $('body').on('click', '#showOverview', function (event) {
        event.preventDefault();
        if ($('#pupilOverviewContainer').is(":visible")) {
            $('#showOverview').text("Vis oversikt");
            $('#pupilOverviewContainer').css('display', 'none');
        } else {
            $('#pupilOverviewContainer').css('display', 'block');
            $('#showOverview').text("Fjern oversikt");
        }
    });

})();

function CheckOverviewButton() {
    reloadTimer = setInterval(function () { addShowButton(); }, 1000);
}

function addShowButton() {
    if ($('#showOverview').length == 0) {
        $('#pupilOverviewContainer').parent().append('<button type="button" id="showOverview" class="btn btn-secondary" style="float: left; width: 175px; position: absolute; left: 645px;">Vis oversikt</button>');
    }
}

function addGlobalStyle(css) {
   var head, style;
   head = document.getElementsByTagName('head')[0];
   if (!head) { return; }
   style = document.createElement('style');
   style.type = 'text/css';
   style.innerHTML = css;
   head.appendChild(style);
}
