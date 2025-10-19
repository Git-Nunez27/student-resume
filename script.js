function showMessage(){
  const message = 'สวัสดี! ขอบคุณที่เยี่ยมชมเรซูเม่ของฉัน 🙏';
  // Use a friendly in-page notice instead of alert for better UX on modern pages
  const notice = document.createElement('div');
  notice.textContent = message;
  notice.style.position = 'fixed';
  notice.style.left = '50%';
  notice.style.bottom = '24px';
  notice.style.transform = 'translateX(-50%)';
  notice.style.background = 'rgba(0,0,0,0.8)';
  notice.style.color = '#fff';
  notice.style.padding = '10px 14px';
  notice.style.borderRadius = '6px';
  notice.style.zIndex = '9999';
  document.body.appendChild(notice);
  setTimeout(()=>notice.remove(),3500);
}