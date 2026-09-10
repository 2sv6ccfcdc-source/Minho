/* ===== 바다친구 스크립트 ===== */
document.addEventListener('DOMContentLoaded', () => {

  /* ---------- 부드러운 섹션 페이드 인 ---------- */
  const observers = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observers.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.species-card, .gallery-item, .fact-card, .video-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(14px)';
    el.style.transition = 'opacity .5s ease, transform .5s ease';
    observers.observe(el);
  });

  const style = document.createElement('style');
  style.textContent = `
    .in { opacity: 1 !important; transform: translateY(0) !important; }
    .species-card.in, .gallery-item.in { opacity: 1 !important; transform: none !important; }
  `;
  document.head.appendChild(style);
});

/* ---------- 필요 시 영상 자리 채우기 ---------- */
/* 영상/m4 파일 생기면 아래 주석을 풀고 src를 지정:
  const videoFrame = document.getElementById('videoFrame');
  if (videoFrame) {
    videoFrame.innerHTML = '<video id="heroVideo" autoplay muted loop playsinline poster="">' +
      '<source src="assets/video/example.mp4" type="video/mp4"></video>';
  }
*/
