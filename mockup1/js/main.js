window.onload = function() {
    var spinsLocked = false;
    function stopAnim() {
        this.classList.remove("blink");
    }
    function startAnim() {
        this.classList.add("blink");
    }
    function lock() {
        if(!spinsLocked) {
            this.removeEventListener("mouseover", stopAnim);
            this.removeEventListener("mouseout", startAnim);
            this.classList.remove("blink");
            spinsLocked = true;
        } else {
            this.addEventListener("mouseover", stopAnim);
            this.addEventListener("mouseout", startAnim);
            // this.classList.remove("blink");
            spinsLocked = false;
        }
    }
    function smoothScroll() {
        let elmnt = document.getElementById("games-heading");
        elmnt.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }

    var x = document.getElementById("spins");
    document.getElementById("entry-btn").addEventListener("click", smoothScroll);
    x.addEventListener("mouseover", stopAnim);
    x.addEventListener("mouseout", startAnim);
    x.addEventListener("click", lock);
};