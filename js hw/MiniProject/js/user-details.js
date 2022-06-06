const user = JSON.parse(window.localStorage.getItem('user'));

const userDetail = document.createElement('div');
userDetail.setAttribute('class', 'userDetail');

for (const userKey in user) {
    const div = document.createElement('div');
    div.setAttribute('class', 'userKey');
    if (typeof user[userKey] !== 'object') {
        div.innerText = `${userKey} : ${user[userKey]}`;
    } else {
        div.innerText = `${userKey}`;
        for (const item in user[userKey]) {
            const divItem = document.createElement('div');
            divItem.setAttribute('class', 'userKey');
            if (typeof user[userKey][item] !== 'object') {
                divItem.innerText = `${item} : ${user[userKey][item]}`
            } else {
                divItem.innerText = `${item}`;
                for (const itemKey in user[userKey][item]) {
                    const divItemKey = document.createElement('div');
                    divItemKey.setAttribute('class', 'userKey');
                    divItemKey.innerText = `${itemKey} : ${user[userKey][item][itemKey]}`;
                    divItem.appendChild(divItemKey);
                }
            }
            div.appendChild(divItem);
        }
    }
    userDetail.appendChild(div);
}


const button = document.createElement('button');
button.setAttribute('class', 'button');
button.innerText = 'Post of current user';
const divButton = document.createElement('div');
divButton.setAttribute('class', 'divButton');
divButton.appendChild(button);
document.body.appendChild(divButton);
button.onclick = function (ev) {
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(value => value.json())
        .then(posts => {
            const divPosts = document.createElement('div');
            divPosts.setAttribute('class', 'divPosts');
            for (const post of posts) {
                const {title} = post;
                const divTitle = document.createElement('div');
                divTitle.setAttribute('class', 'divTitle');
                divTitle.innerText = post.title;

                const btnPost = document.createElement('button');
                btnPost.setAttribute('class', 'btnPost');
                btnPost.innerText = 'Details';

                btnPost.onclick = function (ev) {
                    const postClick = JSON.stringify(post);
                    window.localStorage.setItem('post', postClick);
                    location.href = './post-details.html';

                }

                divTitle.appendChild(btnPost);
                divPosts.appendChild(divTitle);
            }

            divButton.append(divPosts);
        })
}
const divWrap = document.createElement('div');
divWrap.setAttribute('class', 'divWrap');
divWrap.append(userDetail, divButton);
document.body.appendChild(divWrap);
