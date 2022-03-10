// This is class Kendaraan with objects
class Kendaraan {
    var total_roda = 0;
    var kecepatan_per_jam = 0;
}

// This is extends class Mobil from class Kendaraan 
class Mobil extend Kendaraan {
        void berjalan() {
        tambah_kecepatan(10);
    }
    // Methods tambah_kecepatan
    tambah_kecepatan(var kecepatan_baru) {
        kecepatan_per_jam = kecepatan_per_jam + kecepatan_baru;
    }
}

void main() {
    mobil_cepat = new Mobil();
    mobil_cepat.berjalan();
    mobil_cepat.berjalan();
    mobil_cepat.berjalan();

    mobil_lamban = new Mobil();
    mobil_lamban.berjalan();
}

// This is class Kendaraan
// class Kendaraan {
    // Constructor function for Kendaraan objects
//     constructor(total_roda, kecepatan_per_jam) {
//         this.total_roda = total_roda; 
//         this.kecepatan_per_jam = kecepatan_per_jam;
//     }
// }

// This is extends class Mobil from class Kendaraan 
// class Mobil extends Kendaraan {
//     constructor(kecepatan_per_jam, tambah_kecepatan, kecepatan_baru){
//         super (kecepatan_per_jam);
//         this.tambah_kecepatan = tambah_kecepatan;
//         this.kecepatan_baru = kecepatan_baru; 
//     }
//     get berjalan() {
//         return this.kecepatan_per_jam + this.kecepatan_baru;
//     }
//     set berjalan(value) {
//         this.total_roda = 0; 
//         this.kecepatan_per_jam = 0;
//         this.tambah_kecepatan = 10;
//     }
// }

// console.log('Kecepatan')

