/* eslint-disable quotes */
/* eslint-disable no-undef */
"use strict";

function handleClickDesign() {
  fillContent.classList.add("collapsed");
  shareContent.classList.add("collapsed");
  designContent.classList.remove("collapsed");
  arrowDesign.classList.remove("arrow-collapsed");
  arrowFill.classList.add("arrow-collapsed");
  arrowShare.classList.add("arrow-collapsed");
}

function handleClickFill() {
  designContent.classList.add("collapsed");
  shareContent.classList.add("collapsed");
  fillContent.classList.remove("collapsed");
  arrowFill.classList.remove("arrow-collapsed");
  arrowDesign.classList.add("arrow-collapsed");
  arrowShare.classList.add("arrow-collapsed");
}

function handleClickShare() {
  designContent.classList.add("collapsed");
  fillContent.classList.add("collapsed");
  shareContent.classList.remove("collapsed");
  arrowShare.classList.remove("arrow-collapsed");
  arrowFill.classList.add("arrow-collapsed");
  arrowDesign.classList.add("arrow-collapsed");
}

designLegend.addEventListener("click", handleClickDesign);

fillLegend.addEventListener("click", handleClickFill);

shareLegend.addEventListener("click", handleClickShare);
