// Download CV button -> generates a text CV and downloads it
document.getElementById('downloadCv').addEventListener('click', function (){
  const cv = [
    'Shazim Ali',
    'B.S. Computer Science — COMSATS University',
    'Full-Stack Developer',
    '',
    'Skills: HTML, CSS, JavaScript, Java, C++',
    'Email: iamshahzimali@gmail.com',
    '',
    'Projects: Portfolio Website, Quiz App (Java), Task Manager'
  ].join('\n');
  const blob = new Blob([cv], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Shazim_Ali_CV.txt';
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
});

// Dark mode toggle with localStorage
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;
function setTheme(dark){
  if(dark){
    root.style.setProperty('--bg','#0f1413');
    root.style.setProperty('--card','#0b0f0f');
    root.style.setProperty('--text','#e6e6e4');
    root.style.setProperty('--muted','#bfbfbf');
  } else {
    root.style.removeProperty('--bg');
    root.style.removeProperty('--card');
    root.style.removeProperty('--text');
    root.style.removeProperty('--muted');
  }
}
const saved = localStorage.getItem('portfolio-dark');
if(saved === '1'){ setTheme(true); }
themeToggle.addEventListener('click', ()=>{
  const isDark = localStorage.getItem('portfolio-dark') === '1';
  if(isDark){ localStorage.removeItem('portfolio-dark'); setTheme(false); themeToggle.textContent='Toggle Dark'; }
  else{ localStorage.setItem('portfolio-dark','1'); setTheme(true); themeToggle.textContent='Toggle Light'; }
});

// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('show'); obs.unobserve(e.target); }
  });
},{threshold:0.15});
reveals.forEach(r=>obs.observe(r));