export default function authModals() {
    return `
    <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="login" aria-hidden="true"
        data-bs-backdrop="false">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title">LOGIN</h1>
			        <button type="button" class="close" data-bs-dismiss="modal" aria-hidden="true">&times;</button>
                </div>
                <div class="modal-body">
                    <form id="loginForm">
                        <div class="form-group">
                            <label for="name" class="control-label">Name</label>
                            <input type="email" class="form-control" id="logemail" name="email" placeholder="Email">
                        </div>
                        <br>    
                            <div class="form-group">
                                <label for="password" class="control-label">Password</label>
                                <input type="password" class="form-control" id="logpassword" name="password" placeholder="Password">					
                            </div>
                            <br>
                            <div class="form-group">
                                <input type="submit" class="btn btn-primary" id="loginBtn" value="Login">
                            </div>
                        </form>
                    </div>              
                    <div class="modal-footer">
                        <a href="#">Forgot Password?</a>
                    </div>
                </div>  
            </div>  
        </div>
    

<div id="registerModal" class="modal fade">
	<div class="modal-dialog modal-login">
		<div class="modal-content">
			<div class="modal-header">				
				<h1 class="modal-title">REGISTER</h1>
				<button type="button" class="close" data-bs-dismiss="modal" aria-hidden="true">&times;</button>
			</div>
			<div class="modal-body">
				<form id="registerForm">
                    <div class="form-group">
                        <label for="name" class="control-label">Name</label>
						<input type="text" class="form-control" id="regname" name="name">
                    </div>
                    <br>
                    <div class="form-group">
                        <label for="email" class="control-label">Email</label>
						<input type="email" class="form-control" id="regemail" name="email">
					</div>
                    <br>
					<div class="form-group">
                        <label for="password" class="control-label">Password</label>
						<input type="password" class="form-control" id="regpassword" name="password">					
					</div>
                    <br>
					<div class="form-group">
						<input type="submit" class="btn btn-primary" id="registerBtn" value="Register">
					</div>
				</form>
			</div>
			<div class="modal-footer">
				<a href="#">Already Have an Account?</a>
			</div>
		</div>
	</div>
</div>     
    `;

}
