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

      //pulled data to use in lists
      const hireable = `Hireable: ${data.hireable}`;
      const location = `Location: ${data.location}`;
      const fullName = `Name: ${data.name}`;
      const email = `Email: ${data.email}`;
      const repoCount = `Repo Count: ${data.public_repos}`;
      const created = `Created: ${data.created_at}`;
      const lastUpdated = `Last update: ${data.updated_at}`;
      const twitterHandle = `Twitter: ${data.twitter_username}`;

      //display picture that when click, redirects to thier github
      document.getElementById("searchResult").innerHTML = `
        <a target="_blank" href="https://www.github.com/${originalName}"> <img src= "${data.avatar_url}"/></a>
      `;

      const basicInfoArray = [fullName, location, email, twitterHandle];
      var str = "<ul>";

      basicInfoArray.forEach(function (slide) {
        str += "<li>" + slide + "</li>";
      });
      str += "</ul>";
      document.getElementById("moreInfo1").innerHTML = str;

      const moreInfoArray = [created, lastUpdated, repoCount, hireable];
      var str2 = "<ul>";
      moreInfoArray.forEach(function (slide) {
        str2 += "<li>" + slide + "</li>";
      });
      str2 += "</ul>";
      document.getElementById("moreInfo2").innerHTML = str2;
    });
});
