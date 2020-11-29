function random(){
    let root = document.getElementById('root');
    root.className = 'container my-5 mx-auto';

        let randomContainer = document.createElement('div');
        randomContainer.className = 'jumbotron random-container text-center';
        root.appendChild(randomContainer);

            let randomCreatorText = document.createElement('h1');
            randomCreatorText.innerHTML = 'Click on the button to create a number with 8 unique digits';
            randomCreatorText.className = 'mb-5 lead font-weight-bold text-muted';

            let createRandomButton = document.createElement('div');
            createRandomButton.className = 'btn btn-sm btn-primary lead py-2 px-5';
            createRandomButton.innerHTML = 'Create Random Number';
            

            let randomOutputDiv = document.createElement('div');
            randomOutputDiv.className = 'lead my-5';

                let outputRandom = document.createElement('p');
                outputRandom.innerHTML = 'The Created Number : ';
                
                let randomOutputNumber = document.createElement('span');
                randomOutputNumber.className = 'font-weight-bold';

                outputRandom.appendChild(randomOutputNumber);

            randomOutputDiv.appendChild(outputRandom, randomOutputNumber);

        randomContainer.append(randomCreatorText, createRandomButton, randomOutputDiv);

        createRandomButton.addEventListener('click', ()=>{
            let original = [];
            let first = 0;
            while(first === 0){
                first = parseInt(Math.random()*10);
            }
            original.push(first);
            randomEightDigitNumberGenerator(original)
            randomOutputNumber.innerHTML = original.join('');
        });

    function randomEightDigitNumberGenerator(arr){
        randomNumberHelper(arr);
    }

    function randomNumberHelper(arr){
        if(arr.length === 8)
            return;

        let generatedNumber = parseInt(Math.random()*10);

        if(arr.includes(generatedNumber))
            randomNumberHelper(arr);
        else{
            arr.push(generatedNumber);
            randomNumberHelper(arr);
        }
    }


}


random();