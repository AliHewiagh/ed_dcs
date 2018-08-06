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
                                            <th>School Code</th>
                                            <th>School Level</th>
                                            <th>PKG</th>
                                            <th>PPD/PPW</th>
                                            <th>Completion by class</th>
                                            <th>Action</th>
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
                                                <td>{{$school->school_code}}</td>
                                                <td>@if($school->type== 1) Primary School @else Secondary School @endif</td>
                                                <td>{{$school->pkg}}</td>
                                                <td>@if(!empty($school->location)){{$school->location->pp}}@endif</td>
                                                <td>{{$done}}/{{$classes}}</td>
                                                <td><a href="{{url('/admin/school/'.$school->user_id.'/edit')}}" class="btn btn-warning">Edit</a>
                                                    @if($classes < 1)<a href="#deleteSchool{{$school->id}}" class="btn btn-danger">DELETE</a> @endif
                                                </td>
                                            </tr>
                                            @if($classes < 1)
                                                <div data-remodal-id="deleteSchool{{$school->id}}" role="dialog" class="delete_model_c">
                                                    <div>
                                                        <h2>Delete School</h2>
                                                        <p>All records of this school will be DELETED. This action CANNOT be reversed. Are you sure?</p>
                                                    </div>
                                                    <br>
                                                    <form method="post" action="{{url('/admin/school/'.$school->id)}}">
                                                        @csrf @method('DELETE')
                                                        <button data-remodal-action="cancel" class="remodal-confirm">No</button>
                                                        <button type="submit" class="remodal-cancel">Yes</button>
                                                    </form>
                                                </div>
                                            @endif
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
                                            <th>School Code</th>
                                            <th>School Name</th>
                                            <th>Class Name</th>
                                            <th>Class Type</th>
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
                                                <td><a href="{{url('/admin/progress/'.$school->state_id.'/'.$school->id.'/'.$student->class_id.'/'.$student->id)}}">{{$student->name}}</a></td>
                                                <td>{{$school->school_code}}</td>
                                                <td><a href="{{url('/admin/progress/'.$school->state_id.'/'.$school->id)}}">{{$school->name}}</a></td>
                                                <td><a href="{{url('/admin/progress/'.$school->state_id.'/'.$school->id.'/'.$student->class_id)}}">{{$class3->name}}</a></td>
                                                <td>{{$class3->type}}</td>
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
            $('.delete_model_c').remodal();
            $("#example1").DataTable();
            $('#example2').DataTable();
        });
        $(document).ready(function () {
        });
    </script>
@endsection