function mobileInsight() {
  fetch("http://localhost:3000/phones")
    .then((res) => res.json())
    .then((phones) => {
      function mobileCards(phone) {
        //variable declarations
        let posters = document.getElementById("posters");
        let details = document.getElementById("details");
        posters.innerHTML = "";
        details.innerHTML = "";

        let phoneName = document.createElement("h2");
        let phoneMemory = document.createElement("li");
        let phoneDisplay = document.createElement("li");
        let phoneProcessor = document.createElement("li");
        let phoneBattery = document.createElement("li");

        let phoneImage = document.createElement("img");
        let phonePrice = document.createElement("p");
        let buyButton = document.createElement("button");
        let stock = document.createElement("p");

        //innerText
        phoneName.innerText = phone.name;
        phoneBattery.innerText =`Battery: ${phone.battery}`;
        phoneDisplay.innerText = `Display: ${phone.display}`;
        phoneMemory.innerText = `Memory: ${phone.memory}`;
        phoneProcessor.innerText =`Processor; ${phone.processor}`;
        phoneImage.src = phone.image;
        phoneImage.height = 300;
        phoneImage.length = 300;
        phoneImage.alt = `${phoneName}`;
        phonePrice.innerText =`Price: ${phone.price}`;
        buyButton.innerText = "buy";
        stock.innerText = `${phone.stock} available`;

        //DOM manipulation
        details.appendChild(phoneName);
        details.appendChild(phoneMemory);
        details.appendChild(phoneBattery);
        details.appendChild(phoneDisplay);
        details.appendChild(phoneProcessor);

        posters.appendChild(phoneImage);
        posters.appendChild(phonePrice);
        posters.appendChild(buyButton);
        posters.appendChild(stock)

        //buyButton event listener
        buyButton.addEventListener("click", () => {
          if (stock === 1) {
            buyButton.innerText = "!Out of Stock!";
            stock.innerText = " ";
          } else {
            --stock;
            stock.innerText = `${phone.stock} available`;
          }
        });
      }
      phones.forEach((phone) => {
        list = document.getElementById("list");
        phoneList = document.createElement("li");
        phoneList.innerText = phone.name;
        list.appendChild(phoneList);
        phoneList.addEventListener("click", () => {
          mobileCards(phone);
        });
      });
    });
}
mobileInsight();
