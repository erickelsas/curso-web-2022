navItem = document.querySelectorAll('a');

navItem[1].addEventListener("click", () => {
    cnt = document.getElementById("contato");

    cntPos = cnt.getBoundingClientRect();

    console.log(cntPos);

    window.scroll({
        top: cntPos.top;
        scroll-behavior: smooth;
    })
});