<aside class="main-sidebar">
    <section class="sidebar">
        <div class="user-panel">
            <div class="pull-left image">
                <img src="{{asset("images/layout/profile.jpg")}}" class="img-circle" alt="User Image">
            </div>
            <div class="pull-left info">
                <p>{{Auth::user()->name}}</p>
                <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
            </div>
        </div>
        <form action="{{url('/manager/search')}}" method="post" class="sidebar-form">
            @csrf
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
            <li><a href="{{ route('manager_dashboard_path') }}"><i class="fa fa-tachometer"></i> <span>Dashboard</span></a></li>
            <li><a href="{{url('/manager/progress')}}"><i class="fa fa-cubes"></i> <span>Progress</span></a></li>
            <li><a href="{{url('/manager/teacher')}}"><i class="fa fa-users"></i> <span>Teacher Management</span></a></li>
            <li><a href="{{url('/manager/profile/edit')}}"><i class="fa fa-gear"></i> <span>Setting</span></a></li>
            <li><a href="{{url('/manager/help')}}"><i class="fa fa-question-circle"></i> <span>Help</span></a></li>
            <li><a href="{{ route('user_logout_path') }}"><i class="fa fa-sign-out"></i> <span>Logout</span></a></li>
        </ul>
    </section>
</aside>