	
    var urllink = UrlLink;

    //** ITEMS REPORTS TABLE DATA **//
    $(document).ready(function () {
    var url   =  urllink + '/process-table-admin-riders';
    var table = $('#riders-table').DataTable({
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
            console.log(d.order);
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
    $('#riders-table tbody').on( 'click', 'button', function () {
            var action = this.id;
            var data = table.row( $(this).parents('tr') ).data();
            if (action=='btn-approve-rider'){
                $('#rider-approve').modal('show'); 
                $(".rider_id").val(data[0]);
            }
            if (action=='btn-deactivate-rider'){
                $('#rider-deactivate').modal('show'); 
                $(".rider_id").val(data[0]);
            }
            if (action=='btn-activate-rider'){
                $('#rider-activate').modal('show'); 
                $(".rider_id").val(data[0]);
            }
            if (action=='btn-view-rider'){
                window.location.href = UrlLink +  "administrator/rider-records?q="+data[0];
            }
        } );
    

    });


    $('.deactivate-rider').submit(function(e) {

        $('.btn').prop('disabled', true);
    
         var rider      = $('.rider_id').val();

            e.preventDefault();
                setTimeout(function() {
                $.ajax({
                   type: "POST",
                   url:UrlLink+'post-rider-deactivated',
                   data : {
                             'id'      : rider, 
                    },
                   success: function(data)
                   {
                    if(data == '1'){
                        Swal.fire({
                            icon: "success",
                            title: "Success!",
                            text: "Rider Deactivated!",
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


    $('.activate-rider').submit(function(e) {

        $('.btn').prop('disabled', true);
    
         var rider      = $('.rider_id').val();

            e.preventDefault();
                setTimeout(function() {
                $.ajax({
                   type: "POST",
                   url:UrlLink+'post-rider-approved',
                   data : {
                             'id'      : rider, 
                    },
                   success: function(data)
                   {
                    if(data == '1'){
                        Swal.fire({
                            icon: "success",
                            title: "Success!",
                            text: "Rider Activated!",
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
    
    
   $('.approved-rider').submit(function(e) {

	$('.btn').prop('disabled', true);

	 var rider      = $('.rider_id').val();
		e.preventDefault();
			setTimeout(function() {
			$.ajax({
			   type: "POST",
			   url:UrlLink+'post-rider-approved',
			   data : {
						 'id'      : rider, 
				},
			   success: function(data)
			   {
                if(data == '1'){
                    Swal.fire({
                        icon: "success",
                        title: "Success!",
                        text: "Rider Approved!",
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
