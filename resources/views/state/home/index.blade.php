@extends('partial.layout')
@section('content')
    @include('state.partial.header')
    @include('state.partial.sidebar')
    <?php
    $stateId = Auth::user()->state_id;
    $schoolIds = \App\School::where('state_id', $stateId)->pluck('id')->toArray();
    $year6Classes = \App\SchoolClass::where('type', 'Year 6')->whereIn('school_id', $schoolIds)->pluck('id')->toArray();
    $year6Done = \App\User::where('done', 1)->whereIn('class_id', $year6Classes)->count();
    $year6NotDone = \App\User::where('done', 0)->whereIn('class_id', $year6Classes)->count();
    $year6T = $year6Done + $year6NotDone;

    $year6SchoolIds = \App\SchoolClass::where('type', 'Year 6')->whereIn('school_id', $schoolIds)->pluck('school_id')->toArray();
    $year6SchoolIds = array_unique($year6SchoolIds);
    $year6SchoolDone = \App\School::where('done', 1)->whereIn('id', $year6SchoolIds)->count();
    $year6SchoolNotDone = \App\School::where('done', 0)->whereIn('id', $year6SchoolIds)->count();
    $year6SchoolT = $year6SchoolDone + $year6SchoolNotDone;


    $form3Classes = \App\SchoolClass::where('type', 'Form 3')->whereIn('school_id', $schoolIds)->pluck('id')->toArray();
    $form3Done = \App\User::where('done', 1)->whereIn('class_id', $form3Classes)->count();
    $form3NotDone = \App\User::where('done', 0)->whereIn('class_id', $form3Classes)->count();
    $form3T = $form3Done + $form3NotDone;

    $form3SchoolIds = \App\SchoolClass::where('type', 'Form 3')->whereIn('school_id', $schoolIds)->pluck('school_id')->toArray();
    $form3SchoolIds = array_unique($form3SchoolIds);
    $form3SchoolDone = \App\School::where('done', 1)->whereIn('id', $form3SchoolIds)->count();
    $form3SchoolNotDone = \App\School::where('done', 0)->whereIn('id', $form3SchoolIds)->count();
    $form3SchoolT = $form3SchoolDone + $form3SchoolNotDone;


    $form5Classes = \App\SchoolClass::where('type', 'Form 5')->whereIn('school_id', $schoolIds)->pluck('id')->toArray();
    $form5Done = \App\User::where('done', 1)->whereIn('class_id', $form5Classes)->count();
    $form5NotDone = \App\User::where('done', 0)->whereIn('class_id', $form5Classes)->count();
    $form5T = $form5Done + $form5NotDone;

    $form5SchoolIds = \App\SchoolClass::where('type', 'Form 5')->whereIn('school_id', $schoolIds)->pluck('school_id')->toArray();
    $form5SchoolIds = array_unique($form5SchoolIds);
    $form5SchoolDone = \App\School::where('done', 1)->whereIn('id', $form5SchoolIds)->count();
    $form5SchoolNotDone = \App\School::where('done', 0)->whereIn('id', $form5SchoolIds)->count();
    $form5SchoolT = $form5SchoolDone + $form5SchoolNotDone;

    $schoolP = \App\School::where([['type', 1], ['state_id', $stateId]])->count();
    $schoolS = \App\School::where([['type', 2], ['state_id', $stateId]])->count();
    ?>
    <div class="content-wrapper">
        <section class="content-header">
            <h1>Dashboard</h1>
        </section>
        <section class="content">
            <div class="row">
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
                <div class="col-md-4">
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
                <div class="col-md-4">
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
            </div>
            <div class="row">
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
                            <div class="chart" id="school-chart" style="height: 250px; position: relative;"></div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
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
                            <div class="chart" id="school-chart2" style="height: 250px; position: relative;"></div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
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
                            <div class="chart" id="school-chart3" style="height: 250px; position: relative;"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <div class="box box-danger">
                        <div class="box-body chart-responsive">
                            <img src="{{asset('images/layout/s1.png')}}" style="width: 100px; margin: auto; display: block">
                            <h3 class="text-center">Total Students:<br />{{$year6T+$form3T+$form5T}}</h3>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="box box-danger">
                        <div class="box-body chart-responsive">
                            <img src="{{asset('images/layout/s3.png')}}" style="width: 100px; margin: auto; display: block">
                            <h3 class="text-center">Total Primary Schools:<br />{{$schoolP}}</h3>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="box box-danger">
                        <div class="box-body chart-responsive">
                            <img src="{{asset('images/layout/s2.png')}}" style="width: 100px; margin: auto; display: block">
                            <h3 class="text-center">Total Secondary Schools:<br />{{$schoolS}}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    @include('state.partial.footer')
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
    }
    if($year6SchoolT < 1){
        $year6SchoolT2 = 1;
    }else{
        $year6SchoolT2=$year6SchoolT;
    }
    if($form3SchoolT < 1){
        $form3SchoolT2 = 1;
    }else{
        $form3SchoolT2=$form3SchoolT;
    }
    if($form5SchoolT < 1){
        $form5SchoolT2 = 1;
    }else{
        $form5SchoolT2=$form5SchoolT;
    } ?>
    <script>
        //DONUT CHART
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
        var donut4 = new Morris.Donut({
            element: 'school-chart',
            resize: true,
            colors: ["#00a65a", "#f56954", "#00a65a"],
            data: [
                {label: "{{(round($year6SchoolDone/$year6SchoolT2, 2))*100}}% Schools", value: '{{$year6SchoolDone}}'},
                {label: "{{(round($year6SchoolNotDone/$year6SchoolT2, 2))*100}}% Schools", value: '{{$year6SchoolNotDone}}'}
            ],
            hideHover: 'auto'
        });
        var donut5 = new Morris.Donut({
            element: 'school-chart2',
            resize: true,
            colors: ["#00a65a", "#f56954", "#00a65a"],
            data: [
                {label: "{{(round($form3SchoolDone/$form3SchoolT2, 2))*100}}% Schools", value: '{{$form3SchoolDone}}'},
                {label: "{{(round($form3SchoolNotDone/$form3SchoolT2, 2))*100}}% Schools", value: '{{$form3SchoolNotDone}}'}
            ],
            hideHover: 'auto'
        });
        var donut6 = new Morris.Donut({
            element: 'school-chart3',
            resize: true,
            colors: ["#00a65a", "#f56954", "#00a65a"],
            data: [
                {label: "{{(round($form5SchoolDone/$form5SchoolT2, 2))*100}}% Schools", value: '{{$form5SchoolDone}}'},
                {label: "{{(round($form5SchoolNotDone/$form5SchoolT2, 2))*100}}% Schools", value: '{{$form5SchoolNotDone}}'}
            ],
            hideHover: 'auto'
        });
    </script>
@endsection