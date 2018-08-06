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
    <div class="container">
        <div class="login-logo">
            <img src="{{asset("images/layout/title_tapir.png")}}">
            <div class="login-title">DIGITAL COMPETENCY SCORE</div>
        </div>
        <div class="row justify-content-center">
            <div class="col-md-12">
                @include('partial.alert')
                <div class="card card-default">
                    <div class="card-header">Please insert your IC number</div>
                    <div id="errorMessageA"></div>
                    <div class="card-body">
                        <form method="POST" action="{{ route('login_path') }}">
                            @csrf
                            <div class="form-group row">
                                <label for="icNumberInput" class="col-md-4 col-form-label text-right">MyKad / MyKid</label>

                                <div class="col-md-8">
                                    <input id="icNumberInput" type="number" class="form-control{{ $errors->has('ic_number') ? ' is-invalid' : '' }}" name="ic_number" value="{{ old('ic_number') }}" required autofocus>

                                    @if ($errors->has('ic_number'))
                                        <span class="invalid-feedback">
                                        <strong>{{ $errors->first('ic_number') }}</strong>
                                    </span>
                                    @endif
                                </div>
                            </div>

                            <div class="form-group row mb-0">
                                <div class="col-md-8 col-md-offset-4">
                                    <button type="button" class="btn btn-primary btn-block" id="updateIC">
                                        Save
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div data-remodal-id="modalA" role="dialog" class="delete_model_c">
        <div>
            <h2>MyKad Number Changed Successfully!</h2>
            <p>Please press ok to continue.</p>
        </div>
        <br>
        <form method="post" action="{{url("/manager/ic/update")}}">
            @csrf
            <input name="ic_number" id="icForSubmit" type="hidden" value="">
            {{--<button data-remodal-action="cancel" class="remodal-cancel">Cancel</button>--}}
            <button type="submit" class="remodal-confirm">Ok</button>
        </form>
    </div>
    @include('partial.scripts')
    <script>
        $(document).ready(function () {
            var inst = $('[data-remodal-id=modalA]').remodal();
            $("#updateIC").on("click", function () {
                var icNumber = $("#icNumberInput").val();
                if(icNumber.length == 12){
                    $("#errorMessageA").html("");
                    inst.open();
                    $("#icForSubmit").val(icNumber);
                    console.log(icNumber);
                }else{
                    $("#errorMessageA").html('<div class="alert alert-danger">Please insert correct IC number, without space!</div>')
                }
            });
        });
        $('.delete_model_c').remodal({
            closeOnEscape:false,
            closeOnOutsideClick:false
        });
    </script>
@endsection