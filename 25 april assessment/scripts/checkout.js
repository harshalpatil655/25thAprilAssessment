// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time




let balance=JSON.parse(localStorage.getItem("amount"))|| [];

let wallet=document.getElementById("wallet");
wallet.innerText=balance;

let movie=document.getElementById("movie");


let savedmovie=JSON.parse(localStorage.getItem("movie"));



    let div=document.createElement("div");

    let img=document.createElement("img");
    img.src=savedmovie.Poster;

    let title=document.createElement("h1");
    title.innerText=savedmovie.Title;

    div.append(img,title);

    movie.append(div)

    
function ticket(){

    let seats=document.getElementById("number_of_seats").value;
    seats=Number(seats);

    seats=seats*100;

    let sum=balance-seats;

    if(sum<=0)
    {
        alert("Insufficient Balance!");
    }
    else
    {
        alert("Booking successful!");
        localStorage.setItem("amount",JSON.stringify(sum));
        window.location.reload()
    }

    
}

