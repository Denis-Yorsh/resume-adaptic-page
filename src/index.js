import $ from "jquery";
import "jquery-ui/dist/jquery-ui.min";

$(() => {
  $(".test").toggle("blind", 2000);
  $(".asd").click((e) => {
    e.preventDefault();
    $(".test").toggle("explode", 2000);
    setTimeout(go, 1800);
  });

  const go = () => {
    location.href = "https://www.google.com/";
  };
});
