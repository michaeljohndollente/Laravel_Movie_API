import actor from './actor';
import genre from './genre';
import producer from './producer';
import movie from './movie';
import auth from './modals/authM'

$(document).ready(function () {
    $('.linkIndex').on('click', (function (e) {
        let linkIndex = e.currentTarget.dataset.id
        $.ajax({
            type: "GET",
            url: "/api/" + linkIndex,
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
            },
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

$('#content').append(auth);    

    $('#registerBtn').on('click', function (e) {
        var data = $('#registerForm').serialize();
        $.ajax({
        type: "POST",
        url: "/api/register",
        data: data,
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        dataType: "json",
        success: function(data) {
            console.log(data);
            $('#registerModal').each(function () {
              $(this).modal('hide');
            });

        },
        // error: function(error) {
        //     console.log('error');
        // }
    });
});

    $('#loginBtn').on('click', function (e) {
      //validation
      var data = $('#loginForm').serialize();
      console.log(data);
      $.ajax({
        type: "POST",
        url: "/api/login",
        data: data,
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        dataType: "json",
        success: function(data) {
            console.log(data);
            //Do Things Here
            window.localStorage.setItem('access_token', data.access_token);
        },
        error: function(error) {
            console.log(error);
            alert('Failed to login. Please Try again');
        }
      });

    });