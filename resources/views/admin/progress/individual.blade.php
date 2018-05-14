@extends('partial.layout')
@section('content')
    @include('admin.partial.header')
    @include('admin.partial.sidebar')
    <div class="content-wrapper">
        <section class="content-header">
            <h1>Individual Progress <small>{{$state}}</small></h1>
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
                                <span>Individual Progress</span>
                            </div>
                            @include('partial.alert')
                        </div>
                        <div class="box-body">
                            <div class="table-responsive">
                                <table id="example2" class="table table-bordered table-striped">
                                    <thead>
                                    <tr>
                                        <th>Student's Name</th>
                                        <th>State</th>
                                        <th>School's Name</th>
                                        <th>Gender</th>
                                        <th>Technology</th>
                                        <th>Ethics</th>
                                        <th>Cognitive</th>
                                        <th>Overall</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <?php $school = \App\School::find($schoolId); ?>
                                    <tr>
                                        <td>{{$student->name}}</td>
                                        <td>{{$state}}</td>
                                        <td>{{$school->name}}</td>
                                        <td>{{$student->gender}}</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                    </tr>
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