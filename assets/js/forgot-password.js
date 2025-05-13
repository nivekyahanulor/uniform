$('#forgotPassword').submit(function(e) {
	$('#toastr-login').trigger('click');
	$('#content').hide();
	$('.btn').prop('disabled', true);
	 var email     = $('#email').val();
		e.preventDefault();
			setTimeout(function() {
			$.ajax({
			   type: "POST",
			   url:'request-forgot-password',
			   data : {
						 'email'     : email, 
				},
			   success: function(data)
			   {
				    if(data !='success'){
                        Swal.fire({
                            icon: "success",
                            title: "Forgot Password",
                            text: "Forgot Password Request Success",
                            customClass: {
                                confirmButton: "btn btn-primary waves-effect waves-light"
                            },
                            buttonsStyling: !1
                        })
						setTimeout(function() {  window.location.href = "new-password?q="+data;}, 2000);
				    } else {
						Swal.fire({
                            icon: "error",
                            title: "Sorry! Email not Found!",
                            text: "Please try again!",
                            customClass: {
                                confirmButton: "btn btn-danger waves-effect waves-light"
                            },
                            buttonsStyling: !1
                        })
						$('.btn').prop('disabled', false);
					}
			   }
		   });
		}, 3000);
   
}); 



$("#repassword").change(function(){
   
    var password   = $("#password").val();
    var repassword = $("#repassword").val();

    if(password != repassword){
        $("#password-not-match").html("<font color=red> Entered Password Not Match </font>");
        $("#btn-process").prop("disabled",true);
    } else {
        $("#password-not-match").html("");
        $("#btn-process").prop("disabled",false);
    }
});

$('#forgotPasswordProcess').submit(function(e) {
	$('#toastr-login').trigger('click');
	$('#content').hide();
	$('.btn').prop('disabled', true);

	 var email     = $('#email').val();
     var password     = $('#password').val();

		e.preventDefault();
			setTimeout(function() {
			$.ajax({
			   type: "POST",
			   url:'process-forgot-password',
			   data : {

						 'email'     : email, 
                         'password'  : password, 

				},
			   success: function(data)
			   {
				    if(data !='fail'){
                        Swal.fire({
                            icon: "success",
                            title: "Success",
                            text: " Password Changed!",
                            customClass: {
                                confirmButton: "btn btn-primary waves-effect waves-light"
                            },
                            buttonsStyling: !1
                        })
						setTimeout(function() {  window.location.href = "auth";}, 2000);
				    } else {
						Swal.fire({
                            icon: "error",
                            title: "Sorry! Email not Found!",
                            text: "Please try again!",
                            customClass: {
                                confirmButton: "btn btn-danger waves-effect waves-light"
                            },
                            buttonsStyling: !1
                        })
						$('.btn').prop('disabled', false);
					}
			   }
		   });
		}, 3000);
   
}); 