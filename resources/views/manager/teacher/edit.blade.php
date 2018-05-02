<?php
$postalAddress = $user->postalAddress;
$storeAddress = $user->storeAddress;
$mer = $user->merchant;
$merDetail = $user->merchantDetail;
$working = $user->workingHour;;
?>
@extends('admin.partial.layouts')
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
            <h1>Edit Merchant</h1>
        </section>
        <section class="content">
            <div style="max-width: 600px">
                <div id="regErrorArea"></div>
                <form id="merchantForm" method="post" action="{{url("admin/merchant/".$user->id)}}" enctype="multipart/form-data">
                    @method('PUT')
                    @csrf

                    <input type="hidden" name="shopAccuracy" id="shop_street_number" @if(!empty($storeAddress))value="{{$storeAddress->accuracy}}"@endif>
                    <input type="hidden" name="shopCity" id="shop_locality"  @if(!empty($storeAddress))value="{{$storeAddress->city}}"@endif>
                    <input type="hidden" name="shopProvince" id="shop_administrative_area_level_1" @if(!empty($storeAddress))value="{{$storeAddress->province}}"@endif>
                    <input type="hidden" name="shopCountry" id="shop_country" @if(!empty($storeAddress))value="{{$storeAddress->country}}"@endif>
                    <input type="hidden" name="shopPostCode" id="shop_postal_code" @if(!empty($storeAddress))value="{{$storeAddress->postCode}}"@endif>
                    <input type="hidden" name="shopLng" id="shop_lngInput" @if(!empty($storeAddress))value="{{$storeAddress->lng}}"@endif>
                    <input type="hidden" name="shopLat" id="shop_latInput" @if(!empty($storeAddress))value="{{$storeAddress->lat}}"@endif>
                    @include("admin.partial.alert")
                    <h4>Merchant Profile</h4>
                    <div class="form-group">
                        <label for="nameInput">Merchant Name</label>
                        <input type="text" name="name" class="form-control required" id="nameInput" value="{{$user->name}}">
                        <div id="nameError" style="color:red; font-weight: bold;"></div>
                    </div>
                    <div class="form-group">
                        <label for="companyNameInput">Company Name</label>
                        <input type="text" name="companyName" class="form-control" id="companyNameInput" value="{{$mer->companyName}}">
                    </div>
                    <div class="form-group">
                        <label for="businessNameInput">Business Name</label>
                        <input type="text" name="businessName" class="form-control" id="businessNameInput" value="{{$mer->businessName}}">
                    </div>
                    <div class="form-group">
                        <label for="businessAbnInput">Business ABN/ACN</label>
                        <input type="text" name="businessAbn" class="form-control" id="businessAbnInput" value="{{$merDetail->businessAbn}}">
                    </div>
                    <div class="form-group">
                        <label for="drivingLicenseInput">Driving License No</label>
                        <input type="text" name="drivingLicense" class="form-control" id="drivingLicenseInput" value="{{$merDetail->drivingLicense}}">
                    </div>
                    <div class="form-group">
                        <label for="dobInput">Date of Birth</label>
                        <input type="text" name="dob" class="form-control dPicker" id="dobInput" value="{{$user->dob}}">
                    </div>
                    <div class="form-group">
                        <label for="restaurantLicenseNoInput">Restaurant License No</label>
                        <input type="text" name="restaurantLicenseNo" class="form-control" id="restaurantLicenseNoInput" value="{{$merDetail->restaurantLicenseNo}}">
                    </div>
                    <div class="form-group">
                        <label for="restaurantLicenseValidityInput">Restaurant License Validity Date</label>
                        <input type="text" name="restaurantLicenseValidity" class="form-control dPicker" id="restaurantLicenseValidityInput" value="{{$merDetail->restaurantLicenseValidity}}">
                    </div>
                    <div class="form-group">
                        <label for="postalBuildingInput">Business Postal Address 1</label>
                        <input type="text" name="postalBuilding" class="form-control" id="postalBuildingInput" value="{{$postalAddress->building}}">
                    </div>
                    <div class="form-group">
                        <label for="postalAddressInput">Business Postal Address 2</label>
                        <input type="text" name="postalAddress" class="form-control" id="postalAddressInput" value="{{$postalAddress->address}}">
                    </div>

                    <div class="form-group">
                        <div class="row">
                            <div class="col-md-6">
                                <label for="postalAddressInput">Business Postal Suburb</label>
                                <input type="text" name="postalCity" class="form-control" id="postal_locality" @if(!empty($postalAddress))value="{{$postalAddress->city}}"@endif>
                            </div>
                            <div class="col-md-6">
                                <label for="postalAddressInput">Business Postal Postcode</label>
                                <input type="text" name="postalPostCode" class="form-control" id="postal_postal_code" @if(!empty($postalAddress))value="{{$postalAddress->postCode}}"@endif>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="row">
                            <div class="col-md-6">
                                <label for="postalAddressInput">Business Postal State</label>
                                <input type="text" name="postalProvince" class="form-control" id="postal_administrative_area_level_1" @if(!empty($postalAddress))value="{{$postalAddress->province}}"@endif>
                            </div>
                            <div class="col-md-6">
                                <label for="postalAddressInput">Business Postal Country</label>
                                <input type="text" name="postalCountry" class="form-control" id="postal_country" @if(!empty($postalAddress))value="{{$postalAddress->country}}"@endif>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="businessWebsiteInput">Business Website</label>
                        <input type="text" name="businessWebsite" class="form-control" id="businessWebsiteInput" value="{{$mer->businessWebsite}}">
                    </div>
                    <div class="form-group">
                        <label for="briefDescriptionInput">Brief Description of Business</label>
                        <textarea id="briefDescriptionInput" name="briefDescription" class="form-control" rows="5">{{$mer->briefDescription}}</textarea>
                    </div>
                    <div class="form-group">
                        <label for="bestWordInput">Best word to describe your restaurant/products</label>
                        <input id="bestWordInput" type="text" name="bestWord" class="form-control" value="{{$mer->bestWord}}">
                    </div>
                    <div class="form-group">
                        <label for="imageInput">Merchant Image</label>
                        <input type="file" name="image" class="form-control" id="imageInput" accept="image/*">
                        <span class="input-helper">Please leave it empty if do not want to change image.</span>
                    </div>

                    <h4>Merchant Operation</h4>
                    <div class="form-group">
                        <label for="emailInput">Email Address for Login</label>
                        <input id="emailInput" type="email" name="email" class="form-control" value="{{$user->email}}" required>
                    </div>

                    <h5>Operating Hours</h5>
                    @include("admin.school.operationHourPartial")
                    <label for="SpecificOffInput">Specific Off Date</label>
                    @foreach($user->holidays as $holiday)
                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-5">
                                    <input id="SpecificOffInput" type="text" name="offDateStart[]" class="form-control off-date" value="{{$holiday->startDate}}">
                                </div>
                                <div class="col-md-1">
                                    To
                                </div>
                                <div class="col-md-5">
                                    <input id="SpecificOffInput" type="text" name="offDateEnd[]" class="form-control off-date" value="{{$holiday->endDate}}">
                                </div>
                                <div class="col-md-1 offDelete">
                                    <i class="fa fa-minus-circle" style="font-size:25px;color:red; vertical-align: middle; margin-top: 5px"></i>
                                </div>
                            </div>
                        </div>
                    @endforeach
                    <div class="off-clone">
                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-5">
                                    <input id="SpecificOffInput" type="text" name="offDateStart[]" class="form-control off-date" value="">
                                </div>
                                <div class="col-md-1">
                                    To
                                </div>
                                <div class="col-md-5">
                                    <input id="SpecificOffInput" type="text" name="offDateEnd[]" class="form-control off-date" value="">
                                </div>
                                <div class="col-md-1 offDelete">
                                    <i class="fa fa-minus-circle" style="font-size:25px;color:red; vertical-align: middle; margin-top: 5px"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="moreOffArea"></div>
                    <div id="addMoreOff" class="label label-success" style="cursor: pointer"><i class="fa fa-plus"></i> Add More</div>
                    <br /><br />
                    <div class="form-group">
                        <label for="timeZoneInput">Time Zones</label>
                        <select id="timeZoneInput" name="timeZone" class="form-control">
                                @foreach($tzList as $tz)
                                    <option value="{{$tz}}" @if($user->timeZone == $tz) selected="selected" @endif>{{$tz}}</option>
                                @endforeach
                            {{--<option value="{{$user->timeZone}}">{{$user->timeZone}}</option>--}}
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="minOrderInput">Min Order Value</label>
                        <input id="minOrderInput" type="number" name="minOrder" class="form-control" value="{{$mer->minOrder}}">
                    </div>
                    <div class="form-group">
                        <label for="readyTimeFactorInput">Ready Time Factor</label>
                        <input id="readyTimeFactorInput" type="text" name="readyTimeFactor" class="form-control" value="{{$mer->readyTimeFactor}}">
                    </div>
                    <div class="form-group">
                        <label for="readyTimeDisplayInput">Ready Time Display</label>
                        <input id="readyTimeDisplayInput" type="text" name="readyTimeDisplay" class="form-control" value="{{$mer->readyTimeDisplay}}">
                    </div>
                    <div class="form-group">
                        <label for="shopBuildingInput">Shop Building</label>
                        <input type="text" name="shopBuilding" class="form-control" id="shopBuildingInput" value="{{$storeAddress->building}}">
                    </div>
                    <div class="form-group">
                        <label for="shopAddressInput">Shop Address</label>
                        <input type="text" name="shopAddress" class="form-control" id="shopAddressInput" value="{{$storeAddress->address}}">
                    </div>
                    <h4>Contact Details</h4>
                    <div class="form-group">
                        <label for="shopContactInput">Shop Contact No</label>
                        <input type="text" name="shopContact" class="form-control" id="shopContactInput" value="{{$merDetail->shopContact}}">
                    </div>
                    <div class="form-group">
                        <label for="mainContactPersonInput">Main Contact Person</label>
                        <input type="text" name="mainContactPerson" class="form-control" id="mainContactPersonInput" value="{{$merDetail->mainContactPerson}}">
                    </div>
                    <div class="form-group">
                        <label for="mainContactNoInput">Main Contact Number</label>
                        <input type="text" name="mainContactNo" class="form-control" id="mainContactNoInput" value="{{$merDetail->mainContactNo}}">
                    </div>
                    <div class="form-group">
                        <label for="mainContactEmailInput">Main Contact Email Address</label>
                        <input type="email" name="mainContactEmail" class="form-control" id="mainContactEmailInput" value="{{$merDetail->mainContactEmail}}">
                    </div>
                    <div class="form-group">
                        <label for="EmergencyPersonInput">Emergency Contact Person</label>
                        <input type="text" name="EmergencyPerson" class="form-control" id="EmergencyPersonInput" value="{{$merDetail->EmergencyPerson}}">
                    </div>
                    <div class="form-group">
                        <label for="EmergencyNumberInput">Emergency Contact Number</label>
                        <input type="text" name="EmergencyNumber" class="form-control" id="EmergencyNumberInput" value="{{$merDetail->EmergencyNumber}}">
                    </div>
                    <div class="form-group">
                        <label for="EmergencyEmailInput">Emergency Contact Email Address</label>
                        <input type="email" name="EmergencyEmail" class="form-control" id="EmergencyEmailInput" value="{{$merDetail->EmergencyEmail}}">
                    </div>
                    <h4>Merchant Type</h4>
                    <div class="form-group">
                        <label for="cuisineInput">Cuisine Main</label>
                        <select id="cuisineInput" name="cuisineId" class="form-control">
                            @foreach($cuisines as $cuisine)
                                <option value="{{$cuisine->id}}" @if($mer->cuisineId == $cuisine->id) selected="selected" @endif>{{$cuisine->name}}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="cuisine2Input">Cuisine2</label>
                        <input id="cuisine2Input" type="text" name="cuisine2" class="form-control" value="{{$mer->cuisine2}}">
                    </div>
                    <div class="form-group">
                        <label for="cuisine3Input">Cuisine3</label>
                        <input id="cuisine3Input" type="text" name="cuisine3" class="form-control" value="{{$mer->cuisine3}}">
                    </div>
                    <div class="form-group">
                        <label for="cuisine4Input">Cuisine4</label>
                        <input id="cuisine4Input" type="text" name="cuisine4" class="form-control" value="{{$mer->cuisine4}}">
                    </div>
                    <div class="form-group">
                        <label for="cuisine5Input">Cuisine5</label>
                        <input id="cuisine5Input" type="text" name="cuisine5" class="form-control" value="{{$mer->cuisine5}}">
                    </div>
                    <div class="form-group">
                        <label for="budgetInput">Budget</label>
                        <select id="budgetInput" name="budget" class="form-control">
                            <option value="$" @if($mer->budget == "$") selected="selected" @endif>$</option>
                            <option value="$$" @if($mer->budget == "$$") selected="selected" @endif>$$</option>
                            <option value="$$$" @if($mer->budget == "$$$") selected="selected" @endif>$$$</option>
                            <option value="$$$$" @if($mer->budget == "$$$$") selected="selected" @endif>$$$$</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="merchantCategoryInput">Merchant Category</label>
                        <select id="merchantCategoryInput" name="merchantCategoryId" class="form-control">
                            @foreach($merchantCategories as $mCat)
                                <option value="{{$mCat->id}}" @if($mer->merchantCategoryId == $mCat->id) selected="selected" @endif>{{$mCat->name}}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="pickUpDeliveryInput">Pick Up or Delivery</label>
                        <select id="pickUpDeliveryInput" name="pickUpDelivery" class="form-control">
                            <option value="Pick Up" @if($mer->pickUpDelivery == "Pick Up") selected="selected" @endif>Pick Up</option>
                            <option value="Delivery" @if($mer->pickUpDelivery == "Delivery") selected="selected" @endif>Delivery</option>
                        </select>
                    </div>
                    <h4>Bank Detail</h4>
                    <div class="form-group">
                        <label for="bankNameInput">Bank Name</label>
                        <input type="text" name="bankName" class="form-control" id="bankNameInput" value="{{$merDetail->bankName}}">
                    </div>
                    <div class="form-group">
                        <label for="bankAccountNameInput">Bank Account Name</label>
                        <input type="text" name="bankAccountName" class="form-control" id="bankAccountNameInput" value="{{$merDetail->bankAccountName}}">
                    </div>
                    <div class="form-group">
                        <label for="bsbNoInput">BSB No</label>
                        <input type="text" name="bsbNo" class="form-control" id="bsbNoInput" value="{{$merDetail->bsbNo}}">
                    </div>
                    <div class="form-group">
                        <label for="bankAccountNoInput">Bank Account No</label>
                        <input type="text" name="bankAccountNo" class="form-control" id="bankAccountNoInput" value="{{$merDetail->bankAccountNo}}">
                    </div>
                    <h4>Others</h4>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="text" name="password" class="form-control" value="" placeholder="Please leave it empty if you do not want to change the password">
                    </div>
                    <div class="form-group">
                        <label>Joining Date</label>
                        <input type="text" name="joiningDate" class="form-control dPicker" value="{{$mer->joiningDate}}">
                    </div>
                    <div class="form-group">
                        <label>Cessation Date</label>
                        <input type="text" name="cessationDate" class="form-control dPicker" value="{{$mer->cessationDate}}">
                    </div>
                    <div class="form-group">
                        <label>Other Info 1</label>
                        <input type="text" name="otherInfo1" class="form-control" value="{{$merDetail->otherInfo1}}">
                    </div>
                    <div class="form-group">
                        <label>Other Info 2</label>
                        <input type="text" name="otherInfo2" class="form-control" value="{{$merDetail->otherInfo2}}">
                    </div>
                    <div class="form-group">
                        <label>Other Info 3</label>
                        <input type="text" name="otherInfo3" class="form-control" value="{{$merDetail->otherInfo3}}">
                    </div>
                    <div class="form-group">
                        <label>Other Info 4</label>
                        <input type="text" name="otherInfo4" class="form-control" value="{{$merDetail->otherInfo4}}">
                    </div>
                    <div class="form-group">
                        <label>Other Info 5</label>
                        <input type="text" name="otherInfo5" class="form-control" value="{{$merDetail->otherInfo5}}">
                    </div>
                    <br />
                    <button id="submitBtn" type="submit" class="btn btn-primary btn-block">Update</button>
                </form>
                <br />
            </div>
        </section>
    </div>
    @include('admin.partial.footer')
 @include('partial.scripts')
    <script>
        $(document).ready(function () {
//            var timeZones = moment.tz.names();
//            $.each(timeZones, function (index, value) {
//                $('#timeZoneInput').append($('<option/>', {
//                    value: value,
//                    text : value
//                }));
//            });

            $("#nameInput").on("change", function () {
                var nameInput = $("#nameInput").val();
                $.post("{{route('admin_merchant_name')}}",  'name='+nameInput + '&_token={{csrf_token()}}', function (data) {
                    if(data.exist == true){
                        $("#nameError").html("This merchant name exist!");
                    }else{
                        $("#nameError").html("");
                    }
                });
            });
//            $(".flat34").flatpickr({
//                enableTime: true,
//                noCalendar: true,
//                dateFormat: "H:i",
//                time_24hr: true
//            });
            $(".dPicker").flatpickr({
            });
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

            $("#merchantForm").on("click", ".offDelete", function () {
                $(this).closest('.form-group')[0].remove();
            });
        });
    </script>
    <script>
        var placeSearch, autoComplete, autoComplete2;
        var componentForm = {
            street_number: 'short_name',
            locality: 'long_name',
            administrative_area_level_1: 'short_name',
            country: 'long_name',
            postal_code: 'short_name'
        };
        function initMap() {
            initDeliveryMap();
        }

        //delivery address
        function initDeliveryMap() {
            autoComplete2 = new google.maps.places.Autocomplete(
                    (document.getElementById('shopAddressInput')),
                    {componentRestrictions: {country: "au"}});
            autoComplete2.addListener('place_changed', fillInDeliveryAddress);
        }
        function fillInDeliveryAddress() {
            var place = autoComplete2.getPlace();
            var lat = place.geometry.location.lat(),
                    lng = place.geometry.location.lng();
            document.getElementById("shop_latInput").value = lat;
            document.getElementById("shop_lngInput").value = lng;
            for (var component in componentForm) {
                document.getElementById('shop_'+component).value = '';
                document.getElementById('shop_'+component).disabled = false;
            }
            for (var i = 0; i < place.address_components.length; i++) {
                var addressType = place.address_components[i].types[0];
                if (componentForm[addressType]) {
                    var val = place.address_components[i][componentForm[addressType]];
                    document.getElementById('shop_'+addressType).value = val;
                }
            }
        }
    </script>
    <script async defer
            src="https://maps.googleapis.com/maps/api/js?key={{env("GOOGLE_MAP_KEY")}}&libraries=places&callback=initMap">
    </script>
@endsection