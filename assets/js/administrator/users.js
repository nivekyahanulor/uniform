	
    var urllink = UrlLink;


    //** ITEMS REPORTS TABLE DATA **//
    $(document).ready(function () {
    var url   =  urllink + '/process-table-admin-users';
    var table = $('#users-table').DataTable({
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
    $('#users-table tbody').on( 'click', 'button', function () {
            var action = this.id;
            var data = table.row( $(this).parents('tr') ).data();

            if (action=='btn-delete-data'){
                swal.fire({
                        title: 'Are you sure?',
                        text: "Are you sure to delete this System user?",
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#000',
                        confirmButtonText: 'Yes, delete it!'
                    }).then((result) => {
                        if(result.isConfirmed){
                            $.ajax({
                                url: UrlLink + '/delete-system-user',
                                method: 'POST',
                                data: { 'id': data[0] },
                                dataType: 'json',
                                success: function(data) {
                                }
                            }); 
                            Swal.fire({
                                icon: "success",
                                title: "Deleted!",
                                text: "System User Deleted",
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
                        $("#users-table").DataTable().ajax.reload();
                       
                     }
                }).catch(swal.noop);

            }

            if (action=='btn-edit-data'){

                $('#newuser').modal('show'); 
                $("#pass-div").hide();
                $('#password').prop('required',false);

                $.ajax({
                    type : "POST",
                    url  : urllink +'get-user-information',
                    data : { 'id' : data[0],  },
                    dataType: 'json',
                    success: function(data)
                    {
                        $.each(data, function(index, item) {
                            $("#firstname").val(item.firstname);
                            $("#lastname").val(item.lastname);
                            $("#role").val(item.role);
                            $("#username").val(item.username);
                            $("#id").val(item.id);
                            $("#process").val('update');
                        });
                    }
                });
            }
        } );
    

    });


    $('#add-new-user').submit(function(e) {
   
        e.preventDefault();
 
        $(".btn").prop('disabled', true);
    
        var firstname   = $('#firstname').val();
        var lastname    = $('#lastname').val();
        var role        = $('#role').val();
        var username    = $('#username').val();
        var password    = $('#password').val();
        var id          = $('#id').val();
        var process     = $('#process').val();


        setTimeout(function() {
           $.ajax({
                type: "POST",
                url: urllink + '/process-system-user',
                data: {
    
                    'firstname'     : firstname,
                    'lastname'      : lastname,
                    'role'          : role,
                    'username'      : username,
                    'password'      : password,
                    'id'            : id,
                    'process'       : process,

                },
                success: function(data) {
                    if(process == "update"){
                        if(data == 1){
                            Swal.fire({
                                icon: "success",
                                title: "System User!",
                                text: "New System User Updated!",
                                customClass: {
                                    confirmButton: "btn btn-primary waves-effect waves-light"
                                },
                                buttonsStyling: !1,
                                timer:1500,
                                didOpen: () => {
                                  Swal.getHtmlContainer().querySelector('#stop-timer').addEventListener('click', e => {
                                    e.preventDefault()
                                    Swal.stopTimer()
                                  })
                                }
                            })
    
                           $("#users-table").DataTable().ajax.reload();

                        } else{
                            Swal.fire({
                                icon: "error",
                                title: "System User!",
                                text: "Error Encoutered! Please try again!",
                                customClass: {
                                    confirmButton: "btn btn-primary waves-effect waves-light"
                                },
                                buttonsStyling: !1,
                                timer:1500,
                                didOpen: () => {
                                  Swal.getHtmlContainer().querySelector('#stop-timer').addEventListener('click', e => {
                                    e.preventDefault()
                                    Swal.stopTimer()
                                  })
                                }
                            })
                        }
                    } else{
                        if(data == 1){
                            Swal.fire({
                                icon: "success",
                                title: "System User!",
                                text: "New System User Added!",
                                customClass: {
                                    confirmButton: "btn btn-primary waves-effect waves-light"
                                },
                                buttonsStyling: !1,
                                timer:1500,
                                didOpen: () => {
                                  Swal.getHtmlContainer().querySelector('#stop-timer').addEventListener('click', e => {
                                    e.preventDefault()
                                    Swal.stopTimer()
                                  })
                                }
                            })
    
                           $("#users-table").DataTable().ajax.reload();
                        } else{
                            Swal.fire({
                                icon: "error",
                                title: "System User!",
                                text: "Error Encoutered! Please try again!",
                                customClass: {
                                    confirmButton: "btn btn-primary waves-effect waves-light"
                                },
                                buttonsStyling: !1,
                                timer:1500,
                                didOpen: () => {
                                  Swal.getHtmlContainer().querySelector('#stop-timer').addEventListener('click', e => {
                                    e.preventDefault()
                                    Swal.stopTimer()
                                  })
                                }
                            })
                        }
                    }
    
                    $('#firstname').val('');
                    $('#lastname').val('');
                    $('#role').val('');
                    $('#username').val('');
                    $('#password').val('');
                    $('#id').val(0);
                    $('#process').val('add');

                    $(".btn").prop('disabled', false);
                    $("#pass-div").show();
                    $('#password').prop('required',true);
                    $('#newuser').modal('hide');
                }
            });
        }, 3000);

    });
        
 

    