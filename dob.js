function dob(){
    let root = document.getElementById('root');

    let dobContainer = document.createElement('div');
    dobContainer.className = 'mx-auto my-5 jumbotron text-center';
    root.appendChild(dobContainer);

    let headerText = document.createElement('h1');
    headerText.innerHTML = 'Select the date to get desired data';
    headerText.className = 'mb-5 lead font-weight-bold text-muted';

    let inputDiv = document.createElement('div');
    inputDiv.className = "lead mb-5";

        let datelabel = document.createElement('label');
        datelabel.setAttribute('for', "date");
        datelabel.innerHTML = 'Enter you Birth-Date : ';

        let dateElement = document.createElement('input');
        dateElement.setAttribute('type', 'date')
        dateElement.setAttribute('id', "date");

    inputDiv.append(datelabel, dateElement)

    let createRandomButton = document.createElement('div');
    createRandomButton.className = 'btn btn-sm btn-primary lead py-2 px-5';
    createRandomButton.innerHTML = 'Get Data';

    let outputDiv = document.createElement('div');
    outputDiv.className = "my-5 row";

        let disclaimer = document.createElement('p');
        disclaimer.className = 'lead my-5'
        disclaimer.innerHTML = 'All values are rounded off to the bottom.'

        let dayCount = document.createElement('span');
        dayCount.className = 'font-weight-bold col-md-6';
        dayCount.innerHTML = 'Days : ';

        let yearDiff = document.createElement('span');
        yearDiff.className = 'font-weight-bold col-md-6';
        yearDiff.innerHTML = 'Years :';
        let monthDiff = document.createElement('span');
        monthDiff.className = 'font-weight-bold col-md-6';
        monthDiff.innerHTML = 'Months :';

        let minutes = document.createElement('span');
        minutes.className = 'font-weight-bold col-md-6';
        minutes.innerHTML = 'minutes :';

        let seconds = document.createElement('span');
        seconds.className = 'font-weight-bold col-md-6';
        seconds.innerHTML = 'Seconds:';

        let miliseconds = document.createElement('span');
        miliseconds.className = 'font-weight-bold col-md-6';
        miliseconds.innerHTML = 'miliSeconds:';



    outputDiv.append(dayCount, yearDiff, monthDiff, minutes, seconds, miliseconds);
    dobContainer.append(headerText, inputDiv, createRandomButton, disclaimer, outputDiv)


    createRandomButton.addEventListener('click', ()=>{

        let inputDate = new Date(dateElement.value + "T00:00:00");
        let currentDate = new Date();
        if(dateElement.value === ''){
            alert('Enter Date')
        }
        else if(inputDate>currentDate)
            alert("DOB must be in the past");
        else{
            // let years = currentDate.getFullYear() - inputDate.getFullYear();

            // yearDiff.innerHTML = 'Years : ' + years;

            let milliSecDiff = currentDate.getTime() - inputDate.getTime();
            miliseconds.innerHTML = 'MiliSeconds : ' + milliSecDiff;

            let secondDiff = parseInt(milliSecDiff/(1000));
            seconds.innerHTML = 'Seconds : ' + secondDiff;

            let minutesDiff = parseInt(milliSecDiff/(1000*60));
            minutes.innerHTML = 'Minutues : ' + minutesDiff;

            let days = parseInt(milliSecDiff/(1000*60*60*24));
            dayCount.innerHTML = 'Days : ' + days;

            let years = parseInt(days/365);
            yearDiff.innerHTML = 'Years : ' + years;

            let months = (currentDate.getFullYear() - inputDate.getFullYear()) * 12 + (currentDate.getMonth() - inputDate.getMonth());
            monthDiff.innerHTML = 'Months : ' + months;
            
            


        }
        
    })

}


dob();