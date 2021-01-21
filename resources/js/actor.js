import modal4actor from './modals/actorM';

const actor = {
    show(response) {
        let template = `
        <thead>
            <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Notes</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody id="actorData"></tbody>
    `;

        let title = `<h1> Actors </h1>`
        let headtitle = `<title> Actors </title>`
        let createbtn = `<button type="button" class="btn btn-color" data-toggle="modal" data-target="#actorCreateModal"> Add New Actor </button>`

        $('#headtitle').html(headtitle);
        $('#title').html(title);
        $('#createbtn').html(createbtn);
        $('#tableContent').html(template);
        $('#content').append(modal4actor);

        //View
        response.forEach(actor => {
            $('#actorData').append(`
                <tr>
                    <td>${actor.id}</td>
                    <td>${actor.fname}</td>
                    <td>${actor.lname}</td>
                    <td>${actor.note}</td>
                    <td>
                        <i class="fas fa-edit actorEditIcon" data-toggle="modal" 
                            data-target="#actorEditModal" id="${actor.id}"></i> | 
                        
                        <i class="fas fa-trash-alt actorDeleteIcon" id="${actor.id}"></i>
                    </td>
                </tr>
            `)
        });

        var valcreate = $('#actorCreateForm').validate({
            rules: {
                fname: {
                    required: true,
                    maxlength: 45
                },
                lname: {
                    required: true,
                    maxlength: 45
                },
                note: {
                    required: true,
                    maxlength: 90
                }
            },
            messages: {
                fname: {
                    required: "First name is required!",
                    maxlength: "Only 45 characters"
                },
                lname: {
                    required: "Last name is required!",
                    maxlength: "Only 45 characters"
                },
                note: {
                    required: "Note is required!",
                    maxlength: "Only 90 characters"
                }
            },
            errorPlacment: function (error, element) {
                error.insertAfter(element);
            }
        });

        valcreate.form();
        //Create
        $("#actorCreateSave").on('click', function (e) {
            if (valcreate.form()) {
                e.preventDefault();
            }
            var actor = $("#actorCreateForm").serialize();
            $.ajax({
                type: "POST",
                url: "/api/actor",
                data: actor,
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                dataType: "json",
                success: function (actor) {
                    console.log(actor);
                    $('#actorCreateForm :input').each(function () {
                        let input = $(this)
                        input.val('')
                    });

                    $('#actorCreateModal').hide();
                    $('#actorData').append(`
                        <tr>
                            <td>${actor.id}</td>
                            <td>${actor.fname}</td>
                            <td>${actor.lname}</td>
                            <td>${actor.note}</td>
                            <td>
                                <a><i class="fas fa-edit actorEditIcon" 
                                    data-toggle="modal" data-target="#actorEditModal"
                                    id="${actor.id}"></a></i> | 

                                <i class="fas fa-trash-alt actorDeleteIcon" 
                                    
                                    id="${actor.id}"></i>
                            </td>
                        </tr>
                    `);
                },
                // error: function (response) {
                //     console.log(response);
                // },
            });
        });

        //Edit
        $('.actorEditIcon').on('click', function (e) {
            var id = $(e.currentTarget).attr('id');
            console.log(id);
            $.ajax({
                type: 'GET',
                url: '/api/actor/' + id + '/edit',
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                success: function (actor) {
                    $('#id').val(actor.id);
                    $('.actorFirstName').val(actor.fname);
                    $('.actorLastName').val(actor.lname);
                    $('.actorNote').val(actor.note);
                },
                // error: function (response) {
                //     console.log(response);
                // },
            });
        });

        var valedit = $('#actorEditForm').validate({
            rules: {
                fname: {
                    required: true,
                    maxlength: 45
                },
                lname: {
                    required: true,
                    maxlength: 45
                },
                note: {
                    required: true,
                    maxlength: 90
                }
            },
            messages: {
                fname: {
                    required: "First name is required!",
                    maxlength: "Only 45 characters"
                },
                lname: {
                    required: "Last name is required!",
                    maxlength: "Only 45 characters"
                },
                note: {
                    required: "Note is required!",
                    maxlength: "Only 90 characters"
                }
            },
            errorPlacment: function (error, element) {
                error.insertAfter(element);
            }
        });

        valedit.form();
        //Save 
        $("#actorEditSave").on('click', function (e) {
            if (valedit.form()) {
                e.preventDefault();
            }
            var id = $("#id").val();
            var actordata = $("#actorEditForm").serialize();
            $.ajax({
                type: "PUT",
                url: "/api/actor/" + id,
                data: actordata,
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                dataType: "json",
                success: function () {
                    $('#actorEditModal').hide();
                    $.ajax({
                        url: '/api/actor',
                        success(response) {
                            actor.show(response);
                        }
                    })
                },
                // error: function (error) {
                //     console.log(error);
                // }
            });
        });

        //Delete
        $('.actorDeleteIcon').on('click', function (e) {
            e.preventDefault();
            var id = this.id;
            var $tr = $(this).closest('tr')
            console.log(id);
            if (confirm(`Are you sure you want to delete Actor Number ${id}?`)) {
                $.ajax({
                    type: "DELETE",
                    url: "/api/actor/" + id,
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    },
                    dataType: "json",
                    success: function (data) {
                        console.log(data);
                        $tr.remove();
                    },
                    // error:function(data){
                    //     console.log('Error:',data);
                    // }
                })
            }

        });
    }
}

export default actor;
