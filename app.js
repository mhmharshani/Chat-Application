let userName;

function selectChatUser(){
    userName = document.getElementById("selectUser").value;    
}

function getMessage(){
    return document.getElementById("msgInput").value;   
}

function setMessage(){
    if(userName=="Me"){
        document.getElementById("textAreaMe").innerHTML=getMessage();
    }
    else{
        document.getElementById("textAreaAmali").innerHTML=getMessage();
    }
}