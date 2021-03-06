// ==UserScript==
// @id              RestoreYoutubeClassic
// @name            Restore Youtube Classic
// @version         4
// @author          Xathz
// @description     Restore the classic Youtube style, the new one breaks many addons/extensions.
// @namespace       https://github.com/Xathz/Restore-Youtube-Classic
// @icon            https://raw.github.com/Xathz/Restore-Youtube-Classic/master/Icon48.png
// @icon64          https://raw.github.com/Xathz/Restore-Youtube-Classic/master/Icon64.png
// @updateURL       https://raw.github.com/Xathz/Restore-Youtube-Classic/master/RestoreYoutubeClassic.meta.js
// @downloadURL     https://raw.github.com/Xathz/Restore-Youtube-Classic/master/RestoreYoutubeClassic.user.js
// @updateVersion   2
// @domain          youtube.com
// @domain          www.youtube.com
// @match           http://*.youtube.com/*
// @match           https://*.youtube.com/*
// @exclude         http://*.youtube.com/embed/*
// @exclude         https://*.youtube.com/embed/*
// @grant           none
// @run-at          document-start
// ==/UserScript==

var prefCookie = "f6=1008";

window.addEventListener('load', function() {
    var oldCookie = getCookie("PREF");

    document.cookie="PREF=" + prefCookie + ";path=/;domain=.youtube.com;secure";

    if (oldCookie.includes(prefCookie) === false) {
        location.reload();
    }
}, false);

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');

    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];

        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }

        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }

    return "";
}
