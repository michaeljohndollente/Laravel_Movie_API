<nav class="navbar navbar-expand-lg">
  <a class="navbar-brand" href="#">LaMovies</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse nav-piils" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link linkIndex" id="#v-piils-movie-tab" data-bs-toggle="piil" href="#movie" 
        role="tab" aria-controls="v-pills-movie" aria-selected="true" data-id="movie">Movies</a>
      </li>
      <li class="nav-item">
        <a class="nav-link linkIndex" id="#v-piils-actor-tab" data-bs-toggle="piil" href="#actor" 
        role="tab" aria-controls="v-pills-actor" aria-selected="true" data-id="actor">Actors</a>
      </li>
      <li class="nav-item">
        <a class="nav-link linkIndex" id="#v-piils-role-tab" data-bs-toggle="piil" href="#role" 
        role="tab" aria-controls="v-pills-role" aria-selected="true" data-id="role">Roles</a>
      </li>
      <li class="nav-item">
        <a class="nav-link linkIndex" id="#v-piils-rate-tab" data-bs-toggle="piil" href="#rate" 
        role="tab" aria-controls="v-pills-rate" aria-selected="true" data-id="rate">Rates</a>
      </li>
      <li class="nav-item">
        <a class="nav-link linkIndex" id="#v-piils-genre-tab" data-bs-toggle="piil" href="#genre" 
        role="tab" aria-controls="v-pills-genre" aria-selected="true" data-id="genre">Genres</a>
      </li>
      <li class="nav-item">
        <a class="nav-link linkIndex" id="#v-piils-producer-tab" data-bs-toggle="piil" href="#producer" 
        role="tab" aria-controls="v-pills-producer" aria-selected="true" data-id="producer">Producers</a>
      </li>
    </ul>
  </div>
</nav>
  
        <!-- Authentication Links -->
        {{-- @guest
        <li class="nav-item">
          <a class="nav-link" href="#">{{ __('Login') }}</a>
        </li>
        @if (Route::has('register'))
        <li class="nav-item">
          <a class="nav-link" href="#">{{ __('Register') }}</a>
        </li>
        @endif
        @else
        <li class="nav-item dropdown">
          <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
            {{ Auth::user()->name }}
          </a>
  
            <form id="logout-form" action="#" method="POST" class="d-none">
              @csrf
            </form>
          </div>
        </li>
        @endguest --}}