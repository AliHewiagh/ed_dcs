@extends('partial.layout')
@section('content')
    @include('admin.partial.header')
    @include('admin.partial.sidebar')
    <?php
    $year6Classes = \App\SchoolClass::where('type', 'Year 6')->pluck('id')->toArray();
    $year6Done = \App\User::where('done', 1)->whereIn('class_id', $year6Classes)->count();
    $year6NotDone = \App\User::where('done', 0)->whereIn('class_id', $year6Classes)->count();
    $year6T = $year6Done + $year6NotDone;
    if($year6T < 1){
        $year6T = 1;
    }

    $form3Classes = \App\SchoolClass::where('type', 'Form 3')->pluck('id')->toArray();
    $form3Done = \App\User::where('done', 1)->whereIn('class_id', $form3Classes)->count();
    $form3NotDone = \App\User::where('done', 0)->whereIn('class_id', $form3Classes)->count();
    $form3T = $form3Done + $form3NotDone;
    if($form3T < 1){
        $form3T = 1;
    }

    $form5Classes = \App\SchoolClass::where('type', 'Form 5')->pluck('id')->toArray();
    $form5Done = \App\User::where('done', 1)->whereIn('class_id', $form5Classes)->count();
    $form5NotDone = \App\User::where('done', 0)->whereIn('class_id', $form5Classes)->count();
    $form5T = $form5Done + $form5NotDone;
    if($form5T < 1){
        $form5T = 1;
    }
            $schoolP = \App\School::where('type', 1)->count();
    $schoolS = \App\School::where('type', 2)->count();
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
    @include('admin.partial.footer')
    @include('partial.scripts')
    <script>
        //DONUT CHART
        var donut = new Morris.Donut({
            element: 'sales-chart',
            resize: true,
            colors: ["#00a65a", "#f56954", "#00a65a"],
            data: [
                {label: "{{($year6Done/$year6T)*100}}% Students", value: '{{$year6Done}}'},
                {label: "{{($year6NotDone/$year6T)*100}}% Students", value: '{{$year6NotDone}}'}
            ],
            hideHover: 'auto'
        });
        var donut2 = new Morris.Donut({
            element: 'sales-chart2',
            resize: true,
            colors: ["#00a65a", "#f56954", "#00a65a"],
            data: [
                {label: "{{($form3Done/$form3T)*100}}% Students", value: '{{$form3Done}}'},
                {label: "{{($form3NotDone/$form3T)*100}}% Students", value: '{{$form3NotDone}}'}
            ],
            hideHover: 'auto'
        });
        var donut3 = new Morris.Donut({
            element: 'sales-chart3',
            resize: true,
            colors: ["#00a65a", "#f56954", "#00a65a"],
            data: [
                {label: "{{($form5Done/$form5T)*100}}% Students", value: '{{$form5Done}}'},
                {label: "{{($form5NotDone/$form5T)*100}}% Students", value: '{{$form5NotDone}}'}
            ],
            hideHover: 'auto'
        });
    </script>
@endsection