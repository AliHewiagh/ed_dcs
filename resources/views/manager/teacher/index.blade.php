@extends('partial.layout')
@section('content')
    @include('manager.partial.header')
    @include('manager.partial.sidebar')
    <div class="content-wrapper">
        <section class="content-header">
            <h1>Teacher List</h1>
        </section>
        <section class="content">
            <div class="row">
                <div class="col-md-12">
                    <div class="box">
                        <div class="box-header">
                            <a href="{{url('/manager/teacher/create')}}" class="btn btn-primary">Create New Teacher</a>
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
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <script>

                                    </script>
                                    @foreach ($teachers as $teacher)
                                        <?php $classes = \App\SchoolClass::where("teacher_id", $teacher->id)->count(); ?>
                                        <tr>
                                            <td>{{$teacher->created_at}}</td>
                                            <td>{{$teacher->name}}</td>
                                            <td>{{$teacher->username}}</td>
                                            <td>{{$teacher->password}}</td>
                                            <td>{{$teacher->email}}</td>
                                            <td>{{$teacher->phone}}</td>
                                            <td><a href="{{url('/manager/teacher/'.$teacher->id.'/edit')}}" class="btn btn-warning">Edit</a>
                                                @if($classes < 1)<a href="#deleteTeacher{{$teacher->id}}" class="btn btn-danger">DELETE</a> @endif
                                            </td>
                                        </tr>
                                        @if($classes < 1)
                                            <div data-remodal-id="deleteTeacher{{$teacher->id}}" role="dialog" class="delete_model_c">
                                                <div>
                                                    <h2>Delete Teacher</h2>
                                                    <p>The selected Teacher will be DELETED. This action CANNOT be reversed. Are you sure?</p>
                                                </div>
                                                <br>
                                                <form method="post" action="{{url('/manager/teacher/'.$teacher->id)}}">
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
    @include('manager.partial.footer')
    @include('partial.scripts')
    <script>
        $('.delete_model_c').remodal();
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
    {{--<script>--}}
    {{--$('.delete_model_c').remodal({--}}
    {{--});--}}
    {{--</script>--}}
@endsection