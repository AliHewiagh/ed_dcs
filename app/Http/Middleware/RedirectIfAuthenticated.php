<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class RedirectIfAuthenticated
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string|null  $guard
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = null)
    {
        if (Auth::guard($guard)->check()) {
            if(Auth::user()->hasRole("student")){
                return redirect('/student/dashboard');
            }elseif(Auth::user()->hasRole("teacher")){
                return redirect('/teacher/dashboard');
            }elseif(Auth::user()->hasRole("manager")){
                return redirect('/manager/dashboard');
            }elseif(Auth::user()->hasRole("admin")){
                return redirect('/admin/dashboard');
            }else{
                return redirect('/logout');
            }

        }

        return $next($request);
    }
}
