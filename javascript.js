	function GbpPkr() {
		var myRate = document.getElementById('rate').value;	
		var myGBPAmount = document.getElementById('GBPAmount').value;
		var myIntmyGBPAmount = parseInt(myGBPAmount);
		var myFee = parseInt(document.getElementById('fee').value);
		var PKR = document.getElementById('PKR');	
		var myPKR = myRate * myGBPAmount;
		var PKRRound = myPKR.toFixed(0);
		PKR.value = PKRRound;
		var myTotal ="&pound;"+(myFee + myIntmyGBPAmount); 
		document.getElementById('total').innerHTML = myTotal;
	}
	function PkrGbp() {
		var myRate = document.getElementById('rate').value;	
		var myPKRAmount = document.getElementById('PKRAmount').value;
        	var myFees = document.getElementById('fees').value;
		var GBP = document.getElementById('GBP');	
		var myGBP = myPKRAmount / myRate;
		var GBPRound = myGBP.toFixed(2);
		GBP.value = GBPRound;
        	var amount = parseInt(GBPRound);
        	var fee = parseInt(myFees);
        	var myTotal ="&pound;"+(fee + amount); 
		document.getElementById('total1').innerHTML = myTotal;
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
