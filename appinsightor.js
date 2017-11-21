
var ip_list = [ '183.101.160.0', '119.17.104.0', '221.140.232.0', '114.29.32.0', '110.35.32.0', '103.39.36.0', '112.140.152.0', '103.28.60.0', '110.13.214.0', '59.20.208.0', '103.11.248.0', '112.133.63.0' ];
var randIp = ip_list[ getRandomInt(0, ip_list.length) ];

var android01 = "os: 'android', osg: 'android', wb: 'android browser', wbv: '4.0', wbg: 'other', le: 'webkit', leg: 'webkit', arch: '32', dd: 'Nexus 5', ddg: 'mobile'";

var cases = 8;
var randIdx = getRandomInt(0, cases);

var osg_list = ['linux', 'linux', 'windows', 'windows', 'macos', 'ios', 'android', 'other' ];
var wbg_list = ['firefox', 'msie', 'edge', 'safari', 'safari', 'chrome', 'other' ];
var ddg_list = ['pc', 'pc', 'pc', 'pc', 'pc', 'mobile', 'tablet' ];

var randOsg = osg_list[ randIdx ];
var randWbg = wbg_list[ randIdx ];
var randDdg = ddg_list[ randIdx ];

//console.log(randOsg);


/* with noXHR.js
(function(w,d,s,uri,fn){  w[fn] = w[fn] || function(){
		var c = {}; c.uri = arguments[0];
		c.trackId = arguments[1];
		c.opt = arguments[2];
		(w[fn].l=w[fn].l||[]).push(c);
	};
	var o = d.createElement(s); var p = d.getElementsByTagName(s)[0];
	o.async = 1; o.src = uri; p.parentNode.insertBefore(o,p);
	})(window,document,"script","/app24/resources/js/netfunnel_eum.js","ne");
	ne("http://eum.aimtog.co.kr/ne.nfl","app01", { session:{type:'cookie',value:'JSESSIONID'}, debug_ip : randIp, debugAgentInfo: {
			osg: randOsg, wbg : randWbg, ddg : randDdg
		} } );
*/


//console.log(document.location);
//Location {href: "http://localhost:8080/app24/sts2/salesreps", ancestorOrigins: DOMStringList, origin: "http://localhost:8080", replace: function, assign: function…}

/*
 * 2017.07.01 xhr
 */
(function(w,d,s,uri,fn){
	w[fn] = w[fn] || function(){ var c = {}; c.uri = arguments[0]; c.trackId = arguments[1]; c.opt = arguments[2]; (w[fn].l=w[fn].l||[]).push(c); }; var o = d.createElement(s); var p = d.getElementsByTagName(s)[0]; o.async = 1; o.src = uri; p.parentNode.insertBefore(o,p);
})(window,document,'script','http://58.181.39.182/eum-client/appinsightor.js','ne');
ne('http://192.168.100.172:8080/ne.nfl','app01',{
	xhr: {use: true},
	onerror:true,
	E2E: {
		use: true,
		n$apm: '${n$apm}'
	},
	session:{type:'cookie',value:'JSESSIONID'}, 
	debug_ip : randIp, 
	debugAgentInfo: {osg: randOsg, wbg : randWbg, ddg : randDdg}
});
