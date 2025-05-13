	
    var urllink = UrlLink;


    //** ITEMS REPORTS TABLE DATA **//
    $(document).ready(function () {
    var url   =  urllink + '/process-table-admin-billing?q='+is_q;
    var table = $('#billing-table').DataTable({
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
    $('#billing-table tbody').on( 'click', 'button', function () {
            var action = this.id;
            var data = table.row( $(this).parents('tr') ).data();
            if (action=='btn-view-data'){
                window.location.href = UrlLink +  "administrator/billing-details?q="+data[1]+"&c_id="+data[0];
            }
            if (action=='btn-paid-data'){
                $('#mark-paid').modal('show'); 
                $(".id").val(data[1]);
            }
        } );
    

    });


    