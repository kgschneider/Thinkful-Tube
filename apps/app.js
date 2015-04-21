$(function(){
  $('#search-term').submit(function(event){
    event.preventDefault();
    var searchTerm = $('#query').val();
    getRequest(searchTerm);
  });
});

function getRequest(searchTerm){
  var params = {
    part: 'snippet',
    key: "AIzaSyC1rnQgVyuAlDi8xf5ug_9g4XNWeYfhuZ0",
    q: searchTerm,
    r: 'json'
  };
  
  url = 'https://www.googleapis.com/youtube/v3/search';

  $.getJSON(url, params, function(data){
    showResults(data.items);
  });
}

function showResults(results){
  var html = "";
  $.each(results, function(index,value){
    html += '<p>' + value.snippet.title + '</p>';
    html += '<p>' + value.snippet.description + '</p>';
    html += '<img src="' + value.snippet.thumbnails.default.url + '"/>';
    console.log(value.snippet.title);
  });
  $('#search-results').html(html);
}