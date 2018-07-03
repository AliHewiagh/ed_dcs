@extends('partial.layout')
@section('content')
    @include('admin.partial.header')
    @include('admin.partial.sidebar')
    <div class="content-wrapper">
        <section class="content-header">
            <h1>State Admin Management</h1>
        </section>
        <section class="content">
            <div class="row">
                <div class="col-md-12">
                    <div class="box">
                        <div class="box-header">
                            <a href="{{url('/admin/manage/admin/state/create')}}" class="btn btn-primary">Create New State Admin</a>
                            @include('partial.alert')
                        </div>
                        <div class="box-body">
                            <div class="table-responsive">
                                <table id="example1" class="table table-bordered table-striped">
                                    <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>State</th>
                                        <th>Username</th>
                                        <th>Password</th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    @foreach ($users as $user)
                                        <tr>
                                            <td>{{$user->name}}</td>
                                            <td>@if(!empty($user->state)){{$user->state->name}} @endif</td>
                                            <td>{{$user->username}}</td>
                                            <td>{{$user->password}}</td>
                                            <td><a href="{{url('/admin/manage/admin/state/'.$user->id.'/edit')}}" class="btn btn-warning">Edit</a></td>
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

        });
    </script>
@endsection