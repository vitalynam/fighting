let player = {
    name: 'Alex',
    wins: 0,
    lose: 0,
    ava: 'images/persons/sub-logo.png',
    pers: 'images/persons/sub.gif',
}
const submitButton = document.querySelector('.registration__submit');
const chose = document.querySelectorAll('.person-logo');
const changeAvatar = document.querySelector('.edit-avatar');
const enemyBlog = document.querySelector('.enemy-wrap');

if(localStorage.getItem('person')){
    let r = localStorage.getItem('person');
    player = JSON.parse(r);
    document.querySelector('.name').innerHTML = player.name;
    document.querySelector('.wins').innerHTML = player.wins;
    document.querySelector('.lose').innerHTML = player.lose;
    document.querySelector('.person__info_logo').innerHTML = `<img src="${player.ava}" alt="sub-zero">`;
    document.querySelector('.fight__player').innerHTML = `<img src="${player.pers}" alt="sub">`;
}

function setName (name){
    document.querySelector('.name').innerHTML = name;
    localStorage.setItem('person', JSON.stringify(player));
}
function setImage(urlLogo , urlPerson){
    document.querySelector('.person__info_logo').innerHTML = `<img src="${urlLogo}" alt="sub-zero">`;
    document.querySelector('.fight__player').innerHTML = `<img src="${urlPerson}" alt="sub">`;
    localStorage.setItem('person', JSON.stringify(player));
}
function setWins(counter){
    document.querySelector('.wins').innerHTML = `${counter}`;

    localStorage.setItem('person', JSON.stringify(player));
}
function setLose(counter){
    document.querySelector('.lose').innerHTML = `${counter}`;

    localStorage.setItem('person', JSON.stringify(player));
}

submitButton.addEventListener('click', ()=>{
    player.name = document.querySelector('.registrtion__name').value;
    setName(player.name)
})

for (const element of chose) {
    element.addEventListener('click', ()=>{
        player.ava = `images/persons/${element.id}-logo.png`;
        player.pers = `images/persons/${element.id}.gif`;
        setImage(player.ava, player.pers);
        document.querySelector('.person__info_check').classList.remove('active');
        enemyBlog.classList.remove('active');
    })
}
changeAvatar.addEventListener('click', ()=>{
    document.querySelector('.person__info_check').classList.toggle('active');
    enemyBlog.classList.toggle('active');
})