@extends('partial.layout')
@section('content')
    @include('manager.partial.header')
    @include('manager.partial.sidebar')
    <div class="content-wrapper">
        <section class="content-header">
            <h1>School Progress <small>{{$school->school_code.' | '.$school->name}}</small></h1>
        </section>
        <section class="content">
            <div class="row">
                <div class="col-md-12">
                    <div class="box">
                        <div class="box-header">
                            <div class="bread-crumbs">
                                <span>School Progress</span>
                            </div>
                            @include('partial.alert')
                        </div>
                        <div class="box-body">
                            <?php $manager = \App\User::where([['school_id', $school->id], ['type', 2]])->first(); ?>
                            <div class="table-responsive">
                                <table id="example2" class="table table-bordered table-striped">
                                    <thead>
                                    <tr>
                                        <th>Class</th>
                                        <th>Class Type</th>
                                        <th>Teacher</th>
                                        <th>Students Completion</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    @foreach ($classes as $class)
                                        <?php
                                        $students = \App\User::where('class_id', $class->id)->count();
                                        $done = \App\User::where([['class_id', $class->id], ['done', 1]])->count();
                                        $teacher = \App\User::find($class->teacher_id);
                                        ?>
                                        <tr>
                                            <td><a href="{{url('/manager/progress/'.$class->id)}}">{{$class->name}}</a></td>
                                            <td>{{$class->type}}</td>
                                            <td>{{$teacher->name}}</td>
                                            <td>{{$done}}/{{$students}}</td>
                                        </tr>
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
    @include('manager.partial.footer')
    @include('partial.scripts')
    <script>
        $(function () {
            $("#example1").DataTable();
            $('#example2').DataTable();
        });
        $(document).ready(function () {
        });
    </script>
@endsection