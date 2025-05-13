	
    var urllink = UrlLink;


    $(document).ready(function () {
    var url   =  urllink + '/process-table-admin-order-all';
    var table = $('#table_orders_all').DataTable({
        dom: 'Bfrtip',
        buttons: [  {
            extend: "csv",
            className: "btn-yellow",
            exportOptions: {
                columns: [  1, 2, 3, 4, 5, 6, 7, 8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28 ]
              }
        }, {
            extend: "excel",
            className: "btn-yellow",
            exportOptions: {
                columns: [  1, 2, 3, 4, 5, 6, 7, 8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28 ]
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
        $("#mydata").val(json.recordsTotal);
        return json.data;
            }
        }, "columnDefs": [
                {
                    "targets": [ 0,3,4,5,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25 ],
                    "visible": false,
                    "searchable": false
                }
            ] 
    });
    $('#item-table tbody').on( 'click', 'button', function () {
            var action = this.id;
            var data = table.row( $(this).parents('tr') ).data();
            if (action=='btn-view-data'){
                window.location.href = UrlLink +  "administrator/withdrawal/process/"+data[0];
            }
        } );
    

    });

