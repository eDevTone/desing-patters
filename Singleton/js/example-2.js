class WeeDays {
  dayEs = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
  dayEn = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  constructor(lang) {
    this.lang = lang;

    if (WeeDays.instance) {
      return WeeDays.instance;
    }

    WeeDays.instance = this;
  }

  getDays() {
    return this.lang === 'es' ? this.dayEs : this.dayEn;
  }
}

const weeDaysEs = new WeeDays('es');
const weeDaysEn = new WeeDays('en');
const weeDaysJP = new WeeDays('JP');

console.log(weeDaysEs.getDays());
console.log(weeDaysEn.getDays());
console.log(weeDaysJP.getDays());

