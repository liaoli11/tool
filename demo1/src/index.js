//导入api文件
var api = require('./api.js');
//导出函数
window.onload = function (){
	var result = api();
	console.log('result==>',result)
}