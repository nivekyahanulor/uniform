$('.rider').on('change', function() {
    var id = this.value;
    $.ajax({
            url: UrlLink + '/get-rider-information',
            method: 'GET',
            data: { 'id': id },
            dataType: 'json',
            success: function(data) {

            $.each(data, function(index, riders) {
                
                $(".rider-name").html("<b> Rider Name: </b>" + riders.firstname +' '+ riders.lastname);
                $(".rider-contact").html("<b> Rider Contact: </b>" + riders.contact);
                $(".rider-email").html("<b> Rider Email: </b>" + riders.email);
                $(".rider-status").html("<b> Rider Status: </b> Available");
                $(".ride_id").val(riders.id);
                $(".ride_name").val(riders.firstname +' '+ riders.lastname);
                $(".ride_contact").val(riders.contact);

            });

            }
        });
   });


   $('.assignRider').submit(function(e) {

	$('.btn').prop('disabled', true);
     var did        = $(this).data("id");
	 var rider      = $('.ride_id').val();
     var name       = $('.ride_name').val();
	 var contact    = $('.ride_contact').val();
	 var id         = $('.order_id').val();
	 var trans_code = $('#trans_code'+did).val();
     
		e.preventDefault();
			setTimeout(function() {
			$.ajax({
			   type: "POST",
			   url:UrlLink+'post-rider-rts',
			   data : {
						 'rider'      : rider, 
						 'id'         : id,
                         'trans_code' : trans_code,
                         'name'       : name,
                         'contact'    : contact,

				},
			   success: function(data)
			   {
                if(data == '1'){
                    Swal.fire({
                        icon: "success",
                        title: "Assigment Success!",
                        text: "Rider ASssigned for RTS!",
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