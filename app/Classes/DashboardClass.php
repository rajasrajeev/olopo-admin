<?php

namespace App\Classes;

use App\Helper\Common;
use App\Models\Category;
use Illuminate\Support\Facades\Log;

class DashboardClass
{
    private $category;
    public function __construct(Category $category)
    {
        $this->category = $category;
    }
    public function getCount(){
        try {
            /* $email_id = Common::AuthID(); */
            $data = [];

            $getTotalProject = $this->category->count();

            $data["totalProject"] = $getTotalProject;

            if (isset($data) && !empty($data)){
                return response()->json(["status"=>true,"message"=>"dashboard count get success","data"=>$data])->setStatusCode(200);
            }
            return response()->json(["status"=>false,"message"=>"error while get dashboard data"])->setStatusCode(400);
        }catch (\Exception $ex){
            Log::info("DashboardClass Error",["getCount"=>$ex->getMessage(),"line"=>$ex->getLine()]);
            return response()->json(["status"=>false,"message"=>"internal server Error"])->setStatusCode(500);
        }
    }
}
