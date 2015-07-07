$(function(){
	
	$('#new_comment_button').on("click", function(){
		$('#new_comment_button').hide();
		addForm();

	});

	$('#comment_area').on("submit",'#new_comment', function( event ){
		event.preventDefault();
		comment = $("#new_comment textarea").val();
		author = $("#authorName").val();

		$("#new_comment").hide();

		addComment(comment, author);

		$('#new_comment_button').show();
	});


});


function addForm() {
	$("#comment_list").append('<form id="new_comment" action="" method="POST">');
	$("#comment_list form").append('<textarea placeholder="Comment">');
	$("#comment_list form").append('<input id="authorName" placeholder="Author">');
	$("#comment_list form").append('<input type="submit">');
}

function addComment(comment, author) {
	$("#comment_list").append('<li>' + comment + '<span class="author">' + author + '</span>' + '</li>');
}