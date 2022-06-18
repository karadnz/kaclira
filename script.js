
let pompaFiyat=0;

function getPrice (){

    //parse ekle
    var today = new Date();

    var day= today.getDate()>10 ? today.getDate() : "0"+today.getDate();

    var month= (today.getMonth()+1)>10 ? today.getMonth()+1 : "0"+(today.getMonth()+1);
    
    var date = day+"."+month+"."+today.getFullYear();
    console.log(date);

    var dateStart= `01.${month}.${today.getFullYear()}`;
    console.log(dateStart)

    const petrol="https://www.petrolofisi.com.tr/posvc/fiyat/gecmis?baslangic=01.06.2022&bitis=07.06.2022&il=ANKARA&ilce=CANKAYA";
    const petrolDynamic=`https://www.petrolofisi.com.tr/posvc/fiyat/gecmis?baslangic=${dateStart}&bitis=${date}&il=ANKARA&ilce=CANKAYA`


    const onEk="https://api.allorigins.win/get?url=";
    
    const sonEk=encodeURIComponent(`${petrolDynamic}`);
    const url=onEk+sonEk;

    

    let json="";

    console.log("flag 1");

    fetch(url).then((response)=>{return response.json();}).then(

        (responseJson)=>{


            let ic="";

            //normal api de bu yok
            console.log(responseJson);
            let yakitJson= JSON.parse(responseJson.contents);
            

            console.log(json);

            //getting the last key from yakitJson object
            var current= Object.keys(yakitJson)[Object.keys(yakitJson).length-1];

            console.log(current);

            console.log(yakitJson);
            console.log(typeof(yakitJson));
            console.log(yakitJson[current][0]);

            ic=`
            <ul class="list-group text-center">

            <li > Fiyat Tarihi: ${current}</li>
            <li > ${yakitJson[current][0].UrunAdi}</li>
            <li > ${yakitJson[current][0].PompaFiyat} ₺ </li>
            
            </ul>
            `
            pompaFiyat= yakitJson[current][0].PompaFiyat;
            

            document.getElementById("price").innerHTML=ic;


            

            
        }

        )



}



function calculatePrice(){

    if(isNaN(document.getElementById("litre2").value))
    {
        alert("numara gir");
    }
    else{
        

        let price = document.getElementById("litre2").value*pompaFiyat;

        let price2=parseFloat(price.toPrecision(4))

        document.getElementById("showPrice").innerHTML=price2;
    }
    
}


function updateLtText(val) {
    //document.getElementById('litre').innerHTML=`${val} lt`;

    document.getElementById('litre2').value=`${val}`; 

    //0.5 olayini kaldir otomatik yuvarlasin daha akici olur
  }


function updateLtRange(val) {
    
    
document.getElementById('gasInput').value=`${val}`; 

    
}



var slider = document.getElementById("gasInput");
var output = document.getElementById("litre2");
output.innerHTML = slider.value; 


slider.oninput = function() {
  output.value = this.value;
}