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
            <h1>Edit Student Details</h1>
        </section>
        <section class="content">
            <div style="max-width: 600px">
                <div id="regErrorArea"></div>
                <form id="merchantForm" method="post" action="{{url('/admin/student/edit/'.$student->id)}}">
                    @csrf
                    @method('PUT')
                    @include('partial.alert')
                    <div class="form-group">
                        <label for="nameInput">Name</label>
                        <input type="text" name="name" class="form-control" id="nameInput" value="{{$student->name}}" required>
                    </div>
                    <div class="form-group">
                        <label for="ic_numberInput">MyKad/MyKid Number</label>
                        <input type="text" name="ic_number" class="form-control" id="ic_numberInput" value="{{$student->ic_number}}" required>
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