export class FirmaView {
  constructor(firma) {
    this.firma = firma;
  }
  ispisi() {
    const nazivFirme = document.createElement("div");
    nazivFirme.innerHTML = this.firma.naziv;
    document.body.appendChild(nazivFirme);
    const tabela = document.createElement("table");
    document.body.appendChild(tabela);

    this.firma.radnici.forEach((element) => {
      const red = document.createElement("tr");
      tabela.appendChild(red);
      const kolonaNaziv = document.createElement("td");
      kolonaNaziv.innerHTML = element.naziv;
      red.appendChild(kolonaNaziv);
      const kolonaPlata = document.createElement("td");
      kolonaPlata.innerHTML = element.platu;
      red.appendChild(kolonaPlata);
    });
    const paraf = document.createElement("p");
    paraf.textContent = "Ukupna plata radnika: " + this.firma.vratiZbirPlata();
    document.body.appendChild(paraf);
  }
}
