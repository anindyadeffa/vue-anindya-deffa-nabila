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
    constructor(totalRoda, kecepatanPerJam) {
        this.totalRoda = totalRoda; 
        this.kecepatanPerJam = kecepatanPerJam;
    }
}

// This is extends class Mobil from class Kendaraan 
class Mobil extends Kendaraan {
    constructor(kecepatanPerJam, tambahKecepatan, kecepatanBaru){
        super (kecepatanPerJam);
        this.tambahKecepatan = tambahKecepatan;
        this.kecepatanBaru = kecepatanBaru; 
    }
    // berjalan(){
        
    // }
}
