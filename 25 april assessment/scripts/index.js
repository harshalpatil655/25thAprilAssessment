// Store the wallet amount to your local storage with key "amount"


const walletAmount = ()=>{

    let data= JSON.parse(localStorage.getItem("amount"))||[];


    let amount=document.getElementById("amount").value;
    amount=Number(amount);
    data=Number(data);
    amount=amount+data;
    

    

    localStorage.setItem("amount",JSON.stringify(amount));

    let wallet=document.getElementById("wallet");
    wallet.innerText=amount;   

}