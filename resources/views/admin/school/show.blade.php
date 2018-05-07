@extends('admin.partial.layouts')
@section('content')
    @include('admin.partial.header')
    @include('admin.partial.sidebar')
    <?php
    $mer = $user->merchant;
    $merDetail = $user->merchantDetail;
    ?>
    <div class="content-wrapper">
        <section class="content-header">
            <h1>{{$user->name}} Detail</h1>
            @if($user->status == 8) <label class="label label-warning">Not Approved</label>
            @elseif($user->status == 4) <label class="label label-danger">Suspended New Merchant</label>
            @elseif($user->status == 3) <label class="label label-primary">New Merchant</label>
            @elseif($user->status == 2) <label class="label label-danger">Suspended</label>
            @else <label class="label label-success">Active</label>@endif
        </section>
        <section class="content">
            <div class="row">
                <div class="col-md-6">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="{{url("admin/merchant/".$user->id."/edit")}}" class="btn btn-warning btn-block">Edit</a>
                        </div>
                        @if($user->status == 8)
                            <div class="col-md-6">
                                <a href="#modalB" class="btn btn-success btn-block">Approve</a>
                            </div>
                        @else
                            <div class="col-md-6">
                                    @if($user->status == 2 || $user->status == 4)
                                        <a href="#modalA" class="btn btn-danger btn-block">Unsuspend</a>
                                    @else
                                        <a href="#modalA" class="btn btn-success btn-block">Suspend</a>
                                    @endif
                            </div>
                        @endif
                    </div>
                    <div data-remodal-id="modalA" role="dialog" class="delete_model_c">
                        <div>
                            <h2> @if($user->status == 2 || $user->status == 4) Unsuspend @else Suspend @endif Merchant</h2>
                            <p>Are you sure that you want to  @if($user->status == 2 || $user->status == 4) Unsuspend @else Suspend @endif {{$user->name}}?</p>
                        </div>
                        <br>
                        <form method="post" action="{{url("admin/merchant/".$user->id)}}">
                            @csrf
                            @method("DELETE")
                            <button data-remodal-action="cancel" class="remodal-cancel">Cancel</button>
                            <button type="submit" class="remodal-confirm">Confirm</button>
                        </form>
                    </div>
                    <div data-remodal-id="modalB" role="dialog" class="delete_model_c">
                        <div>
                            <h2>Approve Merchant</h2>
                            <p>Are you sure that you want to Approve {{$user->name}}?</p>
                        </div>
                        <br>
                        <form method="post" action="{{url("admin/merchants/".$user->id."/approve")}}">
                            @csrf
                            <button data-remodal-action="cancel" class="remodal-cancel">Cancel</button>
                            <button type="submit" class="remodal-confirm">Confirm</button>
                        </form>
                    </div>
                    <br />
                    @if(!empty($user->image))
                        <img src="{{asset("images/merchant/".$user->image)}}" class="merchant-det-img">
                        @endif
                    <div class="panel box box-primary">
                        <div class="box-header with-border"><h4>Merchant Profile</h4></div>
                        <div class="box-body with-border">
                            <p><b>Created At:</b> {{$user->created_at}}</p>
                            <p><b>Merchant ID:</b> #{{$user->id}}</p>
                            <p><b>Merchant Name:</b> {{$user->name}}</p>
                            <p><b>Company Name:</b> {{$mer->companyName}}</p>
                            <p><b>Business Name:</b> {{$mer->businessName}}</p>
                            <p><b>Business ABN/ACN:</b> {{$merDetail->businessAbn}}</p>
                            <p><b>Driving License No:</b> {{$merDetail->drivingLicense}}</p>
                            <p><b>Date of Birth:</b> {{$user->dob}}</p>
                            <p><b>Restaurant License No:</b> {{$merDetail->restaurantLicenseNo}}</p>
                            <p><b>Restaurant License Validity Date:</b> {{$merDetail->restaurantLicenseValidity}}</p>
                            @if(!empty($user->postalAddress))
                            <p><b>Business Postal Building:</b> {{$user->postalAddress->building}}</p>
                            <p><b>Business Postal Address:</b> {{$user->postalAddress->address}}</p>
                            @endif
                            <p><b>Business Website:</b> {{$mer->businessWebsite}}</p>
                            <p><b>Brief Description of Business:</b> {{$mer->briefDescription}}</p>
                            <p><b>Best word to describe your restaurant/products:</b> {{$mer->bestWord}}</p>
                        </div>
                    </div>
                    <div class="panel box box-primary">
                        <div class="box-header with-border"><h4>Merchant Operation</h4></div>
                        <div class="box-body with-border">
                            <p><b>Email Address:</b> {{$user->email}}</p>
                            @php $work = $user->workingHour; @endphp
                            <p><b>Monday:</b> @if($work->MondayOpen) Open @else Close @endif</p>
                            <p>{{$work->MondayStart1}} to {{$work->MondayEnd1}}</p>
                            <p>{{$work->MondayStart2}} to {{$work->MondayEnd2}}</p>
                            <p>{{$work->MondayStart3}} to {{$work->MondayEnd3}}</p>
                            <p><b>Tuesday:</b> @if($work->TuesdayOpen) Open @else Close @endif</p>
                            <p>{{$work->TuesdayStart1}} to {{$work->TuesdayEnd1}}</p>
                            <p>{{$work->TuesdayStart2}} to {{$work->TuesdayEnd2}}</p>
                            <p>{{$work->TuesdayStart3}} to {{$work->TuesdayEnd3}}</p>
                            <p><b>Wednesday:</b> @if($work->WednesdayOpen) Open @else Close @endif</p>
                            <p>{{$work->WednesdayStart1}} to {{$work->WednesdayEnd1}}</p>
                            <p>{{$work->WednesdayStart2}} to {{$work->WednesdayEnd2}}</p>
                            <p>{{$work->WednesdayStart3}} to {{$work->WednesdayEnd3}}</p>
                            <p><b>Thursday:</b> @if($work->ThursdayOpen) Open @else Close @endif</p>
                            <p>{{$work->ThursdayStart1}} to {{$work->ThursdayEnd1}}</p>
                            <p>{{$work->ThursdayStart2}} to {{$work->ThursdayEnd2}}</p>
                            <p>{{$work->ThursdayStart3}} to {{$work->ThursdayEnd3}}</p>
                            <p><b>Friday:</b> @if($work->FridayOpen) Open @else Close @endif</p>
                            <p>{{$work->FridayStart1}} to {{$work->FridayEnd1}}</p>
                            <p>{{$work->FridayStart2}} to {{$work->FridayEnd2}}</p>
                            <p>{{$work->FridayStart3}} to {{$work->FridayEnd3}}</p>
                            <p><b>Saturday:</b> @if($work->SaturdayOpen) Open @else Close @endif</p>
                            <p>{{$work->SaturdayStart1}} to {{$work->SaturdayEnd1}}</p>
                            <p>{{$work->SaturdayStart2}} to {{$work->SaturdayEnd2}}</p>
                            <p>{{$work->SaturdayStart3}} to {{$work->SaturdayEnd3}}</p>
                            <p><b>Sunday:</b> @if($work->SundayOpen) Open @else Close @endif</p>
                            <p>{{$work->SundayStart1}} to {{$work->SundayEnd1}}</p>
                            <p>{{$work->SundayStart2}} to {{$work->SundayEnd2}}</p>
                            <p>{{$work->SundayStart3}} to {{$work->SundayEnd3}}</p>
                            <p><b>Holidays:</b></p>
                            @foreach($user->holidays as $holiday)
                                <p>{{$holiday->startDate}} to {{$holiday->endDate}}</p>
                            @endforeach
                            <p><b>Time Zone:</b> {{$user->timeZone}}</p>
                            <p><b>Min Order Value:</b> {{$mer->minOrder}}</p>
                            <p><b>Ready Time Factor:</b> {{$mer->readyTimeFactor}}</p>
                            <p><b>Ready Time Display:</b> {{$mer->readyTimeDisplay}}</p>
                            @if(!empty($user->postalAddress))
                                <p><b>Store Building:</b> {{$user->storeAddress->building}}</p>
                                <p><b>Store Address:</b> {{$user->storeAddress->address}}</p>
                            @endif
                        </div>
                    </div>
                    <div class="panel box box-primary">
                        <div class="box-header with-border"><h4>Contact Details</h4></div>
                        <div class="box-body with-border">
                            <p><b>Shop Contact No:</b> {{$merDetail->shopContact}}</p>
                            <p><b>Main Contact Person:</b> {{$merDetail->mainContactPerson}}</p>
                            <p><b>Main Contact Number:</b> {{$merDetail->mainContactNo}}</p>
                            <p><b>Main Contact Email Address:</b> {{$merDetail->mainContactEmail}}</p>
                            <p><b>Emergency Contact Person:</b> {{$merDetail->EmergencyPerson}}</p>
                            <p><b>Emergency Contact Number:</b> {{$merDetail->EmergencyNumber}}</p>
                            <p><b>Emergency Contact Email:</b> {{$merDetail->EmergencyEmail}}</p>
                            <p><b>Cuisine Main:</b> @if(!empty($mer->cuisine)){{$mer->cuisine->name}}@endif</p>
                            <p><b>Cuisine2:</b> {{$mer->cuisine2}}</p>
                            <p><b>Cuisine3:</b> {{$mer->cuisine3}}</p>
                            <p><b>Cuisine4:</b> {{$mer->cuisine4}}</p>
                            <p><b>Cuisine5:</b> {{$mer->cuisine5}}</p>
                            <p><b>Budget:</b> {{$mer->budget}}</p>
                            <p><b>Merchant Category:</b> @if(!empty($mer->category)){{$mer->category->name}}@endif</p>
                            <p><b>Pick Up or Delivery:</b> {{$mer->pickUpDelivery}}</p>
                        </div>
                    </div>
                    <div class="panel box box-primary">
                        <div class="box-header with-border"><h4>Bank Detail</h4></div>
                        <div class="box-body with-border">
                            <p><b>Bank Name:</b> {{$merDetail->bankName}}</p>
                            <p><b>Bank Account Name:</b> {{$merDetail->bankAccountName}}</p>
                            <p><b>BSB No:</b> {{$merDetail->bsbNo}}</p>
                            <p><b>Bank Account No:</b> {{$merDetail->bankAccountNo}}</p>
                        </div>
                    </div>
                    <div class="panel box box-primary">
                        <div class="box-header with-border"><h4>Others</h4></div>
                        <div class="box-body with-border">
                            <p><b>Joining Date:</b> {{$mer->joiningDate}}</p>
                            <p><b>Cessation Date:</b> {{$mer->cessationDate}}</p>
                            <p><b>Other Info 1:</b> {{$merDetail->otherInfo1}}</p>
                            <p><b>Other Info 2:</b> {{$merDetail->otherInfo2}}</p>
                            <p><b>Other Info 3:</b> {{$merDetail->otherInfo3}}</p>
                            <p><b>Other Info 4:</b> {{$merDetail->otherInfo4}}</p>
                            <p><b>Other Info 5:</b> {{$merDetail->otherInfo5}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    @include('admin.partial.footer')
 @include('partial.scripts')
    <script>
        $(function () {
            $("#example1").DataTable();
            $('#example2').DataTable({
                "paging": true,
                "lengthChange": false,
                "searching": false,
                "ordering": true,
                "info": true,
                "autoWidth": false
            });
        });
    </script>
    <script>
    $('.delete_model_c').remodal({
    });
    </script>
    <script>
        $(document).ready(function () {
        });
    </script>
@endsection