$("#awb").change(function(e){
      
    e.preventDefault();

    $("#awb-receiving").hide();

    var awb = this.value;

    $.ajax({
          type : "GET",
          url  : UrlLink +'get-awb-information',
          data : {'id' : awb },
          success: function(data)
          {
            $(".waybill").html("");
                if(data !='empty'){
                      $(".waybill").html(data);
                     

                              $.ajax({
                                    type : "GET",
                                    url  : UrlLink +'get-awb-information-package',
                                    data : {'id' : awb },
                                    success: function(data)
                                    {
                                         if(data == 'Pouch'){
                                                $.ajax({
                                                      type: "POST",
                                                      url: UrlLink + '/process-awb-receive',
                                                      data : {'id' : awb },
                                                      success: function(data) {
                                                            Swal.fire({
                                                                  icon: "success",
                                                                  title: "Order Received",
                                                                  text: "Order is in the hub",
                                                                  customClass: {
                                                                  confirmButton: "btn btn-primary waves-effect waves-light"
                                                                  },
                                                                  buttonsStyling: !1
                                                            })
                                                            setTimeout(function() {  window.location.reload(); }, 2000);
                                                      }
                                          });
                                         } else {
                                          $("#awb-receiving").show();
                                         }
                                    }
                              })
                      
                } else {
                      $(".waybill").html('');
                      $("#awb-receiving").hide();
                }
                
          }
     })
});

    $("#Weight").change(function(){
         var weight = this.value;
         $("#btn-process").show();
         if(weight == "Yes"){

          $("#weight").prop('required',false);
          $("#awbfile").prop('required',false);
          $("#btn-receive").show();
          $("#btn-process").hide();
          $("#correct-weight").hide();
          $("#upload-awb").hide();

         } else {

                var awb = $("#awb").val();
                $("#awbbarcode").val(awb);
                $("#correct-weight").show();
                $("#upload-awb").show();

                $("#weight").prop('required',true);
                $("#awbfile").prop('required',true);

         }
        
    });

    $('#btn-receive').on('click', function (event) {
          var awb = $("#awb").val();
          event.preventDefault();
          swal.fire({
          title: 'Are you sure?',
          text: "Receive this order?",
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#000',
          confirmButtonText: 'Yes'
          }).then((result) => {
          if(result.isConfirmed){
                $.ajax({
                     type: "POST",
                     url: UrlLink + '/process-awb-receive',
                     data : {'id' : awb },
                      success: function(data) {
                            Swal.fire({
                                  icon: "success",
                                  title: "Order Received",
                                  text: "Order is in the hub",
                                  customClass: {
                                  confirmButton: "btn btn-primary waves-effect waves-light"
                                  },
                                  buttonsStyling: !1
                            })
                            setTimeout(function() {  window.location.reload(); }, 1000);
                      }
              });
          }
          }).catch(swal.noop);
    })

    $('#process-change').submit(function(e) {

          $('#processing').html('<center><font size="2" color="blue"><i class="fa fa-spinner fa-spin"></i> Processing AWB Changes....</font></center>');

          $("#btn-process").hide();

          e.preventDefault();
          var formData = new FormData(this);
          var awb = $("#awbbarcode").val();
          setTimeout(function() {
          $.ajax({
                type: "POST",
                url: UrlLink + '/process-awb-change',
                data:formData,
                cache:false,
                contentType: false,
                processData: false,
                success: function(data) {
                      $('#processing').html('<center><font size="2" color="green"><i class="fa fa-check"></i> Success Updates! </font></center>');
                      $.ajax({
                            type : "GET",
                            url  : UrlLink +'get-awb-information',
                            data : {'id' : awb },
                            success: function(data)
                            {
                             $(".waybill").html(data);
                             $("#print-awb").show();
                             $('#processing').html('');
                             $("#btn-receive").show();
                            }
                      })
                }
          });
          }, 3000);
        
       

    });