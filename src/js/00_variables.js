/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
'use strict';

//Collapsable variables//
const designLegend = document.querySelector('.js_design-legend');
const designContent = document.querySelector('.js_design-content');
const fillLegend = document.querySelector('.js_fill-legend');
const fillContent = document.querySelector('.js_fill-content');
const shareLegend = document.querySelector('.js_share-legend');
const shareContent = document.querySelector('.js_share-content');
const arrowDesign = document.querySelector(".js_arrow-design");
const arrowFill = document.querySelector(".js_arrow-fill");
const arrowShare = document.querySelector(".js_arrow-share");

//Form input variables//
const inputName = document.querySelector('.js_fill-name');
const inputJob = document.querySelector(".js_fill-job");
const inputEmail = document.querySelector(".js_fill-email");
const inputTel = document.querySelector(".js_fill-tel");
const inputLinkedin = document.querySelector(".js_fill-linkedin");
const inputGithub = document.querySelector(".js_fill-github");

//Preview variables//
const previewName = document.querySelector(".js_preview-name");
const previewJob = document.querySelector(".js_preview-job");
const previewTel = document.querySelector(".js_preview-tel");
const previewEmail = document.querySelector(".js_preview-email");
const previewLinkedin = document.querySelector(".js_preview-linkedin");
const previewGithub = document.querySelector(".js_preview-github");
const previewCard = document.querySelector(".js_preview-card");


//Input color palette variables//
const palette1 = document.querySelector(".js_palette1");
const palette2 = document.querySelector(".js_palette2");
const palette3 = document.querySelector(".js_palette3");

//reset
const btnReset = document.querySelector(".js_reset");

//avatar
const fileField = document.querySelector('.js__profile-upload-btn');
const profileImage = document.querySelector('.js__profile-image');
const profilePreview = document.querySelector('.js__profile-preview');

//localStorage
const localStorageData = JSON.parse(localStorage.getItem("userData"));
