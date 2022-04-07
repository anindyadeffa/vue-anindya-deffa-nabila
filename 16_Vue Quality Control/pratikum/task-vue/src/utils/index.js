// Penjumlahan
export const penjumlahan = (bilanganSatu, bilanganDua) => {
	return bilanganSatu + bilanganDua;
};
// Pengurangan
export const pengurangan = (bilanganSatu, bilanganDua) => {
	return bilanganSatu - bilanganDua;
};
// Pembagian
export const pembagian = (bilanganSatu, bilanganDua) => {
	return bilanganSatu / bilanganDua;
};
// Perkalian
export const perkalian = (bilanganSatu, bilanganDua) => {
	return bilanganSatu * bilanganDua;
};
// Rata-rata
export const average = array => {
    const sum = array.reduce((acc, c) => acc + c, 0);
    return sum / array.length;
};
// Sisa bagi
export const sisaBagi = (bilanganUtama, bilanganPembagi) => {
	return bilanganUtama % bilanganPembagi;
};
// Luas Persegi
export const luasPersegi = (panjang, lebar) => {
	return panjang * lebar;
};
// Luas Lingkaran
export const luasLingkaran = (r) => {
	return Math.PI * r * r;
};
// Luas Kubus
export const luasKubus = (s) => {
	return 6 * s * s;
};

// Volume Kubus
export const volumeKubus = (s) => {
	return s * s * s;
};