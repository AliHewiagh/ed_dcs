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
        \App\Skill::create(["type"=>"param", "skillId"=>5, "description"=>"Assess and use information and technology ethically and legally"]);
        \App\Skill::create(["type"=>"param", "skillId"=>6, "description"=>"Assess and use information and technology safely"]);

        //SkillSet
        \App\Skill::create(["type"=>"skill", "skillId"=>1, "description"=>"Typing and editing"]);
        \App\Skill::create(["type"=>"skill", "skillId"=>2, "description"=>"Data collection"]);
        \App\Skill::create(["type"=>"skill", "skillId"=>3, "description"=>"Data modification"]);
        \App\Skill::create(["type"=>"skill", "skillId"=>4, "description"=>"Finding information using keywords via search engine"]);
        \App\Skill::create(["type"=>"skill", "skillId"=>5, "description"=>"Compare the differences between information to derive valid information"]);
        \App\Skill::create(["type"=>"skill", "skillId"=>6, "description"=>"Insert texts and numbers in cells / tables"]);
        \App\Skill::create(["type"=>"skill", "skillId"=>7, "description"=>"Presenting data in the form of tables and graphs"]);
        \App\Skill::create(["type"=>"skill", "skillId"=>8, "description"=>"Extract, collect and save obtained information"]);
        \App\Skill::create(["type"=>"skill", "skillId"=>9, "description"=>"Create a database"]);
        \App\Skill::create(["type"=>"skill", "skillId"=>10, "description"=>"Data analysis"]);
        \App\Skill::create(["type"=>"skill", "skillId"=>11, "description"=>"Usage of web browser"]);
        \App\Skill::create(["type"=>"skill", "skillId"=>12, "description"=>"Follow instructions in order, precisely and systematically (algorithms and procedures)"]);
        \App\Skill::create(["type"=>"skill", "skillId"=>13, "description"=>"Make logic considerations when following an instruction."]);
        \App\Skill::create(["type"=>"skill", "skillId"=>14, "description"=>"Breakdown big problem into subproblems (decomposition)"]);
        \App\Skill::create(["type"=>"skill", "skillId"=>15, "description"=>"Parallelisation"]);
        \App\Skill::create(["type"=>"skill", "skillId"=>16, "description"=>"Follow the rules of the computer lab"]);
        \App\Skill::create(["type"=>"skill", "skillId"=>17, "description"=>"Using computer hardware safely and responsibly"]);
        \App\Skill::create(["type"=>"skill", "skillId"=>18, "description"=>"Acknowledge and appreciate copyrights"]);
        \App\Skill::create(["type"=>"skill", "skillId"=>19, "description"=>"Ensure computer hardware is functioning"]);
        \App\Skill::create(["type"=>"skill", "skillId"=>20, "description"=>"State the source of obtained online information"]);
        \App\Skill::create(["type"=>"skill", "skillId"=>21, "description"=>"Green technology"]);
        \App\Skill::create(["type"=>"skill", "skillId"=>22, "description"=>"Cooperation among classmates"]);
        \App\Skill::create(["type"=>"skill", "skillId"=>23, "description"=>"Ensure safety and security when using computers"]);
        \App\Skill::create(["type"=>"skill", "skillId"=>24, "description"=>"Familiar with network concepts"]);
        \App\Skill::create(["type"=>"skill", "skillId"=>25, "description"=>"Organise and select information from legal sources"]);
        \App\Skill::create(["type"=>"skill", "skillId"=>26, "description"=>"Download information and software"]);
        \App\Skill::create(["type"=>"skill", "skillId"=>27, "description"=>"Upload information"]);
        \App\Skill::create(["type"=>"skill", "skillId"=>28, "description"=>"Systematic file management"]);
        \App\Skill::create(["type"=>"skill", "skillId"=>29, "description"=>"Compare the specifications of two or more computers."]);
        \App\Skill::create(["type"=>"skill", "skillId"=>30, "description"=>"Network usage"]);
        \App\Skill::create(["type"=>"skill", "skillId"=>31, "description"=>"Usage of programming"]);
        \App\Skill::create(["type"=>"skill", "skillId"=>32, "description"=>"Identify and choose safety procedure to prevent virus attack"]);
        \App\Skill::create(["type"=>"skill", "skillId"=>33, "description"=>"Define and decompose real-world problems taking into account functional requirements and economic, environmental, social, technical and usability constraints"]);
        \App\Skill::create(["type"=>"skill", "skillId"=>34, "description"=>"Design algorithms represented diagrammatically and in English, and trace algorithms to predict output for a given input and to identify errors"]);
        \App\Skill::create(["type"=>"skill", "skillId"=>35, "description"=>"Acknowledge and appreciate copyrights in using information"]);
        \App\Skill::create(["type"=>"skill", "skillId"=>36, "description"=>"State the source of obtained online information"]);
        \App\Skill::create(["type"=>"skill", "skillId"=>37, "description"=>"Cultivate cyber ethics"]);
        \App\Skill::create(["type"=>"skill", "skillId"=>38, "description"=>"Apply cyber safety knowledge"]);

    }
}
