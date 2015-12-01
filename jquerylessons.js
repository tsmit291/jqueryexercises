var namey = "";

$("#button").click(function(){
    namey = $("#searchBox").val();
    $("tr").not(".firstClass").remove();
    var getter = $.ajax({
      url: "https://www.reddit.com/subreddits/search.json?q="+namey,
      method: "GET",
      dataType: "json"
    });
      // calling to the url with the get method and getting json type of data back. in this case we are looking for banana.

    getter.done(function(response){
      var arr = response["data"]["children"]
      for (var i = 0; i < arr.length; i++) {
        var inside = (arr[i]["data"]["title"]);
        var description = arr[i]["data"]["public_description"];
        var image = arr[i]["data"]["icon_img"];
        $(".firstClass").after("<tr><td>"+ inside +"</td>"+"<td>"+ description +"</td>"+"<td>" + "<img src=" + image + ">" + "</td></tr>");
      }
    });
    // get something reddit and then come back. when you're done, hand it over if successful.
    // response is the object itself that you are getting back from the server.
    // getter.fail(function(){
    //   console.log("those people are mean");
    // });

    $("#removeButton").click(function(){
      var lastEntry = "";
      // $("td:contains('td')").html("");
      $("tr:last-child").remove();
       lastEntry--;

    })
});