@extends('templates.main')
@section('body')
<h1>Movies</h1>
<button class="btn btn-primary" type="submit">Add Movie</button><br><br>
<table class="table table-hover mx-auto">
    <thead>
        <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Title</th>
            <th>Description</th>
            <th>Release</th>
            <th>Genre</th>
            <th>producer</th>
            <th>Action</th>
        </tr>
    </thead>
    <tr>
        @foreach ($movies as $movie)
            <tr>
                <td>{{$movie['id']}}</td>
                <td>{{$movie['imgpath']}}</td>
                <td>{{$movie['title']}}</td>
                <td>{{$movie['description']}}</td>
                <td>{{$movie['release']}}</td>
                <td>{{$movie['genre_id']}}</td>
                <td>{{$movie['producer_id']}}</td>
                <td><a href="#">Edit</a> | <a href="#">Delete</a></td>
            </tr>
        @endforeach
    </tr>
</table>
@endsection