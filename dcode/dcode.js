
function go1() {
    
    txt = document.getElementById("input");
    word = txt.value.split("");
    //answer += "A".charCodeAt(0);
    //alert(String.fromCharCode(65));
    answer = "Answer is... \n\n";
    temp = 0;
    dec();
    blk = document.getElementById("resul");
    blk.innerHTML = answer;
}


function dec(){
    for(var i=0; i<26; i++){
        answer += i+1;
        answer += ". ";
        for(var j=0;j<word.length;j++){
           if(word[j]==" "){
               answer += " ";
            }
            else{
                temp = word[j].charCodeAt(0);
                if((temp >= 65) && (temp <= 90)){
                    temp+=i;
                    if(temp>=91){
                        temp -= 26;
                    }
                    answer += String.fromCharCode(temp);
                }
                else{
                    temp+=i;
                    if(temp>=123){
                        temp -= 26;
                    }
                    answer += String.fromCharCode(temp);
                }   
            }
        }
        answer += "\n";
    }
}

function resize(obj) {
    obj.style.height = "1px";
    obj.style.height = (12+obj.scrollHeight)+"px";
}