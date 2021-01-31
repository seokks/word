answer = "Answer is... \n\n";
cnt = 1;
atxt=5;
btxt=8;
lis = [
    ["a",0],
    ["b",1],
    ["c",2],
    ["d",3],
    ["e",4],
    ["f",5],
    ["g",6],
    ["h",7],
    ["i",8],
    ["j",9],
    ["k",10],
    ["l",11],
    ["m",12],
    ["n",13],
    ["o",14],
    ["p",15],
    ["q",16],
    ["r",17],
    ["s",18],
    ["t",19],
    ["u",20],
    ["v",21],
    ["w",22],
    ["x",23],
    ["y",24],
    ["z",25]
];
function trans(){
    re=[];
    re1=[];
    for (var i = 0; i < word.length; i++) {
        for (var j = 0; j < lis.length; j++) {
          if (word[i] == lis[j][0]) {    
            re1.push((Number(lis[j][1])*atxt+btxt)%26);
          }
        }
    } 

    for (var i = 0; i < word.length; i++) {
        for (var j = 0; j < lis.length; j++) {
            if (re1[i] == lis[j][1]) {
              answer += lis[j][0];
                           
            }
          }
    }
    answer += "\n\n";
}
function gra(){
    answer += cnt;
    answer += ". key a: ";
    answer += atxt;
    answer += "key b: ";
    answer += btxt; 
    answer += " \nresult is : ";

    cnt += 1;
}

function resize(obj) {
    obj.style.height = "1px";
    obj.style.height = (12+obj.scrollHeight)+"px";
}