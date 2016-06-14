/**
 * 
 * @author jskonst
 */
define("temp", ["forms", "ui", "invoke"], function (Forms, Ui, Invoke, ModuleName) {
    function module_constructor() {
        var self = this

                , form = Forms.loadForm(ModuleName);
        var user = arguments[0];


//        form.maximize();

        self.show = function () {
            form.show();
        };

        form.btnClose.onActionPerformed = function (event) {
            form.close();
        };

        Invoke.later(function () {
            form.undecorated = true;
            form.maximize();

            var orange = "orange";
            var blue = "blue";
            var yellow = "yellow";
//                user.skillsname = form.modelGridSkills.data[0].skill.skillname;
//                    user.skillslevel = form.modelGridSkills.data[0].level;
            for (var i = 0; i < user.skills.length; i++) {
               var colors = [orange,blue,yellow];
               colors[i];
               
//                console.log(user.skills[i].skill.skillname);
//                console.log(user.skills[i].level);
//                console.log(skillsname,skillslevel);

                function addSkills(skillsName, skillsLevel) {
                var parentDiv = document.getElementById('skills');
                var divSkill = document.createElement('div');
                divSkill.className = 'skill';
                divSkill.id = 'skill' + i;
                parentDiv.appendChild(divSkill);


                var divSkillName = document.createElement('div');
                divSkillName.className = 'skill-name';
                divSkillName.id = 'skillNameID' + i;
                divSkill.appendChild(divSkillName);

//                   
                divSkillName.innerHTML = skillsName;
//                  
                var divSkillLine = document.createElement('div');
                divSkillLine.className = 'skill-line';
                divSkillLine.id = 'skillLineID' + i;
                divSkill.appendChild(divSkillLine);

                var divMeter = document.createElement('div');
                divMeter.className = 'meter ' + colors[i];
                divMeter.id = 'meterID' + i;
                divSkillLine.appendChild(divMeter);

                var spanMeter = document.createElement('span');
                spanMeter.style = 'width: ' + skillsLevel + '%';
                divMeter.appendChild(spanMeter);

            }
            ;
            
                addSkills(user.skills[i].skill.skillname, user.skills[i].level);

               
        
            }

            for (var i = 0; i < user.career.length; i++) {
                var career = user.career[i]();
                console.log(career);

//                 





                addCareer(career.jobname, career.postname, career.entrydate, career.reason, career.dismisdate);

                function addCareer(carJobname, carPostname, carEntryDate, carReason, carDismisDate) {
                    var parentDiv = document.getElementById('cd-timeline');
                    var div = document.createElement('div');
                    div.className = 'cd-timeline-block';
                    div.id = 'timelineBlockID' + i;
                    parentDiv.appendChild(div);

                    var divImg = document.createElement('div');
                    divImg.className = 'cd-timeline-img cd-picture';
                    div.appendChild(divImg);

                    var divContent = document.createElement('div');
                    divContent.className = 'cd-timeline-content';
                    divContent.id = 'timelineContentID' + i;
                    div.appendChild(divContent);


                    divContent.innerHTML = "<h2>" + carJobname + "</h2><br>" + "<span class='cd-date'>" + carEntryDate + "-" + carDismisDate + "</span>" +
                            "<p><span id='postname'>" + carPostname + "</span><br>Причина увольнения: <span>" + carReason + "</span></p>";
                    divImg.innerHTML = "<img src='InfoGraphicsEmpForm/vertical-timeline/img/cd-icon-main.png' alt='Picture'>";

                    var lastPostNameId = document.getElementById("lastpostname");
                    lastPostNameId.innerHTML = carPostname;

                }
                ;

            }

//                var lastPostName = career.postname[career.length - 1];

            for (var i = 0; i < user.education.length; i++) {
                var edu = user.education[i]();
//                console.log(edu);


                addEdu(edu.name, edu.course, edu.direction, edu.degree, edu.entDate, edu.endDate);
                //, eduDegree, eduCourse, eduDir, eduEntDate, eduEndDate


                function createEduLineName(color) {
                    var parentBlockDiv = document.getElementById('eduBlockID' + i);
                    var divBlock = document.createElement('div');
                    divBlock.className = 'edu-line-name ' + color;
                    divBlock.id = 'eduLineNameID' + i;
                    parentBlockDiv.appendChild(divBlock);

                    var parentLineDiv = document.getElementById('eduLineNameID' + i);
                    var divLine = document.createElement('div');
                    divLine.className = 'edu-line-selfname';
                    divLine.id = 'eduSelfNameID' + i;
                    parentLineDiv.appendChild(divLine);
                }

                function createEduLineCourse(color) {
                    var parentBlockDiv = document.getElementById('eduBlockID' + i);
                    var divBlock = document.createElement('div');
                    divBlock.className = 'edu-line-name ' + color;
                    divBlock.id = 'eduLineCourseID' + i;
                    parentBlockDiv.appendChild(divBlock);

                    var parentLineDiv = document.getElementById('eduLineCourseID' + i);
                    var divLine = document.createElement('div');
                    divLine.className = 'edu-line-selfname';
                    divLine.id = 'eduSelfCourseID' + i;
                    parentLineDiv.appendChild(divLine);
                }

                function createEduLineDir(color) {
                    var parentBlockDiv = document.getElementById('eduBlockID' + i);
                    var divBlock = document.createElement('div');
                    divBlock.className = 'edu-line-name ' + color;
                    divBlock.id = 'eduLineDirID' + i;
                    parentBlockDiv.appendChild(divBlock);

                    var parentLineDiv = document.getElementById('eduLineDirID' + i);
                    var divLine = document.createElement('div');
                    divLine.className = 'edu-line-selfname';
                    divLine.id = 'eduSelfDirID' + i;
                    parentLineDiv.appendChild(divLine);
                }

                function addEduLogo(eduName) {
                    var parentBlockDiv = document.getElementById('eduBlockID' + i);
                    var logoId = document.createElement("div");
                    logoId.className = 'edu-logo';
                    logoId.id = 'edu-logoID' + i;
                    var imgSrc;
                    switch (eduName) {
                        case 'МГУ':
                            imgSrc = "<img src='InfoGraphicsEmpForm/img/mgu_logo.jpg'>";
                            break;
                        case 'ИГХТУ':
                            imgSrc = "<img src='InfoGraphicsEmpForm/img/him.jpg'>";
                            break;
                            
                        case 'ВШЭ':
                            imgSrc = "<img src='InfoGraphicsEmpForm/img/vshe.jpg'>";
                            break;
                        default:
                            console.log("Лого не найдено" + imgSrc);
                    }
                    logoId.innerHTML = imgSrc;
                    parentBlockDiv.appendChild(logoId);


                }

                function addYearsDegree(eduDegree, eduEntDate, eduEndDate) {
                    var parentBlockDiv = document.getElementById('eduBlockID' + i);
                    var eduYearsId = document.createElement("div");
                    eduYearsId.className = 'edu-years';
                    eduYearsId.id = 'eduYearsID' + i;
                    parentBlockDiv.appendChild(eduYearsId);

                    var eduLineYearsId = document.createElement("div");
                    eduLineYearsId.className = 'edu-line-years orange';
                    eduLineYearsId.id = 'eduLineYearsID' + i;

                    var eduSelfYearsId = document.createElement("div");
                    eduSelfYearsId.className = 'edu-selfyears';
                    eduSelfYearsId.id = 'eduSelfYearsID' + i;

                    var eduSelfDegreeId = document.createElement("div");
                    eduSelfDegreeId.className = 'edu-selfdegree';
                    eduSelfYearsId.id = 'eduSelfDegreeID' + i;

                    parentBlockDiv.appendChild(eduYearsId);
                    eduYearsId.appendChild(eduLineYearsId);
                    eduLineYearsId.appendChild(eduSelfYearsId);
                    eduYearsId.appendChild(eduSelfDegreeId);

                    eduSelfYearsId.innerHTML = eduEntDate + "-" + eduEndDate;
                    eduSelfDegreeId.innerHTML = eduDegree;

                }

                function addEdu(eduName, eduCourse, eduDir, eduDegree, eduEntDate, eduEndDate) {
                    var parentDiv = document.getElementById('edu');
                    var div = document.createElement('div');
                    div.className = 'edu-block';
                    div.id = 'eduBlockID' + i;
                    parentDiv.appendChild(div);
                    addEduLogo(eduName);
                    createEduLineName(orange);
                    createEduLineCourse(yellow);
                    createEduLineDir(blue);

                    var textUniversity = "ВУЗ: ";
                    var textCourse = "Специальность: ";
                    var textDirection = "Профиль: ";

                    var eduNameID = document.getElementById('eduSelfNameID' + i);
                    var eduCourseID = document.getElementById('eduSelfCourseID' + i);
                    var eduDirID = document.getElementById('eduSelfDirID' + i);

                    eduNameID.innerHTML = textUniversity + eduName;
                    eduCourseID.innerHTML = textCourse + eduCourse;
                    eduDirID.innerHTML = textDirection + eduDir;
//                    console.log(edu.name);
                    addYearsDegree(eduDegree, eduEntDate, eduEndDate);

                }
                ;




            }

            

            

            var name = document.getElementById("name");
            name.innerHTML = user.name;
//            console.log(user.name);

            var surname = document.getElementById("surname");
            surname.innerHTML = user.surname;

            var middlename = document.getElementById("middlename");
            middlename.innerHTML = user.middlename;

            var age = document.getElementById("age");
            age.innerHTML = user.age;

            var phone = document.getElementById("phonenumber");
            phone.innerHTML = user.phone;

            var email = document.getElementById("email");
            email.innerHTML = user.email;

            var socpage = document.getElementById("socpage");
            socpage.innerHTML = user.socpage;

            var icon = document.getElementById("photo");
            icon.innerHTML = "<img src='" + user.icon + "'>";

            //Блок подкидывания соцтипа
            var socType = user.soctype;
            var socTypeInner = document.getElementById("soc-type");
            socTypeInner.innerHTML = socType;

            var textEgo = document.getElementById("ego-text");
            var textKid = document.getElementById("kid-text");
//СИЛЬНЫЕ ФУНКЦИИ
//ЧЛ
            var egoChL = "Смысл жизни — оптимизация всего. Главное — чтобы было эффективнее, быстрее, дешевле.<br> Склонен к высокому КПД.<br>";
//БЭ
            var egoBE = "Умение понять желания и интересы людей, отношения между ними. Глубокое понимание нравственных <br>и этических сторон жизни.<br>";
//ЧИ
            var egoCHI = "Понимание сути явлений, потенциала способностей людей. Генерирование альтернативных решений.<br>";
//ЧС
            var egoCHS = "Умение оценить внешний вид объектов, физическую силу, волевые качества людей. <br>Настойчивость, целеустремленность.<br>";
//БС
            var egoBS = "Понимание гармонии форм и положений, стремление к удобству, комфорту и уюту, изысканным удовольствиям.<br>";
//ЧЭ
            var egoChE = "Понимание эмоционального состояния человека, управление настроением людей, выражение чувств и эмоций.<br>";
//БЛ
            var egoBL = "Способности к анализу и систематизация информации, понимание и оценка причинно-следственных связей,<br> формальных правил.<br>";
//БИ
            var egoBI = "Понимание взаимосвязи времен, видение тенденций развития событий, способности к прогнозированию, <br>оценка затрат времени.<br>";

//ДЕТСКИЙ БЛОК (слабые функции)
            var kidChL = "Благодарность за конкретную и исчерпывающую помощь в вопросах эффективного выполнения какой-либо работы.<br>";
//БЭ
            var kidBE = "Интерес к информации о людях и об отношениях между ними. Подсознательный настрой на честные <br>и порядочные отношения со всеми людьми.<br>";
//ЧИ
            var kidCHI = "Любит все интересное и необычное, положительно реагирует на интересные предложения.<br>";
//ЧС
            var kidCHS = "Слабый волевой импульс, недостаточная требовательность и целеустремленность. Подспудное желание<br> следовать чужой сильной воле.<br>";
//БС
            var kidBS = "Плохо чувствует свое тело и его потребности. Благодарность за создание комфортных условий уюта, заботы.<br>";
//ЧЭ
            var kidChE = "Нуждается в активной эмоциональной поддержке, легко заряжается атмосферой веселья, рядом с эмоциональными <br>людьми и сам раскрепощается.<br>";
//БЛ
            var kidBL = "Хорошо воспринимает информацию, если она подается в систематизированном виде. Склонен доверять <br>подробным, аргументированным объяснениям.<br>";
//БИ
            var kidBI = "Слабое чувство времени. Подсознательная уверенность в том, что все окружающие должны предупреждать его<br> о возможных неприятностях.<br>";
//Switch-case для отображения рекомендательного текста в зависимости от соционического типа человека
            switch (socType) {
                case 'ЛСЭ "Штирлиц"':
                    textEgo.innerHTML = egoChL + " " + egoBS;
                    textKid.innerHTML = kidBE + " " + kidCHI;
                    break;

                case 'ИЭЭ "Гексли"':
                    textEgo.innerHTML = egoCHI + " " + egoBE;
                    textKid.innerHTML = kidBS + " " + kidChL;
                    break;

                case 'СЛИ "Габен"':
                    textEgo.innerHTML = egoCHI + " " + egoBE;
                    textKid.innerHTML = kidBS + " " + kidChL;
                    break;

                case 'ЭИИ "Достоевский"':
                    textEgo.innerHTML = egoBE + " " + egoCHI;
                    textKid.innerHTML = kidChL + " " + kidBS;
                    break;

                case 'ЭСИ "Драйзер"':
                    textEgo.innerHTML = egoBE + " " + egoCHS;
                    textKid.innerHTML = kidChL + " " + kidBI;
                    break;

                case 'ЛИЭ "Джек Лондон"':
                    textEgo.innerHTML = egoChL + " " + egoBI;
                    textKid.innerHTML = kidBE + " " + kidCHS;
                    break;

                case 'СЭЭ "Наполеон"':
                    textEgo.innerHTML = egoCHS + " " + egoBE;
                    textKid.innerHTML = kidBI + " " + kidChL;
                    break;

                case 'ИЛИ "Бальзак"':
                    textEgo.innerHTML = egoBI + " " + egoChL;
                    textKid.innerHTML = kidCHS + " " + kidBE;
                    break;

                case 'ИЭИ "Есенин"':
                    textEgo.innerHTML = egoBI + " " + egoChE;
                    textKid.innerHTML = kidCHS + " " + kidBL;
                    break;

                case 'СЛЭ "Жуков"':
                    textEgo.innerHTML = egoCHS + " " + egoBL;
                    textKid.innerHTML = kidBI + " " + kidChE;
                    break;

                case 'ЭИЭ "Гамлет"':
                    textEgo.innerHTML = egoChE + " " + egoBI;
                    textKid.innerHTML = kidBL + " " + kidCHS;
                    break;

                case 'ЛСИ "Максим Горький"':
                    textEgo.innerHTML = egoBL + " " + egoCHS;
                    textKid.innerHTML = kidChE + " " + kidBI;
                    break;

                case 'ЛИИ "Робеспьер"':
                    textEgo.innerHTML = egoBL + " " + egoCHI;
                    textKid.innerHTML = kidChE + " " + kidBS;
                    break;

                case 'ЭСЭ "Гюго"':
                    textEgo.innerHTML = egoChE + " " + egoBS;
                    textKid.innerHTML = kidBL + " " + kidCHI;
                    break;

                case 'ИЛЭ "Дон Кихот"':
                    textEgo.innerHTML = egoCHI + " " + egoBL;
                    textKid.innerHTML = kidBS + " " + kidChE;
                    break;

                case 'СЭИ "Дюма"':
                    textEgo.innerHTML = egoBS + " " + egoChE;
                    textKid.innerHTML = kidCHI + " " + kidBL;
                    break;


                default:
                    textEgo.innerHTML = "ТИМ не определен";
                    textKid.innerHTML = "ТИМ не определен";
            }

            //Блок подкидывания ПЙ-типа
            var psType = user.psytype;
            var pTypeInner = document.getElementById("p-type");
            pTypeInner.innerHTML = psType;

            var res = psType.split("");

//1 функция
            var oneContent = document.getElementById("one-content");
            var oneCircle = document.getElementById("one-circle");
//2 функция
            var twoContent = document.getElementById("two-content");
            var twoCircle = document.getElementById("two-circle");
//3 функция
            var threeContent = document.getElementById("three-content");
            var threeCircle = document.getElementById("three-circle");
//4 функция
            var fourContent = document.getElementById("four-content");
            var fourCircle = document.getElementById("four-circle");




            var F = "Физика - мир всего<br> материального.<br> Физика отвечает за <br>отношение к <br>собственному телу и <br>его потребностям, за <br>желание обладать<br> материальными<br> благами, за <br>отношение к <br>физическому труду и <br>работе вообще.<br>";
            var V = "Воля - это ощущения <br>цели, смысла <br>существования <br>человека, восприятие<br> жизненных задач, а<br> также собственных <br>желаний. Воля - это <br>стержень личности,<br> уверенность в своем <br>праве на что-либо.<br>";
            var E = "Эмоция - мир<br> внутренних<br> переживаний<br> человека: чувств,<br> эмоций. Кроме этого, <br>Эмоция отвечает за <br>отношение к искусству <br>и красоте <br>окружающего мира <br>вообще.<br>";
            var L = "Логика — мир идей.<br> Логика определяет <br>степень субъективной<br> ценности <br>умозаключений,<br> красоты и <br>завершенности идей и <br>концепций, вне<br> зависимости от того,<br> имеют ли они <br>материальное <br>воплощение или нет.<br>";
            var recForOne = "Функция избыточна.<br> Человек не считается <br>с чужим мнением, <br>склонен к <br>доминированию по <br>данному аспекту.";
            var recForTwo = "Функция сильная, <br>но гибкая и <br>подстраивающаяся. <br>Настроена на <br>диалог и обсуждение<br> вопросов по <br>данному аспекту.";
            var recForThree = "Функция слабая, <br>но доминирующая. <br>Человеку хочется<br> быть лучше по<br> данному аспекту,<br> но критика <br>болезненна.";
            var recForFour = "Функция слабая и<br> инертная. Человек<br> готов принять любое<br> чужое мнение по <br>данному аспекту.";
//Switch-case для отображения текста в ПЕРВОМ из ЧЕТЫРЕХ блоков в зависимости от ПЙ-типа
            switch (res[0]) {
                case "Ф":
                    oneContent.innerHTML = F + " " + recForOne;
                    oneCircle.innerHTML = "1Ф";
                    break;

                case "Э":
                    oneContent.innerHTML = E + " " + recForOne;
                    oneCircle.innerHTML = "1Э";
                    break;

                case "В":
                    oneContent.innerHTML = V + " " + recForOne;
                    oneCircle.innerHTML = "1В";
                    break;

                case "Л":
                    oneContent.innerHTML = L + " " + recForOne;
                    oneCircle.innerHTML = "1Л";
                    break;

                default:
                    oneContent.innerHTML = "Первая функция не определена";
            }
            ;


//Switch-case для отображения текста во ВТОРОМ из ЧЕТЫРЕХ блоков в зависимости от ПЙ-типа
            switch (res[1]) {
                case "Ф":
                    twoContent.innerHTML = F + " " + recForTwo;
                    twoCircle.innerHTML = "2Ф";
                    break;

                case "Э":
                    twoContent.innerHTML = E + " " + recForTwo;
                    twoCircle.innerHTML = "2Э";
                    break;

                case "В":
                    twoContent.innerHTML = V + " " + recForTwo;
                    twoCircle.innerHTML = "2В";
                    break;

                case "Л":
                    twoContent.innerHTML = L + " " + recForTwo;
                    twoCircle.innerHTML = "2Л";
                    break;

                default:
                    twoContent.innerHTML = "Вторая функция не определена";
            }
            ;

//Switch-case для отображения текста в ТРЕТЬЕМ из ЧЕТЫРЕХ блоков в зависимости от ПЙ-типа
            switch (res[2]) {
                case "Ф":
                    threeContent.innerHTML = F + " " + recForThree;
                    threeCircle.innerHTML = "3Ф";
                    break;

                case "Э":
                    threeContent.innerHTML = E + " " + recForThree;
                    threeCircle.innerHTML = "3Э";
                    break;

                case "В":
                    threeContent.innerHTML = V + " " + recForThree;
                    threeCircle.innerHTML = "3В";
                    break;

                case "Л":
                    threeContent.innerHTML = L + " " + recForThree;
                    threeCircle.innerHTML = "3Л";
                    break;

                default:
                    threeContent.innerHTML = "Третья функция не определена";
            }
            ;

//Switch-case для отображения текста во ЧЕТВЕРТОМ из ЧЕТЫРЕХ блоков в зависимости от ПЙ-типа
            switch (res[3]) {
                case "Ф":
                    fourContent.innerHTML = F + " " + recForFour;
                    fourCircle.innerHTML = "4Ф";
                    break;

                case "Э":
                    fourContent.innerHTML = E + " " + recForFour;
                    fourCircle.innerHTML = "4Э";
                    break;

                case "В":
                    fourContent.innerHTML = V + " " + recForFour;
                    fourCircle.innerHTML = "4В";
                    break;

                case "Л":
                    fourContent.innerHTML = L + " " + recForFour;
                    fourCircle.innerHTML = "4Л";
                    break;

                default:
                    fourContent.innerHTML = "Четвертая функция не определена";
            }
            ;

        });



        form.pnlHtml.element.innerHTML = '<section id="main" class="main-container">\
		<div class="emp-main-block" id="sn-main">\
			<div class="photo" id="photo">\
 				 	</div>\
			<div class="main-info">\
				<div class="main-info-line orange">\
					<div class="main-info-selfinfo"><span id="surname">Фамилия</span></div>\
					<div class="main-info-selfcont"><span id="email">Почта</span><img src="InfoGraphicsEmpForm/icons/envelope.png"></div>\
				</div>\
				<div class="main-info-line yellow">\
					<div class="main-info-selfinfo"><span id="name">Имяимяимя</span></div>\
					<div class="main-info-selfcont"><span id="socpage">Страница соц. сети</span><img src="InfoGraphicsEmpForm/icons/facebook-logo.png"></div>\
				</div>\
				<div class="main-info-line blue">\
					<div class="main-info-selfinfo"><span id="middlename">Отчество</span></div>\
					<div class="main-info-selfcont"><span id="phonenumber">Номер мобильного</span><img src="InfoGraphicsEmpForm/icons/telephone-handle.png"></div>\
				</div>\
			</div>\
			<div class="other-block">\
				<div class="current-post">\
					<div class="current-post-annotation">Должность<br><img src="InfoGraphicsEmpForm/icons/user-shape.png"></div>\
					<div class="current-post-line">\
						<div class="current-post-selfname gray"><span id="lastpostname">Ведущий ИТ-специалист</span></div>\
					</div>\
				</div>\
				<div class="age">\
					<div class="age-annotation">лет</div>\
					<div class="age-line">\
						<div class="age-self"><span id="age">28</span></div>\
					</div>\
				</div>\
			</div>\
		</div>\
</section>\
    \
<div class="section-name blue" align="center" id="sn-edu"><div class="section-selfname">ОБРАЗОВАНИЕ</div></div>\
		<section id="edu" class="edu-container">\
			</section>\
<div class="section-name yellow" align="center" id="sn-skills"><div class="section-selfname">НАВЫКИ</div></div>\
<section class="skills-container">\
	<div class="skills-block"  id="skills">\
		</div>\
</section>\
<div class="section-name blue" align="center" id="sn-interests"><div class="section-selfname">ИНТЕРЕСЫ</div></div>\
<section id="interests" class="interests-container">\
	<div class="interests-block" id="interests-blockID">\
		<div class="interest">\
			<div class="int-img orange" id="int-IT"><img src="InfoGraphicsEmpForm/icons/int-IT.png"></div>\
			<div class="int-text">ИТ</div>\
		</div>\
		<div class="interest">\
			<div class="int-img yellow" id="int-Lan"><img src="InfoGraphicsEmpForm/icons/int-Lan.png"></div>\
			<div class="int-text">Иностранные языки</div>\
		</div>\
		<div class="interest">\
			<div class="int-img blue" id="int-Sports"><img src="InfoGraphicsEmpForm/icons/int-Sports.png"></div>\
			<div class="int-text">Спорт: баскетбол</div>\
		</div>\
		<div class="interest">\
			<div class="int-img orange" id="int-Photo"><img src="InfoGraphicsEmpForm/icons/int-Photo.png"></div>\
			<div class="int-text">Фотография</div>\
		</div>\
	</div>\
</section>\
<div class="section-name orange" align="center" id="sn-rec"><div class="section-selfname">РЕКОМЕНДАЦИИ</div></div>\
<section id="recomendations" class="rec-container">\
	<div class="rec-block">\
		<div class="recom-block">\
			<div class="headtext">\
					<div class="psy-line-name orange">\
					<div class="psy-line-selfname"><span data-tooltip="Соционический тип - это тип информационного метаболизма, который определяется функционированием психических функций человека, обрабатывающих информацию. Соционика рассматривает 16 типов информационного метаболизма, или социотипов.">\
                                        <img src="InfoGraphicsEmpForm/icons/question.png"> \
                                        </span>Соционический тип: <span id="soc-type">ЛСЭ "Штирлиц"</span>\
                                        </div></div>\
				</div>\
			\
			<div class="soc-ego-block">\
				\
				<div class="soc-ego-img"><img src="InfoGraphicsEmpForm/img/ego-block.png"></div>\
				<div class="soc-ego-text" id="ego-text"></div>\
			</div>\
			<div class="soc-kid-block">\
				<div class="soc-ego-text" id="kid-text"></div>\
				<div class="soc-ego-img"><img src="InfoGraphicsEmpForm/img/kid-block.png"></div>\
			</div>\
			\
		</div>\
		<div class="psyhosophy">\
				<div class="headtext">\
						<div class="psy-line-name orange">\
						<div class="psy-line-selfname"><span data-tooltip="ПЙ-тип - это тип психософии, основанный на сфере приоритетов человека, его собственных представлениях о своем внутреннем мире и своих возможностях.">\
                                                <img src="InfoGraphicsEmpForm/icons/question.png"> \
                                                </span>ПЙ-тип: <span id="p-type">ФВЭЛ "Чехов"</span></div></div>\
				</div>\
			<div class="ps-block" >\
				\
			<div class="func">\
				<div class="ps-circle bor-orange" id="one-circle">1Ф</div>\
				<div class="ps-square bor-orange">\
					<div class="ps-header orange">"МОЛОТ", <br>избыток</div>\
					<div class="ps-text"><span id ="one-content">Описание избыточно сильных аспектов с позиции 1Ф</span></div>\
				</div>\
			</div>\
			<div class="func">\
				<div class="ps-circle bor-yellow" id="two-circle">2В</div>\
				<div class="ps-square bor-yellow">\
					<div class="ps-header yellow">"РЕКА", <br>норма</div>\
					<div class="ps-text"><span id ="two-content">Описание избыточно сильных аспектов с позиции 1Ф</span></div>\
				</div>\
			</div>\
			<div class="func">\
				<div class="ps-circle bor-blue" id="three-circle">3Э</div>\
				<div class="ps-square bor-blue">\
					<div class="ps-header blue">"ЯЗВА", <br>изъян</div>\
					<div class="ps-text"><span id ="three-content">Описание избыточно сильных аспектов с позиции 1Ф</span></div>\
				</div>\
			</div>\
			<div class="func">\
				<div class="ps-circle bor-gray" id="four-circle">4Л</div>\
				<div class="ps-square bor-gray">\
					<div class="ps-header gray">"ПУСТЯК", <br>безразличие</div>\
					<div class="ps-text"><span id ="four-content">Описание избыточно сильных аспектов с позиции 1Ф</span></div>\
				</div>\
			</div>\
			</div>\
		</div>\
\
		<div class="recom-block">\
			<div class="headtext">\
					<div class="psy-line-name orange">\
					<div class="psy-line-selfname"><span data-tooltip="Справочная информация"><img src="InfoGraphicsEmpForm/icons/question.png"> </span>Потенциал роста в рамках дожности</div></div>\
				</div>\
			\
			<div class="soc-kid-block">\
				<div class="soc-ego-text" id="rec-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, obcaecati, quisquam id molestias eaque asperiores <br>voluptatibus cupiditate error assumenda delectus odit similique earum voluptatem doloremque dolorem ipsam quae <br>rerum quis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, obcaecati, quisquam id molestias eaque<br> asperiores voluptatibus cupiditate error assumenda delectus odit similique earum voluptatem doloremque dolorem <br>ipsam quae rerum quis.</div>\
				<div class="row">\
    				<div class="col-lg-2">\
        				<div id="test-circle"></div>\
    				</div>\
				</div>\
				\
				\
			</div>\
\
\
			\
		</div>\
\
		<div class="recom-block">\
			<div class="headtext">\
					<div class="psy-line-name orange">\
					<div class="psy-line-selfname"><span data-tooltip="Справочная информация"><img src="InfoGraphicsEmpForm/icons/question.png"> </span>Задачи, которые способен решать</div></div>\
				</div>\
			<div class="tasks">\
				<!-- Идентификатор задач (один общий?) -->\
				<span id="rec-tasks">\
					<div><img src="InfoGraphicsEmpForm/icons/check.png"></div>\
						 <div class="task">Разработка эффективных маркетинговых решений	</div>\
					<div><img src="InfoGraphicsEmpForm/icons/check.png"></div>\
						 <div class="task">Общение с иностранными партнерами</div>\
					<div><img src="InfoGraphicsEmpForm/icons/check.png"></div>\
						 <div class="task">Проведение вебинаров и видео-конференций</div>\
					<div><img src="InfoGraphicsEmpForm/icons/check.png"></div>\
						 <div class="task">Осуществление контроля над исполнением задач</div>\
					\
				</span>\
			</div>\
				\
				\
		</div>\
\
		<div class="recom-block">\
			<div class="headtext">\
					<div class="psy-line-name orange">\
					<div class="psy-line-selfname"><span data-tooltip="Справочная информация"><img src="InfoGraphicsEmpForm/icons/question.png"> </span>Способы мотивации</div></div>\
				</div>\
			<div class="motivations">\
				<!-- Идентификатор мотиваций (один общий?) -->\
				<span id="rec-motivations">\
				<div class="motivation">\
			<div class="motivation-numb orange">1</div>\
			<div class="int-text">Премии</div>\
				</div>\
				<div class="motivation">\
			<div class="motivation-numb yellow">2</div>\
			<div class="int-text">Уютная обстановка</div>\
				</div>\
				<div class="motivation">\
			<div class="motivation-numb blue" >3</div>\
			<div class="int-text">Благоприятные отношения</div>\
				</div>\
				<div class="motivation">\
			<div class="motivation-numb orange">4</div>\
			<div class="int-text">Ровный эмоциональный фон</div>\
				</div>\
				</span>\
			</div>\
		</div>\
	</div>\
</section>/\n\
        <div class="section-name orange" align="center" id="sn-career"><div class="section-selfname">ТРУДОВАЯ ДЕЯТЕЛЬНОСТЬ</div></div>\
	<section id="cd-timeline" class="cd-container">\
	</section>';



    }



    return module_constructor;
});
