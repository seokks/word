answer = "Answer is... \n\n";
cnt = 1;
atxt=0;
btxt=0;
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
alis=[1,3,5,7,9,11,15,17,19,21,23,25];
function trans(){
  re=[];
  re1=[];
  for(var i=0;i<word.length;i++){
    for (var j = 0; j < lis.length; j++) {
      if (word[i] == lis[j][0]) {
        re.push(lis[j][1]);
      }
    }
  }
  alert(re);
  if(atxt!=0 && btxt != 0){
    alert("1");




    
    for(var u=0;u<=651;u+=26){
      for(var p=0;re.length;p++){
        re[p]+=u;
      }
      sol1();
    }
  }
  else if (atxt!=0 && btxt == 0) {
    for(var u=0;u<=651;u+=26){
      for(var p=0;re.length;p++){
        re[p]+=u;
      }
      sol2();
    }
  } else {
    alert("403291461126605635584000000 가지의 경우의 수를 출력합니다.\n며칠이 걸릴지는 모르겠네요...\n일십백천만억조경해자 단위...");
    for(var u=0;u<=651;u+=26){
      for(var p=0;re.length;p++){
        re[p]+=u;
      }
      sol3();
    }
  }

}
function sol1(){
  for (var k in re) {
    if ((k - btxt) % atxt == 0 && (k - btxt) % atxt < 26) {
      temp.push(parseInt((k - btxt) / atxt));
      flag = 1;
      continue;
    } else {
      flag = 0;
    }
  }
  if (flag == 1) {
    gra(atxt,btxt);
    for (var i = 0; i < word.length; i++) {
      for (var j = 0; j < lis.length; j++) {
        if (temp[i] == lis[j][1]) {
          answer += lis[j][0];
        }
      }
    }
  } else {
    temp = [];
  }
}

function sol2(){
  for (var b = 1; b <= 26; b++) {
    for (var k in re) {
      if ((k - b) % atxt == 0 && (k - b) % atxt < 26) {
        temp.push(parseInt((k - b) / atxt));
        flag = 1;
        continue;
      } else {
        flag = 0;
      }
    }
    if (flag == 1) {
      gra(atxt,b);
      for (var i = 0; i < word.length; i++) {
        for (var j = 0; j < lis.length; j++) {
          if (temp[i] == lis[j][1]) {
            answer += lis[j][0];
          }
        }
      }
    } else {
      temp = [];
    }
  }
}

temp=[];
function sol3() {
  
  for (var a in alis) {
    for (var b = 1; b <= 26; b++) {
      for (var k in re) {
        if ((k - b) % a == 0 && (k - b) % a < 26) {
          temp.push(parseInt((k - b) / a));
          flag = 1;
          continue;
        } else {
          flag = 0;
        }
      }
      if (flag == 1) {
        gra(a,b);
        for (var i = 0; i < word.length; i++) {
          for (var j = 0; j < lis.length; j++) {
            if (temp[i] == lis[j][1]) {
              answer += lis[j][0];
            }
          }
        }
      } else {
        temp = [];
      }
    }
    }
  }
function gra(atxt,btxt){
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