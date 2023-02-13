/* Make a default value */ 
function run() {
	var ss = document.getElementById('borrowInput').value="100000";
	var mm = document.getElementById('inputMonth').value="1";
 }
 function increase() {
	 document.getElementById('sliderOne').step="50000";
	 document.getElementById('borrowInput').step="50000";
 
	 var oldSave = document.getElementById('borrowInput').value;
	 var save = parseInt(oldSave, 10);
	 /* Don't increase if value is greater than 2 million */
	 if (save < 2000000) {
	 save = save + 50000;
	 document.getElementById('borrowInput').value=(save);
	 moveSlider();
	 }
	 calcLoan();
 }
 
 function decrease() {
	 document.getElementById('sliderOne').step="50000";
	 document.getElementById('borrowInput').step="50000";
 
	 var oldSave = document.getElementById('borrowInput').value;
	 var save = parseInt(oldSave, 10);
	 /* If its less than 100k don't reduce*/ if (save > 100000) {
		 save = save - 50000;
	 document.getElementById('borrowInput').value=(save);
	 moveSlider();
	 }
	 calcLoan();
 }
 
 function moveTextfield () {
	 document.getElementById('sliderOne').step="50000";
	 document.getElementById('borrowInput').step="50000";
	 
	 /* Get slider value and put it in the input value*/
	 var sliderValue = document.getElementById('sliderOne').value;
 
	 if (sliderValue > 100000 && sliderValue < 2000000) {
	 var inputValue = document.getElementById('borrowInput').value=(sliderValue);
 
	 /* Get input value and put it in slider value */
	 inputValue = document.getElementById('borrowInput').value;
	 sliderValue = document.getElementById('sliderOne').value=(inputValue);
	 calcLoan();
	 }
	 /* When button clicked */
 }
 
 function moveSlider() {
	 document.getElementById('sliderOne').step="50000";
	 document.getElementById('borrowInput').step="50000";
 
	 /* */
	 var inputValue = document.getElementById('borrowInput').value;
	 if (inputValue > 100000 && inputValue < 2000000) {
	 var sliderValue = document.getElementById('sliderOne').value=(inputValue);
	 calcLoan();
 }}
 
 /* Calculate Month */
 /* When you slide on this the value in the text area will change */
	 function monthSlide() {
		 document.getElementById('sliderTwo').step="1";
		 document.getElementById('inputMonth').step="1";
		 
		 /* Get value and update the text area */
		 var save = document.getElementById('sliderTwo').value;
		 var show = document.getElementById('inputMonth').value=(save);
		 var shaw = document.getElementById('inputMonth').value=(save);
		 calcLoan();
	 }
 
	 function moveMonthSlider() {
		 document.getElementById('sliderTwo').step="1";
		 document.getElementById('inputMonth').step="1";
 
		 var save = document.getElementById('inputMonth').value;
		 var show = document.getElementById('sliderTwo').value=(save);
		 calcLoan();
	 }
 
	 function reduceMonth () {
		 document.getElementById('sliderTwo').step="1";
		 document.getElementById('inputMonth').step="1";
 
		 var oldSave = document.getElementById('inputMonth').value;
		 var save = parseInt(oldSave, 10);
	 /* Don't reduce if value is lesser than  1 month */
	 if (save > 1) {
	 save = save - 1;
	 document.getElementById('inputMonth').value=(save);
	 
	/* move slider on increase*/
	moveMonthSlider();
	 }
	 calcLoan();
	 }
 
	 function increaseMonth () {
		 document.getElementById('sliderTwo').step="1";
		 document.getElementById('inputMonth').step="1";
		 
		 var oldSave = document.getElementById('inputMonth').value;
		 var save = parseInt(oldSave, 10);
	 /* Don't reduce if value is lesser than  1 month */
	 if (save < 60) {
	 save = save + 1;
	 document.getElementById('inputMonth').value=(save);
	/* moveSlider */
	moveMonthSlider();
	 }
	 /* */
	 calcLoan();
	 }
 
	 /* Calculate our value  */
	 function calcLoan() {
		 /* show total 7 percent */ 
		 /* Input * (no of month(inputMonth) * 7/100 */
		 var inputResultValue = parseInt(document.getElementById('borrowInput').value, 10);
		 var monthResultValue = parseInt(document.getElementById('inputMonth').value, 10);
		 /* 7% calculation */
		 var sevenPercent = monthResultValue * 0.07;
		 /* 10% calculation) */
		 var tenPercent = monthResultValue * 0.10;
		 /* */
		 var feeCharges1 = sevenPercent * inputResultValue;
		 var feeCharges2 = tenPercent * inputResultValue;
 
		 /* Rounding fee charges */
		 feeCharges1 = Math.round(feeCharges1);
		 feeCharges2 = Math.round(feeCharges2);
 
		 /* show the 7% range */
		 document.getElementById('interestFees').innerHTML=('&#8358;' + feeCharges1 + ' - ' + '&#8358;' + feeCharges2 );
		 
		 /* GET THE TOTAL AMOUNT OF LOAN */
		 var totalResult1 = inputResultValue + feeCharges1;
		 var totalResult2 = inputResultValue + feeCharges2;
		 /* Half fee */
		 var halfTotal1 = (totalResult1 / 2);
		 var halfTotal2 = (totalResult2 / 2);
		 /* show the total repayment values */
		 document.getElementById('totalPayments').innerHTML=('&#8358;' + totalResult1 + ' - ' + '&#8358;' + totalResult2);
		 document.getElementById('monthlyPayments').innerHTML=('&#8358;' + halfTotal1 + ' - ' + '&#8358;' + halfTotal2);
 
	 }
	 /* */
 