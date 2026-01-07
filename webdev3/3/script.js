const form = document.getElementById("searchForm");
const input = document.getElementById("query");
const results = document.getElementById("results");

form.addEventListener("submit", e => {
  e.preventDefault();

  fetch(`https://api.tvmaze.com/search/shows?q=${input.value}`)
    .then(res => res.json())
    .then(data => {
      results.innerHTML = "";

      data.forEach(item => {
        const show = item.show;

        const article = document.createElement("article");

        article.innerHTML = `
          <h2>${show.name}</h2>
          <a href="${show.url}" target="_blank">${show.url}</a>
          <img src="${show.image?.medium}" alt="${show.name}">
          <div>${show.summary}</div>
        `;

        results.appendChild(article);
      });
    });
});
