import { megjelenit, tablazatLetrehoz } from "./tablazat.js";
import { getAdat, deleteAdat } from "./asszinkron.js";
import { sorBeszur } from "./urlapkezelo.js";
import { rendez, szures, torol } from "./adatkezelo.js";

getAdat("http://localhost:3000/kutyasLista", init);

export function init(lista) {
    let txt = tablazatLetrehoz(lista);
    megjelenit(txt);
    sorBeszur(lista);
    torolEsemeny();
}
function szuresNevSzerint() {
    const szuroElem = $("#sznev");
    szuroElem.on("keyup", function () {
      let szoveg = szuroElem.val();
      init(szures(emberekLISTA, szoveg));
    });
  }

  function rendezesEsemeny() {
    const nevMezoElem = $(".adatok table th").eq(0);
    nevMezoElem.on("click", function () {
      const lista = rendez(emberekLISTA, "nev", rIrany);
      console.log(lista);
      init(lista);
      rIrany *= -1;
    });
  }
  
  
  function torolEsemeny() {
    const torolELEM = $(".kuka");
    torolELEM.on("click", function (event) {
      let index = event.target.id;
      deleteAdat("http://localhost:3000/kutyasLista", index);
    });
  }