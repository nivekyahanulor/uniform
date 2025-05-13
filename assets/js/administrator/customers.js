	
    var urllink = UrlLink;


    //** ITEMS REPORTS TABLE DATA **//
    $(document).ready(function () {
    var url   =  urllink + '/process-table-admin-customer';
    var table = $('#customer-table').DataTable({
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
    $('#customer-table tbody').on( 'click', 'button', function () {
            var action = this.id;
            var data = table.row( $(this).parents('tr') ).data();
            if (action=='btn-details-data'){
                window.location.href = UrlLink +  "administrator/customer-details?q="+data[0];
            }
            if (action=='btn-customer-delete'){
                $('#delete-customer').modal('show'); 
                $("#myModalLabel").html(data[1]);
                $(".customer_id").val(data[0]);

            }
        } );
    

    });


    
   $('.deleteCustomer').submit(function(e) {

	$('.btn').prop('disabled', true);
	 var customer_id    = $('.customer_id').val();
		e.preventDefault();
			setTimeout(function() {
			$.ajax({
			   type: "POST",
			   url:UrlLink+'delete-customer-data',
			   data : {
						 'customer_id' : customer_id,
                      

				},
			   success: function(data)
			   {
              
                    Swal.fire({
                        icon: "success",
                        title: "Customer Deleted!",
                        text: "Success",
                        customClass: {
                            
                            confirmButton: "btn btn-primary waves-effect waves-light"
                        },
                        buttonsStyling: !1
                    })
                    setTimeout(function() {  window.location.reload(); }, 2000);
                   
               
			   }
		   });
		}, 3000);
   
}); 