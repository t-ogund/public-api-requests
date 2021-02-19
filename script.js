const gallery = document.querySelector("#gallery");
const body = document.querySelector("body");
const modalContainer = document.querySelector(".modal-container");

fetch("https://randomuser.me/api/?&results=12")
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
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
    console.log(card)
    for (let i = 0; i < card.length; i++) {
      card[i].addEventListener("click", () => {
        console.log(i)

        console.log(data.results[i])
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
                              <p class="modal-text">(555) 555-5555</p>
                              <p class="modal-text">
                              ${data.results[i].location.street.number} 
                              ${data.results[i].location.street.name}, 
                              ${data.results[i].location.city},
                              ${data.results[i].location.state} 
                              ${data.results[i].location.postcode}
                              </p>
                              <p class="modal-text">Birthday: 10/21/2015</p>
                          </div>
                      </div>
                  </div>
                      `
              );
              const modalCloseBtn = document.querySelector("#modal-close-btn");
      modalCloseBtn.addEventListener("click", (e) => {
        e.target.parentElement.parentElement.parentElement.remove();
      })
      })

       

    }


      
      

    //   if (e.target.className.includes("card")) {  
    //     body.insertAdjacentHTML(
    //       "beforeend",
    //       `
    //             <div class="modal-container">
    //             <div class="modal">
    //                 <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
    //                 <div class="modal-info-container">
    //                     <img class="modal-img" src="https://placehold.it/125x125" alt="profile picture">
    //                     <h3 id="name" class="modal-name cap">name</h3>
    //                     <p class="modal-text">email</p>
    //                     <p class="modal-text cap">city</p>
    //                     <hr>
    //                     <p class="modal-text">(555) 555-5555</p>
    //                     <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
    //                     <p class="modal-text">Birthday: 10/21/2015</p>
    //                 </div>
    //             </div>
    //         </div>
    //             `
    //     );
    

    //     const modalCloseBtn = document.querySelector("#modal-close-btn");
    //   modalCloseBtn.addEventListener("click", (e) => {
    //     e.target.parentElement.parentElement.parentElement.remove();
    //   });
    //   }
      
    // });

    
  });


  