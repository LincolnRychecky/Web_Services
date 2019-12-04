$(document).ready(function(){
    var apiKey = "78da1a7334b6a9e576a8689b9b1d4606" // Enter your API Key here
    //console.log(`state_info is: ${state_info}`) // Notice the templating here, use that when you form your url
    // TODO
    // Iterate over the state_info array and call the api for each state_name to get the current temperature
    // Example to call the api using state_name
    // This should be done inside the for loop

    Object.keys(state_info).forEach(function(state) {

      var url ='https://api.darksky.net/forecast/78da1a7334b6a9e576a8689b9b1d4606/'+state_info[state].lat+','+state_info[state].lng;

      $.ajax({url:url, dataType:"jsonp"}).then(function(data) {

                  var temperature = data.currently.temperature;
                  console.log(temperature)
                  // TODO
                  // Fill in the RHS of the below line and uncomment it. Remember how we accessed the temperature in Lab 9.
                  // var temperature =

                  //console.log(temperature)

                  //TODO
                  // Default color gray
                  // Create a series of if else blocks to set the color for the state based on the temperature
                  // Less than equal to 10 should be blue
                  // Between 11 and 30 should be cyan
                  // Between 31 and 50 should be green
                  // Between 51 and 80 should be orange
                  // Greater than 80 should be red
                  if(temperature <= 10.0){
                    $('#'+state).css('fill', "#6495ED");   // Example on how to fill colors for your state.
                  }
                  if(temperature > 10.0 && temperature <= 20.0){
                    $('#'+state).css('fill', "#7FFFD4");
                  }
                  if(temperature > 20.0 && temperature <= 30.0){
                    $('#'+state).css('fill', "#0000FF");
                  }
                  if(temperature > 30.0 && temperature <= 40.0){
                    $('#'+state).css('fill', "#008B8B");
                  }
                  if(temperature > 40.0 && temperature <= 50.0){
                    $('#'+state).css('fill', "#00BFFF");
                  }
                  if(temperature > 50.0 && temperature <= 60.0){
                    $('#'+state).css('fill', "#F08080");
                  }
                  if(temperature > 60.0 && temperature <= 70.0){
                    $('#'+state).css('fill', "#CD5C5C");
                  }
                  if(temperature > 70.0 && temperature <= 80.0){
                    $('#'+state).css('fill', "#8B0000");
                  }
                  if(temperature > 80.0 && temperature <= 90.0){
                    $('#'+state).css('fill', "#B22222");
                  }
                  if(temperature > 90.0){
                    $('#'+state).css('fill', "#FF0000");
                  }
      });
    });
  });
