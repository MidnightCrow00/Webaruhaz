export function getAdat(vegpont, fveny) {
    fetch(vegpont,{method: "GET"})
    .then(response => response.json())
    .then(data => fveny(data))
    .catch((error)=>console.log(error));
}
export function postAdat(vegpont,adat) {
    fetch(vegpont,{method: "POST", body : JSON.stringify(adat),})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error)=>console.log(error));
}
export function deleteAdat(vegpont,id) {
    fetch(vegpont+"/"+id,{method: "DELETE"})
    .then(response => response.json())
    .then(data => console.log(data)).catch((error)=>console.log(error));
}
export function putAdat(vegpont,id,adat) {
    fetch(vegpont+"/"+id,{method: "PUT",body : JSON.stringify(adat)})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error)=>console.log(error));
}