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
  results.items.forEach((res) =>
    $(`#table`).append(
      `<table class="results"> <tr> <th>Code</th> <th>Title</th> </tr> <td>${res.title}</td> <td>${res.title}</td> </table>`
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
