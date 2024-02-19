const allSeats = document.querySelectorAll("td");
let allSeatNumber = allSeats.length;
let selectedSet = 0;

function getElementWithId(id) {
  const element = document.getElementById(id);
  return element;
}

function incrementSet() {
  return (selectedSet += 1);
}

function decrementSet() {
  return (allSeatNumber -= 1);
}

function genareatSection(seatName) {
  const selectedSetContainer = getElementWithId("selected-set-container");
  const div = document.createElement("div");
  div.classList.add(
    "text-center",
    "lg:text-left",
    "lg:pl-[17%]",
    "grid",
    "grid-cols-3",
    "pt-4",
    "text-[#03071299]",
    "font-medium",
    "text-base"
  );
  const newSection = selectedSetContainer.appendChild(div);
  const p = document.createElement("p");
  p.setAttribute("id", "seat-name");
  newSection.innerHTML = `<p id="seat-name">${seatName}</p> <p>Economoy</p> <p>550</p>`;
}

function enabaleNextButton() {
  const nextBtn = getElementWithId("next-btn");
  const phoneNumber = getElementWithId("phone-number");
  phoneNumber.addEventListener("focus", function () {
    nextBtn.removeAttribute("disabled");
  });
}

function enabalecuppon() {
  const cupponBtn = getElementWithId("cupon-apply-btn");
  if (selectedSet === 4) {
    cupponBtn.removeAttribute("disabled");
  }
}
