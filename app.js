const data = [
    {
        name: 'John Doe',
        age: 32,
        gender: 'male',
        lookingfor: 'female',
        location: 'Boston MA',
        image: 'https://randomuser.me/api/portraits/men/22.jpg'
    },
    {
        name: 'Mary Doe',
        age: 40,
        gender: 'female',
        lookingfor: 'male',
        location: 'Miami FL',
        image: 'https://randomuser.me/api/portraits/women/85.jpg'
    },
    {
        name: 'Pablo Smith',
        age: 26,
        gender: 'male',
        lookingfor: 'female',
        location: 'Boston MA',
        image: 'https://randomuser.me/api/portraits/men/32.jpg'
    }
];

const profiles = profileIterator(data);

//Call first profile
nextProfile()

//NEXT EVENT
document.getElementById('next').addEventListener('click', nextProfile)

//NEXT profile display

function nextProfile(){
    const currentProfile = profiles.next().value

    if(currentProfile !== undefined){
    document.getElementById('profileDisplay').innerHTML = 
    `
    <ul class="list-group">
        <li class="list-group-item">${currentProfile.name}</li>
        <li class="list-group-item">${currentProfile.gender} Looking for: ${currentProfile.lookingfor}</li>
        <li class="list-group-item">${currentProfile.age}</li>
        <li class="list-group-item">${currentProfile.location}</li>
    </ul>
    `
    document.getElementById('imageDisplay').innerHTML = `<img src=${currentProfile.image}></img>
    `
    } else {
        //No more profiles
        window.location.reload()
    }
}

//PROFILE ITERATOR
function profileIterator(profiles){
    let nextIndex = 0;

    return {
        next: function(){
            return nextIndex < profiles.length ? { value: profiles[nextIndex++], done:false} :
            {done:true}
        }
    }
}