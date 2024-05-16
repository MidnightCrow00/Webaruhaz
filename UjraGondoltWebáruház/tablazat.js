export function tablazatLetrehoz(lista) {
    let txt = "";
    txt += "<table class='table table-striped'>";
      txt += "<tr><th>Név</th><th></th><th>Ár(Ft)</th><th>Leírás</th><th>Törlés</th><th>Szerkesztés</th></tr>";
      lista.forEach((elem, index) => {
        txt += `<tr>
                <td id="nev${index}" contentEditable=${elem.szerkesztheto?"true":"false"} >${elem.nev}</td>
                <td><img id="kepek" alt="kep" src="${elem.kep}"></td>
                <td id="ar${index}" contentEditable=${elem.szerkesztheto?"true":"false"}>${elem.ar} Ft</td>
                <td id="leiras${index}" contentEditable=${elem.szerkesztheto?"true":"false"}>${elem.leiras}</td>
                <td class="kuka" id="${elem.id}">❌</td>
                <td id="${index}" class="szerkeszt">${elem.szerkesztheto?"✔":"✏"}</td>
            </tr>`;
      });
      txt += "</table>";
      return txt; 
    }
  
    export function megjelenit(txt) {
      const ELEM = $(".adatok");
      ELEM.html(txt);
    }
  
    