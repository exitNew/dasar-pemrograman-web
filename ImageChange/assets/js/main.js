// Manipulasi attribute
let ImageCat = document.querySelector("#cat");

ImageCat.setAttribute("src", "https://i.ibb.co/55VG7vL/three-cat.jpg")

ImageCat.getAttribute("src");

// Manipulasi konten

let caption = document.querySelector("#caption");

caption.innerHTML = "<em>Tiga Anak Kucing</em>";

// Menambahkan element baru
let newElement = document.createElement('p');

newElement.innerHTML = 'Anda menekan gambar kuching sebanyak <span id="count">0</span>';

document.body.appendChild(newElement);

cat.addEventListener('click', function(event){
  document.querySelector('#count').innerText++;
})