@extends('partial.layout')
@section('content')
    @include('manager.partial.header')
    @include('manager.partial.sidebar')
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
    @include('manager.partial.footer')
    @include('partial.scripts')
@endsection