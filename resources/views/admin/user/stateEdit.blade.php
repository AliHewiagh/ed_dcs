@extends('partial.layout')
@section('content')
    <style>
        label{
            display: block;
        }
    </style>
    @include('admin.partial.header')
    @include('admin.partial.sidebar')
    <div class="content-wrapper">
        <section class="content-header">
            <h1>Edit State Admin</h1>
        </section>
        <section class="content">
            <div style="max-width: 600px">
                <div id="regErrorArea"></div>
                <form id="merchantForm" method="post" action="{{url("admin/manage/admin/state/".$user->id)}}" enctype="multipart/form-data">
                    @csrf
                    @method('PUT')
                    @include('partial.alert')
                    <div class="form-group">
                        <label for="nameInput">Name</label>
                        <input type="text" name="name" class="form-control required" id="nameInput" value="{{$user->name}}" required>
                    </div>
                    <div class="form-group">
                        <label for="sourceInput">State</label>
                        <select class="form-control" id="sourceInput" name="state_id">
                            <option value="">Please select state</option>
                            @foreach($states as $state)
                            <option value="{{$state->id}}" @if($state->id == $user->state_id) selected="selected" @endif>{{$state->name}}</option>
                           @endforeach
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="passwordInput">Password</label>
                        <input type="text" name="password" class="form-control required" id="passwordInput" value="{{$user->password}}" required>
                    </div>
                    <button id="submitBtn" type="submit" class="btn btn-primary btn-block">Update</button>
                </form>
                <br />
            </div>
        </section>
    </div>
    @include('admin.partial.footer')
    @include('partial.scripts')
    <script>
        $(document).ready(function () {

        });
    </script>
@endsection