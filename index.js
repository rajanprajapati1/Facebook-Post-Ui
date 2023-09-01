const btn = document.querySelectorAll(".btnfacebook");
const emojiselected = document.querySelector("#emoji-apper");
let emojis = Array.from(document.querySelectorAll(".emoji"))
let activeBtn = null;

btn.forEach((element) => {
    element.addEventListener("click", () => {
        if (activeBtn !== null) {
            activeBtn.classList.remove("active");
        }
        if (activeBtn !== element) {
            element.classList.add("active");
            activeBtn = element;
        } else {
            activeBtn = null;
        }
    });
});
emojis.forEach((val) => {
    val.addEventListener("click", () => {
        document.getElementById("imgslected").src = val.getAttribute("src");
        emojiselected.style.display = "block";
        emojiselected.style.scale = "1.5";

        setTimeout(() => {
            emojiselected.style.display = "none";
        }, 2000);
    });
});