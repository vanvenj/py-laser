//隐藏按钮
$("#m0").hide();
$("#m1").hide();
$("#template").hide();
//init按钮执行ajax
$("#init").click(function(){
	$.ajax({
		url: "/init",
		type: "GET",

		success: function(data, textStatus, jqXHR){
			//console.log(JSON.parse(data)['result']);
			//console.log(textStatus);
			//console.log(jqXHR);
			res=JSON.parse(data)['result'];
			if (res>0){
				$("#status").text("Init success\n" + $("#status").val());
				$("#init").attr('class', 'btn btn-success');
				$("#m0").show();
			}
			else{
				$("#m0").hide();
				$("#status").text("Init Failed\n" + $("#status").val());
				$("#init").attr('class', 'btn btn-danger');
			}
		},
		
		error:function(jqXHR, textStatus, errorThrown) {
			console.log("request failed " + textStatus);
		}

	});
});
//点击M0
$("#m0").click(function(){
	$("#m0").attr('class', 'btn btn-success');
	$("#status").text("M0 success\n" + $("#status").val());
    $("#m1").show();
});
//点击M1
$("#m1").click(function(){
	$("#m1").attr('class', 'btn btn-success');
	var text=($("#text").val());
	if (text == '')
	{
	    $("#status").text("打印内容不能为空！\n" + $("#status").val());
	}
	else{
	    $("#status").text("打印内容:" + text + '\n' + $("#status").val());
	}
});
//选择模版
$("#choosetemplate").change(function(){
	var choice = $(this).val();
	var path = './static/pic/' + choice + '.png';
	$("#status").text("选择模版" + choice + "\n" + $("#status").val());
	//alert(path);
	//alert($(this).text());
	$("#template").attr('src',path);
	$("#template").show();
});


