export function kartyaLetrehoz(lista) {
  let txt = "";
  lista.forEach((elem, index) => {
    txt += `<div class='card col-md-3 kartya'>
        <img id='kepek' class='card-img-top' src='${elem.kep}' alt='Card image' style='width:100%'>
        <h4 class="card-title">${elem.nev}</h4>
        <p class="card-text">${elem.ar} Ft</p>
        <p class="card-text">${elem.leiras}</p>
        <a id="${index}" class="btn btn-primary kosarbaTesz" style='margin-bottom: 20px;'>Kosárba teszem</a></div>`;
  });
  return txt;
}

export function kartyaMegjelenit(txt) {
  const ELEM = $(".kadatok");
  ELEM.html(txt);
}
