@extends('partial.layout')
@section('content')
    @include('admin.partial.header')
    @include('admin.partial.sidebar')
    <div class="content-wrapper">
        <section class="content-header">
            <h1>Search</h1>
        </section>
        <section class="content">
            <div class="row">
                <div class="col-md-12">
                    @include('partial.alert')
                    @if(count($schools) >0)
                        <div class="box">
                            <div class="box-header">
                                <h4>School Results</h4>
                            </div>
                            <div class="box-body">
                                <div class="table-responsive">
                                    <table id="example1" class="table table-bordered table-striped">
                                        <thead>
                                        <tr>
                                            <th>School</th>
                                            <th>PKG</th>
                                            <th>PPD/PPW</th>
                                            <th>Completion by class</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        @foreach ($schools as $school)
                                            <?php
                                            $classes = \App\SchoolClass::where('school_id', $school->id)->count();
                                            $done = \App\SchoolClass::where([['school_id', $school->id], ['done', 1]])->count();
                                            ?>
                                            <tr>
                                                <td><a href="{{url('/admin/progress/'.$school->state_id.'/'.$school->id)}}">{{$school->name}}</a></td>
                                                <td>{{$school->pkg}}</td>
                                                <td>@if(!empty($school->location)){{$school->location->pp}}@endif</td>
                                                <td>{{$done}}/{{$classes}}</td>
                                            </tr>
                                        @endforeach
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    @endif

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
                                                <td><a href="{{url('/admin/progress/'.$school->state_id.'/'.$school->id.'/'.$class3->teacher_id.'/'.$student->class_id.'/'.$student->id)}}">{{$student->name}}</a></td>
                                                <td>{{$student->ic_number}}</td>
                                                <td>{{count($stages)}}/20</td>
                                            </tr>
                                        @endforeach
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    @endif
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