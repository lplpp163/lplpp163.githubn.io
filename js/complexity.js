'use strict';

var complexityCount = 1;

var complexityGrowers = ['if','for','while','case','catch','\\?','\\|\\|'];

function complexityEvaluator(jsCode){

	var complexityCount = 1

	console.log(jsCode);

	for(var i=0;i<complexityGrowers.length; i++){
		var regexp = new RegExp(complexityGrowers[i],"gi");
		console.log(complexityGrowers[i]);
	    var key = jsCode.match(regexp);
	    console.log(key);
	    complexityCount += (key?key.length:0);
	}

	console.log('Complexity:', complexityCount);

    return complexityCount;

}