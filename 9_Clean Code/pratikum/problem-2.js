// class kendaraan {
//     var totalroda = 0;
//     var kecepatanperjam = 0;
// }

// class mobil extend kendaraan {
//     void berjalan() {
//         tambahkecepatan(10);
//     }

//     tambahkecepatan(var kecepatanbaru) {
//         kecepatanperjam = kecepatanperjam + kecepatanbaru;
//     }
// }

// void main() {
//     mobilcepat = new mobil();
//     mobilcepat.berjalan();
//     mobilcepat.berjalan();
//     mobilcepat.berjalan();

//     mobillamban = new mobil();
//     mobillamban.berjalan();
// }

// This is class Kendaraan
class Kendaraan {
    // Constructor function for Kendaraan objects
    constructor(total_roda, kecepatan_per_jam) {
        this.total_roda = total_roda; 
        this.kecepatan_per_jam = kecepatan_per_jam;
    }
}

// This is extends class Mobil from class Kendaraan 
class Mobil extends Kendaraan {
    constructor(kecepatan_per_jam, tambah_kecepatan, kecepatan_baru){
        super (kecepatan_per_jam);
        this.tambah_kecepatan = tambah_kecepatan;
        this.kecepatan_baru = kecepatan_baru; 
    }
    // berjalan(){
        
    // }
}
