// ==UserScript==
// @name         Add favicon
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Change favicon. local host
// @author       You
// @match        http://skoleportalen.ror-ikt.no/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var favicon_link_html = document.createElement('link');
    favicon_link_html.rel = 'icon';
    favicon_link_html.href = 'https://portal.vestnes.org/image/house-xxl.png';
    favicon_link_html.type = 'image/png';

    try {
        document.getElementsByTagName('head')[0].appendChild( favicon_link_html );
    }
    catch(e) { }
})();
