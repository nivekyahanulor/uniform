var urllink = UrlLink;

$(document).ready(function () {
    var url   =  urllink + '/customer-table-item?q='+q;
    var table = $('#customer-item-table').DataTable({
        'ajax': {
        type: 'GET',
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
    $('#item-table tbody').on( 'click', 'button', function () {
            var action = this.id;
            var data = table.row( $(this).parents('tr') ).data();
            if (action=='btn-view-data'){
                window.location.href = UrlLink +  "administrator/withdrawal/process/"+data[0];
            }
        } );
    

    });



    

    $('#setDiscount').submit(function(e) {
        $('.btn').prop('disabled', true);
    
         var id        = $('#id').val();
         var discount  = $('#discount_amount').val();

            e.preventDefault();
                setTimeout(function() {
                $.ajax({
                   type: "POST",
                   url:UrlLink+'post-customer-discount',
                   data : {
                             'id'  : id, 
                             'discount' : parseFloat(discount),
                    },
                   success: function(data)
                   {
                    if(data == '1'){
                        Swal.fire({
                            icon: "success",
                            title: "Discount",
                            text: "Discount Successfuly Set!",
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


    
    $('#setInactive').submit(function(e) {
        $('.btn').prop('disabled', true);
    
         var id        = $('#id').val();

            e.preventDefault();
                setTimeout(function() {
                $.ajax({
                   type: "POST",
                   url:UrlLink+'post-customer-inactive',
                   data : {
                             'id'  : id, 
                             'discount' : parseFloat(discount),
                    },
                   success: function(data)
                   {
                    if(data == '1'){
                        Swal.fire({
                            icon: "success",
                            title: "Status Changed",
                            text: "Inactive Successfuly Set!",
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

    

    $('#setActive').submit(function(e) {
        $('.btn').prop('disabled', true);
    
         var id        = $('#id').val();

            e.preventDefault();
                setTimeout(function() {
                $.ajax({
                   type: "POST",
                   url:UrlLink+'post-customer-active',
                   data : {
                             'id'  : id, 
                             'discount' : parseFloat(discount),
                    },
                   success: function(data)
                   {
                    if(data == '1'){
                        Swal.fire({
                            icon: "success",
                            title: "Status Changed",
                            text: "Active Successfuly Set!",
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

    