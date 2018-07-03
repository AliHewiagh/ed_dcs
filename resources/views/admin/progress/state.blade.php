@extends('partial.layout')
@section('content')
    @include('admin.partial.header')
    @include('admin.partial.sidebar')
    <div class="content-wrapper">
        <section class="content-header">
            <?php $s = \App\State::find($state); ?>
            <h1>State Progress <small>{{$s->name}}</small></h1>
        </section>
        <section class="content">
            <div class="row">
                <div class="col-md-12">
                    <div class="box">
                        <div class="box-header">
                            <div class="bread-crumbs">
                                <a href="{{url('/admin/dashboard')}}">Dashboard</a> /
                                <a href="{{url('/admin/progress')}}">Nationwide Progress</a> /
                                <span>State Progress</span>
                            </div>
                            @include('partial.alert')
                        </div>
                        <div class="box-body">
                            <div class="table-responsive">
                                <table id="example2" class="table table-bordered table-striped">
                                    <thead>
                                    <tr>
                                        <th>PKG</th>
                                        <th>Completion by school</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    @foreach ($pkgs as $pkg)
                                        <?php
                                        $p = $pkg->pkg;
                                        $school = \App\School::where('pkg', $p)->count();
                                        $done = \App\School::where([['pkg', $p], ['done', 1]])->count();
                                        ?>
                                        <tr>
                                            <td><a href="{{url('/admin/progress/'.$state.'/'.$pkg->id)}}">{{$p}}</a></td>
                                            <td>{{$done}}/{{$school}}</td>
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
            $('#example2').DataTable();
        });
        $(document).ready(function () {
        });
    </script>
@endsection