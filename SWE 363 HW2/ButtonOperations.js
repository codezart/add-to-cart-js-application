//Mohammed Abdur Rahman 201626480
var serialNum= 1;	// serial num is a global variable to keep track of the sr.

function deleteCartItem(btn) {			// func. to delete a cart item
	var deleteBtn = document.getElementsByClassName("delete_FromCart_btn")	//gets the array of all delete buttons
	var btnIndex; 															// to hold the index of the button clicked
	for( var i=0; i < deleteBtn.length; i++){								// for loop to find the index of the button clicked
		if(deleteBtn[i] == btn)
			btnIndex = i;
	}
	btn.parentElement.parentElement.remove();								//removes the button from cartItems

	var cartItem = document.getElementsByClassName("itemDetails"); 			// gets an array of all the cartItems in the cartItems list
	for(var i = btnIndex; i<cartItem.length; ++i){							// loops through the cart items after the deleted item and assigns new serial numbers
		cartItem[i].getElementsByTagName("td")[0].innerText = i+1; 			// new serial num is assigned to the cart item
	}
	/*the serial num. is updated by getting the last cart item's serial num and adds 1 to it. Therefore, when a new
	cart item is added the value of Sr. is simply used in addCartItem() function
	*/
	serialNum = parseInt(cartItem[cartItem.length-1].getElementsByTagName("td")[0].innerText)+1; 
	
	totalPrice(); //updates the total price 
}
function addCartItem(){
	var price = document.getElementById("price_input").value; 				//Gets the value of price
	var quantity = document.getElementById("quantity_input").value;			//Gets the value of quantity
	var selector = document.getElementById('select_Item');					//gets the select tag
    var selected_Item = selector[selector.selectedIndex].value;				//finds the value of the option inside the select tag
   	var total = quantity*price;   											//total price of the item	
    
    //VALIDATION//
    //Checks if the quantity is valid//
	quantityValidator();
	
	//Check if item is selected..//
	if(selected_Item.includes("none-selected")){
		alert("Item not selected, please select an item before adding it to the cart");
		return;
	}
	//Check if the item is already in the cart or not and alert the user if it is present.//
	var check =duplicateCartItemCheck(selected_Item);
	if(check == true)
		return;

    //INSERTING INTO THE INVOICE//
    var deleteButton = $("<td></td>").append("<button class='delete_FromCart_btn' onclick='deleteCartItem(this)' type='button'> Delete </button>");
    var tableRow = $("<tr class ='itemDetails'></tr>").append( 
    	$("<td></td>").text(serialNum),
    	$("<td class='cartItem'></td>").text(selected_Item), 
    	$("<td></td>").text(price),
    	$("<td></td>").text(quantity), 
    	$("<td class='totalItemprice'></td>").text(total),
    	deleteButton);

    $(".cartItemsTB").append(tableRow);													// appends to the invoice list

    serialNum++;																		//updates the serial number

    //shows the total price of all the items in the invoice//
    totalPrice();
}  
function quantityValidator(){															//function checks if the quantity fits the requirements 1<=x<=5
	var quantity = document.getElementById("quantity_input").value;
	if(quantity>=1 && quantity<=5)	{
	}
	else{
		alert("Incorrect value entered");
		}	
}
function totalPrice(){																	//function updates the total price of the whole list and displays it
	var totalPrice_AllItems= 0.0
	var cartItemPriceArray = document.getElementsByClassName("totalItemprice") 			// holds the array of all price
	for(var i = 0; i< cartItemPriceArray.length; ++i){									//for loop to get the total price of all items
		totalPrice_AllItems += parseFloat(cartItemPriceArray[i].innerText);
	}
	document.getElementById("totalPrice").value = " "+totalPrice_AllItems+" SAR"; 		//displays the total price of all items
}
function duplicateCartItemCheck(selected_Item){											//function to check if a duplicate item is being added or not
	var cartItemName = document.getElementsByClassName("cartItem") 						//gets an array of all cart items
	for(var i=0; i< cartItemName.length; ++i){											//loop to check the item if it is already present in the cart items or not
		if(cartItemName[i].innerText.includes(selected_Item)){
			alert("You cannot add the same item twice to your cart. If you wish to change the quantity remove the item and add again")
			return true;}
	}
	return false;																		//returns false if the item is not present, therefore, can be added
}	