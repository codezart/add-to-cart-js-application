//Mohammed Abdur Rahman 201626480
function priceValue() {									 	//Returns the price of a selected item
    var selector = document.getElementById('select_Item'); //variable to hold the array of all item options
    var itemName = selector[selector.selectedIndex].value; //variable to hold the name of the item selected
    switch(itemName){
    	case 'notebook':
    			document.getElementById('price_input').value = 25;
    			break;
		case 'Pencilbox':
			    document.getElementById('price_input').value = 16;
			    break;
		case 'Tape':
			    document.getElementById('price_input').value = 7;
			    break;
		case 'eraser':
			    document.getElementById('price_input').value = 8;
			    break;
    	case 'Lenovo Laptop':
    	    	document.getElementById('price_input').value = 3999;
    	    	break;
    }  
}

function printandEmail(el1, el2){ 							// function to print and email to the user

	var wholePage = document.body.innerHTML; 				// stores the content of the whole page
	var printableContent = document.getElementById('header').innerHTML+"<br><br>"+
							document.getElementById(el1).innerHTML +"<br><br>"+ 
						   document.getElementById(el2).innerHTML; 		//stores the header, userdetails and invoice
	document.body.innerHTML = printableContent;				//sets the page to have printable content
	
	window.print();											//calls the print function to print the printable content
															//The user can select save as pdf to get the invoice in pdf format
}

function userDetailsValidation(){
	var userName = document.userForm.UserName.value 		//stores the name of the user
	var userEmail = document.userForm.email.value 			// stores the email of the user
	if(userName == "" ||userEmail == ""){
		alert("UserName and Email Id is required")			//checks if any one of the fields is left empty
		return
	}
	else{
		var userNamePattern = new RegExp("^([A-Z a-z\s])+([A-Z a-z\s])$");		//reg-expression for the userName
		var emailPattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/  //reg-ex for the email

		if(!userNamePattern.test(userName))		//check for the username
			alert("Incorrect Name Entered!!!")

		if(!emailPattern.test(userEmail))		//check for the email
			alert("incorrect Email Entered!!!")
		
	}
}