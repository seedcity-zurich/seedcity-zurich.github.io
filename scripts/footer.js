function loadCss() {
    const link = document.createElement("link");
    link.href = "../css/footer.css";
    link.type = "text/css";
    link.rel = "stylesheet";
    document.getElementsByTagName( "head" )[0].appendChild(link);
}

function footer() {
    const footer = document.createElement("div");
    const VSETHLogo = document.createElement("img");
    VSETHLogo.src = "../images/footer_images/vseth_Logo_bunt-1024x559.png"
    VSETHLogo.style.width = "10%";
    VSETHLogo.onclick = function() {window.open("https://vseth.ethz.ch/en/")};

    footer.classList.add("footer");
    footer.appendChild(VSETHLogo);

    document.body.appendChild(footer);
}

loadCss();
footer();