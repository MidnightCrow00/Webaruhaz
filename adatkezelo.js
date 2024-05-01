export function rendez(lista, rIrany) {
  const rlista = lista.sort(function (a1, a2) {
    return a1[kulcs] < a2[kulcs] ? -1 * rIrany : 1 * rIrany;
  });

  return rlista;
}

export function szuresAr(lista, keresesAr) {
  const szurt_lista = lista.filter(function (allat) {
    return allat.ar.toString().includes(keresesAr);
  });

  return szurt_lista;
}

export function szuresNev(lista, keresesNev) {
  const szurt_lista = lista.filter(function (allat) {
    return allat.nev.includes(keresesNev);
  });

  return szurt_lista;
}

export function szuresLeiras(lista, keresesLeiras) {
  const szurt_lista = lista.filter(function (allat) {
    return allat.leiras.includes(keresesLeiras);
  });

  return szurt_lista;
}

export function torol(lista, index) {
  lista.splice(index, 1);
  return lista;
}
