
var urllink = UrlLink;


$(document).ready(function() {

   
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
   });
   
   
   
   $('#regionDropdown').change(function() {
       var regionId = $(this).val();
   
       if(regionId == '130000000'){
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
                           $('<option></option>').val(barangay.code).text(barangay.name)
                       );
                   });
               },
               error: function(jqXHR, textStatus, errorThrown) {
                   console.error('Error fetching cities:', textStatus, errorThrown);
               }
           });
       }
   });
   
   
   $('#btn-cancel').click(function(e) {
        e.preventDefault();
        window.location.href = "address-book";
    });


    $('#add-sender-address-book').submit(function(e) {
   
       $('#process-add-item').html('<center><font size="3" color="#000"><i class="fa fa-spinner fa-spin"></i> Processing Address Book ..</font></center>');
       e.preventDefault();

       $("#btn-add").hide();
       $("#btn-update").hide();
       $("#btn-cancel").hide();

       var submitprocess = $('#submitprocess').val();
       var firstname     = $('#firstname').val();
       var lastname      = $('#lastname').val();
       var contact       = $('#contact').val();
       var email         = $('#email').val();
       var address       = $('#address').val();
       var region        = $('#regionDropdown').val();
       var province      = $('#provinceDropdown').val();
       var barangay      = $('#barangayDropdown').val();
       var city	         = $('#cityDropdown').val();
       var zip		     = $('#zip').val();
       var id		     = $('#id').val();

       setTimeout(function() {
           $.ajax({
               type: "POST",
               url: urllink + '/process-sender-address-book',
               data: {
   
                   'firstname'     : firstname,
                   'lastname'      : lastname,
                   'contact'       : contact,
                   'email'         : email,
                   'address'       : address,
                   'region'        : region,
                   'province'      : province,
                   'barangay'      : barangay,
                   'city'          : city,
                   'zip'           : zip,
                   'submitprocess' : submitprocess,
                   'id'            : id,

               },
               success: function(data) {
                   $('#process-add-item').html('<center><font size="3" color="#000"><i class="fa fa-check"></i> Success! </font></center>');
                   setTimeout(function() {
                      $("#sender-address-table").DataTable().ajax.reload();

                      if(submitprocess == 'update'){

                        $("#btn-update").hide();
                        $("#btn-cancel").hide();

                        $("#btn-add").show();
                        $('#firstname').val('');
                        $('#lastname').val('');
                        $('#contact').val('');
                        $('#email').val('');
                        $('#address').val('');
                        $('#regionDropdown').val('');
                        $('#provinceDropdown').val('');
                        $('#barangayDropdown').val('');
                        $('#cityDropdown').val('');
                        $('#zip').val('');
                        $('#id').val(0);
                        $('#submitprocess').val('add');

                      } else {
                            $("#btn-add").show();
                            $('#firstname').val('');
                            $('#lastname').val('');
                            $('#contact').val('');
                            $('#email').val('');
                            $('#address').val('');
                            $('#regionDropdown').val('');
                            $('#provinceDropdown').val('');
                            $('#barangayDropdown').val('');
                            $('#cityDropdown').val('');
                            $('#zip').val('');
                            $('#id').val(0);
                            $('#submitprocess').val('add');
                    }

                    $('#process-add-item').empty();

                   }, 1000);
               }
           });
       }, 3000);
	      
    });
	   



   
   
    //**SENDER ADDRESS BOOK  TABLE DATA **//
    
      $(document).ready(function () {
        var url   =  urllink + '/process-table-sender-address-book';
        var table = $('#sender-address-table').DataTable({
            language: {
                paginate: {
                    previous: "<i class='mdi mdi-chevron-left'>",
                    next: "<i class='mdi mdi-chevron-right'>"
                }
            },
            drawCallback: function() {
                $(".dataTables_paginate > .pagination").addClass("pagination-rounded")
            },
            'ajax': {
            type: 'POST',
            'url': url,
            'data': function (d) {
                return JSON.stringify( d );
            },
            "dataSrc": function (json) {
            $("#mydata").val(json.recordsTotal);
            return json.data;
                }
            }, "columnDefs": [
                    {
                        "targets": [ 0 ],
                        "visible": false,
                        "searchable": false
                    }
                ] 
        });
        $('#sender-address-table tbody').on( 'click', 'button', function () {
                var action = this.id;
                var data = table.row( $(this).parents('tr') ).data();

                if (action=='btn-delete-data'){

                    swal.fire({
                        title: 'Are you sure?',
                        text: "Are you sure to delete this address book?",
                        showCancelButton: true,
                        cancelButtonColor: '#000',
                        confirmButtonText: "Yes, delete it!",
                        confirmButtonColor: '#000',
                        

                    }).then((result) => {
                         if(result.isConfirmed){

                            $.ajax({
                                url: UrlLink + '/delete-address-book',
                                method: 'POST',
                                data: { 'id': data[0] },
                                dataType: 'json',
                                success: function(data) {
                                }
                            }); 

                            Swal.fire({
                                icon: "success",
                                title: "Deleted!",
                                text: "Address Book Deleted",
                                customClass: {
                                    confirmButton: "btn btn-primary waves-effect waves-light"
                                },
                                buttonsStyling: !1,
                                timer:1000,
                                didOpen: () => {
                                  Swal.getHtmlContainer().querySelector('#stop-timer').addEventListener('click', e => {
                                    e.preventDefault()
                                    Swal.stopTimer()
                                  })
                                }
                            })
                            $("#sender-address-table ").DataTable().ajax.reload();
                         }
                    }).catch(swal.noop);
                   


                }
                if (action=='btn-edit-data'){
                
                    $("#btn-add").hide();
                    $("#btn-update").show();
                    $("#btn-cancel").show();
                    $("#submitprocess").val('update');
                    $("#id").val(data[0]);
                    $('#regionDropdown').empty().append('<option value="">Select Region</option>');
                    $('#provinceDropdown').empty().append('<option value="">Select Province</option>');
                    $('#cityDropdown').empty().append('<option value="">Select City</option>');
                    $('#barangayDropdown').empty().append('<option value="">Select Barangay</option>');

                    $.ajax({
                        type : "POST",
                        url  : urllink +'address-book-sender-information',
                        data : {
                                  'id'        : data[0], 
                         },
                         dataType: 'json',
                        success: function(data)
                        {

                            $.each(data, function(index, address) {
        
                                $("#firstname").val(address.firstname);
                                $("#lastname").val(address.lastname);
                                $("#contact").val(address.contact);
                                $("#email").val(address.email);
                                $("#address").val(address.address);
                                $("#zip").val(address.zip);

                                // REGION //
                                $.ajax({
                                    url: 'https://psgc.gitlab.io/api/regions/',
                                    method: 'GET',
                                    dataType: 'json',
                                    success: function(data) {

                                        $.each(data, function(index, region) {
                                            if(region.code == address.region){
                                                var select_region = $('<option selected></option>').val(region.code).text(region.name)
                                            } else{
                                                var select_region = $('<option ></option>').val(region.code).text(region.name)
                                            }
                                              $('#regionDropdown').append(
                                            select_region
                                        );
                                        });

                                      
                                    },
                                    error: function(jqXHR, textStatus, errorThrown) {
                                        console.error('Error fetching regions:', textStatus, errorThrown);
                                    }
                                });

                                // Province //
                                    var regionId =address.region;
                                
                                    if(regionId == '130000000'){
                                        $('#provinceDropdown').attr('disabled', 'disabled');
                                
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
                                                            if(city.code == address.province){
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

                                     //  Ciy//

                                     if (address.region) {
                                        if(address.region =='130000000'){
                                            $('#cityDropdown').empty().append('<option value="">Select  City</option>');
                                            if (regionId) {
                                                $.ajax({
                                                    url: 'https://psgc.gitlab.io/api/regions/130000000/cities-municipalities/', // Your PHP endpoint
                                                    method: 'GET',
                                                    data: { region_id: regionId },
                                                    dataType: 'json',
                                                    success: function(data) {
                                                        $.each(data, function(index, city) {
                                                            if(city.code == address.city){
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
                                            $.ajax({
                                                url: 'https://psgc.gitlab.io/api/provinces/'+ address.province+'/cities-municipalities/', // Your PHP endpoint
                                                method: 'GET',
                                                data: { region_id:  address.province },
                                                dataType: 'json',
                                                success: function(data) {
                                                    $.each(data, function(index, city) {
                                                        if(city.code == address.city){
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
                                      
                                    }
                                      // Start Barangay //

                                        if (address.city) {
                                            $.ajax({
                                                url: 'https://psgc.gitlab.io/api/cities-municipalities/'+address.city+'/barangays/',
                                                method: 'GET',
                                                data: { city_id: address.city },
                                                dataType: 'json',
                                                success: function(data) {
                                                    $.each(data, function(index, barangay) {
                                                        if(barangay.code == address.barangay){
                                                            $('#barangayDropdown').append(
                                                                $('<option selected></option>').val(barangay.code).text(barangay.name)
                                                            );
                                                        } else {
                                                            $('#barangayDropdown').append(
                                                                $('<option></option>').val(barangay.code).text(barangay.name)
                                                            );
                                                        }
                                                    
                                                    });
                                                },
                                                error: function(jqXHR, textStatus, errorThrown) {
                                                    console.error('Error fetching cities:', textStatus, errorThrown);
                                                }
                                            });
                                        }
                                                            
                                                            
                                                        

                              });
                        }
                    });
                }
            } );
        
    
     });
    
    