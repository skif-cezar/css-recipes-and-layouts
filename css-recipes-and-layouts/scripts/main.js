document.getElementsByClassName('nav-burger')[0].onclick = function() {
    let checked = document.getElementById('burger').checked;
    if(checked === false) {
        document.getElementById('icon-burger').style.display = 'none';
        document.getElementById('mobile-header__menu').style.display = 'block';
        document.getElementById('icon-cancel').style.display = 'block';
    } else {
        document.getElementById('icon-cancel').style.display = 'none';
        document.getElementById('icon-burger').style.display = 'block';
        document.getElementById('mobile-header__menu').style.display = 'none';
    }
};

document.getElementById('about').onclick = function() {
    if(document.getElementById('section-about').style.display === 'block') {
        document.getElementById('section-about').style.display = 'none';
    } else {
        document.getElementById('section-about').style.display = 'block';
    }
};

document.getElementById('info').onclick = function() {
    if(document.getElementById('section-info').style.display === 'block') {
        document.getElementById('section-info').style.display = 'none';
    } else {
        document.getElementById('section-info').style.display = 'block';
    }
};
