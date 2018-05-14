<?php

namespace App\Http\Controllers\Admin;

use App\Role;
use App\School;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SchoolExcelController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function uploadFile(Request $request)
    {

        $file = $request->file('excel')->getRealPath();
        $cus = $this->csvToArray($file);
        $role = Role::where("id", 2)->first();
        $usernameS = "m".time();
        $data["type"] = 2;
        $i = 0;
        foreach ($cus as $cu){
            if(array_key_exists('Name', $cu)){
                $old = School::where("name", $cu["Name"])->first();
                if(empty($old)){
                    $data["name"] = $cu["Name"];
                    $data["username"] = $usernameS.$i;
                    $data["password"] = str_random(8);
                    $user = User::create($data);
                    $user->attachRole($role);
                    $school = School::create(["name"=>$cu["Name"], "user_id"=>$user->id]);
                    $user->update(["school_id"=>$school->id]);
                    $i++;
                }
            }
        }

        if($i>0){
            return back()->with("success", $i." school are imported into database!");
        }
        return back()->with("error", "No school is imported, please check the file format or contents to be correct!");

    }


    function csvToArray($filename = '', $delimiter = ',')
    {
        if (!file_exists($filename) || !is_readable($filename))
            return false;

        $header = null;
        $data = array();
        if (($handle = fopen($filename, 'r')) !== false)
        {
            while (($row = fgetcsv($handle, 1000, $delimiter)) !== false)
            {
                if (!$header)
                    $header = $row;
                else
                    $data[] = array_combine($header, $row);
            }
            fclose($handle);
        }

        return $data;
    }

}
