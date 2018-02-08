$("#addNote").on("click", function() {
    var id = $(this).attr("data-id");
    $.ajax({
        method: "POST",
        url: "/articles/" + id,
        data: {
          body: $("#body").val()
        }
      })
        .then(function(data) {
          console.log(data);
        });
});
$("#getNote").on("click", function() {
    var id = $(this).attr("data-id");
    $.ajax({
        method: "GET",
        url: "/articles/" + id
      }).then(function(data) {
          console.log(data);
        });
});

