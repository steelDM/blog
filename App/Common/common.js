
extend(global,{
	clip: function(s,len,suffix){
		if(!s || !len) { return ''; }
		var a = 0;
		var i = 0;
		var temp = '';

		if(len > s.length){return s};

		for (i=0;i<s.length;i++)
	    {
	        if (s.charCodeAt(i)>255) a+=2;
	    	else a++;
	        
	        if(a > len) { return temp+(suffix||'');}
			temp += s.charAt(i);
	    }
	    return s;
	},
	oMap: function(obj, fn, thisObj) {
			var ret = {};
			for (var key in obj) {
				ret[key] = fn.call(thisObj, obj[key], key, obj);
			}
			return ret;
	},
	objToAry:function (obj) {
		var ret = [];
		for (var key in obj) {
			if (obj.hasOwnProperty(key)) {
				ret.push(obj[key]);
			}
		}
		return ret;
	}
});
