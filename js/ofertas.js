// Simulação do Agente de Ofertas
const agentOffers = [
    {
        id: 1,
        title: "Kindle Paperwhite 16 GB - Tela de 6,8”",
        category: "Eletrônicos",
        originalPrice: "799,00",
        dealPrice: "719,10",
        discount: "10",
        image: "https://m.media-amazon.com/images/I/718V3v4L6iL._AC_SL1500_.jpg",
        link: "https://amzn.to/4lX8bvr"
    },
    {
        id: 2,
        title: "Echo Dot 5ª Geração com Alexa",
        category: "Smart Home",
        originalPrice: "429,00",
        dealPrice: "386,10",
        discount: "10",
        image: "https://m.media-amazon.com/images/I/61M4M3Wf5LL._AC_SL1000_.jpg",
        link: "https://amzn.to/4lX8bvr"
    },
    {
        id: 3,
        title: "Fritadeira Sem Óleo Mondial",
        category: "Cozinha",
        originalPrice: "549,00",
        dealPrice: "329,40",
        discount: "40",
        image: "https://m.media-amazon.com/images/I/61T05IuG7hL._AC_SL1000_.jpg",
        link: "https://amzn.to/4lX8bvr"
    },
    {
        id: 4,
        title: "Monitor Gamer Curvo 24''",
        category: "Setup",
        originalPrice: "1.200,00",
        dealPrice: "840,00",
        discount: "30",
        image: "https://m.media-amazon.com/images/I/71Xm6Fk677L._AC_SL1500_.jpg",
        link: "https://amzn.to/4lX8bvr"
    }
];

function initAgenteOfertas() {
    const grid = document.getElementById('ofertas-grid');
    const status = document.getElementById('sync-status');
    
    // Simula o tempo de busca das 27 categorias
    setTimeout(() => {
        grid.innerHTML = '';
        agentOffers.forEach((offer, index) => {
            const card = `
                <article class="product-card bg-white rounded-2xl border border-slate-100 overflow-hidden group" data-aos="fade-up" data-aos-delay="${index * 100}">
                    <div class="aspect-square bg-slate-50 flex items-center justify-center p-8 relative">
                        <img src="${offer.image}" alt="${offer.title}" class="max-h-full object-contain group-hover:scale-110 transition-transform duration-500">
                        <span class="absolute top-4 right-4 badge-discount">-${offer.discount}%</span>
                    </div>
                    <div class="p-6">
                        <span class="text-[9px] font-bold text-blue-600 uppercase tracking-widest mb-2 block">${offer.category}</span>
                        <h3 class="text-sm font-bold text-slate-900 mb-4 h-10 line-clamp-2">${offer.title}</h3>
                        
                        <div class="flex items-baseline gap-2 mb-6">
                            <span class="text-xl font-black text-slate-900">R$ ${offer.dealPrice}</span>
                            <span class="text-[10px] text-slate-400 line-through">R$ ${offer.originalPrice}</span>
                        </div>

                        <a href="${offer.link}" target="_blank" class="block w-full text-center bg-blue-600 text-white text-[10px] font-bold py-4 rounded-lg hover:bg-blue-800 transition-all">
                            APROVEITAR OFERTA ↗
                        </a>
                    </div>
                </article>
            `;
            grid.innerHTML += card;
        });

        const now = new Date();
        status.textContent = `Atualizado: ${now.toLocaleTimeString('pt-BR')}`;
        AOS.refresh();
    }, 1500);
}

// Inicializa a página
window.addEventListener('DOMContentLoaded', () => {
    AOS.init({ duration: 800, once: true });
    initAgenteOfertas();
});