@extends('partial.layout')
@section('content')
    @include('admin.partial.header')
    @include('admin.partial.sidebar')
    <div class="content-wrapper">
        <section class="content-header">
            <h1>School Progress <small>{{$state}} | {{$school->name}}</small></h1>
        </section>
        <section class="content">
            <div class="row">
                <div class="col-md-12">
                    <div class="box">
                        <div class="box-header">
                            <div class="bread-crumbs">
                                <a href="{{url('/admin/dashboard')}}">Dashboard</a> /
                                <a href="{{url('/admin/progress')}}">Nationwide Progress</a> /
                                <a href="{{url('/admin/progress/'.$state)}}">State Progress</a> /
                                <span>School Progress</span>
                            </div>
                            @include('partial.alert')
                        </div>
                        <div class="box-body">
                            <?php $manager = \App\User::where([['school_id', $school->id], ['type', 2]])->first(); ?>
                            @if(!empty($manager))
                            <p>School Manager: {{$manager->name}}</p>
                            <p>Email: {{$manager->email}}</p>
                            <p>Phone: {{$manager->phone}}</p>
                                @endif
                            <div class="table-responsive">
                                <table id="example2" class="table table-bordered table-striped">
                                    <thead>
                                    <tr>
                                        <th>Teacher's Name</th>
                                        <th>Completion by class</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    @foreach ($teachers as $teacher)
                                        <?php
                                        $classes = \App\SchoolClass::where('teacher_id', $teacher->id)->count();
                                        $done = \App\SchoolClass::where([['teacher_id', $teacher->id], ['done', 1]])->count();
                                        ?>
                                        <tr>
                                            <td><a href="{{url('/admin/progress/'.$state.'/'.$school->id.'/'.$teacher->id)}}">{{$teacher->name}}</a></td>
                                            <td>{{$done}}/{{$classes}}</td>
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
    @include('admin.partial.footer')
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