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