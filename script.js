// tombol ubah warna
const btnWarna = document.querySelector("#btnWarna");

btnWarna.addEventListener("click", function () {
    // khusus utk body tidak perlu ditangkap
    // document.body.style.backgroundColor = "#1BC6B4";

    // membuat tombol saat diklik berubah warna jadi biru dan putih satt diklik lagi
    document.body.classList.toggle("bg-body");
});
// akhir tombol ubah warna

// tombol Acak Warna
// buat button baru untuk random warna
const btnRandom = document.createElement("button");
const teksBtnRandom = document.createTextNode("Acak Warna");

// meletakkan btnRandom setelah btnWarna
btnRandom.appendChild(teksBtnRandom);
btnWarna.after(btnRandom);
btnRandom.setAttribute("type", "button");

btnRandom.addEventListener("click", function () {
    // acak warna dengan method Math
    // round => membulatkan, ceil => bulat atas, floor => bulat atas
    const r = Math.round(Math.random() * 255 + 1); // membuat angka acak sampai 255
    const g = Math.round(Math.random() * 255 + 1); // membuat angka acak sampai 255
    const b = Math.round(Math.random() * 255 + 1); // membuat angka acak sampai 255

    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});
// akhir tombol acak warna

// range warna
const sMerah = document.querySelector("input[name=sMerah]");
const sHijau = document.querySelector("input[name=sHijau]");
const sBiru = document.querySelector("input[name=sBiru]");

// event input => real time, event change => tunggu dilepas dulu
sMerah.addEventListener("input", function () {
    const r = sMerah.value; // mengambil value dari range dari 0 - 255 tidak acak tp sesuai range

    // kotak warna
    const merah = document.getElementsByClassName("merah")[0];
    merah.style.backgroundColor = `rgb(${r},0,0)`;
    sMerah.style.accentColor = `rgb(${r},0,0)`;

    document.body.style.backgroundColor = `rgb(${r},0,0)`;
});


sHijau.addEventListener("input", function () {
    // mengambil value dari range dari 0 - 255 tidak acak tp sesuai range
    const r = sMerah.value;
    const g = sHijau.value;

    // kotak warna
    const hijau = document.getElementsByClassName("hijau")[0];
    hijau.style.backgroundColor = `rgb(0,${g},0)`;
    sHijau.style.accentColor = `rgb(0,${g},0)`;

    document.body.style.backgroundColor = `rgb(${r},${g},0)`;
});

sBiru.addEventListener("input", function () {
    // mengambil value dari range dari 0 - 255 tidak acak tp sesuai range
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;

    // kotak warna
    const biru = document.getElementsByClassName("biru")[0];
    biru.style.backgroundColor = `rgb(0,0,${b})`;
    sBiru.style.accentColor = `rgb(0,0,${b})`;

    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});
// akhir range warna

// ubah warna saat mouse digerakkan
document.body.addEventListener("mousemove", function (e) {
    // method untuk mengambil nilai lokasi cursor => object.clientX & object.clientY
    // console.log(e.clientX);

    // method untuk mengetahui ukuran window/browser
    // console.log(window.innerWidth);

    const posisiX = Math.round((e.clientX / window.innerWidth) * 255);
    const posisiY = Math.round((e.clientY / window.innerWidth) * 255);

    document.body.style.backgroundColor = `rgb(${posisiX},${posisiY},100)`;
});
// akhir ubah warna saat mouse digerakkan

// membuat kode program
const container = document.querySelector(".container");
const kodeProgram = document.querySelector(".kode-program");
const kode = document.querySelector("a");
kode.addEventListener("click", function () {
    kode.innerHTML = "Back";
    // kode.before(kodeProgram);
    kode.style.margin = "20px 0"
    kodeProgram.classList.toggle("tampil");
    container.classList.toggle("tampil");
    document.body.style.padding = "50px 0";
})