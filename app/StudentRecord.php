<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class StudentRecord extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'student_records';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        "user_id", "stage", "qId", "qDomain", "qParam", "qSkill", "qResult", "userAns", "time", "score",
    ];


    /**
     * @return array
     */
    public function domain()
    {
        $domain = Skill::where([['type', 'domain'], ['skillId', $this->qDomain]])->first();
        return $domain;
    }

    /**
     * @return array
     */
    public function parameter()
    {
        $domain = Skill::where([['type', 'param'], ['skillId', $this->qParam]])->first();
        return $domain;
    }

    /**
     * @return array
     */
    public function skill()
    {
        $domain = Skill::where([['type', 'skill'], ['skillId', $this->qSkill]])->first();
        return $domain;
    }
}
