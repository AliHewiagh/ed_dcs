@extends('partial.layout')
@section('content')
    @include('admin.partial.header')
    @include('admin.partial.sidebar')
    <div class="content-wrapper">
        <section class="content-header">


           <div class="jumbotron jumbotron-fluid" style="margin-top: -30px;">
  <div class="container-fluid">
    <img src="{{asset("images/layout/db.jpg")}}" class="img-responsive" alt="DB Image">
  </div>
</div>

        </section>
        <section class="content">
            <div class="col-md-12">
                <div class="row">

                </div>
            </div>
        </section>
    </div>
    @include('admin.partial.footer')
    @include('partial.scripts')
@endsection
