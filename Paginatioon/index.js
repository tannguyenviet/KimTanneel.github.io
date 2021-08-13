function onPageClick(id){
    const list = document.getElementsByClassName("active")
    list[0].className = ''
    document.getElementById(id).className='active';
}