@extends('partial.layout')
@section('content')
    @include('teacher.partial.header')
    @include('teacher.partial.sidebar')
    <div class="content-wrapper">
        <section class="content-header">
            <h1>Class List</h1>
        </section>
        <section class="content">
            <div class="row">
                <div class="col-md-12">
                    <div class="box">
                        <div class="box-header">
                            <a href="{{url('/teacher/classes/create')}}" class="btn btn-primary">Create New Class</a>
                            @include('partial.alert')
                        </div>
                        <div class="box-body">
                            <div class="table-responsive">
                                <table id="example1" class="table table-bordered table-striped">
                                    <thead>
                                    <tr>
                                        <th>Created at</th>
                                        <th>Name</th>
                                        <th>Type</th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <script>

                                    </script>
                                    @foreach ($classes as $cl)
                                        <?php $totalS = \App\User::where('class_id', $cl->id)->count(); ?>
                                        <tr>
                                            <td>{{$cl->created_at}}</td>
                                            <td>{{$cl->name}}</td>
                                            <td>{{$cl->type}}</td>
                                            <td><a href="#modal{{$cl->id}}" class="btn btn-danger">DELETE</a>
                                                <a href="{{url("teacher/class/".$cl->id."/student")}}" class="btn btn-primary">Students ({{$totalS}})</a></td>
                                        </tr>
                                        <div data-remodal-id="modal{{$cl->id}}" role="dialog" class="delete_model_c">
                                            <div>
                                                <h2>Delete Class</h2>
                                                <p>Are you sure that you want to delete {{$cl->name}}?</p>
                                            </div>
                                            <br>
                                            <form method="post" action="{{url("teacher/classes/".$cl->id)}}">
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

        });
    </script>
@endsection