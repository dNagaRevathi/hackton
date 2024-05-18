

const expense = () => {
    const amount = parseFloat(document.getElementById("amount").value)
    const category = document.getElementById("category").value
    const date = document.getElementById("date").value

    const tbody = document.getElementById("tbody")

    console.log(amount)
    if (amount == "" || category == "" || date == "") {
        alert("Please enter all vaues")
    }
    else {
        tr1 = document.createElement("tr")
        td1 = document.createElement("td")
        td2 = document.createElement("td")
        td3 = document.createElement("td")

        img = document.createElement("img")
        img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt71t8vqByoNJ9LEkkIgbia0gf5eiSHkw-ODLaSo_5rA&s"
        img.classList.add("img1")
        // td4 = document.createElement("td")
        // console.log(td1)
        tbody.appendChild(tr1)
        // tbody.appendChild(tr1)
        //    console.log(tbody.appendChild(tr1))
        tr1.classList.add("sty")
        td1.classList.add("sty")

        td1.textContent = amount
        td2.textContent = category
        td3.textContent = date
        tr1.appendChild(td1)
        tr1.appendChild(td2)
        tr1.appendChild(td3)
        tr1.appendChild(img)
        console.log(td1.value)
        // tr4.textContent= `&#9249;`
        img.onclick = () => {
            console.log("delete")
            tr1.removeChild(td1)
            tr1.removeChild(td2)
            tr1.removeChild(td3)
            tr1.removeChild(img)
        }
        // amount.value=''


    }
}
