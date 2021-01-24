export default function genreModals() {
    return `
    <div class="modal fade" id="genreCreateModal" tabindex="-1" aria-labelledby="genreCreate" aria-hidden="true"
            data-bs-backdrop="false">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title">Create New Genre</h1>
                    </div>
                    <div class="modal-body">
                        <form class="genreCreateForm" id="genreCreateForm">
                            <div class="form-group">
                                <label for="lname" class="control-label">Genre Description</label>
                                <input type="text" class="form-control " id="name" name="name">
                            </div>
                            <div class="modal-footer">
                                <button type="submit" class="btn btn-color" id="genreCreateSave">Save</button>
                                <button type="button" class="btn cancel" id="data-cancel" data-bs-dismiss="modal">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="modal fade" id="genreEditModal" tabindex="-1" aria-labelledby="genreEditModal" aria-hidden="true"
            data-bs-backdrop="false">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title">Edit Genre</h1>
                    </div>
                    <div class="modal-body">
                        <form class="genreEditForm" id="genreEditForm">
                        <div class="form-group">
                                <input type="hidden" id="id" name="id" value="">
                            </div>
                            <div class="form-group">
                                <label for="lname" class="control-label">Genre Description</label>
                                <input type="text" class="form-control genreName" id="name" name="name">
                            </div>
                            <div class="modal-footer">
                                <button type="submit" class="btn genreEditSave btn-color" 
                                    id="genreEditSave">Save</button>
                                <button type="button" class="btn cancel" data-bs-dismiss="modal">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    
    `;
}
