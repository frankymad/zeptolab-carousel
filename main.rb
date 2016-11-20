require 'open-uri'
require 'json'
require 'sinatra'
require "rubygems"

url = "https://web-assets.zeptolab.com/api/test_gallery.php"
json_object = JSON.parse(open(url).read)

get "/" do
  @objects = json_object
  erb :index
end

not_found do
  status 404
  erb :page404
end

=begin
puts json_object.to_s
puts json_object[0].to_s
puts json_object[0].keys.to_s
puts json_object[0]['name'].to_s
=end