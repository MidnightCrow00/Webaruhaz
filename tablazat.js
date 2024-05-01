export function tablazatLetrehoz(lista) {
  let txt = "";
  txt += "<table class='table table-striped'>";
    txt += "<tr><th>Név</th><th></th><th>Ár(Ft)</th><th>Leírás</th><th></th></tr>";
    lista.forEach((elem, index) => {
      txt += `<tr>
              <td>${elem.nev}</td>
              <td><img id="kepek" alt="kep" src="${elem.kep}"></td>
              <td>${elem.ar} Ft</td>
              <td>${elem.leiras}</td>
              <td class="kuka" id="${index}">🧹</td>
          </tr>`;
    });
    txt += "</table>";
    return txt;
  }

  export function megjelenit(txt) {
    const ELEM = $(".adatok");
    ELEM.html(txt);
  }

  