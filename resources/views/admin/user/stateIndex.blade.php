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
                                            <td><a href="{{url('/admin/manage/admin/state/'.$user->id.'/edit')}}" class="btn btn-warning">Edit</a>
                                                <a href="#deleteAdmin{{$user->id}}" class="btn btn-danger">DELETE</a>
                                            </td>
                                        </tr>
                                        <div data-remodal-id="deleteAdmin{{$user->id}}" role="dialog" class="delete_model_c">
                                            <div>
                                                <h2>Delete State Admin</h2>
                                                <p>The selected State Admin will be DELETED. This action CANNOT be reversed. Are you sure?</p>
                                            </div>
                                            <br>
                                            <form method="post" action="{{url('/admin/manage/admin/state/'.$user->id)}}">
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
    @include('admin.partial.footer')
    @include('partial.scripts')
    <script>
        $(function () {
            $('.delete_model_c').remodal();
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