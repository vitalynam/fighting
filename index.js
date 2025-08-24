let player = {
    name: 'Alex',
    wins: 0,
    lose: 0,
    ava: 'images/persons/sub-logo.png',
    pers: 'images/persons/sub.gif',
}
const submitButton = document.querySelector('.registration__submit');
const chose = document.querySelectorAll('.person-logo');

// if(localStorage.getItem()){
//     console.log(localStorage.getItem('name'))
// }

for (const element of chose) {
    element.addEventListener('click', ()=>{
        player.ava = `images/persons/${element.id}-logo.png`;
        player.pers = `images/persons/${element.id}.gif`;

        setImage(player.ava, player.pers)
    })
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




submitButton.addEventListener('click', ()=>{
    player.name = document.querySelector('.registrtion__name').value;
    setName(player.name)
})

