// switches berguna untuk mempermudah jika if dan else ada banyak
// Fungsi "break" dalam switch adalah untuk menghentikan eksekusi setelah satu case dijalankan. Kalau tidak pakai break, JavaScript akan terus menjalankan case-case di bawahnya (ini disebut fall-through).

// let day = 8;

// switch (day) {
//   case 1:
//     console.log("hari ini adalah senin");
//     break;
//   case 2:
//     console.log("hari ini adalah selasa");
//     break;
//   case 3:
//     console.log("hari ini adalah rabu");
//     break;
//   case 4:
//     console.log("hari ini adalah kamis");
//     break;
//   case 5:
//     console.log("hari ini adalah jumat");
//     break;
//   case 6:
//     console.log("hari ini adalah sabtu");
//     break;
//   case 7:
//     console.log("hari ini adalah minggu");
//     break;
//   default:
//     console.log(`${day} itu bukan hari`);
// }

// lebih kompleks

let hasilUjian = 69;
let pilihan;

switch (true) {
  case hasilUjian >= 90:
    pilihan = "A";
    break;
  case hasilUjian > 80:
    pilihan = "B";
    break;
  case hasilUjian > 70:
    pilihan = "C";
    break;
  default:
    pilihan = "D";
}
console.log(pilihan);
