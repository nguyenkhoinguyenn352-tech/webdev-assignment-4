const form = document.getElementById("searchForm");
const input = document.getElementById("query");

form.addEventListener("submit", e => {
  e.preventDefault();

  fetch(`https://api.tvmaze.com/search/shows?q=${input.value}`)
    .then(res => res.json())
    .then(data => console.log(data));
});
