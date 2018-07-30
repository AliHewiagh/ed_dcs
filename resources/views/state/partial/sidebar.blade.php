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
        <form action="{{url('/state/search')}}" method="post" class="sidebar-form">
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
            <li><a href="{{ route('state_dashboard_path') }}"><i class="fa fa-tachometer"></i> <span>Dashboard</span></a></li>
            <li><a href="{{url('/state/progress')}}"><i class="fa fa-cubes"></i> <span>Progress</span></a></li>
            <li class="treeview">
                <a href="#"><i class="fa fa-cubes"></i> <span>Leader Board</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
                </a>
                <ul class="treeview-menu">
                    <li><a href="{{ url('/state/top/school/year6') }}">Top Year 6 Schools</a></li>
                    <li><a href="{{ url('/state/top/school/form3') }}">Top Form 3 Schools</a></li>
                    <li><a href="{{ url('/state/top/school/form5') }}">Top Form 5 Schools</a></li>
                    <li><a href="{{ url('/state/top/student/year6') }}">Top Year 6 Students</a></li>
                    <li><a href="{{ url('/state/top/student/form3') }}">Top Form 3 Students</a></li>
                    <li><a href="{{ url('/state/top/student/form5') }}">Top Form 5 Students</a></li>
                </ul>
            </li>

            <li><a href="{{url('/state/setting')}}"><i class="fa fa-gear"></i> <span>Setting</span></a></li>
            <li><a href="{{url('/state/help')}}"><i class="fa fa-question-circle"></i> <span>Help</span></a></li>
            
            <li><a href="{{ route('user_logout_path') }}"><i class="fa fa-sign-out"></i> <span>Logout</span></a></li>
        </ul>
    </section>
</aside>