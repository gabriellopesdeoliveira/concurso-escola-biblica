const tbody = document.getElementById("ranking-body");

const jogadores = ranking
    .map(item => ({
        ...item,
        total: item.presenca*50 + item.visitante*50 + item.doeDay*50 + item.pontualidade*50
    }))
    .sort((a, b) => b.total - a.total);

jogadores.forEach((item, index) => {

    tbody.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${item.aluno}</td>
            <td>${item.presenca}</td>
            <td>${item.pontualidade}</td>
            <td>${item.visitante}</td>
            <td>${item.doeDay}</td>
            <td class="total">${item.total}</td>
        </tr>
    `;

});

const audio = document.getElementById("bgMusic");
audio.volume = 0.25;

function iniciarAudio() {
    audio.play();
}

document.addEventListener("click", iniciarAudio);
document.addEventListener("touchstart", iniciarAudio);
window.addEventListener("scroll", iniciarAudio);