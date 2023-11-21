import "jquery-ui/dist/jquery-ui.min";
import $ from "jquery";

$(() => {
  const main = $("#main");
  $(main).toggle("blind", 2000);

  $("a.asd").click((event) => {
    event.preventDefault();
    console.log("click")
    $(main).toggle("explode", 2000);
    setTimeout(go, 1800);
  });

  const go = () => {
    location.href = "https://www.google.com/";
  };
});
