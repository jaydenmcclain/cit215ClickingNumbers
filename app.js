var data = ["red", "green", "blue"];
let x = 0
let y = 0
let z = 0
function colors(data){
    const that = this;
    this.name = data;
    this.ele = document.createElement("div");
    this.ele.style.height = "100px";
    this.ele.style.width = "200px";
    this.ele.style.borderRadius = "10px";
    this.ele.style.fontSize = "18px";
    this.ele.style.textAlign = "center";
    this.ele.style.lineHeight = "100px";
    this.ele.style.backgroundColor = data;
    this.ele.innerHTML= 0
    this.ele.addEventListener("click", function (){
        that.increment();
    })
    document.body.appendChild(this.ele)
}

colors.prototype.increment = function () {
    if(this.name==="red"){
        x++
        this.ele.innerHTML= x
    }else if (this.name==="green"){
        z++
        this.ele.innerHTML= z
    }else{
        y++
        this.ele.innerHTML= y
    }
};

for( let i=0; i<data.length; i++){
    let box = new colors(data[i])
}

