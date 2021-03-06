
    var x = document.querySelectorAll(".navBtn.hide");
if (window.innerWidth < 800){

    function showLinks(){
        for (var i = 0; i<x.length; i++){
            x[i].classList.toggle("hide")
        }
    }
} else{
    for (var i = 0; i<x.length; i ++){
        x[i].classList.remove("hide")
    }
}



let products = [
    {
        "titulo" : "DogChow Adulto",
        "precio" : 240,
        "imagen" : "/Css/Imagenes/DogChowAdultos.png",
        "alt" : "Comida para perro adulto DogChow",
        "modal-option-title" : "Kilos",
        "modal-option-values" : [1, 2, 3, 4]
},
{
    "titulo" : "Excellent Adulto",
    "precio" : 260,
    "imagen" : "/Css/Imagenes/ExcellentPerroAdulto.png",
    "alt" : "Comida para perro adulto Excellent",
    "modal-option-title" : "Kilos",
    "modal-option-values" : [1, 2, 3, 4]
},
{
    "titulo" : "Pedigree Razas Pequeñas",
    "precio" : 240,
    "imagen" : "/Css/Imagenes/PedigreeRazasPequeñas.png",
    "alt" : "Comida para perro adulto razas pequeñas Pedigree",
    "modal-option-title" : "Kilos",
    "modal-option-values" : [1, 2, 3, 4]
},
{
    "titulo" : "Pedigree Adultos",
    "precio" : 220,
    "imagen" : "/Css/Imagenes/PedigreeAdulto.png",
    "alt" : "Comida para perro adulto Pedigree",
    "modal-option-title" : "Kilos",
    "modal-option-values" : [1, 2, 3, 4]
},
{
    "titulo" : "Selection Adulto",
    "precio" : 170,
    "imagen" : "/Css/Imagenes/DogSelectionAdulto.png",
    "alt" : "Comida para perro adulto Selection",
    "modal-option-title" : "Kilos",
    "modal-option-values" : [1, 2, 3, 4]
},
{
    "titulo" : "VitalCan Cachorro",
    "precio" : 210,
    "imagen" : "/Css/Imagenes/VitalcanCachorro.png",
    "alt" : "Comida para perro cachorro VitalCan",
    "modal-option-title" : "Kilos",
    "modal-option-values" : [1, 2, 3, 4]
},
{
    "titulo" : "Rosco Adulto",
    "precio" : 120,
    "imagen" : "/Css/Imagenes/RoscoAdulto.png",
    "alt" : "Comida para perro adulto Rosco",
    "modal-option-title" : "Kilos",
    "modal-option-values" : [1, 2, 3, 4]
},
{
    "titulo" : "Cooperación Adulto",
    "precio" : 130,
    "imagen" : "/Css/Imagenes/CooperacionAdulto.jpg",
    "alt" : "Comida para perro adulto Cooperación",
    "modal-option-title" : "Kilos",
    "modal-option-values" : [1, 2, 3, 4]
},
{
    "titulo" : "Raza Adulto",
    "precio" : 160,
    "imagen" : "/Css/Imagenes/RazaAdultos.png",
    "alt" : "Comida para perro adulto Raza",
    "modal-option-title" : "Kilos",
    "modal-option-values" : [1, 2, 3, 4]
},
{
    "titulo" : "Raza Cachorros",
    "precio" : 170,
    "imagen" : "/Css/Imagenes/RazaCachorros.png",
    "alt" : "Comida para perros cachorros Raza",
    "modal-option-title" : "Kilos",
    "modal-option-values" : [1, 2, 3, 4]
},
{
    "titulo" : "Pedigree Pouch",
    "precio" : 80,
    "imagen" : "/Css/Imagenes/PedigreePouch.png",
    "alt" : "Pouch o sobre de comida humeda para perro Pedigree",
    "modal-option-value" : "Sobre/s de 100g",
    "modal-option-values" : [1, 2, 3, 4]
},
{
    "titulo" : "Palitos Saborizados",
    "precio" : 10,
    "imagen" : "/Css/Imagenes/PalitosSnackPerro.png",
    "alt" : "Snacks para perro palitos saborizados",
    "modal-option-title" : "Palitos",
    "modal-option-values" : [3, 6, 10]
},
{
    "titulo" : "Gati Adulto",
    "precio" : 210,
    "imagen" : "/Css/Imagenes/GatiAdultos.png",
    "alt" : "Comida para gato adulto Gati",
    "modal-option-title" : "Kilos",
    "modal-option-values" : [1, 2, 3, 4]
},
{
    "titulo" : "Whiskas Adulto",
    "precio" : 280,
    "imagen" : "/Css/Imagenes/WhiskasAdulto.png",
    "alt" : "Comida para gato adulto Whiskas",
    "modal-option-title" : "Kilos",
    "modal-option-values" : [1, 2, 3, 4]
},{
    "titulo" : "Whiskas Gatitos",
    "precio" : 280,
    "imagen" : "/Css/Imagenes/WhiskasGatito.png",
    "alt" : "Comida para gatito Whiskas",
    "modal-option-title" : "Kilos",
    "modal-option-values" : [1, 2, 3, 4]
},{
    "titulo" : "Excellent Gato Adulto",
    "precio" : 440,
    "imagen" : "/Css/Imagenes/ExcellentGatoAdulto.png",
    "alt" : "Comida para gato adulo Excellent",
    "modal-option-title" : "Kilos",
    "modal-option-values" : [1, 2, 3, 4]
},{
    "titulo" : "Raza Gatos",
    "precio" : 190,
    "imagen" : "/Css/Imagenes/RazaGatos.png",
    "alt" : "Comida para gato adulto Raza",
    "modal-option-title" : "Kilos",
    "modal-option-values" : [1, 2, 3, 4]
},{
    "titulo" : "Whiskas Pouch",
    "precio" : 80,
    "imagen" : "/Css/Imagenes/WhiskasPouch.png",
    "alt" : "Pouch o sobre de comida humeda para gato Whiskas",
    "modal-option-title" : "Sobre/s de 100g",
    "modal-option-values" : [1, 2, 3, 4]
},{
    "titulo" : "BedyWood Colhon Sanitario",
    "precio" : 110,
    "imagen" : "/Css/Imagenes/BedyWood.png",
    "alt" : "Colchon sanitarias para gato marca BedyWood",
    "modal-option-title" : "Bolsa/s de 1.8kg",
    "modal-option-values" : [1, 2, 3, 4]
},{
    "titulo" : "Piedras Sanitarias SaniCat",
    "precio" : 120,
    "imagen" : "/Css/Imagenes/SaniCat.png",
    "alt" : "Piedras Sanitarias SaniCat",
    "modal-option-title" : "Bolsa/s de 2kg",
    "modal-option-values" : [1, 2, 3, 4]
},{
    "titulo" : "Conejin",
    "precio" : 110,
    "imagen" : "/Css/Imagenes/MezclaConejo.png",
    "alt" : "Conejin o comida compactada para conejos",
    "modal-option-title" : "Kilos",
    "modal-option-values" : [1, 2, 3, 4]
},{
    "titulo" : "Mezcla para Gallinas",
    "precio" : 70,
    "imagen" : "/Css/Imagenes/MezclaGallina.jpg",
    "alt" : "Mezcla de semillas, alimento para gallina",
    "modal-option-title" : "Kilos",
    "modal-option-values" : [1, 2, 3, 4]
},{
    "titulo" : "CatChow Adultos",
    "precio" : 350,
    "imagen" : "/Css/Imagenes/CatChow.png",
    "alt" : "Comida para gatos marca CatChow",
    "modal-option-title" : "Kilos",
    "modal-option-values" : [1, 2, 3, 4]
},
]




let comidaPerro1Btn = document.getElementById("comidaPerro1Btn");
let comidaPerro2Btn = document.getElementById("comidaPerro2Btn");
let comidaPerro3Btn = document.getElementById("comidaPerro3Btn");
let comidaPerro4Btn = document.getElementById("comidaPerro4Btn");
let comidaPerro5Btn = document.getElementById("comidaPerro5Btn");
let comidaPerro6Btn = document.getElementById("comidaPerro6Btn");
let comidaPerro7Btn = document.getElementById("comidaPerro7Btn");
let comidaPerro8Btn = document.getElementById("comidaPerro8Btn");
let comidaPerro9Btn = document.getElementById("comidaPerro9Btn");
let comidaPerro10Btn = document.getElementById("comidaPerro10Btn");
let comidaPerro11Btn = document.getElementById("comidaPerro11Btn");
let comidaPerro12Btn = document.getElementById("comidaPerro12Btn");
let comidaGato1Btn = document.getElementById("comidaGato1Btn")
let comidaGato2Btn = document.getElementById("comidaGato2Btn")
let comidaGato3Btn = document.getElementById("comidaGato3Btn")
let comidaGato4Btn = document.getElementById("comidaGato4Btn")
let comidaGato5Btn = document.getElementById("comidaGato5Btn")
let comidaGato6Btn = document.getElementById("comidaGato6Btn")
let comidaGato7Btn = document.getElementById("comidaGato7Btn")
let piedras1Btn = document.getElementById("piedras1Btn");
let piedras2Btn = document.getElementById("piedras2Btn");
let conejinBtn = document.getElementById("conejinBtn");
let mezclaGallinaBtn = document.getElementById("mezclaGallinaBtn");



const productModal = document.getElementById("productModal");
const productModalTitle = document.getElementById("productModalTitle");
const productModalImg = document.getElementById("productModalImg");
const modalOptionTitle = document.getElementById("modalOptionTitle");
const modalOption1 = document.getElementById("modalOption1");
const modalOption2 = document.getElementById("modalOption2");
const modalOption3 = document.getElementById("modalOption3");
const modalOption4 = document.getElementById("modalOption4");

let dogChowAdultos = products[0];
let excellentPerroAdulto = products[1];
let pedigreeRazasPequeñas = products[2];
let pedigreeAdulto = products[3];
let selectionAdulto = products[4];
let vitalCanCachorro = products[5];
let roscoAdulto = products[6];
let cooperacionAdulto = products[7];
let razaAdultos = products[8];
let razaCachorros = products[9];
let pedigreePouch = products[10];
let palitosSnackPerro = products[11];
let gatiAdultos = products[12];
let whiskasAdulto = products[13];
let whiskasGatito = products[14];
let excellentGatoAdulto = products[15];
let razaGatos = products[16];
let catChowAdultos = products[22];
let whiskasPouch = products[17];
let bedywood = products[18];
let sanicat = products[19];
let conejin = products[20];
let mezclaGallina = products[21];

//                   The Close Button 
    let modal = document.querySelectorAll(".modal");
    let closeBtn = document.getElementsByClassName("close");

    for(let i = 0; i < closeBtn.length; i ++){
        closeBtn[i].addEventListener("click", () =>{
            for(let i = 0; i < modal.length; i ++){
                modal[i].style.display = "none";
            }
        })
        }


//        OPEN MODAL
        function showModal(){
            productModal.style.display = "block";
            productModal.classList.add("slide-in-bottom");
        }


//       COMPLETE THE MODAL INFORMATION WITh OBJECT INFO
comidaPerro1Btn.addEventListener("click",() =>{
    showModal();
    productModalTitle.innerHTML = dogChowAdultos.titulo;
    productModalImg.src = dogChowAdultos.imagen;
    productModalImg.alt = dogChowAdultos.alt;
    modalOptionTitle.innerHTML = dogChowAdultos["modal-option-title"];
    modalOption1.innerHTML = dogChowAdultos["modal-option-values"][0].toString();
    modalOption2.innerHTML = dogChowAdultos["modal-option-values"][1].toString();
    modalOption3.innerHTML = dogChowAdultos["modal-option-values"][2].toString();
    modalOption4.innerHTML = dogChowAdultos["modal-option-values"][3].toString();

});
comidaPerro2Btn.addEventListener("click",() =>{
    showModal();
    productModalTitle.innerHTML = excellentPerroAdulto.titulo;
    productModalImg.src = excellentPerroAdulto.imagen;
    productModalImg.alt = excellentPerroAdulto.alt;
    modalOptionTitle.innerHTML = excellentPerroAdulto["modal-option-title"];
    modalOption1.innerHTML = excellentPerroAdulto["modal-option-values"][0].toString();
    modalOption2.innerHTML = excellentPerroAdulto["modal-option-values"][1].toString();
    modalOption3.innerHTML = excellentPerroAdulto["modal-option-values"][2].toString();
    modalOption4.innerHTML = excellentPerroAdulto["modal-option-values"][3].toString();

});
comidaPerro3Btn.addEventListener("click",() =>{
    showModal();
    productModalTitle.innerHTML = pedigreeRazasPequeñas.titulo;
    productModalImg.src = pedigreeRazasPequeñas.imagen;
    productModalImg.alt = pedigreeRazasPequeñas.alt;
    modalOptionTitle.innerHTML = pedigreeRazasPequeñas["modal-option-title"];
    modalOption1.innerHTML = pedigreeRazasPequeñas["modal-option-values"][0].toString();
    modalOption2.innerHTML = pedigreeRazasPequeñas["modal-option-values"][1].toString();
    modalOption3.innerHTML = pedigreeRazasPequeñas["modal-option-values"][2].toString();
    modalOption4.innerHTML = pedigreeRazasPequeñas["modal-option-values"][3].toString();

});
comidaPerro4Btn.addEventListener("click",() =>{
    showModal();
    productModalTitle.innerHTML = pedigreeAdulto.titulo;
    productModalImg.src = pedigreeAdulto.imagen;
    productModalImg.alt = pedigreeAdulto.alt;
    modalOptionTitle.innerHTML = pedigreeAdulto["modal-option-title"];
    modalOption1.innerHTML = pedigreeAdulto["modal-option-values"][0].toString();
    modalOption2.innerHTML = pedigreeAdulto["modal-option-values"][1].toString();
    modalOption3.innerHTML = pedigreeAdulto["modal-option-values"][2].toString();
    modalOption4.innerHTML = pedigreeAdulto["modal-option-values"][3].toString();

});
comidaPerro5Btn.addEventListener("click",() =>{
    showModal();
    productModalTitle.innerHTML = selectionAdulto.titulo;
    productModalImg.src = selectionAdulto.imagen;
    productModalImg.alt = selectionAdulto.alt;
    modalOptionTitle.innerHTML = selectionAdulto["modal-option-title"];
    modalOption1.innerHTML = selectionAdulto["modal-option-values"][0].toString();
    modalOption2.innerHTML = selectionAdulto["modal-option-values"][1].toString();
    modalOption3.innerHTML = selectionAdulto["modal-option-values"][2].toString();
    modalOption4.innerHTML = selectionAdulto["modal-option-values"][3].toString();

});
comidaPerro6Btn.addEventListener("click",() =>{
    showModal();
    productModalTitle.innerHTML = vitalCanCachorro.titulo;
    productModalImg.src = vitalCanCachorro.imagen;
    productModalImg.alt = vitalCanCachorro.alt;
    modalOptionTitle.innerHTML = vitalCanCachorro["modal-option-title"];
    modalOption1.innerHTML = vitalCanCachorro["modal-option-values"][0].toString();
    modalOption2.innerHTML = vitalCanCachorro["modal-option-values"][1].toString();
    modalOption3.innerHTML = vitalCanCachorro["modal-option-values"][2].toString();
    modalOption4.innerHTML = vitalCanCachorro["modal-option-values"][3].toString();

});
comidaPerro7Btn.addEventListener("click",() =>{
    showModal();
    productModalTitle.innerHTML = roscoAdulto.titulo;
    productModalImg.src = roscoAdulto.imagen;
    productModalImg.alt = roscoAdulto.alt;
    modalOptionTitle.innerHTML = roscoAdulto["modal-option-title"];
    modalOption1.innerHTML = roscoAdulto["modal-option-values"][0].toString();
    modalOption2.innerHTML = roscoAdulto["modal-option-values"][1].toString();
    modalOption3.innerHTML = roscoAdulto["modal-option-values"][2].toString();
    modalOption4.innerHTML = roscoAdulto["modal-option-values"][3].toString();

});
comidaPerro8Btn.addEventListener("click",() =>{
    showModal();
    productModalTitle.innerHTML = cooperacionAdulto.titulo;
    productModalImg.src = cooperacionAdulto.imagen;
    productModalImg.alt = cooperacionAdulto.alt;
    modalOptionTitle.innerHTML = cooperacionAdulto["modal-option-title"];
    modalOption1.innerHTML = cooperacionAdulto["modal-option-values"][0].toString();
    modalOption2.innerHTML = cooperacionAdulto["modal-option-values"][1].toString();
    modalOption3.innerHTML = cooperacionAdulto["modal-option-values"][2].toString();
    modalOption4.innerHTML = cooperacionAdulto["modal-option-values"][3].toString();

});
comidaPerro9Btn.addEventListener("click",() =>{
    showModal();
    productModalTitle.innerHTML = razaAdultos.titulo;
    productModalImg.src = razaAdultos.imagen;
    productModalImg.alt = razaAdultos.alt;
    modalOptionTitle.innerHTML = razaAdultos["modal-option-title"];
    modalOption1.innerHTML = razaAdultos["modal-option-values"][0].toString();
    modalOption2.innerHTML = razaAdultos["modal-option-values"][1].toString();
    modalOption3.innerHTML = razaAdultos["modal-option-values"][2].toString();
    modalOption4.innerHTML = razaAdultos["modal-option-values"][3].toString();

});
comidaPerro10Btn.addEventListener("click",() =>{
    showModal();
    productModalTitle.innerHTML = razaCachorros.titulo;
    productModalImg.src = razaCachorros.imagen;
    productModalImg.alt = razaCachorros.alt;
    modalOptionTitle.innerHTML = razaCachorros["modal-option-title"];
    modalOption1.innerHTML = razaCachorros["modal-option-values"][0].toString();
    modalOption2.innerHTML = razaCachorros["modal-option-values"][1].toString();
    modalOption3.innerHTML = razaCachorros["modal-option-values"][2].toString();
    modalOption4.innerHTML = razaCachorros["modal-option-values"][3].toString();

});
comidaPerro11Btn.addEventListener("click",() =>{
    showModal();
    productModalTitle.innerHTML = pedigreePouch.titulo;
    productModalImg.src = pedigreePouch.imagen;
    productModalImg.alt = pedigreePouch.alt;
    modalOptionTitle.innerHTML = pedigreePouch["modal-option-title"];
    modalOption1.innerHTML = pedigreePouch["modal-option-values"][0].toString();
    modalOption2.innerHTML = pedigreePouch["modal-option-values"][1].toString();
    modalOption3.innerHTML = pedigreePouch["modal-option-values"][2].toString();
    modalOption4.innerHTML = pedigreePouch["modal-option-values"][3].toString();

});
comidaPerro12Btn.addEventListener("click",() =>{
    showModal();
    productModalTitle.innerHTML = palitosSnackPerro.titulo;
    productModalImg.src = palitosSnackPerro.imagen;
    productModalImg.alt = palitosSnackPerro.alt;
    modalOptionTitle.innerHTML = palitosSnackPerro["modal-option-title"];
    modalOption1.innerHTML = palitosSnackPerro["modal-option-values"][0].toString();
    modalOption2.innerHTML = palitosSnackPerro["modal-option-values"][1].toString();
    modalOption3.innerHTML = palitosSnackPerro["modal-option-values"][2].toString();
    modalOption4.style.display = "none";

});
comidaGato1Btn.addEventListener("click",() =>{
    showModal();
    productModalTitle.innerHTML = gatiAdultos.titulo;
    productModalImg.src = gatiAdultos.imagen;
    productModalImg.alt = gatiAdultos.alt;
    modalOptionTitle.innerHTML = gatiAdultos["modal-option-title"];
    modalOption1.innerHTML = gatiAdultos["modal-option-values"][0].toString();
    modalOption2.innerHTML = gatiAdultos["modal-option-values"][1].toString();
    modalOption3.innerHTML = gatiAdultos["modal-option-values"][2].toString();
    modalOption4.innerHTML = gatiAdultos["moda-optioin-values"][3].toString();

});
comidaGato2Btn.addEventListener("click",() =>{
    showModal();
    productModalTitle.innerHTML = whiskasAdulto.titulo;
    productModalImg.src = whiskasAdulto.imagen;
    productModalImg.alt = whiskasAdulto.alt;
    modalOptionTitle.innerHTML = whiskasAdulto["modal-option-title"];
    modalOption1.innerHTML = whiskasAdulto["modal-option-values"][0].toString();
    modalOption2.innerHTML = whiskasAdulto["modal-option-values"][1].toString();
    modalOption3.innerHTML = whiskasAdulto["modal-option-values"][2].toString();
    modalOption4.innerHTML = whiskasAdulto["moda-optioin-values"][3].toString();

});
comidaGato3Btn.addEventListener("click",() =>{
    showModal();
    productModalTitle.innerHTML = whiskasGatito.titulo;
    productModalImg.src = whiskasGatito.imagen;
    productModalImg.alt = whiskasGatito.alt;
    modalOptionTitle.innerHTML = whiskasGatito["modal-option-title"];
    modalOption1.innerHTML = whiskasGatito["modal-option-values"][0].toString();
    modalOption2.innerHTML = whiskasGatito["modal-option-values"][1].toString();
    modalOption3.innerHTML = whiskasGatito["modal-option-values"][2].toString();
    modalOption4.innerHTML = whiskasGatito["moda-optioin-values"][3].toString();

});
comidaGato4Btn.addEventListener("click",() =>{
    showModal();
    productModalTitle.innerHTML = excellentGatoAdulto.titulo;
    productModalImg.src = excellentGatoAdulto.imagen;
    productModalImg.alt = excellentGatoAdulto.alt;
    modalOptionTitle.innerHTML = excellentGatoAdulto["modal-option-title"];
    modalOption1.innerHTML = excellentGatoAdulto["modal-option-values"][0].toString();
    modalOption2.innerHTML = excellentGatoAdulto["modal-option-values"][1].toString();
    modalOption3.innerHTML = excellentGatoAdulto["modal-option-values"][2].toString();
    modalOption4.innerHTML = excellentGatoAdulto["moda-optioin-values"][3].toString();

});
comidaGato5Btn.addEventListener("click",() =>{
    showModal();
    productModalTitle.innerHTML = razaGatos.titulo;
    productModalImg.src = razaGatos.imagen;
    productModalImg.alt = razaGatos.alt;
    modalOptionTitle.innerHTML = razaGatos["modal-option-title"];
    modalOption1.innerHTML = razaGatos["modal-option-values"][0].toString();
    modalOption2.innerHTML = razaGatos["modal-option-values"][1].toString();
    modalOption3.innerHTML = razaGatos["modal-option-values"][2].toString();
    modalOption4.innerHTML = razaGatos["moda-optioin-values"][3].toString();
});
comidaGato6Btn.addEventListener("click",() =>{
    showModal();
    productModalTitle.innerHTML = whiskasPouch.titulo;
    productModalImg.src = whiskasPouch.imagen;
    productModalImg.alt = whiskasPouch.alt;
    modalOptionTitle.innerHTML = whiskasPouch["modal-option-title"];
    modalOption1.innerHTML = whiskasPouch["modal-option-values"][0].toString();
    modalOption2.innerHTML = whiskasPouch["modal-option-values"][1].toString();
    modalOption3.innerHTML = whiskasPouch["modal-option-values"][2].toString();
    modalOption4.innerHTML = whiskasPouch["moda-optioin-values"][3].toString();

});
comidaGato7Btn.addEventListener("click",() =>{
    showModal();
    productModalTitle.innerHTML = catChowAdultos.titulo;
    productModalImg.src = catChowAdultos.imagen;
    productModalImg.alt = catChowAdultos.alt;
    modalOptionTitle.innerHTML = catChowAdultos["modal-option-title"];
    modalOption1.innerHTML = catChowAdultos["modal-option-values"][0].toString();
    modalOption2.innerHTML = catChowAdultos["modal-option-values"][1].toString();
    modalOption3.innerHTML = catChowAdultos["modal-option-values"][2].toString();
    modalOption4.innerHTML = catChowAdultos["moda-optioin-values"][3].toString();

});
piedras1Btn.addEventListener("click",() =>{
    showModal();
    productModalTitle.innerHTML = bedywood.titulo;
    productModalImg.src = bedywood.imagen;
    productModalImg.alt = bedywood.alt;
    modalOptionTitle.innerHTML = bedywood["modal-option-title"];
    modalOption1.innerHTML = bedywood["modal-option-values"][0].toString();
    modalOption2.innerHTML = bedywood["modal-option-values"][1].toString();
    modalOption3.innerHTML = bedywood["modal-option-values"][2].toString();
    modalOption4.style.display = "none";

});
piedras2Btn.addEventListener("click",() =>{
    showModal();
    productModalTitle.innerHTML = sanicat.titulo;
    productModalImg.src = sanicat.imagen;
    productModalImg.alt = sanicat.alt;
    modalOptionTitle.innerHTML = sanicat["modal-option-title"];
    modalOption1.innerHTML = sanicat["modal-option-values"][0].toString();
    modalOption2.innerHTML = sanicat["modal-option-values"][1].toString();
    modalOption3.innerHTML = sanicat["modal-option-values"][2].toString();
    modalOption4.style.display = "none";

});

mezclaGallinaBtn.addEventListener("click",() =>{
    showModal();
    productModalTitle.innerHTML = mezclaGallina.titulo;
    productModalImg.src = mezclaGallina.imagen;
    productModalImg.alt = mezclaGallina.alt;
    modalOptionTitle.innerHTML = mezclaGallina["modal-option-title"];
    modalOption1.innerHTML = mezclaGallina["modal-option-values"][0].toString();
    modalOption2.innerHTML = mezclaGallina["modal-option-values"][1].toString();
    modalOption3.innerHTML = mezclaGallina["modal-option-values"][2].toString();
    modalOption4.innerHTML = mezclaGallina["moda-optioin-values"][3].toString();

});

conejinBtn.addEventListener("click",() =>{
    showModal();
    productModalTitle.innerHTML = conejin.titulo;
    productModalImg.src = conejin.imagen;
    productModalImg.alt = conejin.alt;
    modalOptionTitle.innerHTML = conejin["modal-option-title"];
    modalOption1.innerHTML = conejin["modal-option-values"][0].toString();
    modalOption2.innerHTML = conejin["modal-option-values"][1].toString();
    modalOption3.innerHTML = conejin["modal-option-values"][2].toString();
    modalOption4.innerHTML = conejin["moda-optioin-values"][3].toString();

});





