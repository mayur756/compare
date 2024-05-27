// nested max
function findMax() {
        let a = document.getElementById("num1").value;
        let b = document.getElementById("num2").value;
        let c = document.getElementById("num3").value;
      
        let lar;
        if(a==b || a==c || b==a || b==c || c==a || c==b){
            document.getElementById('max').innerHTML="enter vaild input...."+max;
        }
        else{
            if (a > b) {
                if (a > c) {
                  lar = a;
                } else {
                  lar = c;
                }
            } 
            else {
                if (b > c) {
                    lar = b;
                } else {
                  lar = c;
                }
              }
        }
      
        document.getElementById("lar").innerHTML = "Max: " + lar;
}

// min nested
function findmin() {
    let a = document.getElementById("min1").value;
    let b = document.getElementById("min2").value;
  
    let lar;
    if(a==b || b==a ){
        document.getElementById('min').innerHTML="enter vaild input....";
    }
    else{
        if (a > b) {
            lar=a;
        } 
        else {
            lar=b;
          }
          document.getElementById("lar").innerHTML = "max: " + lar;
    }
  
    
}

// odd numbers

function odd(){
    let a=document.getElementById('oddnum').value;


    if(a%2==0){
        document.getElementById("num").innerHTML="this is odd number...";
    }
    else{
        document.getElementById("num").innerHTM="enter vaild input...";
    }
}

// speed break

function speed(){
    let a=document.getElementById('bre').value;
    let b=document.getElementById('time').value;

    if(a==b){
        document.getElementById('res').innerHTML="enter vaild choice...";
    }
    else{
        if(a>40){
            document.getElementById('res').innerHTML="apply break!!";
        }
        else{
            document.getElementById('res').innerHTML="keep going..."
        }
    }
}

// matches tie

function matc(){
    let a=document.getElementById('ang').value;
    let b=document.getElementById('aus').value;

    if(a==b){
        document.getElementById('res-2').innerHTML="Match is tie....";
    }
    else if(a>b){
        document.getElementById('res-2').innerHTML="Australia!!";
    }
    else if(a<b){
        document.getElementById('res-2').innerHTML="England!!";
    }
}

// modules 3

function modu(){
    let a=document.getElementById('mod-1').value;

    if(a%3==0){
        document.getElementById('res-3').innerHTML="your number is divided by 3 ..."
    }
    else{
        document.getElementById('res-3').innerHTML="your number is not divided by 3!!"
    }
}

// comparison
function comp(){
    let a=parseInt(document.getElementById('n1').value);
    let b=parseInt(document.getElementById('n2').value);

    if(a==b){
        document.getElementById('res3').innerHTML="true..";
    }
    else{
        if(a>b){
            document.getElementById('res1').innerHTML="true...";
        }
        else{
            document.getElementById('res2').innerHTML="flase..";
            document.getElementById('res3').innerHTML="flase..";
        }
    }
}

// find
function find() {
    let age = document.getElementById("ageInput").value;
    let result;

    if (age < 13) {
        result = "1 Kms";
    } 
    else if (age >= 13 && age < 18) {
        result = "5 Kms";
    } 
    else if (age >= 18 && age < 30) {
        result = "10 Kms";
    } 
    else {
        result = "You can have friends from anywhere";
    }

    document.getElementById("result").innerText = result;
}


function comparetwo(){
    let a = parseInt(document.getElementById('num-1').value);
    let b = parseInt(document.getElementById('num-2').value);
    let msg;

    document.getElementById('flase').innerHTML = Boolean(a > b);
    document.getElementById('true').innerHTML = Boolean(a < b);
    document.getElementById('dis').innerHTML = Boolean(a == b);
}

function compare(){
    let a = parseInt(document.getElementById('num-1').value);
    let b = parseInt(document.getElementById('num-2').value);
    let c = parseInt(document.getElementById('num-3').value);
    let msg;
    document.getElementById('flase').innerHTML = Boolean(a > b);

    a = a + c; 

    document.getElementById('dis').innerHTML = Boolean(a > b);

}