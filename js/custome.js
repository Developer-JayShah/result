function btn1click(){
    var t1 = txt1.value;
    var t2 = txt2.value;
    var t3 = txt3.value;   
    var t4 = txt4.value;   
    var t5 = txt5.value;   

if (t1 == ""|| t2 == ""|| t3 == ""|| t4 == ""|| t5 == "")
{
    lblMsg.innerHTML = "please enter all subject marks";
    lblMsg.style.color = "red";
}
else{
    lblMsg.innerHTML = "please check your result";
    lblMsg.style.color = "Green";
     lblTotal.innerHTML = parseInt(t1) + parseInt(t2) + parseInt(t3) + parseInt(t4) +parseInt(t5);
       
    if (parseInt(t1) < 35|| parseInt(t2) < 35|| parseInt(t3) < 35 || parseInt(t4) < 35 || parseInt(t5) < 35)
    {
        lblGrade.innerHTML = "FF";
        lblPer.innerHTML = "0";
    }
   else{

   

    lblPer.innerHTML = parseInt(lblTotal.innerHTML) / 5;
    

    if(parseFloat(lblPer.innerHTML) >= 70){
        lblGrade.innerHTML = "A";
    }
    else if(parseFloat(lblPer.innerHTML) >= 60){
            lblGrade.innerHTML = "B";
    }
    else if(parseFloat(lblPer.innerHTML) >= 50){
        lblGrade.innerHTML = "C";
    }
    else if(parseFloat(lblPer.innerHTML) >= 35){
        lblGrade.innerHTML = "E";
    }
    else{
        lblGrade.innerHTML = "Fail";
    }
}
}
}