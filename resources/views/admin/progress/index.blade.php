@extends('partial.layout')
@section('content')
    @include('admin.partial.header')
    @include('admin.partial.sidebar')
    <div class="content-wrapper">
        <section class="content-header">
            <h1>Nationwide Progress</h1>
        </section>
        <section class="content">
            <div class="row">
                <div class="col-md-12">
                    <div class="box">
                        <div class="box-header">
                            <div class="bread-crumbs">
                                <a href="{{url('/admin/dashboard')}}">Dashboard</a> /
                                <span>Progress</span>
                            </div>
                            @include('partial.alert')
                        </div>
                        <div class="box-body">
                            <div class="table-responsive">
                                <table id="example2" class="table table-bordered table-striped">
                                    <thead>
                                    <tr>
                                        <th>State</th>
                                        <th>School Completion</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    @foreach ($locs as $loc)
                                        <?php
                                        $locationIds = \App\Location::where("state", $loc)->pluck('id')->toArray();
                                        $schools = \App\School::whereIn('location_id', $locationIds)->count();
                                        ?>
                                        <tr>
                                            <td><a href="{{url('/admin/progress/'.$loc)}}">{{$loc}}</a></td>
                                            <td>0/{{$schools}}</td>
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
                "paging": false,
                "lengthChange": false,
                "searching": true,
                "ordering": true,
                "info": true,
                "autoWidth": true
            });
        });
        $(document).ready(function () {
        });
    </script>
@endsection