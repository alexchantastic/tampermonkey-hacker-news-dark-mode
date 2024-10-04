// ==UserScript==
// @name         Hacker News Dark Mode
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Dark mode for Hacker News
// @author       You
// @match        https://news.ycombinator.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ycombinator.com
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
  "use strict";

  window.addEventListener("load", () => {
    const head = document.getElementsByTagName("head")[0];
    const style = document.createElement("style");

    style.type = "text/css";
    style.innerHTML = `
/* https://github.com/jgthms/hacker-news-dark-mode */

:root {
  --blue-h: 227;
  --blue-s: 10%;

  --black: #000000;
  --dark-grey: #222;
  --light-grey: #828282;
  --lightest-grey: #eee;
  --white: #ffffff;
  --orange: #ff6600;
  --beige: #f6f6ef;

  --darkest-blue: hsl(var(--blue-h), var(--blue-s), 7%);
  --dark-blue:hsl(var(--blue-h), var(--blue-s), 12%);
  --blue:hsl(var(--blue-h), var(--blue-s), 20%);
  --light-blue:hsl(var(--blue-h), var(--blue-s), 51%);

  --c5a: #5a5a5a;
  --c73: #737373;
  --c88: #888888;
  --c9c: #9c9c9c;
  --cae: #aeaeae;
  --cbe: #bebebe;
  --cce: #cecece;
  --cdd: #dddddd;

  --page-background: var(--darkest-blue);
  --accent: var(--blue);
  --text: var(--light-blue);
  --text-strong: var(--lightest-grey);
  --border: var(--light-blue);
  --background: var(--dark-blue);
  --input-border: var(--dark-blue);
  --input-background: var(--darkest-blue);
  --input-border: var(--accent);

  --c5a: hsl(var(--blue-h), var(--blue-s), 61%);
  --c73: hsl(var(--blue-h), var(--blue-s), 56%);
  --c88: hsl(var(--blue-h), var(--blue-s), 46%);
  --c9c: hsl(var(--blue-h), var(--blue-s), 41%);
  --cae: hsl(var(--blue-h), var(--blue-s), 36%);
  --cbe: hsl(var(--blue-h), var(--blue-s), 31%);
  --cce: hsl(var(--blue-h), var(--blue-s), 26%);
  --cdd: hsl(var(--blue-h), var(--blue-s), 21%);
}

input[type="text"],
input[type='number'],
textarea,
select {
  color: var(--text);
  background-color: var(--input-background);
  border: 1px solid var(--input-border);
}

html  { background-color: var(--page-background);}
body  { font-family:Verdana, Geneva, sans-serif; font-size:12pt; color:var(--text); }
td    { font-family:Verdana, Geneva, sans-serif; font-size:12pt; color:var(--text); }
label { font-family:Verdana, Geneva, sans-serif; font-size:12pt; color:var(--text) !important; }

.admin td   { font-family:Verdana, Geneva, sans-serif; font-size:8.5pt; color:var(--text-strong); }
.subtext td { font-family:Verdana, Geneva, sans-serif; font-size:  7pt; color:var(--text); }

input    { font-family:monospace; font-size:12pt; }
input[type="submit"] { font-family:Verdana, Geneva, sans-serif; }
textarea { font-family:monospace; font-size:12pt; }

a:link    { color:var(--text-strong); text-decoration:none; }
a:visited { color:var(--text); text-decoration:none; }

#hnmain  { background-color: var(--background); }
#header  { background-color: var(--accent); }
#border  { background-color: var(--accent); }

.default { font-family:Verdana, Geneva, sans-serif; font-size: 12pt; color:var(--text); }
.admin   { font-family:Verdana, Geneva, sans-serif; font-size:8.5pt; color:var(--text-strong); }
.title   { font-family:Verdana, Geneva, sans-serif; font-size: 12pt; color:var(--text); }
.subtext { font-family:Verdana, Geneva, sans-serif; font-size:  10pt; color:var(--text); }
.yclinks { font-family:Verdana, Geneva, sans-serif; font-size:  8pt; color:var(--text); }
.pagetop { font-family:Verdana, Geneva, sans-serif; font-size: 10pt; color:var(--border); }
.comhead { font-family:Verdana, Geneva, sans-serif; font-size:  10pt; color:var(--text); }
.comment { font-family:Verdana, Geneva, sans-serif; font-size:  10pt; line-height: 1.65; }
.hnname  { margin-right: 5px; }

.comment a:link, .comment a:visited { text-decoration: underline; }
.noshow { display: none; }
.nosee { visibility: hidden; pointer-events: none; cursor: default; }

.c00, .c00 a:link { color:var(--text-strong); }
.c5a, .c5a a:link, .c5a a:visited { color:var(--c5a); }
.c73, .c73 a:link, .c73 a:visited { color:var(--c73); }
.c82, .c82 a:link, .c82 a:visited { color:var(--text); }
.c88, .c88 a:link, .c88 a:visited { color:var(--c88); }
.c9c, .c9c a:link, .c9c a:visited { color:var(--c9c); }
.cae, .cae a:link, .cae a:visited { color:var(--cae); }
.cbe, .cbe a:link, .cbe a:visited { color:var(--cbe); }
.cce, .cce a:link, .cce a:visited { color:var(--cce); }
.cdd, .cdd a:link, .cdd a:visited { color:var(--cdd); }

.pagetop a:visited { color:var(--text-strong); }
.topsel a:link, .topsel a:visited { color:#ffffff; }

.subtext a:link, .subtext a:visited { color:var(--text); }
.subtext a:hover { text-decoration:underline; }

.comhead a:link, .subtext a:visited { color:var(--text); }
.comhead a:hover { text-decoration:underline; }

.hnmore a:link, a:visited { color:var(--text); }
.hnmore { text-decoration:underline; }

.default p { margin-top: 8px; margin-bottom: 0px; }

.pagebreak { page-break-before:always; }

pre, code { background: var(--darkest-blue) !important; }

pre { overflow: auto; padding: 2px; }
pre:hover { overflow:auto; }

.votelinks.nosee div.votearrow.rotate180 {
  display: none;
}

.comment { max-width: 720px; overflow: hidden; }
pre { max-width: 900px; }

.spacer { height: 15px !important; }
  `;

    head.appendChild(style);
  });
})();
