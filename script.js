const gallery = document.querySelector("#gallery");
const body = document.querySelector("body");
const searchContainer = document.querySelector(".search-container");

searchContainer.insertAdjacentHTML("beforeend", `<form action="#" method="get">
<input type="search" id="search-input" class="search-input" placeholder="Search...">
<input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
</form>`)


fetch("https://randomuser.me/api/?nat=us&results=12")
  .then((response) => response.json())
  .then((data) => {
    const employees = data.results.map((employee, index) => {
      gallery.insertAdjacentHTML(
        "beforeend",
        `<div class="card">
        <div class="card-img-container">
            <img class="card-img" src=${employee.picture.large} alt="profile picture">
        </div>
        <div class="card-info-container">
            <h3 id="name" class="card-name cap">${employee.name.first} ${employee.name.last}</h3>
            <p class="card-text">${employee.email}</p>
            <p class="card-text cap">${employee.location.city}, ${employee.location.state}</p>
        </div>
    </div>
    `
      );
    });

    const card = document.querySelectorAll(".card");
    for (let i = 0; i < card.length; i++) {
      card[i].addEventListener("click", () => {

        function cellFormatter(x) {
          const areaCode = x.slice(0, 5)
          const number = (x.slice(6))
          const cellNumber = `${areaCode} ${number}`
          return cellNumber
        }

        function dobFormatter(x) {
          const month = x.slice(5, 7)
          const day = x.slice(8, 10)
          const year = x.slice(0, 4)
          const formattedDOB = `${month}/${day}/${year}`
          return formattedDOB
        }
        
        body.insertAdjacentHTML(
                "beforeend",
                `
                      <div class="modal-container">
                      <div class="modal">
                          <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                          <div class="modal-info-container">
                              <img class="modal-img" src="${data.results[i].picture.large}" alt="profile picture">
                              <h3 id="name" class="modal-name cap">${data.results[i].name.first} ${data.results[i].name.last}</h3>
                              <p class="modal-text">${data.results[i].email}</p>
                              <p class="modal-text cap">${data.results[i].location.city}</p>
                              <hr>
                              <p class="modal-text">${cellFormatter(data.results[i].cell)}</p>
                              <p class="modal-text">
                              ${data.results[i].location.street.number} 
                              ${data.results[i].location.street.name}, 
                              ${data.results[i].location.city},
                              ${data.results[i].location.state} 
                              ${data.results[i].location.postcode}
                              </p>
                              <p class="modal-text">Birthday: ${dobFormatter(data.results[i].dob.date)}</p>
                          </div>
                      </div>

                      // IMPORTANT: Below is only for exceeds tasks 
                      <div class="modal-btn-container">
                          <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
                          <button type="button" id="modal-next" class="modal-next btn">Next</button>
                      </div>
                  </div>
                      `
              );
const modalContainer = document.querySelector(".modal-container");
              let modal = document.querySelector(".modal");
              const modalCloseBtn = document.querySelector("#modal-close-btn");
              let modalInfoContainer = document.querySelector(".modal-info-container");
              // const next = document.querySelector("#modal-next");
              // const prev = document.querySelector("#modal-prev");


              const modalToggle = document.querySelector(".modal-btn-container");
              const arrayOfCards = Array.from(card);

              modalToggle.addEventListener("click", (e) => {
                // console.log()
                if (e.target.classList.contains("modal-prev")) {
                  e.target.parentElement.children[1].disabled = false;
                  console.log("PREV")
                  console.log(data.results[i -= 1])
                  // console.log(i)
                  // modalInfoContainer.remove();
                  const modalImage = document.querySelector(".modal-img");
                  const modalName = document.querySelector(".modal-name");
                  const modalEmail = document.querySelectorAll(".modal-text")[0];
                  const modalCity = document.querySelectorAll(".modal-text")[1];
                  const cellPhone = document.querySelectorAll(".modal-text")[2];
                  const locationDetails = document.querySelectorAll(".modal-text")[3];
                  const modalDOB = document.querySelectorAll(".modal-text")[4];
                  modalImage.src = `${data.results[i + 1 - 1].picture.large}`;
                  modalName.textContent = `${data.results[i + 1 - 1].name.first} ${data.results[i + 1 - 1].name.last}`
                  modalEmail.textContent = `${data.results[i + 1 - 1].email}`
                  modalCity.textContent = `${data.results[i + 1 - 1].location.city}`
                  cellPhone.textContent = `${cellFormatter(data.results[i + 1 - 1].cell)}`
                  locationDetails.textContent = ` ${data.results[i + 1 - 1].location.street.number} 
                                                  ${data.results[i + 1 - 1].location.street.name}, 
                                                  ${data.results[i + 1 - 1].location.city},
                                                  ${data.results[i + 1 - 1].location.state} 
                                                  ${data.results[i + 1 - 1].location.postcode}`
                  modalDOB.textContent = `Birthday: ${dobFormatter(data.results[i + 1 - 1].dob.date)}`

                  
                  if (i === 0) {
                    e.target.disabled = true;
                  } else if (i > 0) {
                    e.target.disabled = false;
                  }
                }
                
                if (e.target.classList.contains("modal-next")) {
                  e.target.parentElement.children[0].disabled = false;
                  console.log("NEXT")
                  // console.log(data.results[i].parentElement)
                  console.log(data.results[i += 1])
                  const modalImage = document.querySelector(".modal-img");
                  const modalName = document.querySelector(".modal-name");
                  const modalEmail = document.querySelectorAll(".modal-text")[0];
                  const modalCity = document.querySelectorAll(".modal-text")[1];
                  const cellPhone = document.querySelectorAll(".modal-text")[2];
                  const locationDetails = document.querySelectorAll(".modal-text")[3];
                  const modalDOB = document.querySelectorAll(".modal-text")[4];
                  modalImage.src = `${data.results[i - 1 + 1].picture.large}`;
                  modalName.textContent = `${data.results[i - 1 + 1].name.first} ${data.results[i - 1 + 1].name.last}`
                  modalEmail.textContent = `${data.results[i - 1 + 1].email}`
                  modalCity.textContent = `${data.results[i - 1 + 1].location.city}`
                  cellPhone.textContent = `${cellFormatter(data.results[i - 1 + 1].cell)}`
                  locationDetails.textContent = ` ${data.results[i - 1 + 1].location.street.number} 
                                                  ${data.results[i - 1 + 1].location.street.name}, 
                                                  ${data.results[i - 1 + 1].location.city},
                                                  ${data.results[i - 1 + 1].location.state} 
                                                  ${data.results[i - 1 + 1].location.postcode}`
                  modalDOB.textContent = `Birthday: ${dobFormatter(data.results[i - 1 + 1].dob.date)}`
                  if (i === 11) {
                    e.target.disabled = true;
                  } 
                }
              })

              modalCloseBtn.addEventListener("click", (e) => {
                e.target.parentElement.parentElement.parentElement.remove();
              })

              
      })
    }

    const searchInput = document.querySelector(".search-input");
    const searchSubmit = document.querySelector(".search-submit");
    const cardName = document.querySelectorAll(".card-name");
    const arrayOfNames = Array.from(cardName);
    console.log(arrayOfNames)
    searchInput.addEventListener("keyup", (e) => {
      // console.log(cardName)
      arrayOfNames.filter(name => {
        if (name.textContent.toLowerCase().includes(e.target.value) === true) {
          name.parentElement.parentElement.style.display = "flex";
        } else {
          name.parentElement.parentElement.style.display = "none";
        }
      })
    })
    searchSubmit.addEventListener("click", () => {
      console.log(searchInput.value)
    })
  });


  