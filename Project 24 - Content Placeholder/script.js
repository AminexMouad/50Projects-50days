const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_text = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500);

function getData() {
  header.innerHTML = `<img src="https://images.unsplash.com/photo-1615506430606-b37113426217?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" alt="card-header" />`;
  title.innerHTML = 'Lorem ipsum dolor sit amet.';
  excerpt.innerHTML =
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, perspiciatis?';
  profile_img.innerHTML =
    ' <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">';
  name.innerHTML = 'John Doe';
  date.innerHTML = 'Mar 12,2021';

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'));
  animated_bg_text.forEach((bg_text) =>
    bg_text.classList.remove('animated-bg-text')
  );
}
