var about_sobor = document.getElementById('info');
console.log(about_sobor.id);

function Egor(x){
    console.log('Egor messages:', x.id);
    // var Moscow = "";
    switch(x.id){
        case "Moscow": about_sobor.textContent = 'Москва со дня своего основания и по сей день названия не меняла, однако во время реконструкции города, проводившейся в 1937-1938 годах, было предложено переименовать город в Сталинодар, дабы увековечить в новом названии фамилию Сталина за его заслуги в индустриализации страны и развитии коммунистической идеологии. Сам Сталин предложение не поддержал, посчитав его глупостью';break;
        case "spb":    about_sobor.textContent = 'Санкт-Петербург был основан в 1703 году императором Петром I. В 1914 году, после начала Первой мировой войны, на волне антигерманских настроений, город был переименован в Петроград. В ходе Октябрьской революции власть в городе перешла в руки большевиков, создана Российская Советская Республика со столицей в Петрограде. В 1918 году, из геополитических соображений, правительство переехало в Москву, и Петроград лишился статуса столицы. В 1924 году, после смерти В. И. Ленина, в память о нём город был переименован в Ленинград. Ленинградская область не сменила своё название и по сей день'; break;
        case "Lugansk": about_sobor.textContent = 'Луганск был основан в 1795 году и назван Луганском по названию протекавшей в городе реки Лугань. В 1935 году город был переименован в Ворошиловград в честь наркома СССР, заслуженного члена Политбюро ЦК ВКП(б) и близкого соратника И. В. Сталина Климента Ефремовича Ворошилова. В 1958 году городу вернули прежнее название, но в 1970 город снова стал называться Ворошиловградом'; break;
        case "Artemovsk": about_sobor.textContent = 'Артёмовск – крупный город, расположенный в ДНР на реке Бахмут. Был основан в 1571 году как пограничная «Бахмутовская сторожа», позже превратившаяся в укреплённую слободку. В 1703 году была построена крепость. В 1924 году город переименован в Артёмовск по псевдониму «Артём» советского партийного и государственного деятеля Фёдора Андреевича Сергеева'; break;
        case "HH": about_sobor.textContent = 'Нижний Новгород – древний русский город на Волге, основанный в начале XIII века. В городе родился знаменитый советский писатель, поэт и драматург Алексей Максимович Пешков, прославившийся под псевдонимом как Максим Горький. Осенью 1917 года в Нижнем Новгороде была установлена советская власть, а 7 октября 1932 года город стал называться Горький в честь своего уроженца, за его заслуги в развитии советской литературы '; break;
        case "Mariupol": about_sobor.textContent = 'Мариуполь – город на северном берегу Азовского моря. В городе родился А. А. Жданов, советский партийный и государственный деятель, близкий соратник И. В. Сталина. 22 октября 1948 года, после смерти А. А. Жданов Постановлением Совета Министров СССР городу было присвоено наименование Жданов'; break;
        case "Tver": about_sobor.textContent = 'Тверь – древний русский город, основанный в 1135 году. 28 октября (10 ноября) 1917 года в городе была установлена Советская власть. 20 ноября 1931 года город Тверь был переименован в Калинин, в честь советского партийного и государственного деятеля, уроженца Тверской губернии и близкого соратника И. В. Сталина М. И. Калинина'; break;
        case "Furmanov": about_sobor.textContent = 'Фурманов – город в Ивановской области. Будучи селом носил название Упина-Середа. В начале XX века, в результате роста рабочих посёлков в близлежащих к селу прядильно-ткацких фабриках, был образован город Середа. 13 марта 1941 года в честь уроженца Середы, советского писателя — Дмитрия Андреевича Фурманова, город переименован — назван Фурманов'; break;
        case "Stadt": about_sobor.textContent = 'Айзенхюттенштадт - город металлургов в Германии, который стал первым социалистическим городом в стране. Был построен 1950-м году. Поначалу город планировалось назвать в честь «великого сына немецкого народа» Карла Маркса, однако смерть «вождя народов» 5 марта 1953 года изменила намерения руководства СЕПГ. Новому городу дали имя Сталина - Шталинштадт. В ноябре 1961 года город был переименован в Айзенхюттенштадт, что на немецком означает «город металлургических заводов»'; break;
        // case "Engels": about_sobor.textContent = ''; break;
        // case "": about_sobor.textContent = ''; break;
        // case "": about_sobor.textContent = ''; break;
        // case "": about_sobor.textContent = ''; break;
        // case "": about_sobor.textContent = ''; break;
        // case "": about_sobor.textContent = ''; break;
        // case "": about_sobor.textContent = ''; break;
        // case "": about_sobor.textContent = ''; break;
        // case "": about_sobor.textContent = ''; break;
        // case "": about_sobor.textContent = ''; break;
        // case "": about_sobor.textContent = ''; break;
        // case "": about_sobor.textContent = ''; break;
        // case "": about_sobor.textContent = ''; break;
        // case "": about_sobor.textContent = ''; break;
        // case "": about_sobor.textContent = ''; break;
        default: about_sobor.textContent = '¯\_(ツ)_/¯'; break;
    }

}

function Check(mark, evt){
    console.clear();
    console.log('click');
    if (about_sobor.style.opacity == 0){
        GiveInfo(mark, evt);
    }
    else{
        HideInfo(mark, evt);
    }
}

function GiveInfo(mark, evt){
    console.clear();
    console.log('show');
    console.log(about_sobor);
    console.log(mark.id);
    let x = evt.clientX+'px';
    let y = evt.clientY+'px';
    console.log('x = ', x);
    console.log('y = ', y);
    Egor(mark);
    about_sobor.style.left = x;
    about_sobor.style.top = y;
    about_sobor.style.animationName = 'opa';
    about_sobor.style.animationDuration = '0.6s';
    about_sobor.style.opacity = 1;
}

function HideInfo(x){
    console.clear();
    console.log('hide');
    about_sobor.style.opacity = 0;
    about_sobor.style.animationName = 'zhopa';
    about_sobor.style.animationDuration = '0.6s';
    console.log('exit');

}

function Save(obj){
    if (obj.style.opacity != 0){
    obj.style.opacity = 1;
    }
}

function clck(coor){
    console.clear();
    console.log('left =', coor.clientX+'px');
    console.log('top =', (coor.clientY-10)+'px');
}