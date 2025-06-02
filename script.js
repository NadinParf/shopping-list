/* Новые элементы должны добавляться в список по нажатию на Enter */
const sendInput = document.querySelector('#input');
const itemsContainer = document.querySelector('.container');


function addEvent (){
    const itemsText = sendInput.value;
    const newItem = document.createElement('div');
    newItem.classList.add('items');
    newItem.textContent = itemsText;
    newItem.addEventListener('click', function(){
        newItem.classList.toggle('done');
    })

    if (itemsText != ''){
        itemsContainer.append(newItem);
    }
    sendInput.value = '';
}



sendInput.addEventListener('keydown', function(event) {
    
    if (event.key == 'Enter') {
        addEvent ();
    }
    
});


/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */


/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */
