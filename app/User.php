<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laratrust\Traits\LaratrustUserTrait;

class User extends Authenticatable
{
    use LaratrustUserTrait;
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'school_id', 'class_id', 'ic_number', 'username', 'email', 'phone', 'password', "gender", "dob", "score", "state_id", "pkg_id", "status", "image", "type", "done"
    ];
    //status 1->active
    // 2->suspend


    /**
     * @return array
     */
    public function totalTime()
    {
        $time = StudentRecord::where('user_id', $this->id)->sum('time');
        return $time;
    }

    /**
     * @return array
     */
    public function state()
    {
        return $this->belongsTo(State::class);
    }

    /**
     * @return array
     */
    public function pkg()
    {
        return $this->belongsTo(Pkg::class);
    }

}
