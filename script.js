function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    // Ubah jam ke format 12 jam
    hours = hours % 12 || 12;

    const clockElement = document.getElementById('clock');
    clockElement.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
}

// Panggil fungsi updateClock() setiap detik
setInterval(updateClock, 1000);

// Panggil fungsi untuk menampilkan jam saat halaman pertama kali dimuat
window.addEventListener('load', updateClock);
