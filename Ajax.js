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
        	result = $.parseJSON(response);
            $('#result_form').html(
            '<div class="pay-ready"> '+
                'Количество: '+result.amount+
                '<br>Валюта: '+result.currency+
                '<br>Описание: '+result.description+
                '<br>Payway: '+result.payway+
                '<br>Shop_id: '+result.shop_id+
                '<br>Shop order id: '+result.shop_order_id+
                '<br>Sign: '+result.sign+
                '<button class="m-btn" onclick="func();" href="#">Отправить</button>'+
            '</div>'
            );
    	},
    	error: function(response) { // Данные не отправлены
            $('#result_form').html('Ошибка. Данные не отправлены.');
    	}
 	});
}


function func() {
    console.log('я делаю редирект');
    document.location.href = 'https://pay.piastrix.com/ru/pay'
  }