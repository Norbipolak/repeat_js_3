function writeConsole(text) {
    console.log(text);
    cb();
}

/*
Csináltunk itt egy function-t, ami csak annyit csinál, hogy vár egy text-et, amit majd ki fogunk írni 

HTML-ben csináltunk egy gomb-ot, megadtunk neki egy onClick attributumot és ebben pedig, meghívtuk ezt a függvényt és megadtuk neki, hogy 
mit írjon

<button onclick="writeConsole('Ez a paraméter értéke')">Nyomd meg</button>

tehát, ha rákattintunk erre a gombra akkor majd a console-ra ezt ki fogja írni!!!!!!
*/

function cb() {
    alert("valami");
}
/*
Csináltuk ezt a callback function-t, ami annyit csinál, hogy alert-ben kiírunk valamit -> az oldal közlendője dolog 

és mivel ez meg van hívva a writeConsole-ban 
ezért, amikor majd a writeConsole meg lesz hívva, akkor ez is lefut 
és ilyenkor már nem csak azt írja ki a konzol-ra, hogy amit megadunk meghíváskor, hanem minden meghívásakor a writeConsole-nak 
ez a cb is le fog futni és kiírjuk alert-ben, hogy valami 

ez nagyon fontos ez a callback, mert projecteknél is ezt csináljuk, hogy csinálunk egy függvényt, amit majd meghívunk egy másik 
függvényben és azt a függvényt hívjuk csak meg!!!! 

és ezek a callback-ek ha várnak valamit egy másik függvényből akkor meghívjuk amikor ezeket a dolgok ugy már megvannak és így 
át tudjuk neki adni!!!! 
*****************************************************************************************************************************
*/
/*
eseménykezelő létrehozása objektummal 
1. kattintás 

Csináltuk ezt a button-t amit majd lementünk id-alapján és adunk neki egy eventListener-t 
<button id="btn1">Ne nyomd meg!</button>
*/

const btn_1 = document.querySelector("#btn1");

btn_1.addEventListener("click", function () {
    writeConsole("Valami");
    cb();
});
/*
Ebben a function-ben meghívtuk a két function-t amit előbb csináltunk és mindkettő lefutot 
writeConsole-nál megadtuk itt meghívásnál, hogy mit console.log-oljon ki illetve a cb() az meg mindig alert("valami")

az a lényeg, hogy minden egyes gombnyomásnál ez le fog futni 
*/
/*
2. Állapotváltozás

    <select id="select1">
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
    </select>

Csináltunk egy select-et, aminek adtunk egy id-t, hogy lementsük és ebben van 3 option mindegyik különböző value-val
*/

// const select1 = document.querySelector("#select1");

// select1.addEventListener("change", function(e) {
//     console.log(this.value);
//     console.log(e.target.value);
// });

// Wrap your JavaScript code inside DOMContentLoaded event listener
document.addEventListener("DOMContentLoaded", function () {
    const select1 = document.querySelector("#select1");

    select1.addEventListener("change", function (e) {
        console.log(this.value);
        console.log(e.target.value);

        console.log(typeof this.value);
    });
});

/*
valamiért volt egy cannot read properties null 

és ezért az egészet belerakutuk egy DOMContentLoaded eventListener-be a document-umra és így megbizonyoosudunk arról, hogy 
HTML document az teljesen be van töltve és utána tudunk manipulálni 

    select1.addEventListener("change", function(e) {
        console.log(this.value);
        console.log(e.target.value);
    });

ami itt nagyon, fontos, hogy a this-vel tudunk a select-nek a value-ja hivatkozni vagy ugyanez a e.target.value, amit majd a react-nál fogunk 
használni 
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
Az a lényeg, hogy így attól függően, hogy mit választunk ki, ugye ha 1-est annak 1 lesz a value-ja és ezt meg kikonzolozzuk és akkor 1 lesz ott 
ugye kétszer, mert ez a két dolog, mindegyik teljesen ugyanazt csinálja!!!
console.log(this.value);
console.log(e.target.value);

console.log(typeof this.value); "1" vagy "2"
ez itt a this.value az mindig egy string lesz!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
és ha nekünk egy number kell majd akkor -> parseInt(this.value);
parseInt-elni kell (parseFloat ha decimálisig akarjuk a számokat)
*/

/*
3. onMouseOver/MouseLeave

Csináltunk egy div-et -> <div id="square1"></div>
    #square1 {
        width: 200px;
        height: 100px;
        background-color: #123456;
    }
Megformáztuk a style-ban a HTML-ben 
*/

document.addEventListener("DOMContentLoaded", function () {
    const square1 = document.querySelector("#square1");

    square1.addEventListener("mouseover", function () {
        console.log("mouse over");
        this.style.cursor = "pointer";
    });

    square1.addEventListener("mouseleave", function () {
        console.log("mouse leave");
    });
});

/*
a square-re, amit csináltunk adtunk egy mouseover-t meg mouseleave eventListener-t 
tehát, ha az egér a square felett van, akkor kiírjuk, hogy mouse over a konzol-ra és ha ezt elhagyta, akkor meg azt, hogy mouse leave 
még fontos, hogy a mouseover-nél a this.style.cursor = "pointer"
ilyenkor, hogyha a square fölött vagyunk, ugye az a this itt, akkor cursor-unk az pointer lesz, ha meg elhagytuk akkor sima
******************************************************************************************************************************/
/*
Attributumok manipulációja 
1. osztály 
<div id="square2"></div>

    #square2 {
        width: 250px;
        height: 250px;
        border: 1px solid grey;
    }
<button id="add-class">add class</button>
<button id="remove-class">remove class</button>
<button id="toggle-class">toggle class</button>

Csináltunk 3 button-t add, remove, toggle class-t és ezeket lementjük meg a square-t is 
*/

const square2 = document.querySelector("#square2");
const addClass = document.querySelector("#add-class");
const removeClass = document.querySelector("#remove-class");
const toggleClass = document.querySelector("#toggle-class");

/*
.red-bg {
    background-color: red;
}
csináltuk ezt a red-bg class-t 
és majd a button-okval fogjuk ezt megadni a square-nek vagy eltüntetni vagy toggle 
*/

// addClass.addEventListener("click", function () {
//     square2.classList.add("red-bg");
// });

// removeClass.addEventListener("click", function () {
//     square2.classList.remove("red-bg");
// });

// toggleClass.addEventListener("click", function () {
//     square2.classList.toggle("red-bg");
// });

// document.addEventListener("DOMContentLoaded", function () {
//     const square2 = document.querySelector("#square2");
//     const addClass = document.querySelector("#add-class");
//     const removeClass = document.querySelector("#remove-class");
//     const toggleClass = document.querySelector("#toggle-class");

//     addClass.addEventListener("click", function () {
//         square2.classList.add("red-bg");
//     });

//     removeClass.addEventListener("click", function () {
//         square2.classList.remove("red-bg");
//     });

//     toggleClass.addEventListener("click", function () {
//         square2.classList.toggle("red-bg");
//     });
// });

/*
és ha csinálunk egy class-t css-ben vagy itt HTML-ben style-ban, akkor azt meg tudjuk adni egy lementett elemnek a classList.add-val 
classList.remove-val ezt le tudjuk venni és classList.toggle-vel pedig rárakni ha nincsen rajt és levenni ha rajta van 
*******************************************************
*/
/*
Style attributumok módosítása 
<div id="square3"></div>
<button id="modify-style">modify style</button>

#square3 {
    width: 250px;
    height: 250px;
    border: 1px solid grey;
}

Itt nem egy class-t csinálunk és azt adjuk hozzá az elemhez, hanem a style attributommal tudunk mindent megcsinálni
*/

document.addEventListener("DOMContentLoaded", function () {
    const square3 = document.querySelector("#square3");
    const modifyStyle = document.querySelector("#modify-style");

    modifyStyle.addEventListener("click", function () {
        square3.style.backgroundColor = "blue";
        square3.style.border = "5px solid brown"
    });
});

/*
Ha rákattintunk a button-re, akkor megkapja a square a backgroundColor-t illetve a border a style segítségével
és akkor nem kell egy class-t létrehozni 
********************************************************************************************
*/
/*
Forrás attributumok 
    <div>
        <img src="https://t4.ftcdn.net/jpg/01/43/42/83/360_F_143428338_gcxw3Jcd0tJpkvvb53pfEztwtU9sxsgT.jpg" id="img1">
    </div>
    <button id="modify-src">modify src</button>
    <button id="remove-src">remove src</button>
    <button id="get-attribute">get attribute</button>
*/

document.addEventListener("DOMContentLoaded", function () {
    const img1 = document.querySelector("#img1");
    const modifySrc = document.querySelector("#modify-src");
    const removeSrc = document.querySelector("#remove-src");
    const getAttribute = document.querySelector("#get-attribute");

    modifySrc.addEventListener("click", function () {
        img1.setAttribute("src", "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png");
        /*
        nagyon fontos, hogy a setAttribute-val metódussal (setAttribute())tudunk akármilyen attributumot beállítani!!! 
        2 paramétert vár 
        1. hogy milyen attributumot szeretnénk beállítani, itt ez src-je lesz egy img-ének 
        2. hogy mire az értéket itt egy másik kép link-je 
        */
    });
    removeSrc.addEventListener("click", function () {
        img1.removeAttribute("src");
    })
    /*
    removeAttribute-vel tudjuk ezt törölni, ez már csak egy dolgot vár, hogy melyik attributumot szeretnénk törölni, itt src
    fontos, hogy ezek "" legyenek 
    */

    getAttribute.addEventListener("click", function () {
        alert(img1.getAttribute("src"));
        /*
        getAttribute-vel megkapjuk az attributum értékét, amit itt megadunk -> src-nek hogy https://gdfgdgefgr
        */
    });
});
/******************************************************************************************************************************************/
/*
innerText és innerHTML

<div id="square4"></div>
<button id="add-text">add text</button>
<button id="add-html">add html</button>

#square4 {
    width: 250px;
    height: 250px;
    border: 1px solid grey;
}
*/

document.addEventListener("DOMContentLoaded", function () {
    const square4 = document.querySelector("#square4");
    const addText = document.querySelector("#add-text");
    const addHtml = document.querySelector("#add-html");

    addText.addEventListener("click", function () {
        square4.innerText = "Add text";
        /*ha meg egy h1-esbe szeretnénk vagy bármilyen html elembe, akkor meg a innerHTML kell!!*/
    });

    addHtml.addEventListener("click", function () {
        square4.innerHTML = "<h1>add html</h1>"
    });
});

/*****************************************************************************************************************************************/
/*
Event capturing és event bubbling 
Az event capturing-nél kivülről befelé halad az event, az event bubbling-nál fordítva 
Az event bubbling az alapértelmezett 
Ezért volt, hogy mikor a belső elemre raktunk egy eventListener-t, akkor kellett a belső elemre egy e.stopPropagation() 
hogy ne fusson le annak a eventListener-je, ami kijebb volt, tehát a parent-nak 

<div id="div1">
    <div id="div2"></div>
</div>

    #div1 {
        width: 200px;
        height: 200px;
        background-color: #569874;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #div2 {
        width: 100px;
        height: 100px;
        background-color: #c6d6e6;
    }

így van egy külső elem, ami nagyobb és benne van egy kisebb elem 
*/

document.addEventListener("DOMContentLoaded", function () {
    const div1 = document.querySelector("#div1");
    const dov2 = document.querySelector("#div2");

    div1.addEventListener("click", function (e) {
        console.log(this);
        e.stopPropagation();
    }, true);

    div2.addEventListener("click", function (e) {
        console.log(this);
    });
});

/*
Ilyenkor, mivel alapbeállítás az event bubbling ezért, ha rákattintunk a belsőre, akkor le fog futni mindkettő 
elöbb a belső és utána a külső 
<div id="div2"></div>
<div id="div1"></div>

tehát nem csak a belső -> <div id="div2"></div> futott le 

ha viszont megadjuk a event e.stopPropagation-t

document.addEventListener("DOMContentLoaded", function () {
    const div1 = document.querySelector("#div1");
    const dov2 = document.querySelector("#div2");

    div1.addEventListener("click", function () {
        console.log(this);
    });

    div2.addEventListener("click", function (e) {
        console.log(this);
        e.stopPropagation();
    });
});

ilyen esetben csak a belső fog lefutni -> <div id="div2"></div> 

Ugye alapesetben ha külsőre tehát a parent-re kattintunk, akkor csak az fog lefutni!!!
<div id="div1"></div> 

    div1.addEventListener("click", function (e) {
        console.log(this);
        e.stopPropagation();
    }, true);

    div2.addEventListener("click", function (e) {
        console.log(this);
    });
});

ha pedig, így megadjuk a stopPropagation-t, akkor csak a külső a parent fog lefutni, mindegy, hogy melyikre kattintunk 
fontos, hogy ott legyen a true a stopPropagation függvény paramétereként 
**********************************************************************************************************************
Event Listener törlése 

<div id="square5"></div>
<button id="delete-event">delete event</button>

.lightcoral-bg {
    background-color: lightcoral;
}

Nagyon fontos!!!! 
Csak akkor tudjuk majd letörölni az eventListener-t, hogyha egy nevesített függvény van megadva 
szóval, úgy ahogy eddig csináltuk egy névtelen függvénnyel, az úgy nem fog müködni!!!!! 
*/


document.addEventListener("DOMContentLoaded", function() {
    const square5 = document.querySelector("#square5");
    const deleteEvent = document.querySelector("#delete-event");

    // ezért hozzúk létre ezt a függvényt, amit majd megadunk az eventListener-nek 

    function toggleLightCoral() {
        //létrehoztunk HTML style-ba ezt a class-t, hogy lightcoral-bg
        this.classList.toggle("lightcoral-bg");
        //fontos, hogy itt this legyen és akkor bárminek meg lehet majd adni 
    }

    square5.addEventListener("click", toggleLightCoral);

    //deleteEvent-vel ami egy button, annak a megnyomásával töröljük ezt a toggleLightCoral-t a square5-ről 
    deleteEvent.addEventListener("click", function() {
        square5.removeEventListener("click", toggleLightCoral);
    });
});