const spans = document.querySelectorAll("span");
const button = document.querySelector("button");
const main = document.querySelector("main");
const spans_arr = Array.from(spans);

let currActive = 0;

spans_arr.forEach((span) => {
  span.addEventListener("click", (e) => {
    spans_arr.forEach((s) => {
      s.classList.remove("active");
    });
    span.classList.toggle("active");
    currActive = span.innerText;
  });
});

button.addEventListener("click", (e) => {
  let thankyouMessage = `
  <div class="thankyou">
  <img class="thankyou__image" src="images/illustration-thank-you.svg" />
<div class="thankyou__rating">
  You selected
  ${currActive}
  out of 5
</div>
<h2 class="thankyou__head">Thank you!</h2>
<p class="thankyou__message">
  We appreciate you taking the time to give a rating. If you ever need
  more support, don’t hesitate to get in touch!
</p>
</div>`;
  main.innerHTML = thankyouMessage;
});