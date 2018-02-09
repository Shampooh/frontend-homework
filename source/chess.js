'use strict';

const isNumeric = n => !isNaN(parseFloat(n)) && isFinite(n);

const isPosInt = n => n | 0 == n && n > 1;

const chess = num => {
	if (!isNumeric(num) || !isPosInt(num)) {
		return null; 
	}
	let res = "";
	const baseStr = ("* ").repeat(num / 2 + 1)
	for(let row = 0; row < num; row++) { 
		res += baseStr.substring(row % 2, +num + row % 2) +"\n"; 
	}
	return res;
};
 
