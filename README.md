## Specifikációk

Készíts "webáruházat" tetszőleges témában. 

Egy listában tároljuk az objektumokat, minden objektumnak legalább 3 adata legyen!

Az adatokat jelenítsd meg egy táblázatban!
A formázáshoz bootstrap-et használj! A design eltérhet a képen látottól!
A táblázat fejlécére kattintva tudjunk rendezni növekvő, illetve csökkenő sorrendbe az adatokat (Egyszer kattintunk növekvő, mégegyszer- csökkenő sorrendben az adott fejléc szerint) Az elv: a listádat rendezd, majd hívd meg újra az oldal megjelenítését!
Készíts 3 szűrés mezőt, amiben kiválasztott mezők alapján szűrheted az adataidat!
++ A táblázat minden sora mellett legyen egy törlés gomb, amivel az adott sort tudjuk törölni a táblázatból. 
++++ A táblázat minden sora mellett legyen egy szerkesztés gomb, ahol tudjuk szerkeszteni a lista adott sorát!

## PUBLIKUS FELÜLET 

A publikus felületen div-ekben jelenítsük meg az adatokat. Az előzetes minta alapján! Figyelj a reszponzitvitásra!
Az oldalon legyen szűrési és rendezési lehetőség is!
Kosár funkció:  A publikus felületen a terméket helyezheted a kosárba. A kosárban lévő termékeket listázhatod, törölheted, módosíthatod az elemszámát, majd leadhatod a rendelést!
++ Lehet, hogy szükséged lesz a localStorage használatára. 
++ Ilyenkor készíthetsz a kosárba tett termékekről egy PDF dokumentumot is.  :D
++ Minden termékhez (divhez) tartozik egy gomb, amivel meg tudjuk nézni azt az egyetlen terméket.
A kiemelt termék mellett megjelenik egy bal és egy jobb léptető gomb, amivel léptetni tudjuk a terméket.

## Függvények Admin felület

1. *** tablazatLetrehoz(lista) *** -> txt lista alapján készít html kódot, táblázatot, visszaadja az elkészült htlm szöveget, minden sor mellett egy törlés ikonnal
2. *** megjelenit(txt) *** -> megjeleníti a paraméterben kapott szöveget egy adott html elemben.
3. *** rendez(lista) *** -> visszért.: rlista; a lista megrendezi a listát az adott paraméter szerint (név kulcs szerint) és a megrendezett listát visszadja, akkor futt le, amikor rákattintunk a táblázat fejlécére
4. *** szures(lista, keresoSzoveg) *** -> visszért.: szurtLista; akkor fog lefutni, ha a szűrőmezőben változás történik (keyup) -> a listában a név mezőben keres egyezéseket és szűri a listát ez alapján -> filter
5. *** sorBeszur(lista) *** -> visszért.: ujLista; ha a submit gombra kattintunk akkor fut le a függvény, az űrlap adatokat objektumá alakítjuk, majd hozzáadjuk a listához (push)
6. *** torol(lista, index) *** -> törli a lista index-edik sorát, minden sor mellett lesz egy torol ikon, amire kattintva megkapjuk az adott sor indexét és meghívodik a torol függvény

## Függvények Publikus felület

1. *** kosarLetrehoz(lista) *** -> txt lista alapján készít html kódot, táblázatot, visszaadja az elkészült kosarat.
2. *** kartyaLetrehoz(klista) *** -> txt lista alapján készít html kódot, táblázatot, visszaadja az elkészült htlm szöveget
3. *** kosarMegjelenit(txt) *** -> megjeleníti a paraméterben kapott szöveget egy adott html elemben.
2. *** kartyaMegjelenit(ktxt) *** -> megjeleníti a paraméterben kapott szöveget egy adott html elemben.
3. *** rendez(lista, kulcs, rIrany) *** -> visszért.: rlista; a lista megrendezi a listát az adott paraméter szerint (név kulcs szerint) és a megrendezett listát visszadja, akkor futt le, amikor rákattintunk a táblázat fejlécére
6. *** torol(lista, index) *** -> törli a lista index-edik sorát, minden sor mellett lesz egy torol ikon, amire kattintva megkapjuk az adott sor indexét és meghívodik a torol függvény