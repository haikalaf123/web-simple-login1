function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Ubah jam ke format 12 jam
    hours = hours % 12 || 12;

    const clockElement = document.getElementById('clock');
    clockElement.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;

    // Your scrolling logic here
    updateOnScroll();
}

const scrollDelay = 10; // Adjust the delay as needed

window.addEventListener('scroll', debounce(function () {
    requestAnimationFrame(updateOnScroll);
}, scrollDelay));

// Panggil fungsi updateClock() setiap detik dan saat halaman pertama kali dimuat
setInterval(updateClock, 1000);
window.addEventListener('load', updateClock);

// Rest of your existing code...
