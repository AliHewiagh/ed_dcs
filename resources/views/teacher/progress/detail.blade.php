@extends('partial.layout')
@section('content')
    @include('teacher.partial.header')
    @include('teacher.partial.sidebar')
    <div class="content-wrapper">
        <section class="content-header">
            <h1>Detailed Progress <small>{{$student->name}}</small></h1>
        </section>
        <section class="content">
            <div class="row">
                <div class="col-md-12">
                    <div class="box">
                        <div class="box-header">
                            <div class="bread-crumbs">
                                <a href="{{url('/teacher/progress')}}">Class Progress</a> /
                                <a href="{{url('/teacher/progress/'.$classId)}}">Students Progress</a> /
                                <a href="{{url('/teacher/progress/'.$classId.'/'.$student->id)}}">Individual Progress</a> /
                                <span>Detailed Progress</span>
                            </div>
                            @include('partial.alert')
                            <div style="margin-top: 10px">
                                <button class="btn btn-warning" data-domain="8">Overall</button>
                                <button class="btn" data-domain="1">Technology</button>
                                <button class="btn" data-domain="2">Cognitive</button>
                                <button class="btn" data-domain="3">Digital Citizenship</button>
                            </div>
                            <div>
                                <h3>Average Score: <span id="averageScoreClass">{{$overAllScore}}</span></h3>
                            </div>
                        </div>
                        <div class="box-body">
                            <div class="table-responsive">
                                <table id="example2" class="table table-bordered table-striped">
                                    <thead>
                                    <tr>
                                        <th>Stage</th>
                                        <th>Question ID</th>
                                        <th>Domain</th>
                                        <th>Parameter</th>
                                        <th>Skill</th>
                                        <th>Result</th>
                                        <th>Answer</th>
                                        <th>Time (In Second)</th>
                                        <th>Score</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    @foreach($records as $record)
                                        <tr class="record-det-a8" data-domain="{{$record->qDomain}}" data-all="{{$overAllScore}}" data-tech="{{$TScore}}" data-cog="{{$CScore}}" data-dig="{{$DScore}}">
                                            <td>{{$record->stage}}</td>
                                            <td>{{$record->qId}}</td>
                                            <td>@if(!empty($record->domain())){{$record->domain()->description}} @endif</td>
                                            <td>@if(!empty($record->parameter())){{$record->parameter()->description}} @endif</td>
                                            <td>@if(!empty($record->skill())){{$record->skill()->description}} @endif</td>
                                            <td>{{$record->qResult}}</td>
                                            <td>{{$record->userAns}}</td>
                                            <td>{{$record->time}}</td>
                                            <td>{{$record->score}}</td>
                                        </tr>
                                    @endforeach
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    @include('teacher.partial.footer')
    @include('partial.scripts')
    <script>
        $(function () {
            $('#example2').DataTable({
                "paging": false,
                "lengthChange": false,
                "searching": false,
                "ordering": true,
                "info": true,
                "autoWidth": true
            });
        });
        $(document).ready(function () {
            var av = $("#averageScoreClass");
            $(".btn").on("click", function () {
                $(".btn").each(function () {
                    $(this).removeClass(" btn-warning");
                });
                $(this).addClass(" btn-warning");
                var domain = $(this).data("domain");
                if(domain == 8){
                    $(".record-det-a8").each(function () {
                        $(this).css("display", "table-row");

                    });
                }else{
                    $(".record-det-a8").each(function () {
                        if($(this).data("domain") == domain){
                            $(this).css("display", "table-row")
                        }else{
                            $(this).css("display", "none")
                        }
                    });
                }
                if(domain == 8){
                    av.html($(".record-det-a8").data('all'));
                }else if(domain == 3){
                    av.html($(".record-det-a8").data('dig'));
                }else if(domain == 2){
                    av.html($(".record-det-a8").data('cog'));
                }else{
                    av.html($(".record-det-a8").data('tech'));
                }
            });
        });
    </script>
@endsection