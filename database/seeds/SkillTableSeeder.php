<?php

use Illuminate\Database\Seeder;

class SkillTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Domains
        \App\Skill::create(["type"=>"domain", "skillId"=>1, "description"=>"Technology"]);
        \App\Skill::create(["type"=>"domain", "skillId"=>2, "description"=>"Cognitive"]);
        \App\Skill::create(["type"=>"domain", "skillId"=>3, "description"=>"Digital citizenship"]);

        //Parameters
        \App\Skill::create(["type"=>"param", "skillId"=>1, "description"=>"Digital information literacy"]);
        \App\Skill::create(["type"=>"param", "skillId"=>2, "description"=>"Organise, store, retrieve and present information"]);
        \App\Skill::create(["type"=>"param", "skillId"=>3, "description"=>"Technology concepts and operations"]);
        \App\Skill::create(["type"=>"param", "skillId"=>4, "description"=>"Problem solving and decision making"]);
        \App\Skill::create(["type"=>"param", "skillId"=>5, "description"=>"Access and use information and technology ethically and legally"]);
        \App\Skill::create(["type"=>"param", "skillId"=>6, "description"=>"Access and use information and technology safely and responsibly"]);

        //SkillSet
        \App\Skill::create(["type"=>"skill", "skillId"=>1, "description"=>"Use features of web browsers effectively"]);
        \App\Skill::create(["type"=>"skill", "skillId"=>2, "description"=>"Search for and evaluate information online"]);
        \App\Skill::create(["type"=>"skill", "skillId"=>3, "description"=>"Collect, organise and illustrate data in appropriate formats"]);
        \App\Skill::create(["type"=>"skill", "skillId"=>4, "description"=>"Download files or content"]);
        \App\Skill::create(["type"=>"skill", "skillId"=>5, "description"=>"Upload files or content"]);
        \App\Skill::create(["type"=>"skill", "skillId"=>6, "description"=>"Identify data hierarchy"]);
        \App\Skill::create(["type"=>"skill", "skillId"=>7, "description"=>"Identify data types"]);
        \App\Skill::create(["type"=>"skill", "skillId"=>8, "description"=>"Understand and apply basic knowledge of computer hardware and software"]);
        \App\Skill::create(["type"=>"skill", "skillId"=>9, "description"=>"Identify and compare computer hardware specifications"]);
        \App\Skill::create(["type"=>"skill", "skillId"=>10, "description"=>"Type and edit text"]);
        \App\Skill::create(["type"=>"skill", "skillId"=>11, "description"=>"Recognise commonly used file types and file name extensions"]);
        \App\Skill::create(["type"=>"skill", "skillId"=>12, "description"=>"Demonstrate understanding of introductory programming knowledge"]);
        \App\Skill::create(["type"=>"skill", "skillId"=>13, "description"=>"Identify flowchart elements and use flowcharts to present processes graphically and/or predict outcomes"]);
        \App\Skill::create(["type"=>"skill", "skillId"=>14, "description"=>"Protect computer hardware, software and data files from malicious attacks and other threats"]);
        \App\Skill::create(["type"=>"skill", "skillId"=>15, "description"=>"Identify network types"]);
        \App\Skill::create(["type"=>"skill", "skillId"=>16, "description"=>"Take a series of ordered steps to solve a problem or achieve a goal (algorithms and procedures)"]);
        \App\Skill::create(["type"=>"skill", "skillId"=>17, "description"=>"Break down tasks into smaller, more manageable parts (problem decomposition)"]);
        \App\Skill::create(["type"=>"skill", "skillId"=>18, "description"=>"Organise resources to simultaneously carry out tasks to reach a common goal (parallelisation)"]);
        \App\Skill::create(["type"=>"skill", "skillId"=>19, "description"=>"Follow the rules of the computer lab"]);
        \App\Skill::create(["type"=>"skill", "skillId"=>20, "description"=>"Demonstrate awareness of environmentally friendly practices"]);
        \App\Skill::create(["type"=>"skill", "skillId"=>21, "description"=>"Practise etiquette in the computer lab"]);
        \App\Skill::create(["type"=>"skill", "skillId"=>22, "description"=>"Appreciate the concept of copyright and demonstrate respect for intellectual property"]);
        \App\Skill::create(["type"=>"skill", "skillId"=>23, "description"=>"Access and use information and online services safely and responsibly"]);
        \App\Skill::create(["type"=>"skill", "skillId"=>24, "description"=>"Use computers safely and responsibly"]);
        \App\Skill::create(["type"=>"skill", "skillId"=>25, "description"=>"Safeguard personal information"]);
        \App\Skill::create(["type"=>"skill", "skillId"=>26, "description"=>"Identify strong and weak passwords"]);

    }
}
