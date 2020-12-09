import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jeu',
  templateUrl: './jeu.component.html',
  styleUrls: ['./jeu.component.scss']
})
export class JeuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

/*

window.onload = () => {
  jeu();
}

let cartes = [];
let colors = ["aqua", "aqua", "darkblue", "darkblue", "darkgreen", "darkgreen", "gold", "gold", "chocolate", "chocolate", "deeppink", "deeppink", "darkmagenta", "darkmagenta", "cornsilk", "cornsilk", "darkred", "darkred", "slategrey", "slategrey"];
let correct = 0;
let erreur = 0;
let sauvegarde = [{id:"victoire",victoire:0},{id:"defaite",defaite:0}];
let victoire = 0;
let defaite = 0;

function jeu() {
    load();
    melangeTableau(colors);
    let h1 = document.getElementById("content");
    for (let i = 0; i < 4; i++) {
        let p = document.createElement("p");
        p.id = "p"+(i+1);
        p.className = "ligne";
        p.style.left = 25 + "px";
        p.style.top = 15+(210*i) + "px";
        for (let j = 0; j < 5; j++) {
            let div = document.createElement("div");
            div.id = "d"+((i*5)+(j+1));
            div.style.left = 30+(150*j) + "px";
            div.style.top = 20 + "px";
            div.innerText = "?";
            div.onclick = function () {
                div.style.backgroundColor = colors[(i*5)+(j)];
                div.innerText = "☺️";
                div.style.color = "black";
                if (div.className != "ok") {
                    div.className = colors[(i*5)+(j)];
                    cartes.push(div);
                }
                verifcartes();
            }
            p.appendChild(div);
        } 
        h1.appendChild(p)
    }
    let button = document.createElement("button");
    button.innerText = "J'en suis où?";
    button.className = "bouton";
    button.onclick = function () {
        let span = document.createElement("span");
        span.innerText = "Erreurs : " + erreur + "/8, paires trouvées : " + correct + "/10";
        h1.appendChild(span);
        setTimeout(function () {
            h1.removeChild(span);
        },1000);
    }
    h1.appendChild(button);
    let button2 = document.createElement("button");
    button2.innerText = "Mes records";
    button2.className = "bouton";
    button2.onclick = function () {
        let span = document.createElement("span");
        span.innerText = "Victoires : " + sauvegarde[0].victoire + ", défaites : " + sauvegarde[1].defaite;
        h1.appendChild(span);
        setTimeout(function () {
            h1.removeChild(span);
        },1000);
    }
    h1.appendChild(button2);
}

function verifcartes() {
    setTimeout(function () {                          // Peut parfois créer des bugs, trouver une solution
        if (cartes.length == 2){
            if(cartes[0].className === cartes[1].className) {
                correct++;
                for (let i = 0; i < cartes.length; i++) {
                    cartes[i].className = "ok";
                }
            } else {
                erreur++;
                for (let i = 0; i < cartes.length; i++) {
                    cartes[i].style.backgroundColor = "black";
                    cartes[i].innerText = "?";
                    cartes[i].style.color = "white";
                }
            }
            cartes = [];
            resultat();
        }
    },750);
}

function resultat() {
    if (erreur === 8) {
        document.writeln("PERDU");
        sauvegarde[1].defaite++;
        save();
        reset();
    }
    if (correct === 10) {
        document.writeln("GAGNE");
        sauvegarde[0].victoire++;
        save();
        reset();
    }
}

function melangeTableau(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function reset() {
    let button = document.createElement("button");
    button.innerText = "On recommence ?";
    button.onclick = function () {
        document.location.reload();
    }
    document.body.appendChild(button);
}

function load() {
    let recup = JSON.parse(localStorage.getItem("sauvegarde"));
    if (recup !== null){
        sauvegarde = recup;
    }
}

function save() {
    localStorage.setItem("sauvegarde", JSON.stringify(sauvegarde));
}
*/