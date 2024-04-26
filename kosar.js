export function kosarLetrehoz(lista) {
    let txt = "<div class='table-responsive'><table class='table table-striped'>";
    txt += "<h1>Kosár tartalma:</h1>";
    txt += "<thead>";
    txt += "<tr><th>Név</th><th></th><th>Ár(Ft)</th><th>Leírás</th><th></th></tr>";
    txt += "</thead>";
    txt += "<tbody>";
    lista.forEach((elem, index) => {
      txt += `<tr>
              
          </tr>`;
    });
    txt += "</tbody>";
    txt += "</table></div>";
    return txt;
  }

  export function kosarMegjelenit(txt) {
    const ELEM = $(".kosadatok");
    ELEM.html(txt);
  }

  