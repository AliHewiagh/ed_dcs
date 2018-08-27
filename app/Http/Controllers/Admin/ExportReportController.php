<?php

namespace App\Http\Controllers\Admin;

use App\export\SchoolReportExport;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ExportReportController extends Controller
{


    /**
     * Export transactions
     */
    public function schoolReport(Request $request)
    {
        $start = $request->start_date;
        $end = $request->end_date;
        if(empty($start)){
            $start = "2017-01-01";
        }
        if(empty($end)){
            $end = "2099-01-01";
        }
        $dates = $start." ".$end;
        return (new SchoolReportExport())->forDates($dates)->download('reports.xlsx');


    }


}
