


let store=JSON.parse(localStorage.getItem("items"));

let bag=0;

for(let i=0;i<store.length;i++)
{
    bag=bag+store[i].data.price;
}



// let total_items=document.getElementById("total-div");
// total_items.innerText=store.length;

let h2=document.getElementById("cart_total");
h2.innerText=bag;





for(let i=0;i<store.length;i++)
{
    let cart=document.getElementById("cart");

    let div=document.createElement("div");
  
    
    let image=document.createElement("img");
    image.src=store[i].data.image;
    
    let name=document.createElement("p");
    name.innerText=store[i].data.name;
    
    let price=document.createElement("p");
    price.innerText=store[i].data.price;

    let butn=document.createElement("button");
    butn.innerText="Remove"
    
    div.append(image,name,price,butn);
    
    cart.append(div)
}





