function setSelection() {
  for (const singleSeat of allSeats) {
    singleSeat.addEventListener("click", function (event) {
      singleSeat.setAttribute("class", "bg-[#1DD100]");
      const seatName = event.target.innerText;
      genareatSection(seatName);

      //  avilable seat innertext set
      getElementWithId("total-seat-num").innerText = decrementSet();
      // selected seat innertext set
      getElementWithId("selected-seat-num").innerText = incrementSet();

      enabaleNextButton();
      enabalecuppon();

      calculateSeatPrice();
    });
  }
}
setSelection();

function calculateSeatPrice() {
  let perSeatPrice = 550;
  let totalSeatPrice = 0;
  totalSeatPrice = perSeatPrice * selectedSet;

  getElementWithId("total-price").innerText = totalSeatPrice;
  getElementWithId("grand-total-price").innerText = totalSeatPrice;
}
