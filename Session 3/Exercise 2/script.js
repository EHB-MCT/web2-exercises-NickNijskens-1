window.onload = () => {
  async function getData(){
    var data = await fetch("https://www.omdbapi.com/?t=ad%20fundum&apikey=621151ff");
    return await data.json();
  }
  getData().then((result) => {
    document.getElementById("content").innerHTML = `<h4>Title</h4><p>${result.Title}</p><h4>Year</h4><p>${result.Year}</p><h4>Director</h4><p>${result.Director}</p><h4>Runtime</h4><p>${result.Runtime}</p>`;
  })
}