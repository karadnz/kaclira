
let pompaFiyat=0;

function getPrice (){


    const onEk="https://api.allorigins.win/get?url=";
    const petrol="https://www.petrolofisi.com.tr/posvc/fiyat/gecmis?baslangic=01.06.2022&bitis=07.06.2022&il=ANKARA&ilce=CANKAYA";
    const sonEk=`${encodeURIComponent('https://www.petrolofisi.com.tr/posvc/fiyat/gecmis?baslangic=01.06.2022&bitis=07.06.2022&il=ANKARA&ilce=CANKAYA')}`;
    const url=onEk+sonEk;

    

    let json="";

    console.log("flag 1");

    fetch(url).then((response)=>{return response.json();}).then(

        (responseJson)=>{


            let ic="";

            //normal api de bu yok
            let yakitJson= JSON.parse(responseJson.contents);
            

            console.log(json);

            

            console.log(yakitJson["04.06.2022"][0]);

            ic=`
            <ul class="list-group text-center">

            <li > ${yakitJson["04.06.2022"][0].UrunAdi}</li>
            <li > ${yakitJson["04.06.2022"][0].PompaFiyat}</li>
            
            </ul>
            `
            pompaFiyat= yakitJson["04.06.2022"][0].PompaFiyat;
            

            document.getElementById("price").innerHTML=ic;


            

            
        }

        )



}



function calculatePrice(){

    if(isNaN(document.getElementById("gasInput").value))
    {
        alert("numara gir");
    }
    else{
        

        let price = document.getElementById("gasInput").value*pompaFiyat;

        let price2=parseFloat(price.toPrecision(4))

        document.getElementById("showPrice").innerHTML=price2;
    }
    
}


function updateLtText(val) {
    //document.getElementById('litre').innerHTML=`${val} lt`;
    document.getElementById('litre2').value=`${val}`; 
  }