//store the products array in localstorage as "data"

let store=JSON.parse(localStorage.getItem("data"))

let arr=[];
function myProducts(e){
    e.preventDefault();
    

    let form=document.getElementById("product_form");

    let brand=form.product_brand.value;

    let name=form.product_name.value;

    let price=form.product_price.value;

    let image=form.product_image.value;

    let p1= new hulk(brand,name,price,image);

    arr.push(p1);
   
    localStorage.setItem("data",JSON.stringify(arr));
}


function hulk(b,n,p,i){
    this.brand=b,
    this.name=n,
    this.price=p,
    this.image=i
}