@extends('partial.layout')
@section('content')
    <style>
        label{
            display: block;
        }
    </style>
    @include('teacher.partial.header')
    @include('teacher.partial.sidebar')
    <div class="content-wrapper">
        <section class="content-header">
            <h1>Setting</h1>
        </section>
        <section class="content">
            <div style="max-width: 600px">
                <div id="regErrorArea"></div>
                <form id="merchantForm" method="post" action="{{url("teacher/setting")}}">
                    @csrf
                    @method('PATCH')
                    @include('partial.alert')
                    <div class="form-group">
                        <label for="nameInput">Teacher's Name</label>
                        <input type="text" name="name" class="form-control required" id="nameInput" value="{{Auth::user()->name, old('name')}}" required>
                    </div>

                    <div class="form-group">
                        <label for="usernameInput">Username</label>
                        <p>Please use your MyKad number as the username. The password will be set to the last 4 digits of your MyKad number.</p>
                        <input type="text" name="username" class="form-control required" id="usernameInput" value="{{Auth::user()->username, old('username')}}" required>
                    </div>
                    <div class="form-group">
                        <label for="emailInput">Email Address</label>
                        <input type="email" name="email" class="form-control" id="emailInput" value="{{Auth::user()->email, old('email')}}" required>
                    </div>
                    <div class="form-group">
                        <label for="phoneInput">Phone</label>
                        <input type="number" name="phone" class="form-control" id="phoneInput" value="{{Auth::user()->phone, old('phone')}}" required>
                    </div>

                    <br />
                    <button id="submitBtn" type="submit" class="btn btn-primary btn-block">Save</button>
                </form>
                <br />
            </div>
        </section>
    </div>
    @include('teacher.partial.footer')
    @include('partial.scripts')
    <script>
        $(document).ready(function () {

        });
    </script>
@endsection