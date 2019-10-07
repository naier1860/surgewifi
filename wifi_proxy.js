var wifiname = $network.wifi.ssid;
var proxywifi = "ASUS-CK";
if (wifiname == proxywifi){
	$surge.setOutboundMode("direct");
	//$notification.post("Meeta_Remind","您目前处于WIFI-Proxy","Surge已自动变为直连模式");
	
}
else{
	$surge.setOutboundMode("rule");
	//$notification.post("Meeta_Remind","Surge已自动变为规则模式","");
}
$done();

