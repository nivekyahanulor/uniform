$('#formAuthentication').submit(function(e) {
	$('#toastr-login').trigger('click');
	$('#content').hide();
	$('.btn').prop('disabled', true);
	$(".login-btn").html("Processing Login...");
	 var username     = $('#username').val();
	 var password     = $('#password').val();
		e.preventDefault();
			setTimeout(function() {
			$.ajax({
			   type: "POST",
			   url:'controller/authentication',
			   data : {
						 'username'     : username, 
						 'password'     : password,
						 'login'        : 'Login'
				},
			   success: function(data)
			   {
				    if(data =='customer'){
                        Swal.fire({
                            icon: "success",
                            title: "Login Success!",
                            text: "Welcome to your account",
                            customClass: {
                                confirmButton: "btn btn-primary waves-effect waves-light"
                            },
                            buttonsStyling: !1
                        })
						setTimeout(function() {  window.location.href = "index";}, 2000);
					} else if(data =='admin'){
                        Swal.fire({
                            icon: "success",
                            title: "Login Success!",
                            text: "Welcome to your account",
                            customClass: {
                                confirmButton: "btn btn-primary waves-effect waves-light"
                            },
                            buttonsStyling: !1
                        })
						setTimeout(function() {  window.location.href = "account/index";}, 2000);
					} else {
						Swal.fire({
                            icon: "error",
                            title: "Login Error!",
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