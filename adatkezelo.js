export function rendez(lista, kulcs, rIrany) {
  const rlista = lista.sort(function (e1, e2) {
    return e1[kulcs] < e2[kulcs] ? -1 * rIrany : 1 * rIrany;
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
    return allat.sznev.includes(keresesNev);
  });

  return szurt_lista;
}

export function szuresLeiras(lista, keresesLeiras) {
  const szurt_lista = lista.filter(function (allat) {
    return allat.szleiras.includes(keresesLeiras);
  });

  return szurt_lista;
}

export function torol(lista, index) {
  lista.splice(index, 1);

  return lista;
}
