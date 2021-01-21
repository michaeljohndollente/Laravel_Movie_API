export default function producerModals() {
    return `
    <div class="modal fade" id="producerCreateModal" tabindex="-1" aria-labelledby="producerCreate" aria-hidden="true"
            data-backdrop="false">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title">Create New Producer</h1>
                    </div>
                    <div class="modal-body">
                        <form class="producerCreateForm" id="producerCreateForm">
                            <div class="form-group">
                                <label for="name" class="control-label">Producer Name</label>
                                <input type="text" class="form-control " id="name" name="name">
                            </div>
                            <div class="form-group">
                                <label for="name" class="control-label">Email</label>
                                <input type="email" class="form-control" id="email" name="email">
                            </div>
                            <div class="modal-footer">
                                <button type="submit" class="btn btn-color" id="producerCreateSave">Save</button>
                                <button type="button" class="btn cancel" id="data-cancel" data-dismiss="modal">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="modal fade" id="producerEditModal" tabindex="-1" aria-labelledby="producerEditModal" aria-hidden="true"
            data-backdrop="false">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title">Edit Producer</h1>
                    </div>
                    <div class="modal-body">
                        <form class="producerEditForm" id="producerEditForm">
                        <div class="form-group">
                                <input type="hidden" id="id" name="id" value="">
                            </div>
                            <div class="form-group">
                                <label for="name" class="control-label">Producer Name</label>
                                <input type="text" class="form-control producerName" id="name" name="name">
                            </div>
                            <div class="form-group">
                                <label for="name" class="control-label">Email</label>
                                <input type="email" class="form-control producerEmail" id="email" name="email">
                            </div>
                            <div class="modal-footer">
                                <button type="submit" class="btn producerEditSave btn-color" 
                                    id="producerEditSave">Save</button>
                                <button type="button" class="btn cancel" data-dismiss="modal">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    
    `;
}
