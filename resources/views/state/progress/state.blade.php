@extends('partial.layout')
@section('content')
    @include('state.partial.header')
    @include('state.partial.sidebar')
    <div class="content-wrapper">
        <section class="content-header">
            <?php $s = \App\State::find($state); ?>
            <h1>State Progress <small>{{$s->name}}</small></h1>
        </section>
        <section class="content">
            <div class="row">
                <div class="col-md-12">
                    <div class="box">
                        <div class="box-header">
                            <div class="bread-crumbs">
                                <a href="{{url('/state/dashboard')}}">Dashboard</a> /
                                <span>State Progress</span>
                            </div>
                            @include('partial.alert')
                        </div>
                        <div class="box-body">
                            <div class="table-responsive">
                                <table id="example2" class="table table-bordered table-striped">
                                    <thead>
                                    <tr>
                                        <th>School</th>
                                        <th>School code</th>
                                        <th>PKG</th>
                                        <th>Completion by class</th>
                                        <th>Students Completion</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    @foreach ($schools as $school)
                                        <?php
                                        $classes = \App\SchoolClass::where('school_id', $school->id)->count();
                                        $done = \App\SchoolClass::where([['school_id', $school->id], ['done', 1]])->count();
                                        $studentDone = \App\User::where([['school_id', $school->id], ['done', 1], ['type', 4]])->count();
                                        $totalStudents = \App\User::where([['school_id', $school->id], ['type', 4]])->count();
                                        ?>
                                        <tr>
                                            <td><a href="{{url('/state/progress/'.$school->id)}}">{{$school->name}}</a></td>
                                            <td>{{$school->school_code}}</td>
                                            <td>{{$school->pkg}}</td>
                                            <td>{{$done}}/{{$classes}}</td>
                                            <td>{{$studentDone}}/{{$totalStudents}}</td>
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