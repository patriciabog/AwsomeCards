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