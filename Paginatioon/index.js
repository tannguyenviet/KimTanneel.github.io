const listStudent =[
{id:1,name:"Tan",age:16,score:8},
{id:2,name:"Tan",age:16,score:8},
{id:3,name:"Tan",age:16,score:8},
{id:4,name:"Tan",age:16,score:8},
{id:5,name:"Tan",age:16,score:8},
{id:6,name:"Tan",age:16,score:8},
{id:7,name:"Tan",age:16,score:8},
{id:8,name:"Tan",age:16,score:8},
{id:9,name:"Tan",age:16,score:8},
{id:10,name:"Tan",age:16,score:8},
{id:11,name:"Tan",age:16,score:8},
{id:12,name:"Tan",age:16,score:8},
{id:13,name:"Tan",age:16,score:8},
{id:14,name:"Tan",age:16,score:8},
{id:15,name:"Tan",age:16,score:8}
]



function onPageClick(id){
    const list = document.getElementsByClassName("active")[0].className=''
    document.getElementById(id).className='active'
    const page =document.getElementById("amountPage").value
    renderPage(id,page)
}

function onChangeOption(value){
    document.getElementById("amountPage").selectedIndex =value-2
    const id = document.getElementsByClassName("active")[0].id
    const page = value
    renderPage(id,page)
  

}
// Get Student HTML
function getAllStudent(page,size){
    const selectedStudent =listStudent.slice((page-1)*size,page*size)
    data =  `<tr class="row">
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Score</th>
            </tr>`
    selectedStudent.forEach( x =>{
        data +=  `
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

function renderPage(page,size){
    //defalut page =1 size =3
    if(!page){
        page = 1
    }
    if(!size){
        size =3
    }
    document.getElementById("table").innerHTML = getAllStudent(page,size)
}
// renderPage()
