	
    var urllink = UrlLink;


    $(document).ready(function () {
    var url   =  urllink + '/process-table-admin-tracks';
    var table = $('#tracks').DataTable({
        dom: 'Bfrtip',
        buttons: [ {
            extend: "csv",
            className: "btn-yellow"
        }, {
            extend: "excel",
            className: "btn-yellow"
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
                    "targets": [ 0,3,4,5,7,8,9,10,11,12,13,14,15,16,17,18,19 ],
                    "visible": false,
                    "searchable": false
                }
            ] 
    });
    $('#tracks tbody').on( 'click', 'button', function () {
            var action = this.id;
            var data = table.row( $(this).parents('tr') ).data();
            if (action=='btn-track-order'){
                window.location.href = urllink +  "administrator/track-order?q="+data[0];
            }
        } );
    

    });

