var a = 5;
let b = "kampus merdeka";
const nama = "Budi";
// const asal = "Jakarta";
let terdaftar = true;
let lengkap_arr = [a, b, nama, terdaftar];

function perkenalan() {
    let asal = "indonesia";
    let data = "perkenalan nama saya " +
        nama +
        " nomor urut " + 
        a +
        " sekarang sedang mengikuti " +
        b + 
        " berasal dari " +
        asal;
        return data;
}

if (terdaftar === true) {
    console.log(nama + " terdaftar sebagai kegiatan kampus merdeka");
}

a = b;
// console.log(lengkap_arr[2]);
// nama = b;

// console.log("asal diakses = " + asal);
console.log("array = ", nama);
console.log("a adalah = " + a);
console.log("b adalah = " + b);

console.log(perkenalan());