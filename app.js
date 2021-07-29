class Profile{
    constructor(fullname, position, salary, officeid){
        this.fullname = fullname;
        this.position = position;
        this.salary = salary;
        this.officeid = officeid;
    }
    
}

//Ui features
class UI{

    addList(list){
        const lists = document.querySelector('#list')
        //create list
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${list.fullname}</td>
        <td>${list.position}</td>
        <td>${list.salary}</td>
        <td>${list.officeid}</td>
        <td><a href="#" class="delete">x</a></td>
        `;
        lists.appendChild(tr);
    }

    showAlert(message, className){
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        //
        const container = document.querySelector('.container');
        const h3 = document.querySelector('h3');
        //to insert into the dom
        container.insertBefore(div, h3);

        //setting timeout
        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 2000);
    }

    clearField(){
    const fullname = document.getElementById('fullname').value="";
    const position = document.getElementById('position').value="";
    const salary = document.getElementById('salary').value="";
    const officeid = document.getElementById('officeid').value="";

    }

    deleteList(target){
        if(target.className === 'delete'){
            target.parentElement.parentElement.remove();
        }
    }
}

//
document.getElementById('listform').addEventListener('submit', (e)=>{


    //validate
    const fullname = document.getElementById('fullname').value;
    const position = document.getElementById('position').value;
    const salary = document.getElementById('salary').value;
    const officeid = document.getElementById('officeid').value;

     //instantiating the both ui
     const profile = new Profile(fullname, position, salary, officeid);
     const ui = new UI();

    //console.log(fullname, position, salary, officeid)
    //condition
    if(fullname === '' || position === ''|| salary === '' || officeid === ''){
        ui.showAlert('Please Input all fields!', 'alert-danger text-center mt-3');
        //
        
    }else{
        //adding list
        ui.addList(profile)
        //clear all fields
        ui.clearField();
        //alert message
        ui.showAlert('Added Successfully', 'alert-success text-center mt-3')
    }

    e.preventDefault();
})

//deleting Element
document.getElementById('list').addEventListener('click', (e)=>{
    const ui = new UI();

    ui.deleteList(e.target);

    ui.showAlert('List has Been Removed Successfully', 'alert-dark text-center mt-3')

    e.preventDefault();
})


//clear all table
document.getElementById('clearBtn').addEventListener('click', ()=>{
    document.getElementById('list').remove();
})

//time counter for workers
const time = document.querySelector('#time');

//
const launchDate = new Date('july 01, 2022 02:00:00').getTime();
//console.log(launchDate)
const intv1 = setInterval (() => {
    //get today date and time(ms)
    const now = new Date().getTime();
    
    //distance from now to the launchDate date
    const distance = launchDate - now;
    console.log(distance)
    //Time cal
    const Days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const Hours = Math.floor((distance % (1000 * 60 * 60 *24)) / (1000 * 60 * 60));
    const Mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const Seconds = Math.floor((distance % (1000 * 60)) / 1000);


    // display result
    time.innerHTML = `
    <p>Time:</p>
 <div>${Days}<span>Days</span></div>    
<div>${Hours}<span>Hours</span></div>
<div>${Mins}<span>Mins</span></div>
<div>${Seconds}<span>Secs</span></div>
    `;
}, 1000) ;

//office status
document.getElementById('statusbtn').addEventListener('click', ()=>{
   const btn = document.getElementById('statusbtn').textContent = 'Closed';

});
