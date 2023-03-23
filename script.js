// SELECTIONNER UN ELEMENT DU DOM : differentes techniques par ex pour un input de type email
// let input = document.queryselector('input[type="email"]')
// console.log(input)

// let input = document.queryselectorAll('input[type="email"]')
// console.log(input)

// let input = document.getElementById('email')
// console.log(input)

// let input = document.getElementsByTagName('input')

// EXERCICE
// 1.CREER UN ELEMENT Input
// 2. APPEND INPUT DANS BODY
// 3.creer élément p
// 4. APPEND P DANS BODY
// 5. METTRE UN INPUT DANS UNE BALISE FORM 

// CORRECTION 1
// let inputValue = "";
// let affichage = document.createElement("form");
// let affichage1 = document.createElement("input");

// affichage1.setAttribute("type","text");
// document.body.append(affichage);
// let affichage2 = document.createElement("p");
// document.body.append(affichage2);

// affichage.addEventListener("submit",e=>{
//     e.preventDefault();
//     inputValue = affichage1.value;
// });


// CORRECTION 2
// let inputValue = "";
// const form = document.createElement('form');
// const input = document.createElement('input');
// input.setAttribute(input[type="text"])
// form.append(input);
// const paragraph = document.createElement('p')
// document.body.append(form);
// document.body.append(paragraph);
// form.addEventListener("submit", (e)=>{e.preventDefault()} )

// EXERCICE 2
let inputValue = "";
const maDiv = document.querySelector('#maDiv');
const form = document.createElement('form');
const input = document.createElement('input');
input.setAttribute('type', 'text');
form.append(input);
document.body.append(form);
form.addEventListener("submit", (e)=>{
    e.preventDefault()
    const paragraph = document.createElement('p');
    document.body.append(paragraph);
    inputValue = input.value;
    console.log(input.value);
    paragraph.innerHTML = inputValue;
});
// maDiv.addEventListener('click', ()=>{
//     maDiv.classList.toggle('active');
// })
let open = document.querySelector('#open')
open.addEventListener('click', ()=>{
    maDiv.classList.add('active');
})
let close = document.querySelector('#close')
close.addEventListener('click', ()=>{
    maDiv.classList.remove('active');
})


