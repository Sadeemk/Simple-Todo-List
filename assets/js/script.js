// Check of specific todos by clicking
$("li").click(function(){
	$(this).toggleClass("completed");
});


//click on x to delete a todo item
$("span").click(function(event){
	$(this).parent().fadeOut(1000, function(){
		$(this).remove();
	});
	event.stopPropagation();
});