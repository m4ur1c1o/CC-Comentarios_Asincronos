class CreateComment < ActiveRecord::Migration
  def change
  	create_table :comments do |t|
  		t.string :author
  		t.string :comment

  		t.timestamps
  	end
  end
end
