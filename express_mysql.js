var express=require('express');//引入express模块
var mysql=require('mysql');//引入MySQL模块
var app=express();//创建express实例
var connection=mysql.createConnection({
	  //主机地址 （默认：localhost）
  host     : 'localhost',
  //用户名
  user     : 'root',
  //密码
  password : '123456',
  //在mysql中创建的数据库名
  database : 'nodejs'
	//uesrConnectionPooling:true
});
//连接
connection.connect(function(err){
	if(err)
	{
	   console.error("连接失败"+err.stack);
	   return;
	}
	console.log('连接成功id'+connection.threadId);
});
app.get('/',function(req,res)
{
	var selectsql="SELECT * FROM user_table";
	connection.query(selectsql,function(err,results)
	{
	    if(err)
	    {
	       console.log("查询失败"+err);
	    }
	    res.send(results);
	})
});
app.listen(8888,function(){
	console.log("Server runing at 8888 port");
})