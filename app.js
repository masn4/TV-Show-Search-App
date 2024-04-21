const form = document.querySelector("#searchForm");
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const searchInput = form.elements.query.value;
  const result = await axios.get(
    `http://api.tvmaze.com/search/shows?q=${searchInput}`
  );
  console.log(result.data);
  result.data.forEach((q) => {
    try {
      const img = document.createElement("IMG");
      img.src = q.show.image.medium;
      document.body.append(img);
    } catch (e) {
      console.log("NO IMAGE :(");
      return "NO IMAGE";
    }
  });
  // const img = document.createElement("IMG");
  // img.src = result.data[0].show.image.medium;
  // document.body.append(img);
});
