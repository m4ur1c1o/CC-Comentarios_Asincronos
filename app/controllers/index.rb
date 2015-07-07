get '/' do
  
  erb :index
end

post '/save' do
	author = params[:author]
	comment = params[:comment]
	@post = Comment.create(author: author, comment: comment)

end