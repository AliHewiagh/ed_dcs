@extends('partial.layout')
@section('content')
    <style>
        body{
            background: url('{{asset('images/layout/login_bg.jpg')}}') center center no-repeat;
            background-size: cover;
        }
        .skin-blue .wrapper{
            background-color: transparent;
        }
    </style>
    <div class="container" style="padding-bottom: 50px">
        <div class="login-logo">
            <img src="{{asset("images/layout/title_tapir.png")}}">
            <div class="login-title">DIGITAL COMPETENCY SCORE</div>
        </div>
        <div class="row justify-content-center">
            <div class="col-md-12">
                @include('partial.alert')
                <div class="card card-default">
                    <div class="card-header">Please provide your details.</div>
                    <div id="errorMessageA"></div>
                    <div class="card-body">
                        <form method="POST" action="{{ route('teacher_info_update_store') }}">
                            @csrf
                            <div class="form-group">
                                <label for="emailInput">Email Address</label>
                                <input type="email" name="email" class="form-control" id="emailInput" value="{{old('email')}}" required>
                            </div>
                            <div class="form-group">
                                <label for="phoneInput">Phone</label>
                                <input type="number" name="phone" class="form-control" id="phoneInput" value="{{old('phone')}}" required>
                            </div>

                            <div class="form-group">
                                <button type="submit" class="btn btn-primary btn-block" id="updateIC">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    @include('partial.scripts')
    <script>
        $(document).ready(function () {

        });
    </script>
@endsection