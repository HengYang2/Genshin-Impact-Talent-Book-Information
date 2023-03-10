
function testFun() {
    console.log('hello');
}
function populator(type, array) {

    let destination = document.getElementById(type);

    //clear type box
    destination.replaceChildren();

    //Populate type box
    for (const obj of array) {
        let li = document.createElement('li');
        li.setAttribute('onclick', 'testFun()');
        li.setAttribute('id', 'item');
        li.innerHTML = obj;
        
        destination.append(li);
    }
}

//tm, wm, char, weap
function popTalentMaterial(day) {
    let tmArray = [];
    switch (day) {
        case 'monday':
            tmArray = ['Freedom', 'Prosperity', 'Transience', 'Admonition'];
            populator('tm', tmArray);
            break;
        case 'tuesday':
            tmArray = ['Resistance', 'Diligence', 'Elegance', 'Ingenuity'];
            populator('tm', tmArray);
            break;
        case 'wednesday':
            tmArray = ['Ballad', 'Gold', 'Light', 'Praxis'];
            populator('tm', tmArray);
            break;
        case 'thursday':
            tmArray = ['Freedom', 'Prosperity', 'Transience', 'Admonition'];
            populator('tm', tmArray);
            break;
        case 'friday':
            tmArray = ['Resistance', 'Diligence', 'Elegance', 'Ingenuity'];
            populator('tm', tmArray);
            break;
        case 'saturday':
            tmArray = ['Ballad', 'Gold', 'Light', 'Praxis'];
            populator('tm', tmArray);
            break;
        case 'sunday':
            tmArray = ['Freedom', 'Prosperity', 'Transience', 'Admonition', 'Resistance', 'Diligence', 'Elegance', 'Ingenuity', 'Ballad', 'Gold', 'Light', 'Praxis'];
            populator('tm', tmArray);
            break;
    }
}

function popWeaponMaterial (day) {
    let wmArray = [];
    switch (day) {
        case 'monday':
            wmArray = [];
            populator('wm', wmArray);
            break;
        case 'tuesday':
            wmArray = [];
            populator('wm', wmArray);
            break;
        case 'wednesday':
            wmArray = [];
            populator('wm', wmArray);
            break;
        case 'thursday':
            wmArray = [];
            populator('wm', wmArray);
            break;
        case 'friday':
            wmArray = [];
            populator('wm', wmArray);
            break;
        case 'saturday':
            wmArray = [];
            populator('wm', wmArray);
            break;
        case 'sunday':
            wmArray = [];
            populator('wm', wmArray);
            break;
    }
}

function clearData() {


}


function Monday() {
    popTalentMaterial('monday');
    popWeaponMaterial('monday');
}

function Tuesday() {
    popTalentMaterial('tuesday');
    popWeaponMaterial('tuesday');
}

function Wednesday() {
    popTalentMaterial('wednesday');
    popWeaponMaterial('wednesday');    
}

function Thursday() {
    popTalentMaterial('thursday');
    popWeaponMaterial('thursday');
}

function Friday() {
    popTalentMaterial('friday');
    popWeaponMaterial('friday');
}

function Saturday() {
    popTalentMaterial('saturday');
    popWeaponMaterial('saturday');
}

function Sunday() {
    popTalentMaterial('sunday');
    popWeaponMaterial('sunday');
}

// const ul = document.createElement('ul');
// document.body.appendChild(ul);

// let charArray = ['Zhongli', 'Shogun', 'Bennet'];

// function ListCharacters(name) {
//     console.log(name);
//     let li = document.createElement('li');
//     li.innerHTML = name;
//     ul.append(li);
// }


// for (const char of charArray) {
//     ListCharacters(char);
// }
// for (let i=0; i<6; i++) {
//     const para = document.createElement('p');
//     const node = document.createTextNode("Item");

//     para.appendChild(node);
//     document.body.appendChild(para);
//     document.
// }
// document.body.innerHTML = "This is some content";
// console.log("working");