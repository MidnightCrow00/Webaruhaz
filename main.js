import { allatokLISTA } from "./adat.js";
import { megjelenit, tablazatLetrehoz } from "./tablazat.js";
import { rendez,szuresAr,szuresNev,szuresLeiras,torol }from "./adatkezelo.js";  
import { kartyaLetrehoz, kartyaMegjelenit } from "./kartya.js"; 
import { kosarLetrehoz, kosarMegjelenit } from "./kosar.js"; 

let rIrany = 1;
init(allatokLISTA);
initKartya(allatokLISTA);
initKosar(allatokLISTA);
szuresArSzerint();
szuresNevSzerint();
szuresLeirasSzerint();

function initKartya(lista) {
  let txt = kartyaLetrehoz(lista);
  kartyaMegjelenit(txt);
  rendezes();
  torolesemeny();
}
function initKosar(lista) {
  let txt = kosarLetrehoz(lista);
  kosarMegjelenit(txt);
  rendezes();
  torolesemeny();
}

function init(lista) {
  let txt = tablazatLetrehoz(lista);
  megjelenit(txt);
  rendezes();
  torolesemeny();
}

function rendezes() {
  const nevMezoELEM = $(".adatok table th").eq(0);
  nevMezoELEM.on("click", function () {
    const lista = rendez(allatokLISTA, "nev", rIrany);
    console.log(lista);
    init(lista);
    initKartya(lista);
    initKosar(lista);
    rIrany *= -1;
    console.log(rIrany);
  });

  const arMezoELEM = $(".adatok table th").eq(2);
    arMezoELEM.on("click", function () {
    const lista = rendez(allatokLISTA, "ar", rIrany);
    console.log(lista);
    init(lista);
    initKartya(lista);
    initKosar(lista);
    rIrany *= -1;
    console.log(rIrany);
  });

  const leirasMezoELEM = $(".adatok table th").eq(3);
    leirasMezoELEM.on("click", function () {
    const lista = rendez(allatokLISTA, "leiras", rIrany);
    console.log(lista);
    init(lista);
    initKartya(lista);
    initKosar(lista);
    rIrany *= -1;
    console.log(rIrany);
  });
}

function szuresArSzerint() {
  const szuroElem = $("#ar");
  szuroElem.on("keyup", function () {
    let szoveg = szuroElem.val();
    init(szuresAr(allatokLISTA, szoveg));
    initKartya(szuresAr(allatokLISTA, szoveg));
    initKosar(szuresAr(allatokLISTA, szoveg));
  });
}

function szuresNevSzerint() {
  const szuroElem = $("#nev");
  szuroElem.on("keyup", function () {
    let szoveg = szuroElem.val();
    init(szuresNev(allatokLISTA, szoveg));
    initKartya(szuresNev(allatokLISTA, szoveg));
    initKosar(szuresNev(allatokLISTA, szoveg));
  });
}

function szuresLeirasSzerint() {
  const szuroElem = $("#leiras");
  szuroElem.on("keyup", function () {
    let szoveg = szuroElem.val();
    init(szuresLeiras(allatokLISTA, szoveg));
  });
}

function torolesemeny() {
  const torolELEM = $(".torol");
  torolELEM.on("click", function (event) {
    let index = event.target.id;
    const LISTA = torol(allatokLISTA, index);
    init(LISTA);
  });
}
