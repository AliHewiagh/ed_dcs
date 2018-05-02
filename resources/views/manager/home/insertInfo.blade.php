@extends('partial.layout')
@section('content')
    <style>
        body, .skin-blue .wrapper{
            background-color: #1c253a;
        }
        select option[disabled] {
            display: none;
        }
    </style>
    <div class="container" style="padding-bottom: 50px">
        <div class="login-logo">
            <img src="{{asset("images/layout/login_logo.png")}}">
        </div>
        <div class="row justify-content-center">
            <div class="col-md-12">
                @include('partial.alert')
                <div class="card card-default">
                    <div class="card-header">Please insert your detail and school detail</div>
                    <div id="errorMessageA"></div>
                    <div class="card-body">
                        <form method="POST" action="{{ route('manager_info_update_store') }}">
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
                                <label for="school_codeInput">School Code</label>
                                <input type="text" name="school_code" class="form-control" id="school_codeInput" value="{{old('school_code')}}" required>
                            </div>

                            <div class="form-group">
                                <label for="schoolTypeInput">School Type</label>
                                <select name="type" class="form-control required" id="schoolTypeInput" required>
                                    <option value="1">Primary School</option>
                                    <option value="2">Secondary School</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label for="schoolTypeInput2">Type</label>
                                <select name="school_type_id" class="form-control required" id="schoolTypeInput2" required>
                                    <option value="">Please select type</option>
                                    @foreach($priTypes as $priType)
                                        <option value="{{$priType->id}}" class="priTypes">{{$priType->name}}</option>
                                    @endforeach
                                    @foreach($secTypes as $secType)
                                        <option value="{{$secType->id}}" class="secTypes">{{$secType->name}}</option>
                                    @endforeach
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div class="form-group" id="otherType3" style="display: none">
                                <label for="schoolTypeInput3">Please specify the school type</label>
                                <input type="text" name="other_type" class="form-control" id="schoolTypeInput3" value="{{old('other_type')}}">
                            </div>
                            <div class="form-group">
                                <label for="stateInput">State</label>
                                <select name="state" class="form-control required" id="stateInput" required>
                                    <option value="">Please select state</option>
                                    @foreach($states as $state)
                                        <option value="{{$state[0]->group}}" class="stateTypes">{{$state[0]->state}}</option>
                                    @endforeach
                                </select>
                            </div>

                            <div class="form-group">
                                <label for="statePPInput">PPD/PPW</label>
                                <select name="location_id" class="form-control required" id="statePPInput" required>
                                    <option value="">Please select PPD/PPW</option>
                                    @foreach($states as $state)
                                        @foreach($state as $pp)
                                            <option value="{{$pp->id}}" id="{{$pp->group}}" class="ppTypes">{{$pp->pp}}</option>
                                        @endforeach
                                    @endforeach
                                </select>
                            </div>

                            <div class="form-group">
                                <label for="areaInput">Urban/Rural School</label>
                                <select name="area" class="form-control required" id="areaInput" required>
                                    <option value="">Please Select</option>
                                    <option value="Urban School">Urban School</option>
                                    <option value="Rural School">Rural School</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label for="mypibInput">MYPIB</label>
                                <select name="mypib" class="form-control" id="mypibInput" required>
                                    <option value="">Please Select</option>
                                    <option value="1">Yes</option>
                                    <option value="0">No</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label for="sekolahiInput">Sekolah i-THINK</label>
                                <select name="sekolahi" class="form-control" id="sekolahiInput" required>
                                    <option value="">Please Select</option>
                                    <option value="1">Yes</option>
                                    <option value="0">No</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label for="sekolahkInput">Sekolah Kluster Kecemerlangan</label>
                                <select name="sekolahk" class="form-control" id="sekolahkInput" required>
                                    <option value="">Please Select</option>
                                    <option value="1">Yes</option>
                                    <option value="0">No</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label for="sbtInput">Sekolah Berprestasi Tinggi (SBT)</label>
                                <select name="sbt" class="form-control" id="sbtInput" required>
                                    <option value="">Please Select</option>
                                    <option value="1">Yes</option>
                                    <option value="0">No</option>
                                </select>
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
            $("option.secTypes").prop('disabled', true);
            $(".ppTypes").prop('disabled', true);
            $("#schoolTypeInput").on("change", function () {
                var sType = $("#schoolTypeInput").val();
                if(sType == 1){
                    $(".secTypes").prop('disabled', true);
                    $(".priTypes").prop('disabled', false);
                }else{
                    $(".secTypes").prop('disabled', false);
                    $(".priTypes").prop('disabled', true);
                }
            });
            $("#schoolTypeInput2").on("change", function () {
                var sType = $("#schoolTypeInput2").val();
                if(sType == "other"){
                    $("#otherType3").prop('disabled', false);
                }else{
                    $("#otherType3").prop('disabled', true);
                }
            });
            $("#stateInput").on("change", function () {
                var groupId = $("#stateInput").val();
                $(".ppTypes").prop('disabled', true);
                $("#statePPInput").children("#"+groupId).prop('disabled', false);
            });
        });
    </script>
@endsection