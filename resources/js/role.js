import modal4role from './modals/roleM';

const role = {
    show(response) {
        let template = `
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Actor</th>
                <th>Movie</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody id="roleData"></tbody>
    `;
        let title = `<h1> Roles </h1>`
        let headtitle = `<title> Roles </title>`
        let createbtn = `<button type="button" class="btn btn-color" data-bs-toggle="modal" data-bs-target="#roleCreateModal"> Add New Role </button>`

        $('#headtitle').html(headtitle);
        $('#title').html(title);
        $('#createbtn').html(createbtn);
        $('#tableContent').html(template);
        $('#content').append(modal4role);

        //View
        response.forEach(role => {
            $('#roleData').append(`
                <tr>
                    <td>${role.id}</td>
                    <td>${role.name}</td>
                    <td>${role.actor.fname}</td>
                    <td>${role.movie.title}</td>
                    <td>
                        <i class="fas fa-edit roleEditIcon" data-bs-toggle="modal" 
                            data-bs-target="#roleEditModal" id="${role.id}"></i> | 
                        
                        <i class="fas fa-trash-alt roleDeleteIcon" id="${role.id}"></i>
                    </td>
                </tr>
            `)
        });

        var valcreate = $('#roleCreateForm').validate({
            rules: {
                title: {
                    required: true,
                    maxlength: 45
                },
                actor_id: {
                    required: true,
                },
                movie_id: {
                    required: true,
                }
            },
            messages: {
                title: {
                    required: "Name is Required!",
                    maxlength: "Only 45 Characters"
                },
                actor_id: {
                    required: "Actor is Required!",
                },
                movie_id: {
                    required: "Movie is Required!",
                },
            },
            errorPlacment: function (error, element) {
                error.insertAfter(element);
            }
        });

        valcreate.form();
        $('#roleCreateModal').on('show.bs.modal', function (e) {
            $.ajax({
                type: "GET",
                url: "/api/actor",
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
                },
                dataType: "json",
                success: function (response) {
                    response.forEach(actor => {
                        $('#ActorIDName').append(`
                            <option value="${actor['id']}">${actor['fname']}</option>
                        `)
                    });
                }
            });
            $.ajax({
                type: "GET",
                url: "/api/movie",
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
                },
                dataType: "json",
                success: function (response) {
                    response.forEach(movie => {
                        $('#MovieIDName').append(`
                            <option value="${movie['id']}">${movie['title']}</option>
                        `)
                    });
                }
            });
        });

        $('#roleCreateModal').on('hidden.bs.modal', function(e){
            $('#ActorIDName').empty();
            $('#MovieIDName').empty();
        });
        
        //Create
        $("#roleCreateSave").on('click', function (e) {
            if (valcreate.form()) {
                e.preventDefault();
            }
            var role = $("#roleCreateForm").serialize();
            console.log(role);
            $.ajax({
                type: "POST",
                url: "/api/role",
                data: role,
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
                },
                dataType: "json",
                success: function (role) {
                    $('#roleCreateForm :input').each(function () {
                        let input = $(this)
                        input.val('')
                    });
                    $('#roleCreateModal').hide();
                    $('#roleData').append(`
                        <tr>
                            <td>${role.id}</td>
                            <td>${role.name}</td>
                            <td>${role.actor.fname}</td>
                            <td>${role.movie.title}</td>
                            <td>
                                <a><i class="fas fa-edit roleEditIcon" 
                                    data-bs-toggle="modal" data-bs-target="#roleEditModal"
                                    id="${role.id}"></a></i> | 

                                <i class="fas fa-trash-alt roleDeleteIcon" 
                                    
                                    id="${role.id}"></i>
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
        $('.roleEditIcon').on('click', function (e) {
            var id = $(e.currentTarget).attr('id');
            // console.log(id);
            $.ajax({
                type: 'GET',
                url: '/api/role/' + id + '/edit',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
                },
                success: function (role) {
                    $('#id').val(role.id);
                    $('.roleName').val(role.name);
                    $('.roleActor').val(role.actor.fname);
                    $('.roleMovie').val(role.movie.title);
                },
                // error: function (response) {
                //     console.log(response);
                // },
            });
        });

        var valedit = $('#roleEditForm').validate({
            rules: {
                title: {
                    required: true,
                    maxlength: 45
                },
                actor_id: {
                    required: true,
                },
                movie_id: {
                    required: true,
                }
            },
            messages: {
                title: {
                    required: "Name is Required!",
                    maxlength: "Only 45 Characters"
                },
                actor_id: {
                    required: "Actor is Required!",
                },
                movie_id: {
                    required: "Movie is Required!",
                },
            },
            errorPlacment: function (error, element) {
                error.insertAfter(element);
            }
        });

        valedit.form();
        //Save 
        $("#roleEditSave").on('click', function (e) {
            if (valedit.form()) {
                e.preventDefault();
            }
            var id = $("#id").val();
            var roledata = $("#roleEditForm").serialize();
            $.ajax({
                type: "PUT",
                url: "/api/role/" + id,
                data: roledata,
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
                },
                dataType: "json",
                success: function () {
                    $('#roleEditModal').hide();
                    $.ajax({
                        url: '/api/role',
                        success(response) {
                            role.show(response);
                        }
                    })
                },
                // error: function (error) {
                //     console.log(error);
                // }
            });
        });

        

        //Delete
        $('.roleDeleteIcon').on('click', function (e) {
            e.preventDefault();
            var id = this.id;
            var $tr = $(this).closest('tr')
            // console.log(id);
            if (confirm(`Are you sure you want to delete Movie Number ${id}?`)) {
                $.ajax({
                    type: "DELETE",
                    url: "/api/role/" + id,
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
                    },
                    dataType: "json",
                    success: function (data) {
                        // console.log(data);
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

export default role;
