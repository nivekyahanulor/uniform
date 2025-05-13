
$('.pouch-rates').submit(function(e) {
	$('.btn').prop('disabled', true);
     var pid      = $(this).data("id");
	 var amount  = $('#amount-'+pid).val();
		e.preventDefault();
			setTimeout(function() {
			$.ajax({
			   type: "POST",
			   url:UrlLink+'update-pouch',
			   data : {
						 'amount'  : amount, 
						 'id'      : pid,
				},
			   success: function(data)
			   {
                if(data == '1'){
                    Swal.fire({
                        icon: "success",
                        title: "Rates",
                        text: "Pouch Rate Amount Udpated!",
                        customClass: {
                            confirmButton: "btn btn-primary waves-effect waves-light"
                        },
                        buttonsStyling: !1
                    })
                    setTimeout(function() {  window.location.reload(); }, 2000);
                   
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Process Error!",
                        text: "Please try again",
                        customClass: {
                            confirmButton: "btn btn-primary waves-effect waves-light"
                        },
                        buttonsStyling: !1
                    })
                   setTimeout(function() {  window.location.reload(); }, 2000);
                }
                
			   }
		   });
		}, 3000);
   
}); 