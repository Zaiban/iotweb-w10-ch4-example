console.log('Starting');

const boxDiv = document.getElementById("box-div");


let startTime = Date.now();

console.log('startTime: ', startTime)

const updateYourTime = (timeDiff) => {
    const timeP = document.getElementById("time-p");

    timeP.textContent = `Your time: ${timeDiff/1000} s`;
}

boxDiv.onclick = () => {
    console.log('clicked box')

    const clickTime = Date.now();

    const timeDiff = clickTime - startTime;

    console.log(timeDiff);

    updateYourTime(timeDiff);

    startTime = Date.now();

}