const form = document.querySelector("#searchForm");
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const searchInput = form.elements.query.value;
  const config = { params: { q: searchInput } };
  const result = await axios.get(`http://api.tvmaze.com/search/shows`, config);
  result.data.forEach((d) => {
    try {
      const img = document.createElement("IMG");
      img.src = d.show.image.medium;
      document.body.append(img);
    } catch (e) {
      console.log("NO IMAGE :(");
      return "NO IMAGE";
    }
  });
  form.elements.query.value = "";
});

// form.addEventListener("onchange", function (e) {
//   e.preventDefault();
//   const remLI = document.querySelectorAll("IMG");
//   remLI.remove();
// });
