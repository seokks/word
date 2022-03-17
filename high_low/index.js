var lis = [
    ["경악을 금치 못했다.", "충격을 받았습니다."],
    ["건넨다.", "건넵니다."],
    ["호기심", "흥미로움"],
    ["글쓴이", "작성자"],
    ["깜짝", "화들짝"]
    ["이런 가운데", "이 와중에"],
    ["터트려", "폭발시켜"],
    ["쉴 새 없이", "끊임없이"],
    ["쉴새없이", "끊임없이"],
    ["따라갔", "쫓아갔"],
    ["단련", "연마"],
    ["사라진", "없어진"],
    ["인생", "라이프"],
    ["삶", "인생"],
    ["제작진", "프로듀서진"],
    ["설렘", "두근두근한 마음"],
    ["돌직구", "노빠꾸"],
    ["유발", "촉발"],
    ["당혹감", "당황하는 감정"],
    ["외면", "무시"],
    ["버팀목", "든든함"],
    ["그 과정", "이러한 시추에이션"],
    ["배회", "방황"],
    ["의구심", "수상함"],
    ["의심", "그렇지 않을지도 모른다고 생각"],
    ["며느리", "며느라기"],
    ["당했던", "당하였었던"],
    ["뿐만 아니라", "것에 더해서"],
    ["아이들", "어린애기들"],
    ["숨기는", "감추는"],
    ["주목", "시선집중"],
    ["장난", ""],
    ["감동적인", "울림을 주는"],
    ["이목을 집중", "시선을 주목"],
    ["계기", "트리거"],
    ["에피소드", "스토리"],
    ["폭소를", "재미를"],
    ["무엇보다", "더욱이"],
    ["등장", "두둥둥장"],
    ["출연", "등장"],
    ["장면은", "시퀀스는"],
    ["왜 그렇게", "어떻게 이런식으로"],
    ["이뤄졌", "실현됐"],
    ["장면이", "시퀀스가"],
    ["웃음을 안겼", "재밌음을 유발했"],
    ["직접", "스스로"],
    ["배경", "비하인드"],
    ["반응", "리액션"],
    ["실력을 발휘", "포텐을 폭발"],
    ["후문", "뒷얘기"],
    ["의견", "주장"],
    ["흥미", "관심"],
    ["재미", "흥미"],
    ["계획", "플랜"],
    ["추측", "예상"],
    ["자아낸다.", "불러일으킵니다."],
    ["흐느끼며", ""],
    ["펼쳐진다.", "일어났네요."],
    ["대결", "매칭"],
    ["애통한", "슬픈"],
    ["장면", "시퀀스"],
    ["토크", "담소"],
    ["시간", "타임"],
    ["이목이 집중된다.", "시선을 끄네요."],
    ["그 가운데", "이 와중에"],
    ["집단", "집합체"],
    ["그룹", "집단"],
    ["들통났다.", "발각되었네요."],
    ["자택", "본인 집"],
    ["의미심장한", "심상찮은"],
    ["심상치 않은", "의미심장한"],
    ["충격", "멘탈붕괴 감정"],
    ["슬픔", "우울함"],
    ["상황", "시추에이션"],
    ["매몰차게", "심-하게"],
    ["심하게", "매몰-차게"],
    ["이야기", "얘기"],
    ["공격", "어택"],
    ["안방극장", "보는이들"],
    ["어떻게", "어찌"],
    ["입담", "말재주"],
    ["대화", "얘기"],
    ["미소를", "스마일한 표정을"],
    ["점검", "검토"],
    ["전언", "이야기"],
    ["포착", "발견"],
    ["반격", "카운터어택"],
    ["손에 땀을 쥐는", "쫄깃 쫄깃한"],
    ["손아귀", "마수"],
    ["더욱", "점점더"],
    ["목숨", "생명"],
    ["완벽한", "퍼펙트한"],
    ["관련", "연관"],
    ["라이벌", "경쟁상대"],
    ["또한", "그리고"],
    ["더욱이", "또한"],
    ["그런가하면", "또한"],
    ["그런가 하면", "또한"],
    ["공개", "오픈"],
    ["일주일", "1주일"],
    ["이후", "후에"],
    ["식당", "음식점"],
    ["음식점", "식당"],
    ["비하인드", "뒷이야기"],
    ["유행어", "은어"],
    ["전해", "전"],
    ["평소습관처럼", "평소하던것처럼"],
    ["만들어지면", "형성되면"],
    ["불가능해도", "안된다해도"],
    ["상품들보다", "제품들에비해"],
    ["시작할지도", "시작해야할지도"],
    ["신입직장인", "신입사원"],
    ["사회초년생", "신입직원"],
    ["알아두어야", "파악해두어야"],
    ["일반적으로", "보편적으로"],
    ["저장하도록", "보관하도록"],
    ["잘나가던", "승승장구하던"],
    ["소리쳤다.", "샤우팅했습니다."],
    ["인물", "캐릭터"],
    ["비밀", "시크릿"],
    ["거짓말", "허위발언"],
    ["새로운 길", "새 도전"],
    ["회사", "기업"],
    ["추진력", "행동력"],
    ["보관하도록", "저장하도록"],
    ["전반적으로", "전체적으로"],
    ["정리하자면", "요약하자면"],
    ["주의하도록", "조심하도록"],
    ["준비하셔야", "대비하셔야"],
    ["고려하며", "생각하며"],
    ["나중에는", "훗날에는"],
    ["늘어나고", "많아지고"],
    ["다루도록", "이야기하도록"],
    ["단기간에", "짧은기간에"],
    ["단순하게", "간단하게"],
    ["달성하기", "이룩하기"],
    ["대한민국", "한국"],
    ["돋보였던", "돋보인"],
    ["되신다면", "OK한다면"],
    ["들어오는", "들어오게되는"],
    ["따라하고", "흉내내고"],
    ["마련하는", "구축하는"],
    ["마이너스", "마이나스"],
    ["막막하고", "막연하고"],
    ["막연하게", "아무렇게나"],
    ["말그대로", "글자대로"],
    ["명심해야", "잊지말아야"],
    ["미리부터", "사전부터"],
    ["반복하여", "계속해"],
    ["발생하게", "생겨나게"],
    ["방법들을", "수단들을"],
    ["본인에게", "자신에게"],
    ["불필요한", "필요없는"],
    ["살펴봐야", "관찰해봐야"],
    ["새로나온", "나온지얼마안된"],
    ["식이조절", "식이요법"],
    ["신입직원", "신입사원"],
    ["실시해도", "실행해도"],
    ["심한경우", "심각한경우"],
    ["써놓아야", "써놔야"],
    ["알아봐야", "알아보아야"],
    ["알짜배기", "액기스"],
    ["어리석은", "잘못된"],
    ["여가활동", "여가생활"],
    ["여가생활", "여가활동"],
    ["여러가지", "다양한"],
    ["다양한", "여러가지"],
    ["예전부터", "이전부터"],
    ["예전에야", "예전에는"],
    ["옛날처럼", "예전처럼"],
    ["오랜기간", "장기간"],
    ["치아가", "이빨이"],
    ["치아는", "이빨"],
    ["예고하고", "예측하고"],
    ["혼란", "패닉"],
    ["스스로 밝히며", "자백하며"],
    ["자백하며", "스스로 밝히며"],
    ["살뜰히", "극진히"],
    ["혼란한", "정신없는"],
    ["극진히", "살뜰히"],
    ["의문의", "베일에 쌓-인"],
    ["베일에 쌓인", "의문의"],
    ["과거", "옛날"],
    ["발신자", "보낸이"],
    ["수신자", "받는이"],
    ["옛날", "과거"],
    ["이메일", "전자 메일"],
    ["패닉", "혼란"],
    ["오랜만에", "간만에"],
    ["오랜시간", "긴시간"],
    ["왠만해선", "왼만해서A웬만해선A어지간해선"],
    ["요즘에는", "최근에는A근래에는A최근엔A요즘엔A근래엔"],
    ["근래엔", "요즘에는"],
    ["우수하게", "뛰어나게A월등하게A훌륭하게"],
    ["위해서는", "위해선"],
    ["의지력만", "노력만"],
    ["일어나게", "발생하게"],
    ["있을수도", "있을지도"],
    ["작성하자", "기재하자"],
    ["저렴하고", "싸고A가격이좋고A나쁘지않고A착하고A좋고A싸기도하고"],
    ["조장하게", "부추기게"],
    ["좋은방법", "괜찮은방법A좋았던방법"],
    ["좋지않고", "안좋고A좋지도않고A좋지않았고"],
    ["준비하여", "대비하여A예비하여A채비하여A계획하여"],
    ["준비할수", "대비할수A계획할수A예비할수"],
    ["지속적인", "계속적인"],
    ["지속하기", "지속적으로하기"],
    ["처음에는", "첫번째는A첫째로A우선"],
    ["철저하게", "완벽하게A완벽할수있게A철저히A완벽히"],
    ["체계적인", "계획적인"],
    ["자극", "촉진"],
    ["패러다임", "트랜드"],
    ["상담", "문의"],
    ["답변", "대답"],
    ["다양하게", "많은방법으로"],
    ["한다면", "하셨다면A했었다면A했다면A했었으면"],
    ["좋은점", "장점"],
    ["장점", "좋은점"],
    ["단점", "나쁜점"],
    ["나쁜점", "단점"],
    ["했다.", "하였네요."],
    ["봤다.", "보았네요."],
    ["운을 뗐다.", "말을 시작했습니다."],
    ["쳤다.", "쳤습니다."],
    ["댔다.", "댔습니다."],
    ["럽다.", "러운데요."],
    ["꿨다.", "꾸었습니다."],
    ["꼽힌다.", "꼽혔습니다."],
    ["쌌다.", "쌌습니다."],
    ["뒀다.", "두었습니다."],
    ["해요.", "해주세요."],
    ["샀다.", "샀습니다."],
    ["었다.", "었습니다."],
    ["먹다.", "먹습니다."],
    ["있다.", "있습니다."],
    ["좋다.", "좋습니다."],
    ["거뒀다.", "거뒀습니다."],
    ["이뤘다.", "이뤘습니다."],
    ["싶다.", "싶습니다."],
    ["많다.", "많습니다."],
    ["된다.", "되었습니다."],
    ["시킨다.", "시켰네요."],
    ["라고.", "라는거죠."],
    ["온다.", "왔습니다."],
    ["띄운다.", "띄웠습니다."],
    ["룬다.", "뤘습니다."],
    ["친다.", "친거죠."],
    ["썼다.", "썼습니다."],
    ["움튼다.", "움틉니다."],
    ["더한다.", "더합니다."],
    ["읽힌다.", "읽힙니다."],
    ["치른다.", "치뤘습니다."],
    ["눴다.", "눴습니다."],
    ["긴다.", "기는데요."],
    ["멈춘다.", "멈췄습니다."],
    ["뜨겁다.", "뜨겁습니다."],
    ["줬다.", "줬습니다."],
    ["꾸며진다.", "진행되었네요."],
    ["꾸며졌다.", "진행되었네요."],
    ["눈다.", "누었네요."],
    ["후문.", "후문입니다."],
    ["출격", "등장"],
    ["의미가 깊은", "사연이 있는"],
    ["흐른다.", "흐릅니다."],
    ["?손에 땀을 쥐게 만드는", "진땀나는"],
    ["?손에 땀을 쥐는", "진땀나는"],
    ["진땀나는", "손에 땀을 쥐게 만드는"],
    ["린다.", "린거죠."],
    ["않다.", "않습니다."],
    ["맞댄다.", "맞댔습니다."],
    ["켰다.", "켰습니다."],
    ["없다.", "없습니다."],
    ["하겠다.", "하겠습니다."],
    ["하다.", "합니다."],
    ["다가온다.", "다가옵니다."],
    ["놀란다.", "놀랐습니다."],
    ["필수다.", "필수입니다."],
    ["생긴다.", "생깁니다."],
    ["운다.", "웠네요."],
    ["않는다.", "않습니다."],
    ["보겠다.", "보겠습니다."],
    ["하신다.", "하십니다."],
    ["가능하다.", "가능합니다."],
    ["방송녹화", ""],
    ["하였다.", "하였습니다."],
    ["중요하다.", "중요합니다."],
    ["바란다.", "바랍니다."],
    ["나온다.", "나옵니다."],
    ["놓았다.", "놓았습니다."],
    ["됐다.", "됐습니다."],
    ["였다.", "였네요."],
    ["졌다.", "졌는데요."],
    ["렸다.", "렸습니다."],
    ["즐겼다.", "즐겼는데요."],
    ["았다.", "았습니다."],
    ["냈다.", "냈네요."],
    ["어렵다.", "어렵습니다."],
    ["혔다.", "혔습니다."],
    ["누리꾼", "네티즌"],
    ["세운다.", "세웠네요."],
    ["세웠다.", "세웠네요."],
    ["렸다.", "린건데요."],
    ["한다고.", "한건데요."],
    ["오른다.", "오른거죠."],
    ["선다.", "선거죠."],
    ["것.", "것이죠."],
    ["응원", "화이팅"],
    ["전할 예정이다.", "선보이네요."],
    ["돋운다.", "일으키네요."],
    ["놨다.", "놨습니다."],
    ["상태다.", "상황이라네요."],
    ["던 터.", "던 바 있는데요."],
    ["한다.", "하였습니다."],
    ["파헤친다.", "추적했네요."],
    ["파헤쳤다.", "추적했네요."],
    ["다고.", "던거죠."],
    ["랐다.", "랐습니다."],
    ["앴다.", "앴습니다."],
    ["린다.", "립니다."],
    ["는다.", "는건데요."],
    ["모은다.", "모았습니다."],
    ["환호성", "함성"],
    ["너무", "무지"],
    ["겼다.", "겼네요."],
    ["진다.", "졌네요."],
    ["방송되는", "송출하는"],
    ["공분을", "분노를"],
    ["분노를", "공분을"],
    ["분노한", "화가난"],
    ["화가난", "빡친"],
    ["메이크업", "화장"],
    ["화장", "메이크업"],
    ["토로", "고백"],
    ["고백", "토로"],
    ["다녔다.", "다녔습니다."],
    ["시청자", "보는이"],
    ["났다.", "났습니다."],
    ["화장", "메이크업"],
    ["메이크업", "화장"],
    ["핸드폰", "휴대폰"],
    ["갔다.", "갔습니다."],
    ["시켰다.", "시켰습니다."],
    ["취직", "취업"],
    ["난다.", "난거죠."],
    ["연다.", "연거죠."],
    ["더보기", ""],
    ["[1]", ""],
    ["[2]", ""],
    ["[3]", ""],
    ["[4]", ""],
    ["[5]", ""],
    ["[6]", ""],
    ["[7]", ""],
    ["[8]", ""],
    ["[9]", ""],
    ["[10]", ""],
    ["[11]", ""],
    ["[12]", ""],
    ["[13]", ""],
    ["[14]", ""],
    ["[15]", ""],
    ["[16]", ""],
    ["[17]", ""],
    ["[18]", ""],
    ["[19]", ""],
    ["[20]", ""],
    ["[21]", ""],
    ["[22]", ""],
    ["[23]", ""],
    ["[24]", ""],
    ["[25]", ""],
    ["[26]", ""],
    ["[27]", ""],
    ["[28]", ""],
    ["[29]", ""],
    ["[30]", ""],
    ["[31]", ""],
    ["[32]", ""],
    ["[33]", ""],
    ["[34]", ""],
    ["[35]", ""],
    ["[36]", ""],
    ["[37]", ""],
    ["[38]", ""],
    ["[39]", ""],
    ["[40]", ""],
    ["[41]", ""],
    ["[42]", ""],
    ["[43]", ""],
    ["[44]", ""],
    ["[45]", ""],
    ["[46]", ""],
    ["[47]", ""],
    ["[48]", ""],
    ["[49]", ""],
    ["[50]", ""],
    ["[51]", ""],
    ["[52]", ""],
    ["[53]", ""],
    ["[54]", ""],
    ["[55]", ""],
    ["[56]", ""],
    ["[57]", ""],
    ["[58]", ""],
    ["[59]", ""],
    ["[60]", ""],
    ["[61]", ""],
    ["[62]", ""],
    ["[63]", ""],
    ["[64]", ""],
    ["[65]", ""],
    ["[66]", ""],
    ["[67]", ""],
    ["[68]", ""],
    ["[69]", ""],
    ["[70]", ""],
    ["왔다.", "왔습니다."],
    ["방송될", "송출"],
    ["대머리", "민머리"],
    ["방송 예정인", "송출"],
    ["꿈꾸며", "바라며"],
    ["바라며", "꿈꾸며"],
    ["놓는다.", "놓은건데요."],
    ["했다는 후문이다.", "했습니다."],
    ["낸다.", "냅니다."],
    ["끈다.", "끌었네요."],
    ["준다.", "줬네요."],
    ["본다.", "봤네요."],
    ["높인다.", "높이네요."],
    ["인다.", "였습니다."],
    ["웠다.", "웠죠."],
    ["일으킨다.", "일으켰네요."],
    ["관심사다.", "관심사죠."],
    ["만다.", "만거죠."],
    ["(오늘)", ""],
    ["간다.", "갔네요."],
    ["펼친다.", "펼친거죠."],
    ["만든다.", "만듭니다."],
    ["이다.", "입니다."],
    ["일정", "스케쥴"],
    ["스케쥴", "일정"],
    ["렀다.", "렀습니다."],
    ["뛴다.", "뛰네요."],
    ["섰다.", "섰습니다."],
    ["아꼈다.", "아꼈습니다."],
    ["감돈다.", "감도네요."],
    ["거둔다.", "거뒀네요."],
    ["롭다.", "롭습니다."],
    ["마친다.", "마친거죠."],
    ["까?", "지 궁금해 지는데요."],
    ["까.", "지 궁금해 지는데요."],
    ["지폈다.", "지폈습니다."],
    ["밝힌다.", "오픈했습니다."],
    ["띈다.", "띄는데요."],
    ["모른다.", "모릅니다."],
    ["궁금증", "호기심"],
];



function value_check(){
    var check_cnt = document.getElementsByName("lan").length;
    for (var i=0; i<check_cnt;i++){
        if (document.getElementsByName("lan")[0].checked == true) {
            low_high();
            break        
        }else if(document.getElementsByName("lan")[1].checked == true){
            high_low();
            break;

        }
    }   
}
String.prototype.replaceAll = function(org, dest) {
    return this.split(org).join(dest);
}

//  입니다 이다 이다 입니다 한다 한다 합니다 합니다
function low_high(){
    for(var i=0; i<lis.length;i++){
        resultString = resultString.replaceAll(lis[i][1],lis[i][0]);
    }
}

function high_low(){
    for(var i=0; i<lis.length;i++){
        resultString = resultString.replaceAll(lis[i][0],lis[i][1]);
    }
}

function resize(obj) {
    obj.style.height = "1px";
    obj.style.height = 12 + obj.scrollHeight + "px";
}

