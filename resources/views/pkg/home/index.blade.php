@extends('partial.layout')
@section('content')
    @include('pkg.partial.header')
    @include('pkg.partial.sidebar')
    <?php
    $pkg = Auth::user()->pkg->pkg;
    $schoolIds = \App\School::where('pkg', $pkg)->pluck('id')->toArray();
    $year6Classes = \App\SchoolClass::where('type', 'Year 6')->whereIn('school_id', $schoolIds)->pluck('id')->toArray();
    $year6Done = \App\User::where('done', 1)->whereIn('class_id', $year6Classes)->count();
    $year6NotDone = \App\User::where('done', 0)->whereIn('class_id', $year6Classes)->count();
    $year6T = $year6Done + $year6NotDone;


    $form3Classes = \App\SchoolClass::where('type', 'Form 3')->whereIn('school_id', $schoolIds)->pluck('id')->toArray();
    $form3Done = \App\User::where('done', 1)->whereIn('class_id', $form3Classes)->count();
    $form3NotDone = \App\User::where('done', 0)->whereIn('class_id', $form3Classes)->count();
    $form3T = $form3Done + $form3NotDone;


    $form5Classes = \App\SchoolClass::where('type', 'Form 5')->whereIn('school_id', $schoolIds)->pluck('id')->toArray();
    $form5Done = \App\User::where('done', 1)->whereIn('class_id', $form5Classes)->count();
    $form5NotDone = \App\User::where('done', 0)->whereIn('class_id', $form5Classes)->count();
    $form5T = $form5Done + $form5NotDone;

    $schoolP = \App\School::where([['type', 1], ['pkg', $pkg]])->count();
    $schoolS = \App\School::where([['type', 2], ['pkg', $pkg]])->count();
    ?>
    <div class="content-wrapper">
        <section class="content-header">
            <h1>Dashboard <small>{{$pkg}}</small></h1>
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
    @include('pkg.partial.footer')
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
    </script>
@endsection