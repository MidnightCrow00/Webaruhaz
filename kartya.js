export function kartyaLetrehoz(lista) {
  let txt = "<div class='card col-md-3' style='width:400px;padding:10px; margin:10px;'>";
  lista.forEach((elem, index) => {
    txt += `
        <img id='kepek' class='card-img-top' src='${elem.kep}' alt='Card image' style='width:100%'>
        <div class='card-body'>
        <h4 class="card-title">${elem.nev}</h4>
        <p class="card-text">${elem.ar} Ft</p>
        <p class="card-text">${elem.leiras}</p>
        <a href="#" id="${index}" class="btn btn-primary">Kosárba teszem</a>`;
  });
  txt += "</div>";
  txt += "</div>";
  return txt;
}

export function kartyaMegjelenit(txt) {
  const ELEM = $(".padatok");
  ELEM.html(txt);
}
