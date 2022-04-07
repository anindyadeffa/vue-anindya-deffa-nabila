import { penjumlahan } from "@/utils/index.js";
import { pengurangan } from "@/utils/index.js";
import { pembagian } from "@/utils/index.js";
import { perkalian } from "@/utils/index.js";
import { average } from "@/utils/index.js";
import { sisaBagi } from "@/utils/index.js";
import { luasPersegi } from "@/utils/index.js";
import { luasLingkaran } from "@/utils/index.js";
import { luasKubus } from "@/utils/index.js";
import { volumeKubus } from "@/utils/index.js";

// Penjumlahan
describe("Menghitung Penjumlahan", () => {
	test("Penjumlahan dengan dua bilangan positif", () => {
		expect(penjumlahan(2, 4)).toBe(6);
	});
  test("Penjumlahan dengan dua bilangan positif", () => {
		expect(penjumlahan(4, 3)).toBe(7);
	});
	test("Penjumlahan dengan dua bilangan negatif", () => {
		expect(penjumlahan(-10, -2)).toBe(-12);
	});
});

// Pengurangan
describe("Menghitung Pengurangan", () => {
	test("Pengurangan dengan dua bilangan positif", () => {
		expect(pengurangan(8, 4)).toBe(4);
	});
  test("Pengurangan dengan dua bilangan positif", () => {
		expect(pengurangan(7, 3)).toBe(4);
	});
	test("Pengurangan dengan dua bilangan negatif", () => {
		expect(pengurangan(-8, -2)).toBe(-6);
	});
});

// Pembagian
describe("Menghitung Pembagian", () => {
	test("Pembagian dengan dua bilangan positif", () => {
		expect(pembagian(4, 2)).toBe(2);
	});
  test("Pembagian dengan dua bilangan positif", () => {
		expect(pembagian(16, 4)).toBe(4);
	});
	test("Pembagian dengan dua bilangan negatif", () => {
		expect(pembagian(-16, -2)).toBe(8);
	});
});

// Perkalian
describe("Menghitung Perkalian", () => {
	test("Perkalian dengan dua bilangan positif", () => {
		expect(perkalian(3, 4)).toBe(12);
	});
  test("Perkalian dengan dua bilangan positif", () => {
		expect(perkalian(12, 3)).toBe(36);
	});
	test("Perkalian dengan dua bilangan negatif", () => {
		expect(perkalian(-7, -2)).toBe(14);
	});
});

// Rata-rata
describe("Menghitung Rata-Rata", () => {
	test("rata-rata dari bilangan positif", () => {
		const input = [1, 2, 3, 4, 5];
    expect(average(input)).toBe(3);
	});
  test("rata-rata dari bilangan negatif dan positif", () => {
		const input4 = [-1, 9, 6, -5, 1];
    expect(average(input4)).toBe(2);
	});
  test("rata-rata dari bilangan negatif", () => {
		const input5 = [-3, -5, -1, -5, -3, -6, -7, -2];
    expect(average(input5)).toBe(-4);
	});
});

// Sisa bagi
describe("Menghitung Sisa Bagi", () => {
	test("Sisa Bagi dengan dua bilangan positif", () => {
		expect(sisaBagi(15, 4)).toBe(3);
	});
  test("Sisa Bagi dengan dua bilangan positif", () => {
		expect(sisaBagi(12, 3)).toBe(0);
	});
	test("Sisa Bagi dengan dua bilangan negatif", () => {
		expect(sisaBagi(-19, -2)).toBe(-1);
	});
});

// Luas Persegi
describe("Menghitung Luas Persegi", () => {
	test("Luas Persegi dengan dua bilangan positif", () => {
		expect(luasPersegi(7, 3)).toBe(21);
	});
	test("Luas Persegi dengan dua bilangan negatif", () => {
		expect(luasPersegi(-3, -4)).toBe(12);
	});
  test("Luas Persegi dengan bilangan positif dan negatif", () => {
		expect(luasPersegi(7, -4)).toBe(-28);
	});
});

// Luas Lingkaran
describe("Menghitung Luas Lingkaran", () => {
	test("Luas Lingkaran dengan bilangan positif", () => {
		expect(luasLingkaran(2)).toBe(12.566370614359172);
	});
  test("Luas Lingkaran dengan bilangan positif", () => {
		expect(luasLingkaran(4)).toBe(50.26548245743669);
	});
	test("Luas Lingkaran dengan bilangan negatif", () => {
		expect(luasLingkaran(-5)).toBe(78.53981633974483);
	});
});

// Luas Kubus
describe("Menghitung Luas Kubus", () => {
	test("Luas Kubus dengan bilangan positif", () => {
		expect(luasKubus(5)).toBe(150);
	});
	test("Luas Kubus dengan bilangan positif", () => {
		expect(luasKubus(7)).toBe(294);
	});
  test("Luas Kubus dengan bilangan negatif", () => {
		expect(luasKubus(-3)).toBe(54);
	});
});

// Volume Kubus
describe("Menghitung Volume Kubus", () => {
	test("Volume Kubus dengan bilangan positif", () => {
		expect(volumeKubus(3)).toBe(27);
	});
	test("Volume Kubus dengan bilangan positif", () => {
		expect(volumeKubus(6)).toBe(216);
	});
  test("Volume Kubus dengan bilangan negatif", () => {
		expect(volumeKubus(-4)).toBe(-64);
	});
});