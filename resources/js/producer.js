import modal4producer from './modals/producerM';

const producer = {
    show(response) {
        let template = `
        <thead>
            <tr>
                <th>ID</th>
                <th>Producer Name</th>
                <th>Email</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody id="producerData"></tbody>
    `;

        let title = `<h1> Producers </h1>`
        let headtitle = `<title> Producers </title>`
        let createbtn = `<button type="button" class="btn btn-color" data-toggle="modal" data-target="#producerCreateModal"> Add New Producer </button>`

        $('#headtitle').html(headtitle);
        $('#title').html(title);
        $('#createbtn').html(createbtn);
        $('#tableContent').html(template);
        $('#content').append(modal4producer);

        //View
        response.forEach(producer => {
            $('#producerData').append(`
                <tr>
                    <td>${producer.id}</td>
                    <td>${producer.name}</td>
                    <td>${producer.email}</td>
                    <td>
                        <i class="fas fa-edit producerEditIcon" data-toggle="modal" 
                            data-target="#producerEditModal" id="${producer.id}"></i> | 
                        
                        <i class="fas fa-trash-alt producerDeleteIcon" id="${producer.id}"></i>
                    </td>
                </tr>
            `)
        });

        var valcreate = $('#producerCreateForm').validate({
            rules: {
                name: {
                    required: true,
                    maxlength: 45
                },
                email: {
                    required: true,
                    maxlength: 60,
                    email: true,
                },
            },
            messages: {
                name: {
                    required: "Genre Name is required!",
                    maxlength: "Only 45 characters"
                },
                email: {
                    required: "Email is required!",
                    maxlength: "Only 60 characters",
                    email: "Must be an email!",
                },
            },
            errorPlacment: function (error, element) {
                error.insertAfter(element);
            }
        });

        valcreate.form();
        //Create
        $("#producerCreateSave").on('click', function (e) {
            if (valcreate.form()) {
                e.preventDefault();
            }
            var producer = $("#producerCreateForm").serialize();
            $.ajax({
                type: "POST",
                url: "/api/producer",
                data: producer,
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                dataType: "json",
                success: function (producer) {
                    // console.log(producer);
                    $('#genreCreateForm :input').each(function () {
                        let input = $(this)
                        input.val('')
                    });

                    $('#producerCreateModal').hide();
                    $('#producerData').append(`
                        <tr>
                            <td>${producer.id}</td>
                            <td>${producer.name}</td>
                            <td>${producer.email}</td>
                            <td>
                                <a><i class="fas fa-edit producerEditIcon" 
                                    data-toggle="modal" data-target="#producerEditModal"
                                    id="${producer.id}"></a></i> | 

                                <i class="fas fa-trash-alt producerDeleteIcon" 
                                    id="${producer.id}"></i>
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
        $('.producerEditIcon').on('click', function (e) {
            var id = $(e.currentTarget).attr('id');
            // console.log(id);
            $.ajax({
                type: 'GET',
                url: '/api/producer/' + id + '/edit',
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                success: function (producer) {
                    $('#id').val(producer.id);
                    $('.producerName').val(producer.name);
                    $('.producerEmail').val(producer.email);
                },
                // error: function (response) {
                //     console.log(response);
                // },
            });
        });

        var valedit = $('#producerEditForm').validate({
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
        $("#producerEditSave").on('click', function (e) {
            if (valedit.form()) {
                e.preventDefault();
            }
            var id = $("#id").val();
            var producerdata = $("#producerEditForm").serialize();
            $.ajax({
                type: "PUT",
                url: "/api/producer/" + id,
                data: producerdata,
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                dataType: "json",
                success: function () {
                    $('#producerEditModal').hide();
                    $.ajax({
                        url: '/api/producer',
                        success(response) {
                            producer.show(response);
                        }
                    })
                },
                // error: function (error) {
                //     console.log(error);
                // }
            });
        });

        //Delete
        $('.producerDeleteIcon').on('click', function (e) {
            e.preventDefault();
            var id = this.id;
            var $tr = $(this).closest('tr')
            // console.log(id);
            if (confirm(`Are you sure you want to delete Producer Number ${id}?`)) {
                $.ajax({
                    type: "DELETE",
                    url: "/api/producer/" + id,
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

export default producer;
