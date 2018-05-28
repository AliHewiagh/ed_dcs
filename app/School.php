<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class School extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'schools';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        "school_code", "name", "user_id", "state_id", "pkg", "type", "school_type_id", "location_id", "area",
        "mypib", "sekolahi", "sekolahk", "sbt", "source", "active", "done",
    ];


    /**
     * @return array
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * @return array
     */
    public function location()
    {
        return $this->belongsTo(Location::class);
    }
    
}
