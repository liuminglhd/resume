// 开发项目
var n = null;
$('#center').show().siblings('div').hide();
$('#center').css('margin','80px 0 0 138.6px');
$('#centerCon').show();
$('#center').on('mouseenter',function(){
	$(this).css('margin','50px 0 0 10px').siblings('div').fadeIn();
});

$('.project .hexs .hex').click(function(){
	n = $(this).index();
	$('.content').eq(n).show().siblings('.content').hide();
	
	$('.content').eq(n).on('mouseleave',function(){
		$('#center').css('margin','80px 0 0 138.6px').siblings('div').hide();
		$('.content').hide();
		$('#centerCon').show();
	});
});