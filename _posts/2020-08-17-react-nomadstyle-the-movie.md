---
title: "[React Nomad]Style the movie"
---

App.js
```javascript
import "./App.css";

   render() {
    const { isLoading, movies } = this.state;
    return (
      <section class="container">
        {isLoading ? (
          <div class="loader">
            <span class="loader__text">Loading...</span>
          </div>
        ) : (
          <div class="movies">
            {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
              />
            ))}
            </div>
        )}
      </section>
    );
  }
```

movie.js
```javascript
import "./Movie.css";

function Movie({year, title, summary, poster}){
    return <div class="movies__movie">
        <img src={poster} alt={title} title={title}></img>
        <div class="movies__data">
            <h3 class="movies__title">{title}</h3>
            <h5 class="movies_year">{year}</h5>
            <p class="movies__summary">{summary} </p>
        </div>
    </div>
}
```
