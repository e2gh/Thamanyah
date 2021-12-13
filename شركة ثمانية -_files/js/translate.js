var english = document.getElementById('en_click'),
		arabic = document.getElementById('ar_click'),
    en_txt = document.querySelectorAll('.en'),
    ar_txt = document.querySelectorAll('.ar'),
      nb_en = en_txt.length,
    nb_ar = ar_txt.length;

english.addEventListener('click', function() {
	langue(english,arabic);
}, false);

arabic.addEventListener('click', function() {
    langue(arabic,english);
}, false);

function langue(langueOn,langueOff){
    if (!langueOn.classList.contains('current_lang')) {
        langueOn.classList.toggle('current_lang');
        langueOff.classList.toggle('current_lang');
    }
		if(langueOn.innerHTML == 'English'){
        afficher(en_txt, nb_en);
        cacher(ar_txt, nb_ar);
    }
    else if(langueOn.innerHTML == 'العربية'){
		afficher(ar_txt, nb_ar);
		cacher(en_txt, nb_en);
    }
}

function afficher(txt,nb){
    for(var i=0; i < nb; i++){
        txt[i].style.display = 'block';
    }
}
function cacher(txt,nb){
    for(var i=0; i < nb; i++){
        txt[i].style.display = 'none';
    }
}
function init(){
    langue(english,arabic);
}
init();
