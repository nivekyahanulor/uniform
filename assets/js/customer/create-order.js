var urllink = UrlLink;


   // DEFAULT SENDER // 


   $('#pdate').change(function() {

        var date  = $(this).val();
        var time  = $("#time").val();
        var today = $("#dtoday").val();
       
        if(time >= '14:01' && date == today){
           $("#warning-process").html("<b>Hello, pickup process will be tomorrow!</b>")
           $("#btn-process").show();
           $("#ptom").val(1);
        } else {
            $("#warning-process").html("")
            $("#btn-process").show();
            $("#ptom").val(0);
        }
    });

   $.ajax({
    url: 'https://psgc.gitlab.io/api/regions/',
    method: 'GET',
    dataType: 'json',
    success: function(data) {
        $.each(data, function(index, region) {
            $('#regionDropdown').append(
                $('<option></option>').val(region.code).text(region.name)
            );
        });
    },
    error: function(jqXHR, textStatus, errorThrown) {
        console.error('Error fetching regions:', textStatus, errorThrown);
    }
    });


   $('#regionDropdown').change(function() {
       var regionId = $(this).val();
       if(regionId == '130000000'){
        $('#provinceDropdown').empty().append('<option value="">Select Province</option>');;
        $('#provinceDropdown').attr('disabled', 'disabled');
           $('#cityDropdown').empty().append('<option value="">Select a City</option>');
           if (regionId) {
               $.ajax({
                   url: 'https://psgc.gitlab.io/api/regions/'+regionId+'/cities-municipalities/', // Your PHP endpoint
                   method: 'GET',
                   data: { region_id: regionId },
                   dataType: 'json',
                   success: function(data) {
                       $.each(data, function(index, city) {
                           $('#cityDropdown').append(
                               $('<option></option>').val(city.code).text(city.name)
                           );
                       });
                   },
                   error: function(jqXHR, textStatus, errorThrown) {
                       console.error('Error fetching cities:', textStatus, errorThrown);
                   }
               });
           }
   
       } else { 
           $('#provinceDropdown').removeAttr('disabled');
           $('#cityDropdown').empty().append('<option value="">Select a City</option>');
   
               $('#provinceDropdown').empty().append('<option value="">Select a Province</option>');
               if (regionId) {
                   $.ajax({
                       url: 'https://psgc.gitlab.io/api/regions/'+regionId+'/provinces/',
                       method: 'GET',
                       data: { region_id: regionId },
                       dataType: 'json',
                       success: function(data) {
                           $.each(data, function(index, city) {
                               $('#provinceDropdown').append(
                                   $('<option></option>').val(city.code).text(city.name)
                               );
                           });
                       },
                       error: function(jqXHR, textStatus, errorThrown) {
                           console.error('Error fetching cities:', textStatus, errorThrown);
                       }
                   });
               }
       }
     
    
   });
   
   
   
   $('#provinceDropdown').change(function() {
       var regionId = $(this).val();
       $('#cityDropdown').empty().append('<option value="">Select a City</option>');
       if (regionId) {
           $.ajax({
               url: 'https://psgc.gitlab.io/api/provinces/'+regionId+'/cities-municipalities/', // Your PHP endpoint
               method: 'GET',
               data: { region_id: regionId },
               dataType: 'json',
               success: function(data) {
                   $.each(data, function(index, city) {
                       $('#cityDropdown').append(
                           $('<option></option>').val(city.code).text(city.name)
                       );
                   });
               },
               error: function(jqXHR, textStatus, errorThrown) {
                   console.error('Error fetching cities:', textStatus, errorThrown);
               }
           });
       }
   });
   
   
   
   
   $('#cityDropdown').change(function() {
       var cityID = $(this).val();
       $('#barangayDropdown').empty().append('<option value="">Select a Barangay</option>');
       if (cityID) {
           $.ajax({
               url: 'https://psgc.gitlab.io/api/cities-municipalities/'+cityID+'/barangays/',
               method: 'GET',
               data: { city_id: cityID },
               dataType: 'json',
               success: function(data) {
                   $.each(data, function(index, barangay) {
                       $('#barangayDropdown').append(
                           $('<option></option>').val(barangay.name).text(barangay.name)
                       );
                   });
               },
               error: function(jqXHR, textStatus, errorThrown) {
                   console.error('Error fetching cities:', textStatus, errorThrown);
               }
           });
       }
   });
   
   
   
   // DEFAULT RECIPIENT // 

   $.ajax({
    url: 'https://psgc.gitlab.io/api/regions/',
    method: 'GET',
    dataType: 'json',
    success: function(data) {
        $.each(data, function(index, region) {
            $('#regionDropdown_r').append(
                $('<option></option>').val(region.code).text(region.name)
            );
        });
    },
    error: function(jqXHR, textStatus, errorThrown) {
        console.error('Error fetching regions:', textStatus, errorThrown);
    }
    });


   $('#regionDropdown_r').change(function() {
       var regionId = $(this).val();
       if(regionId == '130000000'){
        $('#provinceDropdown_r').empty().append('<option value="">Select Province</option>');;
        $('#provinceDropdown_r').attr('disabled', 'disabled');
           $('#cityDropdown_r').empty().append('<option value="">Select a City</option>');
           if (regionId) {
               $.ajax({
                   url: 'https://psgc.gitlab.io/api/regions/'+regionId+'/cities-municipalities/', // Your PHP endpoint
                   method: 'GET',
                   data: { region_id: regionId },
                   dataType: 'json',
                   success: function(data) {
                       $.each(data, function(index, city) {
                           $('#cityDropdown_r').append(
                               $('<option></option>').val(city.code).text(city.name)
                           );
                       });
                   },
                   error: function(jqXHR, textStatus, errorThrown) {
                       console.error('Error fetching cities:', textStatus, errorThrown);
                   }
               });
           }
   
       } else { 
           $('#provinceDropdown_r').removeAttr('disabled');
           $('#cityDropdown_r').empty().append('<option value="">Select a City</option>');
   
               $('#provinceDropdown_r').empty().append('<option value="">Select a Province</option>');
               if (regionId) {
                   $.ajax({
                       url: 'https://psgc.gitlab.io/api/regions/'+regionId+'/provinces/',
                       method: 'GET',
                       data: { region_id: regionId },
                       dataType: 'json',
                       success: function(data) {
                           $.each(data, function(index, city) {
                               $('#provinceDropdown_r').append(
                                   $('<option></option>').val(city.code).text(city.name)
                               );
                           });
                       },
                       error: function(jqXHR, textStatus, errorThrown) {
                           console.error('Error fetching cities:', textStatus, errorThrown);
                       }
                   });
               }
       }
     
    
   });
   
   
   
   $('#provinceDropdown_r').change(function() {
       var regionId = $(this).val();
       $('#cityDropdown_r').empty().append('<option value="">Select a City</option>');
       if (regionId) {
           $.ajax({
               url: 'https://psgc.gitlab.io/api/provinces/'+regionId+'/cities-municipalities/', // Your PHP endpoint
               method: 'GET',
               data: { region_id: regionId },
               dataType: 'json',
               success: function(data) {
                   $.each(data, function(index, city) {
                       $('#cityDropdown_r').append(
                           $('<option></option>').val(city.code).text(city.name)
                       );
                   });
               },
               error: function(jqXHR, textStatus, errorThrown) {
                   console.error('Error fetching cities:', textStatus, errorThrown);
               }
           });
       }
   });
   
   
   
   
   $('#cityDropdown_r').change(function() {
       var cityID = $(this).val();
       $('#barangayDropdown_r').empty().append('<option value="">Select a Barangay</option>');
       if (cityID) {
           $.ajax({
               url: 'https://psgc.gitlab.io/api/cities-municipalities/'+cityID+'/barangays/',
               method: 'GET',
               data: { city_id: cityID },
               dataType: 'json',
               success: function(data) {
                   $.each(data, function(index, barangay) {
                       $('#barangayDropdown_r').append(
                           $('<option></option>').val(barangay.name).text(barangay.name)
                       );
                   });
               },
               error: function(jqXHR, textStatus, errorThrown) {
                   console.error('Error fetching cities:', textStatus, errorThrown);
               }
           });
       }
   });
   


$('#senderDropdown').change(function() {

   var id = $(this).val();
   if(id == 0 ){

     $("#fullname").val('');
     $("#contact").val('');
     $("#email").val('');
     $("#address").val('');
     $("#zip").val('');
     $('#regionDropdown').empty().append('<option value="">Select Region</option>');
     $('#provinceDropdown').empty().append('<option value="">Select Province</option>');
     $('#cityDropdown').empty().append('<option value="">Select City</option>');
     $('#barangayDropdown').empty().append('<option value="">Select Barangay</option>');

      
             // Region //

             $.ajax({
                url: 'https://psgc.gitlab.io/api/regions/',
                method: 'GET',
                dataType: 'json',
                success: function(data) {
                    $.each(data, function(index, region) {
                        $('#regionDropdown').append(
                            $('<option></option>').val(region.code).text(region.name)
                        );
                  
                 
                });
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    console.error('Error fetching regions:', textStatus, errorThrown);
                }
            });

          //End Region //

   } else {

    $.ajax({
        url: urllink + '/address-book-sender-information',
        method: 'POST',
        data: { 'id': id },
        dataType: 'json',
        success: function(data) {
           $.each(data, function(index, sender) {

             $("#fullname").val(sender.firstname +' '+ sender.lastname);
             $("#contact").val(sender.contact);
             $("#email").val(sender.email);
             $("#address").val(sender.address);
             $("#zip").val(sender.zip);

              // Region //
              $('#regionDropdown').empty();
                $.ajax({
                    url: 'https://psgc.gitlab.io/api/regions/',
                    method: 'GET',
                    dataType: 'json',
                    success: function(data) {
                        $.each(data, function(index, region) {
                        if(region.code == sender.region){
                            $('#regionDropdown').append(
                                $('<option selected></option>').val(region.code).text(region.name)
                            );
                        } else {
                            $('#regionDropdown').append(
                                $('<option ></option>').val(region.code).text(region.name)
                            );
                        }
                    
                    });
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        console.error('Error fetching regions:', textStatus, errorThrown);
                    }
                });

             //End Region //

             //Start Province //
             if(sender.region == '130000000'){
                $('#provinceDropdown').attr('disabled', 'disabled');
                $('#provinceDropdown').empty().append('<option value="">Select Province</option>');
                $('#cityDropdown').empty().append('<option value="">Select a City</option>');
                if (sender.region) {

                    $.ajax({
                        url: 'https://psgc.gitlab.io/api/regions/'+sender.region+'/cities-municipalities/', // Your PHP endpoint
                        method: 'GET',
                        data: { region_id: sender.region },
                        dataType: 'json',
                        success: function(data) {
                            $.each(data, function(index, city) {
                                if(sender.city==city.code){
                                    $('#cityDropdown').append(
                                        $('<option selected></option>').val(city.code).text(city.name)
                                    );
                                } else {

                                    $('#cityDropdown').append(
                                        $('<option></option>').val(city.code).text(city.name)
                                    );
                                }
                               

                            });
                        },
                        error: function(jqXHR, textStatus, errorThrown) {
                            console.error('Error fetching cities:', textStatus, errorThrown);
                        }
                    });
                }
        
            } else { 
                $('#provinceDropdown').removeAttr('disabled');
                $('#cityDropdown').empty().append('<option value="">Select a City</option>');
        
                    $('#provinceDropdown').empty().append('<option value="">Select a Province</option>');
                    if (sender.region) {
                        $.ajax({
                            url: 'https://psgc.gitlab.io/api/regions/'+sender.region+'/provinces/',
                            method: 'GET',
                            data: { region_id: sender.region },
                            dataType: 'json',
                            success: function(data) {
                                $.each(data, function(index, city) {
                                    if(city.code == sender.province){
                                        $('#provinceDropdown').append(
                                            $('<option selected></option>').val(city.code).text(city.name)
                                        );
                                    } else {
                                        $('#provinceDropdown').append(
                                            $('<option></option>').val(city.code).text(city.name)
                                        );
                                    }
                                });
                            },
                            error: function(jqXHR, textStatus, errorThrown) {
                                console.error('Error fetching cities:', textStatus, errorThrown);
                            }
                        });
                    }
            }
            //End Province //
            // Start Ciy//

             if (sender.region) {
                $.ajax({
                    url: 'https://psgc.gitlab.io/api/provinces/'+ sender.province+'/cities-municipalities/', // Your PHP endpoint
                    method: 'GET',
                    data: { region_id:  sender.province },
                    dataType: 'json',
                    success: function(data) {
                        $.each(data, function(index, city) {
                            if(city.code == sender.city){
                                $('#cityDropdown').append(
                                    $('<option selected></option>').val(city.code).text(city.name)
                                );
                            } else {
                                $('#cityDropdown').append(
                                    $('<option></option>').val(city.code).text(city.name)
                                );
                            }
                        
                        });
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        console.error('Error fetching cities:', textStatus, errorThrown);
                    }
                });
            }
             
                

            // End City //

            // Start Barangay //

            if (sender.city) {
                $.ajax({
                    url: 'https://psgc.gitlab.io/api/cities-municipalities/'+sender.city+'/barangays/',
                    method: 'GET',
                    data: { city_id: sender.city },
                    dataType: 'json',
                    success: function(data) {
                        $.each(data, function(index, barangay) {
                            if(barangay.code == sender.barangay){
                                $('#barangayDropdown').append(
                                    $('<option selected></option>').val(barangay.name).text(barangay.name)
                                );
                            } else {
                                $('#barangayDropdown').append(
                                    $('<option></option>').val(barangay.name).text(barangay.name)
                                );
                            }
                          
                        });
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        console.error('Error fetching cities:', textStatus, errorThrown);
                    }
                });
            }

            // End Barangay //


           });
        }
    });

    }

});




$('#recipientDropdown').change(function() {

    var id = $(this).val();
 
    if(id == 0 ){
 
      $("#r_fullname").val('');
      $("#r_contact").val('');
      $("#r_email").val('');
      $("#r_address").val('');
      $("#r_zip").val('');
      $('#regionDropdown_r').empty().append('<option value="">Select Region</option>');
      $('#provinceDropdown_r').empty().append('<option value="">Select Province</option>');
      $('#cityDropdown_r').empty().append('<option value="">Select City</option>');
      $('#barangayDropdown_r').empty().append('<option value="">Select Barangay</option>');
 
       
              // Region //
 
              $.ajax({
                 url: 'https://psgc.gitlab.io/api/regions/',
                 method: 'GET',
                 dataType: 'json',
                 success: function(data) {
                     $.each(data, function(index, region) {
                         $('#regionDropdown_r').append(
                             $('<option></option>').val(region.code).text(region.name)
                         );
                   
                  
                 });
                 },
                 error: function(jqXHR, textStatus, errorThrown) {
                     console.error('Error fetching regions:', textStatus, errorThrown);
                 }
             });
 
           //End Region //
 
    } else {
 
     $.ajax({
         url: urllink + '/address-book-recipient-information',
         method: 'POST',
         data: { 'id': id },
         dataType: 'json',
         success: function(data) {
            $.each(data, function(index, recipient) {
 
              $("#r_fullname").val(recipient.firstname +' '+ recipient.lastname);
              $("#r_contact").val(recipient.contact);
              $("#r_email").val(recipient.email);
              $("#r_address").val(recipient.address);
              $("#r_zip").val(recipient.zip);
 
 
               // Region //
               $('#regionDropdown_r').empty();
                 $.ajax({
                     url: 'https://psgc.gitlab.io/api/regions/',
                     method: 'GET',
                     dataType: 'json',
                     success: function(data) {
                         $.each(data, function(index, region_r) {
                         if(region_r.code == recipient.region){
                             $('#regionDropdown_r').append(
                                 $('<option selected></option>').val(region_r.code).text(region_r.name)
                             );
                         } else {
                             $('#regionDropdown_r').append(
                                 $('<option ></option>').val(region_r.code).text(region_r.name)
                             );
                         }
                     
                     });
                     },
                     error: function(jqXHR, textStatus, errorThrown) {
                         console.error('Error fetching regions:', textStatus, errorThrown);
                     }
                 });
 
              //End Region //
 
              //Start Province //
              if(recipient.region == '130000000'){
                 $('#provinceDropdown_r').attr('disabled', 'disabled');
                 $('#provinceDropdown_r').empty().append('<option value="">Select Province</option>');
                 $('#cityDropdown_r').empty().append('<option value="">Select a City</option>');
                 if (recipient.region) {
                     $.ajax({
                         url: 'https://psgc.gitlab.io/api/regions/'+recipient.region+'/cities-municipalities/', // Your PHP endpoint
                         method: 'GET',
                         data: { region_id: recipient.region },
                         dataType: 'json',
                         success: function(data) {
                             $.each(data, function(index, city) {

                                if(recipient.city==city.code){
                                    $('#cityDropdown_r').append(
                                        $('<option selected></option>').val(city.code).text(city.name)
                                    );
                                } else {

                                    $('#cityDropdown_r').append(
                                        $('<option></option>').val(city.code).text(city.name)
                                    );
                                }
                              
                             });
                         },
                         error: function(jqXHR, textStatus, errorThrown) {
                             console.error('Error fetching cities:', textStatus, errorThrown);
                         }
                     });
                 }
         
             } else { 
                 $('#provinceDropdown_r').removeAttr('disabled');
                 $('#cityDropdown_r').empty().append('<option value="">Select a City</option>');
         
                     $('#provinceDropdown_r').empty().append('<option value="">Select a Province</option>');
                     if (recipient.region) {
                         $.ajax({
                             url: 'https://psgc.gitlab.io/api/regions/'+recipient.region+'/provinces/',
                             method: 'GET',
                             data: { region_id: recipient.region },
                             dataType: 'json',
                             success: function(data) {
                                 $.each(data, function(index, city) {
                                     if(city.code == recipient.province){
                                         $('#provinceDropdown_r').append(
                                             $('<option selected></option>').val(city.code).text(city.name)
                                         );
                                     } else {
                                         $('#provinceDropdown_r').append(
                                             $('<option></option>').val(city.code).text(city.name)
                                         );
                                     }
                                 });
                             },
                             error: function(jqXHR, textStatus, errorThrown) {
                                 console.error('Error fetching cities:', textStatus, errorThrown);
                             }
                         });
                     }
             }
             //End Province //
             // Start Ciy//
 
              if (recipient.region) {
                 $.ajax({
                     url: 'https://psgc.gitlab.io/api/provinces/'+ recipient.province+'/cities-municipalities/', // Your PHP endpoint
                     method: 'GET',
                     data: { region_id:  recipient.province },
                     dataType: 'json',
                     success: function(data) {
                         $.each(data, function(index, city) {
                             if(city.code == recipient.city){
                                 $('#cityDropdown_r').append(
                                     $('<option selected></option>').val(city.code).text(city.name)
                                 );
                             } else {
                                 $('#cityDropdown_r').append(
                                     $('<option></option>').val(city.code).text(city.name)
                                 );
                             }
                         
                         });
                     },
                     error: function(jqXHR, textStatus, errorThrown) {
                         console.error('Error fetching cities:', textStatus, errorThrown);
                     }
                 });
             }
              
                 
 
             // End City //
 
             // Start Barangay //
 
             if (recipient.city) {
                 $.ajax({
                     url: 'https://psgc.gitlab.io/api/cities-municipalities/'+recipient.city+'/barangays/',
                     method: 'GET',
                     data: { city_id: recipient.city },
                     dataType: 'json',
                     success: function(data) {
                         $.each(data, function(index, barangay) {
                             if(barangay.code == recipient.barangay){
                                 $('#barangayDropdown_r').append(
                                     $('<option selected></option>').val(barangay.name).text(barangay.name)
                                 );
                             } else {
                                 $('#barangayDropdown_r').append(
                                     $('<option></option>').val(barangay.name).text(barangay.name)
                                 );
                             }
                           
                         });
                     },
                     error: function(jqXHR, textStatus, errorThrown) {
                         console.error('Error fetching cities:', textStatus, errorThrown);
                     }
                 });
             }
 
             // End Barangay //
 
 
            });
         }
     });
 
     }
 
 });

 $('#order_item_0').change(function() {

    var id = $(this).val();

    $.ajax({
        url: urllink + '/get-item-information',
        method: 'POST',
        data: { id: id },
        dataType: 'json',
        success: function(data) {
            $.each(data, function(index, items) {
 
                $("#declared_amount_0").val(items.declared_value);
                $("#total_declared_amount_0").val(items.declared_value);
                $("#materials_0").html(items.materials);
                $("#description_0").html(items.description);
                $("#item_qty_0").show();
                $("#item_qty_0").show();
                $("#add_item").show();
              

            });
        }
    });


 });

// ** ADD MINUS ** //
function incrementValue(e,id) {

    e.preventDefault();

    var fieldName = $(e.target).data('field');
    var parent = $(e.target).closest('div');
    var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);
    var d_amount = $("#declared_amount_"+id).val();
    var total    = d_amount * (currentVal + 1);
    
    calcTotalAmount(id,currentVal);

    $("#total_declared_amount_"+id).val(total);

    $("#total_amount_"+id).html(total);

    if (!isNaN(currentVal)) {
      parent.find('input[name=' + fieldName  + ']').val(currentVal + 1);
    } else {
      parent.find('input[name=' + fieldName  +  ']').val(0);
    }
}
  
  function decrementValue(e,id) {
    e.preventDefault();
    var fieldName = $(e.target).data('field');
    var parent = $(e.target).closest('div');
    var currentVal = parseInt(parent.find('input[name=' + fieldName +  ']').val(), 10);

    var d_amount = $("#declared_amount_"+id).val();
    var total = $("#total_declared_amount_"+id).val();

    calcTotalAmount_minus(id,currentVal);


    $("#total_declared_amount_"+id).val(total - d_amount);

    $("#total_amount_"+id).html(total- d_amount);

    if (!isNaN(currentVal) && currentVal > 0) {
      parent.find('input[name=' + fieldName +  ']').val(currentVal - 1);
    } else {
      parent.find('input[name=' + fieldName  +  ']').val(0);
    }
  }
  
  $('.input-group').on('click', '.button-plus-0', function(e) {
    incrementValue(e, id=0);
  });
  
  $('.input-group').on('click', '.button-minus-0', function(e) {
    decrementValue(e, id=0);
  });
  

 // ** Commodity Information ** //
 $(function () {

    // Start counting from the third row
    var counter = 1;
    $("#add_item").on("click", function (event) {

        event.preventDefault();

        $("#count_table").val(counter+1);

        $.ajax({
			url: urllink + '/get-item',
			type: "POST",
            dataType: 'json',
			success: function (data) {
                $.each(data, function(index, items) {
                    var cnt = (counter -1);
                    $("#order_item_"+cnt).append(
                        '<option class="opt_sel_' +
                            items.id +
                            '" value="' +
                            items.id +
                            '">' +
                            items.item_name + 
                            "</option>"
                    );
                });
			}
		});

     

        var newRow = $("<tr>");
        var cols = '';

        var id = $("#order_item_0").val();
       

        // Table columns
        cols += '<td><select class="form-control" type="text"  onchange="displayItem(' + counter +')" id="order_item_'+ counter + '" name="order_item_'+ counter + '"><option value=""> - Select Item - </option></select></td>';
        cols += '<td><div id ="materials_'+ counter + '"></div></td>';
        cols += '<td><div id ="description_'+ counter + '"></div></td>';
        cols += '<td> <div class="input-group text-center" id="item_qty_'+ counter + '" style="display:none;"><input type="button" value="-" class="btn btn-yellow bootstrap-touchspin-up button-minus-'+ counter + '" data-field="quantity_'+ counter + '"><input type="number"  data-parsley-excluded="true" class="form-control" step="1" max="" value="0" name="quantity_'+ counter + '" class="quantity-field"><input type="button" value="+" class="btn btn-yellow bootstrap-touchspin-up button-plus-'+ counter + '" data-field="quantity_'+ counter + '"></div></td>';
        cols += '<td style="text-align: center; vertical-align: middle;"><input type="hidden" id="declared_amount_'+ counter + '" name="declared_amount_'+ counter + '"><input type="hidden" id="total_declared_amount_'+ counter + '"  class="sum_total" name="total_declared_amount_'+ counter + '"><div id ="total_amount_'+ counter + '"></div></td>';

        cols += '<td><button class="btn btn-danger rounded-0" id ="deleteRow"><i class="fa fa-trash"></i></button</td>';

        // Insert the columns inside a row
        newRow.append(cols);

        // Insert the row inside a table
        $("table#commodity_table tbody").append(newRow);

        // Increase counter after each row insertion
        counter++;

    });


    // Remove row when delete btn is clicked
    $("table").on("click", "#deleteRow", function (event) {
        $(this).closest("tr").remove();
        counter -= 1
    });
});


function displayItem(id) {
	var item_id = $("#order_item_" + id).val();
		$.ajax({
			url: urllink + '/get-item-information',
			type: "POST",
			data: { id: item_id },
            dataType: 'json',
			success: function (data) {
                $.each(data, function(index, items) {
				$("#materials_" + id).html(items.materials);
                $("#description_" + id).html(items.description);
                $("#declared_amount_" + id).val(items.declared_value);
                $("#total_declared_amount_"+id).val(items.declared_value);
                $("#item_qty_" + id).show();

                  $('.input-group').on('click', '.button-plus-'+ id, function(e) {
                    incrementValue(e,id);
                  });
                  
                  $('.input-group').on('click', '.button-minus-'+ id, function(e) {
                    decrementValue(e,id);
                  });
                  
                });
			}
		});
}


function getValues() {
    var rows = document.querySelectorAll("tr.sum_total");
    rows.forEach(function (currentRow) {

        var numberUsed = Number(currentRow.querySelector('#numberUsed').value);
        var price = Number(currentRow.querySelector('#price').value);
        var inPackage = Number(currentRow.querySelector('.sum_total').value);
        var revenue = 0;

        document.querySelectorAll('numberUsed');

        if (numberUsed == "") {
            if (isNaN(inPackage) || isNaN(price)) {
                return;
            }
            revenue = price * inPackage;
        }
        else {
            if (isNaN(numberUsed) || isNaN(price)) {
                return;
            }
            revenue = price * numberUsed;
        }
        var value = revenue * 5;
        currentRow.querySelector("#revenue").innerHTML = revenue;
        currentRow.querySelector("#value").innerHTML = value;
    });

}

function calcTotalAmount(t,v) {
       var total = 0 ;

       var start = $("#declared_amount_"+t).val();
       $("#cod_amount").hide();

       $('#valuation').prop('checked', false).siblings().remove();
       new Switchery($('#valuation')[0], {
        size:"small",
        color: '#64b0f2'
      });

      $('#cod').prop('checked', false).siblings().remove();
      new Switchery($('#cod')[0], {
       size:"small",
       color: '#64b0f2'
       });
            
      $(".sum_total").each(function(){
         if(!isNaN(parseInt($(this).val())))
         {
           total+=parseInt($(this).val());  
         } else {
           total+=parseInt($(this).val());  
        }
      });

      if(v == 0){
        var t_total = parseInt(total);
      } else {
        var t_total = parseInt(total) +  parseInt(start);
      }

      if(!isNaN(parseInt(t_total))){
        $("#total_value_amount_val").val(t_total);
        $("#total_value_amount").html("<h5><b>TOTAL DECLARED VALUE: "+ t_total.toFixed(2)+"</b></h5>");
      } else {
        $("#total_value_amount_val").val(start);
        $("#total_value_amount").html("<h5><b>TOTAL DECLARED VALUE: "+ t_total.toFixed(2)+"</b></h5>");
      }
    
}

function calcTotalAmount_minus(t,a) {
    var total = 0 ;

    var start = $("#declared_amount_"+t).val();

    $('#valuation').attr('checked', false); 
    $('#cod').attr('checked', false); 

    $("#cod_amount").hide();


     $('#valuation').prop('checked', false).siblings().remove();
       new Switchery($('#valuation')[0], {
        size:"small",
        color: '#64b0f2'
      });

      $('#cod').prop('checked', false).siblings().remove();
      new Switchery($('#cod')[0], {
       size:"small",
       color: '#64b0f2'
       });

   $(".sum_total").each(function(){
      if(!isNaN(parseInt($(this).val())))
      {
        total+=parseInt($(this).val());  
      } else {
        total+=parseInt($(this).val());  
     }
   });

   var t_total = (parseInt(total) -  parseInt(start));

   if(!isNaN(parseInt(t_total))){
     $("#total_value_amount_val").val(t_total);
     $("#total_value_amount").html("<h5><b>TOTAL DECLARED VALUE : "+ t_total.toFixed(2)+"</b></h5>");
   } else {
     $("#total_value_amount_val").val(start);
     $("#total_value_amount").html("<h5><b>TOTAL DECLARED VALUE : "+ t_total.toFixed(2)+"</b></h5>");
   }
 
}


// Package Information //

$('#packagetype').on('change', function() {
    
   var ptype = this.value;

   $('#cod-c').show();
   $('#valuation-c').show();

   $('#valuation').prop('checked', false).siblings().remove();
   new Switchery($('#valuation')[0], {
    size:"small",
    color: '#64b0f2'
   });

   $('#cod').prop('checked', false).siblings().remove();
   new Switchery($('#cod')[0], {
   size:"small",
   color: '#64b0f2'
   });
 
   $("#valuation-amount").html("");
   $("#cod-amount").html("");

   $("#valuation_amount").val(0);
   $("#cod_amount").val(0);

   $("#height").val('');
   $("#width").val('');
   $("#length").val('');

   $("#discounts").hide();


   if(ptype == 'Pouch'){

        $("#pouch").show();
        $("#pouch_amount").show();

        $("#total-amount-fee").html("<td>Total Fee : </td><td></td>");
        $("#freight-weight").val('');
        $("#packages-amount").html("<td>Pouch Fee : </td><td></td>");


        $("#freight").hide();
        $("#packages").html("<td>Package Type :</td><td> Pouch</td>");
        $("#total-amount").val(0);

        var val = $("#valuation_amount").val();
        var cod = $("#cod_amount").val();

        $('#pouch_size').on('change', function() {
            var pouch_size = this.value;

            $.ajax({
                url: urllink + '/get-pouch-amount',
                method: 'POST',
                data: { id: pouch_size },
                dataType: 'json',
                success: function(data) {
                    $.each(data, function(index, items) {
                        
                        $("#discounts").show();
                        $("#pay_option").show();

                        var discount = $("#discounted").val();
                        var discounted = parseFloat(discount)/100;
                        var ptotal     = (parseInt(val) + parseInt(cod) + parseInt(items.amount))  * discounted;

                        $("#discounts").html("<td>Discount  : </td><td>" + parseFloat(ptotal).toFixed(2) + "</td>");


                        $("#p_amount").val(items.amount);
                        $("#packages-amount").html("<td>Pouch Fee : </td><td>" + items.amount + "</td>");

                        var p_total = (parseInt(val) + parseInt(cod) + parseInt(items.amount)) - ptotal;

                        $("#total-amount-fee").html("<td>Total Fee : </td><td>" +parseFloat(p_total).toFixed(2) + "</td>");
                        $("#total-amount").val(parseFloat(p_total).toFixed(2));

        
                    });
                }
            });
             
         });

    } else {

        $("#pouch").hide();
        $("#pouch_amount").hide();
        $("#pay_option").show();

        $("#p_amount").val("");
        $("#pouch_size").val("");
        $("#total-amount-fee").html("<td>Total Fee : </td><td></td>");
        $("#packages-amount").html("<td>Package Fee : </td><td></td>");
        $("#total-amount").val(0);

        $("#freight").show();
        $("#packages").html("<td>Package Type :</td><td> Regular Freight</td>");

    }
});


$("#freight-weight").bind('keyup mouseup', function () {

    var freight = this.value;

    var val = $("#valuation_amount").val();
    var cod = $("#cod_amount").val();

    var height = $("#height").val();
    var width  = $("#width").val();
    var length = $("#length").val();

    $.ajax({
        url: urllink + '/get-freight-amount',
        method: 'POST',
        data: { id: freight },
        dataType: 'json',
        success: function(data) {
            $.each(data, function(index, items) {
                
                $("#discounts").show();

                var discount = $("#discounted").val();
                var discounted = parseFloat(discount)/100;

                var ptotal     =  parseInt(items.rate)  * discounted;

                $("#discounts").html("<td>Discount Fee : </td><td>" + parseFloat(ptotal).toFixed(2) + "</td>");


                var f_total = parseInt(val) + parseInt(cod) + parseInt(items.rate) - ptotal;

                $("#total-amount").val(f_total);
                $("#freight-amount").val(parseFloat(items.rate - ptotal).toFixed(2));
                $("#total-amount-fee").html("<td>Total Fee : </td><td>" + f_total.toFixed(2) + "</td>");
                $("#packages-amount").html("<td>Package Fee : </td><td>" + items.rate + "</td>");


                var lwh    = (parseFloat(height) * parseFloat(width) * parseFloat(length)) / parseInt(3500);

                if(!isNaN(parseInt(lwh))){

                    if(parseInt(items.rate) > parseInt(lwh)){

                        $("#total-amount").val(f_total);
                        $("#total-amount-fee").html("<td>Total Fee : </td><td>" + f_total.toFixed(2)+ "</td>");
                        $("#packages-amount").html("<td>Package Fee : </td><td>" + items.rate + "</td>");

                    } else {

                        var t_lwh = parseInt(val) + parseInt(cod) + parseInt(lwh);
                        $("#total-amount").val(parseInt(t_lwh));
                        $("#total-amount-fee").html("<td>Total Fee : </td><td>" + parseInt(t_lwh) + "</td>");
                        $("#packages-amount").html("<td>Package Fee : </td><td>" + parseInt(lwh) + "</td>");

                    }
                }
            });
        }
    });
          
});

$('#valuation').change(function () {
    if (this.checked)
    {
        var amount = $("#total_value_amount_val").val();
        if(amount <= parseInt('2499')){
            var val = 25;
        } else {
            var val = parseInt(amount) * parseFloat(0.01);
        }
        
        var pammount = $("#total-amount").val();
        $("#total-amount").val(parseFloat(pammount) + parseFloat(val));
        $("#total-amount-fee").html("<td> Total Amount :  </td><td>" + (parseFloat(pammount) + parseFloat(val)) + "</td>");
        $("#valuation-amount").html("<td>Valuation Amount : </td><td> " + val.toFixed(2)  + "</td>");

        $("#valuation_amount").val(val);

    } else {

        var amount = $("#total_value_amount_val").val();
        if(amount <= parseInt('2499')){
            var val = 25;
        } else {
            var val = parseInt(amount) * parseFloat(0.01);
        }
        var pammount = $("#total-amount").val();
        $("#total-amount").val(parseFloat(pammount) - parseFloat(val));
        $("#total-amount-fee").html("<td> Total Amount :  </td><td>" + (parseFloat(pammount) - parseFloat(val)) + "</td>");
        $("#valuation-amount").html("");

        $("#valuation_amount").val(val);

    }
 });

 
$('#cod').change(function () {
    if (this.checked)
    {
        var amount = $("#total_value_amount_val").val();
        if(amount <= parseInt('2499')){
            var val = 25;
        } else {
            var val = parseInt(amount) * parseFloat(0.01);
        }

        var pammount = $("#total-amount").val();
        $("#cod_amount").show();
        $("#cod_amount_value").val(amount);
        $("#total-amount").val(parseFloat(pammount) + parseFloat(val));
        $("#total-amount-fee").html("<td> Total Fee :  </td><td>" + (parseFloat(pammount) + parseFloat(val)) + "</td>");
        $("#cod-amount").html("<td>COD Fee : </td><td> " + val.toFixed(2)  + "</td>");
        $("#cod_amount").val(val);

    } else {
        var amount = $("#total_value_amount_val").val();
        if(amount <= parseInt('2499')){
            var val = 25;
        } else {
            var val = parseInt(amount) * parseFloat(0.01);
        }
        $("#cod_amount").hide();
        $("#cod_amount_value").val(0);
        var pammount = $("#total-amount").val();
        $("#total-amount").val(parseFloat(pammount) - parseFloat(val));
        $("#total-amount-fee").html("<td> Total Fee :  </td><td>" + (parseFloat(pammount) - parseFloat(val)) + "</td>");
        $("#cod_amount").val(val);
        $("#cod-amount").html("" );
    }
 });

 $('#cod_amount_value').change(function () {
  
        var amount = $("#cod_amount_value").val();
        if(amount <= parseInt('2499')){
            var val = 25;
        } else {
            var val = parseInt(amount) * parseFloat(0.01);
        }

        var pammount = $("#total-amount").val();
        $("#cod_amount").show();
        $("#cod_amount_value").val(amount);
        $("#total-amount").val(parseFloat(pammount) + parseFloat(val));
        $("#total-amount-fee").html("<td> Total Fee :  </td><td>" + (parseFloat(pammount) + parseFloat(val)) + "</td>");
        $("#cod-amount").html("<td>COD Fee : </td><td> " + val.toFixed(2)  + "</td>");
        $("#cod_amount").val(val);

 });


 $('#height').change(function () {

   var height = this.value;

   if(height =="" || height == 0){
    var lwh = $("#freight-amount").val();
   } else {
    var width  = $("#width").val();
    var length = $("#length").val();
    var lwh    = (parseFloat(height) * parseFloat(width) * parseFloat(length)) / parseInt(3500);

   }




   var val = $("#valuation_amount").val();
   var cod = $("#cod_amount").val();

   var freight = $("#freight-amount").val();

   var discount = $("#discounted").val();
   var discounted = parseFloat(discount)/100;

   var ptotal     =  parseFloat(lwh)  * discounted;

   $("#discounts").html("<td>Discount Amount : </td><td>" + parseFloat(ptotal).toFixed(2) + "</td>");


   $("#lwh").val(parseFloat(lwh - ptotal).toFixed(2));

   if(parseInt(freight) > parseInt(lwh)){
        
       var f_total = parseInt(val) + parseInt(cod) + parseInt(freight);

        $("#total-amount").val( parseFloat(f_total).toFixed(2));
        $("#total-amount-fee").html("<td>Total Fee : </td><td>" + parseFloat(f_total).toFixed(2) + "</td>");
        $("#packages-amount").html("<td>Package Fee : </td><td>" + parseFloat(freight).toFixed(2) + "</td>");

    } else {
        var f_total = (parseFloat(val) + parseFloat(cod) + parseFloat(lwh)) - ptotal;
        $("#total-amount").val( parseFloat(f_total).toFixed(2));
        $("#total-amount-fee").html("<td>Total Fee: </td><td>" + parseFloat(f_total).toFixed(2) + "</td>");
        $("#packages-amount").html("<td>Package Fee : </td><td>" + parseFloat(lwh).toFixed(2) + "</td>");
   }

 });

