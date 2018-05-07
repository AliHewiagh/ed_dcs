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
        'name', 'school_id', 'class_id', 'ic_number', 'username', 'email', 'phone', 'password', "gender", "dob", "status", "image", "type"
    ];
    //status 1->active
    // 2->suspend
    


}
