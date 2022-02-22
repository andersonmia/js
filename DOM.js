function arrangeNodes() {
    let primaryDivs = document.getElementsByTagName('div')
    let classListA = document.createElement('ol')
    let classListB = document.createElement('ol')
    let classBDiv = primaryDivs[5]
    let classADiv = primaryDivs[6]
    for (i = 0; i < 5; i++) {
        if(primaryDivs[i].innerHTML != ""){

        
        let newLi = document.createElement('li')
        let newTxt = document.createTextNode(primaryDivs[i].innerHTML)
        newLi.appendChild(newTxt)
        console.log(newLi)
        if (i < 3) {
            classListB.appendChild(newLi)
        } else {
            classListA.appendChild(newLi)
        }
        primaryDivs[i].innerHTML = ""
    }
    }
    classADiv.appendChild(classListA)
    classBDiv.appendChild(classListB)
}

