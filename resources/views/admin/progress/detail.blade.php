@extends('partial.layout')
@section('content')
    @include('admin.partial.header')
    @include('admin.partial.sidebar')
    <div class="content-wrapper">
        <section class="content-header">
            <h1>Detailed Progress <small>{{$student->name}}</small></h1>
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
                                <a href="{{url('/admin/progress/'.$state.'/'.$schoolId)}}">School Progress</a> /
                                <a href="{{url('/admin/progress/'.$state.'/'.$schoolId.'/'.$teacherId)}}">Class Progress</a> /
                                <a href="{{url('/admin/progress/'.$state.'/'.$schoolId.'/'.$teacherId.'/'.$classId)}}">Students Progress</a> /
                                <a href="{{url('/admin/progress/'.$state.'/'.$schoolId.'/'.$teacherId.'/'.$classId.'/'.$student->id)}}">Individual Progress</a> /
                                <span>Detailed Progress</span>
                            </div>
                            @include('partial.alert')
                        </div>
                        <div class="box-body">
                            <div class="table-responsive">
                                <table id="example2" class="table table-bordered table-striped">
                                    <thead>
                                    <tr>
                                        <th>Stage</th>
                                        <th>Question ID</th>
                                        <th>Domain</th>
                                        <th>Parameter</th>
                                        <th>Skill</th>
                                        <th>Result</th>
                                        <th>Time (In Second)</th>
                                        <th>Score</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    @foreach($records as $record)
                                        <tr>
                                            <td>{{$record->stage}}</td>
                                            <td>{{$record->qId}}</td>
                                            <td>@if(!empty($record->domain())){{$record->domain()->description}} @endif</td>
                                            <td>@if(!empty($record->parameter())){{$record->parameter()->description}} @endif</td>
                                            <td>@if(!empty($record->skill())){{$record->skill()->description}} @endif</td>
                                            <td>{{$record->qResult}}</td>
                                            <td>{{$record->time}}</td>
                                            <td>{{$record->score}}</td>
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
            $('#example2').DataTable({
                "paging": false,
                "lengthChange": false,
                "searching": false,
                "ordering": true,
                "info": true,
                "autoWidth": true
            });
        });
        $(document).ready(function () {
        });
    </script>
@endsection