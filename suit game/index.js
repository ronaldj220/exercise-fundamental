// Objek untuk menyimpan skor
const scores = {
  userWins: 0,
  computerWins: 0,
  draws: 0,
};

// Array untuk menyimpan pilihan
const choices = ["gunting", "batu", "kertas"];

function guntingBatuKertas() {
  alert("Welcome to SUIT GAME");
  let playAgain = true;

  while (playAgain) {
    // Meminta input dari pengguna
    let userChoice =
      parseInt(prompt("Pilih: \n1. Gunting\n2. Batu\n3. Kertas")) - 1;
    let computerChoice = Math.floor(Math.random() * 3); // Memilih angka acak dari 0 hingga 2 sebagai pilihan komputer

    // Membandingkan pilihan pengguna dengan pilihan komputer dan menampilkan hasilnya
    let result = compareChoices(userChoice, computerChoice);
    alert(
      "Anda memilih " +
        choices[userChoice] +
        ", komputer memilih " +
        choices[computerChoice] +
        ".\nHasil: " +
        result
    );

    // Menampilkan skor
    alert(
      "Skor:\nMenang: " +
        scores.userWins +
        "\nKalah: " +
        scores.computerWins +
        "\nSeri: " +
        scores.draws
    );

    // Meminta pengguna apakah ingin bermain lagi
    playAgain = confirm("Ingin bermain lagi?");
  }

  // Tampilkan nilai akhir jika pengguna memilih untuk berhenti
  alert(
    "Nilai akhir:\nMenang: " +
      scores.userWins * 25 +
      "\nKalah: " +
      scores.computerWins +
      "\nSeri: " +
      scores.draws
  );
}

// Membandingkan pilihan pengguna dengan pilihan komputer
function compareChoices(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    scores.draws++;
    return "Hasilnya seri!";
  } else if (
    (userChoice === 0 && computerChoice === 2) ||
    (userChoice === 1 && computerChoice === 0) ||
    (userChoice === 2 && computerChoice === 1)
  ) {
    scores.userWins++;
    return "Anda menang!";
  } else {
    scores.computerWins++;
    return "Anda kalah!";
  }
}

// Panggil fungsi untuk mulai bermain
guntingBatuKertas();
