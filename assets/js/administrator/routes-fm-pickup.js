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
	 var s_fullname = $('.s_fullname').val();
	 var s_email    = $('.s_email').val();
		e.preventDefault();
			setTimeout(function() {
			$.ajax({
			   type: "POST",
			   url:UrlLink+'post-rider-assignment',
			   data : {
						 'rider'      : rider, 
						 'id'         : id,
                         'trans_code' : trans_code,
                         'name'       : name,
                         'contact'    : contact,
                         's_fullname' : s_fullname,
                         's_email'    : s_email,

				},
			   success: function(data)
			   {
                if(data == '1'){
                    Swal.fire({
                        icon: "success",
                        title: "Assigment Success!",
                        text: "Rider Assignment!",
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


function check_uncheck_checkbox(isChecked) {
    if(isChecked) {
       $('input[name="check-awb"]').each(function() { 
          this.checked = true; 
          $("#show-assign").show();
          $(".cb-element").removeAttr("disabled");
       });
    } else {
       $('input[name="check-awb"]').each(function() {
          this.checked = false;
          $("#show-assign").hide();
          $(".cb-element").prop("disabled",true);
       });
    }

 }



$("#show-assign").click(function(){
    var array  = new Array();

    $("input:checkbox[name=check-awb]:checked").each(function(){
        array.push($(this).val())
    });

   $("#assign_order_id").val(array);

}); 

