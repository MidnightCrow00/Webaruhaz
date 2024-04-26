export function kartyaLetrehoz(lista) {
  let txt = "<div class='container mt-3'>";
  txt += "<div class='card' style='width:400px'>";
  txt += "<div class='card-body'>";
  lista.forEach((elem, index) => {
    txt += `
        <img id='kepek' class='card-img-top' src='${elem.kep}' alt='Card image' style='width:100%'>
        <h4 class="card-title">${elem.nev}</h4>
        <p class="card-text">${elem.leiras}</p>
        <a href="#" class="btn btn-primary">See Profile</a>
        <button id="${index}">✏</button>`;
  });
  txt += "</div>";
  txt += "</div>";
  txt += "</div>";
  return txt;
}

export function kartyaMegjelenit(txt) {
  const ELEM = $(".adatok");
  ELEM.html(txt);
}
