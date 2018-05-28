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
            <h1>Create New Student</h1>
        </section>
        <section class="content">
            <div style="max-width: 600px">
                <div id="regErrorArea"></div>
                <form id="merchantForm" method="post" action="{{url("teacher/class/".$classId."/student")}}">
                    @csrf
                    @include('partial.alert')
                    <div class="form-group">
                        <label for="nameInput">Name</label>
                        <input type="text" name="name" class="form-control required" id="nameInput" value="{{old('name')}}" required>
                    </div>
                    <div class="form-group">
                        <label for="emailInput">MyKad/MyKid Number</label>
                        <input type="number" name="ic_number" class="form-control" id="emailInput" value="{{old('ic_number')}}">
                    </div>
                    <br />
                    <button id="submitBtn" type="submit" class="btn btn-primary btn-block">Create</button>
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