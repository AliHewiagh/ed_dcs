@extends('partial.layout')
@section('content')
    @include('state.partial.header')
    @include('state.partial.sidebar')
    <div class="content-wrapper">
        <section class="content-header">
            <?php $s = \App\State::find($state); ?>
            <h1>Class Progress <small>{{$s->name}}</small></h1>
        </section>
        <section class="content">
            <div class="row">
                <div class="col-md-12">
                    <div class="box">
                        <div class="box-header">
                            <div class="bread-crumbs">
                                <a href="{{url('/state/dashboard')}}">Dashboard</a> /
                                <a href="{{url('/state/progress/')}}">State Progress</a> /
                                <a href="{{url('/state/progress/'.$pkg)}}">PKG Progress</a> /
                                <a href="{{url('/state/progress/'.$pkg.'/'.$schoolId)}}">School Progress</a> /
                                <span>Class Progress</span>
                            </div>
                            @include('partial.alert')
                        </div>
                        <div class="box-body">
                            <p>Teacher: {{$teacher->name}}</p>
                            <div class="table-responsive">
                                <table id="example2" class="table table-bordered table-striped">
                                    <thead>
                                    <tr>
                                        <th>Class</th>
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
                                            <td><a href="{{url('/state/progress/'.$pkg.'/'.$schoolId.'/'.$teacherId.'/'.$class->id)}}">{{$class->name}}</a></td>
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
    @include('state.partial.footer')
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