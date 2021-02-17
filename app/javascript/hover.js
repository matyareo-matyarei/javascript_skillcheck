function hover (){
  const articles = document.querySelectorAll(".article")
  articles.forEach((articles) => {
    articles.addEventListener("mouseover", () =>{
      articles.setAttribute("style","background-color:#F1940B;");
    });
    articles.addEventListener("mouseout", () =>{
      articles.removeAttribute("style","background-color:#F1940B;");
    });
  });
};

setInterval(hover, 1000);