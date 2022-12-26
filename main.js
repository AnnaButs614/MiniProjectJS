// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід
// на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули
//
i=1;
const cont = document.createElement('div');
cont.className = 'main_users'
const grDiv = document.createElement('div');
grDiv.className = 'grp';
const grDiv1 = document.createElement('div');
grDiv1.className = 'grp';
cont.append(grDiv);
cont.append(grDiv1);

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {
        for (const item of value){
            document.body.append(cont);
            const userDiv = document.createElement('div');
            userDiv.innerText = `${item.id}--${item.name}\n`;
            userDiv.className='user'
            if(i<=5) {
                grDiv.append(userDiv);
            }
            if(i>5) {
                grDiv1.append(userDiv);
            }
            const button = document.createElement('a');
            button.innerText = 'Click';
            userDiv.append(button);
            button.href = `user-details.html?idt=${item.id}`
            i++
        }
    })

