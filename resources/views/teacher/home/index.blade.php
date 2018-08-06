@extends('partial.layout')
@section('content')
    @include('teacher.partial.header')
    @include('teacher.partial.sidebar')
    <?php
    $schoolId = Auth::user()->school_id;
    $authId = Auth::user()->id;
    $year6Classes = \App\SchoolClass::where([['type', 'Year 6'], ['teacher_id', $authId]])->pluck('id')->toArray();
    $year6Done = \App\User::where([['done', 1], ['school_id', $schoolId]])->whereIn('class_id', $year6Classes)->count();
    $year6NotDone = \App\User::where([['done', 0], ['school_id', $schoolId]])->whereIn('class_id', $year6Classes)->count();
    $year6T = $year6Done + $year6NotDone;


    $form3Classes = \App\SchoolClass::where([['type', 'Form 3'], ['teacher_id', $authId]])->pluck('id')->toArray();
    $form3Done = \App\User::where([['done', 1], ['school_id', $schoolId]])->whereIn('class_id', $form3Classes)->count();
    $form3NotDone = \App\User::where([['done', 0], ['school_id', $schoolId]])->whereIn('class_id', $form3Classes)->count();
    $form3T = $form3Done + $form3NotDone;


    $form5Classes = \App\SchoolClass::where([['type', 'Form 5'], ['teacher_id', $authId]])->pluck('id')->toArray();
    $form5Done = \App\User::where([['done', 1], ['school_id', $schoolId]])->whereIn('class_id', $form5Classes)->count();
    $form5NotDone = \App\User::where([['done', 0], ['school_id', $schoolId]])->whereIn('class_id', $form5Classes)->count();
    $form5T = $form5Done + $form5NotDone;
    ?>
    <div class="content-wrapper">
        <section class="content-header">
            <?php $school = \App\School::find(\Auth::user()->school_id); ?>
            <h1>Dashboard <small>{{$school->school_code.' | '.$school->name}}</small></h1>
        </section>
        <section class="content">
            <div class="row">
                @include('partial.alert')
                <?php
                $classIds = \App\SchoolClass::where('teacher_id', $authId)->pluck('id')->toArray();
                $totalStudents=\App\User::where([['type', 4], ['school_id', $schoolId]])->whereIn('class_id', $classIds)->count();
                $school = \App\School::find($schoolId);
                ?>
                {{--secondary--}}
                @if($school->type == 2)
                    <div class="col-md-6">
                        <div class="box box-danger">
                            <div class="box-header with-border">
                                <h3 class="box-title text-center">Form 3<br />Completion</h3>
                                <div class="box-tools pull-right">
                                    <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                                    </button>
                                    <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
                                </div>
                            </div>
                            <div class="box-body chart-responsive">
                                <div class="chart" id="sales-chart2" style="height: 250px; position: relative;"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="box box-danger">
                            <div class="box-header with-border">
                                <h3 class="box-title text-center">Form 5<br />Completion</h3>
                                <div class="box-tools pull-right">
                                    <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                                    </button>
                                    <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
                                </div>
                            </div>
                            <div class="box-body chart-responsive">
                                <div class="chart" id="sales-chart3" style="height: 250px; position: relative;"></div>
                            </div>
                        </div>
                    </div>
                @else
                    <div class="col-md-4">
                        <div class="box box-danger">
                            <div class="box-header with-border">
                                <h3 class="box-title text-center">Year 6<br />Completion</h3>
                                <div class="box-tools pull-right">
                                    <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                                    </button>
                                    <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
                                </div>
                            </div>
                            <div class="box-body chart-responsive">
                                <div class="chart" id="sales-chart" style="height: 250px; position: relative;"></div>
                            </div>
                        </div>
                    </div>
                @endif
                <div class="col-md-4">
                    <div class="box box-danger">
                        <div class="box-body chart-responsive">
                            <img src="{{asset('images/layout/s1.png')}}" style="width: 100px; margin: auto; display: block">
                            <h3 class="text-center">Total Students:<br />{{$totalStudents}}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    @include('teacher.partial.footer')
    @include('partial.scripts')
    <?php
    if($year6T < 1){
        $year6T2 = 1;
    }else{
        $year6T2=$year6T;
    }
    if($form3T < 1){
        $form3T2 = 1;
    }else{
        $form3T2=$form3T;
    }
    if($form5T < 1){
        $form5T2 = 1;
    }else{
        $form5T2=$form5T;
    } ?>
    <script>
        //DONUT CHART
                @if($school->type == 2)
        var donut2 = new Morris.Donut({
                    element: 'sales-chart2',
                    resize: true,
                    colors: ["#00a65a", "#f56954", "#00a65a"],
                    data: [
                        {label: "{{(round($form3Done/$form3T2, 2))*100}}% Students", value: '{{$form3Done}}'},
                        {label: "{{(round($form3NotDone/$form3T2, 2))*100}}% Students", value: '{{$form3NotDone}}'}
                    ],
                    hideHover: 'auto'
                });
        var donut3 = new Morris.Donut({
            element: 'sales-chart3',
            resize: true,
            colors: ["#00a65a", "#f56954", "#00a65a"],
            data: [
                {label: "{{(round($form5Done/$form5T2, 2))*100}}% Students", value: '{{$form5Done}}'},
                {label: "{{(round($form5NotDone/$form5T2, 2))*100}}% Students", value: '{{$form5NotDone}}'}
            ],
            hideHover: 'auto'
        });
                @else
        var donut = new Morris.Donut({
                    element: 'sales-chart',
                    resize: true,
                    colors: ["#00a65a", "#f56954", "#00a65a"],
                    data: [
                        {label: "{{(round($year6Done/$year6T2, 2))*100}}% Students", value: '{{$year6Done}}'},
                        {label: "{{(round($year6NotDone/$year6T2, 2))*100}}% Students", value: '{{$year6NotDone}}'}
                    ],
                    hideHover: 'auto'
                });
    @endif
    </script>
@endsection