<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Progress extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'progresses';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        "state", "location_id", "school_id", "teacher_id", "class_id", "student_id", "progress", "score", "complete"
    ];

    
}
