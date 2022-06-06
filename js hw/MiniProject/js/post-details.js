// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)


const post = JSON.parse(window.localStorage.getItem('post'));

const divWrap = document.createElement('div')
divWrap.setAttribute('class', 'divWrap');

const divPost = document.createElement('div');
divPost.setAttribute('class', 'divPost');

for (const postKey in post) {
    const div = document.createElement('div');
    div.setAttribute('class', 'postKey');
    if (typeof post[postKey] !== 'object') {
        div.innerText = `${postKey} : ${post[postKey]}`;
    } else {
        div.innerText = `${postKey}`;
        for (const item in post[postKey]) {
            const divItem = document.createElement('div');
            divItem.setAttribute('class', 'postKey');
            if (typeof post[postKey][item] !== 'object') {
                divItem.innerText = `${item} : ${post[postKey][item]}`
            } else {
                divItem.innerText = `${item}`;
                for (const itemKey in post[postKey][item]) {
                    const divItemKey = document.createElement('div');
                    divItemKey.setAttribute('class', 'postKey');
                    divItemKey.innerText = `${itemKey} : ${post[postKey][item][itemKey]}`;
                    divItem.appendChild(divItemKey);
                }
            }
            div.appendChild(divItem);
        }
    }
    divPost.appendChild(div);
}

divWrap.appendChild(divPost);

fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(value => value.json())
    .then(comments => {
        const divComments = document.createElement('div');
        divComments.setAttribute('class', 'comments');
        for (const comment of comments) {
            const divComment = document.createElement('div');
            divComment.setAttribute('class', 'comment');

            const {postId, id, name, email, body} = comment;
            const divPostId = document.createElement('div');
            divPostId.innerText = 'PostId' + ': ' + comment.postId;

            const divId = document.createElement('div');
            divId.innerText = 'Id' + ': ' + comment.id;

            const divName = document.createElement('div');
            divName.innerText = 'Comment Name' + ': ' + comment.name;

            const divEmail = document.createElement('div');
            divEmail.innerText = 'Email' + ': ' + comment.email;

            const divBody = document.createElement('div');
            divName.innerText = comment.body;


            divComment.append(divPostId, divId, divName, divEmail, divBody);
            divComments.appendChild(divComment);
        }
        divWrap.appendChild(divComments);
    });
document.body.append(divWrap);

