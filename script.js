const contentDisplay = document.getElementById('content-display');
const navButtons = document.querySelectorAll('.nav-btn');
const needSelector = document.getElementById('needSelector');
const decisionResult = document.getElementById('decisionResult');
const resType = document.getElementById('resType');
const resExample = document.getElementById('resExample');

function updateContent(targetId) {
    const data = dbData[targetId];
    if (!data) return;

    navButtons.forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.querySelector(`.nav-btn[data-target="${targetId}"]`);
    if(activeBtn) activeBtn.classList.add('active');

    contentDisplay.innerHTML = `
        <div class="fade-in">
            <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl ${data.bg} ${data.color} text-3xl mb-6 shadow-sm border border-stone-200">
                ${data.icon}
            </div>
            <h3 class="text-3xl font-bold text-stone-900 mb-4">${data.title}</h3>
            <p class="text-stone-700 text-lg leading-relaxed mb-6">${data.desc}</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 border-t border-stone-200 pt-8">
                <div>
                    <h4 class="text-sm font-bold text-stone-400 uppercase tracking-wider mb-2">Vantagem Principal</h4>
                    <p class="text-stone-800">${data.advantage}</p>
                </div>
                <div>
                    <h4 class="text-sm font-bold text-stone-400 uppercase tracking-wider mb-2">Casos de Uso Ideais</h4>
                    <p class="text-stone-800">${data.useCases}</p>
                </div>
            </div>
            
            <div class="mt-8 bg-white p-4 rounded-xl border border-stone-200 inline-block">
                <span class="text-xs font-bold text-stone-400 uppercase tracking-wider block mb-1">Exemplos Populares</span>
                <span class="font-mono text-stone-800 font-semibold">${data.examples}</span>
            </div>
        </div>
    `;
}

navButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const target = e.currentTarget.getAttribute('data-target');
        updateContent(target);
    });
});

decisionMatrix.forEach(item => {
    const option = document.createElement('option');
    option.value = item.id;
    option.textContent = item.need;
    needSelector.appendChild(option);
});

needSelector.addEventListener('change', (e) => {
    const selectedId = e.target.value;
    const result = decisionMatrix.find(item => item.id === selectedId);
    
    if (result) {
        resType.textContent = result.type;
        resExample.textContent = result.ex;
        
        decisionResult.classList.remove('hidden');
        decisionResult.classList.remove('fade-in');
        void decisionResult.offsetWidth; 
        decisionResult.classList.add('fade-in');
    }
});

const ctx = document.getElementById('tradeoffChart').getContext('2d');
new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['Esquema Estruturado', 'Escalabilidade Horizontal', 'Flexibilidade de Dados', 'Queries Complexas/Relações', 'Garantia ACID'],
        datasets: [
            {
                label: 'Relacional (SQL)',
                data: [100, 40, 20, 80, 100],
                backgroundColor: 'rgba(14, 165, 233, 0.2)',
                borderColor: 'rgba(14, 165, 233, 1)',
                pointBackgroundColor: 'rgba(14, 165, 233, 1)',
                borderWidth: 2
            },
            {
                label: 'NoSQL (Documentos)',
                data: [20, 90, 100, 40, 50],
                backgroundColor: 'rgba(16, 185, 129, 0.2)',
                borderColor: 'rgba(16, 185, 129, 1)',
                pointBackgroundColor: 'rgba(16, 185, 129, 1)',
                borderWidth: 2
            },
            {
                label: 'Grafos',
                data: [60, 60, 70, 100, 70],
                backgroundColor: 'rgba(168, 85, 247, 0.2)',
                borderColor: 'rgba(168, 85, 247, 1)',
                pointBackgroundColor: 'rgba(168, 85, 247, 1)',
                borderWidth: 2
            }
        ]
    },
    options: {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
            r: {
                angleLines: { color: 'rgba(0, 0, 0, 0.1)' },
                grid: { color: 'rgba(0, 0, 0, 0.1)' },
                pointLabels: {
                    font: { family: "'Segoe UI', sans-serif", size: 12, weight: '600' },
                    color: '#444'
                },
                ticks: { display: false, min: 0, max: 100 }
            }
        },
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    font: { family: "'Segoe UI', sans-serif", size: 14 },
                    usePointStyle: true,
                    padding: 20
                }
            },
            tooltip: {
                backgroundColor: 'rgba(28, 25, 23, 0.9)',
                titleFont: { size: 14, family: "'Segoe UI', sans-serif" },
                bodyFont: { size: 13, family: "'Segoe UI', sans-serif" },
                padding: 12,
                cornerRadius: 8,
                callbacks: {
                    label: function(context) {
                        return ' ' + context.dataset.label + ': Nível Concetual ' + context.raw;
                    }
                }
            }
        }
    }
});

updateContent('sql');
