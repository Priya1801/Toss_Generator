
    var button = document.querySelector("button");
    button.addEventListener('click', generate);

    function generate(){
        var ranNum = Math.floor(Math.random() * 2) + 1;
        var ranImg = "Head" + ranNum + ".svg";
        var coin2 = "Images/" + ranImg;

        var img = document.querySelectorAll("svg image")[0];
        img.setAttribute("href", coin2);

        if(ranNum === 1){
            //head
            document.querySelector("h1").innerHTML = "It's a Head 🤍";
        }
        else{
            //tail
            document.querySelector("h1").innerHTML = "It's a Tail 💛"
        }
    }

    