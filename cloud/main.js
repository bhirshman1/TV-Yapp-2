// iOS push testing
Parse.Cloud.define("iosPush", function(request, response) {
 
  //var user = request.user;
  var params = request.params;
  var deviceTokens = params.deviceTokens
  var data = params.data
 
  var pushQuery = new Parse.Query(Parse.Installation);
  //pushQuery.equalTo('deviceType', 'ios'); // targeting iOS devices only
  pushQuery.containedIn("deviceToken", deviceTokens)
 
  Parse.Push.send({
    where: pushQuery, // Set our Installation query
    //channels: [""],
    data: data
  }, { success: function() {
      console.log("#### PUSH OK");
  }, error: function(error) {
      console.log("#### PUSH ERROR" + error.message);
  }, useMasterKey: true});
 
  response.success('success');
});

Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi (from the cloud)');
 console.log("This is from the cloud");
});
