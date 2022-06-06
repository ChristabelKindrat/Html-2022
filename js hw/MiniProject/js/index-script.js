fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        const divWrap = document.createElement('div');
        divWrap.setAttribute('class', 'divWrap');
        for (const user of users) {
            const divUser = document.createElement('div');
            divUser.setAttribute('class', 'divUser');

            const {id, name} = user;
            const divId = document.createElement('div');
            divId.setAttribute('class', 'divId');
            divId.innerText = user.id;

            const divName = document.createElement('div');
            divName.setAttribute('class', 'divName');
            divName.innerText = user.name;

            const button = document.createElement('button');
            button.setAttribute('class', 'button');
            button.innerText = 'Details';

            divUser.append(divId, divName, button);

            button.onclick = function (ev) {
                const userClick = JSON.stringify(user);
                window.localStorage.setItem('user', userClick);
                location.href = './user-details.html';

            }
            divWrap.appendChild(divUser);


        }
        document.body.appendChild(divWrap);
    });