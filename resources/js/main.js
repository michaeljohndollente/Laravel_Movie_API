import actor from './actor';
import genre from './genre';
import producer from './producer';
import movie from './movie';

$(document).ready(function () {
    $('.linkIndex').on('click', (function (e) {
        let linkIndex = e.currentTarget.dataset.id
        $.ajax({
            type: "GET",
            url: "/api/" + linkIndex,
            error: function (response) {
                console.log(response)
            },
            success(response) {
                switch (linkIndex) {
                    case 'actor':
                        actor.show(response)
                        break;

                    case 'movie':
                        movie.show(response)
                        break;

                    case 'genre':
                        genre.show(response)
                        break;

                    case 'producer':
                        producer.show(response)
                        break;

                    default:
                        break;
                }
            },
        });
    }));
    $(".draggable").draggable();
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
