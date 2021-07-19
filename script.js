const form = document.getElementById("searchForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  //find name
  const search = document.getElementById("search").value;
  //remove spaces in search query
  const originalName = search.split(" ").join("");

  document.getElementById("searchResult").innerHTML = "";

  // api intergration
  fetch("https://api.github.com/users/" + originalName)
    .then((result) => result.json())
    .then((data) => {
      console.log(data);
      const hireable = `Hireable: ${data.hirable}`;

      //display picture that when click, redirects to thier github
      document.getElementById("searchResult").innerHTML = `
        <a target="_blank" href="https://www.github.com/${originalName}"> <img src= "${data.avatar_url}"/></a>
      `;

      document.getElementById("moreInfo1").innerHTML = hireable;
    });
  // document.getElementById("moreInfo2").innerHTML =
});
