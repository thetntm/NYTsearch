//Declaring Variables

//Dom elements
var searchTerm_JQ = $("#searchTerm")
var limit_JQ = $("#limit")
var startYear_JQ = $("#startYear")
var endYear_JQ = $("#endYear")
var searchButton_JQ = $("#searchButton")
var clearButton_JQ = $("#clearButton")
var resultsDiv_JQ = $("#results")
//Functions

//Event Functions
function searchButtonClicked(event)
{
    const query = searchTerm_JQ.val();
    const queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + query + '&api-key=7pKBOYLgmdVv44wOY7x81sNfB88FjFjW'
    let requestPromise = $.ajax({
        url: queryURL,
        method: "GET",
        success: function(response) 
        {
            console.log(response);
        }
      });
}

//Event assignment
searchButton_JQ.on("click",searchButtonClicked);

//Code to run on startup