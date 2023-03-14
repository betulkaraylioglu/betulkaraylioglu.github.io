// Zamanlayıcı ve düğme öğelerine referanslar alır
var timer = document.getElementById("timer");
var startButton = document.getElementById("start");
var stopButton = document.getElementById("stop");
var resetButton = document.getElementById("reset");

// Başlangıç ​​zamanını, geçen zamanı ve zamanlayıcı aralığını izlemek için değişkenleri başlat
var startTime,
  elapsedTime = 0,
  timerInterval;

// Zamanlayıcıyı başlatma işlevi görür
function startTimer() {
  // Geçerli saatten geçen süreyi çıkararak başlangıç ​​saatini hesaplayın
  startTime = Date.now() - elapsedTime;

  // Zamanlayıcı görüntüsünü her 10 milisaniyede bir güncelleyen bir aralık başlatır
  timerInterval = setInterval(function printTime() {
    // Geçerli saatten başlangıç ​​saatini çıkararak geçen süreyi hesaplar
    elapsedTime = Date.now() - startTime;

    // Zamanlayıcı görüntüsünü biçimlendirilmiş geçen süre ile günceller
    timer.textContent = formatTime(elapsedTime);
  }, 10);

  // Başlat düğmesini devre dışı bırakın ve durdur düğmesini etkinleştirir
  startButton.disabled = true;
  stopButton.disabled = false;
}

// Zamanlayıcıyı durdurma işlevi
function stopTimer() {
  // Zamanlayıcı görüntüsünü güncelleyen aralığı temizler
  clearInterval(timerInterval);

  // Başlat düğmesini etkinleştirir ve durdur düğmesini devre dışı bırakır
  startButton.disabled = false;
  stopButton.disabled = true;
}

// Zamanlayıcıyı sıfırlama işlevi
function resetTimer() {
  // Zamanlayıcı görüntüsünü güncelleyen aralığı temizler
  clearInterval(timerInterval);

  // Geçen süreyi 0'a sıfırlayın ve zamanlayıcı ekranını günceller
  elapsedTime = 0;
  timer.textContent = "00:00:00";

  // Başlat düğmesini etkinleştirin ve durdur düğmesini devre dışı bırakır
  startButton.disabled = false;
  stopButton.disabled = true;
}

// Geçen süreyi bir dizi olarak biçimlendirme işlevi
function formatTime(time) {
  var hours = Math.floor(time / (1000 * 60 * 60));
  var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((time % (1000 * 60)) / 1000);
  var milliseconds = Math.floor((time % 1000) / 10);
  // Üçlü operatör saatleri ? (saat > 9 ? saat : "0" + saat) : "00", saat değişkeninin sıfırdan büyük bir değere sahip olup olmadığını kontrol eder. Varsa, 9'dan büyük olup olmadığını kontrol eder. Büyükse, saat değerini döndürür. 9'dan küçük veya eşitse, saat değerine baştaki bir sıfır ekler ve onu döndürür. Saat sıfırsa, "00" dizesini döndürür.

  // Dakika ve saniye değerlerini biçimlendirmek için aynı mantık uygulanır.
  return (
    (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
    ":" +
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
    ":" +
    (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") +
    "." +
    (milliseconds > 9 ? milliseconds : "0" + milliseconds)
  );
}

// Zamanlayıcı işlevlerini tetiklemek için düğme öğelerine olay dinleyicileri ekler
startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);