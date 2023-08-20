const body = document.querySelector('body');

// HEADER time

// Create headerDiv and set its class
const headerDiv = document.createElement('div');
headerDiv.setAttribute("class","header");

// Create titleDiv and set its class
const titleDiv = document.createElement('div');
titleDiv.setAttribute("class","title");

//Create bigDiv and append it to titleDiv
const bigDiv = document.createElement('div');
bigDiv.setAttribute("class","big");
bigDiv.textContent="Pratique le français avec Maryam";
titleDiv.appendChild(bigDiv);

//Create smallDiv and append it to titleDiv
const smallDiv = document.createElement('div');
smallDiv.setAttribute("class","small");
smallDiv.textContent="Le cours de français où tu pourras pratiquer l'oral tout en découvrant la culture française.";
titleDiv.appendChild(smallDiv);

// Create flagDiv and set its class
const flagDiv = document.createElement('div');
flagDiv.setAttribute("class","flag");

// Create imgTag with flag and append it to flagDiv
const imgTag = document.createElement('img');
imgTag.setAttribute("src","french-flag-brushed.png");
imgTag.setAttribute("alt","french flag");
flagDiv.appendChild(imgTag)

// Append titleDiv and flagDiv to headerDiv
headerDiv.appendChild(titleDiv);
headerDiv.appendChild(flagDiv);

// add the headerDiv and its content into the DOM, in first place
document.body.insertBefore(headerDiv, body.firstChild);


// MENU time

// Create the menuDiv and set its class
const menuDiv = document.createElement('div');
menuDiv.setAttribute("class","menu");

// Create langDiv, set its class, add its text and append it to menuDIv
const langDiv = document.createElement('div');
langDiv.setAttribute("class","lang");
langDiv.textContent="FR";
menuDiv.appendChild(langDiv);

// Create menuTabsDiv and sets its class
const menuTabsDiv = document.createElement('div');
menuTabsDiv.setAttribute("class","menu-tabs");

// Create all the tabs with a for loop
const menuText=["Accueil","Qui je suis ?","Ma méthode","Tarifs","Cours d'essai","Contact"];
const menuLink=["index.html","index.html","index.html","index.html","index.html","index.html"]
for(i=0;i<menuText.length;i++){
    // Create the tabDiv and set its class
    const tabDiv = document.createElement('div');
    tabDiv.setAttribute("class","tab");
    //Create the linkA, add its href and its textcontent
    const linkA = document.createElement('a');
    linkA.setAttribute("href",menuLink[i]);
    linkA.textContent=menuText[i];
    // Append linkA to tabDiv
    tabDiv.appendChild(linkA);
    // Append tabDiv to menuTabsDiv
    menuTabsDiv.appendChild(tabDiv);
}


// Append menuTabsDiv to menuDiv
menuDiv.appendChild(menuTabsDiv);

// Function to appaend after
function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

// Append menuDiv to body after headerDiv
insertAfter(headerDiv,menuDiv);

// FOOTER time

const footerDiv = document.createElement('div');
footerDiv.setAttribute("class","footer");
footerDiv.textContent="Siteweb réalisé par moi-même.";
document.body.appendChild(footerDiv);