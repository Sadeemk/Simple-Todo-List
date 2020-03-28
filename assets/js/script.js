// Check off completed todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//click on x to delete a todo item
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(1000, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//get user input from textbox to add to todo list
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		// grab new todo text from input
		let todoText = $(this).val();
		$(this).val("");

		//create new li and add to ul
		$("ul").append("<li><span>X </span>" + todoText + "</li>");
	}
});