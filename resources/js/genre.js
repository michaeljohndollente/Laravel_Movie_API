import modal4genre from './modals/genreM';

const genre = {
    show(response) {
        let template = `
        <thead>
            <tr>
                <th>ID</th>
                <th>Genre Name</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody id="genreData"></tbody>
    `;

        let title = `<h1> Genres </h1>`
        let headtitle = `<title> Genres </title>`
        let createbtn = `<button type="button" class="btn btn-color" data-toggle="modal" data-target="#genreCreateModal"> Add New Genre </button>`

        $('#headtitle').html(headtitle);
        $('#title').html(title);
        $('#createbtn').html(createbtn);
        $('#tableContent').html(template);
        $('#content').append(modal4genre);

        //View
        response.forEach(genre => {
            $('#genreData').append(`
                <tr>
                    <td>${genre.id}</td>
                    <td>${genre.name}</td>
                    <td>
                        <i class="fas fa-edit genreEditIcon" data-toggle="modal" 
                            data-target="#genreEditModal" id="${genre.id}"></i> | 
                        
                        <i class="fas fa-trash-alt genreDeleteIcon" id="${genre.id}"></i>
                    </td>
                </tr>
            `)
        });

        var valcreate = $('#genreCreateForm').validate({
            rules: {
                name: {
                    required: true,
                    maxlength: 45
                },
            },
            messages: {
                name: {
                    required: "First name is required!",
                    maxlength: "Only 45 characters"
                },
            },
            errorPlacment: function (error, element) {
                error.insertAfter(element);
            }
        });

        valcreate.form();
        //Create
        $("#genreCreateSave").on('click', function (e) {
            if (valcreate.form()) {
                e.preventDefault();
            }
            var genre = $("#genreCreateForm").serialize();
            $.ajax({
                type: "POST",
                url: "/api/genre",
                data: genre,
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                dataType: "json",
                success: function (genre) {
                    // console.log(genre);
                    $('#genreCreateForm :input').each(function () {
                        let input = $(this)
                        input.val('')
                    });

                    $('#genreCreateModal').hide();
                    $('#genreData').append(`
                        <tr>
                            <td>${genre.id}</td>
                            <td>${genre.name}</td>
                            <td>
                                <a><i class="fas fa-edit genreEditIcon" 
                                    data-toggle="modal" data-target="#genreEditModal"
                                    id="${genre.id}"></a></i> | 

                                <i class="fas fa-trash-alt genreDeleteIcon" 
                                    id="${genre.id}"></i>
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
        $('.genreEditIcon').on('click', function (e) {
            var id = $(e.currentTarget).attr('id');
            // console.log(id);
            $.ajax({
                type: 'GET',
                url: '/api/genre/' + id + '/edit',
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                success: function (genre) {
                    $('#id').val(genre.id);
                    $('.genreName').val(genre.name);
                },
                // error: function (response) {
                //     console.log(response);
                // },
            });
        });

        var valedit = $('#genreEditForm').validate({
            rules: {
                name: {
                    required: true,
                    maxlength: 45
                },
            },
            messages: {
                name: {
                    required: "First name is required!",
                    maxlength: "Only 45 characters"
                },
            },
            errorPlacment: function (error, element) {
                error.insertAfter(element);
            }
        });

        valedit.form();
        //Save 
        $("#genreEditSave").on('click', function (e) {
            if (valedit.form()) {
                e.preventDefault();
            }
            var id = $("#id").val();
            var genredata = $("#genreEditForm").serialize();
            $.ajax({
                type: "PUT",
                url: "/api/genre/" + id,
                data: genredata,
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                dataType: "json",
                success: function () {
                    $('#genreEditModal').hide();
                    $.ajax({
                        url: '/api/genre',
                        success(response) {
                            genre.show(response);
                        }
                    })
                },
                // error: function (error) {
                //     console.log(error);
                // }
            });
        });

        //Delete
        $('.genreDeleteIcon').on('click', function (e) {
            e.preventDefault();
            var id = this.id;
            var $tr = $(this).closest('tr')
            // console.log(id);
            if (confirm(`Are you sure you want to delete Genre Number ${id}?`)) {
                $.ajax({
                    type: "DELETE",
                    url: "/api/genre/" + id,
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
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

export default genre;
