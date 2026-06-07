self.addEventListener("install",e=>{
self.skipWaiting();
});

self.addEventListener("fetch",e=>{
});
function createRadar(lat, lon) {
    // اگر از قبل نقشه‌ای بود پاکش کن تا سرعت کم نشود
    if (window.radarMap) { window.radarMap.remove(); }
    
    // ساخت نقشه رادار جدید
    window.radarMap = L.map('radarMap').setView([lat, lon], 7);
    
    // لایه اول: نقشه معمولی جاده‌ها
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(window.radarMap);
    
    // لایه دوم: لایه رنگی باران (که از OpenWeather می‌آید)
    L.tileLayer(`https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=${apiKey}`, {
        opacity: 0.6
    }).addTo(window.radarMap);
}
