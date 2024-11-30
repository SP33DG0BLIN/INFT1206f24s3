//bhavin shuseevan 
const dsplyImg = document.querySelector('.displayed-img');
const tbar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const ovl = document.querySelector('.overlay');

const imgs = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
const alts = {
    'pic1.jpg': 'Close-up of a human eye',
    'pic2.jpg': 'A tranquil forest',
    'pic3.jpg': 'Snow-covered mountain',
    'pic4.jpg': 'A beach at sunset',
    'pic5.jpg': 'A colorful parrot'
};

imgs.forEach(img => {
    const newImg = document.createElement('img');
    newImg.setAttribute('src', `images/${img}`);
    newImg.setAttribute('alt', alts[img]);
    tbar.appendChild(newImg);

    newImg.addEventListener('click', () => {
        dsplyImg.setAttribute('src', `images/${img}`);
        dsplyImg.setAttribute('alt', alts[img]);
    });
});

btn.addEventListener('click', () => {
    const cls = btn.getAttribute('class');
    if (cls === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        ovl.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        ovl.style.backgroundColor = 'rgb(0 0 0 / 0%)';
    }
});
