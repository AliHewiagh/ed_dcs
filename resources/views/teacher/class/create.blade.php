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
                <form id="merchantForm" method="post" action="{{url("teacher/classes")}}">
                    @csrf
                    @include('partial.alert')
                    <div class="form-group">
                        <label for="nameInput">Name</label>
                        <input type="text" name="name" class="form-control required" id="nameInput" value="{{old('name')}}" required>
                    </div>
                    <div class="form-group">
                        <label for="levelInput">Level</label>
                        <select class="form-control" id="levelInput" name="type" required>
                            @if($type== 1)
                                <option value="Year 6">Year 6</option>
                            @else
                                <option value="">Select an option</option>
                                <option value="Form 3">Form 3</option>
                                <option value="Form 5">Form 5</option>
                            @endif
                        </select>
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