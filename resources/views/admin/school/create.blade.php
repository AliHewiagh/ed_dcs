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
            <h1>Create New School</h1>
        </section>
        <section class="content">
            <div style="max-width: 600px">
                <div id="regErrorArea"></div>
                <form id="merchantForm" method="post" action="{{url("admin/school")}}" enctype="multipart/form-data">
                    @csrf
                    @include('partial.alert')
                    <div class="form-group">
                        <label for="nameInput">School Name</label>
                        <input type="text" name="name" class="form-control required" id="nameInput" value="{{old('name')}}" required>
                    </div>
                    <div class="form-group">
                        <label for="sourceInput">Source</label>
                        <select class="form-control" id="sourceInput" name="source">
                            <option value="">Please select source</option>
                            <option value="IKIM">IKIM</option>
                            <option value="SPSS">SPSS</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>

                    {{--<div class="form-group">--}}
                        {{--<label for="school_codeInput">School Code</label>--}}
                        {{--<input type="text" name="school_code" class="form-control" id="school_codeInput" value="{{old('school_code')}}">--}}
                    {{--</div>--}}

                    {{--<div class="form-group">--}}
                        {{--<label for="schoolTypeInput">School Type</label>--}}
                        {{--<select name="type" class="form-control required" id="schoolTypeInput">--}}
                            {{--<option value="1">Primary School</option>--}}
                            {{--<option value="2">Secondary School</option>--}}
                        {{--</select>--}}
                    {{--</div>--}}

                    {{--<div class="form-group">--}}
                        {{--<label for="schoolTypeInput2">Type</label>--}}
                        {{--<select name="school_type_id" class="form-control required" id="schoolTypeInput2">--}}
                            {{--<option value="">Please select type</option>--}}
                            {{--@foreach($priTypes as $priType)--}}
                                {{--<option value="{{$priType->id}}" class="priTypes">{{$priType->name}}</option>--}}
                            {{--@endforeach--}}
                            {{--@foreach($secTypes as $secType)--}}
                                {{--<option value="{{$secType->id}}" class="secTypes">{{$secType->name}}</option>--}}
                            {{--@endforeach--}}
                            {{--<option value="other">Other</option>--}}
                        {{--</select>--}}
                    {{--</div>--}}
                    {{--<div class="form-group" id="otherType3" style="display: none">--}}
                        {{--<label for="schoolTypeInput3">Please specify the school type</label>--}}
                        {{--<input type="text" name="other_type" class="form-control" id="schoolTypeInput3" value="{{old('other_type')}}">--}}
                    {{--</div>--}}
                    {{--<div class="form-group">--}}
                        {{--<label for="stateInput">State</label>--}}
                        {{--<select name="state" class="form-control required" id="stateInput" required>--}}
                            {{--<option value="">Please select state</option>--}}
                            {{--@foreach($states as $state)--}}
                                {{--<option value="{{$state[0]->group}}" class="priTypes">{{$state[0]->state}}</option>--}}
                            {{--@endforeach--}}
                        {{--</select>--}}
                    {{--</div>--}}

                    {{--<div class="form-group">--}}
                        {{--<label for="statePPInput">PPD/PPW</label>--}}
                        {{--<select name="location_id" class="form-control required" id="statePPInput" required>--}}
                            {{--<option value="">Please select PPD/PPW</option>--}}
                            {{--@foreach($states as $state)--}}
                                {{--@foreach($state as $pp)--}}
                                {{--<option value="{{$pp->id}}" id="{{$pp->group}}" class="ppTypes">{{$pp->pp}}</option>--}}
                                {{--@endforeach--}}
                            {{--@endforeach--}}
                        {{--</select>--}}
                    {{--</div>--}}

                    {{--<div class="form-group">--}}
                        {{--<label for="areaInput">Urban/Rural School</label>--}}
                        {{--<select name="area" class="form-control required" id="areaInput">--}}
                            {{--<option value="Urban School">Urban School</option>--}}
                            {{--<option value="Rural School">Rural School</option>--}}
                        {{--</select>--}}
                    {{--</div>--}}

                    {{--<div class="form-group">--}}
                        {{--<label for="mypibInput">MYPIB</label>--}}
                        {{--<select name="mypib" class="form-control" id="mypibInput">--}}
                            {{--<option value="1">Yes</option>--}}
                            {{--<option value="0">No</option>--}}
                        {{--</select>--}}
                    {{--</div>--}}

                    {{--<div class="form-group">--}}
                        {{--<label for="sekolahiInput">Sekolah i-THINK</label>--}}
                        {{--<select name="sekolahi" class="form-control" id="sekolahiInput">--}}
                            {{--<option value="1">Yes</option>--}}
                            {{--<option value="0">No</option>--}}
                        {{--</select>--}}
                    {{--</div>--}}

                    {{--<div class="form-group">--}}
                        {{--<label for="sekolahkInput">Sekolah Kluster Kecemerlangan</label>--}}
                        {{--<select name="sekolahk" class="form-control" id="sekolahkInput">--}}
                            {{--<option value="1">Yes</option>--}}
                            {{--<option value="0">No</option>--}}
                        {{--</select>--}}
                    {{--</div>--}}

                    {{--<div class="form-group">--}}
                        {{--<label for="sbtInput">Sekolah Berprestasi Tinggi (SBT)</label>--}}
                        {{--<select name="sbt" class="form-control" id="sbtInput">--}}
                            {{--<option value="1">Yes</option>--}}
                            {{--<option value="0">No</option>--}}
                        {{--</select>--}}
                    {{--</div>--}}

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
            $(".secTypes").css("display", "none");
            $(".ppTypes").css("display", "none");
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
                var groupId = $("#stateInput").val();
                $(".ppTypes").css("display", "none");
                $("#statePPInput").children("#"+groupId).css("display", "block");
            });




            $(".dPicker").flatpickr({
//                dateFormat: "H:i",
            });
//            $(".flat34").flatpickr({
//                enableTime: true,
//                noCalendar: true,
//                dateFormat: "H:i",
//                time_24hr: true
//            });

            const fpConf = {
            };
            var clone = $(".off-clone").clone();
            flatpickr(".off-date", fpConf);

            $("#addMoreOff").on("click", function () {
                event.stopPropagation();

                const newClone = clone.clone();
                $("#moreOffArea").append(newClone);
                $(newClone).find(".off-date").flatpickr(fpConf);
            });

            $("#merchantForm").on("click", "#offDelete", function () {
                $(this).closest('.form-group')[0].remove();
            });
        });
    </script>

@endsection