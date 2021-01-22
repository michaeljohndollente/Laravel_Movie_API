export default function moviesModals() {
    return `
        <div class="modal fade" id="movieCreateModal" tabindex="-1" aria-labelledby="movieCreate" aria-hidden="true"
            data-backdrop="false">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title">Create New Movie</h1>
                    </div>
                    <div class="modal-body">
                        <form class="movieCreateForm" id="movieCreateForm">
                        <div class="form-group">
                            <label for="title" class="control-label">Title</label>
                            <input type="text" class="form-control" id="title" name="title" value="">
                        </div>
                        <div class="form-group">
                            <label for="description" class="control-label">Description</label>
                            <textarea class="form-control" id="description" name="description" rows="3" value=""></textarea>
                        </div>
                        <div class="md-form form-group md-outline input-with-post-icon datepicker">
                            <label for="Release">Release</label>
                            <input placeholder="Select date" type="date" id="release" class="form-control" name="release" value=""> 
                        </div>

                        <div class="row">
                            <div class="form-group col-md-6">
                                <label for="genre">Genre</label>
                                <select id="GenreIDName" class="form-control" name="genre_id">
                                </select>
                            </div>

                            <div class="form-group col-md-6">
                                <label for="producer">Producer</label>
                                <select id="ProducerIDName" class="form-control" name="producer_id">
                                </select>
                            </div>
                        </div>
                        
                            <div class="modal-footer">
                                <button type="submit" class="btn btn-color" id="movieCreateSave">Save</button>
                                <button type="button" class="btn cancel" id="movieDismiss" data-bs-dismiss="modal">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="modal fade" id="movieEditModal" tabindex="-1" aria-labelledby="movieEditModal" aria-hidden="true"
            data-backdrop="false">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title">Edit Movie</h1>
                    </div>
                    <div class="modal-body">
                        <form class="movieEditForm" id="movieEditForm">
                        <div class="form-group">
                                <input type="hidden" id="id" name="id" value="">
                            </div>
                            <div class="form-group">
                            <label for="title" class="control-label">Title</label>
                            <input type="text" class="form-control movieTitle" id="title" name="title" value="">
                        </div>
                        <div class="form-group">
                            <label for="description" class="control-label">Description</label>
                            <textarea class="form-control movieDescription" id="description" name="description" rows="3" value=""></textarea>
                        </div>
                        <div class="md-form form-group md-outline input-with-post-icon datepicker">
                            <label for="Release">Release</label>
                            <input placeholder="Select date" type="date" id="release" class="form-control movieRelease" name="release" value=""> 
                        </div>

                        <div class="row">
                            <div class="form-group col-md-6">
                                <label for="producer">Producer</label>
                                <select id="ProducerIDName" class="form-control movieProducer">
                                </select>
                            </div>

                            <div class="form-group col-md-6">
                                <label for="genre">Genre</label>
                                <select id="GenreIDName" class="form-control movieGenre">
                                </select>
                            </div>
                        </div>
                            <div class="modal-footer">
                                <button type="submit" class="btn movieEditSave btn-color" 
                                    id="movieEditSave">Save</button>
                                <button type="button" class="btn cancel" data-bs-dismiss="modal">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        `;
}
