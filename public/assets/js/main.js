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

/* eslint-disable quotes */
/* eslint-disable no-undef */
/* eslint-disable strict */

// Fill info into preview card //
let data = {
  palette: 1,
  name: '',
  job: '',
  phone: '',
  email: '',
  linkedin: '',
  github: '',
  photo: '',
};


// Evento para escuchar a todos los inputs cuando se rellenan.
const inputList = document.querySelectorAll('.js__input');

function handleInputList(event) {
  data[event.target.id] = event.target.value;
  updatePreview();
}

for (const eachInput of inputList) {
  eachInput.addEventListener('input', handleInputList);
}

const updatePreview = () => {
  if (data.name === '') {
    previewName.innerHTML = 'Nombre Apellido';
  } else {
    previewName.innerHTML = data.name;
  }

  if (data.job === '') {
    previewJob.innerHTML = 'Front-end developer';
  } else {
    previewJob.innerHTML = data.job;
    previewJob.classList.remove("preview__card--link--disabled");
  }
  previewTel.href = `tel:${data.phone}`;
  previewTel.classList.remove("preview__card--link--disabled");
  previewEmail.href = `mailto:${data.email}`;
  previewEmail.classList.remove("preview__card--link--disabled");
  previewLinkedin.href = data.linkedin;
  previewLinkedin.classList.remove("preview__card--link--disabled");
  previewGithub.href = data.github;
  previewGithub.classList.remove("preview__card--link--disabled");
  // if (profileImage.style.backgroundImage===""){
  //   profileImage.style.backgroundImage = `url(../images/image-preview-default.jpg)`;
  //   profilePreview.style.backgroundImage = `url(../images/image-preview-default.jpg)`;
  // }

  localStorage.setItem("userData", JSON.stringify(data));
};


// Change colors palette //

function handleClickPalettes(event) {
  const target = event.target.id;
  if (target === "color_1") {
    previewCard.classList.remove("palette2");
    previewCard.classList.remove("palette3");
    previewCard.classList.add("palette1");
    data.palette = "1";
  }

  if (target === "color_2") {
    previewCard.classList.remove("palette1");
    previewCard.classList.remove("palette3");
    previewCard.classList.add("palette2");
    data.palette = "2";
  }

  if (target === "color_3") {
    previewCard.classList.remove("palette2");
    previewCard.classList.remove("palette1");
    previewCard.classList.add("palette3");
    data.palette = "3";
  }
}

designContent.addEventListener("click", handleClickPalettes);

//botón reset
const handleClickReset = (ev) => {
  ev.preventDefault();
  data.palette = 1;
  data.name = "";
  data.job = "";
  data.phone = "";
  data.email = "";
  data.linkedin = "";
  data.github = "";
  data.photo = "";
  palette1.checked = true;
  inputName.value = "";
  inputJob.value = "";
  inputEmail.value = "";
  inputTel.value = "";
  inputLinkedin.value = "";
  inputGithub.value = "";
  previewCard.classList.remove("palette2");
  previewCard.classList.remove("palette3");
  previewCard.classList.add("palette1");
  profileImage.style.backgroundImage = data.photo;
  profilePreview.style.backgroundImage = data.photo;
  updatePreview();
  localStorage.removeItem("userData");
};

btnReset.addEventListener("click", handleClickReset);
'use strict';

const sendBtn = document.querySelector('.js_create_button');
const infoText = document.querySelector('.js_infoText');
const btnTwitter = document.querySelector('.js_buttonTwitter');
const shareLink = document.querySelector('.js_shareLink');
const shareLinkTwitter = document.querySelector('.js_shareLinkTwitter');
const contentButton = document.querySelector('.js_shareButtonContent');

function handleClickSend(event){ //dentro de esta función tiene q ocurrir el FETCH, para q cuando la usuaria haga click los datos se envíen
    event.preventDefault();
    fetch('https://dev.adalab.es/api/card/',
        {
            method: 'POST',
            headers:{'content-type': 'application/json'},
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then((data) =>{
            console.log(data);
            if( ! data.success){ 
                infoText.innerHTML = data.error;
                shareLink.href='';
            }else{
                infoText.innerHTML="La tarjeta ha sido creada";
                shareLink.classList.remove('collapsed');
                shareLink.href = data.cardURL;
                shareLink.innerHTML = data.cardURL;
                btnTwitter.classList.remove('collapsed');
                shareLinkTwitter.href = `https://twitter.com/intent/tweet?text=Echa%20un%20vistazo%20a%20mi%20tarjeta:&url=${data.cardURL}`;
                contentButton.classList.add('selected');
            }
        });
}
sendBtn.addEventListener('click', handleClickSend);
/* eslint-disable quotes */
/* eslint-disable no-undef */
'use strict';



'use strict';

const fr = new FileReader();



/**
 * Recoge el archivo añadido al campo de tipo "file"
 * y lo carga en nuestro objeto FileReader para que 
 * lo convierta a algo con lo que podamos trabajar.
 * Añade un listener al FR para que ejecute una función
 * al tener los datos listos
 * @param {evento} e 
 */
function getImage(e){
  const myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);
}


/**
 * Una vez tenemos los datos listos en el FR podemos
 * trabajar con ellos ;)
 */
function writeImage() {
  /* En la propiedad `result` de nuestro FR se almacena
   * el resultado. Ese resultado de procesar el fichero que hemos cargado
   * podemos pasarlo como background a la imagen de perfil y a la vista previa
   * de nuestro componente.
   */
  profileImage.style.backgroundImage = `url(${fr.result})`;
  profilePreview.style.backgroundImage = `url(${fr.result})`;
  data.photo = fr.result;
}


/**
 * Añadimos los listeners necesarios:
 * - al botón visible para generar el click automático
 * - al campo oculto para cuando cambie su value
 */
fileField.addEventListener('change', getImage);
if (localStorageData) {
  data = localStorageData;

  inputName.value = data.name;
  inputJob.value = data.job;
  inputEmail.value = data.email;
  inputTel.value = data.phone;
  inputLinkedin.value = data.linkedin;
  inputGithub.value = data.github;

  if (data.palette === "1") {
    palette1.checked = true;
    previewCard.classList.remove("palette2");
    previewCard.classList.remove("palette3");
    previewCard.classList.add("palette1");
  } else if (data.palette === "2") {
    palette2.checked = true;
    previewCard.classList.remove("palette1");
    previewCard.classList.remove("palette3");
    previewCard.classList.add("palette2");
  } else {
    palette3.checked = true;
    previewCard.classList.remove("palette2");
    previewCard.classList.remove("palette1");
    previewCard.classList.add("palette3");
  }

  updatePreview();
}

//# sourceMappingURL=main.js.map
