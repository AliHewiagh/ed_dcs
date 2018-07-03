@extends('partial.layout')
@section('content')
    <style>
        label{
            display: block;
        }
    </style>
    @include('admin.partial.header')
    @include('admin.partial.sidebar')
    <div class="content-wrapper">
        <section class="content-header">
            <h1>Create New PKG Admin</h1>
        </section>
        <section class="content">
            <div style="max-width: 600px">
                <div id="regErrorArea"></div>
                <form id="merchantForm" method="post" action="{{url("admin/manage/admin/pkg")}}" enctype="multipart/form-data">
                    @csrf
                    @include('partial.alert')
                    <div class="form-group">
                        <label for="nameInput">Name</label>
                        <input type="text" name="name" class="form-control required" id="nameInput" value="{{old('name')}}" required>
                    </div>
                    <div class="form-group">
                        <label for="sourceInput">PKG</label>
                        <select class="form-control" id="sourceInput" name="pkg_id">
                            <option value="">Please select pkg</option>
                            @foreach($pkgs as $pkg)
                            <option value="{{$pkg->id}}">{{$pkg->pkg}}</option>
                           @endforeach
                        </select>
                    </div>
                    <button id="submitBtn" type="submit" class="btn btn-primary btn-block">Create</button>
                </form>
                <br />
            </div>
        </section>
    </div>
    @include('admin.partial.footer')
    @include('partial.scripts')
    <script>
        $(document).ready(function () {

        });
    </script>
@endsection