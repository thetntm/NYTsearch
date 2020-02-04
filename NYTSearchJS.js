//Declaring Variables

//Dom elements
var searchTerm_JQ = $("#searchTerm")
var limit_JQ = $("#limit")
var startYear_JQ = $("#startYear")
var endYear_JQ = $("#endYear")
var searchButton_JQ = $("#searchButton")
var clearButton_JQ = $("#clearButton")
var resultsDiv_JQ = $("#results")
var errorMessage_JQ = $("#errorMessage")
//Functions

//Event Functions
function searchButtonClicked(event)
{
    const numberOfItems = limit_JQ.val();
    const query = searchTerm_JQ.val();

    if(!query || !(parseInt(numberOfItems)))
    {
        errorMessage_JQ.text("You did not enter the neccesary information!");
        return;
    }

    const startYear = startYear_JQ.val();
    const endYear = endYear_JQ.val();


    const queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + query + '&api-key=7pKBOYLgmdVv44wOY7x81sNfB88FjFjW'
    let requestPromise = $.ajax({
        url: queryURL,
        method: "GET",
        success: function(response) 
        {

        }
      });
}

//Event assignment
searchButton_JQ.on("click",searchButtonClicked);

//Code to run on startup