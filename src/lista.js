const list = [];
export function hozaad(){
    for(let i = 0; i = 10; i++){
        if(szam < 0){
        console.print("Hibás számot adott meg.")
        }else{
        list[i] = szam;
        }
    }
}
export function atlag(){
    let szamolo = 0;
    let osszegszam = 0;
    for(let i = 0; i = 10; i++){
        osszegszam= osszegszam + szam;
        szamolo++;
    }
    let atlagszam = osszegszam / szamolo
    console.print(atlagszam);
}