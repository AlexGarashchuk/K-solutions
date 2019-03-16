$(document).on('submit', '#ajax_form', function(){
    sendAjaxForm('result_form', 'ajax_form', 'action_ajax_form.php');
			return false; 
})


function sendAjaxForm(result_form, ajax_form, url) {
    $.ajax({
        url:     'https://test-telega.piastrix24.com/api/get_data',
        type:     "POST", 
        dataType: "html", 
        data: $("#"+ajax_form).serialize(),  
        success: function(response) { 
        	let result = $.parseJSON(response);
            $('#result_form').html(
            '<form class="pay-ready" action="https://pay.piastrix.com/ru/pay" method="post"> '+
                'Amount: <input type="number" value="'+result.amount+'" name="amount">'+
                'Currency: <input type="text" value="'+result.currency+'" name="currency">'+
                'Description: <input type="text" value="'+result.description+'" name="description">'+
                'Payway: <input type="text" value="'+result.payway+'" name="payway">'+
                '<input type="hidden" value="'+result.shop_id+'" name="shop_id">'+
                '<input type="hidden" value="'+result.shop_order_id+'" name="shop_order_id">'+
                '<input type="hidden" value="'+result.sign+'" name="sign">'+
                '<button class="m-btn" onclick="func();" href="#">Отправить</button>'+
            '</form>'
            ); 
        },
     });
}


function func() {
    // document.location.href = 'https://pay.piastrix.com/ru/pay'
  }

  
 
