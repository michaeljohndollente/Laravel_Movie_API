export default function rolemodals() {
    return `
        <div class="modal fade" id="roleCreateModal" tabindex="-1" aria-labelledby="roleCreate" aria-hidden="true"
            data-bs-backdrop="false">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title">Create New Role</h1>
                    </div>
                    <div class="modal-body">
                        <form class="roleCreateForm" id="roleCreateForm">
                        <div class="form-group">
                            <label for="title" class="control-label">Name</label>
                            <input type="text" class="form-control" id="name" name="name" value="">
                        </div>
                        <div class="row">
                            <div class="form-group col-md-6">
                                <label for="actor">Actor</label>
                                <select id="ActorIDName" class="form-control" name="actor_id">
                                </select>
                            </div>

                            <div class="form-group col-md-6">
                                <label for="producer">Movie</label>
                                <select id="MovieIDName" class="form-control" name="movie_id">
                                </select>
                            </div>
                        </div>
                        
                            <div class="modal-footer">
                                <button type="submit" class="btn btn-color" id="roleCreateSave">Save</button>
                                <button type="button" class="btn cancel" id="roleDismiss" data-bs-dismiss="modal">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="modal fade" id="roleEditModal" tabindex="-1" aria-labelledby="roleEditModal" aria-hidden="true"
            data-bs-backdrop="false">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title">Edit Movie</h1>
                    </div>
                    <div class="modal-body">
                        <form class="roleEditForm" id="roleEditForm">
                        <div class="form-group">
                                <input type="hidden" id="id" name="id" value="">
                            </div>
                            <div class="form-group">
                            <label for="title" class="control-label">Title</label>
                            <input type="text" class="form-control roleName" id="name" name="name" value="">
                        </div>
                        <div class="row">
                            <div class="form-group col-md-6">
                                <label for="actor">Actor</label>
                                <select id="ActorIDName" class="form-control roleActor">
                                </select>
                            </div>

                            <div class="form-group col-md-6">
                                <label for="movie">Movie</label>
                                <select id="movieIDName" class="form-control roleMovie">
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
