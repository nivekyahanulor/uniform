	
    var urllink = UrlLink;

    $('#btn-cancel').click(function(e) {
        e.preventDefault();
        window.location.href = "items";
    });

	$('#addItem').submit(function(e) {

    $('#process-add-item').html('<center><font size="3" color="#000"><i class="fa fa-spinner fa-spin"></i> Processing Item..</font></center>');

    $("#btn-update").hide();
    $("#btn-cancel").hide();
    $("#btn-add").hide();

    e.preventDefault();
	
    var item_name     = $('#item_name').val();
    var description   = $('#description').val();
    var materials     = $('#materials').val();
    var amount		  = $('#amount').val();
    var id		      = $('#id').val();
    var submitprocess = $('#submitprocess').val();
	
    setTimeout(function() {
        $.ajax({
            type: "POST",
            url: urllink + '/process-add-item',
            data: {
                'item_name'     : item_name,
                'description'   : description,
                'materials'     : materials,
                'amount'        : amount,
                'submitprocess' : submitprocess,
                'id'            : id,
            },
            success: function(data) {
                $('#process-add-item').html('<center><font size="3" color="#000"><i class="fa fa-check"></i> Success! </font></center>');
                setTimeout(function() {

                    if(submitprocess == 'update'){
                        $("#btn-update").hide();
                        $("#btn-cancel").hide();
                        $("#btn-add").show();
                         $('#item_name').val('');
                         $('#description').val('');
                         $('#materials').val('');
                         $('#amount').val('');
                         $('#submitprocess').val('add');
                         $('#id').val(0);

                    } else{
                        $("#btn-add").show();
                        $('#item_name').val('');
                        $('#description').val('');
                        $('#materials').val('');
                        $('#amount').val('');
                    }
   
                    $('#process-add-item').html("");
                    $("#item-table").DataTable().ajax.reload();
                }, 1000);
            }
        });
    }, 3000);

	});

    //** ITEMS REPORTS TABLE DATA **//
    $(document).ready(function () {
    var url   =  urllink + '/process-table-item';
    var table = $('#item-table').DataTable({
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
    $('#item-table tbody').on( 'click', 'button', function () {
            var action = this.id;
            var data = table.row( $(this).parents('tr') ).data();
            
            if (action=='btn-delete-data'){
                swal.fire({
                    title: 'Are you sure?',
                    text: "Are you sure to delete this Item?",
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#000',
                    confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                     if(result.isConfirmed){

                        $.ajax({
                            url: UrlLink + '/delete-item',
                            method: 'POST',
                            data: { 'id': data[0] },
                            dataType: 'json',
                            success: function(data) {
                            }
                        }); 
                        Swal.fire({
                            icon: "success",
                            title: "Deleted!",
                            text: "Item Deleted",
                            customClass: {
                                confirmButton: "btn btn-primary waves-effect waves-light"
                            },
                            buttonsStyling: !1,
                            timer:2000,
                            didOpen: () => {
                              Swal.getHtmlContainer().querySelector('#stop-timer').addEventListener('click', e => {
                                e.preventDefault()
                                Swal.stopTimer()
                              })
                            }
                        })
                        $("#item-table").DataTable().ajax.reload();
                     }
                }).catch(swal.noop);
               

            }  if (action=='btn-edit-data'){
                    
                        $("#btn-add").hide();
                        $("#btn-update").show();
                        $("#btn-cancel").show();
                        $("#submitprocess").val('update');
                        $("#id").val(data[0]);

                        $.ajax({
                            type : "POST",
                            url  : urllink +'get-item-information',
                            data : { 'id' : data[0],  },
                            dataType: 'json',
                            success: function(data)
                            {
                                $.each(data, function(index, item) {
                                    $("#item_name").val(item.item_name);
                                    $("#description").val(item.description);
                                    $("#materials").val(item.materials);
                                    $("#amount").val(item.declared_value);
                                });
                            }
                        });
                }
    });
    

    });

