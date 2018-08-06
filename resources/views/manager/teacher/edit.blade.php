@extends('partial.layout')
@section('content')
    <style>
        label{
            display: block;
        }
    </style>
    @include('manager.partial.header')
    @include('manager.partial.sidebar')
    <div class="content-wrapper">
        <section class="content-header">
            <h1>Edit Teacher</h1>
        </section>
        <section class="content">
            <div style="max-width: 600px">
                <div id="regErrorArea"></div>
                <form id="merchantForm" method="post" action="{{url("manager/teacher/".$teacher->id)}}">
                    @csrf @method('PATCH')
                    @include('partial.alert')
                    <div class="form-group">
                        <label for="nameInput">Name</label>
                        <input type="text" name="name" class="form-control required" id="nameInput" value="{{$teacher->name}}" required>
                    </div>
                    <div class="form-group">
                        <label for="usernameInput">Username</label>
                        <input type="text" name="username" class="form-control required" id="usernameInput" value="{{$teacher->username}}" required>
                    </div>
                    <div class="form-group">
                        <label for="passwordInput">Password</label>
                        <input type="text" name="password" class="form-control required" id="passwordInput" value="{{$teacher->password}}" required>
                    </div>
                    <div class="form-group">
                        <label for="emailInput">Email Address</label>
                        <input type="email" name="email" class="form-control" id="emailInput" value="{{$teacher->email}}">
                    </div>
                    <div class="form-group">
                        <label for="phoneInput">Phone</label>
                        <input type="text" name="phone" class="form-control" id="phoneInput" value="{{$teacher->phone}}">
                    </div>
                    <br />
                    <button id="submitBtn" type="submit" class="btn btn-primary btn-block">Update</button>
                </form>
                <br />
            </div>
        </section>
    </div>
    @include('manager.partial.footer')
    @include('partial.scripts')
    <script>
        $(document).ready(function () {

        });
    </script>
@endsection