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
            <?php $school = \App\School::find(\Auth::user()->school_id); ?>
            <h1>Edit Class <small>{{$school->school_code.' | '.$school->name}}</small></h1>
        </section>
        <section class="content">
            <div style="max-width: 600px">
                <div id="regErrorArea"></div>
                <form id="merchantForm" method="post" action="{{url("teacher/classes/".$class->id)}}">
                    @csrf
                    @method('PUT')
                    @include('partial.alert')
                    <div class="form-group">
                        <label for="nameInput">Name</label>
                        <input type="text" name="name" class="form-control required" id="nameInput" value="{{$class->name, old('name')}}" required>
                    </div>
                    <div class="form-group">
                        <label for="levelInput">Class Type</label>
                        <select class="form-control" id="levelInput" name="type" required>
                            @if($school->type== 1)
                                <option value="Year 6">Year 6</option>
                            @else
                                <option value="">Select an option</option>
                                <option value="Form 3">Form 3</option>
                                <option value="Form 5">Form 5</option>
                            @endif
                        </select>
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