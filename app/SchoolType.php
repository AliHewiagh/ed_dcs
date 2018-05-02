<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SchoolType extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'school_types';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        "group", "name", "active",
    ];
    
}
