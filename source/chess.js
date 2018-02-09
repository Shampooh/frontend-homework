'use strict';

const chess = num => {
	var n = Number(num);  
	if (n == 1) return null;
	var res = '';
	var baseStr = "";
	for(var cell = 0; cell <= n; cell++) baseStr +=  (cell % 2) ? " " : "*";
	for(var row = 0; row <n; row++) res += baseStr.substring(row % 2,n + row % 2) +"\n";
	return res;
};
 
