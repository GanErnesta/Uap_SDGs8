const categories = document.querySelectorAll(".category");
const cards = document.querySelectorAll(".card");

categories.forEach(btn => {

    btn.addEventListener("click", () => {

        categories.forEach(item =>
            item.classList.remove("active")
        );

        btn.classList.add("active");

        const category = btn.dataset.category;

        cards.forEach(card => {

            if (
                category === "all" ||
                card.dataset.category === category
            ) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

});


const searchInput =
document.getElementById("searchInput");

searchInput.addEventListener("keyup", () => {

    const keyword =
    searchInput.value.toLowerCase();

    cards.forEach(card => {

        const title =
        card.querySelector("h3")
        .textContent.toLowerCase();

        if(title.includes(keyword)){
            card.style.display = "block";
        }else{
            card.style.display = "none";
        }

    });

});