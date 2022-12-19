flag = 0;
noofusrs = 0;
emails = []
passwd = []
phoneno = []
fvclr = []
fulnam = []
brinj = 0;
tomat = 0;
potat = 0;
totals = 0;
function getdetails(){
          namefull = document.getElementById("fname").value 
          fulnam.push(namefull)
          nameusr = document.getElementById("email").value 
          for(let i=0;i<=noofusrs;i++)
          {
            if(nameusr == emails[i])
            {
                alert("Email id already exists")
                document.getElementById("sec1").style.display = "none"
                document.getElementById("sec2").style.display = "block"
            }
          }
          
          if(flag == 0)
          {
            emails.push(nameusr)
          }
          else{
            alert("Emailid alreasy exists")
            
          }
          
          phonenum = document.getElementById("phnno").value 
          phoneno.push(phonenum)
          upwd = document.getElementById("pwd").value 
          passwd.push(upwd)
          favclr = document.getElementById("clr").value 
          fvclr.push(favclr)
          noofusrs +=1
          
}

function getpage(){
  document.getElementById("sec1").style.display = "none"
  document.getElementById("sec2").style.display = "block"
 
    
}

function checkdetails(){
    uemail2 = document.getElementById("email2").value 
    uclr = document.getElementById("clr1").value
    for(let i=0;i<=noofusrs;i++){
        if(uemail2 == emails[i])
        {
            if(uclr != fvclr[i]){
               alert("Not matching with the details given")
            }
        }
    }
    document.getElementById("sec1").style.display = "none"
    document.getElementById("sec2").style.display = "none"
    document.getElementById("sec3").style.display = "none"
    document.getElementById("sec5").style.display = "none"
    document.getElementById("sec6").style.display = "none"
    document.getElementById("sec4").style.display = "block"
}

function passchange(){
    uemail3 = document.getElementById("email4").value 
    passch1 = document.getElementById("pwd3").value 
    passch2 = document.getElementById("pwd4").value 
    if(passch1 != passch2)
    {
        alert("Both the passwords are not same")
    }
    else{
        for(let i=0;i<=noofusrs;i++){
            if(uemail3 == emails[i]){
                passwd[i] = passch1
            }
        }
        
    }
    document.getElementById("sec4").style.display = "none"
    document.getElementById("sec1").style.display = "none"
    document.getElementById("sec3").style.display = "none"
    document.getElementById("sec5").style.display = "none"
    document.getElementById("sec6").style.display = "none"
    document.getElementById("sec2").style.display = "block"
}

function passwordcheck(){
    document.getElementById("sec1").style.display = "none"
    document.getElementById("sec2").style.display = "none"
    document.getElementById("sec4").style.display = "none"
    document.getElementById("sec5").style.display = "none"
    document.getElementById("sec6").style.display = "none"
    document.getElementById("sec3").style.display = "block"
}

function inpage(){
    document.getElementById("sec1").style.display = "none"
    document.getElementById("sec2").style.display = "none"
    document.getElementById("sec3").style.display = "none"
    document.getElementById("sec4").style.display = "none"
    document.getElementById("sec6").style.display = "none"
    document.getElementById("sec5").style.display = "block"
    usrnames = document.getElementById("emailid1").value
    for(let i=0;i<noofusrs;i++){
        if(usrnames == emails[i])
        {
            document.getElementById("user").innerHTML = fulname[i]
        }
    }
}

function addtothecart(){
    brinj = document.getElementById("price1").value * parseInt(60);
    tomat = document.getElementById("price2").value* 30;
    potat = document.getElementById("price3").value * 40;
    
}

function checkout()
{
    document.getElementById("sec1").style.display = "none"
    document.getElementById("sec2").style.display = "none"
    document.getElementById("sec3").style.display = "none"
    document.getElementById("sec4").style.display = "none"
    document.getElementById("sec5").style.display = "none"
    document.getElementById("sec6").style.display = "block"
    totals = potat + tomat + brinj
    
    document.getElementById("tot").innerHTML = totals
}

