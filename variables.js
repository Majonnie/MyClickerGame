// Initialisation des variables :
var minous = localStorage.getItem("minous") === null ? [
    {id:1, displayname:"Cat hand", name:"cathand", cost:10, fps:1, owned: 1},
    {id:2, displayname:"Cat", name:"cat", cost:10, fps:0.1, owned: 0},
    {id:3, displayname:"Fisher Cat", name:"fisher", cost:100, fps:1, owned: 0},
    {id:4, displayname:"Catcher", name:"catcher", cost:1000, fps:10, owned: 0},
    {id:5, displayname:"Cat Boat", name:"net", cost:10000, fps:100, owned: 0},
    {id:6, displayname:"Swimmer Cat", name:"swimmer", cost:100000, fps:1000, owned: 0},
    {id:7, displayname:"Mermaid Cat", name:"mermaid", cost:1000000, fps:10000, owned: 0},
    {id:8, displayname:"Poseicat", name:"poseicat", cost:10000000, fps:100000, owned: 0},
] : JSON.parse(localStorage["minous"]);
var fish = localStorage.getItem("fish") === null ? 0 : parseInt(localStorage.getItem("fish"));
let fps = 0;
let clickValue = 0;
let total = 0;
let clicksn = 0;