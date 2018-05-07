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
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <script>

                                    </script>
                                    @foreach ($teachers as $teacher)
                                        <tr>
                                            <td>{{$teacher->created_at}}</td>
                                            <td>{{$teacher->name}}</td>
                                            <td>{{$teacher->username}}</td>
                                            <td>{{$teacher->password}}</td>
                                            <td>{{$teacher->email}}</td>
                                            <td>{{$teacher->phone}}</td>
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
    @include('manager.partial.footer')
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
    {{--<script>--}}
    {{--$('.delete_model_c').remodal({--}}
    {{--});--}}
    {{--</script>--}}
@endsection