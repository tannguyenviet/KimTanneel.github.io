
function onButtonMidClick(type){
    if(type==='present-option'){
        document.getElementById('optionPopUpId')
    }
    const stringButton = 'btn-'+ type;
    const buttonIconElement =document.getElementById(stringButton);
    console.log(buttonIconElement);
    if (buttonIconElement.className.includes('active')){
        buttonIconElement.className='btn-icon'
    }
    else{
        buttonIconElement.className='btn-icon active'
    }
}
function onPopUpMidClick(type){
    const stringPopUp = 'popup-'+type;
    const popUpElement = document.getElementById(stringPopUp);
    if(popUpElement.className.includes('active')){
       
        popUpElement.className='material-icons-outlined present'
    }
    else{
        const listPresentElement = document.querySelectorAll('.midle .btn-icon .present');
        const arrPresentElement = [...listPresentElement];
        arrPresentElement.forEach(x => x.className = 'material-icons-outlined present');
        popUpElement.className='material-icons-outlined present active'
    }
}

function onNavShow(type){
    const stringNavId = 'sidebar-'+type;
    const navInfoElement = document.getElementById(stringNavId);
    const navSideElement = document.getElementById('mySidenav');
    const listNavInfoElement = document.getElementsByClassName('sidebar-info');
    const arrNavInfoElement = [...listNavInfoElement];
    const navSideElementActive = arrNavInfoElement.find(x => x.className.includes('active'));
    
    const listButtonNavElement = document.querySelectorAll('.wrap-manager .btn-icon');
    const arrButtonNavElement = [...listButtonNavElement];
   
    const btnnavWillActive = document.getElementById('btn-nav-'+type)
    if(navSideElement.className.includes('active')){ // 
        navSideElementActive.className ='sidebar-info';
        arrButtonNavElement.forEach(x => x.className = 'btn-icon')
        document.getElementById('wrap-main').style.marginRight='0px'
        
        if(navSideElementActive.id===stringNavId){ // nav side đang hiên + ấn lại vào nav cũ (đóng nav)
            navSideElement.className='sidenav'

        }
        else{ // nav side đang hiện + người dùng click vào nav-info khác
            navInfoElement.className = 'sidebar-info active'
            btnnavWillActive.className ='btn-icon active'
            document.getElementById('wrap-main').style.marginRight='345px'
        }
    }
    else{ // nav side không tồn tại
        navSideElement.className = 'sidenav active'
        navInfoElement.className = 'sidebar-info active'
        btnnavWillActive.className ='btn-icon active'
        document.getElementById('wrap-main').style.marginRight='345px'
    }
}

function closeNavSide(){
    console.log('click');
    document.getElementById('mySidenav').className = 'sidenav';
}