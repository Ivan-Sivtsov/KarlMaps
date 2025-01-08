var about_sobor = document.getElementById('info');
var k = 0;

function Check(mrk, evt){
    console.log("k =", k);
    if (k == 0){
        k = 1;
        Make(mrk, evt);
        document.getElementById('info').style.animationName = 'opa';
        document.getElementById('info').style.animationDuration = '0.9s';
        var x = evt.clientX+'px';
        var y = Math.ceil(evt.clientY+scrollY)+'px';
        console.log(x, y);
        if(Math.ceil(evt.clientY+scrollY) > 800){
            console.log('>800');
            var y = Math.ceil(evt.clientY+scrollY)-document.getElementById('info').offsetHeight+'px';
        }
        else if((Math.ceil(evt.clientY+scrollY+document.getElementById('info').offsetHeight)>1000)){
            console.log('>1000');
            var y = Math.ceil(evt.clientY+scrollY)-(document.getElementById('info').offsetHeight/10)+'px';
        }
        document.getElementById('info').style.left = x;
        document.getElementById('info').style.top = y; 
    }
    else{
        Crush(mrk, evt);
    }
}

function Make(mrk, evt){
    // Получение данных о конкретном городе (id, текст, картинка)
    hyka = HyKa(mrk);
    id = hyka[0];
    text = hyka[1];
    image = hyka[2];
    size = hyka[3];
    disp = hyka[4];
    console.log("3",id);
    let div = document.createElement('div');
    div.id = "info";
    div.innerHTML = text;
    div.onclick = (event) => {Crush(event);}
    var img = document.createElement('img');
    img.src = image; 
    img.id = 'Stalin';
    document.body.append(div);
    document.getElementById('info').append(img);
    document.getElementById('info').style.display = disp;
    img.style.height = size;
    img.style.paddingLeft = "5px";
}

function Crush(mrk, evt){
    document.getElementById('info').style.animationName = 'zhopa';
    document.getElementById('info').style.animationDuration = '0.9s'
    setTimeout(() => document.getElementById('info').remove(), 870);
    setTimeout(() => k=0, 900);
}


function clck(coor){
    console.clear();
    console.log('left =', (coor.clientX-4)+'px');
    console.log('top =', Math.ceil(coor.clientY-15+scrollY)+'px');
}

// Получение данных о конкретном городе (id, текст, картинка)
function HyKa(mrk){
    var id = mrk.id;
    switch(id){
        case "Moscow": {
            image = 'assets/images/cities/tretyakovka.jpg'; 
            text = "Москва со дня своего основания и по сей день названия не меняла, однако во время реконструкции города, проводившейся в 1937-1938 годах, было предложено переименовать город в Сталинодар, дабы увековечить в новом названии фамилию Сталина за его заслуги в индустриализации страны и развитии коммунистической идеологии. Сам Сталин предложение не поддержал, посчитав его глупостью"; 
            size = "280px"; 
            disp = "flex"; 
            break;}
        case "spb": {
            image = 'assets/images/cities/leningrad.jpg'; 
            text = 'Санкт-Петербург был основан в 1703 году императором Петром I. В 1914 году, после начала Первой мировой войны, на волне антигерманских настроений, город был переименован в Петроград. В ходе Октябрьской революции власть в городе перешла в руки большевиков, создана Российская Советская Республика со столицей в Петрограде. В 1918 году, из геополитических соображений, правительство переехало в Москву, и Петроград лишился статуса столицы. В 1924 году, после смерти В. И. Ленина, в память о нём город был переименован в Ленинград. Ленинградская область не сменила своё название и по сей день'; 
            size = "297px"; 
            disp = 'inline'; 
            break;}
        case "Lugansk":{
            image = '';
            text = "";
            size = "";
            disp = "";
            break;
        }  
        case "Artemovsk":
        default: {
            image = 'assets/images/SoborVasiliyaBlazhenogo.svg'; 
            text = "Увы, информации пока нет"; 
            size = "100px"; 
            disp = "flex"; 
            break;}
    }
    return [id, text, image, size, disp];
}