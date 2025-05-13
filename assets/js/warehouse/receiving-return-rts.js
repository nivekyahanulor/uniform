$("#awb").change(function(e){

    e.preventDefault();

    $("#awb-receiving").hide();
    $(".waybill").html("");
    var awb = this.value;

    $.ajax({
          type : "GET",
          url  : UrlLink +'get-awb-information-3',
          data : {'id' : awb },
          success: function(data)
          {
                if(data !='empty'){
                      $(".waybill").html(data);
                      $.ajax({
                        type : "GET",
                        url  : UrlLink +'get-order-information-3',
                        data : {'id' : awb },
                        dataType: "json",
                        success: function(data)
                        {
                             
                                  
                                    $.each(data, function(index, deliver) {

                                          if(deliver.is_status == 4 && deliver.is_rts == 2){

                                           $("#btn-process").show();
                                           $("#awb-return").show();
                                           $(".receiver_name").html("<h4><b> Receiver Name: </b>" + deliver.r_fullname + "</h4>");
                                           $(".delivery_attempt").html("<h4><b> Delivery Attempt: </b>" + deliver.is_rts_failed_cnt+ "</h4>");
                                           $(".failed_reason").html("<h4><b> Failed Reason: </b>" + deliver.rts_failed_reason+ "</h4>");

                                           if( deliver.is_rts_failed_cnt == 2){
                                                $("#btn-process").show();
                                               // $("#btn-rts").show();
                                           } else {
                                                $("#btn-process").show();
                                                $("#btn-rts").hide();
                                           }

                                          } else {

                                            $("#btn-process").hide();
                                            $("#awb-return").hide();
                                            $(".receiver_name").html("");
                                            $(".delivery_attempt").html("");
                                            $(".failed_reason").html("");
                                          }
                                    
                                     });
                             

                        }
                    })


                } else {
                      $(".waybill").html('');
                      $("#awb-return").hide();

                }
                
          }
     })
});


    $('#btn-process').on('click', function (event) {
          var awb = $("#awb").val();
          event.preventDefault();
          swal.fire({
          title: 'Are you sure?',
          text: "Receive this return order?",
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#000',
          confirmButtonText: 'Yes'
          }).then((result) => {
          if(result.isConfirmed){
                $.ajax({
                     type: "POST",
                     url: UrlLink + '/process-awb-return-rts',
                     data : {'id' : awb },
                      success: function(data) {
                            Swal.fire({
                                  icon: "success",
                                  title: "Order Returned",
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

    $('#btn-rts').on('click', function (event) {
      var awb = $("#awb").val();
      event.preventDefault();
      swal.fire({
      title: 'Are you sure?',
      text: "Tag this as RTS?",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#000',
      confirmButtonText: 'Yes'
      }).then((result) => {
      if(result.isConfirmed){
            $.ajax({
                 type: "POST",
                 url: UrlLink + '/process-awb-rts',
                 data : {'id' : awb },
                  success: function(data) {
                        Swal.fire({
                              icon: "success",
                              title: "Order Returned to Seller",
                              text: "Order is in the RTS Process",
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

  