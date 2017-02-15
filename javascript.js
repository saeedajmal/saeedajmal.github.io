		function calculate() {
		var myRate = document.getElementById('rate').value;	
		var myGBPamount = document.getElementById('GBPamount').value;
		var myBox6 = parseInt(myGBPamount);
		var myBox5 = parseInt(document.getElementById('box5').value);
		var PKR = document.getElementById('PKR');	
		var myPKR = myRate * myGBPamount;
		var PKRRound = Math.round(myPKR);
		PKR.value = PKRRound;
		var total ="&pound;"+(myBox5 + myBox6); 
		document.getElementById('total').innerHTML = total;
	}
	function calculate1() {
		var myBox3 = document.getElementById('rate').value;	
		var myBox4 = document.getElementById('box4').value;
        var myBox5 = document.getElementById('box5').value;
		var GBP = document.getElementById('GBP');	
		var myGBP = myBox4 / myBox3;
		var GBPRound = Math.round(myGBP);
		GBP.value = GBPRound;
        var amount = parseInt(GBPRound);
        var fee = parseInt(myBox5);
        var total ="&pound;"+(fee + amount); 
		document.getElementById('total1').innerHTML = total;
	}
	function myReset() {
		document.getElementById("reset").reset();
		document.getElementById("total").reset();
	}
	window.onload=function(){
		var input=document.getElementById("rate");
			if(localStorage.getItem("rate")){
				input.value=localStorage.getItem("rate");
			}
		input.oninput=function(){
		localStorage.setItem("rate",input.value);
		};
	};
