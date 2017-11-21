(function(w, d, s, uri, fn) {
	w[fn] = w[fn] || function() {
		var c = {};
		c.uri = arguments[0];
		c.trackId = arguments[1];
		c.opt = arguments[2];
		(w[fn].l = w[fn].l || []).push(c);
	};
	var o = d.createElement(s);
	var p = d.getElementsByTagName(s)[0];
	o.async = 1;
	o.src = uri;
	p.parentNode.insertBefore(o, p);
})(window, document, 'script',
		'http://58.181.39.182/eum-client/netfunnel_eum.js', 'ne');
ne('http://192.168.100.172:8080/ne.nfl', 'app01', {
	xhr : {
		use : true
	},
	onerror : true,
	E2E : {
		use : true,
		n$apm : '${n$apm}'
	},
	session : {
		type : 'cookie',
		value : 'JSESSIONID'
	}
});
