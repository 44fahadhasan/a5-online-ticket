function seatSelection() {
  for (const singleSeat of allSeats) {
    singleSeat.addEventListener("click", function (event) {
      const seatName = event.target.innerText;

      const buySeat = getElementWithId("selected-seat-num").textContent;

      if (buySeat < 4) {
        singleSeat.setAttribute("class", "bg-[#1DD100]");
        //  avilable seat innertext set
        getElementWithId("total-seat-num").innerText = decrementSet();
        // selected seat innertext set
        getElementWithId("selected-seat-num").innerText = incrementSet();
        enabaleNextButton();
        enabalecuppon();
        genareatSection(seatName);
        calculateSeatPrice();
      }
    });
  }
}
seatSelection();

function calculateSeatPrice() {
  let perSeatPrice = 550;
  totalSeatPrice = perSeatPrice * selectedSet;

  getElementWithId("total-price").innerText = totalSeatPrice;
  getElementWithId("grand-total-price").innerText = totalSeatPrice;
}
