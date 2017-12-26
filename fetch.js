function loadData() {
	$.ajax({
		url: "books.xml",
		dataType: "xml",
		success: function(data) {
			alert("file is loaded");
			$(data).find('book').each(function(){
			var title = $(this).find('title').text();
			var category = $(this).attr('category');
			var year = $(this).find('year').text();
			var price = $(this).find('price').text();
			var author = '';
			$(this).find('author').each(function()
				{ author = author+$(this).text()+',';


			})
			var info = '<tr><td>'+ title+'</td><td>' +author +'</td><td>'+category+'</td><td>'+year+'</td><td>'+price+'</td><tr>';
			console.log(author);
			$("table").append(info);
			});
		},
		error: function() { alert("error loading file"); }
	});
}