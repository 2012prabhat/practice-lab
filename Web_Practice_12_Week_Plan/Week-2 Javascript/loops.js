let colors = ["red","blue","yellow"];

for(let i=0;i<colors.length;i++){
    console.log(colors[i])
}


for(let color in colors){
    console.log(color) // it will print idx
}

for(let color of colors){
    console.log(color); // it will print element
}


colors.forEach((color,idx)=>{
    console.log(color+" "+idx)
})


console.log(Array.isArray(colors))