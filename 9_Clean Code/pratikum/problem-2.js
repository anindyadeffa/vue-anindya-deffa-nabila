class Kendaraan {
    constructor(totalRoda, kecepatanPerJam) {
        this.totalRoda = totalRoda; 
        this.kecepatanPerJam = kecepatanPerJam;
    }
}

// This is extends class Mobil from class Kendaraan 
class Mobil extend Kendaraan {
    berjalan(){
        this.tambahKecepatan(10);
    }
    // Methods tambahKecepatan with params kecepatanBaru
    tambahKecepatan(kecepatanBaru){
        this.kecepatanPerJam += kecepatanBaru;
    }
}

mobilCepat = new Mobil();
mobilCepat.berjalan();
mobilCepat.berjalan();
mobilCepat.berjalan();

mobilLamban = new Mobil();
mobilLamban.berjalan();

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

// const MOBILPR = "avanza"

// class kendaraan untuk data kecepatan per jam perjalanan
class Kendaraan {
    constructor(totalRoda, kecepatanPerJam) {
      this.totalRoda = totalRoda;
      this.kecepatanPerJam = kecepatanPerJam;
    }
  }
  
  // class mobil untuk menambah kecepatan mobil
  class Mobil extends Kendaraan {
    // berjalan(){
    //   this.tambahKecepatan(10);
    // }
  
    constructor(totalRoda = 4, kecepatanAwal = 0){
      super(totalRoda, kecepatanAwal)
      console.log("mobil roda: ", this.totalRoda)
    }
  
    berjalan(kecepatanBaru = 10){
      this.kecepatanPerJam += Number(kecepatanBaru);
      console.log("kecepatan: ", this.kecepatanPerJam)
    }
    
    // tambahKecepatan(kecepatanBaru){
    //   this.kecepatanPerJam += kecepatanBaru;
    // }
  }
  
  
  mobilCepat = new Mobil(6, 0);
  mobilCepat.berjalan();
  mobilCepat.berjalan();
  mobilCepat.berjalan(20);
  
  console.log("mobil cepat: ", mobilCepat)
  console.log("---------------")
  
  mobilLamban = new Mobil();
  mobilLamban.berjalan();
  console.log("mobil lambat: ", mobilLamban)
  

//   https://replit.com/@MohamadLutfi/DownrightWorseDeadcode#index.js