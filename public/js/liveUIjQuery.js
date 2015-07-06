$(document).ready(function(){

var daysArray = [{hotel:'',
				  rest:[],
				  thing:[],
				  markers:[]
				}];



var current = 1;
console.log("all restaruants",all_restaurants);

$(".hotel-button").on("click", function(){
	var contents = '<div class="itinerary-item"> <span class="title">'+$(this).prev().val()+'</span><button class="btn btn-xs btn-danger remove btn-circle">x</button></div>';
	//console.log("firstChild: ",$(".hotel-list ul").firstChild)
	daysArray[current-1].hotel=contents;
	//console.log(daysArray[current-1]);
	
	if($('#hotels').children().length){

		$("#hotels").children().remove()
	}
	$("#hotels").append(contents);	
	//var name = $(this).prev().val()
	//console.log('THE NAME I WANT',name)
})


$(".restaurant-button").on("click", function(){
	var contents = '<div class="itinerary-item"> <span class="title">'+$(this).prev().val()+'</span><button class="btn btn-xs btn-danger remove btn-circle pull-right">x</button></div>';
	daysArray[current-1].rest.push(contents);
	//console.log(daysArray[current-1]);
	$("#rests").append(contents);	
	var name = $(this).prev().val()
	//console.log('THE NAME I WANT',name)
	drawLocation ("/images/restaurant.png", all_restaurants, name)
	console.log("all restaruants",all_restaurants);
	//console.log(daysArray[current-1].markers)
})

$(".thingstodo-button").on("click", function(){
	var contents = '<div class="itinerary-item"> <span class="title">'+$(this).prev().val()+'</span> <button class="btn btn-xs btn-danger remove btn-circle pull-right">x</button></div>';
	daysArray[current-1].thing.push(contents);
	//console.log(daysArray[current-1]);
	var name = $(this).prev().val()
	$("#things").append(contents);
	drawLocation ("/images/star-3.png", all_things_to_do, name)
})







$(".panel-body").delegate(".remove", "click", function(){
	//console.log(daysArray[current-1].rest[0])
	//console.log($(this).closest('div')[0].outerHTML)
	//console.log("FOUND AT INDEX",daysArray[current-1].rest.indexOf(toFind))
	console.log($(this).parents()[2].className)
	if($(this).parents()[2].className ===  "restaurant-list"){
		var restToFind = $(this).closest('div')[0].outerHTML
		var restToFindIndex = daysArray[current-1].rest.indexOf(restToFind)
		daysArray[current-1].rest.splice(restToFindIndex, 1);
	}else if($(this).parents()[2].className ===  "thingstodo-list"){
		var thingToFind = $(this).closest('div')[0].outerHTML
		var thingToFindIndex = daysArray[current-1].thing.indexOf(thingToFind)
		daysArray[current-1].thing.splice(thingToFindIndex, 1);
	}
	

	$(this).closest($("div")).remove();
	$(this).remove();
	
})






$("#add-day").on("click", function(){
	daysArray.push({hotel:[],
				  rest:[],
				  thing:[],
				  markers:[]
				});
	$('<button class="btn btn-circle day-btn">'+(parseInt($(this).prev().text())+1)+'</button>').insertBefore($(this))
	//$(selector).after('<button class="btn btn-circle day-btn '+classSet+'">'+Number(count+1)+'</button>')
})


//switching days
//iterate throught days array key arrays and populate day



$('.day-buttons').delegate('.day-btn','click',function(){
	$('.current-day').removeClass('current-day');
	$(this).addClass("current-day");
	$(".itinerary-item").remove();
	current = $(".current-day").text();
	$('#hotels').append(daysArray[current-1].hotel)
	for(var i = 0; i < daysArray[current-1].rest.length; i++){
		$(".restaurant-list .list-group").append(daysArray[current-1].rest[i]);
	}
	for(var i = 0; i < daysArray[current-1].thing.length; i++){
		$(".thingstodo-list .list-group").append(daysArray[current-1].thing[i]);
	}

})



function drawLocation (src, list, name) {
	for(var i=0; i < list.length; i++) {
    	if(name === list[i].name){
    		var location = list[i].place[0].location
    		opts = {};
	        opts.position = new google.maps.LatLng(location[0], location[1]);
	        opts.map = map;
	        opts.icon = src;
	        opts.name = name;
	        var marker = new google.maps.Marker(opts);
	        daysArray[current-1].markers.push(marker);
	        }	
		}
    }


})





