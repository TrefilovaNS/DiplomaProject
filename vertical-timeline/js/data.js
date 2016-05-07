// window.onload = function (){
// 	var text = '{"employees":[' +
// '{"firstName":"John","lastName":"Doe" },' +
// '{"firstName":"Anna","lastName":"Smith" },' +
// '{"firstName":"Peter","lastName":"Jones" }]}';

// var json = (function () {
//     var json = null;
//     $.ajax({
//         'async': false,
//         'global': false,
//         'url': "/timeline.json",
//         'dataType': "json",
//         'success': function (data) {
//             json = data;
//         }
//     });
//     return json;
// })(); 
// от сих
// $.getJSON('vertical-timeline/json/timeline.json', function(data) {

//     //do stuff with your data here
// var jsonData = JSON.parse(data);
// var index = document.getElementById("demo");
// index.innerHTML = jsonData.employees[0].firstName + " " + jsonData.employees[0].lastName;
// });
//до сих
// var index = $(document.getElementById('demo')).html;
// var jsonData = JSON.parse(data);
// var index = document.getElementById("demo");
// index.innerHTML = obj.employees[0].firstName + " " + obj.employees[0].lastName;
// });
// };

$(document).ready(function(){
	$("#sn-main").slideDown(1000);
   	 $("#sn-edu").slideDown("slow");
     $("#sn-career").slideDown("slow");
      $("#sn-skills").slideDown("slow");
 		$("#sn-interests").slideDown("slow");
 		$("#sn-rec").slideDown("slow");
		
		$(function() {
			$(".meter > span").each(function() {
				$(this)
					.data("origWidth", $(this).width())
					.width(0)
					.animate({
						width: $(this).data("origWidth")
					}, 3000);
			});
		});

		
});
// if(document.getElementById("soc-type")=='ЛСЭ "Штирлиц"'){
// 	var textEgo =  document.getElementById("demo");
	
// }

window.onload = function (){

var socType = 'ЛСЭ "Штирлиц"';
var textEgo =  document.getElementById("ego-text");
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
switch(socType){
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


var psType = 'ФВЭЛ "Чехов"';
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
switch(res[0]){
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
};


//Switch-case для отображения текста во ВТОРОМ из ЧЕТЫРЕХ блоков в зависимости от ПЙ-типа
switch(res[1]){
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
};

//Switch-case для отображения текста в ТРЕТЬЕМ из ЧЕТЫРЕХ блоков в зависимости от ПЙ-типа
switch(res[2]){
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
};

//Switch-case для отображения текста во ЧЕТВЕРТОМ из ЧЕТЫРЕХ блоков в зависимости от ПЙ-типа
switch(res[3]){
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
};
};
//Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, obcaecati, quisquam id molestias 
//eaque asperiores voluptatibus cupiditate error assumenda delectus odit similique earum voluptatem doloremque 
//dolorem ipsam quae rerum quis.