"use strict";const designLegend=document.querySelector(".js_design-legend"),designContent=document.querySelector(".js_design-content"),fillLegend=document.querySelector(".js_fill-legend"),fillContent=document.querySelector(".js_fill-content"),shareLegend=document.querySelector(".js_share-legend"),shareContent=document.querySelector(".js_share-content"),arrowDesign=document.querySelector(".js_arrow-design"),arrowFill=document.querySelector(".js_arrow-fill"),arrowShare=document.querySelector(".js_arrow-share"),inputName=document.querySelector(".js_fill-name"),inputJob=document.querySelector(".js_fill-job"),inputEmail=document.querySelector(".js_fill-email"),inputTel=document.querySelector(".js_fill-tel"),inputLinkedin=document.querySelector(".js_fill-linkedin"),inputGithub=document.querySelector(".js_fill-github"),previewName=document.querySelector(".js_preview-name"),previewJob=document.querySelector(".js_preview-job"),previewTel=document.querySelector(".js_preview-tel"),previewEmail=document.querySelector(".js_preview-email"),previewLinkedin=document.querySelector(".js_preview-linkedin"),previewGithub=document.querySelector(".js_preview-github"),previewCard=document.querySelector(".js_preview-card"),palette1=document.querySelector(".js_palette1"),palette2=document.querySelector(".js_palette2"),palette3=document.querySelector(".js_palette3"),btnReset=document.querySelector(".js_reset"),fileField=document.querySelector(".js__profile-upload-btn"),profileImage=document.querySelector(".js__profile-image"),profilePreview=document.querySelector(".js__profile-preview"),localStorageData=JSON.parse(localStorage.getItem("userData"));function handleClickDesign(){fillContent.classList.add("collapsed"),shareContent.classList.add("collapsed"),designContent.classList.remove("collapsed"),arrowDesign.classList.remove("arrow-collapsed"),arrowFill.classList.add("arrow-collapsed"),arrowShare.classList.add("arrow-collapsed")}function handleClickFill(){designContent.classList.add("collapsed"),shareContent.classList.add("collapsed"),fillContent.classList.remove("collapsed"),arrowFill.classList.remove("arrow-collapsed"),arrowDesign.classList.add("arrow-collapsed"),arrowShare.classList.add("arrow-collapsed")}function handleClickShare(){designContent.classList.add("collapsed"),fillContent.classList.add("collapsed"),shareContent.classList.remove("collapsed"),arrowShare.classList.remove("arrow-collapsed"),arrowFill.classList.add("arrow-collapsed"),arrowDesign.classList.add("arrow-collapsed")}designLegend.addEventListener("click",handleClickDesign),fillLegend.addEventListener("click",handleClickFill),shareLegend.addEventListener("click",handleClickShare);let data={palette:1,name:"",job:"",phone:"",email:"",linkedin:"",github:"",photo:""};const inputList=document.querySelectorAll(".js__input");function handleInputList(e){data[e.target.id]=e.target.value,updatePreview()}for(const e of inputList)e.addEventListener("input",handleInputList);const updatePreview=()=>{""===data.name?previewName.innerHTML="Nombre Apellido":previewName.innerHTML=data.name,""===data.job?previewJob.innerHTML="Front-end developer":(previewJob.innerHTML=data.job,previewJob.classList.remove("preview__card--link--disabled")),previewTel.href="tel:"+data.phone,previewTel.classList.remove("preview__card--link--disabled"),previewEmail.href="mailto:"+data.email,previewEmail.classList.remove("preview__card--link--disabled"),previewLinkedin.href=data.linkedin,previewLinkedin.classList.remove("preview__card--link--disabled"),previewGithub.href=data.github,previewGithub.classList.remove("preview__card--link--disabled"),localStorage.setItem("userData",JSON.stringify(data))};function handleClickPalettes(e){const t=e.target.id;"color_1"===t&&(previewCard.classList.remove("palette2"),previewCard.classList.remove("palette3"),previewCard.classList.add("palette1"),data.palette="1"),"color_2"===t&&(previewCard.classList.remove("palette1"),previewCard.classList.remove("palette3"),previewCard.classList.add("palette2"),data.palette="2"),"color_3"===t&&(previewCard.classList.remove("palette2"),previewCard.classList.remove("palette1"),previewCard.classList.add("palette3"),data.palette="3")}designContent.addEventListener("click",handleClickPalettes);const handleClickReset=e=>{e.preventDefault(),data.palette=1,data.name="",data.job="",data.phone="",data.email="",data.linkedin="",data.github="",data.photo="",palette1.checked=!0,inputName.value="",inputJob.value="",inputEmail.value="",inputTel.value="",inputLinkedin.value="",inputGithub.value="",previewCard.classList.remove("palette2"),previewCard.classList.remove("palette3"),previewCard.classList.add("palette1"),profileImage.style.backgroundImage=data.photo,profilePreview.style.backgroundImage=data.photo,updatePreview(),localStorage.removeItem("userData")};btnReset.addEventListener("click",handleClickReset);const sendBtn=document.querySelector(".js_create_button"),infoText=document.querySelector(".js_infoText"),btnTwitter=document.querySelector(".js_buttonTwitter"),shareLink=document.querySelector(".js_shareLink"),shareLinkTwitter=document.querySelector(".js_shareLinkTwitter"),contentButton=document.querySelector(".js_shareButtonContent");function handleClickSend(e){e.preventDefault(),fetch("https://dev.adalab.es/api/card/",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(data)}).then(e=>e.json()).then(e=>{console.log(e),e.success?(infoText.innerHTML="La tarjeta ha sido creada",shareLink.classList.remove("collapsed"),shareLink.href=e.cardURL,shareLink.innerHTML=e.cardURL,btnTwitter.classList.remove("collapsed"),shareLinkTwitter.href="https://twitter.com/intent/tweet?text=Echa%20un%20vistazo%20a%20mi%20tarjeta:&url="+e.cardURL,contentButton.classList.add("selected")):(infoText.innerHTML=e.error,shareLink.href="")})}sendBtn.addEventListener("click",handleClickSend);const fr=new FileReader;function getImage(e){const t=e.currentTarget.files[0];fr.addEventListener("load",writeImage),fr.readAsDataURL(t)}function writeImage(){profileImage.style.backgroundImage=`url(${fr.result})`,profilePreview.style.backgroundImage=`url(${fr.result})`,data.photo=fr.result}fileField.addEventListener("change",getImage),localStorageData&&(data=localStorageData,inputName.value=data.name,inputJob.value=data.job,inputEmail.value=data.email,inputTel.value=data.phone,inputLinkedin.value=data.linkedin,inputGithub.value=data.github,"1"===data.palette?(palette1.checked=!0,previewCard.classList.remove("palette2"),previewCard.classList.remove("palette3"),previewCard.classList.add("palette1")):"2"===data.palette?(palette2.checked=!0,previewCard.classList.remove("palette1"),previewCard.classList.remove("palette3"),previewCard.classList.add("palette2")):(palette3.checked=!0,previewCard.classList.remove("palette2"),previewCard.classList.remove("palette1"),previewCard.classList.add("palette3")),updatePreview());