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
            
              var surname = document.getElementById("surname");
                surname.innerHTML = user.name;
               console.log(user.name);
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
						<div class="age-self"><span id="age">30</span></div>\
					</div>\
				</div>\
			</div>\
		</div>\
</section>\
    \
<div class="section-name blue" align="center" id="sn-edu"><div class="section-selfname">ОБРАЗОВАНИЕ</div></div>\
		<section id="edu" class="edu-container">\
		<div class="edu-block">\
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
                                                </span>ПЙ-тип: <span id="soc-type">ФВЭЛ "Чехов"</span></div></div>\
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
