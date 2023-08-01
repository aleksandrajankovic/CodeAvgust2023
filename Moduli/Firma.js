export class Firma {
  constructor(naziv, radnici) {
    this.naziv = naziv;
    this.radnici = radnici;
  }
  vratiZbirPlata() {
    let zbir = 0;
    this.radnici.forEach((element) => {
      zbir = zbir + element.platu;
    });
    return zbir;
  }
}
