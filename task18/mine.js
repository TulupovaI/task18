// 1
let textEl = document.querySelector('.input_1');
let message = document.querySelector('.message');

textEl.addEventListener("focus", () => {
  message.style.display = "block";     
});

textEl.addEventListener("blur", () => { 
  message.style.display = "none";
});




// 2
let btnGetLink = document.querySelector(".btnPrompt");
let btnGoTolLink = document.querySelector(".btnLink");
let link;

btnGetLink.addEventListener('click', function () {
    link = prompt("Введіть посилання");
    if (link.startsWith('http') === false && link.startsWith('https') === false) {
        link = `https://${link}`;
    }
})

btnGoTolLink.addEventListener("click", function () {
    if (!link) {
        alert('Посилання не введено!!!');
    } else {
        location.href = link;
    }
    return
})


//3
let table = document.getElementById('my-table');

let html = "";
for (let i = 1; i <= 10; i++) {
  let tds = "";
  for(let j = 10; j > 0; j--) {
    let val = i * 10 - j + 1;
    tds += "<td>" + (val > 0 ? val : "") + "</td>"
  }  
  html += "<tr>" + tds + "</tr>";
}

table.innerHTML = html;

// 4

let images = document.querySelector('.images')

const getImg = ()=> {
  const rand = Math.ceil(Math.random() * 9)
document.querySelector('img').src = 'images/' + rand + '.jpg';
return;
}
console.log(getImg());

