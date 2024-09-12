       // <!-- Cat Example Code -->
    
       let bulbImg=document.getElementById("bulb-img");
       let catImg=document.getElementById("cat-img");

       let bulbOff=document.getElementById("off-btn");
       let bulbOn=document.getElementById("on-btn")
       let liveStatus=document.getElementById("status")

       function offBulb(){
           bulbImg.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png"
           catImg.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png"
           liveStatus.textContent="Switched Off"
           liveStatus.style.color="red"
           bulbOff.style.background="grey"
           bulbOff.style.cursor="no-drop"
           bulbOn.style.background="green"
           bulbOn.style.cursor="pointer"
       }
       function onBulb(){
           bulbImg.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png"
           catImg.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png"
           liveStatus.textContent="Switched On"
           liveStatus.style.color="green"
           bulbOff.style.background="red"
           bulbOn.style.background="grey"
           bulbOn.style.cursor="no-drop"
           bulbOff.style.cursor="pointer"

       }

       //  Number Guess Code


       let randomNumber=Math.round(Math.random()*100);
       let liveStatus1=document.getElementById("status1")

       let popupMsg=document.querySelector(".warndiv")
       let value=0;


       function checkValue(){
           let userInput=(document.getElementById("user-input").value); 
           if(value < 5){
                if(userInput>randomNumber){
                    liveStatus1.textContent="Value too high 📈"
                    liveStatus1.style.color="orange"
                }
                else if(userInput<randomNumber){
                    liveStatus1.textContent="Value too low 📉"
                    liveStatus1.style.color="skyblue"
                }
                else if(userInput==randomNumber){
                    liveStatus1.textContent="Congrats🎉, you guessed right 🚀"
                    liveStatus1.style.color="yellowgreen"
                }
                else{
                    liveStatus1.textContent="Please, enter a valid input! "
                    liveStatus1.style.color="red"
                }
            value=value+1;
        }
        else{
            popupMsg.style.display="flex";
        }
       }