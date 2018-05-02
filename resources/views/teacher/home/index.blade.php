@extends('partial.layout')
@section('content')
    @include('teacher.partial.header')
    @include('teacher.partial.sidebar')
    <div class="content-wrapper">
        <section class="content-header">
            <h1>Dashboard</h1>
        </section>
        <section class="content">
            <div class="col-md-12">
                <div class="row">

                </div>
            </div>
        </section>
    </div>
    @include('teacher.partial.footer')
    @include('partial.scripts')
@endsection