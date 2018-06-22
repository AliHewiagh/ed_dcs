@extends('partial.layout')
@section('content')
    @include('manager.partial.header')
    @include('manager.partial.sidebar')
    <div class="content-wrapper">
        <section class="content-header">
            <h1>Search</h1>
        </section>
        <section class="content">
            <div class="row">
                <div class="col-md-12">
                    @include('partial.alert')
                    @if(count($students) >0)
                        <div class="box">
                            <div class="box-header">
                                <h4>Student Results</h4>
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
                                            <?php
                                            $stages = \App\StudentRecord::where('user_id', $student->id)->pluck('stage')->toArray();
                                            $stages = array_unique($stages);
                                            $school = \App\School::find($student->school_id);
                                            $class3 = \App\SchoolClass::find($student->class_id)
                                            ?>
                                            <tr>
                                                <td><a href="{{url('/manager/progress/'.$class3->teacher_id.'/'.$student->class_id.'/'.$student->id)}}">{{$student->name}}</a></td>
                                                <td>{{$student->ic_number}}</td>
                                                <td>{{count($stages)}}/20</td>
                                            </tr>
                                        @endforeach
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    @else
                        <div class="box">
                            <div class="box-header">
                                <h4>No Result</h4>
                            </div>
                        </div>
                    @endif
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