@extends('partial.layout')
@section('content')
    <style>
        body {
			background-image: url("{{asset("images/layout/login_bg.jpg")}}");
			height: 100%; 
			background-position: bottom right;
			background-repeat: no-repeat;
			background-size: cover;
        }
		.wrapper {
			background-color: transparent !important;
		}
    </style>
    <div class="container" style="padding-bottom: 50px">
        <div class="login-logo">
            <img src="{{asset("images/layout/title_tapir.png")}}">
			<h1 class="login-title">DIGITAL COMPETENCY SCORE</h1>
        </div>
        <div class="row justify-content-center">
            <div class="col-md-12">
                @include('partial.alert')
                <div class="card card-default">
                    <div class="card-header">Please insert your details to continue</div>
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