@extends('partial.layout')
@section('content')
    @include('state.partial.header')
    @include('state.partial.sidebar')
    <div class="content-wrapper">
        <section class="content-header">
            <?php $school = \App\School::find($schoolId); ?>
            <h1>Class Progress <small>{{$school->school_code}} | {{$school->name}}</small></h1>
        </section>
        <section class="content">
            <div class="row">
                <div class="col-md-12">
                    <div class="box">
                        <div class="box-header">
                            <div class="bread-crumbs">
                                <a href="{{url('/state/dashboard')}}">Dashboard</a> /
                                <a href="{{url('/state/progress/')}}">State Progress</a> /
                                <a href="{{url('/state/progress/'.$schoolId)}}">School Progress</a> /
                                <span>Class Progress</span>
                            </div>
                            @include('partial.alert')
                        </div>
                        <div class="box-body">
                            <?php $class = \App\SchoolClass::find($classId);
                            $teacher = \App\User::find($class->teacher_id);
                            ?>
                            <p>Class: {{$class->name}}</p>
                            <p>Class Type: {{$class->type}}</p>
                            <p>Teacher: {{$teacher->name}}</p>
                            <p>Email: {{$teacher->email}}</p>
                            <p>Phone: {{$teacher->phone}}</p>
                            <div class="table-responsive">
                                <table id="example2" class="table table-bordered table-striped">
                                    <thead>
                                    <tr>
                                        <th>Student's Name</th>
                                        <th>MyKad No</th>
                                        <th>Stage</th>
                                        <th>Done</th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    @foreach ($students as $student)
                                        <?php $stages = \App\StudentRecord::where('user_id', $student->id)->pluck('stage')->toArray();
                                        $stages = array_unique($stages); ?>
                                        <tr>
                                            <td><a href="{{url('/state/progress/'.$schoolId.'/'.$classId.'/'.$student->id)}}">{{$student->name}}</a></td>
                                            <td>{{$student->ic_number}}</td>
                                            <td>{{count($stages)}}/20</td>
                                            <td>@if($student->done == 1) <span class="badge label-success">Yes</span> @else <span class="badge label-danger">No</span> @endif</td>
                                            <td>
                                                <form method="post" action="{{url('/state/student/done/update/'.$student->id)}}" style="margin-bottom:5px">
                                                    @csrf @method('PATCH')
                                                    @if($student->done == 1 && count($stages) == 20)
                                                    @elseif($student->done == 1)
                                                        <button type="submit" class="btn btn-danger">Mark As Not Done</button>
                                                    @else
                                                        <button type="submit" class="btn btn-success">Mark As Done</button>
                                                    @endif
                                                </form>
                                                <a href="{{url('/state/student/edit/'.$student->id)}}" class="btn btn-warning">Edit</a>
                                                <a href="#modalDelete{{$student->id}}" class="btn btn-danger">Delete</a>
                                            </td>
                                        </tr>
                                        <div data-remodal-id="modalDelete{{$student->id}}" role="dialog" class="delete_model_c">
                                            <div>
                                                <h2>Delete Student</h2>
                                                <p>All records of this student will be DELETED. This action CANNOT be reversed. Are you sure?</p>
                                            </div>
                                            <br>
                                            <form method="post" action="{{url('/state/student/delete/'.$student->id)}}">
                                                @csrf @method('DELETE')
                                                <button data-remodal-action="cancel" class="remodal-confirm">No</button>
                                                <button type="submit" class="remodal-cancel">Yes</button>
                                            </form>
                                        </div>
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
        $('.delete_model_c').remodal();
        $(function () {
            $("#example1").DataTable();
            $('#example2').DataTable();
        });
        $(document).ready(function () {
        });
    </script>
@endsection