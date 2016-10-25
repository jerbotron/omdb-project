# OMdB search app

In this project, you will build a front-end app that can perform simple search queries on the movies API provided by [OMdB](http://www.omdbapi.com/).

Your project should live within a GitHub repository so that we can review your code and provide feedback.

You may use any JS framework you like (though it is also of course possible to do this entirely in vanilla JS).

You may use the following specs as a design guide, but feel free to deviate and embellish the provided specs with your own design.


## App specs

This app has three primary states:

1.	Landing state with search bar

	<img src="mockups/landing.png" width="100%" />

2.	Display search results in response to user interaction

	<img src="mockups/search.png" width="100%" />

3.	Display movie details in response to user selection

	<img src="mockups/details.png" width="100%" />

Per the OMdB documentation, the two endpoints you'll need to hit for data are:

*	`http://www.omdbapi.com/?s=samurai`
This endpoint will return the list of results for titles matching the search term (in the example above, the search term is "samurai").

Here's an example of what the return results will look like:

```
{
	Search: 
		[
				{
					Title: "The Last Samurai",
					Year: "2003",
					imdbID: "tt0325710",
					Type: "movie",
					Poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMzkyNzQ1Mzc0NV5BMl5BanBnXkFtZTcwODg3MzUzMw@@._V1_SX300.jpg"
				},
			...
		]
}
```

*	`http://www.omdbapi.com/?i=tt0165798&plot=full&r=json`
This endpoint will return detailed information for the title matching the ID supplied (in the example above, the ID is "tt0165798").

Here's an example of what the return results will look like:

```
{
	Title: "Samurai",
	Year: "2002",
	Rated: "R",
	Released: "19 Jun 2002",
	Runtime: "90 min",
	Genre: "Action",
	Director: "Giordano Gederlini",
	Writer: "Matt Alexander, Alexandre Coquelle, Giordano Gederlini, Matthieu Le Naour",
	Actors: "Cyril Mourali, Maï Anh Le, Yasuaki Kurata, Saïd Serrari",
	Plot: "Half a century ago, a Japanese family summoned a demon known as Kodeni to dispose of its adversaries. Once the killing was done, the family was cursed. Now, Tokyo Police Inspector Fujiwara ...",
	Language: "French, Japanese",
	Country: "Spain, France, Germany",
	Awards: "N/A",
	Poster: "http://ia.media-imdb.com/images/M/MV5BMTg5MDUzNzQ1NV5BMl5BanBnXkFtZTgwNzg1OTk1MDE@._V1_SX300.jpg",
	Metascore: "N/A",
	imdbRating: "3.4",
	imdbVotes: "604",
	imdbID: "tt0284457",
	Type: "movie",
	Response: "True"
}
```