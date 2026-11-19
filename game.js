// ==========================================================================
// CARRERA DEL SABER - MOTOR PRINCIPAL DEL JUEGO
// Rediseño Google Stitch 100% Interactivo:
// Física 3D de Dados, Efectos de Partículas, Síntesis de Audio Web,
// Tablero Perimetral Curricular y Banco Oficial de 600 Preguntas
// ==========================================================================

// --- SINTETIZADOR DE AUDIO WEB (Efectos Acústicos Sintetizados) ---
class AudioFX {
    constructor() {
        this.ctx = null;
        this.enabled = true;
    }

    init() {
        if (!this.ctx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (AudioContext) {
                this.ctx = new AudioContext();
            }
        }
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
        return this.ctx;
    }

    playClack(freq = 320, duration = 0.04) {
        if (!this.enabled) return;
        try {
            const ctx = this.init();
            if (!ctx) return;
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq + Math.random() * 70 - 35, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(110, ctx.currentTime + duration);
            gain.gain.setValueAtTime(0.2, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + duration);
        } catch (e) {}
    }

    playDingSuccess() {
        if (!this.enabled) return;
        try {
            const ctx = this.init();
            if (!ctx) return;
            // Acorde alegre de tres notas (E5, G#5, B5)
            const notes = [659.25, 830.61, 987.77];
            notes.forEach((freq, idx) => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'sine';
                const startTime = ctx.currentTime + idx * 0.05;
                osc.frequency.setValueAtTime(freq, startTime);
                gain.gain.setValueAtTime(0.18, startTime);
                gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.45);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(startTime);
                osc.stop(startTime + 0.5);
            });
        } catch (e) {}
    }

    playPawnHop() {
        if (!this.enabled) return;
        try {
            const ctx = this.init();
            if (!ctx) return;
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(460, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(320, ctx.currentTime + 0.08);
            gain.gain.setValueAtTime(0.22, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 0.09);
        } catch (e) {}
    }

    playCorrect() {
        if (!this.enabled) return;
        try {
            const ctx = this.init();
            if (!ctx) return;
            [523.25, 659.25, 783.99, 1046.50].forEach((freq, idx) => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'triangle';
                const startTime = ctx.currentTime + idx * 0.09;
                osc.frequency.setValueAtTime(freq, startTime);
                gain.gain.setValueAtTime(0.22, startTime);
                gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.28);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(startTime);
                osc.stop(startTime + 0.3);
            });
        } catch (e) {}
    }

    playWrong() {
        if (!this.enabled) return;
        try {
            const ctx = this.init();
            if (!ctx) return;
            [220, 164].forEach((freq, idx) => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'sawtooth';
                const startTime = ctx.currentTime + idx * 0.12;
                osc.frequency.setValueAtTime(freq, startTime);
                gain.gain.setValueAtTime(0.2, startTime);
                gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.25);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(startTime);
                osc.stop(startTime + 0.26);
            });
        } catch (e) {}
    }

    playBadgeWon() {
        if (!this.enabled) return;
        try {
            const ctx = this.init();
            if (!ctx) return;
            [523, 659, 784, 1046, 1318].forEach((f, i) => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'sine';
                const startTime = ctx.currentTime + i * 0.08;
                osc.frequency.setValueAtTime(f, startTime);
                gain.gain.setValueAtTime(0.25, startTime);
                gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.35);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(startTime);
                osc.stop(startTime + 0.38);
            });
        } catch (e) {}
    }

    playVictory() {
        if (!this.enabled) return;
        try {
            const ctx = this.init();
            if (!ctx) return;
            const melody = [523, 659, 784, 1046, 1046, 1046, 1318];
            melody.forEach((freq, idx) => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'triangle';
                const startTime = ctx.currentTime + idx * 0.16;
                osc.frequency.setValueAtTime(freq, startTime);
                gain.gain.setValueAtTime(0.28, startTime);
                gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.45);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(startTime);
                osc.stop(startTime + 0.5);
            });
        } catch (e) {}
    }

    toggle() {
        this.enabled = !this.enabled;
        return this.enabled;
    }
}

// --- GENERADOR DE CONFETI DE PANTALLA COMPLETA ---
class ConfettiCannon {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (this.canvas) {
            this.ctx = this.canvas.getContext('2d');
            this.particles = [];
            this.animating = false;
            this.resize();
            window.addEventListener('resize', () => this.resize());
        }
    }

    resize() {
        if (!this.canvas) return;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    fire() {
        if (!this.canvas) return;
        this.particles = [];
        const colors = ['#3B82F6', '#EF4444', '#22C55E', '#F97316', '#A855F7', '#FACC15', '#1D4ED8'];
        for (let i = 0; i < 150; i++) {
            this.particles.push({
                x: this.canvas.width / 2,
                y: this.canvas.height / 2,
                vx: (Math.random() - 0.5) * 18,
                vy: (Math.random() - 0.8) * 18,
                size: Math.random() * 8 + 4,
                color: colors[Math.floor(Math.random() * colors.length)],
                rotation: Math.random() * 360,
                vRot: (Math.random() - 0.5) * 10
            });
        }
        if (!this.animating) {
            this.animating = true;
            this.loop();
        }
    }

    loop() {
        if (!this.animating) return;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for (let i = 0; i < this.particles.length; i++) {
            const p = this.particles[i];
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.35;
            p.rotation += p.vRot;

            this.ctx.save();
            this.ctx.translate(p.x, p.y);
            this.ctx.rotate((p.rotation * Math.PI) / 180);
            this.ctx.fillStyle = p.color;
            this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
            this.ctx.restore();
        }

        this.particles = this.particles.filter(p => p.y < this.canvas.height + 50);

        if (this.particles.length > 0) {
            requestAnimationFrame(() => this.loop());
        } else {
            this.animating = false;
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
    }
}

// --- METADATOS DE CASILLEROS (1 AL 28 EN ORDEN DE PISTA) ---
const TILES_METADATA = [
    { id: 1, cat: 'matematica', label: 'Matemática', icon: '📐', star: false },
    { id: 2, cat: 'lengua', label: 'Lengua', icon: '📖', star: false },
    { id: 3, cat: 'matematica', label: 'Matemática', icon: '📐', star: true },
    { id: 4, cat: 'sociales', label: 'Ciencias Sociales', icon: '🌍', star: false },
    { id: 5, cat: 'comodin', label: 'Comodín', icon: '🃏', star: false },
    { id: 6, cat: 'matematica', label: 'Matemática', icon: '📐', star: false },
    { id: 7, cat: 'lengua', label: 'Lengua', icon: '📖', star: false },
    { id: 8, cat: 'naturales', label: 'Ciencias Naturales', icon: '🌿', star: false },
    { id: 9, cat: 'lengua', label: 'Lengua', icon: '👑', star: true },
    { id: 10, cat: 'lengua', label: 'Lengua', icon: '📖', star: false },
    { id: 11, cat: 'matematica', label: 'Matemática', icon: '📐', star: false },
    { id: 12, cat: 'ingenio', label: 'Ingenio y Cultura', icon: '💡', star: false },
    { id: 13, cat: 'naturales', label: 'Ciencias Naturales', icon: '🌿', star: false },
    { id: 14, cat: 'naturales', label: 'Ciencias Naturales', icon: '🌿', star: false },
    { id: 15, cat: 'matematica', label: 'Matemática', icon: '📐', star: false },
    { id: 16, cat: 'sociales', label: 'Ciencias Sociales', icon: '🌍', star: false },
    { id: 17, cat: 'matematica', label: 'Matemática', icon: '📐', star: true },
    { id: 18, cat: 'comodin', label: 'Comodín', icon: '🃏', star: false },
    { id: 19, cat: 'lengua', label: 'Lengua', icon: '📖', star: false },
    { id: 20, cat: 'ingenio', label: 'Ingenio y Cultura', icon: '💡', star: false },
    { id: 21, cat: 'ingenio', label: 'Ingenio y Cultura', icon: '💡', star: false },
    { id: 22, cat: 'lengua', label: 'Lengua', icon: '📖', star: false },
    { id: 23, cat: 'sociales', label: 'Ciencias Sociales', icon: '🌍', star: false },
    { id: 24, cat: 'matematica', label: 'Matemática', icon: '📐', star: false },
    { id: 25, cat: 'ingenio', label: 'Ingenio y Cultura', icon: '👑', star: true },
    { id: 26, cat: 'sociales', label: 'Ciencias Sociales', icon: '🌍', star: false }
];

// Metadatos temáticos para materias y medallas
const SUBJECT_THEME = {
    matematica: {
        headerBg: '#2563eb',
        name: 'Matemática',
        short: 'Mat',
        emoji: '📐',
        icon: `<svg class="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24"><path d="M12 2v3m-5 17l4-15 4 15m-7-6h6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.3"></path></svg>`,
        activeRing: 'bg-white/90 border border-blue-200 text-blue-700 shadow-2xs'
    },
    lengua: {
        headerBg: '#dc2626',
        name: 'Lengua',
        short: 'Len',
        emoji: '📖',
        icon: `<svg class="w-4 h-4 text-rose-500" fill="none" viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20V4H6.5A2.5 2.5 0 0 0 4 6.5v13z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>`,
        activeRing: 'bg-white/90 border border-rose-200 text-rose-600 shadow-2xs'
    },
    naturales: {
        headerBg: '#16a34a',
        name: 'Ciencias Naturales',
        short: 'Nat',
        emoji: '🌿',
        icon: `<svg class="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24"><path d="M10 2h4m-3 0v6l-5 9.5A2 2 0 0 0 7.7 21h8.6a2 2 0 0 0 1.7-3.5L13 8V2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>`,
        activeRing: 'bg-white/90 border border-emerald-200 text-emerald-700 shadow-2xs'
    },
    sociales: {
        headerBg: '#ea580c',
        name: 'Ciencias Sociales',
        short: 'Soc',
        emoji: '🌍',
        icon: `<svg class="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="11" r="7" stroke="currentColor" stroke-width="2"></circle><path d="M12 18v3m-4 0h8" stroke="currentColor" stroke-linecap="round" stroke-width="2"></path></svg>`,
        activeRing: 'bg-white/90 border border-amber-200 text-amber-700 shadow-2xs'
    },
    ingenio: {
        headerBg: '#9333ea',
        name: 'Ingenio y Cultura',
        short: 'Ing',
        emoji: '💡',
        icon: `<svg class="w-4 h-4 text-purple-600" fill="none" viewBox="0 0 24 24"><path d="M9 18h6m-4 3h2m-4-10a5 5 0 1 1 8 4c-.7.6-1.5 1.5-1.5 3h-5c0-1.5-.8-2.4-1.5-3a4.98 4.98 0 0 1 0-4z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>`,
        activeRing: 'bg-white/90 border border-purple-200 text-purple-700 shadow-2xs'
    },
    comodin: {
        headerBg: '#6366f1',
        name: 'Comodín',
        short: 'Com',
        emoji: '🃏',
        icon: `<span class="text-base">🃏</span>`,
        activeRing: 'bg-gradient-to-b from-purple-50 to-indigo-100 ring-1.5 ring-indigo-400 text-indigo-700 shadow-2xs'
    }
};

const SUBJECT_THEME_ENGLISH1 = {
    matematica: {
        headerBg: '#2563eb',
        name: 'To Be & Pronouns',
        short: 'Be',
        emoji: '⏱️',
        subtitle: 'To Be, Have Got & Can',
        icon: `<svg class="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.3"></path></svg>`,
        activeRing: 'bg-white/90 border border-blue-200 text-blue-700 shadow-2xs'
    },
    lengua: {
        headerBg: '#dc2626',
        name: 'Vocabulary & Words',
        short: 'Voc',
        emoji: '🎒',
        subtitle: 'Numbers, Colours & Family',
        icon: `<svg class="w-4 h-4 text-rose-500" fill="none" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.3"></path></svg>`,
        activeRing: 'bg-white/90 border border-rose-200 text-rose-600 shadow-2xs'
    },
    naturales: {
        headerBg: '#16a34a',
        name: 'Animals & Food',
        short: 'Ani',
        emoji: '🍏',
        subtitle: 'Pets, Wild Animals & Food',
        icon: `<svg class="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>`,
        activeRing: 'bg-white/90 border border-emerald-200 text-emerald-700 shadow-2xs'
    },
    sociales: {
        headerBg: '#ea580c',
        name: 'Daily Life & House',
        short: 'Day',
        emoji: '🏠',
        subtitle: 'Rooms, Clothes & Days',
        icon: `<svg class="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>`,
        activeRing: 'bg-white/90 border border-amber-200 text-amber-700 shadow-2xs'
    },
    ingenio: {
        headerBg: '#9333ea',
        name: 'Puzzles & Riddles',
        short: 'Puz',
        emoji: '🧩',
        subtitle: 'Odd One Out & Riddles',
        icon: `<svg class="w-4 h-4 text-purple-600" fill="none" viewBox="0 0 24 24"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>`,
        activeRing: 'bg-white/90 border border-purple-200 text-purple-700 shadow-2xs'
    },
    comodin: {
        headerBg: '#6366f1',
        name: 'Comodín',
        short: 'Com',
        emoji: '🃏',
        icon: `<span class="text-base">🃏</span>`,
        activeRing: 'bg-gradient-to-b from-purple-50 to-indigo-100 ring-1.5 ring-indigo-400 text-indigo-700 shadow-2xs'
    }
};

const SUBJECT_THEME_ENGLISH2 = {
    matematica: {
        headerBg: '#2563eb',
        name: 'Past Simple & Time',
        short: 'Pas',
        emoji: '⏱️',
        subtitle: 'Was/Were & Past Verbs',
        icon: `<svg class="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.3"></path></svg>`,
        activeRing: 'bg-white/90 border border-blue-200 text-blue-700 shadow-2xs'
    },
    lengua: {
        headerBg: '#dc2626',
        name: 'Comparatives',
        short: 'Com',
        emoji: '🎒',
        subtitle: 'Adjectives & Comparison',
        icon: `<svg class="w-4 h-4 text-rose-500" fill="none" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.3"></path></svg>`,
        activeRing: 'bg-white/90 border border-rose-200 text-rose-600 shadow-2xs'
    },
    naturales: {
        headerBg: '#16a34a',
        name: 'Health & Nature',
        short: 'Nat',
        emoji: '🌿',
        subtitle: 'Body, Habitats & Weather',
        icon: `<svg class="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>`,
        activeRing: 'bg-white/90 border border-emerald-200 text-emerald-700 shadow-2xs'
    },
    sociales: {
        headerBg: '#ea580c',
        name: 'Town & Places',
        short: 'Plc',
        emoji: '🏙️',
        subtitle: 'Places, Jobs & Transport',
        icon: `<svg class="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>`,
        activeRing: 'bg-white/90 border border-amber-200 text-amber-700 shadow-2xs'
    },
    ingenio: {
        headerBg: '#9333ea',
        name: 'Puzzles & Logic',
        short: 'Puz',
        emoji: '🧩',
        subtitle: 'Prepositions, Opposites & Riddles',
        icon: `<svg class="w-4 h-4 text-purple-600" fill="none" viewBox="0 0 24 24"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>`,
        activeRing: 'bg-white/90 border border-purple-200 text-purple-700 shadow-2xs'
    },
    comodin: {
        headerBg: '#6366f1',
        name: 'Comodín',
        short: 'Com',
        emoji: '🃏',
        icon: `<span class="text-base">🃏</span>`,
        activeRing: 'bg-gradient-to-b from-purple-50 to-indigo-100 ring-1.5 ring-indigo-400 text-indigo-700 shadow-2xs'
    }
};

const SUBJECT_THEME_ENGLISH3 = {
    matematica: {
        headerBg: '#2563eb',
        name: 'Past & Continuous',
        short: 'Ten',
        emoji: '⏱️',
        subtitle: 'Past Continuous & Past Simple',
        icon: `<svg class="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.3"></path></svg>`,
        activeRing: 'bg-white/90 border border-blue-200 text-blue-700 shadow-2xs'
    },
    lengua: {
        headerBg: '#dc2626',
        name: 'Present Perfect',
        short: 'Per',
        emoji: '🎒',
        subtitle: 'Experiences & Result',
        icon: `<svg class="w-4 h-4 text-rose-500" fill="none" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.3"></path></svg>`,
        activeRing: 'bg-white/90 border border-rose-200 text-rose-600 shadow-2xs'
    },
    naturales: {
        headerBg: '#16a34a',
        name: 'Modals & Rules',
        short: 'Mod',
        emoji: '📋',
        subtitle: 'Must, Should, Have to',
        icon: `<svg class="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>`,
        activeRing: 'bg-white/90 border border-emerald-200 text-emerald-700 shadow-2xs'
    },
    sociales: {
        headerBg: '#ea580c',
        name: 'Future & If',
        short: 'Fut',
        emoji: '🔮',
        subtitle: 'Will, Going to & First Conditional',
        icon: `<svg class="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>`,
        activeRing: 'bg-white/90 border border-amber-200 text-amber-700 shadow-2xs'
    },
    ingenio: {
        headerBg: '#9333ea',
        name: 'Clauses & Words',
        short: 'Voc',
        emoji: '🧩',
        subtitle: 'Relative Clauses & Phrasal Verbs',
        icon: `<svg class="w-4 h-4 text-purple-600" fill="none" viewBox="0 0 24 24"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>`,
        activeRing: 'bg-white/90 border border-purple-200 text-purple-700 shadow-2xs'
    },
    comodin: {
        headerBg: '#6366f1',
        name: 'Comodín',
        short: 'Com',
        emoji: '🃏',
        icon: `<span class="text-base">🃏</span>`,
        activeRing: 'bg-gradient-to-b from-purple-50 to-indigo-100 ring-1.5 ring-indigo-400 text-indigo-700 shadow-2xs'
    }
};

const SUBJECT_THEME_GOGETTER4 = {
    matematica: {
        headerBg: '#2563eb',
        name: 'Tenses & Actions',
        short: 'Ten',
        emoji: '⏱️',
        subtitle: 'Present & Past Tenses',
        icon: `<svg class="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.3"></path></svg>`,
        activeRing: 'bg-white/90 border border-blue-200 text-blue-700 shadow-2xs'
    },
    lengua: {
        headerBg: '#dc2626',
        name: 'Present Perfect',
        short: 'Per',
        emoji: '🎒',
        subtitle: 'Life & Experiences',
        icon: `<svg class="w-4 h-4 text-rose-500" fill="none" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.3"></path></svg>`,
        activeRing: 'bg-white/90 border border-rose-200 text-rose-600 shadow-2xs'
    },
    naturales: {
        headerBg: '#16a34a',
        name: 'Modals & Rules',
        short: 'Mod',
        emoji: '📋',
        subtitle: 'Must, Have to, Could',
        icon: `<svg class="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>`,
        activeRing: 'bg-white/90 border border-emerald-200 text-emerald-700 shadow-2xs'
    },
    sociales: {
        headerBg: '#ea580c',
        name: 'Conditionals & Future',
        short: 'Fut',
        emoji: '🔮',
        subtitle: 'Will, Going to & If',
        icon: `<svg class="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>`,
        activeRing: 'bg-white/90 border border-amber-200 text-amber-700 shadow-2xs'
    },
    ingenio: {
        headerBg: '#9333ea',
        name: 'Clauses & Vocabulary',
        short: 'Voc',
        emoji: '🧩',
        subtitle: 'Relative Clauses & Lexis',
        icon: `<svg class="w-4 h-4 text-purple-600" fill="none" viewBox="0 0 24 24"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>`,
        activeRing: 'bg-white/90 border border-purple-200 text-purple-700 shadow-2xs'
    },
    comodin: {
        headerBg: '#6366f1',
        name: 'Comodín',
        short: 'Com',
        emoji: '🃏',
        icon: `<span class="text-base">🃏</span>`,
        activeRing: 'bg-gradient-to-b from-purple-50 to-indigo-100 ring-1.5 ring-indigo-400 text-indigo-700 shadow-2xs'
    }
};

const SUBJECT_THEME_ENGLISH5 = {
    matematica: {
        headerBg: '#2563eb',
        name: 'Past Perfect & Passive',
        short: 'Pas',
        emoji: '⏱️',
        subtitle: 'Past Perfect & Passive Voice',
        icon: `<svg class="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.3"></path></svg>`,
        activeRing: 'bg-white/90 border border-blue-200 text-blue-700 shadow-2xs'
    },
    lengua: {
        headerBg: '#dc2626',
        name: 'Second Conditional',
        short: 'Hyp',
        emoji: '🎒',
        subtitle: 'Dreams, If & Hypotheticals',
        icon: `<svg class="w-4 h-4 text-rose-500" fill="none" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.3"></path></svg>`,
        activeRing: 'bg-white/90 border border-rose-200 text-rose-600 shadow-2xs'
    },
    naturales: {
        headerBg: '#16a34a',
        name: 'Deduction & Modals',
        short: 'Ded',
        emoji: '📋',
        subtitle: 'Must be, Might, Can’t be',
        icon: `<svg class="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>`,
        activeRing: 'bg-white/90 border border-emerald-200 text-emerald-700 shadow-2xs'
    },
    sociales: {
        headerBg: '#ea580c',
        name: 'Future Predictions',
        short: 'Fut',
        emoji: '🔮',
        subtitle: 'Future Continuous & Science',
        icon: `<svg class="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>`,
        activeRing: 'bg-white/90 border border-amber-200 text-amber-700 shadow-2xs'
    },
    ingenio: {
        headerBg: '#9333ea',
        name: 'Phrasal Verbs & Vocab',
        short: 'Phr',
        emoji: '🧩',
        subtitle: 'Phrasal Verbs & Word Building',
        icon: `<svg class="w-4 h-4 text-purple-600" fill="none" viewBox="0 0 24 24"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>`,
        activeRing: 'bg-white/90 border border-purple-200 text-purple-700 shadow-2xs'
    },
    comodin: {
        headerBg: '#6366f1',
        name: 'Comodín',
        short: 'Com',
        emoji: '🃏',
        icon: `<span class="text-base">🃏</span>`,
        activeRing: 'bg-gradient-to-b from-purple-50 to-indigo-100 ring-1.5 ring-indigo-400 text-indigo-700 shadow-2xs'
    }
};

const SUBJECT_THEME_ENGLISH6 = {
    matematica: {
        headerBg: '#2563eb',
        name: 'Third Conditional',
        short: 'Con',
        emoji: '⏱️',
        subtitle: 'Past Regrets, Wish & If Only',
        icon: `<svg class="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.3"></path></svg>`,
        activeRing: 'bg-white/90 border border-blue-200 text-blue-700 shadow-2xs'
    },
    lengua: {
        headerBg: '#dc2626',
        name: 'Reported Speech',
        short: 'Rep',
        emoji: '🎒',
        subtitle: 'Indirect Speech & Questions',
        icon: `<svg class="w-4 h-4 text-rose-500" fill="none" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.3"></path></svg>`,
        activeRing: 'bg-white/90 border border-rose-200 text-rose-600 shadow-2xs'
    },
    naturales: {
        headerBg: '#16a34a',
        name: 'Advanced Modals',
        short: 'Mod',
        emoji: '📋',
        subtitle: 'Past Modals & Speculation',
        icon: `<svg class="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>`,
        activeRing: 'bg-white/90 border border-emerald-200 text-emerald-700 shadow-2xs'
    },
    sociales: {
        headerBg: '#ea580c',
        name: 'Global Issues',
        short: 'Soc',
        emoji: '🔮',
        subtitle: 'Environment & Future Society',
        icon: `<svg class="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>`,
        activeRing: 'bg-white/90 border border-amber-200 text-amber-700 shadow-2xs'
    },
    ingenio: {
        headerBg: '#9333ea',
        name: 'Verb Patterns & Idioms',
        short: 'Pat',
        emoji: '🧩',
        subtitle: 'Gerund vs Infinitive & Idioms',
        icon: `<svg class="w-4 h-4 text-purple-600" fill="none" viewBox="0 0 24 24"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>`,
        activeRing: 'bg-white/90 border border-purple-200 text-purple-700 shadow-2xs'
    },
    comodin: {
        headerBg: '#6366f1',
        name: 'Comodín',
        short: 'Com',
        emoji: '🃏',
        icon: `<span class="text-base">🃏</span>`,
        activeRing: 'bg-gradient-to-b from-purple-50 to-indigo-100 ring-1.5 ring-indigo-400 text-indigo-700 shadow-2xs'
    }
};

const SUBJECT_THEME_ENGLISH7 = {
    matematica: {
        headerBg: '#2563eb',
        name: 'Mixed Conditionals',
        short: 'Mix',
        emoji: '⏱️',
        subtitle: 'Mixed Conditionals & Inversion',
        icon: `<svg class="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.3"></path></svg>`,
        activeRing: 'bg-white/90 border border-blue-200 text-blue-700 shadow-2xs'
    },
    lengua: {
        headerBg: '#dc2626',
        name: 'Cleft & Emphasis',
        short: 'Cle',
        emoji: '🎒',
        subtitle: 'Cleft Sentences & Emphasis',
        icon: `<svg class="w-4 h-4 text-rose-500" fill="none" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.3"></path></svg>`,
        activeRing: 'bg-white/90 border border-rose-200 text-rose-600 shadow-2xs'
    },
    naturales: {
        headerBg: '#16a34a',
        name: 'Past Modals',
        short: 'Mod',
        emoji: '📋',
        subtitle: 'Should have & Speculation',
        icon: `<svg class="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>`,
        activeRing: 'bg-white/90 border border-emerald-200 text-emerald-700 shadow-2xs'
    },
    sociales: {
        headerBg: '#ea580c',
        name: 'Debate & Culture',
        short: 'Deb',
        emoji: '🔮',
        subtitle: 'Ethics, Culture & Literature',
        icon: `<svg class="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>`,
        activeRing: 'bg-white/90 border border-amber-200 text-amber-700 shadow-2xs'
    },
    ingenio: {
        headerBg: '#9333ea',
        name: 'Advanced Idioms',
        short: 'Idi',
        emoji: '🧩',
        subtitle: 'Metaphors & Nuance',
        icon: `<svg class="w-4 h-4 text-purple-600" fill="none" viewBox="0 0 24 24"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>`,
        activeRing: 'bg-white/90 border border-purple-200 text-purple-700 shadow-2xs'
    },
    comodin: {
        headerBg: '#6366f1',
        name: 'Comodín',
        short: 'Com',
        emoji: '🃏',
        icon: `<span class="text-base">🃏</span>`,
        activeRing: 'bg-gradient-to-b from-purple-50 to-indigo-100 ring-1.5 ring-indigo-400 text-indigo-700 shadow-2xs'
    }
};

const SUBJECT_THEME_ENGLISH8 = {
    matematica: {
        headerBg: '#2563eb',
        name: 'Subjunctive & Syntax',
        short: 'Sub',
        emoji: '⏱️',
        subtitle: 'Subjunctive & Advanced Syntax',
        icon: `<svg class="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.3"></path></svg>`,
        activeRing: 'bg-white/90 border border-blue-200 text-blue-700 shadow-2xs'
    },
    lengua: {
        headerBg: '#dc2626',
        name: 'Discourse & Rhetoric',
        short: 'Dis',
        emoji: '🎒',
        subtitle: 'Discourse Markers & Logic',
        icon: `<svg class="w-4 h-4 text-rose-500" fill="none" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.3"></path></svg>`,
        activeRing: 'bg-white/90 border border-rose-200 text-rose-600 shadow-2xs'
    },
    naturales: {
        headerBg: '#16a34a',
        name: 'Nuance & Precision',
        short: 'Nua',
        emoji: '📋',
        subtitle: 'Formal Register & Nuance',
        icon: `<svg class="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>`,
        activeRing: 'bg-white/90 border border-emerald-200 text-emerald-700 shadow-2xs'
    },
    sociales: {
        headerBg: '#ea580c',
        name: 'Rhetoric & Society',
        short: 'Rhe',
        emoji: '🔮',
        subtitle: 'Philosophy & Global Rhetoric',
        icon: `<svg class="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>`,
        activeRing: 'bg-white/90 border border-amber-200 text-amber-700 shadow-2xs'
    },
    ingenio: {
        headerBg: '#9333ea',
        name: 'C1 Collocations',
        short: 'Col',
        emoji: '🧩',
        subtitle: 'Academic Collocations & Logic',
        icon: `<svg class="w-4 h-4 text-purple-600" fill="none" viewBox="0 0 24 24"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>`,
        activeRing: 'bg-white/90 border border-purple-200 text-purple-700 shadow-2xs'
    },
    comodin: {
        headerBg: '#6366f1',
        name: 'Comodín',
        short: 'Com',
        emoji: '🃏',
        icon: `<span class="text-base">🃏</span>`,
        activeRing: 'bg-gradient-to-b from-purple-50 to-indigo-100 ring-1.5 ring-indigo-400 text-indigo-700 shadow-2xs'
    }
};

// --- CATÁLOGO DE AVATARES DISPONIBLES ---
const AVAILABLE_AVATARS = [
    { emoji: '🐻', name: 'Oso', bg: 'bg-amber-100', border: 'border-amber-300', gradient: 'from-amber-500 to-yellow-400' },
    { emoji: '🐬', name: 'Delfín', bg: 'bg-cyan-100', border: 'border-cyan-300', gradient: 'from-cyan-500 to-sky-400' },
    { emoji: '🦄', name: 'Unicornio', bg: 'bg-pink-100', border: 'border-pink-300', gradient: 'from-pink-500 to-rose-400' },
    { emoji: '🦁', name: 'León', bg: 'bg-orange-100', border: 'border-orange-300', gradient: 'from-orange-500 to-amber-500' },
    { emoji: '⚡', name: 'Rayo', bg: 'bg-yellow-100', border: 'border-yellow-300', gradient: 'from-yellow-400 to-amber-500' },
    { emoji: '🚀', name: 'Cohete', bg: 'bg-red-100', border: 'border-red-300', gradient: 'from-red-500 to-rose-400' },
    { emoji: '🦉', name: 'Búho', bg: 'bg-purple-100', border: 'border-purple-300', gradient: 'from-purple-500 to-indigo-400' },
    { emoji: '🦊', name: 'Zorro', bg: 'bg-amber-100', border: 'border-orange-400', gradient: 'from-amber-600 to-orange-400' },
    { emoji: '🐼', name: 'Panda', bg: 'bg-slate-200', border: 'border-slate-400', gradient: 'from-slate-600 to-slate-400' },
    { emoji: '🐯', name: 'Tigre', bg: 'bg-amber-100', border: 'border-amber-400', gradient: 'from-orange-500 to-yellow-500' },
    { emoji: '🦖', name: 'Dino', bg: 'bg-emerald-100', border: 'border-emerald-300', gradient: 'from-emerald-500 to-teal-400' },
    { emoji: '🤖', name: 'Robot', bg: 'bg-sky-100', border: 'border-sky-300', gradient: 'from-sky-500 to-blue-500' },
    { emoji: '🐱', name: 'Gatito', bg: 'bg-violet-100', border: 'border-violet-300', gradient: 'from-violet-500 to-purple-400' },
    { emoji: '🐶', name: 'Perrito', bg: 'bg-amber-100', border: 'border-amber-300', gradient: 'from-amber-500 to-orange-400' },
    { emoji: '🐙', name: 'Pulpo', bg: 'bg-rose-100', border: 'border-rose-300', gradient: 'from-rose-500 to-pink-500' },
    { emoji: '🐝', name: 'Abeja', bg: 'bg-yellow-100', border: 'border-yellow-400', gradient: 'from-yellow-500 to-amber-400' }
];

function getAvatarMetadata(emoji) {
    return AVAILABLE_AVATARS.find(a => a.emoji === emoji) || {
        emoji: emoji || '🐻',
        name: 'Avatar',
        bg: 'bg-indigo-100',
        border: 'border-indigo-300',
        gradient: 'from-indigo-500 to-blue-400'
    };
}

// --- CONTROLADOR PRINCIPAL DEL JUEGO ---
class CarreraDelSaberApp {
    constructor() {
        this.audio = new AudioFX();
        this.confetti = new ConfettiCannon('confetti-canvas');

        // Estado de Configuración
        this.grade = 6;
        this.mode = 'individual'; // 'individual' o 'teams'
        this.playerCount = 2;
        this.winGoal = 'badges'; // 'badges' (4) o 'fast' (2)
        this.questionTimeLimit = 25; // 15, 25, 40 o 0 (sin límite)
        this.playerAvatars = []; // Avatares personalizados por jugador

        // Estado de Partida
        this.players = [];
        this.currentPlayerIndex = 0;
        this.round = 1;
        this.isRolling = false;
        this.isMoving = false;
        this.currentTile = null;
        this.currentQuestion = null;
        this.timer = null;
        this.timerSeconds = 25;
        this.usedQuestions = new Set();

        // Referencias a los 9 puntos del dado
        this.diceDots = {
            tl: document.getElementById('dot-tl'),
            tc: document.getElementById('dot-tc'),
            tr: document.getElementById('dot-tr'),
            ml: document.getElementById('dot-ml'),
            mc: document.getElementById('dot-mc'),
            mr: document.getElementById('dot-mr'),
            bl: document.getElementById('dot-bl'),
            bc: document.getElementById('dot-bc'),
            br: document.getElementById('dot-br'),
        };

        this.dicePatterns = {
            1: ['mc'],
            2: ['tr', 'bl'],
            3: ['tr', 'mc', 'bl'],
            4: ['tl', 'tr', 'bl', 'br'],
            5: ['tl', 'tr', 'mc', 'bl', 'br'],
            6: ['tl', 'tr', 'ml', 'mr', 'bl', 'br']
        };

        if ('speechSynthesis' in window && window.speechSynthesis.onvoiceschanged !== undefined) {
            window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
        }

        this.bindEvents();
        this.renderSetupPlayers();
        this.renderDiceFace(5);
        this.updateGradeLabels();
        this.showSetupScreen();
    }

    speakQuestion(text, lang = null) {
        if (!('speechSynthesis' in window)) return;

        if (window.speechSynthesis.speaking) {
            window.speechSynthesis.cancel();
            const speakBtn = document.getElementById('btn-speak-question');
            if (speakBtn) speakBtn.classList.remove('ring-2', 'ring-indigo-400', 'bg-indigo-100', 'animate-pulse');
            return;
        }

        // Reemplazar líneas en blanco como _______ por una pausa natural
        const cleanedText = text.replace(/_{2,}/g, ' ... ');
        const utterance = new SpeechSynthesisUtterance(cleanedText);

        const isEnglish = this.isEnglishGrade() || lang === 'en';

        const voices = window.speechSynthesis.getVoices();

        if (isEnglish) {
            utterance.lang = 'en-GB';
            utterance.rate = 0.88; // Velocidad pedagógica y clara para inglés
            utterance.pitch = 1.0;
            // Seleccionar voz en inglés británico o inglés general
            const gbVoice = voices.find(v => v.lang === 'en-GB' || v.lang === 'en_GB') 
                         || voices.find(v => v.lang.startsWith('en'))
                         || null;
            if (gbVoice) utterance.voice = gbVoice;
        } else {
            utterance.lang = 'es-AR';
            utterance.rate = 0.95; // Velocidad clara y natural para español
            utterance.pitch = 1.0;
            // Buscar voz en español rioplatense/latinoamericano, sino cualquier voz en español
            const esVoice = voices.find(v => v.lang === 'es-AR' || v.lang === 'es_AR')
                         || voices.find(v => v.lang === 'es-US' || v.lang === 'es-MX' || v.lang === 'es-419')
                         || voices.find(v => v.lang.startsWith('es'))
                         || null;
            if (esVoice) utterance.voice = esVoice;
        }

        const speakBtn = document.getElementById('btn-speak-question');
        if (speakBtn) {
            speakBtn.classList.add('ring-2', 'ring-indigo-400', 'bg-indigo-100', 'animate-pulse');
            utterance.onend = () => {
                speakBtn.classList.remove('ring-2', 'ring-indigo-400', 'bg-indigo-100', 'animate-pulse');
            };
            utterance.onerror = () => {
                speakBtn.classList.remove('ring-2', 'ring-indigo-400', 'bg-indigo-100', 'animate-pulse');
            };
        }

        window.speechSynthesis.speak(utterance);
    }

    getGradeDisplayName(grade = this.grade) {
        if (grade === 'english1' || grade === 'gogetter1') return 'Inglés · Nivel 1';
        if (grade === 'english2' || grade === 'gogetter2') return 'Inglés · Nivel 2';
        if (grade === 'english3' || grade === 'gogetter3') return 'Inglés · Nivel 3';
        if (grade === 'english4' || grade === 'gogetter4') return 'Inglés · Nivel 4';
        if (grade === 'english5' || grade === 'gogetter5') return 'Inglés · Nivel 5';
        if (grade === 'english6' || grade === 'gogetter6') return 'Inglés · Nivel 6';
        if (grade === 'english7' || grade === 'gogetter7') return 'Inglés · Nivel 7';
        if (grade === 'english8' || grade === 'gogetter8') return 'Inglés · Nivel 8';
        return `${grade}.° Grado`;
    }

    isEnglishGrade(grade = this.grade) {
        return typeof grade === 'string' && (grade.startsWith('english') || grade.startsWith('gogetter'));
    }

    getSubjectTheme(catKey) {
        if (this.isEnglishGrade()) {
            if (this.grade === 'english1' || this.grade === 'gogetter1') {
                return SUBJECT_THEME_ENGLISH1[catKey] || SUBJECT_THEME_GOGETTER4[catKey] || SUBJECT_THEME[catKey];
            }
            if (this.grade === 'english2' || this.grade === 'gogetter2') {
                return SUBJECT_THEME_ENGLISH2[catKey] || SUBJECT_THEME_GOGETTER4[catKey] || SUBJECT_THEME[catKey];
            }
            if (this.grade === 'english3' || this.grade === 'gogetter3') {
                return SUBJECT_THEME_ENGLISH3[catKey] || SUBJECT_THEME_GOGETTER4[catKey] || SUBJECT_THEME[catKey];
            }
            if (this.grade === 'english5' || this.grade === 'gogetter5') {
                return SUBJECT_THEME_ENGLISH5[catKey] || SUBJECT_THEME_GOGETTER4[catKey] || SUBJECT_THEME[catKey];
            }
            if (this.grade === 'english6' || this.grade === 'gogetter6') {
                return SUBJECT_THEME_ENGLISH6[catKey] || SUBJECT_THEME_GOGETTER4[catKey] || SUBJECT_THEME[catKey];
            }
            if (this.grade === 'english7' || this.grade === 'gogetter7') {
                return SUBJECT_THEME_ENGLISH7[catKey] || SUBJECT_THEME_GOGETTER4[catKey] || SUBJECT_THEME[catKey];
            }
            if (this.grade === 'english8' || this.grade === 'gogetter8') {
                return SUBJECT_THEME_ENGLISH8[catKey] || SUBJECT_THEME_GOGETTER4[catKey] || SUBJECT_THEME[catKey];
            }
            return SUBJECT_THEME_GOGETTER4[catKey] || SUBJECT_THEME[catKey];
        }
        return SUBJECT_THEME[catKey];
    }

    bindEvents() {
        // Controles de Carrusel (Primaria e Inglés)
        const primaryGroup = document.getElementById('primary-grade-group');
        const englishGroup = document.getElementById('english-level-group');

        const btnPrevPrim = document.getElementById('btn-prev-primary');
        const btnNextPrim = document.getElementById('btn-next-primary');
        if (btnPrevPrim && primaryGroup) {
            btnPrevPrim.addEventListener('click', () => {
                primaryGroup.scrollBy({ left: -220, behavior: 'smooth' });
            });
        }
        if (btnNextPrim && primaryGroup) {
            btnNextPrim.addEventListener('click', () => {
                primaryGroup.scrollBy({ left: 220, behavior: 'smooth' });
            });
        }

        const btnPrevEng = document.getElementById('btn-prev-english');
        const btnNextEng = document.getElementById('btn-next-english');
        if (btnPrevEng && englishGroup) {
            btnPrevEng.addEventListener('click', () => {
                englishGroup.scrollBy({ left: -240, behavior: 'smooth' });
            });
        }
        if (btnNextEng && englishGroup) {
            btnNextEng.addEventListener('click', () => {
                englishGroup.scrollBy({ left: 240, behavior: 'smooth' });
            });
        }

        // 1. Selector de Grado o Nivel
        document.querySelectorAll('.grade-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.grade-btn').forEach(b => {
                    b.classList.remove('active', 'border-blue-600', 'bg-gradient-to-b', 'from-white', 'to-blue-50/50', 'shadow-md');
                    b.classList.add('border-slate-200/80', 'bg-slate-50/70');
                    const icon = b.querySelector('.grade-icon');
                    if (icon) {
                        icon.className = 'grade-icon w-5 h-5 rounded-full bg-white text-slate-400 border border-slate-200 flex items-center justify-center font-bold text-[10px] shadow-2xs opacity-0';
                        icon.textContent = '+';
                    }
                    const num = b.querySelector('.text-2xl, .text-xl, .text-lg');
                    if (num) {
                        num.classList.remove('text-blue-600');
                        num.classList.add(num.closest('#english-level-group') ? 'text-indigo-600' : 'text-slate-700');
                    }
                });

                btn.classList.add('active', 'border-blue-600', 'bg-gradient-to-b', 'from-white', 'to-blue-50/50', 'shadow-md');
                btn.classList.remove('border-slate-200/80', 'bg-slate-50/70');
                const activeIcon = btn.querySelector('.grade-icon');
                if (activeIcon) {
                    activeIcon.className = 'grade-icon w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-xs text-[10px] opacity-100';
                    activeIcon.textContent = '✓';
                }
                const activeNum = btn.querySelector('.text-2xl, .text-xl, .text-lg');
                if (activeNum) {
                    activeNum.classList.add('text-blue-600');
                    activeNum.classList.remove('text-slate-700');
                }

                // Centrar suavemente en el carrusel
                btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });

                const raw = btn.dataset.grade;
                this.grade = (raw.startsWith('english') || raw.startsWith('gogetter')) ? raw : parseInt(raw);
                this.updateGradeLabels();
                this.updateBoardCategoryLabels();
            });
        });

        // 2. Selector de Modo
        document.querySelectorAll('.mode-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.mode-btn').forEach(b => {
                    b.classList.remove('active', 'border-blue-500', 'bg-blue-50/50', 'shadow-sm');
                    b.classList.add('border-slate-200', 'bg-slate-50/60');
                    const t = b.querySelector('span.font-black');
                    if (t) {
                        t.classList.remove('text-blue-700');
                        t.classList.add('text-slate-800');
                    }
                });

                btn.classList.add('active', 'border-blue-500', 'bg-blue-50/50', 'shadow-sm');
                btn.classList.remove('border-slate-200', 'bg-slate-50/60');
                const activeT = btn.querySelector('span.font-black');
                if (activeT) {
                    activeT.classList.add('text-blue-700');
                    activeT.classList.remove('text-slate-800');
                }

                this.mode = btn.dataset.mode;
                this.renderSetupPlayers();
            });
        });

        // 3. Cantidad de Participantes
        document.querySelectorAll('.count-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.count-btn').forEach(b => {
                    b.classList.remove('active', 'border-2', 'border-blue-600', 'bg-blue-600', 'text-white', 'shadow-sm');
                    b.classList.add('border', 'border-slate-200', 'bg-white', 'text-slate-700');
                });

                btn.classList.add('active', 'border-2', 'border-blue-600', 'bg-blue-600', 'text-white', 'shadow-sm');
                btn.classList.remove('border', 'border-slate-200', 'bg-white', 'text-slate-700');

                this.playerCount = parseInt(btn.dataset.count);
                const infoLabel = document.getElementById('count-info-label');
                if (infoLabel) {
                    infoLabel.textContent = `${this.playerCount} ${this.mode === 'teams' ? 'Equipos' : 'Participantes'} en circuito`;
                }
                const regTag = document.getElementById('registered-badge-tag');
                if (regTag) {
                    regTag.textContent = `${this.playerCount} Registrados`;
                }
                const sideCount = document.getElementById('sidebar-players-count');
                if (sideCount) {
                    sideCount.textContent = `${this.playerCount} Jugadores`;
                }
                this.renderSetupPlayers();
            });
        });

        // 4. Selector de Objetivo
        document.querySelectorAll('.goal-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.goal-btn').forEach(b => {
                    b.classList.remove('active', 'border-blue-500', 'bg-blue-50/50', 'shadow-sm');
                    b.classList.add('border-slate-200', 'bg-slate-50/60');
                    const c = b.querySelector('.goal-check');
                    if (c) {
                        c.className = 'goal-check text-xs bg-slate-300 text-white rounded-full w-5 h-5 flex items-center justify-center opacity-0';
                        c.textContent = '+';
                    }
                    const title = b.querySelector('span.font-black');
                    if (title) {
                        title.classList.remove('text-blue-700');
                        title.classList.add('text-slate-800');
                    }
                });

                btn.classList.add('active', 'border-blue-500', 'bg-blue-50/50', 'shadow-sm');
                btn.classList.remove('border-slate-200', 'bg-slate-50/60');
                const activeC = btn.querySelector('.goal-check');
                if (activeC) {
                    activeC.className = 'goal-check text-xs bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center';
                    activeC.textContent = '✓';
                }
                const activeTitle = btn.querySelector('span.font-black');
                if (activeTitle) {
                    activeTitle.classList.add('text-blue-700');
                    activeTitle.classList.remove('text-slate-800');
                }

                this.winGoal = btn.dataset.goal;
            });
        });

        // 5. Selector de Tiempo para Responder
        document.querySelectorAll('.timer-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.timer-btn').forEach(b => {
                    b.classList.remove('active', 'border-blue-600', 'bg-blue-50/50', 'bg-gradient-to-r', 'from-white', 'to-blue-50/50', 'shadow-md');
                    b.classList.add('border-slate-200/80', 'bg-slate-50/70');
                    const c = b.querySelector('.timer-check');
                    if (c) {
                        c.className = 'timer-check w-5 h-5 rounded-full bg-white text-slate-400 border border-slate-200 flex items-center justify-center font-bold text-xs shadow-2xs opacity-0';
                        c.textContent = '+';
                    }
                    const title = b.querySelector('div.font-black');
                    if (title) {
                        title.classList.remove('text-blue-700');
                        title.classList.add('text-slate-800');
                    }
                });

                btn.classList.add('active', 'border-blue-600', 'bg-gradient-to-r', 'from-white', 'to-blue-50/50', 'shadow-md');
                btn.classList.remove('border-slate-200/80', 'bg-slate-50/70');
                const activeCheck = btn.querySelector('.timer-check');
                if (activeCheck) {
                    activeCheck.className = 'timer-check w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-xs shadow-xs';
                    activeCheck.textContent = '✓';
                }
                const activeTitle = btn.querySelector('div.font-black');
                if (activeTitle) {
                    activeTitle.classList.add('text-blue-700');
                    activeTitle.classList.remove('text-slate-800');
                }

                this.questionTimeLimit = parseInt(btn.dataset.seconds, 10);
            });
        });

        // Botón Iniciar Carrera
        const startBtn = document.getElementById('btn-start-game');
        if (startBtn) startBtn.addEventListener('click', () => this.startGame());

        // Atajo Enter
        window.addEventListener('keydown', (e) => {
            const setup = document.getElementById('setup-screen');
            if (e.key === 'Enter' && setup && !setup.classList.contains('hidden')) {
                this.startGame();
            }
        });

        // Dado y tirada interactiva
        const rollBtn = document.getElementById('rollDiceBtn');
        if (rollBtn) rollBtn.addEventListener('click', () => this.rollDice());

        const diceClick = document.getElementById('diceClickArea');
        if (diceClick) diceClick.addEventListener('click', () => this.rollDice());

        // Botón Siguiente Turno
        const nextTurnBtn = document.getElementById('btn-next-turn');
        if (nextTurnBtn) nextTurnBtn.addEventListener('click', () => this.nextTurn());

        // Alternar Sonido
        const soundBtn = document.getElementById('soundToggleBtn');
        if (soundBtn) {
            soundBtn.addEventListener('click', () => {
                const active = this.audio.toggle();
                soundBtn.textContent = active ? '🔊' : '🔇';
                soundBtn.setAttribute('title', active ? 'Sonido activado' : 'Sonido silenciado');
                if (!active && 'speechSynthesis' in window) {
                    window.speechSynthesis.cancel();
                    const speakBtn = document.getElementById('btn-speak-question');
                    if (speakBtn) speakBtn.classList.remove('ring-2', 'ring-indigo-400', 'bg-indigo-100', 'animate-pulse');
                }
            });
        }

        // Modales de Reglas
        const rulesBtn = document.getElementById('rulesToggleBtn');
        if (rulesBtn) {
            rulesBtn.addEventListener('click', () => {
                const modal = document.getElementById('rules-modal');
                if (modal) modal.classList.remove('hidden'), modal.classList.add('flex');
            });
        }

        const closeRulesBtns = [document.getElementById('btn-close-rules'), document.getElementById('btn-rules-got-it')];
        closeRulesBtns.forEach(b => {
            if (b) b.addEventListener('click', () => {
                const modal = document.getElementById('rules-modal');
                if (modal) modal.classList.add('hidden'), modal.classList.remove('flex');
            });
        });

        // Salir / Reiniciar Partida con Modal
        const btnExitGame = document.getElementById('btn-exit-game');
        const modalConfirmExit = document.getElementById('modal-confirm-exit');
        const btnCancelExit = document.getElementById('btn-cancel-exit');
        const btnConfirmExit = document.getElementById('btn-confirm-exit');

        if (btnExitGame && modalConfirmExit) {
            btnExitGame.addEventListener('click', () => {
                modalConfirmExit.classList.remove('hidden');
                modalConfirmExit.classList.add('flex');
            });
        }
        if (btnCancelExit && modalConfirmExit) {
            btnCancelExit.addEventListener('click', () => {
                modalConfirmExit.classList.add('hidden');
                modalConfirmExit.classList.remove('flex');
            });
        }
        if (btnConfirmExit && modalConfirmExit) {
            btnConfirmExit.addEventListener('click', () => {
                modalConfirmExit.classList.add('hidden');
                modalConfirmExit.classList.remove('flex');
                if (window.multiplayer && (window.multiplayer.isOnlineGameActive || window.multiplayer.roomCode)) {
                    window.multiplayer.leaveRoom();
                }
                this.showSetupScreen();
            });
        }

        const footerRestart = document.getElementById('footer-restart');
        if (footerRestart && modalConfirmExit) {
            footerRestart.addEventListener('click', () => {
                modalConfirmExit.classList.remove('hidden');
                modalConfirmExit.classList.add('flex');
            });
        }

        const playAgainBtn = document.getElementById('btn-play-again');
        if (playAgainBtn) {
            playAgainBtn.addEventListener('click', () => {
                const victory = document.getElementById('victory-modal');
                if (victory) victory.classList.add('hidden'), victory.classList.remove('flex');
                this.showSetupScreen();
            });
        }

        // Pantalla Completa
        const fsBtn = document.getElementById('footer-fullscreen');
        if (fsBtn) {
            fsBtn.addEventListener('click', () => {
                if (!document.fullscreenElement) {
                    document.documentElement.requestFullscreen().catch(() => {});
                } else {
                    if (document.exitFullscreen) document.exitFullscreen().catch(() => {});
                }
            });
        }

        const brandLink = document.getElementById('header-brand-link');
        if (brandLink) {
            brandLink.addEventListener('click', (e) => {
                e.preventDefault();
                this.showSetupScreen();
            });
        }
    }

    updateGradeLabels() {
        const isEnglish = this.isEnglishGrade();
        const displayName = this.getGradeDisplayName();
        const gradePill = document.getElementById('header-grade-pill');
        if (gradePill) {
            if (isEnglish) {
                gradePill.innerHTML = `
                    <span class="inline-flex items-center gap-1.5">
                        <svg class="w-4 h-2.5 rounded-xs shadow-2xs overflow-hidden inline-block shrink-0" viewBox="0 0 60 36">
                            <rect width="60" height="36" fill="#012169"/>
                            <path d="M0 0 L60 36 M60 0 L0 36" stroke="#ffffff" stroke-width="6"/>
                            <path d="M0 0 L60 36 M60 0 L0 36" stroke="#C8102E" stroke-width="3.5"/>
                            <path d="M30 0 v36 M0 18 h60" stroke="#ffffff" stroke-width="10"/>
                            <path d="M30 0 v36 M0 18 h60" stroke="#C8102E" stroke-width="6"/>
                        </svg>
                        <span>${displayName}</span>
                    </span>
                `;
            } else {
                gradePill.textContent = displayName;
            }
        }

        const legendLabel = document.getElementById('legend-grade-label');
        if (legendLabel) legendLabel.textContent = displayName;

        const winnerSub = document.getElementById('winner-grade-sub');
        if (winnerSub) {
            winnerSub.textContent = `¡Conquistó las preguntas de ${displayName}!`;
        }

        this.updateSetupSubjectsPreview();
        this.updateBoardCategoryLabels();
    }

    updateSetupSubjectsPreview() {
        const preview = document.getElementById('setup-subjects-preview');
        if (!preview) return;
        const cats = ['matematica', 'lengua', 'naturales', 'sociales', 'ingenio'];
        const bubbles = preview.querySelectorAll('span:not(:first-child)');
        bubbles.forEach((bubble, i) => {
            if (cats[i]) {
                const theme = this.getSubjectTheme(cats[i]);
                if (theme) {
                    bubble.textContent = theme.emoji;
                    bubble.title = theme.name;
                }
            }
        });
    }

    updateBoardCategoryLabels() {
        const isEnglish = this.isEnglishGrade();
        TILES_METADATA.forEach(tile => {
            if (tile.cat === 'comodin') return;
            const tileEl = document.getElementById(`tile-${tile.id}`);
            if (!tileEl) return;
            const span = tileEl.querySelector('span.hidden.md\\:inline');
            const theme = this.getSubjectTheme(tile.cat);
            if (span && theme) {
                span.textContent = theme.name;
            }

            // Adaptar ícono temático en casillero
            const svg = tileEl.querySelector('svg');
            let emojiSpan = tileEl.querySelector('.tile-emoji-icon');
            if (isEnglish && theme && theme.emoji) {
                if (svg) svg.style.display = 'none';
                if (!emojiSpan) {
                    emojiSpan = document.createElement('span');
                    emojiSpan.className = 'tile-emoji-icon text-xl sm:text-2xl md:text-3xl my-0.5 filter drop-shadow select-none leading-none';
                    if (span) {
                        tileEl.insertBefore(emojiSpan, span);
                    } else {
                        tileEl.appendChild(emojiSpan);
                    }
                }
                emojiSpan.textContent = theme.emoji;
                emojiSpan.style.display = 'inline-block';
            } else {
                if (svg) svg.style.display = '';
                if (emojiSpan) emojiSpan.style.display = 'none';
            }
        });
    }

    renderSetupPlayers() {
        const container = document.getElementById('players-config-list');
        if (!container) return;

        const defaultTeams = [
            { name: "Escuela San Martín", avatar: "🦁" },
            { name: "Colegio Sarmiento", avatar: "🐬" },
            { name: "Escuela Belgrano", avatar: "🚀" },
            { name: "Instituto Alberdi", avatar: "🦉" }
        ];

        const defaultIndividuals = [
            { name: "Ger", avatar: "🐻" },
            { name: "Cami", avatar: "🐬" },
            { name: "Santi", avatar: "⚡" },
            { name: "Valen", avatar: "🦄" }
        ];

        const defaults = this.mode === 'teams' ? defaultTeams : defaultIndividuals;

        // Inicializar o ajustar array this.playerAvatars si cambió el conteo o el modo
        if (!this.playerAvatars) this.playerAvatars = [];
        while (this.playerAvatars.length < this.playerCount) {
            const idx = this.playerAvatars.length;
            const defEmoji = defaults[idx % defaults.length].avatar;
            this.playerAvatars.push(getAvatarMetadata(defEmoji));
        }

        // Preservar nombres que el usuario ya haya tipeado en los inputs
        const currentNames = [];
        for (let i = 0; i < this.playerCount; i++) {
            const inp = document.getElementById(`player-input-${i}`);
            currentNames.push(inp && inp.value.trim() ? inp.value.trim() : defaults[i % defaults.length].name);
        }

        container.innerHTML = '';

        for (let i = 0; i < this.playerCount; i++) {
            const avatarObj = this.playerAvatars[i];
            const playerName = currentNames[i];

            const row = document.createElement('div');
            row.className = 'flex flex-col gap-1.5 bg-slate-50 p-2 sm:p-2.5 rounded-2xl border border-slate-200/80 shadow-xs focus-within:ring-2 focus-within:ring-blue-500 transition-all';
            row.innerHTML = `
                <div class="flex items-center gap-2.5">
                    <button type="button" class="avatar-select-btn w-11 h-11 rounded-xl ${avatarObj.bg} border-2 ${avatarObj.border} hover:scale-105 active:scale-95 transition-transform flex items-center justify-center text-xl shrink-0 shadow-xs cursor-pointer relative group" data-player-index="${i}" title="Tocá para cambiar avatar de ${playerName}">
                        <span id="player-avatar-icon-${i}">${avatarObj.emoji}</span>
                        <span class="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-white border border-slate-300 flex items-center justify-center text-[9px] text-slate-600 shadow-2xs group-hover:bg-blue-600 group-hover:text-white transition-colors">✏️</span>
                    </button>
                    <div class="flex-1 min-w-0">
                        <input type="text" id="player-input-${i}" class="w-full bg-white px-3 py-1.5 rounded-xl font-bold text-sm text-slate-800 border border-slate-200 focus:outline-none shadow-inner" 
                               value="${playerName}" maxlength="24" 
                               placeholder="Nombre de ${this.mode === 'teams' ? 'escuela' : 'alumno'}">
                    </div>
                    <button type="button" class="btn-toggle-avatar-picker text-xs font-bold text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 px-2.5 py-1.5 rounded-xl transition-colors cursor-pointer shrink-0 flex items-center gap-1" data-player-index="${i}">
                        <span>Elegir</span>
                        <span class="text-[10px]">▾</span>
                    </button>
                    <div class="hidden sm:flex items-center pr-1 text-slate-400">
                        <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span class="text-[10px] font-extrabold ml-1 uppercase text-emerald-700">Listo</span>
                    </div>
                </div>

                <!-- Selector de Avatares desplegable (16 personajes) -->
                <div id="avatar-drawer-${i}" class="hidden flex-col gap-2 pt-2.5 pb-1 px-1 border-t border-slate-200/80 mt-1 animate-fadeIn">
                    <div class="flex items-center justify-between">
                        <span class="text-[11px] font-black uppercase tracking-wider text-slate-600">Elegí tu avatar favorito:</span>
                        <button type="button" class="btn-close-avatar-drawer text-[11px] text-slate-400 hover:text-slate-600 font-bold px-1.5 py-0.5 rounded cursor-pointer" data-player-index="${i}">✕ Cerrar</button>
                    </div>
                    <div class="grid grid-cols-8 gap-1.5 sm:gap-2">
                        ${AVAILABLE_AVATARS.map(av => `
                            <button type="button" class="avatar-option-btn w-9 h-9 sm:w-10 sm:h-10 rounded-xl ${av.bg} border ${av.border} ${av.emoji === avatarObj.emoji ? 'ring-2 ring-blue-600 scale-105 shadow-sm' : 'hover:scale-110 opacity-90 hover:opacity-100'} flex items-center justify-center text-lg sm:text-xl transition-all cursor-pointer" data-player-index="${i}" data-emoji="${av.emoji}" title="${av.name}">
                                ${av.emoji}
                            </button>
                        `).join('')}
                    </div>
                </div>
            `;
            container.appendChild(row);
        }

        // Delegar eventos para abrir y cerrar el selector de avatares
        container.querySelectorAll('.avatar-select-btn, .btn-toggle-avatar-picker').forEach(btn => {
            btn.addEventListener('click', () => {
                const idx = btn.dataset.playerIndex;
                const drawer = document.getElementById(`avatar-drawer-${idx}`);
                if (drawer) {
                    const isClosed = drawer.classList.contains('hidden');
                    container.querySelectorAll('[id^="avatar-drawer-"]').forEach(d => {
                        d.classList.add('hidden');
                        d.classList.remove('flex');
                    });
                    if (isClosed) {
                        drawer.classList.remove('hidden');
                        drawer.classList.add('flex');
                    }
                }
            });
        });

        container.querySelectorAll('.btn-close-avatar-drawer').forEach(btn => {
            btn.addEventListener('click', () => {
                const idx = btn.dataset.playerIndex;
                const drawer = document.getElementById(`avatar-drawer-${idx}`);
                if (drawer) {
                    drawer.classList.add('hidden');
                    drawer.classList.remove('flex');
                }
            });
        });

        container.querySelectorAll('.avatar-option-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const pIdx = parseInt(btn.dataset.playerIndex, 10);
                const emoji = btn.dataset.emoji;
                const meta = getAvatarMetadata(emoji);
                this.playerAvatars[pIdx] = meta;

                // Actualizar ícono y colores en el botón del jugador
                const iconSpan = document.getElementById(`player-avatar-icon-${pIdx}`);
                if (iconSpan) iconSpan.textContent = meta.emoji;

                const avatarBtn = container.querySelector(`.avatar-select-btn[data-player-index="${pIdx}"]`);
                if (avatarBtn) {
                    avatarBtn.className = `avatar-select-btn w-11 h-11 rounded-xl ${meta.bg} border-2 ${meta.border} hover:scale-105 active:scale-95 transition-transform flex items-center justify-center text-xl shrink-0 shadow-xs cursor-pointer relative group`;
                }

                // Resaltar avatar elegido en el drawer
                const drawer = document.getElementById(`avatar-drawer-${pIdx}`);
                if (drawer) {
                    drawer.querySelectorAll('.avatar-option-btn').forEach(b => {
                        if (b.dataset.emoji === emoji) {
                            b.classList.add('ring-2', 'ring-blue-600', 'scale-105', 'shadow-sm');
                        } else {
                            b.classList.remove('ring-2', 'ring-blue-600', 'scale-105', 'shadow-sm');
                        }
                    });

                    setTimeout(() => {
                        drawer.classList.add('hidden');
                        drawer.classList.remove('flex');
                    }, 180);
                }

                if (this.audio) this.audio.playDiceShake();
            });
        });
    }

    showSetupScreen() {
        const setup = document.getElementById('setup-screen');
        const game = document.getElementById('game-screen');
        const btnExit = document.getElementById('btn-exit-game');
        if (setup) {
            setup.classList.remove('screen-hidden', 'hidden');
            setup.style.display = 'flex';
        }
        if (game) {
            game.classList.add('screen-hidden', 'hidden');
            game.style.display = 'none';
        }
        if (btnExit) {
            btnExit.classList.add('hidden');
            btnExit.classList.remove('flex');
        }
    }

    showGameScreen() {
        const setup = document.getElementById('setup-screen');
        const game = document.getElementById('game-screen');
        const btnExit = document.getElementById('btn-exit-game');
        if (setup) {
            setup.classList.add('screen-hidden', 'hidden');
            setup.style.display = 'none';
        }
        if (game) {
            game.classList.remove('screen-hidden', 'hidden');
            game.style.display = '';
        }
        if (btnExit) {
            btnExit.classList.remove('hidden');
            btnExit.classList.add('flex');
        }
    }

    renderDiceFace(val) {
        const diceCube = document.getElementById('diceCubeFace') || document.getElementById('diceCube');
        if (diceCube) {
            const diceFaces = [
                { value: 1, x: 0, y: 0 },
                { value: 2, x: 90, y: 0 },
                { value: 3, x: 0, y: -90 },
                { value: 4, x: 0, y: 90 },
                { value: 5, x: -90, y: 0 },
                { value: 6, x: 0, y: 180 }
            ];
            const selected = diceFaces.find(f => f.value === val) || diceFaces[0];
            this.fullRotations = (this.fullRotations || 2) + 2;
            const finalX = selected.x + (360 * this.fullRotations);
            const finalY = selected.y + (360 * this.fullRotations);
            diceCube.style.transform = `rotateX(${finalX}deg) rotateY(${finalY}deg)`;
        }
    }

    createBurst() {
        const container = document.getElementById('particlesLayer');
        const ring = document.getElementById('shockwaveRing');
        if (!container) return;

        container.innerHTML = '';
        const colors = ['#F59E0B', '#3B82F6', '#10B981', '#EC4899', '#8B5CF6', '#F97316'];
        const icons = ['⭐', '✨', '🎉', '🌟', '•'];
        const count = 18;

        for (let i = 0; i < count; i++) {
            const particle = document.createElement('div');
            particle.className = 'burst-particle text-sm select-none font-black';
            const isIcon = Math.random() > 0.45;
            if (isIcon) {
                particle.textContent = icons[Math.floor(Math.random() * icons.length)];
            } else {
                particle.style.width = `${Math.floor(Math.random() * 8 + 6)}px`;
                particle.style.height = `${Math.floor(Math.random() * 8 + 6)}px`;
                particle.style.borderRadius = '999px';
                particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            }

            const angle = (i / count) * 2 * Math.PI + (Math.random() * 0.3 - 0.15);
            const distance = Math.random() * 110 + 60;
            const dx = Math.cos(angle) * distance;
            const dy = Math.sin(angle) * distance;
            const rot = (Math.random() * 360 - 180) + 'deg';

            particle.style.setProperty('--dx', `${dx}px`);
            particle.style.setProperty('--dy', `${dy}px`);
            particle.style.setProperty('--rot', rot);
            particle.style.left = '50%';
            particle.style.top = '45%';
            container.appendChild(particle);
        }

        if (ring) {
            ring.classList.remove('opacity-0', 'shockwave-effect');
            void ring.offsetWidth;
            ring.classList.add('shockwave-effect');
        }

        setTimeout(() => {
            if (container) container.innerHTML = '';
        }, 1000);
    }

    startGame() {
        this.players = [];

        const defaultTeams = ['🦁', '🐬', '🚀', '🦉'];
        const defaultIndividuals = ['🐻', '🐬', '⚡', '🦄'];
        const defaults = this.mode === 'teams' ? defaultTeams : defaultIndividuals;

        for (let i = 0; i < this.playerCount; i++) {
            const input = document.getElementById(`player-input-${i}`);
            const name = input && input.value.trim() ? input.value.trim() : (this.mode === 'teams' ? `Escuela ${i + 1}` : `Jugador ${i + 1}`);
            
            const avatarObj = (this.playerAvatars && this.playerAvatars[i])
                ? this.playerAvatars[i]
                : getAvatarMetadata(defaults[i % defaults.length]);

            this.players.push({
                id: i,
                name: name,
                avatar: avatarObj.emoji,
                avatarBg: `${avatarObj.bg} border-2 ${avatarObj.border}`,
                tokenGradient: avatarObj.gradient,
                position: 0,
                badges: new Set(),
                score: 0
            });
        }

        this.currentPlayerIndex = 0;
        this.round = 1;
        this.usedQuestions.clear();

        this.updateGradeLabels();
        this.updateBoardCategoryLabels();

        const sideCount = document.getElementById('sidebar-players-count');
        if (sideCount) sideCount.textContent = `${this.players.length} Jugadores`;

        this.showGameScreen();
        this.renderScoreboard();
        this.updateTurnDisplay();
        this.updatePawnPositions();
        this.renderDiceFace(5);

        const helperMsg = document.getElementById('helperMessage');
        const helperIcon = document.getElementById('helperIcon');
        if (helperMsg) {
            helperMsg.textContent = `Turno de ${this.players[0].name}. ¡Tirá el dado para avanzar por el tablero!`;
        }
        if (helperIcon) helperIcon.textContent = '🎯';
    }

    renderScoreboard() {
        const desktopContainer = document.getElementById('scoreboard-list');
        const mobileContainer = document.getElementById('mobile-players-hud');
        if (!desktopContainer && !mobileContainer) return;

        if (desktopContainer) desktopContainer.innerHTML = '';
        if (mobileContainer) {
            mobileContainer.innerHTML = '';
            if (this.players.length === 2) {
                mobileContainer.className = 'xl:hidden w-full max-w-md mx-auto grid grid-cols-2 gap-2 shrink-0';
            } else if (this.players.length === 3) {
                mobileContainer.className = 'xl:hidden w-full max-w-md mx-auto grid grid-cols-3 gap-1.5 shrink-0';
            } else {
                mobileContainer.className = 'xl:hidden w-full max-w-md mx-auto grid grid-cols-2 sm:grid-cols-4 gap-1.5 shrink-0';
            }
        }

        const badgeKeys = ['matematica', 'lengua', 'naturales', 'sociales', 'ingenio'];

        this.players.forEach(p => {
            const isActive = p.id === this.currentPlayerIndex;

            // 1. Desktop card matching Stitch Redesign (compact proportional)
            if (desktopContainer) {
                const article = document.createElement('article');
                article.className = isActive
                    ? 'bg-gradient-to-r from-blue-50/90 to-indigo-50/70 border-2 border-blue-400 rounded-2xl p-3 sm:p-3.5 shadow-sm relative transition-all'
                    : 'bg-white border border-slate-200/90 rounded-2xl p-3 sm:p-3.5 shadow-xs transition-all';

                let badgesHtml = '';
                badgeKeys.forEach(k => {
                    const meta = this.getSubjectTheme(k);
                    const has = p.badges.has(k);
                    const badgeIcon = (this.isEnglishGrade() && meta.emoji)
                        ? `<span class="text-base leading-none">${meta.emoji}</span>`
                        : meta.icon;

                    if (has) {
                        badgesHtml += `
                            <div class="bg-white border-2 border-amber-300/80 rounded-xl py-1.5 px-0.5 flex flex-col items-center justify-center shadow-2xs hover:bg-amber-50/40 transition relative cursor-default" title="${meta.name} lograda">
                                ${badgeIcon}
                                <span class="text-[10px] font-black text-slate-800 leading-none mt-0.5">${meta.short}</span>
                                <span class="absolute -top-1.5 -right-1 text-[10px]">⭐</span>
                            </div>
                        `;
                    } else {
                        badgesHtml += `
                            <div class="bg-slate-50/80 border border-slate-200 rounded-xl py-1.5 px-0.5 flex flex-col items-center justify-center shadow-2xs opacity-40 grayscale hover:opacity-60 transition cursor-default" title="${meta.name} pendiente">
                                ${badgeIcon}
                                <span class="text-[10px] font-bold text-slate-400 leading-none mt-0.5">${meta.short}</span>
                            </div>
                        `;
                    }
                });

                article.innerHTML = `
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-2.5">
                            <div class="w-11 h-11 rounded-xl ${p.avatarBg || 'bg-amber-100'} border-2 border-amber-300 flex items-center justify-center text-xl shadow-inner relative shrink-0">
                                ${p.avatar}
                                ${isActive ? '<span class="absolute -bottom-1 -right-1 text-xs">⭐</span>' : ''}
                            </div>
                            <div class="min-w-0">
                                <h3 class="font-black text-slate-900 text-sm sm:text-base truncate max-w-[120px] leading-tight">${p.name}</h3>
                                <p class="text-xs font-extrabold ${isActive ? 'text-blue-600' : 'text-slate-500'} leading-tight">
                                    ${p.badges.size} / 5 Insignias
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-end gap-1 shrink-0">
                            ${isActive ? `
                            <span class="text-[9px] font-black tracking-wider bg-blue-600 text-white px-2 py-0.5 rounded-full uppercase shadow-xs">TURNO</span>
                            ` : ''}
                            <span class="text-xs font-bold text-slate-500" id="player-tile-tag-${p.id}">
                                Casilla #${p.position + 1}
                            </span>
                        </div>
                    </div>

                    <!-- Barra de progreso hacia canje de 300 puntos -->
                    <div class="mt-2 flex flex-col gap-0.5 w-full">
                        <div class="flex items-center justify-between text-xs font-bold text-slate-600">
                            <span class="flex items-center gap-1">⭐ Puntos: <strong class="text-indigo-700 font-extrabold text-xs sm:text-sm">${p.score}</strong></span>
                            <span class="text-amber-700 font-extrabold text-xs">${p.score % 300}/300 pts</span>
                        </div>
                        <div class="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                            <div class="h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full transition-all duration-300" style="width: ${Math.min(100, ((p.score % 300) / 300) * 100)}%"></div>
                        </div>
                    </div>

                    <!-- 5 Subject Insignia Medal Slots -->
                    <div class="mt-2.5 pt-2 border-t ${isActive ? 'border-blue-100' : 'border-slate-100'} grid grid-cols-5 gap-1 text-center">
                        ${badgesHtml}
                    </div>
                `;
                desktopContainer.appendChild(article);
            }

            // 2. Mobile HUD Card
            if (mobileContainer) {
                const mobArticle = document.createElement('article');
                mobArticle.className = isActive
                    ? 'p-2 rounded-2xl border-2 border-blue-500 bg-blue-50/70 shadow-xs relative flex flex-col justify-between'
                    : 'p-2 rounded-2xl border border-slate-200 bg-white shadow-xs flex flex-col justify-between';

                let miniBadges = '';
                badgeKeys.forEach(k => {
                    const meta = this.getSubjectTheme(k);
                    const has = p.badges.has(k);
                    const miniIcon = (this.isEnglishGrade() && meta.emoji)
                        ? `<span class="text-[11px] leading-none">${meta.emoji}</span>`
                        : meta.icon;
                    if (has) {
                        miniBadges += `<span title="${meta.name}">⭐</span>`;
                    } else {
                        miniBadges += `<span class="opacity-25 grayscale flex items-center justify-center" title="${meta.name}">${miniIcon}</span>`;
                    }
                });

                mobArticle.innerHTML = `
                    ${isActive ? `
                    <div class="absolute -top-2 right-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black text-[9px] tracking-wider px-2 py-0.5 rounded-full uppercase turn-glow shadow-xs">
                        Turno
                    </div>` : ''}
                    <div class="flex items-center gap-1.5 mb-1">
                        <div class="w-7 h-7 rounded-lg ${p.avatarBg} flex items-center justify-center text-sm shrink-0 shadow-inner">
                            ${p.avatar}
                        </div>
                        <div class="min-w-0">
                            <h3 class="font-extrabold text-[11px] text-slate-900 leading-none truncate">${p.name}</h3>
                            <span class="text-[9px] ${isActive ? 'text-blue-700 font-black' : 'text-slate-500 font-bold'}">Casilla #${p.position + 1}</span>
                        </div>
                    </div>
                    <div class="flex items-center justify-between ${isActive ? 'bg-white/95 border-blue-100' : 'bg-slate-50 border-slate-100'} px-1 py-0.5 rounded-lg border text-[11px]">
                        ${miniBadges}
                    </div>
                `;
                mobileContainer.appendChild(mobArticle);
            }
        });
    }

    updateTurnDisplay() {
        const player = this.players[this.currentPlayerIndex];
        const turnPill = document.getElementById('turnPill');
        if (turnPill) {
            turnPill.innerHTML = `
                <span class="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></span>
                Es el turno de <span class="text-blue-600 font-extrabold">${player.name}</span> (${player.avatar})
            `;
        }

        const roundInd = document.getElementById('round-indicator');
        if (roundInd) roundInd.textContent = `${this.round} / 10`;

        const helperMsg = document.getElementById('helperMessage');
        const helperIcon = document.getElementById('helperIcon');
        if (helperMsg) {
            helperMsg.textContent = `Turno de ${player.name}. ¡Tirá el dado para avanzar por el tablero!`;
        }
        if (helperIcon) helperIcon.textContent = '🎯';

        this.renderScoreboard();
    }

    updatePawnPositions() {
        // Limpiar todas las ranuras de fichas en los 26 casilleros
        for (let i = 1; i <= 26; i++) {
            const slot = document.getElementById(`pawns-tile-${i}`);
            if (slot) slot.innerHTML = '';
            const t = document.getElementById(`tile-${i}`);
            if (t) {
                t.classList.remove('tile-active-target', 'ring-4', 'ring-blue-500', 'scale-[1.03]');
                const oldTooltip = t.querySelector('.stitch-target-tooltip');
                if (oldTooltip) oldTooltip.remove();
            }
        }

        // Colocar cada jugador en su casillero
        this.players.forEach(p => {
            const tileNum = p.position + 1;
            const slot = document.getElementById(`pawns-tile-${tileNum}`);
            if (slot) {
                const token = document.createElement('div');
                const isActive = p.id === this.currentPlayerIndex;
                token.className = isActive
                    ? `bg-gradient-to-r from-amber-400 to-yellow-300 text-slate-900 text-[10px] font-black px-1 sm:px-2 py-0.5 rounded-full shadow-lg border border-white sm:border-2 flex items-center gap-0.5 sm:gap-1 token-bouncing z-30 ring-2 ring-yellow-400 select-none`
                    : `bg-sky-400 text-slate-900 text-[10px] font-black px-1 sm:px-1.5 py-0.5 rounded-full shadow border border-white sm:border-2 flex items-center gap-0.5 select-none`;
                token.innerHTML = `<span class="text-[10px] sm:text-xs leading-none">${p.avatar}</span><span class="hidden sm:inline">${p.name}</span>`;
                token.title = `${p.name} (Casillero #${tileNum})`;
                slot.appendChild(token);
            }
        });

        // Resaltar casillero del jugador actual con estilo Stitch
        if (this.players && this.players[this.currentPlayerIndex]) {
            const activePlayer = this.players[this.currentPlayerIndex];
            const activeTileNum = activePlayer.position + 1;
            const activeTileEl = document.getElementById(`tile-${activeTileNum}`);
            if (activeTileEl) {
                activeTileEl.classList.add('tile-active-target');
            }
        }
    }

    rollDice() {
        if (this.isRolling || this.isMoving) return;
        this.isRolling = true;

        this.audio.init();

        const rollBtn = document.getElementById('rollDiceBtn');
        const diceCube = document.getElementById('diceCubeFace') || document.getElementById('diceCube');
        const btnText = document.getElementById('btnText');
        const btnIcon = document.getElementById('btnIcon');
        const turnPill = document.getElementById('turnPill');
        const helperMsg = document.getElementById('helperMessage');
        const helperIcon = document.getElementById('helperIcon');
        const resultToast = document.getElementById('resultFloatingToast') || document.getElementById('resultToast');
        const toastValue = document.getElementById('toastValue') || document.getElementById('toastDiceHeader');
        const lastRollLog = document.getElementById('lastRollLog') || document.getElementById('toastSubtext');

        if (rollBtn) {
            rollBtn.disabled = true;
            rollBtn.classList.add('opacity-80', 'cursor-not-allowed', 'translate-y-1');
        }
        if (btnText) btnText.textContent = 'Tirando...';
        if (btnIcon) {
            btnIcon.innerHTML = `<svg class="animate-spin h-5 w-5 text-white inline-block mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path></svg>`;
        }

        if (turnPill) {
            turnPill.innerHTML = `<span class="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping"></span> Rodando el dado de la suerte...`;
        }
        if (helperIcon) helperIcon.textContent = '🎲';
        if (helperMsg) helperMsg.textContent = '¡El dado está en el aire! Crucemos los dedos...';

        if (resultToast) {
            resultToast.classList.add('hidden');
            resultToast.classList.remove('pop-in-toast');
        }

        // Animación 3D del cubo
        if (diceCube) {
            diceCube.classList.remove('dice-rolling');
            void diceCube.offsetWidth;
            diceCube.classList.add('dice-rolling');
        }

        let rollStep = 0;
        const totalSteps = 10;
        const shuffleInterval = setInterval(() => {
            rollStep++;
            this.audio.playClack(300 + rollStep * 20, 0.035);
            if (rollStep >= totalSteps) {
                clearInterval(shuffleInterval);
            }
        }, 85);

        setTimeout(() => {
            if (diceCube) {
                diceCube.classList.remove('dice-rolling');
            }

            // Quitar el cartel de "Tirando..." apenas el dado frena su movimiento
            if (btnText) btnText.textContent = '¡TIRAR DADO!';
            if (btnIcon) btnIcon.textContent = '🎲';

            const finalNumber = Math.floor(Math.random() * 6) + 1;
            if (helperIcon) helperIcon.textContent = '🎯';
            if (helperMsg) helperMsg.textContent = `¡${this.players[this.currentPlayerIndex].name} sacó un ${finalNumber}!`;
            this.renderDiceFace(finalNumber);

            this.audio.playDingSuccess();
            this.createBurst();

            const currPlayer = this.players[this.currentPlayerIndex];

            if (toastValue) {
                toastValue.textContent = `¡Sacaste un ${finalNumber}! Avanzas ${finalNumber} casillas`;
            }
            if (lastRollLog) {
                const targetTile = (currPlayer.position + finalNumber) % 26 + 1;
                const meta = TILES_METADATA[targetTile - 1];
                lastRollLog.innerHTML = `¡${currPlayer.name} avanza hacia <strong class="text-amber-300 font-extrabold">${meta.label} (Casilla #${meta.id})</strong>!`;
            }
            if (resultToast) {
                resultToast.classList.remove('hidden');
                resultToast.classList.remove('pop-in-toast');
                void resultToast.offsetWidth;
                resultToast.classList.add('pop-in-toast');
            }
            if (turnPill) {
                turnPill.innerHTML = `
                    <span class="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                    Es el turno de <span class="text-blue-600 font-extrabold">${currPlayer.name}</span> (${currPlayer.avatar})
                `;
            }

            if (this.isOnline && this.onlineManager) {
                this.onlineManager.sendDiceRoll(finalNumber);
            }

            setTimeout(() => {
                this.isRolling = false;
                this.movePlayer(finalNumber);
            }, 600);

        }, 1100);
    }

    movePlayer(steps) {
        this.isMoving = true;
        const player = this.players[this.currentPlayerIndex];
        let remainingSteps = steps;

        const helperMsg = document.getElementById('helperMessage');
        const helperIcon = document.getElementById('helperIcon');
        if (helperMsg) {
            helperMsg.textContent = `${player.name} avanza ${steps} casilleros hacia su destino...`;
        }
        if (helperIcon) helperIcon.textContent = '🏃';

        const stepInterval = setInterval(() => {
            player.position = (player.position + 1) % 26;
            this.updatePawnPositions();
            this.audio.playPawnHop();
            remainingSteps--;

            const tag = document.getElementById(`player-tile-tag-${player.id}`);
            if (tag) tag.textContent = `Casillero #${player.position + 1}`;

            if (remainingSteps <= 0) {
                clearInterval(stepInterval);
                this.isMoving = false;
                this.onPlayerLanded();
            }
        }, 220);
    }

    onPlayerLanded() {
        const player = this.players[this.currentPlayerIndex];
        const tile = TILES_METADATA[player.position];
        this.currentTile = tile;

        // Persistir inmediatamente la posicion final en Firebase al aterrizar
        if (this.isOnline && this.onlineManager && player.id === this.onlineManager.myPlayerId) {
            this.onlineManager.updatePlayerPosition(player.id, player.position);
        }

        // Si es casillero Comodín, permitir elegir materia
        if (tile.cat === 'comodin') {
            const turnPill = document.getElementById('turnPill');
            if (turnPill) {
                turnPill.innerHTML = `<span class="w-2.5 h-2.5 rounded-full bg-purple-500 animate-pulse"></span> ¡${player.name} cayó en <strong class="text-purple-600 font-black text-sm ml-1">COMODÍN</strong> (Casilla #${tile.id})!`;
            }
            const helperMsg = document.getElementById('helperMessage');
            if (helperMsg) {
                helperMsg.textContent = `¡Casillero Comodín! ${player.name} elige sobre qué materia responder.`;
            }
            if (this.isOnline && this.onlineManager) {
                this.onlineManager.sendComodinActive(tile, player);
            }
            if (!this.isOnline || (this.onlineManager && player.id === this.onlineManager.myPlayerId)) {
                setTimeout(() => {
                    this.openComodinModal(player);
                }, 650);
            }
            return;
        }

        const turnPill = document.getElementById('turnPill');
        if (turnPill) {
            turnPill.innerHTML = `<span class="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> ¡${player.name} cayó en <strong class="text-blue-600 font-black text-sm ml-1">${tile.label}</strong> (Casilla #${tile.id})!`;
        }

        const helperMsg = document.getElementById('helperMessage');
        const helperIcon = document.getElementById('helperIcon');
        if (helperMsg) {
            helperMsg.textContent = `¡Llegaste a la casilla #${tile.id}! Respondé la pregunta para sumar puntos y medallas.`;
        }
        if (helperIcon) helperIcon.textContent = '✨';

        const lastRollStatus = document.getElementById('lastRollStatus');
        if (lastRollStatus) {
            lastRollStatus.textContent = `¡En Casillero #${tile.id}!`;
        }

        setTimeout(() => {
            this.openQuestionModal(tile);
        }, 750);
    }

    openQuestionModal(tile) {
        const player = this.players[this.currentPlayerIndex];
        const theme = this.getSubjectTheme(tile.cat);

        // Filtrar preguntas del banco curricular según grado y materia
        const targetGrade = (this.grade === 'english4' || this.grade === 'gogetter4') ? 'gogetter4' : this.grade;
        let totalCategoryQuestions = QUESTIONS_DATA.filter(q => 
            (q.grade === targetGrade || (this.grade === 'english4' && q.grade === 'gogetter4')) && q.category === tile.cat
        );

        // Fallback pedagógico si el banco de ese nivel aún se está cargando
        if (totalCategoryQuestions.length === 0) {
            const fallbackGrade = typeof this.grade === 'number' ? 5 : 'gogetter4';
            totalCategoryQuestions = QUESTIONS_DATA.filter(q => q.grade === fallbackGrade && q.category === tile.cat);
        }

        let availableQuestions = totalCategoryQuestions.filter(q => 
            !this.usedQuestions.has(q.id || q.question)
        );

        if (availableQuestions.length === 0) {
            totalCategoryQuestions.forEach(q => this.usedQuestions.delete(q.id || q.question));
            availableQuestions = [...totalCategoryQuestions];
        }

        const randomIndex = Math.floor(Math.random() * availableQuestions.length);
        const question = availableQuestions[randomIndex];

        this.usedQuestions.add(question.id || question.question);
        this.currentQuestion = question;

        const remainingCount = availableQuestions.length - 1;

        // Header del modal
        const modalHeader = document.getElementById('modal-header');
        if (modalHeader && theme) modalHeader.style.backgroundColor = theme.headerBg;

        const catIcon = document.getElementById('q-category-icon');
        if (catIcon) catIcon.textContent = theme ? theme.emoji : tile.icon;

        const catLabel = theme ? theme.name : tile.label;
        const catName = document.getElementById('q-category-name');
        if (catName) catName.textContent = catLabel.toUpperCase();

        const badgeTag = document.getElementById('q-badge-indicator');
        if (badgeTag) {
            if (tile.star && !player.badges.has(tile.cat)) {
                badgeTag.style.display = 'inline-block';
                badgeTag.textContent = `⭐ ¡CASILLERO DE MEDALLA DE ${catLabel.toUpperCase()}!`;
            } else {
                badgeTag.style.display = 'none';
            }
        }

        const turnTag = document.getElementById('q-player-turn');
        if (turnTag) turnTag.innerHTML = `Turno de: <strong>${player.avatar} ${player.name}</strong>`;

        const gradeTag = document.getElementById('q-grade-tag');
        if (gradeTag) {
            const label = this.getGradeDisplayName();
            gradeTag.textContent = `${label} · ${remainingCount} restantes`;
        }

        const questionText = document.getElementById('question-text');
        if (questionText) questionText.textContent = question.question;

        // Configurar botón de audio pronunciación y lectura en voz alta (Español e Inglés)
        if ('speechSynthesis' in window) window.speechSynthesis.cancel();
        const speakBtn = document.getElementById('btn-speak-question');
        if (speakBtn) {
            speakBtn.classList.remove('ring-2', 'ring-indigo-400', 'bg-indigo-100', 'animate-pulse');
            speakBtn.classList.remove('hidden');
            speakBtn.classList.add('flex');
            speakBtn.onclick = (e) => {
                e.stopPropagation();
                this.speakQuestion(question.question);
            };

            // Reproducción automática SOLO si el sonido general está habilitado
            if (this.audio && this.audio.enabled) {
                setTimeout(() => {
                    const modal = document.getElementById('question-modal');
                    if (modal && !modal.classList.contains('hidden') && this.currentQuestion === question) {
                        this.speakQuestion(question.question);
                    }
                }, 350);
            }
        }

        // Opciones interactivas con barajado aleatorio (Fisher-Yates Shuffle)
        const optionsGrid = document.getElementById('options-grid');
        if (optionsGrid) {
            optionsGrid.innerHTML = '';
            const letters = ['A', 'B', 'C', 'D'];

            // Crear array mapeado identificando la opción correcta original
            const mappedOptions = question.options.map((optText, origIdx) => ({
                text: optText,
                isCorrect: origIdx === question.correct
            }));

            // Barajar aleatoriamente el orden de las opciones (A, B, C, D)
            for (let i = mappedOptions.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [mappedOptions[i], mappedOptions[j]] = [mappedOptions[j], mappedOptions[i]];
            }

            // Guardar el nuevo índice donde quedó la respuesta correcta
            this.currentCorrectOptionIndex = mappedOptions.findIndex(o => o.isCorrect);

            mappedOptions.forEach((opt, idx) => {
                const btn = document.createElement('button');
                btn.className = 'option-btn flex items-center gap-2.5 py-2.5 px-3 sm:py-3 sm:px-3.5 rounded-xl bg-slate-50 hover:bg-blue-50/60 font-bold text-xs sm:text-sm text-left border-2 border-slate-200 hover:border-blue-400 transition-all cursor-pointer shadow-xs active:translate-y-0.5 text-slate-800';
                btn.innerHTML = `
                    <span class="w-8 h-8 rounded-xl bg-white shadow-xs flex items-center justify-center font-black text-xs text-slate-700 shrink-0 border border-slate-200">${letters[idx]}</span>
                    <span class="flex-1">${opt.text}</span>
                `;
                btn.addEventListener('click', () => this.handleAnswer(idx));
                optionsGrid.appendChild(btn);
            });
        }

        const feedbackBox = document.getElementById('feedback-box');
        const feedbackExp = document.getElementById('feedback-explanation');
        if (feedbackExp) feedbackExp.textContent = '';
        if (feedbackBox) {
            feedbackBox.classList.add('hidden');
            feedbackBox.className = 'hidden p-4 rounded-2xl border flex flex-col gap-2 mt-2';
        }

        const modal = document.getElementById('question-modal');
        if (modal) {
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        }

        if (this.isOnline && this.onlineManager) {
            this.onlineManager.sendQuestionOpened(tile, question);
        }

        this.startQuestionTimer();
    }

    startQuestionTimer() {
        if (this.timer) clearInterval(this.timer);

        const timerNum = document.getElementById('timer-number');
        const timerBar = document.getElementById('timer-bar');

        // Modo Sin Límite de Tiempo (Infinito)
        if (this.questionTimeLimit === 0) {
            if (timerNum) {
                timerNum.textContent = '♾️';
                timerNum.title = 'Sin límite de tiempo';
            }
            if (timerBar) {
                timerBar.style.width = '100%';
                timerBar.style.backgroundColor = '#10b981';
            }
            return;
        }

        const maxSecs = this.questionTimeLimit || 25;
        this.timerSeconds = maxSecs;

        if (timerNum) timerNum.textContent = this.timerSeconds;
        if (timerBar) {
            timerBar.style.width = '100%';
            timerBar.style.backgroundColor = '#10b981';
        }

        this.timer = setInterval(() => {
            this.timerSeconds--;
            if (timerNum) timerNum.textContent = this.timerSeconds;

            const percentage = Math.max(0, (this.timerSeconds / maxSecs) * 100);
            if (timerBar) {
                timerBar.style.width = `${percentage}%`;

                const dangerThreshold = Math.max(4, Math.floor(maxSecs * 0.25));
                const warningThreshold = Math.max(8, Math.floor(maxSecs * 0.5));

                if (this.timerSeconds <= dangerThreshold) {
                    timerBar.style.backgroundColor = '#ef4444';
                } else if (this.timerSeconds <= warningThreshold) {
                    timerBar.style.backgroundColor = '#f59e0b';
                }
            }

            if (this.timerSeconds <= 0) {
                clearInterval(this.timer);
                this.handleAnswer(-1);
            }
        }, 1000);
    }

    handleAnswer(selectedIndex) {
        clearInterval(this.timer);
        if ('speechSynthesis' in window) window.speechSynthesis.cancel();

        const optionsBtns = document.querySelectorAll('.option-btn');
        optionsBtns.forEach(b => b.disabled = true);

        const isCorrect = selectedIndex === (this.currentCorrectOptionIndex !== undefined ? this.currentCorrectOptionIndex : this.currentQuestion.correct);
        const player = this.players[this.currentPlayerIndex];
        const tile = this.currentTile;
        const theme = tile ? this.getSubjectTheme(tile.cat) : null;

        if (selectedIndex >= 0 && optionsBtns[selectedIndex]) {
            if (isCorrect) {
                optionsBtns[selectedIndex].className = 'option-btn flex items-center gap-3 p-3.5 rounded-2xl bg-green-100 border-2 border-emerald-500 font-bold text-sm text-emerald-900';
            } else {
                optionsBtns[selectedIndex].className = 'option-btn flex items-center gap-3 p-3.5 rounded-2xl bg-red-100 border-2 border-red-500 font-bold text-sm text-red-900';
            }
        }

        const correctIdx = (this.currentCorrectOptionIndex !== undefined ? this.currentCorrectOptionIndex : this.currentQuestion.correct);
        if (optionsBtns[correctIdx]) {
            optionsBtns[correctIdx].className = 'option-btn flex items-center gap-3 p-3.5 rounded-2xl bg-green-100 border-2 border-emerald-500 font-bold text-sm text-emerald-900';
        }

        const feedbackBox = document.getElementById('feedback-box');
        const feedbackTitle = document.getElementById('feedback-title');
        const feedbackExp = document.getElementById('feedback-explanation');

        if (feedbackBox) {
            feedbackBox.classList.remove('hidden');

            let wonMedal = false;
            if (isCorrect) {
                this.audio.playCorrect();
                const prevScore = player.score;
                player.score += 100;

                // Verificar si alcanzó múltiplo de 300 puntos y aún le faltan medallas
                const prevThreshold = Math.floor(prevScore / 300);
                const newThreshold = Math.floor(player.score / 300);
                if (newThreshold > prevThreshold && player.badges.size < 5) {
                    player.pendingMedalRedeem = true;
                }

                let extraMsg = '';
                if (tile.star && !player.badges.has(tile.cat)) {
                    player.badges.add(tile.cat);
                    wonMedal = true;
                    const catLabel = theme ? theme.name : tile.label;
                    extraMsg = ` ¡Ganaste la medalla de ${catLabel}! 🎖️`;
                    this.audio.playBadgeWon();
                    this.confetti.fire();
                }

                feedbackBox.className = 'p-3 sm:p-3.5 rounded-2xl border-2 border-emerald-300 bg-emerald-50 text-emerald-900 flex flex-col gap-1.5 mt-1';
                if (feedbackTitle) feedbackTitle.textContent = `¡CORRECTO! 🎉${extraMsg}`;
            } else {
                this.audio.playWrong();
                feedbackBox.className = 'p-3 sm:p-3.5 rounded-2xl border-2 border-red-300 bg-red-50 text-red-900 flex flex-col gap-1.5 mt-1';
                if (feedbackTitle) {
                    feedbackTitle.textContent = selectedIndex === -1 ? '¡TIEMPO AGOTADO! ⏰' : '¡INCORRECTO! ❌';
                }
            }

            if (feedbackExp) feedbackExp.textContent = this.currentQuestion.explanation;
        }

        this.renderScoreboard();

        if (this.isOnline && this.onlineManager) {
            this.onlineManager.sendAnswer(
                isCorrect,
                player.position,
                Array.from(player.badges),
                player.score,
                tile.label,
                wonMedal,
                this.currentQuestion.explanation
            );
        }

        const requiredBadges = this.winGoal === 'fast' ? 2 : 4;
        if (player.badges.size >= requiredBadges) {
            setTimeout(() => {
                const modal = document.getElementById('question-modal');
                if (modal) modal.classList.add('hidden'), modal.classList.remove('flex');
                this.triggerVictory(player);
            }, 2500);
        }
    }

    nextTurn() {
        if ('speechSynthesis' in window) window.speechSynthesis.cancel();
        const modal = document.getElementById('question-modal');
        if (modal) modal.classList.add('hidden'), modal.classList.remove('flex');

        const player = this.players[this.currentPlayerIndex];
        // Si el jugador sumó 300 puntos y tiene pendiente canjear su medalla (Opción A)
        if (player && player.pendingMedalRedeem) {
            if (!this.isOnline || (this.onlineManager && player.id === this.onlineManager.myPlayerId)) {
                this.openPointsRedeemModal(player);
                return;
            }
        }

        if (this.isOnline && this.onlineManager) {
            this.onlineManager.advanceTurn();
            return;
        }

        this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;
        if (this.currentPlayerIndex === 0) {
            this.round++;
        }

        this.updateTurnDisplay();
        this.updatePawnPositions();

        const rollBtn = document.getElementById('rollDiceBtn');
        const btnText = document.getElementById('btnText');
        const btnIcon = document.getElementById('btnIcon');

        if (rollBtn) {
            rollBtn.disabled = false;
            rollBtn.classList.add('shadow-3d-btn');
            rollBtn.classList.remove('opacity-80', 'cursor-not-allowed', 'translate-y-1');
        }
        if (btnText) btnText.textContent = '¡TIRAR DADO!';
        if (btnIcon) btnIcon.textContent = '🎲';

        const nextPlayer = this.players[this.currentPlayerIndex];
        const helperMsg = document.getElementById('helperMessage');
        const helperIcon = document.getElementById('helperIcon');
        if (helperMsg) {
            helperMsg.textContent = `Turno de ${nextPlayer.name}. ¡Tirá el dado para avanzar!`;
        }
        if (helperIcon) helperIcon.textContent = '🎯';

        const lastRollStatus = document.getElementById('lastRollStatus');
        if (lastRollStatus) {
            lastRollStatus.textContent = '¡Listo para tirar!';
        }
    }

    triggerVictory(player) {
        this.audio.playVictory();
        this.confetti.fire();

        const winnerAvatar = document.getElementById('winner-avatar');
        if (winnerAvatar) winnerAvatar.textContent = player.avatar;

        const winnerName = document.getElementById('winner-name');
        if (winnerName) winnerName.textContent = player.name;

        const badgesContainer = document.getElementById('winner-badges-show');
        if (badgesContainer) {
            badgesContainer.innerHTML = '';
            if (player.badges && player.badges.size > 0) {
                player.badges.forEach(catKey => {
                    const theme = this.getSubjectTheme(catKey);
                    if (!theme) return;
                    const badgeIcon = (this.isEnglishGrade() && theme.emoji)
                        ? `<span class="text-xl leading-none">${theme.emoji}</span>`
                        : theme.icon;
                    const badgeCard = document.createElement('div');
                    badgeCard.className = `w-12 h-12 rounded-2xl flex flex-col items-center justify-center shadow-xs border-2 ${theme.activeRing} relative p-1`;
                    badgeCard.innerHTML = `
                        <div class="scale-110 flex items-center justify-center">${badgeIcon}</div>
                        <span class="text-[9px] font-black text-slate-700 mt-0.5 leading-none">${theme.short}</span>
                        <span class="absolute -top-1 -right-1 text-[10px]">⭐</span>
                    `;
                    badgeCard.title = theme.name;
                    badgesContainer.appendChild(badgeCard);
                });
            } else {
                badgesContainer.innerHTML = '<span class="text-xs font-extrabold text-amber-700 bg-amber-100/80 border border-amber-300 px-3 py-1 rounded-full shadow-2xs">⭐ ¡Victoria por Puntos Acumulados!</span>';
            }
        }

        const victoryModal = document.getElementById('victory-modal');
        if (victoryModal) {
            victoryModal.classList.remove('hidden');
            victoryModal.classList.add('flex');
        }
    }

    // =========================================================================
    // MODO ESPECTADOR EN VIVO (ONLINE MULTIPLAYER REAL-TIME)
    // =========================================================================
    showRemoteRoll(rollerId, diceValue) {
        const roller = this.players.find(p => p.id === rollerId) || this.players[this.currentPlayerIndex];
        const diceCube = document.getElementById('diceCubeFace') || document.getElementById('diceCube');
        const turnPill = document.getElementById('turnPill');
        const helperMsg = document.getElementById('helperMessage');
        const resultToast = document.getElementById('resultFloatingToast') || document.getElementById('resultToast');
        const toastValue = document.getElementById('toastValue') || document.getElementById('toastDiceHeader');
        const lastRollLog = document.getElementById('lastRollLog') || document.getElementById('toastSubtext');

        if (turnPill) {
            turnPill.innerHTML = `<span class="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping"></span> ${roller.name} está tirando el dado...`;
        }
        if (helperMsg) {
            helperMsg.textContent = `${roller.name} está tirando el dado en vivo...`;
        }

        if (diceCube) {
            diceCube.classList.remove('dice-rolling');
            void diceCube.offsetWidth;
            diceCube.classList.add('dice-rolling');
        }

        setTimeout(() => {
            if (diceCube) {
                diceCube.classList.remove('dice-rolling');
            }
            this.renderDiceFace(diceValue);
            this.audio.playDingSuccess();
            this.createBurst();

            if (toastValue) {
                toastValue.textContent = `¡${roller.name} sacó un ${diceValue}! Avanza ${diceValue} casillas`;
            }
            if (lastRollLog) {
                const targetTile = (roller.position + diceValue) % 26 + 1;
                const meta = TILES_METADATA[targetTile - 1];
                lastRollLog.innerHTML = `¡${roller.name} avanza hacia <strong class="text-amber-300 font-extrabold">${meta.label} (Casilla #${meta.id})</strong>!`;
            }
            if (resultToast) {
                resultToast.classList.remove('hidden');
                resultToast.classList.remove('pop-in-toast');
                void resultToast.offsetWidth;
                resultToast.classList.add('pop-in-toast');
            }
            if (turnPill) {
                turnPill.innerHTML = `
                    <span class="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                    Es el turno de <span class="text-blue-600 font-extrabold">${currPlayer.name}</span> (${currPlayer.avatar})
                `;
            }

            setTimeout(() => {
                this.remoteMovePlayer(roller, diceValue);
            }, 600);
        }, 1100);
    }

    remoteMovePlayer(player, steps) {
        this.isMoving = true;
        let remainingSteps = steps;

        const helperMsg = document.getElementById('helperMessage');
        const helperIcon = document.getElementById('helperIcon');
        if (helperMsg) {
            helperMsg.textContent = `${player.name} avanza ${steps} casilleros por la pista...`;
        }
        if (helperIcon) helperIcon.textContent = '🏃';

        const stepInterval = setInterval(() => {
            player.position = (player.position + 1) % 26;
            this.updatePawnPositions();
            this.audio.playPawnHop();
            remainingSteps--;

            const tag = document.getElementById(`player-tile-tag-${player.id}`);
            if (tag) tag.textContent = `Casillero #${player.position + 1}`;

            if (remainingSteps <= 0) {
                clearInterval(stepInterval);
                this.isMoving = false;
                const tile = TILES_METADATA[player.position];
                const turnPill = document.getElementById('turnPill');
                if (turnPill) {
                    turnPill.innerHTML = `<span class="w-2.5 h-2.5 rounded-full bg-indigo-500"></span> ¡${player.name} cayó en <strong>${tile.label}</strong> (Casilla #${tile.id})!`;
                }
                if (helperMsg) {
                    helperMsg.textContent = `${player.name} cayó en ${tile.label}. Esperando que responda su pregunta...`;
                }
            }
        }, 220);
    }

    showSpectatorQuestion(qData) {
        const hud = document.getElementById('spectator-hud');
        if (!hud) return;
        hud.classList.remove('hidden');
        hud.classList.add('flex');

        const title = document.getElementById('spectator-hud-title');
        const cat = document.getElementById('spectator-hud-category');
        const qText = document.getElementById('spectator-hud-question');
        const status = document.getElementById('spectator-hud-status');

        if (title) title.textContent = `EN VIVO · TURNO DE ${qData.playerName.toUpperCase()}`;
        if (cat) cat.textContent = `${qData.categoryIcon || '📚'} ${qData.categoryLabel}`;
        if (qText) qText.textContent = `"${qData.questionText}"`;
        if (status) {
            status.innerHTML = `<span class="flex items-center gap-1.5"><span class="animate-spin text-indigo-600">⏳</span> <span>${qData.playerName} está pensando la respuesta...</span></span>`;
        }

        const helperMsg = document.getElementById('helperMessage');
        if (helperMsg) helperMsg.textContent = `Observando la jugada de ${qData.playerName}...`;
    }

    showSpectatorResult(resData) {
        const hud = document.getElementById('spectator-hud');
        if (hud) {
            hud.classList.remove('hidden');
            hud.classList.add('flex');
        }

        const status = document.getElementById('spectator-hud-status');
        if (resData.isCorrect) {
            this.audio.playCorrect();
            if (resData.wonMedal) {
                this.audio.playBadgeWon();
                this.confetti.fire();
            }
            if (status) {
                status.innerHTML = `<span class="text-emerald-700 font-black flex items-center gap-1.5 text-xs sm:text-sm"><span>🎉</span> <span>¡${resData.playerName} acertó! (+100 pts)${resData.wonMedal ? ' 🎖️ ¡Ganó medalla!' : ''}</span></span>`;
            }
        } else {
            this.audio.playWrong();
            if (status) {
                status.innerHTML = `<span class="text-rose-600 font-black flex items-center gap-1.5 text-xs sm:text-sm"><span>❌</span> <span>${resData.playerName} no acertó. ¡Ahora es tu turno!</span></span>`;
            }
        }

        const qText = document.getElementById('spectator-hud-question');
        if (qText && resData.explanation) {
            qText.textContent = resData.explanation;
        }

        this.renderScoreboard();
    }

    hideSpectatorHUD() {
        const hud = document.getElementById('spectator-hud');
        if (hud) {
            hud.classList.add('hidden');
            hud.classList.remove('flex');
        }
    }


    // =========================================================================
    // MODAL DE COMODÍN Y CANJE DE PUNTOS (OPCIÓN A)
    // =========================================================================
    openComodinModal(player) {
        const modal = document.getElementById('comodin-modal');
        if (!modal) return;
        modal.classList.remove('hidden');
        modal.classList.add('flex');

        const buttons = modal.querySelectorAll('.comodin-subject-btn');
        buttons.forEach(btn => {
            const category = btn.dataset.category;
            const theme = this.getSubjectTheme(category);
            const titleEl = btn.querySelector('.font-black');
            if (titleEl && theme) titleEl.textContent = theme.name;
            const subEl = btn.querySelector('.text-\\[10px\\]');
            if (subEl && theme && theme.subtitle) subEl.textContent = theme.subtitle;
            const iconEl = btn.querySelector('span.rounded-xl');
            if (iconEl && theme) iconEl.textContent = theme.emoji;

            btn.onclick = () => {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
                
                const chosenTile = {
                    id: this.currentTile ? this.currentTile.id : 5,
                    cat: category,
                    label: theme ? theme.name : 'Materia',
                    icon: theme ? theme.emoji : '📚',
                    star: false
                };
                this.currentTile = chosenTile;
                this.openQuestionModal(chosenTile);
            };
        });
    }

    openPointsRedeemModal(player) {
        const modal = document.getElementById('points-redeem-modal');
        if (!modal) return;

        const nameEl = document.getElementById('redeem-modal-player-name');
        if (nameEl) nameEl.textContent = `¡Felicitaciones ${player.name}! Sumaste ${player.score} puntos`;

        const list = document.getElementById('redeem-badges-list');
        if (list) {
            list.innerHTML = '';
            const allCats = [
                { cat: 'matematica', name: this.getSubjectTheme('matematica').name, icon: this.getSubjectTheme('matematica').emoji, bg: 'bg-blue-50 border-blue-300 text-blue-800' },
                { cat: 'lengua', name: this.getSubjectTheme('lengua').name, icon: this.getSubjectTheme('lengua').emoji, bg: 'bg-red-50 border-red-300 text-red-800' },
                { cat: 'naturales', name: this.getSubjectTheme('naturales').name, icon: this.getSubjectTheme('naturales').emoji, bg: 'bg-emerald-50 border-emerald-300 text-emerald-800' },
                { cat: 'sociales', name: this.getSubjectTheme('sociales').name, icon: this.getSubjectTheme('sociales').emoji, bg: 'bg-orange-50 border-orange-300 text-orange-800' },
                { cat: 'ingenio', name: this.getSubjectTheme('ingenio').name, icon: this.getSubjectTheme('ingenio').emoji, bg: 'bg-purple-50 border-purple-300 text-purple-800' }
            ];

            const available = allCats.filter(c => !player.badges.has(c.cat));

            available.forEach(item => {
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.className = `p-3.5 rounded-2xl border-2 ${item.bg} flex items-center gap-3 font-black text-sm text-left hover:scale-[1.02] active:scale-95 transition-all cursor-pointer shadow-xs`;
                btn.innerHTML = `
                    <span class="w-10 h-10 rounded-xl bg-white shadow-xs flex items-center justify-center text-2xl border border-slate-200 shrink-0">${item.icon}</span>
                    <div class="flex flex-col">
                        <span class="text-sm font-black">${item.name}</span>
                        <span class="text-[10px] font-bold opacity-80">Sumar medalla ⭐</span>
                    </div>
                `;
                btn.onclick = () => {
                    modal.classList.add('hidden');
                    modal.classList.remove('flex');
                    player.badges.add(item.cat);
                    player.pendingMedalRedeem = false;

                    this.audio.playBadgeWon();
                    this.confetti.fire();

                    this.renderScoreboard();

                    if (this.isOnline && this.onlineManager) {
                        this.onlineManager.sendMedalRedeemed(item.cat, item.name, player.position, Array.from(player.badges), player.score);
                    } else {
                        // Comprobar victoria o avanzar
                        const requiredBadges = this.winGoal === 'fast' ? 2 : 4;
                        if (player.badges.size >= requiredBadges) {
                            setTimeout(() => this.triggerVictory(player), 1200);
                        } else {
                            setTimeout(() => {
                                this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;
                                if (this.currentPlayerIndex === 0) this.round++;
                                this.updateTurnDisplay();
                                this.updatePawnPositions();
                                const rollBtn = document.getElementById('rollDiceBtn');
                                if (rollBtn) {
                                    rollBtn.disabled = false;
                                    rollBtn.classList.remove('opacity-80', 'cursor-not-allowed', 'translate-y-1');
                                    rollBtn.classList.add('shadow-3d-btn');
                                }
                            }, 1000);
                        }
                    }
                };
                list.appendChild(btn);
            });
        }

        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }
}

// Inicialización cuando carga la ventana
window.addEventListener('DOMContentLoaded', () => {
    window.game = new CarreraDelSaberApp();


});
