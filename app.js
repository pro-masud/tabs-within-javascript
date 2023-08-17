// select all elements
const about = document.querySelector(".about");
const tabBtn = document.querySelectorAll(".tab-btn");
const conents = document.querySelectorAll(".content");

// set event here
about.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    console.log(id);

    // set condition here now
    if(id){
        // remove slected form other buttons
        tabBtn.forEach((btn) => {
            btn.classList.remove("active");
            
        });
        e.target.classList.add("active");

        // hide others contents
        conents.forEach((content) => {
            content.classList.remove("active");
        });

        const element = document.getElementById(id);

        element.classList.add("active");

    }
})