var fs = require("fs");
var text = fs.readFileSync("./list.txt", "utf-8");
array = text.split('\n');
array.length = array.length - 1
var new_array = []
for (var i = 0; i <= array.length - 1; i++) {
	var num = array[i].replace(/[^0-9]/g,'');
	new_array.push({num:num, list:array[i]})
};

sort();
for (var i = 0; i <= new_array.length-1; i++) {
	console.log(new_array[i].list)
}

function sort() {
	new_array.sort(function(a,b){return a.num - b.num})
}