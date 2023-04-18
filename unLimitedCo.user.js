// ==UserScript==
// @name         unLimitedCo
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  bypass 2048 MB file size limit on dosya.co
// @author       asdjasasd
// @match        https://dosya.co/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // dosya.co bypass limit
    window.checkSize = function(obj) {return true};
    window.getFileSize = function(obj) {return 1024}

})();