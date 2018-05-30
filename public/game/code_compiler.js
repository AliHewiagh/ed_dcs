function compile_input(code_input)
{
  var to_compile = code_input.toLowerCase().trim();
  // var to_compile = "move(1);123";

  var bracket_is_open = false;
  var open_brace_count = 0;
  var close_brace_count = 0;
  debug_text = "";

  console.log("compile start");

  if(!to_compile.includes("(") || !to_compile.includes(")") || !to_compile.includes(";"))
  {
    console.log("Invalid syntax");
    debug_text = ("Invalid syntax");
    return "error";
  }

  if(to_compile.substr(to_compile.length - 1) != ";" && to_compile.substr(to_compile.length - 1) != "}")
  {
    console.log("Invalid syntax");
    debug_text = ("Invalid syntax");
    return "error"; 
  }

  for(var i = 0; i < to_compile.length; i++)
  {
    if(to_compile.charAt(i) == '(' && !bracket_is_open)
    {
      bracket_is_open = true;
    }
    else if(to_compile.charAt(i) == '(' && bracket_is_open)
    {
      console.log("error, ) missing at " + i);
      debug_text = ("error, ) missing at " + i);
      console.log("debug_text, code compiler : " + debug_text);
      return "error";
    }

    if(to_compile.charAt(i) == ')' && bracket_is_open)
    {
      if(to_compile.charAt(i + 1) != null && (to_compile.charAt(i + 1) == ';' || to_compile.charAt(i + 1) == '{'))
      {
        bracket_is_open = false;
      }
      else
      {
        console.log("error, ; or { missing at " + i);
        debug_text = ("error, ; or { missing at " + i);
        console.log("debug_text : " + debug_text);
        return "error";
      }
    }
    else if(to_compile.charAt(i) == ')' && !bracket_is_open)
    {
      console.log("error, ( missing at " + i);
      debug_text = ("error, ( missing at " + i);
      return "error";
    }    

    if(to_compile.charAt(i) == '{')
    {
      if(isLetter(to_compile.charAt(i - 1)))
      {
        console.log("syntax error, { at " + (i - 1));
        debug_text = ("syntax error, { at " + (i - 1));
        return "error";
      }

      open_brace_count += 1;
    }
    
    if(to_compile.charAt(i) == '}')
    {
      close_brace_count += 1;
    }

    if(to_compile.charAt(i) == ';')
    {
      if(to_compile.charAt(i + 1) != null && to_compile.charAt(i + 1) == ';')
      {
        console.log("multiple ; at " + i);
        debug_text = ("multiple ; at " + i);
        return "error";
      }

      if(to_compile.charAt(i - 1) != null && to_compile.charAt(i - 1) != ')')
      {
        console.log("parsing error at " + i);
        debug_text = ("parsing error at " + i);
        return "error";
      }

      if(to_compile.charAt(i + 1) != null && is_numeric(to_compile.charAt(i + 1)))
      {
        console.log("syntax error at " + i);
        debug_text = ("syntax error at " + i);
        return "error";
      }
    }
  }

  if(open_brace_count != close_brace_count)
  {
    if(open_brace_count > close_brace_count)
    {
      console.log("error, } missing at " + i);
      debug_text = ("error, } missing at " + i);
      return "error";
    }
    else
    {
      console.log("error, { missing at " + i);
      debug_text = ("error, { missing at " + i);
      return "error";
    }
  }
  
  console.log("compile check symbol error done");

  var string_to_check = "";

  for(var i = 0; i < to_compile.length; i++)
  {
    if(isLetter(to_compile.charAt(i)))
    {
      string_to_check += to_compile.charAt(i);
    }
    
    if(to_compile.charAt(i + 1) == "" && (i + 1) != to_compile.length)
    {
      console.log("wrong statement at " + i);
      debug_text = ("wrong statement at " + i);
      return "error";
    }
    else if(to_compile.charAt(i + 1) != null && !isLetter(to_compile.charAt(i + 1)) && string_to_check != "")
    {
      if(string_to_check == "repeat")
      {
        var is_close_bracket_found = false;

        for(var j = i + 1; j < to_compile.length; j++)
        {
          if(!is_close_bracket_found && to_compile.charAt(j) == ')')
          {
            if(to_compile.charAt(j + 1) != null && to_compile.charAt(j + 1) == ';')
            {
              console.log("repeat end with ; at " + j);
              debug_text = ("repeat end with ; at " + j);
              return "error";
            }
            is_close_bracket_found = true;
          }
        }
      }

      if(to_compile.charAt(i + 1) == "(" && string_to_check != "jump")
      {
        if(to_compile.charAt(i + 2) != null && !is_numeric(to_compile.charAt(i + 2)))
        {
          if(to_compile.charAt(i + 2) != "-")
          {
            console.log("number missing after ( at " + i);
            debug_text = ("number missing after ( at " + i);
            return "error";
          }
        }
      }

      if(string_to_check != "move" && string_to_check != "repeat" && string_to_check != "turn" && string_to_check != "jump")
      {
        console.log("syntax error at " + (i + 1) + " , " + string_to_check);
        debug_text = ("syntax error at " + (i + 1) + " , " + string_to_check);
        return "error";
      }
      else
      {
        string_to_check = "";
      }
    }
  }

  console.log("compile check text error done");

  var repeat_amount = 0;
  var close_brace_found = 0;
  var repeat_found = false;
  var open_brace_found = false;

  while(to_compile.indexOf("repeat") > -1)
  {
    var string_to_replace = "";
    var string_being_replaced = "";

    for(var i = 0; i < to_compile.length; i++)
    {
      if(isLetter(to_compile.charAt(i)))
      {
        string_to_check += to_compile.charAt(i);
      }
      else if(!isLetter(to_compile.charAt(i)) && string_to_check != "")
      {
        if(string_to_check == "repeat" && !repeat_found)
        {
          string_being_replaced += string_to_check + "(";

          var k = 1;
          var repeat_extracted = "";
          while(is_numeric(to_compile.charAt(i + k)))
          {
            repeat_extracted += to_compile.charAt(i + k);
            k++;
          }

          var j = 1;
          var brace_tracker = 0;

          while(true)
          { 
            if(open_brace_found)
            {
              string_to_replace += to_compile.charAt(i + j);
            }

            if(to_compile.charAt(i + j) == '{')
            {
              open_brace_found = true;
              brace_tracker += 1;
            }

            if(to_compile.charAt(i + j) == '}')
            {
              close_brace_found += 1;
              brace_tracker -= 1;
            }

            string_being_replaced += to_compile.charAt(i + j);

            if(brace_tracker == 0 && open_brace_found)
            {
              string_to_replace = string_to_replace.slice(0,(string_to_replace.length - 1));
              break;
            }

            j++;
          }

          string_to_replace = string_to_replace.repeat(parseInt(repeat_extracted));
          // console.log(string_being_replaced);
          // console.log(string_to_replace);

          repeat_found = true;

          string_to_check = ""; 
        }
        else
        {
          string_to_check = "";
        }
      }
    }

    to_compile = to_compile.replace(string_being_replaced,string_to_replace);

    // console.log(to_compile);

    open_brace_found = false;
    repeat_found = false;
  }
  
  console.log("compile done");

  if(to_compile.indexOf("{") > -1 || to_compile.indexOf("}") > -1)
  {
    console.log("other error");
    debug_text = ("other error");
    return "error";
  }
  else
  {
    return to_compile;
  }
}

function isLetter(str) {
  return str.length === 1 && str.match(/[a-z]/i);
}

function is_numeric(str){
  return /^\d+$/.test(str);
}