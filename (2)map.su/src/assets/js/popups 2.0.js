var about_sobor = document.getElementById('info');
var k = 0;

function Check(mrk, evt){
    console.log("k =", k);
    if (k == 0){
        k = 1;
        Make(mrk, evt);
        document.getElementById('info').style.animationName = 'opa';
        document.getElementById('info').style.animationDuration = '0.6s';
        var x = evt.clientX+'px';
        var y = Math.ceil(evt.clientY+scrollY)+'px';
        console.log(x, y);
        if(Math.ceil(evt.clientY+scrollY) > 800){ // Для слишком низких блоков 
            console.log('>800');
            var y = Math.ceil(evt.clientY+scrollY)-document.getElementById('info').offsetHeight+'px';
        }
        else if((Math.ceil(evt.clientY+scrollY+document.getElementById('info').offsetHeight)>1000)){ // Для слишком больших блоков
            console.log('>1000');
            var y = Math.ceil(evt.clientY+scrollY)-(document.getElementById('info').offsetHeight/6)+'px';
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
    img.style.paddingTop = "7px";
    img.style.paddingBottom = "7px";
}

function Crush(mrk, evt){
    document.getElementById('info').style.animationName = 'zhopa';
    document.getElementById('info').style.animationDuration = '0.6s'
    setTimeout(() => document.getElementById('info').remove(), 570);
    setTimeout(() => k=0, 600);
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
            image = 'assets/images/cities/vdnh.jpg'; 
            text = "<strong>Москва</strong> со дня своего основания и по сей день названия не меняла, однако во время реконструкции города, проводившейся в 1937-1938 годах, было предложено переименовать город в Сталинодар, дабы увековечить в новом названии фамилию Сталина за его заслуги в индустриализации страны и развитии коммунистической идеологии. Сам Сталин предложение не поддержал, посчитав его глупостью"; 
            size = "292px"; 
            disp = "inline"; // Картинка справа от текста
            break;
        }
        case "spb": {
            image = 'assets/images/cities/leningrad.jpg'; 
            text = '<strong>Санкт-Петербург</strong> был основан в 1703 году императором Петром I. В 1914 году, после начала Первой мировой войны, на волне антигерманских настроений, город был переименован в Петроград. В ходе Октябрьской революции власть в городе перешла в руки большевиков, создана Российская Советская Республика со столицей в Петрограде. В 1918 году, из геополитических соображений, правительство переехало в Москву, и Петроград лишился статуса столицы. В 1924 году, после смерти В. И. Ленина, в память о нём город был переименован в Ленинград. Ленинградская область не сменила своё название и по сей день'; 
            size = "297px"; 
            disp = 'inline'; // Картинка под текстом
            break;
        }
        case "Volga":{
            image = 'assets/images/cities/volgograd.jpg';
            text = "<strong>Волгоград</strong> возник около 1555 года и был назван Царицын, по названию протекавшей близ реки Царицы (ныне Пионерки). В 1925 году город был переименован в Сталинград, в честь Иосифа Сталина за его заслуги в обороне города в годы Гражданской войны. После начала в стране десталинизации, город с 1961 года стал называться Волгоград";
            size = "315px";
            disp = "inline";
            break;
        }
        case "Lugansk":{
            image = 'assets/images/cities/luganskH.jpg';
            text = "<strong>Луганск</strong> был основан в 1795 году и назван Луганском по названию протекавшей в городе реки Лугань. В 1935 году город был переименован в Ворошиловград в честь наркома СССР, заслуженного члена Политбюро ЦК ВКП(б) и близкого соратника И. В. Сталина Климента Ефремовича Ворошилова. В 1958 году городу вернули прежнее название, но в 1970 город снова стал называться Ворошиловградом";
            size = "270px";
            disp = "inline";
            break;
        }  
        case "Artemovsk":{
            image = 'assets/images/cities/Artem.jpg';
            text = "<strong>Артёмовск</strong> – крупный город, расположенный в ДНР на реке Бахмут. Был основан в 1571 году как пограничная «Бахмутовская сторожа», позже превратившаяся в укреплённую слободку. В 1703 году была построена крепость. В 1924 году город переименован в Артёмовск по псевдониму «Артём» советского партийного и государственного деятеля Фёдора Андреевича Сергеева";
            size = "340px";
            disp = "inline";
            break;
        }
        case "HH":{
            image = 'assets/images/cities/HH.jpg';
            text = "<strong>Нижний Новгород</strong> – древний русский город на Волге, основанный в начале XIII века. В городе родился знаменитый советский писатель, поэт и драматург Алексей Максимович Пешков, прославившийся под псевдонимом как Максим Горький. Осенью 1917 года в Нижнем Новгороде была установлена советская власть, а 7 октября 1932 года город стал называться Горький в честь своего уроженца, за его заслуги в развитии советской литературы";
            size = "287px";
            disp = "inline";
            break;
        }
        case "Mariupol":{
            image = 'assets/images/cities/Mariupol.jpg';
            text = "<strong>Мариуполь</strong> – город на северном берегу Азовского моря. В городе родился А. А. Жданов, советский партийный и государственный деятель, близкий соратник И. В. Сталина. 22 октября 1948 года, после смерти А. А. Жданов Постановлением Совета Министров СССР городу было присвоено наименование Жданов";
            size = "285px";
            disp = "inline";
            break;
        }
        case "Tver":{
            image = 'assets/images/cities/Tver.jpg';
            text = "<strong>Тверь</strong> – древний русский город, основанный в 1135 году. 28 октября (10 ноября) 1917 года в городе была установлена Советская власть. 20 ноября 1931 года город Тверь был переименован в Калинин, в честь советского партийного и государственного деятеля, уроженца Тверской губернии и близкого соратника И. В. Сталина М. И. Калинина";
            size = "300px";
            disp = "inline";
            break;
        }
        case "Furmanov":{
            image = 'assets/images/cities/Furmanov.jpg';
            text = "<strong>Фурманов</strong> – город в Ивановской области. Будучи селом носил название Упина-Середа. В начале XX века, в результате роста рабочих посёлков в близлежащих к селу прядильно-ткацких фабриках, был образован город Середа. 13 марта 1941 года в честь уроженца Середы, советского писателя — Дмитрия Андреевича Фурманова, город переименован — назван Фурманов";
            size = "287px";
            disp = "inline";
            break;
        }
        case "Stadt":{
            image = 'assets/images/cities/Stadt.jpg';
            text = "<strong>Айзенхюттенштадт</strong> - город металлургов в Германии, который стал первым социалистическим городом в стране. Был построен 1950-м году. Поначалу город планировалось назвать в честь «великого сына немецкого народа» Карла Маркса, однако смерть «вождя народов» 5 марта 1953 года изменила намерения руководства СЕПГ. Новому городу дали имя Сталина - Шталинштадт. В ноябре 1961 года город был переименован в Айзенхюттенштадт, что на немецком означает «город металлургических заводов»";
            size = "266px";
            disp = "inline";
            break;
        }
        case "Engels":{
            image = 'assets/images/cities/Engels.jpg';
            text = "<strong>Энгельс</strong> – город на Волге, входит в Саратовскую агломерацию. Основан в 1747 году на левом берегу реки Волги украинскими поселенцами. Первое поселение получило название Покровская слобода. В 1914 году Покровская слобода получила статус города с названием Покровск. В 1931 году город Покровск переименован в город Энгельс в честь немецкого коммуниста Фридриха Энгельса. В 1922—1941 годах город — столица АССР немцев Поволжья";
            size = "337px";
            disp = "inline";
            break;
        }
        case "Chapaevsk":{
            image = 'assets/images/cities/Chapaev.jpg';
            text = "<strong>Чапаевск</strong> – молодой город, расположенный на берегу реки Чапаевки, в 43 км к юго-западу от Самары. Возник как посёлок при заводе по изготовлению взрывчатых веществ, построенном вскоре после русско-японской войны артиллерийским генералом Иващенко, что и определило название — посёлок Иващенково. Во время гражданской войны переименован в Троцк в честь Л. Д. Троцкого. После высылки Троцкого из СССР город 7 февраля 1929 года переименовали в Чапаевск, по фамилии известного участника гражданской войны комдива В. И. Чапаева";
            size = "337px";
            disp = "inline";
            break;
        }
        // case "Ulianovsk":{
        //     image = '';
        //     text = "";
        //     size = "";
        //     disp = "";
        //     break;
        // }
        // case "Trock":{
        //     image = '';
        //     text = "";
        //     size = "";
        //     disp = "";
        //     break;
        // }
        // case "Novokuz":{
        //     image = '';
        //     text = "";
        //     size = "";
        //     disp = "";
        //     break;
        // }
        // case "Katovice":{
        //     image = '';
        //     text = "";
        //     size = "";
        //     disp = "";
        //     break;
        // }
        // case "Novomoskovsk":{
        //     image = '';
        //     text = "";
        //     size = "";
        //     disp = "";
        //     break;
        // }
        // case "Donetsk":{
        //     image = '';
        //     text = "";
        //     size = "";
        //     disp = "";
        //     break;
        // }
        // case "Varna":{
        //     image = '';
        //     text = "";
        //     size = "";
        //     disp = "";
        //     break;
        // }
        // case "Tskhinval":{
        //     image = '';
        //     text = "";
        //     size = "";
        //     disp = "";
        //     break;
        // }
        // case "Donau":{
        //     image = '';
        //     text = "";
        //     size = "";
        //     disp = "";
        //     break;
        // }
        // case "Dush":{
        //     image = '';
        //     text = "";
        //     size = "";
        //     disp = "";
        //     break;
        // }
        // case "Ekaterinburg":{
        //     image = '';
        //     text = "";
        //     size = "";
        //     disp = "";
        //     break;
        // }
        // case "Leva":{
        //     image = '';
        //     text = "";
        //     size = "";
        //     disp = "";
        //     break;
        // }
        // case "Vladik":{
        //     image = '';
        //     text = "";
        //     size = "";
        //     disp = "";
        //     break;
        // }
        // case "Brashov":{
        //     image = '';
        //     text = "";
        //     size = "";
        //     disp = "";
        //     break;
        // }
        // case "Perm":{
        //     image = '';
        //     text = "";
        //     size = "";
        //     disp = "";
        //     break;
        // }
        // case "Makhachkala":{
        //     image = '';
        //     text = "";
        //     size = "";
        //     disp = "";
        //     break;
        // }
        // case "Marx":{
        //     image = '';
        //     text = "";
        //     size = "";
        //     disp = "";
        //     break;
        // }
        // case "Gumri":{
        //     image = '';
        //     text = "";
        //     size = "";
        //     disp = "";
        //     break;
        // }
        // case "Khudzhand":{
        //     image = '';
        //     text = "";
        //     size = "";
        //     disp = "";
        //     break;
        // }
        // case "Kuchova":{
        //     image = '';
        //     text = "";
        //     size = "";
        //     disp = "";
        //     break;
        // }
        // case "Kropiva":{
        //     image = '';
        //     text = "";
        //     size = "";
        //     disp = "";
        //     break;
        // }
        // case "Vanadzor":{
        //     image = '';
        //     text = "";
        //     size = "";
        //     disp = "";
        //     break;
        // }
        // case "Kirov":{
        //     image = '';
        //     text = "";
        //     size = "";
        //     disp = "";
        //     break;
        // }
        // case "Soledar":{
        //     image = '';
        //     text = "";
        //     size = "";
        //     disp = "";
        //     break;
        // }
        // case "Kaliningrad":{
        //     image = '';
        //     text = "";
        //     size = "";
        //     disp = "";
        //     break;
        // }
        // case "Samara":{
        //     image = '';
        //     text = "";
        //     size = "";
        //     disp = "";
        //     break;
        // }

        // Ответ по умолчанию
        default: {
            image = 'assets/images/SoborVasiliyaBlazhenogo.svg'; 
            text = "Увы, информации пока нет"; 
            size = "100px"; 
            disp = "flex"; 
            break;}
    }
    return [id, text, image, size, disp];
}
