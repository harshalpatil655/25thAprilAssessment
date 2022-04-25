// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page



//http://www.omdbapi.com/?apikey=[yourkey]&s=${API}
//ba3e03a8

let id;

let container= document.getElementById("movies");

let savedmovie=JSON.parse(localStorage.getItem("movie"))|| [];

let balance=JSON.parse(localStorage.getItem("amount"));

let wallet=document.getElementById("wallet");
wallet.innerText=balance;


async function hulk(){

    let search= document.getElementById("search").value;

    let res= await fetch(`http://www.omdbapi.com/?apikey=ba3e03a8&s=${search}`);

    let data = await res.json();

    let movies= data.Search;

    return movies;

    // appendmovies(movies);

}


function appendmovies(data){

    data.forEach(function(ele){

        let div=document.createElement("div");

        let img=document.createElement("img");
        img.src=ele.Poster;

        let title=document.createElement("h1");
        title.innerText=ele.Title;

        let butn=document.createElement("button");
        butn.setAttribute("class","book_now")
       
        butn.innerText="Book Now";

        div.append(img,title,butn);

        container.append(div);

        butn.addEventListener("click",function(){
            book(ele)
        })
    })
}



 async function main(){

    let moviedata=await hulk();

    if(moviedata===undefined){
        return false;
    }
    appendmovies(moviedata);  
}


function debounce(func,delay){

    if(id){
        clearTimeout(id);
    }
    id=setTimeout(function(){
        func()
    },delay)
}



function book(data){
    localStorage.setItem("movie",JSON.stringify(data)) 
    
    window.location.href="checkout.html"
}