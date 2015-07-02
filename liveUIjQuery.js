$(".btn-primary").on("click", function(){
	$(".hotel-list").append($(this).sibling("select").child().val());
})


