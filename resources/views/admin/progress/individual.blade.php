@extends('partial.layout')
@section('content')
    @include('admin.partial.header')
    @include('admin.partial.sidebar')
    <div class="content-wrapper">
        <section class="content-header">
            <h1>Individual Progress</h1>
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
                                    <?php $school = \App\School::find($schoolId);
                                    $techs = \App\StudentRecord::where([['user_id', $student->id], ['qDomain', 1]])->get();
                                    $cognitive = \App\StudentRecord::where([['user_id', $student->id], ['qDomain', 2]])->get();
                                    $ethics = \App\StudentRecord::where([['user_id', $student->id], ['qDomain', 3]])->get();
                                    if(count($techs) > 0){
                                        $techScore = round($techs->sum('score') / count($techs), 1);
                                    }else{
                                        $techScore = 0;
                                    }
                                    if(count($cognitive) > 0){
                                        $cognitiveScore = round($cognitive->sum('score') / count($cognitive), 1);
                                    }else{
                                        $cognitiveScore = 0;
                                    }
                                    if(count($ethics) > 0){
                                        $ethicsScore = round($ethics->sum('score') / count($ethics), 1);
                                    }else{
                                        $ethicsScore = 0;
                                    }
                                    ?>
                                    <tr>
                                        <td><a href="{{url('/admin/progress/'.$state.'/'.$schoolId.'/'.$teacherId.'/'.$classId.'/'.$student->id.'/detail')}}">{{$student->name}}</a></td>
                                        <td>{{$state}}</td>
                                        <td>{{$school->name}}</td>
                                        <td>{{$student->gender}}</td>
                                        <td>{{$techScore}}</td>
                                        <td>{{$ethicsScore}}</td>
                                        <td>{{$cognitiveScore}}</td>
                                        <td>{{round(($techScore+$ethicsScore+$cognitiveScore)/3, 1)}}</td>
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