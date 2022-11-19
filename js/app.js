const textarea = document.querySelector('textarea'),
    fileNmae  = document.querySelector('input'),
    saveAs = document.querySelector('select'),
    button = document.querySelector('.save-btn');
    
button.addEventListener('click' , function(){
        const blob =  new Blob([textarea.value], { type: saveAs.value })
        let url  =  URL.createObjectURL(blob);
        const a = document.createElement("a")
        a.download = fileNmae.value
        a.href = url
        a.click()
})

