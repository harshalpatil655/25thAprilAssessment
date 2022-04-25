// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks


document.querySelector("form").addEventListener("submit",hulk);

function hulk(){
    event.preventDefault();


    var pic=document.querySelector("#image").value;
    var name1=document.querySelector("#name").value;
    var bat=document.querySelector("#batch").value;
    var dsa1=document.querySelector("#dsa").value;
    var dsa2=Number(dsa1);
    var skill=document.querySelector("#cs").value;
    var skill1=Number(skill);
    var code1=document.querySelector("#coding").value;
    var code2=Number(code1);

    var tr=document.createElement("tr");

    var td1=document.createElement("td");
    var pics=document.createElement("img");
    pics.src=pic;
    td1.append(pics);
    
    var td2=document.createElement("td");
    td2.innerText=name1;
    var td3=document.createElement("td");
    td3.innerText=bat;
    var td4=document.createElement("td");
    td4.innerText=dsa1;
    var td5=document.createElement("td");
    td5.innerText=skill;
    var td6=document.createElement("td");
    td6.innerText=code1;

    var obtained_score=eval(dsa2+skill1+code2);
   
    var total_score=30;

    var per=eval(obtained_score/total_score);
    var percent=eval(per*100);
    

    var td7=document.createElement("td");
    td7.innerText=percent;
   
    var td8=document.createElement("td");
   
    if(percent>50)
    {
        var stat="Regular";
        td8.innerText=stat;
        td8.style.backgroundColor="green"

    }
    else{
        var stat2="Async";
        td8.innerText=stat2;
        td8.style.backgroundColor="red";
    }
  tr.append(td1,td2,td3,td4,td5,td6,td7,td8);

  document.querySelector("tbody").append(tr);



   
    


}
