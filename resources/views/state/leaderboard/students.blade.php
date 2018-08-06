@extends('partial.layout')
@section('content')
    @include('state.partial.header')
    @include('state.partial.sidebar')
    <div class="content-wrapper">
        <section class="content-header">
            <h1>Top @if($type=='year6') Year 6 @elseif($type=='form3') Form 3 @else Form 5 @endif Students</h1>
        </section>
        <section class="content">
            <div class="row">
                <div class="col-md-12">
                    <div class="box">
                        <div class="box-header">
                            @include('partial.alert')
                        </div>
                        <div class="box-body">
                            <div class="table-responsive">
                                <table id="example2" class="table table-bordered table-striped">
                                    <thead>
                                    <tr>
                                        <th>Ranking</th>
                                        <th>Student's Name</th>
                                        <th>School Code</th>
                                        <th>School Name</th>
                                        <th>State</th>
                                        <th>Overall Score</th>
                                        <th>Total Time Taken</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    @php $i =0; @endphp
                                    @foreach ($students as $student)
                                        <?php
                                        $school = \App\School::find($student->school_id);
                                        $state = \App\State::find($school->state_id);
                                        $pkg = \App\Pkg::where('pkg', $school->pkg)->first();
                                        $i++;
                                        ?>
                                    <tr>
                                        <td>{{$i}}</td>
                                        <td><a href="{{url('/state/progress/'.$school->id.'/'.$student->class_id.'/'.$student->id)}}">{{$student->name}}</a></td>
                                        <td>{{$school->school_code}}</td>
                                        <td><a href="{{url('/state/progress/'.$school->id)}}">{{$school->name}}</a></td>
                                        <td>{{$state->name}}</td>
                                        <td>{{$student->score}}</td>
                                        <td>{{$student->totalTime()}}</td>
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
    @include('state.partial.footer')
    @include('partial.scripts')
    <script>
        $(function () {
            $("#example2").DataTable({
                order : [[ 5, "desc" ], [6, 'asc']]
            });
        });
        $(document).ready(function () {
        });
    </script>
@endsection