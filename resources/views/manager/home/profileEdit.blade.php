@extends('partial.layout')
@section('content')
    @include('manager.partial.header')
    @include('manager.partial.sidebar')
    <div class="content-wrapper">
        <section class="content-header">
            <h1>Edit Profile</h1>
        </section>
        <section class="content">
            <div class="row">
            <div class="col-md-5">
                @include('partial.alert')
                <div class="card card-default">
                    <div id="errorMessageA"></div>
                    <div class="card-body">
                        <form method="POST" action="{{ route('manager_info_update_store') }}">
                            @csrf
                            <input type="hidden" name="edit_profile" value="1">
                            <div class="form-group">
                                <label for="manager_nameInput">School Manager Name</label>
                                <input type="text" name="manager_name" class="form-control required" id="manager_nameInput" value="{{Auth::user()->name, old('manager_name')}}" required>
                            </div>
                            <div class="form-group">
                                <label for="emailInput">Email Address</label>
                                <input type="email" name="email" class="form-control" id="emailInput" value="{{Auth::user()->email, old('email')}}" required>
                            </div>
                            <div class="form-group">
                                <label for="phoneInput">Phone</label>
                                <input type="number" name="phone" class="form-control" id="phoneInput" value="{{Auth::user()->phone, old('phone')}}" required>
                            </div>

                            <div class="form-group">
                                <label for="mykadInput">myKad Number</label>
                                <input type="text" name="ic_number" class="form-control required" id="mykadInput" value="{{Auth::user()->ic_number}}" required>
                            </div>

                            <div class="form-group">
                                <label for="passwordInput">Password</label>
                                <input type="text" name="password" class="form-control required" id="passwordInput" value="{{Auth::user()->password}}" readonly>
                            </div>

                            <div class="form-group">
                                <label for="school_codeInput">School Code</label>
                                <input type="text" name="school_code" class="form-control" id="school_codeInput" value="{{$school->school_code}}" readonly>
                            </div>
                            <div class="form-group">
                                <label for="nameInput">School Name</label>
                                <input type="text" name="name" class="form-control required" id="nameInput" value="{{$school->name}}" readonly>
                            </div>
                            <div class="form-group">
                                <label for="schoolTypeInput">School Level</label>
                                <select name="type" class="form-control required" id="schoolTypeInput" disabled>
                                    <option value="1">Primary School</option>
                                    <option value="2" @if($school->type == 2) selected="selected" @endif>Secondary School</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label for="schoolTypeInput2">School Type</label>
                                <select name="school_type_id" class="form-control required" id="schoolTypeInput2" disabled>
                                    <option value="">Please select type</option>
                                    @foreach($priTypes as $priType)
                                        <option value="{{$priType->id}}" class="priTypes" @if($school->school_type_id == $priType->id) selected="selected" @endif>{{$priType->name}}</option>
                                    @endforeach
                                    @foreach($secTypes as $secType)
                                        <option value="{{$secType->id}}" class="secTypes" @if($school->school_type_id == $secType->id) selected="selected" @endif>{{$secType->name}}</option>
                                    @endforeach
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="stateInput">State</label>
                                <select name="state_id" class="form-control required" id="stateInput" disabled>
                                    <option value="">Please select state</option>
                                    @foreach($states as $state)
                                        <option value="{{$state->id}}" data-name="{{$state->name}}" @if($school->state_id == $state->id) selected="selected" @endif>{{$state->name}}</option>
                                    @endforeach
                                </select>
                            </div>

                            <div class="form-group">
                                <label for="PKGInput">PKG</label>
                                <select name="pkg" class="form-control required" id="PKGInput" disabled>
                                    @if(!empty($school->pkg)) <option value="{{$school->pkg}}">{{$school->pkg}}</option> @endif
                                    <option value="">Please select PKG</option>
                                    @foreach($pkgs as $pkg)
                                        <option value="{{$pkg->pkg}}" class="PKGOptions {{$pkg->state_id}}" @if($pkg->pkg == $school->pkg) selected="selected" @endif>{{$pkg->pkg}}</option>
                                    @endforeach
                                </select>
                            </div>

                            <div class="form-group">
                                <label for="statePPInput">PPD/PPW</label>
                                <select name="location_id" class="form-control required" id="statePPInput" disabled>
                                    <option value="">Please select PPD/PPW</option>
                                    @foreach($pps as $pp)
                                        <option value="{{$pp->id}}" class="ppTypes {{$pp->state_id}}" @if($school->location_id == $pp->id) selected="selected" @endif>{{$pp->pp}}</option>
                                    @endforeach
                                </select>
                            </div>

                            <div class="form-group">
                                <label for="areaInput">Urban/Rural School</label>
                                <select name="area" class="form-control required" id="areaInput" disabled>
                                    <option value="Urban School">Urban School</option>
                                    <option value="Rural School" @if($school->area == "Rural School") selected="selected" @endif>Rural School</option>
                                </select>
                            </div>

                            {{--<div class="form-group">--}}
                                {{--<label for="mypibInput">MYPIB</label>--}}
                                {{--<select name="mypib" class="form-control" id="mypibInput" required>--}}
                                    {{--<option value="">Please Select</option>--}}
                                    {{--<option value="1" @if($school->mypib == 1) selected="selected" @endif>Yes</option>--}}
                                    {{--<option value="0" @if($school->mypib === 0) selected="selected" @endif>No</option>--}}
                                {{--</select>--}}
                            {{--</div>--}}

                            {{--<div class="form-group">--}}
                                {{--<label for="sekolahiInput">Sekolah i-THINK</label>--}}
                                {{--<select name="sekolahi" class="form-control" id="sekolahiInput" required>--}}
                                    {{--<option value="">Please Select</option>--}}
                                    {{--<option value="1" @if($school->sekolahi == 1) selected="selected" @endif>Yes</option>--}}
                                    {{--<option value="0" @if($school->sekolahi === 0) selected="selected" @endif>No</option>--}}
                                {{--</select>--}}
                            {{--</div>--}}

                            {{--<div class="form-group">--}}
                                {{--<label for="sekolahkInput">Sekolah Kluster Kecemerlangan</label>--}}
                                {{--<select name="sekolahk" class="form-control" id="sekolahkInput" required>--}}
                                    {{--<option value="">Please Select</option>--}}
                                    {{--<option value="1" @if($school->sekolahk == 1) selected="selected" @endif>Yes</option>--}}
                                    {{--<option value="0" @if($school->sekolahk === 0) selected="selected" @endif>No</option>--}}
                                {{--</select>--}}
                            {{--</div>--}}

                            {{--<div class="form-group">--}}
                                {{--<label for="sbtInput">Sekolah Berprestasi Tinggi (SBT)</label>--}}
                                {{--<select name="sbt" class="form-control" id="sbtInput" required>--}}
                                    {{--<option value="">Please Select</option>--}}
                                    {{--<option value="1" @if($school->sbt == 1) selected="selected" @endif>Yes</option>--}}
                                    {{--<option value="0" @if($school->sbt === 0) selected="selected" @endif>No</option>--}}
                                {{--</select>--}}
                            {{--</div>--}}


                            <div class="form-group">
                                <button type="submit" class="btn btn-primary btn-block" id="updateIC">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        </section>
    </div>
    @include('manager.partial.footer')
    @include('partial.scripts')
    <script>
        $(document).ready(function () {
            @if($school->type == 2)
            $(".priTypes").css("display", "none");
            @else
                      $(".secTypes").css("display", "none");
            @endif

            $(".ppTypes").css("display", "none");
            $(".PKGOptions").css("display", "none");
            $("#schoolTypeInput").on("change", function () {
                var sType = $("#schoolTypeInput").val();
                if(sType == 1){
                    $(".secTypes").css("display", "none");
                    $(".priTypes").css("display", "block");
                }else{
                    $(".secTypes").css("display", "block");
                    $(".priTypes").css("display", "none");
                }
            });
            $("#schoolTypeInput2").on("change", function () {
                var sType = $("#schoolTypeInput2").val();
                if(sType == "other"){
                    $("#otherType3").css("display", "block");
                }else{
                    $("#otherType3").css("display", "none");
                }
            });
            $("#stateInput").on("change", function () {
                var val = $(this).val();
                $(".ppTypes").css("display", "none");
                $(".PKGOptions").css("display", "none");
                $(".PKGOptions."+val).css("display", "block");
                $(".ppTypes."+val).css("display", "block");
            });

        });
    </script>
@endsection