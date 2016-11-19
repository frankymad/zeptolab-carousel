require 'open-uri'
require 'json'

url = "https://web-assets.zeptolab.com/api/test_gallery.php"
json_object = JSON.parse(open(url).read)

puts json_object.to_s
puts json_object[0].to_s
puts json_object[0].keys.to_s
puts json_object[0]['name'].to_s