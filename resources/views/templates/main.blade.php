<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
</head>

<body>
    <div class="wrapper">
        <div class="header">
            @include('templates.nav')
        </div>
        <div class="body col-md-10 mx-auto" id="con">
            @yield('body')
        </div>
    </div>

    @include('templates.header')
<script type='text/javascript' src='{{ URL::asset('js/main.js') }}'></script>
</body>

</html>