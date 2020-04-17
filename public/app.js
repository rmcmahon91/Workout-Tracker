$("#type").on("click", function() {
    $.ajax({
      type: "POST",
      url: "/",
      dataType: "json",
      data: {
        title: $("#cardio-name").val(),
        created: Date.now()
      }
      
    })
});

$("#type").on("click", function() {
    $.ajax({
      type: "POST",
      url: "/",
      dataType: "json",
      data: {
        title: $("#distance").val(),
        created: Date.now()
      }
      
    })
});

$("#type").on("click", function() {
    $.ajax({
      type: "POST",
      url: "/",
      dataType: "json",
      data: {
        title: $("#duration").val(),
        created: Date.now()
      }
      
    })
});
