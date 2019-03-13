$( document ).ready(function() {
    $("#btn").click(
		function(){
			sendAjaxForm('result_form', 'ajax_form', 'action_ajax_form.php');
			return false; 
		}
	);
});


function sendAjaxForm(result_form, ajax_form, url) {
    $.ajax({
        url:     'https://test-telega.piastrix24.com/api/get_data', //url страницы (action_ajax_form.php)
        type:     "POST", //метод отправки
        dataType: "html", //формат данных
        data: $("#"+ajax_form).serialize(),  // Сеарилизуем объект
        success: function(response) { //Данные отправлены успешно
        	let result = $.parseJSON(response);
            $('#result_form').html(
            '<form class="pay-ready" action="https://test-telega.piastrix24.com/api/get_data"> '+

                '<p>Name</p><input type="text" velue="result" name="amount">'+
                '<input type="text" velue="result.currency">'+
                '<input type="text" velue="result.description">'+
                '<input type="text" velue="result.payway">'+
                '<input type="text" velue="result.shop_id">'+
                '<input type="text" velue="result.shop_order_id">'+
                '<input type="text" velue="result.sign">'+
                '<button class="m-btn" onclick="func();" href="#">Отправить</button>'+
            '</form>'
            );

            
        },
       
    	error: function(response) { // Данные не отправлены
            $('#result_form').html('Ошибка. Данные не отправлены.');
    	}
     });
}




function func() {
    document.location.href = 'https://pay.piastrix.com/ru/pay'
  }

  
 
