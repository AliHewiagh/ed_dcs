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
            <h1>Create New Teacher</h1>
        </section>
        <section class="content">
            <div style="max-width: 600px">
                <div id="regErrorArea"></div>
                <form id="merchantForm" method="post" action="{{url("manager/teacher")}}">
                    @csrf
                    @include('partial.alert')
                    <div class="form-group">
                        <label for="nameInput">Name</label>
                        <input type="text" name="name" class="form-control required" id="nameInput" value="{{old('name')}}" required>
                    </div>
                    {{--<div class="form-group">--}}
                        {{--<label for="emailInput">Email Address</label>--}}
                        {{--<input type="email" name="email" class="form-control" id="emailInput" value="{{old('name')}}">--}}
                    {{--</div>--}}
                    {{--<div class="form-group">--}}
                        {{--<label for="phoneInput">Phone</label>--}}
                        {{--<input type="text" name="phone" class="form-control" id="phoneInput" value="{{old('phone')}}">--}}
                    {{--</div>--}}
                    <br />
                    <button id="submitBtn" type="submit" class="btn btn-primary btn-block">Create</button>
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