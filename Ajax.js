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
                'Amount: <input type="number" value="'+result.amount+'" name="amount">'+
                'Currency: <input type="text" value="'+result.currency+'">'+
                'Description: <input type="text" value="'+result.description+'">'+
                'Payway: <input type="text" value="'+result.payway+'">'+
                '<input type="hidden" value="'+result.shop_id+'">'+
                '<input type="hidden" value="'+result.shop_order_id+'">'+
                '<input type="hidden" vlue="'+result.sign+'">'+
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

  
 
