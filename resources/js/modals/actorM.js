export default function actorModals() {
    return `

        <div class="modal fade" id="actorCreateModal" tabindex="-1" aria-labelledby="actorCreate" aria-hidden="true"
            data-backdrop="false">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title">Create New Actor</h1>
                    </div>
                    <div class="modal-body">
                        <form class="actorCreateForm" id="actorCreateForm">
                            <div class="form-group">
                                <label for="fname" class="control-label">First Name</label>
                                <input type="text" class="form-control" id="fname" name="fname">
                            </div>
                            <div class="form-group">
                                <label for="lname" class="control-label">Last name</label>
                                <input type="text" class="form-control " id="lname" name="lname">
                            </div>
                            <div class="form-group">
                                <label for="note">Note</label>
                                <textarea class="form-control" id="note" name="note" rows="3"></textarea>
                            </div>
                            <div class="modal-footer">
                                <button type="submit" class="btn btn-color" id="actorCreateSave">Save</button>
                                <button type="button" class="btn cancel" id="data-cancel" data-dismiss="modal">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="modal fade" id="actorEditModal" tabindex="-1" aria-labelledby="actorEditModal" aria-hidden="true"
            data-backdrop="false">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title">Edit Actor</h1>
                    </div>
                    <div class="modal-body">
                        <form class="actorEditForm" id="actorEditForm">
                        <div class="form-group">
                                <input type="hidden" id="id" name="id" value="">
                            </div>
                            <div class="form-group">
                                <label for="fname" class="control-label">First Name</label>
                                <input type="text" class="form-control actorFirstName" id="fname" name="fname">
                            </div>
                            <div class="form-group">
                                <label for="lname" class="control-label">Last name</label>
                                <input type="text" class="form-control actorLastName" id="lname" name="lname">
                            </div>
                            <div class="form-group">
                                <label for="note">Note</label>
                                <textarea class="form-control actorNote" id="note" name="note" rows="3"></textarea>
                            </div>
                            <div class="modal-footer">
                                <button type="submit" class="btn actorEditSave btn-color" 
                                    id="actorEditSave">Save</button>
                                    
                                <button type="button" class="btn cancel" data-dismiss="modal">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        `;
}
