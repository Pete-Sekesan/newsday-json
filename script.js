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
  results.items.slice(0, 2).forEach((res) => {
    let recent =
      res.date_published > res.date_modified
        ? res.date_published
        : res.date_modified;
    console.log(recent);

    $(`#list`).append(
      `<li class="results"><h2>${res.title}</h2>
        <p>${res.authors[0].name}</p>
        <p>${recent}</p > 
        ${res.content_html}} </li>`
    );
  });
}

function initiateSearch() {
  $('form').submit((event) => {
    event.preventDefault();
    getDeptList();
  });
}
$(initiateSearch);
