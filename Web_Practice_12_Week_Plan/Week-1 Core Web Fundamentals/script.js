let darkThemeBtn = document.getElementById("darkThemeBtn");
darkThemeBtn.addEventListener("click",()=>{
    if(document.body.classList.contains('dark')){
      document.body.classList.remove('dark');
      darkThemeBtn.innerText = "Enable Dark Theme"
    }else{
        document.body.classList.add('dark');
        darkThemeBtn.innerText = "Enable Light Theme"
    }
})