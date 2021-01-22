import modal4movie from './modals/movieM';

const movie = {
    show(response) {
        let template = `
        <thead>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Description</th>
                <th>Release</th>
                <th>Genre</th>
                <th>Producer</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody id="movieData"></tbody>
    `;

        let title = `<h1> Movies </h1>`
        let headtitle = `<title> Movies </title>`
        let createbtn = `<button type="button" class="btn btn-color" data-bs-toggle="modal" data-bs-target="#movieCreateModal"> Add New Movie </button>`

        $('#headtitle').html(headtitle);
        $('#title').html(title);
        $('#createbtn').html(createbtn);
        $('#tableContent').html(template);
        $('#content').append(modal4movie);

        //View
        response.forEach(movie => {
            $('#movieData').append(`
                <tr>
                    <td>${movie.id}</td>
                    <td>${movie.title}</td>
                    <td>${movie.description}</td>
                    <td>${movie.release}</td>
                    <td>${movie.genre.name}</td>
                    <td>${movie.producer.name}</td>
                    <td>
                        <i class="fas fa-edit movieEditIcon" data-bs-toggle="modal" 
                            data-bs-target="#movieEditModal" id="${movie.id}"></i> | 
                        
                        <i class="fas fa-trash-alt movieDeleteIcon" id="${movie.id}"></i>
                    </td>
                </tr>
            `)
        });

        var valcreate = $('#movieCreateForm').validate({
            rules: {
                title: {
                    required: true,
                    maxlength: 45
                },
                description: {
                    required: true,
                    maxlength: 45
                },
                release: {
                    required: true,
                    date: true,
                },
                genre_id: {
                    required: true,
                },
                producer_id: {
                    required: true,
                }
            },
            messages: {
                title: {
                    required: "Title is Required!",
                    maxlength: "Only 45 Characters"
                },
                description: {
                    required: "Description is Required!",
                    maxlength: "Only 45 Characters"
                },
                release: {
                    required: "Date is Required!",
                    date: "Must be Valid Date Format",
                },
                genre_id: {
                    required: "Genre is Required!",
                },
                producer_id: {
                    required: "Producer is Required!",
                }    
            },
            errorPlacment: function (error, element) {
                error.insertAfter(element);
            }
        });

        valcreate.form();


        $('#movieCreateModal').on('show.bs.modal', function (e) {
            $.ajax({
                type: "GET",
                url: "/api/producer",
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
                },
                dataType: "json",
                success: function (response) {
                    response.forEach(producer => {
                        $('#ProducerIDName').append(`
                            <option value="${producer['id']}">${producer['name']}</option>
                        `)
                    });
                }
            });
            $.ajax({
                type: "GET",
                url: "/api/genre",
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
                },
                dataType: "json",
                success: function (response) {
                    response.forEach(genre => {
                        $('#GenreIDName').append(`
                            <option value="${genre['id']}">${genre['name']}</option>
                        `)
                    });
                }
            });
        });

        $('#movieCreateModal').on('hidden.bs.modal', function(e){
            $('#GenreIDName').empty();
            $('#ProducerIDName').empty();
        });
        
        //Create
        $("#movieCreateSave").on('click', function (e) {
            if (valcreate.form()) {
                e.preventDefault();
            }
            var movie = $("#movieCreateForm").serialize();
            console.log(movie);
            $.ajax({
                type: "POST",
                url: "/api/movie",
                data: movie,
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
                },
                dataType: "json",
                success: function (movie) {
                    $('#movieCreateForm :input').each(function () {
                        let input = $(this)
                        input.val('')
                    });
                    $('#movieCreateModal').hide();
                    $('#movieData').append(`
                        <tr>
                            <td>${movie.id}</td>
                            <td>${movie.title}</td>
                            <td>${movie.description}</td>
                            <td>${movie.release}</td>
                            <td>${movie.genre.name}</td>
                            <td>${movie.producer.name}</td>
                            <td>
                                <a><i class="fas fa-edit movieEditIcon" 
                                    data-bs-toggle="modal" data-bs-target="#movieEditModal"
                                    id="${movie.id}"></a></i> | 

                                <i class="fas fa-trash-alt movieDeleteIcon" 
                                    
                                    id="${movie.id}"></i>
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
        $('.movieEditIcon').on('click', function (e) {
            var id = $(e.currentTarget).attr('id');
            // console.log(id);
            $.ajax({
                type: 'GET',
                url: '/api/movie/' + id + '/edit',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
                },
                success: function (movie) {
                    $('#id').val(movie.id);
                    $('.movieTitle').val(movie.title);
                    $('.movieDescription').val(movie.description);
                    $('.movieRelease').val(movie.release);
                    $('.movieProducer').val(movie.producer.name);
                    $('.movieGenre').val(movie.genre.name);
                },
                // error: function (response) {
                //     console.log(response);
                // },
            });
        });

        var valedit = $('#movieEditForm').validate({
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
        $("#movieEditSave").on('click', function (e) {
            if (valedit.form()) {
                e.preventDefault();
            }
            var id = $("#id").val();
            var moviedata = $("#movieEditForm").serialize();
            $.ajax({
                type: "PUT",
                url: "/api/movie/" + id,
                data: moviedata,
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
                },
                dataType: "json",
                success: function () {
                    $('#movieEditModal').hide();
                    $.ajax({
                        url: '/api/movie',
                        success(response) {
                            movie.show(response);
                        }
                    })
                },
                // error: function (error) {
                //     console.log(error);
                // }
            });
        });

        

        //Delete
        $('.movieDeleteIcon').on('click', function (e) {
            e.preventDefault();
            var id = this.id;
            var $tr = $(this).closest('tr')
            // console.log(id);
            if (confirm(`Are you sure you want to delete Movie Number ${id}?`)) {
                $.ajax({
                    type: "DELETE",
                    url: "/api/movie/" + id,
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

export default movie;
