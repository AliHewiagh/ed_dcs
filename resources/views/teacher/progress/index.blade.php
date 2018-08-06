@extends('partial.layout')
@section('content')
    @include('teacher.partial.header')
    @include('teacher.partial.sidebar')
    <div class="content-wrapper">
        <section class="content-header">
            <?php $school = \App\School::find(\Auth::user()->school_id); ?>
            <h1>Class Progress <small>{{$school->school_code.' | '.$school->name}}</small></h1>
        </section>
        <section class="content">
            <div class="row">
                <div class="col-md-12">
                    <div class="box">
                        <div class="box-header">
                            <div class="bread-crumbs">
                                <span>Class Progress</span>
                            </div>
                            @include('partial.alert')
                        </div>
                        <div class="box-body">
                            <div class="table-responsive">
                                <table id="example2" class="table table-bordered table-striped">
                                    <thead>
                                    <tr>
                                        <th>Class</th>
                                        <th>Action</th>
                                        <th>Students Completion</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    @foreach ($classes as $class)
                                        <?php
                                        $students = \App\User::where('class_id', $class->id)->count();
                                        $done = \App\User::where([['class_id', $class->id], ['done', 1]])->count();
                                        ?>
                                        <tr>
                                            <td><a href="{{url('/teacher/progress/'.$class->id)}}">{{$class->name}}</a></td>
                                            <td><a href="{{url('/teacher/classes/'.$class->id.'/edit')}}" class="btn btn-warning">Edit</a>
                                                @if($students < 1)<a href="#deleteSchool{{$class->id}}" class="btn btn-danger">DELETE</a> @endif
                                            </td>
                                            <td>{{$done}}/{{$students}}</td>
                                        </tr>
                                        @if($students < 1)
                                            <div data-remodal-id="deleteSchool{{$class->id}}" role="dialog" class="delete_model_c">
                                                <div>
                                                    <h2>Delete Class</h2>
                                                    <p>All records of this class will be DELETED. This action CANNOT be reversed. Are you sure?</p>
                                                </div>
                                                <br>
                                                <form method="post" action="{{url('/teacher/classes/'.$class->id)}}">
                                                    @csrf @method('DELETE')
                                                    <button data-remodal-action="cancel" class="remodal-confirm">No</button>
                                                    <button type="submit" class="remodal-cancel">Yes</button>
                                                </form>
                                            </div>
                                        @endif
                                    @endforeach
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    @include('teacher.partial.footer')
    @include('partial.scripts')
    <script>
        $('.delete_model_c').remodal();
        $(function () {
            $("#example1").DataTable();
            $('#example2').DataTable();
        });
        $(document).ready(function () {
        });
    </script>
@endsection