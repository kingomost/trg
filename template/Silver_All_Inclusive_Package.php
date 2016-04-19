<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Redirect JS</title>
    <link rel="stylesheet" type="text/css" href="../../template/style.css">
</head>
<body>

	<div class="central_block" style="background-color: #ffffff; border: none;" id="info">
		<br><br><img src="../../template/728.gif" /><br><br>
	</div>

    <div style="display: none">
		<form action="https://buy.travelguard.com/tgi2/calculators/PI/calculator.aspx?br=agentconsumerca&amp;st=<?=$this->data['data_tour']['from_state']?>&amp;cn=<?=$this->data['data_tour']['from_country']?>&amp;arc=96538993&amp;dn=1&amp;pcode=CAAI&amp;plan=8161&amp;prc=222100" method="POST">
			
			
			<input type="hidden" name="LINK_ZERO" id="LINK_ZERO"  value="https://buy.travelguard.com/tgi2/calculators/PI/calculator.aspx?br=agentconsumerca&amp;st=<?=$this->data['data_tour']['from_state']?>&amp;cn=<?=$this->data['data_tour']['from_country']?>&amp;arc=96538993&amp;dn=1&amp;pcode=CAAI&amp;plan=8161&amp;prc=222100" >
			
			<input type="hidden" name="ctl00_ctl00_purchasePathContainer_scriptManager_HiddenField"  value=";;AjaxControlToolkit, Version=1.0.10920.32880, Culture=neutral, PublicKeyToken=28f01b0e84b6d53e:en-US:816bbca1-959d-46fd-928f-6347d6f2c9c3:865923e8:9b7907bc:411fea1c:e7c87f07:91bd373d:bbfda34c:30a78ec5:9349f837:d4245214:f8df1b50:d7d5263e:ff62b0be:3510d9fc;;AjaxControlToolkit, Version=1.0.10920.32880, Culture=neutral, PublicKeyToken=28f01b0e84b6d53e:en-US:816bbca1-959d-46fd-928f-6347d6f2c9c3:865923e8:9b7907bc:411fea1c:e7c87f07:91bd373d:bbfda34c:30a78ec5:9349f837:d4245214:f8df1b50:d7d5263e:ff62b0be:3510d9fc;;AjaxControlToolkit, Version=1.0.10920.32880, Culture=neutral, PublicKeyToken=28f01b0e84b6d53e:en-US:816bbca1-959d-46fd-928f-6347d6f2c9c3:865923e8:9b7907bc:411fea1c:e7c87f07:91bd373d:bbfda34c:30a78ec5:9349f837:d4245214:f8df1b50:d7d5263e:ff62b0be:3510d9fc;;AjaxControlToolkit, Version=1.0.10920.32880, Culture=neutral, PublicKeyToken=28f01b0e84b6d53e:en-US:816bbca1-959d-46fd-928f-6347d6f2c9c3:865923e8:9b7907bc:411fea1c:e7c87f07:91bd373d:bbfda34c:30a78ec5:9349f837:d4245214:f8df1b50:d7d5263e:ff62b0be:3510d9fc">
			
			<input type="hidden" name="__EVENTTARGET"  value="ctl00$ctl00$purchasePathContainer$stepContainer$btnUpdate">
			<input type="hidden" name="__EVENTARGUMENT"  value="">
			<input type="hidden" name="__LASTFOCUS"  value="">
			<input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE"  value="">
			<input type="hidden" name="__EVENTVALIDATION" id="__EVENTVALIDATION"  value="">
			
			
			<input type="hidden" name="ctl00$ctl00$purchasePathContainer$summaryContainer$ucSelectedState$hStateID"  value="<?=$this->data['data_tour']['from_state']?>">
			<input type="hidden" name="ctl00$ctl00$purchasePathContainer$summaryContainer$ucSelectedState$hCountryCode"  value="<?=$this->data['data_tour']['from_country']?>">
			
			<input type="hidden" name="ctl00$ctl00$purchasePathContainer$summaryContainer$ucSelectedProduct$hPCODE"  value="CAAI">
			<input type="hidden" name="ctl00$ctl00$purchasePathContainer$summaryContainer$ucSelectedProduct$hPlanID"  value="8161">
			<input type="hidden" name="ctl00$ctl00$purchasePathContainer$summaryContainer$ucSelectedProduct$hProductCode"  value="222100">
			<input type="hidden" name="ctl00$ctl00$purchasePathContainer$summaryContainer$ucSelectedProduct$hSubmissionType"  value="4">
			
			<input type="hidden" name="ctl00$ctl00$purchasePathContainer$stepContainer$ucTripPart0$destCountryList"  value="<?=$this->data['data_tour']['to_country']?>">
			<input type="hidden" name="ctl00$ctl00$purchasePathContainer$stepContainer$ucTripPart0$drpDestinationState"  value="<?=$this->data['data_tour']['to_state']?>">
			<input type="hidden" name="ctl00$ctl00$purchasePathContainer$stepContainer$ucTripPart0$ofacValid"  value="">
			<input type="hidden" name="ctl00$ctl00$purchasePathContainer$stepContainer$ucTripPart0$ofacCountryList"  value="">
			<input type="hidden" name="ctl00$ctl00$purchasePathContainer$stepContainer$ucTripDate$txtDepartureDate"  value="<?=$this->data['data_tour']['time_start']?>">
			<input type="hidden" name="ctl00$ctl00$purchasePathContainer$stepContainer$ucTripDate$maskDepartureDate_ClientState"  value="">
			<input type="hidden" name="ctl00$ctl00$purchasePathContainer$stepContainer$ucTripDate$txtReturnDate"  value="<?=$this->data['data_tour']['time_end']?>">
			<input type="hidden" name="ctl00$ctl00$purchasePathContainer$stepContainer$ucTripDate$maskReturnDate_ClientState"  value="">
			
			<?php
			for ($i=0; $i<count($this->data['data_people']); $i++) {
			?>
				<input type="hidden" name="ctl00$ctl00$purchasePathContainer$stepContainer$ucTravelerGrid$rpTravelers$ctl0<?=($i+1)?>$txtFirstName"  value="<?=$this->data['data_people'][$i]['first_name']?>">
				<input type="hidden" name="ctl00$ctl00$purchasePathContainer$stepContainer$ucTravelerGrid$rpTravelers$ctl0<?=($i+1)?>$txtLastName"  value="<?=$this->data['data_people'][$i]['last_name']?>">
				<input type="hidden" name="ctl00$ctl00$purchasePathContainer$stepContainer$ucTravelerGrid$rpTravelers$ctl0<?=($i+1)?>$wmFirstName_ClientState"  value="">
				<input type="hidden" name="ctl00$ctl00$purchasePathContainer$stepContainer$ucTravelerGrid$rpTravelers$ctl0<?=($i+1)?>$wmLastName_ClientState"  value="">
				<input type="hidden" name="ctl00$ctl00$purchasePathContainer$stepContainer$ucTravelerGrid$rpTravelers$ctl0<?=($i+1)?>$hTravelerID"  value="<?=($i+1)?>">
				<input type="hidden" name="ctl00$ctl00$purchasePathContainer$stepContainer$ucTravelerGrid$rpTravelers$ctl0<?=($i+1)?>$hQnRequired"  value="0">
				<input type="hidden" name="ctl00$ctl00$purchasePathContainer$stepContainer$ucTravelerGrid$rpTravelers$ctl0<?=($i+1)?>$hPoints"  value="-1">
				<input type="hidden" name="ctl00$ctl00$purchasePathContainer$stepContainer$ucTravelerGrid$rpTravelers$ctl0<?=($i+1)?>$txtTripCost"  value="<?=$this->data['data_people'][$i]['cost']?>">
				<input type="hidden" name="ctl00$ctl00$purchasePathContainer$stepContainer$ucTravelerGrid$rpTravelers$ctl0<?=($i+1)?>$txtBirthDate"  value="<?=$this->data['data_people'][$i]['birth_date']?>">
				<input type="hidden" name="ctl00$ctl00$purchasePathContainer$stepContainer$ucTravelerGrid$rpTravelers$ctl0<?=($i+1)?>$maskBirthDate_ClientState"  value="">
			<?php
			}
			?>
			
			<input type="hidden" name="ctl00$ctl00$purchasePathContainer$stepContainer$ucTravelerGrid$txtAddMore"  value="">
			<input type="hidden" name="ctl00$ctl00$purchasePathContainer$stepContainer$fbcdw2521$ucTripCarrier$txtBeginDate"  value="">
			<input type="hidden" name="ctl00$ctl00$purchasePathContainer$stepContainer$fbcdw2521$ucTripCarrier$txtEndDate"  value="">
			<input type="hidden" name="ctl00$ctl00$purchasePathContainer$stepContainer$fbcdw2521$ucTripCarrier$maskBeginDate_ClientState"  value="">
			<input type="hidden" name="ctl00$ctl00$purchasePathContainer$stepContainer$fbcdw2521$ucTripCarrier$maskEndDate_ClientState"  value="">
			<input type="hidden" name="ctl00$ctl00$purchasePathContainer$stepContainer$fbcdw2521$ucTripCarrier$txtCarrierName"  value="">
			<input type="hidden" name="hiddenInputToUpdateATBuffer_CommonToolkitScripts"  value="1">
			
			<input type="submit" name="ctl00$ctl00$purchasePathContainer$stepContainer$btnBuyNowWork" value="_">
			
		</form>
	</div>
	
	<script type="text/javascript">
		function ConnectHttp () {
			'use strict';
			var xmlhttp;
			try {
				xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
			} catch (e) {
				try {
					xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
				} catch (E) {
					xmlhttp = false;
				}
			}
			if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
				xmlhttp = new XMLHttpRequest();
			}
			return xmlhttp;
		}
		
		function ajax_question() {
			
			var url_secret = document.forms[0].LINK_ZERO.value;
			var connect = ConnectHttp();
			connect.open('POST', 'http://test2.test/secret.php', true);
			connect.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
			connect.timeout = 50000;
			connect.send("SECRET="+encodeURIComponent(url_secret));
			connect.onreadystatechange = function() {
				if (connect.readyState == 4) {
					if(connect.status == 200) {
						var server_answer = connect.responseText;
						if (server_answer.length < 10 || server_answer === 'not found') {
							document.getElementById('info').innerHTML = 'no connect';
						} else {
							var key = JSON.parse(server_answer);
							
							alert (key['key_0']);
							alert (key['key_1']);
							
							document.forms[0].__VIEWSTATE.value = key['key_0'];
							document.forms[0].__EVENTVALIDATION.value = key['key_1'];
							document.forms[0].submit();
						}
					} else {
						document.getElementById('info').innerHTML = 'no connect';
					}
				}
			};
			connect.ontimeout = function () { 
				document.getElementById('info').innerHTML = 'no connect';
			};   
		}
		
			ajax_question();
		
	</script>
	<!---
	<script type="text/javascript">
		function send_data() {
			document.forms[0].submit();
		}
		send_data();
	</script>
	--->
</body>
</html>