// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

/**
 * This function displays an alert.
 */

if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/github-page-pwa/sw.js", { scope: "/github-page-pwa/" })
}

function myButtonClicked() {
  document.getElementById("hello-world").innerHTML = "<p>Hello, World!</p>"
}
