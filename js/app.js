const boxes = document.querySelectorAll('.parent div');

let filledBoxes = [];
let boxesArray = [1,2,3,4,5,6,7,8,9];

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click',(e)=> {


        let index = boxesArray.indexOf(parseInt(e.target.dataset.name));
        // console.log(index+1);

        boxesArray.splice((index),1);
        e.target.style.backgroundColor = 'red';
        // console.log(boxesArray);

        setTimeout(()=>{
            let randomPick = Math.floor(Math.random()*10)%boxesArray.length;
            boxes[randomPick].style.backgroundColor = 'green';
            index = boxesArray.indexOf(boxes[randomPick]);
            boxesArray.splice(index,1);
            console.log(boxesArray);


        },1000)

    })
}


