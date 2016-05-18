/**
 * Created by rain on 5/18/2016.
 */
getJSONFromGoogleSpreadsheet("1_EF0X0SL4WQwErQJCwRTV8fQIVB3BBcOkvwwzNlgoYw", function(data){
    var commands = data;
    var titles = _.map(commands, function(command){
        return command.command;
    });
    var commands_key = _.object(titles, commands);
    $("#command").typeahead({source: titles});
    function update() {
        try {
            var command = $("#command").val();
            $("#explain").text(commands_key[command].description);
        } catch (e) {

        }
    }
    setInterval(function () {
        update();
    }, 1000);

});

