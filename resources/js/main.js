
import actor from './actor';
$(document).ready(function(){
$('.linkIndex').on('click', (function (e) {
    let linkIndex = e.currentTarget.dataset.id
    $.ajax({
        type: "GET",
        url: "/api/" + linkIndex, 
        error: function(response){
            console.log(response)
        },
        success(response){
            switch (linkIndex) {
                // case 'movie':
                //     template = ` 
                //     <title>Movies</title>
                //     <h1>Movies</h1>
                //     <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#movieCreate">Add Movie</button><br><br>
                //     <table class="table table-hover mx-auto">
                //         <thead>
                //             <tr>
                //                 <th>ID</th>
                //                 <th>Image</th>
                //                 <th>Title</th>
                //                 <th>Description</th>
                //                 <th>Release</th>
                //                 <th>Genre</th>
                //                 <th>Producer</th>
                //                 <th>Action</th>
                //             </tr>
                //         </thead>
                //         <tbody id="movieData">
                //         </tbody>
                //     </table>
                //     `;
                //     $('#con').html(template);
                //     response.forEach(movie => {
                //         $('#movieData').append(`
                //         <tr>
                //             <td>${movie.id}</td>
                //             <td>${movie.imgpath}</td>
                //             <td>${movie.title}</td>
                //             <td>${movie.description}</td>
                //             <td>${movie.release}</td>
                //             <td>${movie.genre['name']}</td>
                //             <td>${movie.producer['name']}</td>
                //             <td></td>
                //         </tr>
                //         `)
                //     });
                //     $('#con').append(modals.movie);
                //     response.forEach(genre =>{
                //         $('#GenreIDName').append(`
                //             <option value="${genre['id']}">${genre['name']}</option>
                //         `)
                //     });
                //     $('#con').append(modals.movie);
                //     response.forEach(producer =>{
                //         $('#ProducerIDName').append(`
                //             <option value="${producer['id']}">${producer['name']}</option>
                //         `)
                //     });
                //     break;

                    case 'actor':
                        actor.show(response)
                    break;

                    // case 'genre':
                    // template = `
                    // <title>Genres</title>
                    // <h1>Genres</h1>
                    // <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#genreCreate">Add Genre</button><br><br>
                    // <table class="table table-hover mx-auto">
                    //     <thead>
                    //         <tr>
                    //             <th>ID</th>
                    //             <th>Description</th>
                    //             <th>Action</th>
                    //         </tr>
                    //     </thead>
                    //     <tbody id="genreData">
                    //     </tbody>
                    // </table>
                    // `;
                    // $('#con').html(template);
                    // response.forEach(genre => {
                    //     $('#genreData').append(`
                    //     <tr>
                    //         <td>${genre.id}</td>
                    //         <td>${genre.name}</td>
                    //         <td></td>
                    //     </tr>
                    //     `)
                    // });
                    // $('#con').append(modals.genre);
                    // break;

                    // case 'producer':
                    // template = `
                    // <title>Producers</title>
                    // <h1>Producers</h1>
                    // <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#producerCreate">Add Producer</button><br><br>
                    // <table class="table table-hover mx-auto">
                    //     <thead>
                    //         <tr>
                    //             <th>ID</th>
                    //             <th>Name</th>
                    //             <th>Email</th>
                    //             <th>Action</th>
                    //         </tr>
                    //     </thead>
                    //     <tbody id="producerData">
                    //     </tbody>
                    // </table>
                    // `;
                    // $('#con').html(template);
                    // response.forEach(producer => {
                    //     $('#producerData').append(`
                    //     <tr>
                    //         <td>${producer.id}</td>
                    //         <td>${producer.name}</td>
                    //         <td>${producer.email}</td>
                    //         <td></td>
                    //     </tr>
                    //     `)
                    // });
                    // $('#con').append(modals.producer);
                    // break;
                    default:
                    break;
            }
        },
    });
}));
$( ".draggable" ).draggable();
});


// const modals = {
//     movie:`
//     <div class="modal fade bd-modal-lg" id="movieCreate" tabindex="-1" aria-labelledby="movieCreate" aria-hidden="true">
//       <div class="modal-dialog modal-lg">
//         <div class="modal-content">
//             <div class="modal-header">
//                 <h2>Create New Movie</h2>
//                 <button type="button" class="btn btn-default" data-dismiss="modal" aria-label="Close">X</button>
//             </div>
//             <div class="modal-body">
//                 <form id="createMovieForm" method="post" action="{{route('movie.store')}}">
//                     <input type="hidden" name="_token" value="{{ csrf_token() }}">
//                     <div class="form-group">
//                             <label for="imgpath" class="control-label">Upload Image</label>
//                                 <div class="custom-file">
//                                     <input type="file" class="custom-file-input" id="imgpath" name="imgpath" value="">
//                                     <label class="custom-file-label" for="imgpath">Choose file</label>
//                                 </div>
//                         </div>
//                         <div class="form-group">
//                             <label for="title" class="control-label">Title</label>
//                             <input type="text" class="form-control" id="title" name="title" value="">
//                         </div>
//                         <div class="form-group">
//                             <label for="description" class="control-label">Description</label>
//                             <textarea class="form-control" id="description" name="description" rows="3" value=""></textarea>
//                         </div>
//                         <div class="md-form form-group md-outline input-with-post-icon datepicker">
//                             <label for="Release">Release</label>
//                             <input placeholder="Select date" type="date" id="release" class="form-control" name="release" value=""> 
//                         </div>

//                         <div class="row">
//                             <div class="form-group col-md-6">
//                                 <label for="producer">Producer</label>
//                                 <select id="ProducerIDName" class="form-control">
//                                 </select>
//                             </div>

//                             <div class="form-group col-md-6">
//                                 <label for="genre">Genre</label>
//                                 <select id="GenreIDName" class="form-control">
//                                 </select>
//                             </div>
//                         </div>

//                         <div class="modal-footer">
//                             <button type="button" class="btn btn-default" data-dismiss="modal" aria-label="Close">Close</button>
//                             <button type="submit" id="movieSubmit" class="btn btn-primary" data-bs-dismiss="modal">Save</button>
//                         </div>
//                     </div>
//                 </form>                
//             </div>
//         </div>
//       </div>
//     </div>`
    
//     `
//     <div class="modal fade bd-modal-lg" id="movieEdit" tabindex="-1" aria-labelledby="movieEdit" aria-hidden="true">
//     <div class="modal-dialog modal-lg">
//         <div class="modal-content">
//             <div class="modal-header">
//                 <h2>Edit Movie</h2>
//                 <button type="button" class="btn btn-default" data-dismiss="modal" aria-label="Close">X</button>
//             </div>
//             <div class="modal-body">
//                 <form id="editMovieForm" method="post" action="{{route('movie.store')}}">
//                     <input type="hidden" name="_token" value="{{ csrf_token() }}">
//                     <div class="form-group">
//                             <label for="imgpath" class="control-label">Upload Image</label>
//                                 <div class="custom-file">
//                                     <input type="file" class="custom-file-input" id="imgpath" name="imgpath" value="">
//                                     <label class="custom-file-label" for="imgpath">Choose file</label>
//                                 </div>
//                         </div>
//                         <div class="form-group">
//                             <label for="title" class="control-label">Title</label>
//                             <input type="text" class="form-control" id="title" name="title" value="">
//                         </div>
//                         <div class="form-group">
//                             <label for="description" class="control-label">Description</label>
//                             <textarea class="form-control" id="description" name="description" rows="3" value=""></textarea>
//                         </div>
//                         <div class="md-form form-group md-outline input-with-post-icon datepicker">
//                             <label for="Release">Release</label>
//                             <input placeholder="Select date" type="date" id="release" class="form-control" name="release" value=""> 
//                         </div>

//                         <div class="row">
//                             <div class="form-group col-md-6">
//                                 <label for="producer">Producer</label>
//                                 <select id="ProducerIDName" class="form-control">
//                                 </select>
//                             </div>

//                             <div class="form-group col-md-6">
//                                 <label for="genre">Genre</label>
//                                 <select id="GenreIDName" class="form-control">
//                                 </select>
//                             </div>
//                         </div>

//                         <div class="modal-footer">
//                             <button type="button" class="btn btn-default" data-dismiss="modal" aria-label="Close">Close</button>
//                             <button type="submit" id="movieSubmit" class="btn btn-primary" data-bs-dismiss="modal">Save</button>
//                         </div>
//                     </div>
//                 </form>                
//             </div>
//         </div>
//         </div>
//     </div>
//     `,

//     genre:`
//     <div class="modal fade bd-modal-lg" id="genreCreate" tabindex="-1" aria-labelledby="genreCreate" aria-hidden="true">
//         <div class="modal-dialog modal-lg">
//             <div class="modal-content">
//                 <div class="modal-header">
//                     <h2>Create New Genre</h2>
//                     <button type="button" class="btn btn-default" data-dismiss="modal" aria-label="Close">X</button>
//                 </div>
//                 <div class="modal-body">
//                     <form id="createGenreForm" method="post" action="{{ route('genre.store') }}">
//                         <input type="hidden" name="_token" value="{{ csrf_token() }}">
//                         <div class="form-group">
//                             <label for="name" class="control-label">Name</label>
//                             <input type="text" class="form-control" id="name" name="name">
//                         </div>
//                         <div class="modal-footer">
//                             <button type="button" class="btn btn-default" data-dismiss="modal"
//                                 aria-label="Close">Close</button>
//                             <button type="submit" id="movieSubmit" class="btn btn-primary"
//                                 data-bs-dismiss="modal">Save</button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     </div>`,
    
//     producer:`
//     <div class="modal fade bd-modal-lg" id="producerCreate" tabindex="-1" aria-labelledby="producerCreate"
//     aria-hidden="true">
//         <div class="modal-dialog modal-lg">
//             <div class="modal-content">
//                 <div class="modal-header">
//                     <h2>Create New Producer</h2>
//                     <button type="button" class="btn btn-default" data-dismiss="modal" aria-label="Close">X</button>
//                 </div>
//                 <div class="modal-body">
//                     <form id="createProducerForm" method="post" action="{{ route('producer.store') }}">
//                         <input type="hidden" name="_token" value="{{ csrf_token() }}">
//                         <div class="form-group">
//                             <label for="name" class="control-label">Name</label>
//                             <input type="text" class="form-control" id="name" name="name">
//                         </div>
//                         <div>
//                             <label for="name" class="control-label">Email</label>
//                             <input type="text" class="form-control" id="email" name="email">
//                         </div>
//                         <div class="modal-footer">
//                             <button type="button" class="btn btn-default" data-dismiss="modal"
//                                 aria-label="Close">Close</button>
//                             <button type="submit" id="movieSubmit" class="btn btn-primary"
//                                 data-bs-dismiss="modal">Save</button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     </div>`,
// }