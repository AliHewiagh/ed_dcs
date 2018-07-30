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
                        <label for="stateInput">State</label>
                        <select class="form-control" id="stateInput" name="state_id">
                            <option value="">Please select state</option>
                            @foreach($states as $state)
                                <option value="{{$state->id}}">{{$state->name}}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="sourceInput">PKG</label>
                        <select class="form-control" id="sourceInput" name="pkg_id">
                            <option value="">Please select pkg</option>
                            @foreach($pkgs as $pkg)
                            <option value="{{$pkg->id}}" data-state="{{$pkg->state_id}}" style="display: none" class="pkgClass">{{$pkg->pkg}}</option>
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
            $("#stateInput").on("change", function () {
                var v = $(this).val();
                $(".pkgClass").each(function () {
                   if($(this).data("state") == v){
                       $(this).css("display", "block");
                   }else{
                       $(this).css("display", "none");
                   }
                });
            });
        });
    </script>
@endsection