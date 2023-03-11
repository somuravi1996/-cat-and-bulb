function onButtonClicked(){
     document.getElementById("bulb-go-on-img").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png"
    document.getElementById("cat-image").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png"
    document.getElementById("switchButton").style.color="green";
    document.getElementById("switchButton").textContent="Switched On";
    document.getElementById("offSwitch").style.backgroundColor="gray"
    document.getElementById("onSwitch").style.backgroundColor="green"
    
}
function onOffButtonClicked(){
    console.log("off button CLicked")
     document.getElementById("bulb-go-on-img").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png"
    document.getElementById("cat-image").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png"
    document.getElementById("switchButton").style.color="red";
    document.getElementById("switchButton").textContent="Switched Off";
    document.getElementById("onSwitch").style.backgroundColor="gray"
    document.getElementById("offSwitch").style.backgroundColor="red"




}