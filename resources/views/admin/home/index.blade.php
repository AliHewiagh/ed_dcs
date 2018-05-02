@extends('partial.layout')
@section('content')
    @include('admin.partial.header')
    @include('admin.partial.sidebar')
    <div class="content-wrapper">
        <section class="content-header">

           <div class="container " >
             <ol class="breadcrumb">
       <li class="breadcrumb-item">
         <a href="#">Dashboard</a>
       </li>
       <li class="breadcrumb-item active">My Dashboard</li>
     </ol>
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
