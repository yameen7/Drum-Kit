// var num = document.querySelectorAll(".drum").length;

// for(var i=0; i<num; i++)
// {
//     document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        
//         var press = this.textContent;

//         playSound(press);
        
//         btnAnimation(press);
//     })
// }
// document.addEventListener("keypress",(event)=>{
//     var keyPress = event.key;

//     playSound(keyPress);

//     btnAnimation(keyPress);
// })

$(".drum").click(function(){
    
    var press = this.textContent;
    playSound(press); 
    btnAnimation(press);
})

$("html").keypress(function(event){

    var keyPress = String.fromCharCode(event.which).toLowerCase();
    playSound(keyPress);
    btnAnimation(keyPress);

})

function playSound(key)
{
    switch(key)
        {
            case "w":
                var aud = new Audio("sounds/tom-1.mp3");
                aud.play();
                break;

            case "a":
                var aud = new Audio("sounds/tom-2.mp3");
                aud.play();
                break;

            case "s":
                var aud = new Audio("sounds/tom-3.mp3");
                aud.play();
                break;
            
            case "d":
                var aud = new Audio("sounds/tom-4.mp3");
                aud.play();
                break;

            case "j":
                var aud = new Audio("sounds/snare.mp3");
                aud.play();
                break;
            
            case "k":
                var aud = new Audio("sounds/crash.mp3");
                aud.play();
                break;

            case "l":
                var aud = new Audio("sounds/kick-bass.mp3");
                aud.play();
                break;

            default:
                
        }
}

function btnAnimation(key)
{
    var btn =document.querySelector("."+key);
    if(btn)
    {
        btn.classList.add("pressed");
        setTimeout(function(){
            //$("."+key).removeClass("presses");
            btn.classList.remove("pressed")
        },200);
    }
}