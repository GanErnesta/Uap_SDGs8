document.addEventListener("DOMContentLoaded", function () {
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const terms = document.getElementById("terms");

    if (username) {
        username.addEventListener("input", function () {
            clearError(username, "usernameError");
        });
    }

    if (email) {
        email.addEventListener("input", function () {
            clearError(email, "emailError");
        });
    }

    if (password) {
        password.addEventListener("input", function () {
            clearError(password, "passwordError");
        });
    }

    if (terms) {
        terms.addEventListener("change", function () {
            document.getElementById("termsError").textContent = "";
        });
    }
});

function clearError(input, errorId) {
    const error = document.getElementById(errorId);

    if (error) {
        error.textContent = "";
    }

    if (input && input.parentElement) {
        input.parentElement.classList.remove("input-error");
    }
}

function register() {
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const terms = document.getElementById("terms");

    const usernameError = document.getElementById("usernameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const termsError = document.getElementById("termsError");

    usernameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    termsError.textContent = "";

    username.parentElement.classList.remove("input-error");
    email.parentElement.classList.remove("input-error");
    password.parentElement.classList.remove("input-error");

    let isValid = true;

    if (username.value.trim() === "") {
        usernameError.textContent = "Username wajib diisi";
        username.parentElement.classList.add("input-error");
        isValid = false;
    } else if (username.value.trim().length < 5) {
        usernameError.textContent = "Username minimal 5 karakter";
        username.parentElement.classList.add("input-error");
        isValid = false;
    }

    if (email.value.trim() === "") {
        emailError.textContent = "Email wajib diisi";
        email.parentElement.classList.add("input-error");
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        emailError.textContent = "Format email tidak valid";
        email.parentElement.classList.add("input-error");
        isValid = false;
    }

    if (password.value.trim() === "") {
        passwordError.textContent = "Password wajib diisi";
        password.parentElement.classList.add("input-error");
        isValid = false;
    } else if (password.value.trim().length < 8) {
        passwordError.textContent = "Password minimal 8 karakter";
        password.parentElement.classList.add("input-error");
        isValid = false;
    }

    if (!terms.checked) {
        termsError.textContent = "Kamu harus menyetujui syarat dan ketentuan";
        isValid = false;
    }

    if (!isValid) return;

    localStorage.setItem("isRegister", "true");
    localStorage.setItem("username", username.value.trim());
    localStorage.setItem("userEmail", email.value.trim());
    localStorage.setItem("userPassword", password.value.trim());

    window.location.href = "../HomeScreen/Home.html";
}

function login() {
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    emailError.textContent = "";
    passwordError.textContent = "";

    email.parentElement.classList.remove("input-error");
    password.parentElement.classList.remove("input-error");

    let isValid = true;

    if (email.value.trim() === "") {
        emailError.textContent = "Email wajib diisi";
        email.parentElement.classList.add("input-error");
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        emailError.textContent = "Format email tidak valid";
        email.parentElement.classList.add("input-error");
        isValid = false;
    }

    if (password.value.trim() === "") {
        passwordError.textContent = "Password wajib diisi";
        password.parentElement.classList.add("input-error");
        isValid = false;
    } else if (password.value.trim().length < 8) {
        passwordError.textContent = "Password minimal 8 karakter";
        password.parentElement.classList.add("input-error");
        isValid = false;
    }

    if (!isValid) return;

    window.location.href = "../HomeScreen/Home.html";
} 
const homePage = document.getElementById("homePage");
const simulationPage = document.getElementById("simulationPage");
const sidebar = document.getElementById("sidebar");
const answerGrid = document.getElementById("answerGrid");
const progressBar = document.getElementById("progressBar");
const currentNumber = document.getElementById("currentNumber");
const questionTitle = document.getElementById("questionTitle");
const questionDesc = document.getElementById("questionDesc");

let currentIndex = 0;
let answers = [];

const questions = [
  {
    title: "Konflik dalam Tim Proyek",
    desc: "Kamu sedang mengerjakan proyek kelompok. Dua temanmu berdebat karena tidak setuju tentang cara mengerjakan tugas. Suasana tim mulai tegang dan pekerjaan jadi tertunda. Sebagai bagian dari tim, bagaimana langkah kamu?",
    options: [
      "Memisahkan mereka dan mendengarkan pendapat masing-masing secara objektif.",
      "Menyuruh mereka fokus ke tugas masing-masing saja, jangan banyak debat.",
      "Menyusun ulang pembagian tugas agar lebih adil dan jelas bagi semua pihak.",
      "Mencoba mencairkan suasana dengan bercanda agar ketegangan tim berkurang."
    ]
  },
  {
    title: "Deadline Tugas Mendadak",
    desc: "Guru memberi tugas kelompok dengan waktu yang sangat singkat. Beberapa anggota terlihat panik dan tidak tahu harus mulai dari mana. Apa yang kamu lakukan?",
    options: [
      "Membagi tugas kecil agar semua bisa langsung bergerak.",
      "Mengerjakan bagian tersulit sendiri agar cepat selesai.",
      "Mengajak semua berdiskusi dulu sampai semua setuju.",
      "Menunggu teman lain memberi arahan terlebih dahulu."
    ]
  },
  {
    title: "Ide Ditolak Teman",
    desc: "Kamu memberikan ide dalam diskusi, tetapi teman-temanmu kurang setuju. Mereka memilih ide lain yang menurutmu kurang efektif. Apa tindakanmu?",
    options: [
      "Menerima keputusan dan tetap membantu tim.",
      "Menjelaskan kembali idemu dengan alasan yang lebih jelas.",
      "Diam saja karena pendapatmu sudah ditolak.",
      "Mencoba menggabungkan idemu dengan ide teman."
    ]
  }
];

function mulaiSimulasi() {
  homePage.classList.add("hidden");
  sidebar.classList.add("hidden");
  simulationPage.classList.remove("hidden");
  renderQuestion();

  document.getElementById("soalSimulasi").scrollIntoView({
    behavior: "smooth"
  });
}

function kembaliHome() {
  simulationPage.classList.add("hidden");
  homePage.classList.remove("hidden");
  sidebar.classList.remove("hidden");
}

function renderQuestion() {
  const question = questions[currentIndex];

  currentNumber.textContent = currentIndex + 1;
  questionTitle.textContent = question.title;
  questionDesc.textContent = question.desc;

  progressBar.innerHTML = "";
  for (let i = 0; i < 9; i++) {
    const bar = document.createElement("span");
    if (i <= currentIndex) bar.classList.add("active");
    progressBar.appendChild(bar);
  }

  answerGrid.innerHTML = "";
  question.options.forEach((option, index) => {
    const card = document.createElement("div");
    card.className = "answer-card";

    card.innerHTML = `
      <b>${String.fromCharCode(65 + index)}</b>
      <p>${option}</p>
    `;

    card.onclick = () => {
      document.querySelectorAll(".answer-card").forEach(item => {
        item.classList.remove("selected");
      });

      card.classList.add("selected");
      answers[currentIndex] = option;
    };

    answerGrid.appendChild(card);
  });
}

function nextQuestion() {
  if (!answers[currentIndex]) {
    alert("Pilih salah satu jawaban dulu.");
    return;
  }

  if (currentIndex < questions.length - 1) {
    currentIndex++;
    renderQuestion();
  } else {
    alert("Simulasi selesai! Jawaban kamu berhasil disimpan.");
  }
}
const btnMulai = document.getElementById("btnMulai");
const home = document.getElementById("homePage");
const simulation = document.getElementById("simulationPage");

btnMulai.addEventListener("click", function () {
  homePage.classList.add("hidden");
  sidebar.classList.add("hidden");
  simulationPage.classList.remove("hidden");
});

const menuItems = document.querySelectorAll(".menu a");
const filterButtons = document.querySelectorAll(".filter-row button");
const saveButtons = document.querySelectorAll(".save");
const applyButtons = document.querySelectorAll(".actions button:first-child");

menuItems.forEach(item => {
    item.addEventListener("click", function (e) {
        e.preventDefault();

        menuItems.forEach(menu => menu.classList.remove("active"));
        this.classList.add("active");
    });
});

filterButtons.forEach(button => {
    button.addEventListener("click", function () {
        const row = this.parentElement;
        row.querySelectorAll("button").forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");
    });
});

saveButtons.forEach(button => {
    button.addEventListener("click", function () {
        const icon = this.querySelector("i");
        icon.classList.toggle("fa-regular");
        icon.classList.toggle("fa-solid");
        this.classList.toggle("saved");
    });
});

applyButtons.forEach(button => {
    button.addEventListener("click", function () {
        alert("Lamaran berhasil diproses!");
    });
});
const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll("nav a").forEach(link => {
    const href = link.getAttribute("href");

    if (href === currentPage) {
        link.classList.add("active");
    }
});
const modal = document.getElementById("modalLamaran");
const jobText = document.getElementById("jobText");

function bukaModal(namaLowongan) {
  jobText.textContent = `Kamu akan melamar sebagai ${namaLowongan}.`;
  modal.classList.add("active");
}

function tutupModal() {
  modal.classList.remove("active");
}

function kirimLamaran() {
  alert("Lamaran berhasil dikirim!");
  tutupModal();
}

window.onclick = function(e) {
  if (e.target === modal) {
    tutupModal();
  }
};
