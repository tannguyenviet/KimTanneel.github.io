// Destructoring to get createStore funcion of redux
const {createStore} = window.Redux;

initState = ['Có không giữ mất đừng tìm','Sài gòn đau lòng quá'];

const songReducer = (state = initState,action) =>{
    switch (action.type) {
        case 'ADD_SONG': {
            const newList = [...state];
            newList.push(action.payload);
            
            return newList;
        }
    
        default:
            break;
    }
}

// create Store
const store = createStore(songReducer);
const renderListSong = (songs) =>{
    if(!Array.isArray(songs) || songs.length===0) return;
    const ulSongElement = document.querySelector('#ulSongId');
    if(!ulSongElement) return;
    ulSongElement.innerHTML='';
    songs.forEach(song => {
        let liMusicElement = document.createElement('li');
        liMusicElement.textContent = song ;
        ulSongElement.appendChild(liMusicElement);
    });
}

renderListSong(initState);

const formMusicElement = document.querySelector('#formSongId');
if(formMusicElement){
    const handleFormMusic = (e) => {
        // prevent form submit and reload page
        e.preventDefault();
        
        const inputMusicElement = document.querySelector('#inputSongId');
        if(!inputMusicElement) return;
        
        const action ={type:'ADD_SONG',payload:inputMusicElement.value}
        // throw action
        store.dispatch(action)

        // reset value after submit form
        inputMusicElement.value ='';
    }
    formMusicElement.addEventListener('submit',handleFormMusic);
}

// when state change do something (ex: renderListSong)
store.subscribe (()=>{
    renderListSong(store.getState());
})