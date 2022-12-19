flag = 0;
noofusrs = 0;
emails = []
passwd = []
phoneno = []
fvclr = []
fulnam = []
function getdetails(){
          namefull = document.getElementById("fname").value 
          fulnam.push(namefull)
          nameusr = document.getElementById("email").value 
          for(let i=0;i<=noofusrs;i++)
          {
            if(nameusr == emails[i])
            {
                flag = 1;
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
  document.getElementById("regdivv").style.display = "none"
  document.getElementById("sec1").style.display = "block"
 
    
}

function checkdetails(){
    
    uemail = document.getElementById("emailss").value 

    for(let i=0;i<=noofusrs;i++)
    {
      if( uemail  == emails[i])
      {
        console.log(emails[i])
          alert("emailid already exists")
      }
    }
   
}