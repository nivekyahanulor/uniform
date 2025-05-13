var urllink = UrlLink;

$(document).ready(function () {
    var url   =  urllink + '/process-table-customer-orders';
    var table = $('#table_orders').DataTable({
        language: {
            paginate: {
                previous: "<i class='mdi mdi-chevron-left'>",
                next: "<i class='mdi mdi-chevron-right'>"
            }
        },
        drawCallback: function() {
            $(".dataTables_paginate > .pagination").addClass("pagination-rounded")
        },
        order: [[6, 'desc']],
        'ajax': {
        type: 'POST',
        'url': url,
        'data': function (d) {
            return JSON.stringify( d );
        },
        "dataSrc": function (json) {
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
        $('#table_orders tbody').on( 'click', 'button', function () {
                $("#waybill").find(".modal-body").html("");
                var action = this.id;
                var data = table.row( $(this).parents('tr') ).data();
                if (action=='view-waybill'){
                    $('#waybill').modal('show'); 
                  
                    $.ajax({
                        type : "GET",
                        url  : urllink +'get-way-bill-data-customer',
                        data : {
                                  'id'     : data[0], 
                         },
                        success: function(data)
                        {
                          $("#waybill").find(".modal-body").html(data);
                        }
                    });
    
    
                }
                if (action=='btn-track-order'){
                    window.location.href = urllink +  "accounts/track-order?q="+data[0];
                }
                if(action == 'btn-cancel-order'){

                    $('#cancel-order').modal('show'); 
                    $(".barcode").val(data[0]);
                }
            } );

    });


    $('#waybill').on('hidden.bs.modal', function () {
        location.reload();
    });


    function check_uncheck_checkbox(isChecked) {
        if(isChecked) {
           $('input[name="check-awb"]').each(function() { 
              this.checked = true; 
              $("#show-print").show();
              $(".cb-element").removeAttr("disabled");
           });
        } else {
           $('input[name="check-awb"]').each(function() {
              this.checked = false;
              $("#show-print").hide();
              $(".cb-element").prop("disabled",true);
           });
        }

     }



    $("#show-print").click(function(){
        var array  = new Array();

        $("input:checkbox[name=check-awb]:checked").each(function(){
            array.push($(this).val())
        });

        window.open('print-multiple-awb?awb='+array, '_blank'); 

    }); 


  