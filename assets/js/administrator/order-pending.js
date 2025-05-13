	
    var urllink = UrlLink;
    //** ITEMS REPORTS TABLE DATA **//
    $(document).ready(function () {
    var url   =  urllink + '/process-table-admin-order-pending';
    var table = $('#table_orders_pending').DataTable({
        dom: 'Bfrtip',
        buttons: [  {
            extend: "csv",
            className: "btn-yellow",
            exportOptions: {
                columns: [  1, 2, 3, 4, 5, 6, 7, 8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24 ]
              }
        }, {
            extend: "excel",
            className: "btn-yellow",
            exportOptions: {
                columns: [  1, 2, 3, 4, 5, 6, 7, 8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24 ]
              }
        }],
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
        return json.data;
            }
        }, "columnDefs": [
                {
                    "targets": [ 0,3,4,5,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23 ],
                    "visible": false,
                    "searchable": false
                }
            ] 
    });
    $('#table_orders_pending tbody').on( 'click', 'button', function () {
            $("#waybill").find(".modal-body").html("");
            var action = this.id;
            var data = table.row( $(this).parents('tr') ).data();
            if (action=='view-waybill'){
                $('#waybill').modal('show'); 

                $.ajax({
                    type : "GET",
                    url  : urllink +'get-way-bill-data',
                    data : {
                              'id'     : data[0], 
                     },
                    success: function(data)
                    {
                      $("#waybill").find(".modal-body").html(data);
                    }
                });


            }
        } );
    

    });


    $('#waybill').on('hidden.bs.modal', function () {
        location.reload();
    });