let count = 0;
function container(callback) {
    count++;
    if (count > 10) {
        let containernum = document.getElementById("containernum");
        containernum.innerHTML = "Happy independence day";
        containernum.style.backgroundColor="green"
        clearInterval(user);
    } else {
        console.log(count);
        let containernum = document.getElementById("containernum");
        containernum.innerHTML = count;
        callback();
    }
}

let user = setInterval(() => {
    container(() => {});
}, 1000);