import { allatokLISTA } from "./adat.js";
import { megjelenit, tablazatLetrehoz } from "./tablazat.js";
import {rendez,szuresAr,szuresNev,szuresLeiras,torol,szerkeszt} from "./adatkezelo.js";
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
    initKosar(lista);
    rIrany *= -1;
  });

  const arMezoELEM = $(".adatok table th").eq(2);
  arMezoELEM.on("click", function () {
    const lista = rendez(allatokLISTA, "ar", rIrany);
    init(lista);
    initKartya(lista);
    initKosar(lista);
    rIrany *= -1;
  });

  const leirasMezoELEM = $(".adatok table th").eq(3);
  leirasMezoELEM.on("click", function () {
    const lista = rendez(allatokLISTA, "leiras", rIrany);
    init(lista);
    initKartya(lista);
    initKosar(lista);
    rIrany *= -1;
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
  const torolELEM = $(".kuka");
  torolELEM.on("click", function (event) {
    let index = event.target.id;
    const LISTA = torol(allatokLISTA, index);
    init(LISTA);
  });
}

let kosarTartalom = [];
function kosarbaTeszEsemeny() {
  $(".kosarbaTesz").on("click", function (event) {
    let index = event.target.id;
    //eldöntés tétele
    //végig kell menni a kosár termékein és meg kell néz ni, 
    // hogy a kosár i. elemének a neve azonos-e, mint az az elem neve, amire most kattintottunk. 
    
    for (let index = 0; index < kosarTartalom.length; index++) {
      kosarTartalom[index] 
    }
    //Ha nincs ilyen elem, akkor hozzáadunk egy db:1 kulcs érték párt az aktuális elemhez és ezt rakjuk bele a kosárba
    //ha van már ilyen elem, akkor annak az elemnek a kosárban a db értékét megnöveljük. 
    kosarTartalom.push(allatokLISTA[index])
    kosarMegjelenit(kosarLetrehoz(kosarTartalom));
  });
}

function szerkesztEsemeny(){
  const szerkesztELEM = $(".szerkeszt")
  szerkesztELEM.on("click", function (event) {
    let index = event.target.id;
    const LISTA = szerkeszt(allatokLISTA, index)
    init(LISTA)
  })
}