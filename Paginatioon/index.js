const listStudent = [{
        id: 1,
        name: "Tan",
        age: 16,
        score: 8
    },
    {
        id: 2,
        name: "Tan",
        age: 16,
        score: 8
    },
    {
        id: 3,
        name: "Tan",
        age: 16,
        score: 8
    },
    {
        id: 4,
        name: "Tan",
        age: 16,
        score: 8
    },
    {
        id: 5,
        name: "Tan",
        age: 16,
        score: 8
    },
    {
        id: 6,
        name: "Tan",
        age: 16,
        score: 8
    },
    {
        id: 7,
        name: "Tan",
        age: 16,
        score: 8
    },
    {
        id: 8,
        name: "Tan",
        age: 16,
        score: 8
    },
    {
        id: 9,
        name: "Tan",
        age: 16,
        score: 8
    },
    {
        id: 10,
        name: "Tan",
        age: 16,
        score: 8
    },
    {
        id: 11,
        name: "Tan",
        age: 16,
        score: 8
    },
    {
        id: 12,
        name: "Tan",
        age: 16,
        score: 8
    },
    {
        id: 13,
        name: "Tan",
        age: 16,
        score: 8
    },
    {
        id: 14,
        name: "Tan",
        age: 16,
        score: 8
    },
    {
        id: 15,
        name: "Tan",
        age: 16,
        score: 8
    },
    {
        id: 16,
        name: "Tan",
        age: 16,
        score: 8
    },
    {
        id: 17,
        name: "Tan",
        age: 16,
        score: 8
    },
    {
        id: 18,
        name: "Tan",
        age: 16,
        score: 8
    },
    {
        id: 19,
        name: "Tan",
        age: 16,
        score: 8
    },
    {
        id: 20,
        name: "Tan",
        age: 16,
        score: 8
    },
    {
        id: 21,
        name: "Tan",
        age: 16,
        score: 8
    },
    {
        id: 22,
        name: "Tan",
        age: 16,
        score: 8
    },
    {
        id: 23,
        name: "Tan",
        age: 16,
        score: 8
    },
    {
        id: 24,
        name: "Tan",
        age: 16,
        score: 8
    },
    {
        id: 25,
        name: "Tan",
        age: 16,
        score: 8
    },
    {
        id: 26,
        name: "Tan",
        age: 16,
        score: 8
    },
    {
        id: 27,
        name: "Tan",
        age: 16,
        score: 8
    },
    {
        id: 28,
        name: "Tan",
        age: 16,
        score: 8
    },
    {
        id: 29,
        name: "Tan",
        age: 16,
        score: 8
    },
    {
        id: 30,
        name: "Tan",
        age: 16,
        score: 8
    }
]

// Default
let defaultItem = 75
let defaultPage = 1
let itemPerPage = 3

function onPageClick(id) {
    const list = document.getElementsByClassName("active")[0].className = ''
    document.getElementById(id).className = 'active'
    const page = document.getElementById("amountPage").value
    renderPage(id, page)
    itemPerPageCurrent = document.getElementById("amountPage").selectedIndex + 2
    renderPagination(id, itemPerPageCurrent, defaultItem)
}

function onChangeOption(itemPerPage) {
    document.getElementById("amountPage").selectedIndex = itemPerPage - 2
    const id = document.getElementsByClassName("active")[0].id
    renderPage(id, itemPerPage)
    renderPagination(1, itemPerPage, defaultItem)
    console.log({
        itemPerPage
    })

}

function getPageHTML(currentPage, totalPage) {
    paginationData = ''

    currentPage = +currentPage
    let start = currentPage - 2
    let end = currentPage + 2
    for (let i = start; i <= end; i++) {
        if (i === currentPage) {
            paginationData = paginationData + `<a id="${+i}" class="active" onclick="onPageClick(this.id)" href="#">${+i}</a>`
        } else {
            if (i >= 1 && i <= totalPage) {
                paginationData = paginationData + `<a id="${+i}" onclick="onPageClick(this.id)" href="#">${+i}</a>`
            }
        }
    }

    // insert thrre Dot Left
    if (currentPage - 3 >= 1) {
        paginationData = `
        <a id="1"  href="#" onclick="onPageClick(this.id)" href="#">1</a>
        <a class="three-dot" href="#">...</a>
        ` + paginationData;
    }
    // insert thrre Dot Right
    if (totalPage - 3 >= currentPage) {
        paginationData = paginationData + `
            <a class="three-dot" href="#">...</a>
            <a id="${totalPage}"  href="#" onclick="onPageClick(this.id)" href="#">${totalPage}</a>
            
        `
    }
    // insert next button
    // insert previous button
    if (currentPage > 1) {
        paginationData = `<a onclick="onPageClick(${currentPage-1})" href="#">❮</a>` + paginationData;
    }
    if (currentPage < totalPage) {
        paginationData = paginationData + `<a onclick="onPageClick(${currentPage+1})" href="#">❯</a>`
    }
    return paginationData
}

function renderPagination(currentPage, itemPerPage, defaultItem) {
    itemPageHTML = getPageHTML(currentPage, Math.floor(defaultItem / itemPerPage));
    document.getElementById('itemPage').innerHTML = itemPageHTML

}
// Get Student HTML
function getAllStudent(page, size) {
    const selectedStudent = listStudent.slice((page - 1) * size, page * size)
    data = `<tr class="row">
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Score</th>
            </tr>`
    selectedStudent.forEach(x => {
        data += `
        <tr class="row">
            <td>${x.id}</td>
            <td>${x.name}</td>
            <td>${x.age}</td>
            <td>${x.score}</td>
        </tr>
            `
    })
    return data
}

function renderPage(page, size) {
    //defalut page =1 size =3
    if (!page) {
        page = 1
    }
    if (!size) {
        size = 3
    }
    document.getElementById("table").innerHTML = getAllStudent(page, size)
}
// renderPage()
renderPagination(defaultPage, itemPerPage, defaultItem)