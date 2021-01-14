$('.linkIndex').on('click', (function (e) {
    let link = e.currentTarget.dataset.id
    $.ajax({
        type: "GET",
        url: "/api/" + link, 
        error: function(response){
            console.log(response)
        },
        success: function(response){
            let template = ''
            switch (link) {
                case 'movie':
                    template = ` 
                    <title>Movies</title>
                    <h1>Movies</h1>
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#movieCreate">Add Movie</button><br><br>
                    <table class="table table-hover mx-auto">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Release</th>
                                <th>Genre</th>
                                <th>Producer</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody id="movieData">
                        </tbody>
                    </table>
                    `;
                    $('#con').html(template);
                    response.forEach(element => {
                        $('#movieData').append(`
                        <tr>
                            <td>${element.id}</td>
                            <td>${element.imgpath}</td>
                            <td>${element.title}</td>
                            <td>${element.description}</td>
                            <td>${element.release}</td>
                            <td>${element.genre_id}</td>
                            <td>${element.producer_id}</td>
                            <td></td>
                        </tr>
                        `)
                    });
                    $('#con').append(modals.movie);
                    break;

                    case 'actor':
                    template = `
                    <title>Actors</title>
                    <h1>Actors</h1>
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#actorCreate">Add Actor</button><br><br>
                    <table class="table table-hover mx-auto">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Image</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Note</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody id="actorData">

                        </tbody>
                    </table>
                    `;
                    $('#con').html(template);
                    response.forEach(element => {
                        $('#actorData').append(`
                        <tr>
                            <td>${element.id}</td>
                            <td>${element.imgpath}</td>
                            <td>${element.fname}</td>
                            <td>${element.lname}</td>
                            <td>${element.note}</td>
                            <td></td>
                        </tr>
                        `)
                    });
                    $('#con').append(modals.actor);
                    break;

                    case 'genre':
                    template = `
                    <title>Genres</title>
                    <h1>Genres</h1>
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#genreCreate">Add Genre</button><br><br>
                    <table class="table table-hover mx-auto">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Description</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody id="genreData">
                        </tbody>
                    </table>
                    `;
                    $('#con').html(template);
                    response.forEach(element => {
                        $('#genreData').append(`
                        <tr>
                            <td>${element.id}</td>
                            <td>${element.name}</td>
                            <td></td>
                        </tr>
                        `)
                    });
                    $('#con').append(modals.genre);
                    break;

                    case 'producer':
                    template = `
                    <title>Producers</title>
                    <h1>Producers</h1>
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#producerCreate">Add Producer</button><br><br>
                    <table class="table table-hover mx-auto">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody id="producerData">
                        </tbody>
                    </table>
                    `;
                    $('#con').html(template);
                    response.forEach(element => {
                        $('#producerData').append(`
                        <tr>
                            <td>${element.id}</td>
                            <td>${element.name}</td>
                            <td>${element.email}</td>
                            <td></td>
                        </tr>
                        `)
                    });
                    $('#con').append(modals.producer);
                    break;
                default:
                    break;
            }
        },
    });
}));
const modals = {
    movie:`
    <div class="modal fade bd-modal-lg" id="movieCreate" tabindex="-1" aria-labelledby="movieCreate" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h2>Create New Movie</h2>
                <button type="button" class="btn-close" daba-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div class="modal-body">
                <form id="createMovieForm" method="post" action="{{route('movie.store')}}">
                    <input type="hidden" name="_token" value="{{ csrf_token() }}">

                    <div class="form-group">
                            <label for="imgpath" class="control-label">Upload Image</label>
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input" id="imgpath" name="imgpath" value="">
                                    <label class="custom-file-label" for="imgpath">Choose file</label>
                                </div>
                        </div>
                        <div class="form-group">
                            <label for="title" class="control-label">Title</label>
                            <input type="text" class="form-control" id="title" name="title" value="">
                        </div>
                        <div class="form-group">
                            <label for="description" class="control-label">Description</label>
                            <input type="text" class="form-control" id="description" name="description" value="">
                        </div>
                        <div class="md-form  md-outline input-with-post-icon datepicker">
                            <label for="Release">Release</label>
                            <input placeholder="Select date" type="date" id="release" class="form-control" name="release" value=""> 
                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-bs-dismiss="modal>Close</button>
                            <button type="submit" id="movieSubmit" class="btn btn-primary" data-bs-dismiss="modal>save</button>
                        </div>
                    </div>
                </form>                
            </div>
        </div>
      </div>
    </div>`,

    actor:`
    <div class="modal fade bd-modal-lg" id="actorCreate" tabindex="-1" aria-labelledby="actorCreate" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <h2>Create New Actor</h2>
        </div>
      </div>
    </div>`,

    genre:`
    <div class="modal fade bd-modal-lg" id="genreCreate" tabindex="-1" aria-labelledby="genreCreate" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <h2>Create New Genre</h2>
        </div>
      </div>
    </div>`,
    
    producer:`
    <div class="modal fade bd-modal-lg" id="producerCreate" tabindex="-1" aria-labelledby="producerCreate" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <h2>Create New Producer</h2>
        </div>
      </div>
    </div>`,
}


