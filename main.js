import { allatokLISTA } from "./adat.js";
import { megjelenit, tablazatLetrehoz } from "./tablazat.js";
import { rendez,szuresAr,szuresNev,szuresLeiras,torol }from "./adatkezelo.js";    

let rIrany = 1;
init(allatokLISTA);
szuresArSzerint();
szuresNevSzerint();
szuresLeirasSzerint();

function init(lista) {
  let txt = tablazatLetrehoz(lista);
  megjelenit(txt);
  rendezes();
  torolesemeny();
}

function rendezes() {
  const cimMezoELEM = $(".adatok table th").eq(0);
  cimMezoELEM.on("click", function () {
    const lista = rendez(allatokLISTA, "cim", rIrany);
    console.log(lista);
    rIrany *= -1;
    console.log(rIrany);
  });

  const arMezoELEM = $(".adatok table th").eq(2);
    arMezoELEM.on("click", function () {
    const lista = rendez(allatokLISTA, "ar", rIrany);
    console.log(lista);
    init(lista);
    rIrany *= -1;
    console.log(rIrany);
  });
}

function szuresArSzerint() {
  const szuroElem = $("#ar");
  szuroElem.on("keyup", function () {
    let szoveg = szuroElem.val();
    init(szuresAr(allatokLISTA, szoveg));
  });
}

function szuresNevSzerint() {
  const szuroElem = $("#nev");
  szuroElem.on("keyup", function () {
    let szoveg = szuroElem.val();
    init(szuresNev(allatokLISTA, szoveg));
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
