//IPO - Input Process Output

//Constants and Variables (state)
let skills;
//Cached Element References
const $button = $('button');
const $input = $('input');
const $ul = $('ul');

//Event Listeners
$('button').on('click', handleAddSkill)
$('ul').on('click', 'span',handleDeleteSkill)

//Functions
//init() runs when page loads

init();
function init() {
    //as soon as application loads, assign skills to empty array
    skills= '';
    render();
};

//Transfer memory to DOM
function handleAddSkill() {
    //store the value from input tag inside local variable
    const skill = $input.val();
    console.log(skill)
    //Check for skill data
    if (skill) {
        //create the userinterface(ui) li for skill
        const $skill = $(`<li><span> X </span>${skill}</li>`)
        //push skill ui into skills list
        $('ul').append($skill);
        //clear input value //empty quote method overloading 
        $input.val('');
        skills = $('ul').html()
        console.log(skills)
    } else {
        //also can do } else return;
        alert('No skill entered! Reenter a skill.')
    }
};

function handleDeleteSkill() {
    console.log($(this))
    $(this).closest('li').remove();
    skills = $('ul').html()
    console.log(skills)


};

function render() {
    //take the list of skills in array and add them to the ul tag
    // || $ul.html(skills)
    // /!skills.length means empty array
    if (!skills.length) $ul.css('margin-bottom', '30px')
    else $ul.css('margin-bottom', '0px' )
    $ul.html(skills)
};