function checkValidate(id,value){
    console.log({value})
    if(value===''||value === null){
        (document.getElementById(`icon-${id}`).className='')
        document.getElementById(id).className='field error'
        console.log({id})
        switch(id){
            case 'ffirstname':
                document.querySelector(`#alert-firstname`).style.display='none'
                break;

            case 'flastname':
                document.querySelector(`#alert-lastname`).style.display='none'
                break;

            case 'fcontact':
                document.querySelector(`#alert-contact`).style.display='none'
                break;

            case 'fpass':
                document.querySelector(`#alert-pass`).style.display='none'
                break;

            default:
        }   
    }
    
}
function onFocus(id){
    console.log("focus")
        document.getElementById(`icon-${id}`).className='hidden-icon'
        document.getElementById(id).className='field'
        switch(id){
            case 'ffirstname':
                document.querySelector(`#alert-firstname`).style.display='block'
                break;
            case 'flastname':
                document.querySelector(`#alert-lastname`).style.display='block'
                break;
            case 'fcontact':
                document.querySelector(`#alert-contact`).style.display='block'
                break;

            case 'fpass':
                document.querySelector(`#alert-pass`).style.display='block'
                break;

            default:
        }

}

function onLoad(){
    console.log("VO")
    document.querySelector(`#alert-firstname`).style.display='none'
}