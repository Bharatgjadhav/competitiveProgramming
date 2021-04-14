/*     var postStr = "123++"; //initial postfix expression     
    var postArr =  new Array();
    postArr = postStr.split(""); //string.split() turns string into array!

    for(var i=0; i<postArr.length; i++)
        document.write("value"+postArr[i]+"<br>");

    var stack=[];
    var result;
    var firstNum;
    var secNum;
    //var k;
    for(var i=0; i<postArr.length; i++)
    {
        if((postArr[i]!="^")||(postArr[i]!= "+")||(postArr[i]!= "-")||      (postArr[i]!= "*")||(postArr[i]!= "/"))
        {
            stack.push(postArr[i]);
            //document.write("length" + stack.length);
        }

        else if((postArr[i]=="^")||(postArr[i]== "+")||(postArr[i]== "-")||(postArr[i]== "*")||(postArr[i]== "/"))
        { 
            if(postArr[i]=='+')
            {
                firstNum=stack.pop();
                secNum=stack.pop();
                result = secNum + firstNum;
                stack.push("result = " + result);
            }
            else if(postArr[i]=='*')
            {
                firstNum=stack.pop();
                secNum=stack.pop();
                result = secNum * firstNum;
                stack.push("result = " + result);
            }
            else if(postArr[i]=='/')
            {
                firstNum=stack.pop();
                secNum=stack.pop();
                result = secNum / firstNum;
                stack.push("result = " + result);
            }
            else if(postArr[i]=='-')
            {
                firstNum=stack.pop();
                secNum=stack.pop();                                        
                                    result = secNum - firstNum;
                stack.push("result = " + result);
            } 
        }
    }
    var finalRes=stack.pop();
    document.write(finalRes);  */



    var postStr = "123++"; //initial postfix expression     
    var postArr =  new Array();
    postArr = postStr.split(""); //string.split() turns string into array!

    for(var i=0; i<postArr.length; i++)
        //document.write("value"+postArr[i]+"<br>");

    var stack=[];
    var result;
    var firstNum;
    var secNum;
    //var k;
    for(var i=0; i<postArr.length; i++)
    {
        if((postArr[i]!="^")||(postArr[i]!= "+")||(postArr[i]!= "-")||      (postArr[i]!= "*")||(postArr[i]!= "/"))
        {
            stack.push(postArr[i]);
            //document.write("length" + stack.length);
        }

        else if((postArr[i]=="^")||(postArr[i]== "+")||(postArr[i]== "-")||(postArr[i]== "*")||(postArr[i]== "/"))
        { 
            if(postArr[i]=='+')
            {
                firstNum=stack.pop();
                secNum=stack.pop();
                result = secNum + firstNum;
                stack.push("result = " + result);
            }
            else if(postArr[i]=='*')
            {
                firstNum=stack.pop();
                secNum=stack.pop();
                result = secNum * firstNum;
                stack.push("result = " + result);
            }
            else if(postArr[i]=='/')
            {
                firstNum=stack.pop();
                secNum=stack.pop();
                result = secNum / firstNum;
                stack.push("result = " + result);
            }
            else if(postArr[i]=='-')
            {
                firstNum=stack.pop();
                secNum=stack.pop();                                        
                                    result = secNum - firstNum;
                stack.push("result = " + result);
            } 
        }
    }
    var finalRes=stack.pop();
    console.log(finalRes)