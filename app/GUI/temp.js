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
            
            for (var i = 0; i < user.career.length; i++) {
                var fn = user.career[i];
                console.log(fn());
            }
            
             for (var i = 0; i < user.education.length; i++) {
                var fn = user.education[i];
                console.log(fn());
                
//                var node = document.createElement("DIV");
                
                var parentDiv = document.getElementById('edu');
                var div = document.createElement('div');
                div.className = 'edu-block';
                div.id = 'ID_etogo_DIVa_' + i;
                parentDiv.appendChild(div);  
                
                var parentBlockDiv = document.getElementById('ID_etogo_DIVa_' + i);
                var divBlock = document.createElement('div');
                divBlock.className = 'edu-line-name orange';
                divBlock.id = 'NEW_ID_etogo_DIVa_' + i;
                parentBlockDiv.appendChild(divBlock);
                
                var parentLineDiv = document.getElementById('NEW_ID_etogo_DIVa_' + i);
                var divLine = document.createElement('div');
                divLine.className = 'edu-line-selfname';
                divLine.id = 'NEW_NEW_ID_etogo_DIVa_' + i;
                parentLineDiv.appendChild(divLine);  
                                    
                var eduName = document.getElementById('NEW_NEW_ID_etogo_DIVa_' + i);
                var textUniversity = "ВУЗ: ";
                eduName.innerHTML =  textUniversity; + user.education[i].course;  
                console.log(user.education[i].name);
                   
                
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
       
            //Блок подкидывания соцтипа
            var socType = user.soctype;
            var socTypeInner = document.getElementById("soc-type");
            socTypeInner.innerHTML = socType;
            
            var textEgo = document.getElementById("ego-text");
            var textKid = document.getElementById("kid-text");
//СИЛЬНЫЕ ФУНКЦИИ
//ЧЛ
            var egoChL = "Смысл жизни — оптимизация всего. Главное — чтобы было эффективнее, быстрее, дешевле. Склонен к высокому КПД.";
//БЭ
            var egoBE = "Умение понять желания и интересы людей, отношения между ними. Глубокое понимание нравственных и этических сторон жизни.";
//ЧИ
            var egoCHI = "Понимание сути явлений, потенциала способностей людей. Генерирование альтернативных решений.";
//ЧС
            var egoCHS = "Умение оценить внешний вид объектов, физическую силу, волевые качества людей. Настойчивость, целеустремленность.";
//БС
            var egoBS = "Понимание гармонии форм и положений, стремление к удобству, комфорту и уюту, изысканным удовольствиям.";
//ЧЭ
            var egoChE = "Понимание эмоционального состояния человека, управление настроением людей, выражение чувств и эмоций.";
//БЛ
            var egoBL = "Способности к анализу и систематизация информации, понимание и оценка причинно-следственных связей, формальных правил.";
//БИ
            var egoBI = "Понимание взаимосвязи времен, видение тенденций развития событий, способности к прогнозированию, оценка затрат времени.";

//ДЕТСКИЙ БЛОК (слабые функции)
            var kidChL = "Благодарность за конкретную и исчерпывающую помощь в вопросах эффективного выполнения какой-либо работы.";
//БЭ
            var kidBE = "Интерес к информации о людях и об отношениях между ними. Подсознательный настрой на честные и порядочные отношения со всеми людьми.";
//ЧИ
            var kidCHI = "Любит все интересное и необычное, положительно реагирует на интересные предложения.";
//ЧС
            var kidCHS = "Слабый волевой импульс, недостаточная требовательность и целеустремленность. Подспудное желание следовать чужой сильной воле.";
//БС
            var kidBS = "Плохо чувствует свое тело и его потребности. Благодарность за создание комфортных условий уюта, заботы.";
//ЧЭ
            var kidChE = "Нуждается в активной эмоциональной поддержке, легко заряжается атмосферой веселья, рядом с эмоциональными людьми и сам раскрепощается.";
//БЛ
            var kidBL = "Хорошо воспринимает информацию, если она подается в систематизированном виде. Склонен доверять подробным, аргументированным объяснениям.";
//БИ
            var kidBI = "Слабое чувство времени. Подсознательная уверенность в том, что все окружающие должны предупреждать его о возможных неприятностях.";
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
//2 функция
        var twoContent = document.getElementById("two-content");
//3 функция
        var threeContent = document.getElementById("three-content");
//4 функция
        var fourContent = document.getElementById("four-content");


        var F = "Физика - мир всего материального. Физика отвечает за отношение к собственному телу и его потребностям, за желание обладать материальными благами, за отношение к физическому труду и работе вообще.";
        var V = "Воля - это ощущения цели, смысла существования человека, восприятие жизненных задач, а также собственных желаний. Воля - это стержень личности, уверенность в своем праве на что-либо."
        var E = "Эмоция - мир внутренних переживаний человека: чувств, эмоций. Кроме этого, Эмоция отвечает за отношение к искусству и красоте окружающего мира вообще.";
        var L = "Логика — мир идей. Логика определяет степень субъективной ценности умозаключений, красоты и завершенности идей и концепций, вне зависимости от того, имеют ли они материальное воплощение или нет."
        var recForOne = "Функция избыточна. Человек не считается с чужим мнением, склонен к доминированию по данному аспекту.";
        var recForTwo = "Функция сильная, но гибкая и подстраивающаяся. Настроена на диалог и обсуждение вопросов по данному аспекту.";
        var recForThree = "Функция слабая, но доминирующая. Человеку хочется быть лучше по данному аспекту, но критика болезненна.";
        var recForFour = "Функция слабая и инертная. Человек готов принять любое чужое мнение по данному аспекту.";
//Switch-case для отображения текста в ПЕРВОМ из ЧЕТЫРЕХ блоков в зависимости от ПЙ-типа
        switch (res[0]) {
            case "Ф":
                oneContent.innerHTML = F + " " + recForOne;
                break;

            case "Э":
                oneContent.innerHTML = E + " " + recForOne;
                break;

            case "В":
                oneContent.innerHTML = V + " " + recForOne;
                break;

            case "Л":
                oneContent.innerHTML = L + " " + recForOne;
                break;

            default:
                oneContent.innerHTML = "Первая функция не определена";
        }
        ;


//Switch-case для отображения текста во ВТОРОМ из ЧЕТЫРЕХ блоков в зависимости от ПЙ-типа
        switch (res[1]) {
            case "Ф":
                twoContent.innerHTML = F + " " + recForTwo;
                break;

            case "Э":
                twoContent.innerHTML = E + " " + recForTwo;
                break;

            case "В":
                twoContent.innerHTML = V + " " + recForTwo;
                break;

            case "Л":
                twoContent.innerHTML = L + " " + recForTwo;
                break;

            default:
                twoContent.innerHTML = "Вторая функция не определена";
        }
        ;

//Switch-case для отображения текста в ТРЕТЬЕМ из ЧЕТЫРЕХ блоков в зависимости от ПЙ-типа
        switch (res[2]) {
            case "Ф":
                threeContent.innerHTML = F + " " + recForThree;
                break;

            case "Э":
                threeContent.innerHTML = E + " " + recForThree;
                break;

            case "В":
                threeContent.innerHTML = V + " " + recForThree;
                break;

            case "Л":
                threeContent.innerHTML = L + " " + recForThree;
                break;

            default:
                threeContent.innerHTML = "Третья функция не определена";
        }
        ;

//Switch-case для отображения текста во ЧЕТВЕРТОМ из ЧЕТЫРЕХ блоков в зависимости от ПЙ-типа
        switch (res[3]) {
            case "Ф":
                fourContent.innerHTML = F + " " + recForFour;
                break;

            case "Э":
                fourContent.innerHTML = E + " " + recForFour;
                break;

            case "В":
                fourContent.innerHTML = V + " " + recForFour;
                break;

            case "Л":
                fourContent.innerHTML = L + " " + recForFour;
                break;

            default:
                fourContent.innerHTML = "Четвертая функция не определена";
        }
        ;
            
        });
               
       
       
        form.pnlHtml.element.innerHTML = '<section id="main" class="main-container">\
		<div class="emp-main-block" id="sn-main">\
			<div class="photo">\
 				 <img src="InfoGraphicsEmpForm/img/photoRan.jpg" alt="" />\
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
		<div class="edu-block" id="edu-blockID">\
			<div class="edu-logo">\
 				 <img src="InfoGraphicsEmpForm/img/mgu_logo.jpg" alt="" />\
			</div>\
			<div class="edu-line-name orange">\
				<div class="edu-line-selfname">ВУЗ: <span id="eduname">Название образовательного учреждения</span></div>\
			</div>\
			<div class="edu-line-name yellow">\
				<div class="edu-line-selfname">Специальность: <span id="coursename">Название полученной специальности</span></div>\
			</div>\
			<div class="edu-line-name blue">\
				<div class="edu-line-selfname">Профиль: <span id="dirname">Название профиля в рамках специальности</span></div>\
			</div>\
			<div class="edu-years">\
				<div class="edu-line-years orange">\
					<div class="edu-selfyears"><span id="entryDate">2003</span>-<span id="endDate">2007</span></div></div>\
				<div class="edu-selfdegree"><span id="dirname">Специалитет</span></div>\
			</div>\
		</div>\
	</section>\
<div class="section-name yellow" align="center" id="sn-skills"><div class="section-selfname">НАВЫКИ</div></div>\
<section id="skills" class="skills-container">\
	<div class="skills-block">\
		<div class="skill">\
			<div class="skill-name">Владение пакетом программ MS Office</div>\
			<div class="skill-line">\
				<div class="meter orange">\
					<span style="width: 40%"></span>\
				</div>\
			</div>\
		</div>\
		<div class="skill">\
			<div class="skill-name">Навык общения</div>\
			<div class="skill-line">\
				<div class="meter blue">\
					<span style="width: 60%"></span>\
				</div>\
			</div>\
		</div>\
		<div class="skill">\
			<div class="skill-name">Организаторский навык</div>\
			<div class="skill-line">\
				<div class="meter yellow">\
					<span style="width: 76%"></span>\
				</div>\
			</div>\
		</div>\
</section>\
<div class="section-name blue" align="center" id="sn-interests"><div class="section-selfname">ИНТЕРЕСЫ</div></div>\
<section id="interests" class="interests-container">\
	<div class="interests-block">\
		<div class="interest">\
			<div class="int-img orange" id="int-IT"><img src="InfoGraphicsEmpForm/icons/int-IT.png"></div>\
			<div class="int-text">Информационные технологии</div>\
		</div>\
		<div class="interest">\
			<div class="int-img yellow" id="int-Lan"><img src="InfoGraphicsEmpForm/icons/int-Lan.png"></div>\
			<div class="int-text">Иностранные языки</div>\
		</div>\
		<div class="interest">\
			<div class="int-img blue" id="int-Sports"><img src="InfoGraphicsEmpForm/icons/int-Sports.png"></div>\
			<div class="int-text">Спорт: лыжи</div>\
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
				<div class="ps-circle bor-yellow" id="one-circle">2В</div>\
				<div class="ps-square bor-yellow">\
					<div class="ps-header yellow">"РЕКА", <br>норма</div>\
					<div class="ps-text"><span id ="two-content">Описание избыточно сильных аспектов с позиции 1Ф</span></div>\
				</div>\
			</div>\
			<div class="func">\
				<div class="ps-circle bor-blue" id="one-circle">3Э</div>\
				<div class="ps-square bor-blue">\
					<div class="ps-header blue">"ЯЗВА", <br>изъян</div>\
					<div class="ps-text"><span id ="three-content">Описание избыточно сильных аспектов с позиции 1Ф</span></div>\
				</div>\
			</div>\
			<div class="func">\
				<div class="ps-circle bor-gray" id="one-circle">4Л</div>\
				<div class="ps-square bor-gray">\
					<div class="ps-header gray">"ПУСТЯК", безразличие</div>\
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
				<div class="soc-ego-text" id="rec-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, obcaecati, quisquam id molestias eaque asperiores voluptatibus cupiditate error assumenda delectus odit similique earum voluptatem doloremque dolorem ipsam quae rerum quis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, obcaecati, quisquam id molestias eaque asperiores voluptatibus cupiditate error assumenda delectus odit similique earum voluptatem doloremque dolorem ipsam quae rerum quis.</div>\
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
						 <div class="task">Осуществление контроля над исполнением задач другими людьми</div>\
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
				\
				\
		</div>\
\
	</div>\
</section>/\n\
<div class="section-name orange" align="center" id="sn-career"><div class="section-selfname">ТРУДОВАЯ ДЕЯТЕЛЬНОСТЬ</div></div>\
	<section id="cd-timeline" class="cd-container">\
		<div class="cd-timeline-block">\
			<div class="cd-timeline-img cd-picture">\
				<img src="InfoGraphicsEmpForm/vertical-timeline/img/cd-icon-main.png" alt="Picture">\
			</div> <!-- cd-timeline-img -->\
\
			<div class="cd-timeline-content">\
				<h2>Название организации</h2>\
				<span class="cd-date">2010</span><br>\
				<p>\
					<span id="postname">Должность</span><br>\
					<span id="demo2">Достижение 1<br> Достижение 2</span><br>\
					Причина увольнения: <span id="dismis">причина</span>\
				</p>\
\
			</div> <!-- cd-timeline-content -->\
		</div> <!-- cd-timeline-block -->\
\
		<div class="cd-timeline-block">\
			<div class="cd-timeline-img cd-movie">\
				<img src="InfoGraphicsEmpForm/vertical-timeline/img/cd-icon-main.png" alt="Movie">\
			</div> <!-- cd-timeline-img -->\
\
			<div class="cd-timeline-content">\
				<h2>Название организации</h2>\
				<span class="cd-date">2010</span><br>\
				<p>\
					<span id="postname">Должность</span><br>\
					<span id="demo2">Достижение 1<br> Достижение 2</span><br>\
					Причина увольнения: <span id="dismis">причина</span>\
				</p>\
			</div> <!-- cd-timeline-content -->\
		</div> <!-- cd-timeline-block -->\
\
		<div class="cd-timeline-block">\
			<div class="cd-timeline-img cd-location">\
				<img src="InfoGraphicsEmpForm/vertical-timeline/img/cd-icon-main.png" alt="Picture">\
			</div> <!-- cd-timeline-img -->\
\
			<div class="cd-timeline-content">\
				<h2>Название организации</h2>\
				<span class="cd-date">2010</span><br>\
				<p>\
					<span id="postname">Должность</span><br>\
					<span id="demo2">Достижение 1<br> Достижение 2</span><br>\
					Причина увольнения: <span id="dismis">причина</span>\
				</p>\
			</div> <!-- cd-timeline-content -->\
		</div> <!-- cd-timeline-block -->\
	</section>\
        <div class="section-name orange" align="center" id="sn-career"><div class="section-selfname">ТРУДОВАЯ ДЕЯТЕЛЬНОСТЬ</div></div>\
	<section id="cd-timeline" class="cd-container">\
		<div class="cd-timeline-block">\
			<div class="cd-timeline-img cd-picture">\
				<img src="InfoGraphicsEmpForm/vertical-timeline/img/cd-icon-main.png" alt="Picture">\
			</div> <!-- cd-timeline-img -->\
\
			<div class="cd-timeline-content">\
				<h2>Название организации</h2>\
				<span class="cd-date">2010</span><br>\
				<p>\
					<span id="postname">Должность</span><br>\
					<span id="demo2">Достижение 1<br> Достижение 2</span><br>\
					Причина увольнения: <span id="dismis">причина</span>\
				</p>\
\
			</div> <!-- cd-timeline-content -->\
		</div> <!-- cd-timeline-block -->\
\
		<div class="cd-timeline-block">\
			<div class="cd-timeline-img cd-movie">\
				<img src="InfoGraphicsEmpForm/vertical-timeline/img/cd-icon-main.png" alt="Movie">\
			</div> <!-- cd-timeline-img -->\
\
			<div class="cd-timeline-content">\
				<h2>Название организации</h2>\
				<span class="cd-date">2010</span><br>\
				<p>\
					<span id="postname">Должность</span><br>\
					<span id="demo2">Достижение 1<br> Достижение 2</span><br>\
					Причина увольнения: <span id="dismis">причина</span>\
				</p>\
			</div> <!-- cd-timeline-content -->\
		</div> <!-- cd-timeline-block -->\
\
		<div class="cd-timeline-block">\
			<div class="cd-timeline-img cd-location">\
				<img src="InfoGraphicsEmpForm/vertical-timeline/img/cd-icon-main.png" alt="Picture">\
			</div> <!-- cd-timeline-img -->\
\
			<div class="cd-timeline-content">\
				<h2>Название организации</h2>\
				<span class="cd-date">2010</span><br>\
				<p>\
					<span id="postname">Должность</span><br>\
					<span id="demo2">Достижение 1<br> Достижение 2</span><br>\
					Причина увольнения: <span id="dismis">причина</span>\
				</p>\
			</div> <!-- cd-timeline-content -->\
		</div> <!-- cd-timeline-block -->\
	</section>';


           
    }
    


    return module_constructor;
});
