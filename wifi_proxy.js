var wifiname = $network.wifi.ssid;
var proxywifi = ["ASUS-CK","ASUS-CK-5G"];
for (var i = 0; i < proxywifi.length; i++) {
	if (wifiname==proxywifi[i]){
		$surge.setOutboundMode("direct");
		
		setTimeout(function(){$notification.post("Meeta_Remind","SSID:"+wifiname,"直连模式");}, 3000);
		break;
		
	};
	if (i==proxywifi.length-1){
		$surge.setOutboundMode("rule");
		
		setTimeout(function(){$notification.post("Meeta_Remind","规则模式","");}, 3000);
	
	}
	
	
};
$done();
