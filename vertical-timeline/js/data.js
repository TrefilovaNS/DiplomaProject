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
