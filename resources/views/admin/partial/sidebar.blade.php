<aside class="main-sidebar">
    <section class="sidebar">
        <div class="user-panel">
            <div class="pull-left image">
                <img src="{{asset("images/layout/profile.jpg")}}" class="img-circle" alt="User Image">
                <img src="{{asset("images/layout/db.jpg")}}" class="img-responsive" alt="DB Image">
            </div>
            <div class="pull-left info">
                <p>{{Auth::user()->name}}</p>
                <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
            </div>
        </div>
        <form action="#" method="get" class="sidebar-form">
            <div class="input-group">
                <input type="text" name="q" class="form-control" placeholder="Search...">
              <span class="input-group-btn">
                <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
                </button>
              </span>
            </div>
        </form>
        <ul class="sidebar-menu">
            <li class="header">DASHBOARD MENU</li>
            <li><a href="{{ route('admin_dashboard_path') }}"><i class="fa fa-tachometer"></i> <span>Dashboard</span></a></li>
            <li><a href="{{url('/admin/school')}}"><i class="fa fa-building"></i> <span>School</span></a></li>
            {{--<li><a href="#"><i class="fa fa-users"></i> <span>Customer</span></a></li>--}}

            {{--<li><a href="{{url('/admin/menu/merchants')}}"><i class="fa fa-cubes"></i> <span>Categories</span></a></li>--}}
            {{--<li><a href="{{url('/admin/product/merchants')}}"><i class="fa fa-cutlery"></i> <span>Product Item</span></a></li>--}}
            {{--<li><a href="#"><i class="fa fa-percent"></i> <span>Deals</span></a></li>--}}
            {{--<li><a href="#"><i class="fa fa-list" aria-hidden="true"></i> <span>Orders</span></a></li>--}}
            {{--<li class="treeview">--}}
                {{--<a href="#"><i class="fa fa-cubes"></i> <span>Manage Products</span>--}}
            {{--<span class="pull-right-container">--}}
              {{--<i class="fa fa-angle-left pull-right"></i>--}}
            {{--</span>--}}
                {{--</a>--}}
                {{--<ul class="treeview-menu">--}}
                    {{--<li><a href="{{ url('/shop/manage/product/create') }}">Add New Product</a></li>--}}
                    {{--<li><a href="{{ url('/shop/manage/product') }}">List of Products</a></li>--}}
                {{--</ul>--}}
            {{--</li>--}}

            <li><a href="{{ route('user_logout_path') }}"><i class="fa fa-sign-out"></i> <span>Logout</span></a></li>
        </ul>
    </section>
</aside>
