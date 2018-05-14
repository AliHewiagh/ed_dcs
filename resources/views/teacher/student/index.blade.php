@extends('partial.layout')
@section('content')
    @include('teacher.partial.header')
    @include('teacher.partial.sidebar')
    <div class="content-wrapper">
        <section class="content-header">
            <h1>Student List</h1>
        </section>
        <section class="content">
            <div class="row">
                <div class="col-md-12">
                    <div class="box">
                        <div class="box-header">
                            <a href="{{url('/teacher/class/'.$classId.'/student/create')}}" class="btn btn-primary">Create New Student</a>
                            <form method="post" action="{{url('/teacher/class/'.$classId.'/students/upload')}}" style="display: inline-block" id="uploadStudentForm" enctype="multipart/form-data">
                                @csrf
                                <label class="btn btn-warning">Import Students Excel
                                <input type="file" accept="text/csv" name="excel" style="display: none" id="uploadFileStudent">
                                </label>
                            </form>
                            <a href="{{asset('files/student-sample.csv')}}" class="label label-success" target="_blank">Excel Sample</a>
                            @include('partial.alert')
                        </div>
                        <div class="box-body">
                            <div class="table-responsive">
                                <table id="example1" class="table table-bordered table-striped">
                                    <thead>
                                    <tr>
                                        <th>Created at</th>
                                        <th>Name</th>
                                        <th>Username</th>
                                        <th>Password</th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <script>

                                    </script>
                                    @foreach ($students as $student)
                                        <tr>
                                            <td>{{$student->created_at}}</td>
                                            <td>{{$student->name}}</td>
                                            <td>{{$student->username}}</td>
                                            <td>{{$student->password}}</td>
                                            <td><a href="#modal{{$student->id}}" class="btn btn-danger">DELETE</a></td>
                                        </tr>
                                        <div data-remodal-id="modal{{$student->id}}" role="dialog" class="delete_model_c">
                                            <div>
                                                <h2>Delete Student</h2>
                                                <p>Are you sure that you want to delete {{$student->name}}?</p>
                                            </div>
                                            <br>
                                            <form method="post" action="{{url("teacher/class/".$classId."/student/".$student->id)}}">
                                                @method("DELETE")
                                                @csrf
                                                <button data-remodal-action="cancel" class="remodal-cancel">Cancel</button>
                                                <button type="submit" class="remodal-confirm">Confirm</button>
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
    @include('teacher.partial.footer')
    @include('partial.scripts')
    <script>
        $(function () {
            $("#example1").DataTable();
            $('#example2').DataTable({
                "paging": true,
                "lengthChange": false,
                "searching": false,
                "ordering": true,
                "info": true,
                "autoWidth": false
            });
        });
    </script>
    <script>
        $('.delete_model_c').remodal({
        });
        $(document).ready(function () {
            $("#uploadFileStudent").on("change", function () {
                $("#uploadStudentForm").submit();
            });
        });
    </script>
@endsection