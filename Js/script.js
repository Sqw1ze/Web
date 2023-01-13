let buttons = document.getElementsByTagName('button')
let geustion = [];
let div1 = document.querySelector('#div1');
let div2 = document.querySelector('#div2');
let submit = document.querySelector('#submit');
let submitform = document.querySelector('#submitform ');

function addHidden(event)
{
    event.classList.add('hidden');
}
function removeHidden(event) 
{
    event.classList.remove('hidden');
}

for(let i = 0; i < buttons.length; i++)
{
    buttons[i].addEventListener('click',
    function clickButton(event)
    {
        event.preventDefault();
        if(buttons[i].classList == ''+i+'')
        {
            if(i == 0 || i == 1)
            {
                addHidden(div1);
                removeHidden(div2);
                geustion.push(i);
            }
            else if(i == 2 || i == 3)
            {
                addHidden(div2);
                removeHidden(submit);
                geustion.push(i);
            }
        }
    });
}
submitform.addEventListener('submit', function(event)
{
    event.preventDefault();
    addHidden(submit);
    if(geustion[0] == 0 && geustion[1] == 2)
    {
        alert("Ви чоловік і вам меньше 25 років");
    }
    else if(geustion[0] == 0 && geustion[1] == 3)
    {
        alert("Ви жінка і вам меньше 25 років");
    }
    else if(geustion[0] == 1 && geustion[1] == 2)
    {
        alert("Ви чоловік і вам більше 25 років");
    }
    else if(geustion[0] == 1 && geustion[1] == 3)
    {
        alert("Ви жінка і вам більше 25 років");
    }

});
