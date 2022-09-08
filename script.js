function getDeptList() {
  const url = 'https://daringfireball.net/feeds/json';

  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusCode);
    })
    .then((results) => displayResults(results));
}

function displayResults(results) {
  results.items
    .slice(0, 2)
    .forEach((res) =>
      $(`#list`).append(
        `<li class="results"><h2>${res.title}</h2> <p>${res.date_published}</p>${res.content_html}</li>`
      )
    );
}

function initiateSearch() {
  $('form').submit((event) => {
    event.preventDefault();
    getDeptList();
  });
}
$(initiateSearch);
