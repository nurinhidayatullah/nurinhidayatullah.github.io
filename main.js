function CustomAlert() {
    
    this.render = function() {
        let winW = window.innerWidth;
        let winH = window.innerHeight;
        let dialogoverlay = document.getElementById('dialogoverlay');
        let dialogbox = document.getElementById('dialogbox');
        let palindrome = '';
        let checkEntered = document.getElementById('txtNum').value.toLowerCase();
        for(let i = checkEntered.length-1; i >= 0; i--) {
            palindrome += checkEntered[i];
        }
        if(checkEntered.length === 0) {
            document.getElementById('dialogboxbody').innerHTML = `Please input String or Number`
        }
        else if(palindrome === checkEntered) {
            document.getElementById('dialogboxbody').innerHTML = `${checkEntered} is a Palindrome`
        } else {
            document.getElementById('dialogboxbody').innerHTML = `${checkEntered} not a Palindrome`
        }
         
        dialogoverlay.style.display = "block";
        dialogoverlay.style.height = winH+"px";
        
        dialogbox.style.left = (winW/2) - (550 * .5) + "px";
        dialogbox.style.top = "100px";
        dialogbox.style.display = "block";
        
        document.getElementById('dialogboxhead').innerHTML = "Your result is: ";
        document.getElementById('dialogboxfoot').innerHTML = '<button class="button" onclick="Alert.ok()">OK</button>';
    }
    
    this.ok = function() {
        document.getElementById('dialogbox').style.display = "none";
        document.getElementById('dialogoverlay').style.display = "none";
    }
}

var Alert = new CustomAlert();

function CustomAlert2() {
    
    this.render = function() {
        
        let winW = window.innerWidth;
        let winH = window.innerHeight;
        let dialogoverlay = document.getElementById('dialogoverlay');
        let dialogbox = document.getElementById('dialogbox');
        let result = [];
        let count = 0;
        let generateFrom = document.getElementById('inputFrom').value;
        let generateTo = document.getElementById('inputTo').value;
        if(generateFrom.length === 0) {
            document.getElementById('dialogboxbody').innerHTML = `From box must be a number`
        } else if (generateTo.length === 0) {
            document.getElementById('dialogboxbody').innerHTML = `To box must be a number`
        } else if (parseInt(generateFrom) > parseInt(generateTo)) {
            document.getElementById('dialogboxbody').innerHTML = `Invalid Number, From must be less than To`
        } else if (parseInt(generateTo) > parseInt(generateFrom)) {
            for(let i = parseInt(generateFrom); i <= parseInt(generateTo); i++) {
                let palindrome = '';
                for(let j = i.toString().length - 1; j >=0; j--) {
                    palindrome += i.toString()[j];
                }
                if(palindrome == i) {
                    result.push(palindrome);
                    count++
                }
            }
            document.getElementById('dialogboxbody').innerHTML = `${result} Total ${count} palindrome's numbers` ;
        }
         
        dialogoverlay.style.display = "block";
        dialogoverlay.style.height = winH+"px";
        
        dialogbox.style.left = (winW/2) - (550 * .5) + "px";
        dialogbox.style.top = "100px";
        dialogbox.style.display = "block";
        
        document.getElementById('dialogboxhead').innerHTML = "Your result is: ";
        document.getElementById('dialogboxfoot').innerHTML = '<button class="button" onclick="Alert.ok()">OK</button>';
    }
    
    this.ok = function() {
        document.getElementById('dialogbox').style.display = "none";
        document.getElementById('dialogoverlay').style.display = "none";
    }
}

var Alert2 = new CustomAlert2();

