var namey = "";

$("#button").click(function(){
    namey = $("#searchBox").val();
    $("tr").not(".firstClass").remove();
    $.ajax({
      url: "https://www.reddit.com/subreddits/search.json?q="+namey,
      method: "GET",
      dataType: "json"
    }).done(function(response){
      print(response)
    })
    // get something reddit and then come back. when you're done, hand it over if successful.
    // response is the object itself that you are getting back from the server.
    $("#removeButton").click(function(){
      var lastEntry = "";
      // $("td:contains('td')").html("");
      $("tr:last-child").remove();
       lastEntry--;

    })
});
 function print(responsible){
      var arr = responsible["data"]["children"]
      var items = responsible["inside","description","image"]
      for (var i = 0; i < arr.length; i++) {
        var inside = (arr[i]["data"]["title"]);
        var description = arr[i]["data"]["public_description"];
        var image = arr[i]["data"]["header_img"] ? arr[i]["data"]["header_img"] : "http://placehold.it/40x40";
        $(".firstClass").after("<tr><td>"+ inside +"</td>"+"<td>"+ description +"</td>"+"<td>" + "<img src=" + image + ">" + "</td></tr>");
}}
