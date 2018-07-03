@extends('partial.layout')
@section('content')
    @include('admin.partial.header')
    @include('admin.partial.sidebar')
    <div class="content-wrapper">
        <section class="content-header">
            <h1>School Management</h1>
        </section>
        <section class="content">
            <div class="row">
                <div class="col-md-12">
                    <div class="box">
                        <div class="box-header">
                            <a href="{{url('/admin/school/create')}}" class="btn btn-primary">Create New School</a>
                            <form method="post" action="{{url('/admin/schools/upload')}}" style="display: inline-block" id="uploadStudentForm" enctype="multipart/form-data">
                                @csrf
                                <label class="btn btn-warning">Import Schools from MS Excel
                                    <input type="file" accept="text/csv" name="excel" style="display: none" id="uploadFileStudent">
                                </label>
                            </form>
                            <a href="{{asset('files/school-sample.csv')}}" class="label label-success" target="_blank">Excel Sample</a>
                            @include('partial.alert')
                        </div>
                        <div class="box-body">
                            <div class="table-responsive">
                                <table id="example1" class="table table-bordered table-striped">
                                    <thead>
                                    <tr>
                                        <th>School Code</th>
                                        <th>School Name</th>
                                        <th>School Manager Name</th>
                                        <th>Username</th>
                                        <th>Password</th>
                                        <th>Level</th>
                                        <th>State</th>
                                        <th>PKG</th>
                                        <th>PPD/PPW</th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    @foreach ($schools as $school)
                                        <tr>
                                            <td>@if(!empty($school->school_code)){{$school->school_code}} @else ?? @endif</td>
                                            <td>{{$school->name}}</td>
                                            <td>{{$school->user->name}}</td>
                                            <td>{{$school->user->username}}</td>
                                            <td>{{$school->user->password}}</td>
                                            <td>@if(!empty($school->type)) @if($school->type==1)Primary School @else Secondary School @endif @else ?? @endif</td>
                                            <td>@if(!empty($school->state)){{$school->state->name}} @else ?? @endif</td>
                                            <td>{{$school->pkg}}</td>
                                            <td>@if(!empty($school->location)){{$school->location->pp}} @else ?? @endif</td>
                                            <td><a href="{{url('/admin/school/'.$school->user_id.'/edit')}}" class="btn btn-warning">Edit</a></td>
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
        $(document).ready(function () {
            $("#uploadFileStudent").on("change", function () {
                $("#uploadStudentForm").submit();
            });
        });
    </script>
    {{--<script>--}}
        {{--$('.delete_model_c').remodal({--}}
        {{--});--}}
    {{--</script>--}}
@endsection