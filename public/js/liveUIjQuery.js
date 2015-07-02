var daysArray = [{}];
$(".hotel-button").on("click", function(){
	var day = daysArray[0];
	if (!day.hotel)
	 day.hotel = $(this).prev().val();
	console.log(daysArray);
})





$(".hotel-button").on("click", function(){
	var contents = '<div class="itinerary-item"> <span class="title">'+$(this).prev().val()+'</span> <button class="btn btn-xs btn-danger remove btn-circle hotel-delete">x</button> </div>';
		console.log("firstChild: ",$(".hotel-list ul").firstChild)
		if (!daysArray[0].hotel){
			$(".hotel-list ul").append("<li>"+contents+"</li>")
		} else {
			$(".hotel-list ul").closest("<li>").remove();
			$(".hotel-list ul").append("<li>"+contents+"</li>")
		}
})


$(".restaurant-button").on("click", function(){
		var contents = '<div class="itinerary-item"> <span class="title">'+$(this).prev().val()+'</span> <button class="btn btn-xs btn-danger remove btn-circle pull-right restaurant-delete">x</button> </div>';
	$(".restaurant-list").append("<li>"+contents+"</li>");
})

$(".thingstodo-button").on("click", function(){
		var contents = '<div class="itinerary-item"> <span class="title">'+$(this).prev().val()+'</span> <button class="btn btn-xs btn-danger remove btn-circle pull-right thingstodo-delete">x</button> </div>';
	$(".thingstodo-list").append("<li>"+contents+"</li>");
})







$(".hotel-list").delegate(".hotel-delete", "click", function(){
	$(this).closest($("li")).remove();
	$(this).remove();
})

$(".restaurant-list").delegate(".restaurant-delete", "click", function(){
	$(this).closest($("li")).remove();
	$(this).remove();
})

$(".thingstodo-list").delegate(".thingstodo-delete", "click", function(){
	$(this).closest($("li")).remove();
	$(this).remove();
})





var count = 0;
$("#add-day").on("click", function(){
	count ++
	console.log($(this).siblings()[0])
	var selector = ".current-" + count;
	var classSet = "current-" + Number(count + 1);
	$(selector).after('<button class="btn btn-circle day-btn '+classSet+'">'+Number(count+1)+'</button>')
})
