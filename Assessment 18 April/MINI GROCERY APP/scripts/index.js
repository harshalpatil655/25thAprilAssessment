// Store items items in local storage with key: "items"

let url="https://grocery-masai.herokuapp.com/items" ;

let arr=JSON.parse(localStorage.getItem("items"))|| [];





    fetch(url).then(function(res){
        return res.json();
    }).then(function(res){
        // console.log(res);
        appendData(res);
    }).catch(function(err){
        console.log(err);
    })


  

    function appendData(data){
       
       
        console.log(data.data[0].price)

        for(let i=0;i<data.data.length;i++)
        {

            let items=document.getElementById("items");

            let div=document.createElement("div");
    
    
            let image=document.createElement("img");
            image.src=data.data[i].image;
    
            let name=document.createElement("p");
            name.innerText=data.data[i].name;
    
            let price=document.createElement("p");
            price.innerText=data.data[i].price;

            let butn=document.createElement("button");
            butn.innerText="Add to cart";

            butn.addEventListener("click",function(){
              
                let p1=new addData(data.data[i])

                arr.push(p1);
                localStorage.setItem("items",JSON.stringify(arr));

                window.location.reload();

                
            })
            

            
            div.append(image,name,price,butn);
    
            items.append(div);

           



        }

    }

    function addData(data){
        this.data=data

    }
    let num=document.getElementById("item_count");
    num.innerText=arr.length;

    