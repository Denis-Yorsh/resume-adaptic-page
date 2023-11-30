import $ from "jquery";
import "jquery-ui/dist/jquery-ui.min";

$(() => {
  const effectArray = [
    "explode",
    "bounce",
    "puff",
    "scale",
    "size",
    "blind",
    "shake",
    "pulsate",
    "clip",
  ];
  const toggles = (teg) => {
    $(teg).toggle(effectArray[random()], 500);
    $(teg).toggle(effectArray[random()], 1500);
  };

  const random = () => Math.floor(Math.random() * (8 - 0 + 1) + 0);
  const $main = $("#main");

  toggles($main);

  $("a").click((event) => {
    event.preventDefault();
    toggles($main)
    setTimeout(() => {
      location.href = event.target.href;
    }, 2000);
  });
});