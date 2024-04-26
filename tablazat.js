export function tablazatLetrehoz(lista) {
    let txt = "<div class='table-responsive'><table class='table table-striped'>";
    txt += "<thead>";
    txt += "<tr><th>Név</th><th></th><th>Ár(Ft)</th><th>Leírás</th><th></th></tr>";
    txt += "</thead>";
    txt += "<tbody>";
    lista.forEach((elem, index) => {
      txt += `<tr>
              <td>${elem.nev}</td>
              <td><img id="kepek" src="${elem.kep}"></td>
              <td>${elem.ar} Ft</td>
              <td>${elem.leiras}</td>
              <td><button class="torol" id="${index}">🧹</button></td>
              <td><button class="szerkeszt" id="${index}">✏</button></td>
          </tr>`;
    });
    txt += "</tbody>";
    txt += "</table></div>";
    return txt;
  }

  export function megjelenit(txt) {
    const ELEM = $(".adatok");
    ELEM.html(txt);
  }

  