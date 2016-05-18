/**
 * 
 * Created by rain on 5/18/2016.
 */
function getJSONFromGoogleSpreadsheet(spreadsheetID, callback){
  // author: BRother Rain
  // date  : Sep 2015
  
  // get json from Google Spreadsheet

  // dependencies: jquery
  // dependencies: underscore

  function convertItem(item){
      var result = {};
      var keys = _.keys(item);
      _.each(keys, function(key){
        if(_.contains(key, "$")){
           var realKey = key.split("$")[1];
           result[realKey] = item[key]["$t"];
        }  
      });
    return result;  
  }
  var spreadsheetURL = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json";    
  $.getJSON(spreadsheetURL, function(data){ 
      var items = data.feed.entry;
      var items = _.map(items, convertItem);
      callback(items);
  });
};