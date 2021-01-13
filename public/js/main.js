$('.link').on('click', (function (e) {
    let link = e.currentTarget.dataset.id
    $.ajax({
        type: "GET",
        url: "/api/" + link, 
        // error: function(response){
        //     console.log(response)
        // }
        success: function(response){
            let template = ''
            switch (link) {
                case 'movie':
                    template = ` 
                    <title>Movies</title>
                    <h1>Movies</h1>
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Add Movie</button><br><br>
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
                    <button class="btn btn-primary" type="submit">Add Actor</button><br><br>
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
                    break;
                default:
                    break;
            }
        },
    });
}));
const modals = {
    movie:`
    <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <h1>Create New Movie</h1>
        </div>
      </div>
    </div>`
}


