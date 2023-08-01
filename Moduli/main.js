import { FirmaView } from "./firmaView.js";
import { Firma } from "./Firma.js";
import { Radnik } from "./Radnik.js";

const radnik1 = new Radnik(1, "Radnik1", 20000, 10);
const radnik2 = new Radnik(2, "Radnik2", 30000, 15);
const radnik3 = new Radnik(3, "Radnik3", 40000, 20);
const radnik4 = new Radnik(4, "Radnik4", 50000, 25);
const radnik5 = new Radnik(5, "Radnik5", 60000, 30);

let niz1 = [radnik1, radnik2, radnik3];
let niz2 = [radnik4, radnik5];

const firma1 = new Firma("Comtrade", niz1);
const firma2 = new Firma("Code", niz2);

const view1 = new FirmaView(firma1);
const view2 = new FirmaView(firma2);

view1.ispisi();
view2.ispisi();
