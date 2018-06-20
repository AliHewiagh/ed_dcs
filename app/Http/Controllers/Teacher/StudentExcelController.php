<?php

namespace App\Http\Controllers\Teacher;

use App\Role;
use App\School;
use App\SchoolClass;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Maatwebsite\Excel\Excel;


class StudentExcelController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function uploadFile(Request $request, $classId)
    {

        $file = $request->file('excel')->getRealPath();
        $cus = $this->csvToArray($file);
        $data["school_id"] = Auth::user()->school_id;
        $data["class_id"] = $classId;
        $data["type"] = 4;
        $i = 0;
        foreach ($cus as $cu){
            if(array_key_exists('Name', $cu) && array_key_exists('Ic Number', $cu) && strlen($cu["Ic Number"]) > 8){
                $data["ic_number"] = str_replace(" ", "", $cu["Ic Number"]);
                $data["name"] = $cu["Name"];
                $old = User::where("username", $data["ic_number"])->first();
                if(empty($old)){
                    $data["username"] = $data["ic_number"];
                    $data["password"] = substr($data["ic_number"], -4, 4);
                    $gender = substr($data["ic_number"], -1, 1);
                    if ($gender % 2 == 0) {
                        $data["gender"] = "Female";
                    }else{
                        $data["gender"] = "Male";
                    }
                    $user = User::create($data);
                    $role = Role::where("id", 4)->first();
                    $user->attachRole($role);
                    $i++;

                    SchoolClass::where('id', $data["class_id"])->update(['done'=>0]);
                    School::where('id', $data["school_id"])->update(['done'=>0]);
                }
            }
        }

        if($i>0){
            return back()->with("success", $i." students are imported into database!");
        }
        return back()->with("error", "No student is imported, please check the file format to be correct!");

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
