function loadCss() {
    const link = document.createElement("link");
    link.href = "../css/menu.css";
    link.type = "text/css";
    link.rel = "stylesheet";
    document.getElementsByTagName( "head" )[0].appendChild(link);
}

function createLink(linktext, path) {
    const link = document.createElement("a");
    const lt = document.createTextNode(linktext);
    link.appendChild(lt);
    link.href = path;
    
    return link;
}

function createMenu() {
    const header = document.getElementById("header");
    const topnav = document.createElement("div");
    topnav.classList.add("topnav");
    header.appendChild(topnav);

    // create all the links
    const home = createLink("Home", "../index.html");
    topnav.appendChild(home);

    const garden = createLink("Our Garden", "../our_garden.html");
    topnav.appendChild(garden);

    const gallery = createLink("Gallery", "../gallery.html");
    topnav.appendChild(gallery);

    const events = createLink("Events", "../events.html");
    topnav.appendChild(events);

    //TODO
    const getInvolvedDropdown = document.createElement("div");
    getInvolvedDropdown.classList.add("dropdown");
    topnav.appendChild(getInvolvedDropdown);
    
    const dropDownButton = document.createElement("button");
    dropDownButton.innerText = "Get Involved";
    dropDownButton.classList.add("dropbtn")
    getInvolvedDropdown.appendChild(dropDownButton);

    const dropdownContent = document.createElement("div");
    dropdownContent.classList.add("dropdown-content");

    // items of dropdown list
    const becomeAMember = createLink("Become A Member", "../become_a_member.html");
    dropdownContent.appendChild(becomeAMember);

    const contact = createLink("Contact", "../contact.html");
    dropdownContent.appendChild(contact);

    const supportUs = createLink("Support Us", "../support_us.html");
    dropdownContent.appendChild(supportUs);

    getInvolvedDropdown.appendChild(dropdownContent);
}

loadCss();
createMenu();