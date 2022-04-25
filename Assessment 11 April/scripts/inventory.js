

let data=JSON.parse(localStorage("data"));

data.map(event){

    let brand1=document.createElement("p");
    brand1.innerText=event.brand

    let name1=document.createElement("p");
    name1.innerText=event.name;

    let price1=document.createElement("p");
    price1.innerText=event.price;

    let image1=document.createElement("p");
    image1.innerText=event.image;

    document.getElementById("products_data").append(brand1,name1,price1,image1);
}


function removeProduct(e)
{
    data.splice();

}