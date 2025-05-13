
   // DEFAULT SENDER // 

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
   

   $('#is_cod').change(function() {
    var cod = $(this).val();

    if(cod == 1){
        $("#cod_amount").show();
    } else {
        $("#cod_amount").hide();
    }

    
});


