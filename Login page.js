function validate()
{
	
	var username=document.getElementById("username").value;
	var password=document.getElementById("password").value;
	
	if(username=="Estyak"&& password=="12345")
		
	{
		alert("login succesfully")
		window.location.href="C:\Users\admin\Desktop\Responsive Header\Responsive-slideshow.html";
	 
		
	}
	else
	{
		
		alert("login failed")
		
	}
}