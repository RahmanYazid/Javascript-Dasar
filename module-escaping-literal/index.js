// escaping string (\' , \" \\ \n \r \t \b \f)
let data1 = 'bujang berkata "apa kabar dunia?"';
console.log(data1);
let data2 = 'uni berkata "mantap"';
console.log(data2);
let data3 = "uda memasak rendang, \nanjay";
console.log(data3);

// literal string
let namaDepan = "Bujang";
let namaBelakang = "elder";
let usia = 29;
let namaLengkap = namaDepan + " " + namaBelakang + " " + usia;

console.log(namaLengkap);

// supaya tidak bikin error
let biodata = `${namaDepan} ${namaBelakang} dengan usia ${usia}`;
console.log(biodata);
