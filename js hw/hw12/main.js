// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(posts => {
        let divOne = document.createElement('div')
        divOne.classList.add('divOne')
        for (const post of posts) {
            let divPost = document.createElement('div')
            divPost.classList.add('divPost')
            const divUserId = document.createElement('div')
            divUserId.innerText = `userId : ${post.userId}`
            const divId = document.createElement('div')
            divId.innerText = `id : ${post.id}`
            const divTitle = document.createElement('div')
            divTitle.innerText = `title : ${post.title}`
            const divBody = document.createElement('div')
            divBody.innerText = `body : ${post.body}`
            divPost.append(divUserId, divId, divTitle, divBody)
            divOne.appendChild(divPost)
        }
        document.body.appendChild(divOne)
    })


//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(value => value.json())
    .then(comments => {
        let div1 = document.createElement('div')
        div1.classList.add('divTwo')
        for (const comment of comments) {
            let div2 = document.createElement('div')
            div2.classList.add('divComment')
            const divPostId = document.createElement('div')
            divPostId.innerText = `postId : ${comment.postId}`
            const divId = document.createElement('div')
            divId.innerText = `id:${comment.id}`
            const divName = document.createElement('div')
            divName.innerText = `name:${comment.name}`
            const divEmail = document.createElement('div')
            divEmail.innerText = `email:${comment.email}`
            const divBody = document.createElement('div')
            divBody.innerText = `body:${comment.body}`
            div2.append(divPostId, divId, divName, divEmail, divBody)
            div1.appendChild(div2)
        }
        document.body.appendChild(div1)
    })