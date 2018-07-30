@extends('partial.layout')
@section('content')
    @include('state.partial.header')
    @include('state.partial.sidebar')
    <div class="content-wrapper">
        <section class="content-header">
            <h1>Students Progress</h1>
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
                                <a href="{{url('/state/progress/'.$pkg.'/'.$schoolId.'/'.$teacherId)}}">Class Progress</a> /
                                <span>Students Progress</span>
                            </div>
                            @include('partial.alert')
                        </div>
                        <div class="box-body">
                            <div class="table-responsive">
                                <table id="example2" class="table table-bordered table-striped">
                                    <thead>
                                    <tr>
                                        <th>Student's Name</th>
                                        <th>MyKad No</th>
                                        <th>Stage</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    @foreach ($students as $student)
                                        <?php $stages = \App\StudentRecord::where('user_id', $student->id)->pluck('stage')->toArray();
                                        $stages = array_unique($stages); ?>
                                    <tr>
                                        <td><a href="{{url('/state/progress/'.$pkg.'/'.$schoolId.'/'.$teacherId.'/'.$classId.'/'.$student->id)}}">{{$student->name}}</a></td>
                                        <td>{{$student->ic_number}}</td>
                                        <td>{{count($stages)}}/20</td>
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