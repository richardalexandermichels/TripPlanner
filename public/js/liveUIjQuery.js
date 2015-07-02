$(".btn-primary").on("click", function(){
	var contents = $(this).prev().val();
	//console.log("some content !",$(this).prev().val())
	$(".hotel-list ul").append("<li>"+contents+"</li>")
})


// <li>"+
// 		$(this).sibling("select").child().val()+"</li>