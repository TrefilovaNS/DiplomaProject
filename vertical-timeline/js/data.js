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
// //ЧЛ
// var egoChL = "";
// //БЭ
// var egoBE = "";
// //ЧИ
// var egoCHI = "";
// //ЧС
// var egoCHS = "";
// //БС
// var egoBS = "";
// //ЧЭ
// var egoChE = "";
// //БЛ
// var egoBL = "";
// //БИ
// var egoBI = "";
//Switch-case для отображения рекомендательного текста в зависимости от соционического типа человека
switch(socType){
	case 'ЛСЭ "Штирлиц"':
		textEgo.innerHTML = "Смысл жизни — оптимизация всего. Главное — чтобы было эффективнее, быстрее, дешевле. Склонен к высокому КПД. Обладает хорошо развитым чувством комфорта и уюта, как правило, любит чистоту и порядок.";
		textKid.innerHTML = "Интерес к информации о людях и об отношениях между ними. Подсознательный настрой на честные и порядочные отношения со всеми людьми. Любит все интересное и необычное, положительно реагирует на интересные предложения.";
		break;

	case 'ИЭЭ "Гексли"':
		textEgo.innerHTML = "Этот текст будет отображен, если выбран ТИМ Гексли";
		textKid.innerHTML = "Этот текст будет отображен, если выбран ТИМ Гексли";
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
		threeContent.innerHTML = "Текст первофизика Текст первофизика Текст первофизика";
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