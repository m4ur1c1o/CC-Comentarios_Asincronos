$(function(){
	
	$('#new_comment_button').on("click", function(){
		$('#new_comment_button').hide();
		addForm();

	});

	$('#comment_area').on("submit",'#new_comment', function( event ){
		event.preventDefault();
		var data = $( this ).serialize();
		console.log("Data:" + data);
		$("#error").html("");

		comment = $("#new_comment textarea").val();
		author = $("#authorName").val();

		if (validateAuthor(author) && validateComment(comment)) {
			$.post('/save', data, function(){
				addComment(comment, author);
				$("#new_comment").hide();
				$('#new_comment_button').show();
			});
		} else {
			$("#error").html("<p>Todos los campos deben estar llenos.</p>");

		}

	});

});


function addForm() {
	$("#comment_list").append("<form id='new_comment' action='/save' method='post'>");
	$("#comment_list form").append('<textarea name="comment" placeholder="Comment"></textarea>');
	$("#comment_list form").append('<input id="authorName" name="author" placeholder="Author">');
	$("#comment_list form").append('<input type="submit">');
	$("#comment_list form").append('<div id="error"></div>');
}

function addComment(comment, author) {
	$("#comment_list").append('<li>' + comment + '<span class="author">' + author + '</span>' + '</li>');
}

function validateAuthor(author){
	return author.length != 0 
}

function validateComment(comment){
	return comment.length != 0 
}