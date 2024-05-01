export function kosarLetrehoz(kosarTartalom) {
  let osszeg = 0;

  let txt = "<div class='table-responsive'><table class='table table-striped'>";
  txt += "<h1>Kosár tartalma:</h1>";
  txt += "<thead>";
  txt +=
    "<tr><th>Név</th><th></th><th>Ár(Ft)</th></tr>";
  txt += "</thead>";
  txt += "<tbody>";
  kosarTartalom.forEach((elem,index) => {
    txt += `<tr>
      <td>${elem.nev}</td>
      <td><img id="kepek" alt="kep" src="${elem.kep}"></td>
      <td>${elem.ar}</td>
      <td class="kuka" id="${index}">🗑</td>
    </tr>`;
    osszeg += elem.ar;
  });
  txt += "</tbody>";
  txt += "</table>";
  txt += `<p>Összesen: ${osszeg} Ft</p>`;
  txt += "</div>";
  return txt;
}

export function kosarMegjelenit(kosarTartalom) {
  const ELEM = $(".kosadatok");
  ELEM.html(kosarTartalom);
}
