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
const rename = document.querySelector('.rename');
const name = document.querySelector('.name-wrap');



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
    setName(player.name);
    document.querySelector('.registrtion__name').value = '';
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

rename.addEventListener('click', ()=>{
    name.classList.toggle('active');
    document.querySelector('.rename-form').classList.toggle('active');
})

document.querySelector('.change-name').addEventListener('click', ()=>{
    player.name = document.querySelector('.rename-input').value;
    setName(player.name);
    document.querySelector('.rename-input').value = '';
    document.querySelector('.rename-form').classList.remove('active');
    name.classList.remove('active');
})





let startButton = document.querySelector('.start');
// Создаем массив с именами персонажей 
let enemys = [];
for (const element of chose) {
    enemys.push(element.id)
}

let person2 = ['sub']; // массив с именем противнника

// клик по кнопке STARTBUTTON генерирует рандомного персонажа и отпрвляет имя в переменную PERSON2 
startButton.addEventListener('click', ()=>{
    
    let random = Math.floor(Math.random() * 6);

    if(enemys[random] == person2[0]){
        if(random + 1 == 5){
            person2[0] = enemys[random - 1];
        }else{
            person2[0] = enemys[random + 1];
        }
    }else{
        person2[0] = enemys[random];
    }
    document.querySelector('.enemy__info_logo').innerHTML = `<img src="images/persons/${person2[0]}-logo.png" alt="sub-zero">`;
    document.querySelector('.enemy__player').innerHTML = `<img src="images/persons/${person2[0]}.gif" alt="sub">`;
})


console.log(person2)