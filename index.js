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
const fightSection = document.querySelector('#fight');



if(localStorage.getItem('person')){
    let r = localStorage.getItem('person');
    player = JSON.parse(r);
    document.querySelector('.name').innerHTML = player.name;
    document.querySelector('.wins').innerHTML = player.wins;
    document.querySelector('.lose').innerHTML = player.lose;
    document.querySelector('.person__info_logo').innerHTML = `<img src="${player.ava}" alt="sub-zero">`;
    document.querySelector('.fight__player').innerHTML = `<img src="${player.pers}" alt="sub">`;
    window.scrollTo(0, fightSection.offsetTop);
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





let changePersonButton = document.querySelector('.change-person');
// Создаем массив с именами персонажей 
let enemys = [];
for (const element of chose) {
    enemys.push(element.id)
}

let person2 = ['sub']; // массив с именем противнника

// клик по кнопке STARTBUTTON генерирует рандомного персонажа и отпрвляет имя в переменную PERSON2 
changePersonButton.addEventListener('click', ()=>{
    
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



let myChar = {
    health: 100,
    damage: 20,
    atack: 'legs',
    guard: ['arms', 'legs'],
}

let enemyChar = {
    health: 100,
    damage: 20,
    atack: 'arms',
    guard: ['head', 'body'],
}

let startfight = document.querySelector('.start');
let mainNumber = document.querySelector('.person-number');
let enemyNumber = document.querySelector('.enemy-number');
let log = document.querySelector('.log');

function kumite (playerOne, playerTwo){

    if (playerTwo.guard.includes(playerOne.atack)){
        playerTwo.health = playerTwo.health - (playerOne.damage / 2);
        document.querySelector('#enemy').style.width = `${playerTwo.health}%`;
        enemyNumber.innerHTML = playerTwo.health;

        let sss = `<span class="blue">Вы</span> атаковали <span class="red bold">${playerOne.atack}</span>, но <span class="orange">противник</span> блокировал <span class="green bold">${playerTwo.guard[0]}</span> и <span class="green bold">${playerTwo.guard[1]}</span>.<br>
        Поэтому вы нанесли только половину урона.<br>
        <span class="blue">Ваш</span> урон = <span class="red bold">${playerOne.damage / 2}</span>.`;

        log.innerHTML += `<p>${sss}</p> <hr>`;
    }
    else{
        playerTwo.health = playerTwo.health - playerOne.damage;
        document.querySelector('#enemy').style.width = `${playerTwo.health}%`;
        enemyNumber.innerHTML = playerTwo.health;

        let sss = `<span class="blue">Вы</span> атаковали <span class="red bold">${playerOne.atack}</span>, <span class="orange">противник</span> блокировал <span class="green bold">${playerTwo.guard[0]}</span> и <span class="green bold">${playerTwo.guard[1]}</span>.<br>
        Но не блокировал <span class="red bold">${playerOne.atack}</span>.<br>
        <span class="blue">Ваш</span> урон = <span class="red bold">${playerOne.damage}</span>.`;

        log.innerHTML += `<p>${sss}</p> <hr>`;
    }


    if (playerOne.guard.includes(playerTwo.atack)){
        playerOne.health = playerOne.health - (playerTwo.damage / 2);
        document.querySelector('#main').style.width = `${playerOne.health}%`;
        mainNumber.innerHTML = playerOne.health;

        let sss = `<span class="orange">Противник</span> атаковал <span class="red bold">${playerTwo.atack}</span>, но <span class="blue">Вы</span> блокировали <span class="green bold">${playerOne.guard[0]}</span> и <span class="green bold">${playerTwo.guard[1]}</span>.<br>
        Поэтому <span class="blue">Вы</span> получили только половину урона.<br>
        Урон <span class="orange">противника</span> = <span class="red bold">${playerTwo.damage / 2}</span>.`;

        log.innerHTML += `<p>${sss}</p> <hr>`;
    }
    else{
        playerOne.health = playerOne.health - playerTwo.damage;
        document.querySelector('#main').style.width = `${playerOne.health}%`;
        mainNumber.innerHTML = playerOne.health;

        let sss = `<span class="orange">Противник</span> атаковал <span class="red bold">${playerTwo.atack}</span>, <span class="blue">Вы</span> блокировали <span class="green bold">${playerOne.guard[0]}</span> и <span class="green bold">${playerOne.guard[1]}</span>.<br>
        Но не блокировали <span class="red bold">${playerTwo.atack}</span>.<br>
        Урон <span class="orange">противника</span> = <span class="red bold">${playerTwo.damage}</span>.`;

        log.innerHTML += `<p>${sss}</p> <hr>`;
    }


    if(playerTwo.health <= 0){
        playerTwo.health = 100;
        playerOne.health = 100;
        document.querySelector('#enemy').style.width = `100%`;
        document.querySelector('#main').style.width = `100%`;
        enemyNumber.innerHTML = 100;
        mainNumber.innerHTML = 100;

        player.wins += 1;
        localStorage.setItem('person', JSON.stringify(player));
        document.querySelector('.wins').innerHTML = player.wins;

        localStorage.setItem('person', JSON.stringify(player));
        log.innerHTML += `<p class="green bold">Вы Победили!</p> <hr>`;
    }

    if(playerOne.health <= 0){
        playerOne.health = 100;
        playerTwo.health = 100;
        document.querySelector('#main').style.width = `100%`;
        document.querySelector('#enemy').style.width = `100%`;
        enemyNumber.innerHTML = 100;
        mainNumber.innerHTML = 100;

        player.lose += 1;
        localStorage.setItem('person', JSON.stringify(player));
        document.querySelector('.lose').innerHTML = player.lose;
        log.innerHTML += `<p class="red bold">Вы проиграли!</p> <hr>`;
    }
    // log.scrollTop = 600;
    // console.log(log.scrollTop)
    
}

startfight.addEventListener('click', ()=>{
    kumite(myChar, enemyChar);
})
// kumite(myChar, enemyChar)