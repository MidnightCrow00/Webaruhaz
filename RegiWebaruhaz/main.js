import { allatokLISTA } from "./adat.js";
import { megjelenit, tablazatLetrehoz } from "./tablazat.js";
import { rendez, szuresAr, szuresNev, szuresLeiras, torol, szerkeszt } from "./adatkezelo.js";
import { kartyaLetrehoz, kartyaMegjelenit } from "./kartya.js";
import { kosarLetrehoz, kosarMegjelenit } from "./kosar.js";

let rIrany = 1;

init(allatokLISTA);
initKartya(allatokLISTA);
initKosar();
szuresArSzerint();
szuresNevSzerint();
szuresLeirasSzerint();

function initKartya(lista) {
  let txt = kartyaLetrehoz(lista);
  kartyaMegjelenit(txt);
  rendezes();
  kosarbaTeszEsemeny();
}

function initKosar() {
  const uresKosar = [];
  let txt = kosarLetrehoz(uresKosar);
  kosarMegjelenit(txt);
  torolesemeny();
}

function init(lista) {
  let txt = tablazatLetrehoz(lista);
  megjelenit(txt);
  torolesemeny();
  szerkesztEsemeny();
}

function rendezes() {
  const nevMezoELEM = $(".adatok table th").eq(0);
  nevMezoELEM.on("click", function () {
    const lista = rendez(allatokLISTA, "nev", rIrany);
    init(lista);
    initKartya(lista);
    rIrany *= -1;
  });

  const arMezoELEM = $(".adatok table th").eq(2);
  arMezoELEM.on("click", function () {
    const lista = rendez(allatokLISTA, "ar", rIrany);
    init(lista);
    initKartya(lista);
    rIrany *= -1;
  });
  
  const arMezo2ELEM = $("#ar");
  arMezo2ELEM.on("click", function () {
    const lista = rendez(allatokLISTA, "ar", rIrany);
    rIrany *= -1;
    init(lista);
    initKartya(lista);
  });
  
  const leirasMezoELEM = $(".adatok table th").eq(3);
  leirasMezoELEM.on("click", function () {
    const lista = rendez(allatokLISTA, "leiras", rIrany);
    init(lista);
    initKartya(lista);
    rIrany *= -1;
  });
}

function szuresArSzerint() {
  const szuroElem = $("#ar");
  szuroElem.on("keyup", function () {
    let szoveg = szuroElem.val();
    const szurtLista = szuresAr(allatokLISTA, szoveg);
    init(szurtLista);
    initKartya(szurtLista);
  });
}

function szuresNevSzerint() {
  const szuroElem = $("#nev");
  szuroElem.on("keyup", function () {
    let szoveg = szuroElem.val();
    const szurtLista = szuresNev(allatokLISTA, szoveg);
    init(szurtLista);
    initKartya(szurtLista);
  });
}

function szuresLeirasSzerint() {
  const szuroElem = $("#leiras");
  szuroElem.on("keyup", function () {
    let szoveg = szuroElem.val();
    const szurtLista = szuresLeiras(allatokLISTA, szoveg);
    init(szurtLista);
    initKartya(szurtLista);
  });
}

function torolesemeny() {
  const torolELEM = $(".kuka");
  torolELEM.on("click", function (event) {
    let index = $(event.target).data("index");
    const LISTA = torol(allatokLISTA, index);
    init(LISTA);
    initKartya(LISTA);
  });
}

let kosarTartalom = [];
function kosarbaTeszEsemeny() {
  $(".kosarbaTesz").on("click", function (event) {
    let index = event.target.id;
    let termek = allatokLISTA[index];
    let letezik = false;
    for (let i = 0; i < kosarTartalom.length; i++) {
      if (kosarTartalom[i].nev === termek.nev) {
        kosarTartalom[i].db++;
        letezik = true;
        break;
      }
    }
    if (!letezik) {
      termek.db = 1;
      kosarTartalom.push(termek);
    }
    kosarMegjelenit(kosarLetrehoz(kosarTartalom));
  });
}

function szerkesztEsemeny() {
  const szerkesztELEM = $(".szerkeszt");
  szerkesztELEM.on("click", function (event) {
    let index = event.target.id;
    const LISTA = szerkeszt(allatokLISTA, index);
    init(LISTA);
    initKartya(LISTA);
  });
}
