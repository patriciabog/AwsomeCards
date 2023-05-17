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
