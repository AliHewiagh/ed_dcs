@extends('partial.layout')
@section('content')
    @include('state.partial.header')
    @include('state.partial.sidebar')
    <div class="content-wrapper">
        <section class="content-header">
            <h1>Top @if($type=='year6') Year 6 @elseif($type=='form3') Form 3 @else Form 5 @endif Schools</h1>
        </section>
        <section class="content">
            <div class="row">
                <div class="col-md-12">
                    <div class="box">
                        <div class="box-body">
                            <div class="table-responsive">
                                <table id="example1" class="table table-bordered table-striped">
                                    <thead>
                                    <tr>
                                        <th>School Code</th>
                                        <th>School Name</th>
                                        <th>Level</th>
                                        <th>State</th>
                                        <th>PKG</th>
                                        <th>PPD/PPW</th>
                                        <th>Score</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    @foreach ($schools as $school)
                                        <?php $state = \App\State::find($school->state_id);
                                        $pkg = \App\Pkg::where('pkg', $school->pkg)->first();?>
                                        <tr>
                                            <td>@if(!empty($school->school_code)){{$school->school_code}} @else ?? @endif</td>
                                            <td><a href="{{url('/state/progress/'.$school->id)}}">{{$school->name}}</a></td>
                                            <td>@if(!empty($school->type)) @if($school->type==1)Primary School @else Secondary School @endif @else ?? @endif</td>
                                            <td>@if(!empty($school->location)){{$school->location->state}} @else ?? @endif</td>
                                            <td>{{$school->pkg}}</td>
                                            <td>@if(!empty($school->location)){{$school->location->pp}} @else ?? @endif</td>
                                            <td>{{$school->score}}</td>
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
            $("#example1").DataTable({
                "order": [[ 6, "desc" ]]
            });
            $('#example2').DataTable({
                "paging": true,
                "lengthChange": false,
                "searching": false,
                "ordering": true,
                "info": true,
                "autoWidth": false
            });
        });
        $(document).ready(function () {
            $("#uploadFileStudent").on("change", function () {
                $("#uploadStudentForm").submit();
            });
        });
    </script>
    {{--<script>--}}
    {{--$('.delete_model_c').remodal({--}}
    {{--});--}}
    {{--</script>--}}
@endsection