@extends('partial.layout')
@section('content')
    @include('teacher.partial.header')
    @include('teacher.partial.sidebar')
    <div class="content-wrapper">
        <section class="content-header">
            <?php $school = \App\School::find(\Auth::user()->school_id); ?>
            <h1>Students Progress <small>{{$school->school_code.' | '.$school->name}}</small></h1>
        </section>
        <section class="content">
            <div class="row">
                <div class="col-md-12">
                    <div class="box">
                        <div class="box-header">
                            <div class="bread-crumbs">
                                <a href="{{url('/teacher/progress')}}">Class Progress</a> /
                                <span>Students Progress</span>
                            </div>
                            @include('partial.alert')
                        </div>
                        <div class="box-body">
                            <?php $class = \App\SchoolClass::find($classId);
                            ?>
                            <p>Class: {{$class->name}}</p>
                            <p>Class Type: {{$class->type}}</p>
                            <div class="table-responsive">
                                <table id="example2" class="table table-bordered table-striped">
                                    <thead>
                                    <tr>
                                        <th>Student's Name</th>
                                        <th>MyKad No</th>
                                        <th>Action</th>
                                        <th>Stage</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    @foreach ($students as $student)
                                        <?php $stages = \App\StudentRecord::where('user_id', $student->id)->pluck('stage')->toArray();
                                        $stages = array_unique($stages); ?>
                                    <tr>
                                        <td><a href="{{url('/teacher/progress/'.$classId.'/'.$student->id)}}">{{$student->name}}</a></td>
                                        <td>{{$student->ic_number}}</td>
                                        <td><a href="{{url('/teacher/class/'.$classId.'/student/'.$student->id.'/edit')}}" class="btn btn-warning">Edit</a>
                                            @if(count($stages) < 1)<a href="#deleteSchool{{$student->id}}" class="btn btn-danger">DELETE</a> @endif
                                        </td>
                                        <td>{{count($stages)}}/20</td>
                                    </tr>
                                        @if(count($stages) < 1)
                                            <div data-remodal-id="deleteSchool{{$student->id}}" role="dialog" class="delete_model_c">
                                                <div>
                                                    <h2>Delete Student</h2>
                                                    <p>All records of this student will be DELETED. This action CANNOT be reversed. Are you sure?</p>
                                                </div>
                                                <br>
                                                <form method="post" action="{{url('/teacher/class/'.$classId.'/student/'.$student->id)}}">
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
                </div>
            </div>
        </section>
    </div>
    @include('teacher.partial.footer')
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