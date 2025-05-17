// Konfigurace Supabase
const SUPABASE_URL = 'https://hvimbgzyjvcefcrqwsoo.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh2aW1iZ3p5anZjZWZjcnF3c29vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYyNTk5NDEsImV4cCI6MjA2MTgzNTk0MX0.7K2Ejpm2zzAW0IG_xK37Nqc9TVViB_Eflr9hw1MjrG0';

// Seznam osobností s metadaty
const politicians = [
    { id: 1, name: "Jaromír Nohavica", info: "písničkář", imageUrl: 'https://res.cloudinary.com/dczbdtglm/image/upload/v1747491799/nohavica_kloo8e.png' },
    { id: 2, name: "Marie Rottrová", info: "zpěvačka", imageUrl: 'https://res.cloudinary.com/dczbdtglm/image/upload/v1747491801/rottrova_n3mevo.png' },
    { id: 3, name: "Milan Baroš", info: "fotbalista", imageUrl: 'https://res.cloudinary.com/dczbdtglm/image/upload/v1747491795/baros_gb6jhe.png' },
    { id: 4, name: "Štěpán Kozub", info: "komik a herec", imageUrl: 'https://res.cloudinary.com/dczbdtglm/image/upload/v1747491798/kozub_xpybla.png' },
    { id: 5, name: "Tomáš Macura", info: "politik", imageUrl: 'https://res.cloudinary.com/dczbdtglm/image/upload/v1747491798/macura_sglolw.png' },
    { id: 6, name: "Jan Dohnal", info: "politik", imageUrl: 'https://res.cloudinary.com/dczbdtglm/image/upload/v1747491795/dohnal_z7wpqh.png' },
    { id: 7, name: "Lubomír Zaorálek", info: "politik", imageUrl: 'https://res.cloudinary.com/dczbdtglm/image/upload/v1747491802/zaoralek_mhikk5.png' },
    { id: 8, name: "Ivo Vondrák", info: "politik", imageUrl: 'https://res.cloudinary.com/dczbdtglm/image/upload/v1747491802/vondrak_u5lj1s.png' },
    { id: 9, name: "Evžen Tošenovský", info: "politik", imageUrl: 'https://res.cloudinary.com/dczbdtglm/image/upload/v1747491802/tosenovsky_eeoabj.png' },
    { id: 10, name: "Dominika Myslivcová", info: "influencerka", imageUrl: 'https://res.cloudinary.com/dczbdtglm/image/upload/v1747491798/myslivcova_izzg9q.png' },
    { id: 11, name: "Jan Světlík", info: "podnikatel", imageUrl: 'https://res.cloudinary.com/dczbdtglm/image/upload/v1747491802/svetlik_gjjnxv.png' },
    { id: 12, name: "Zlata Holušová", info: "kulturní organizátorka", imageUrl: 'https://res.cloudinary.com/dczbdtglm/image/upload/v1747491797/holusova_lrmzpy.png' },
    { id: 13, name: "Marek Jankulovski", info: "fotbalista", imageUrl: 'https://res.cloudinary.com/dczbdtglm/image/upload/v1747491798/jankulovski_dsitp1.png' },
    { id: 14, name: "Martin Chodúr", info: "zpěvák", imageUrl: 'https://res.cloudinary.com/dczbdtglm/image/upload/v1747491796/chodur_oiieox.png' },
    { id: 15, name: "Sergei Barracuda", info: "rapper", imageUrl: 'https://res.cloudinary.com/dczbdtglm/image/upload/v1747491795/barracuda_z7eu5b.png' },
    { id: 16, name: "Radek Pastrňák", info: "hudebník", imageUrl: 'https://res.cloudinary.com/dczbdtglm/image/upload/v1747491800/pastrnak_xjuq9i.png' },
    { id: 17, name: "Albert Čuba", info: "herec", imageUrl: 'https://res.cloudinary.com/dczbdtglm/image/upload/v1747491796/cuba_lfepnd.png' },
    { id: 18, name: "Jan Petrus", info: "youtuber", imageUrl: 'https://res.cloudinary.com/dczbdtglm/image/upload/v1747491799/petrus_oultvs.png' },
    { id: 19, name: "Josef Bělica", info: "politik", imageUrl: 'https://res.cloudinary.com/dczbdtglm/image/upload/v1747491795/belica_ftu365.png' },
    { id: 20, name: "Karin Lednická", info: "spisovatelka", imageUrl: 'https://res.cloudinary.com/dczbdtglm/image/upload/v1747491798/lednicka_ny17s1.png' },
    { id: 21, name: "Zuzana Klusová", info: "aktivistka", imageUrl: 'https://res.cloudinary.com/dczbdtglm/image/upload/v1747491798/klusova_itybmc.png' },
    { id: 22, name: "Pavel Dobeš", info: "písničkář", imageUrl: 'https://res.cloudinary.com/dczbdtglm/image/upload/v1747491797/dobes_dnmsfl.png' },
    { id: 23, name: "Lucie Baránková Vilamová", info: "politička", imageUrl: 'https://res.cloudinary.com/dczbdtglm/image/upload/v1747491795/barankova_ux7jnp.png' },
    { id: 24, name: "Kateřina Šebestová", info: "politička", imageUrl: 'https://res.cloudinary.com/dczbdtglm/image/upload/v1747491802/sebestova_shflni.png' },
    { id: 25, name: "Miloš Holaň", info: "hokejový trenér", imageUrl: 'https://res.cloudinary.com/dczbdtglm/image/upload/v1747491797/holan_nnartg.png' },
    { id: 26, name: "Verner Lička", info: "fotbalista", imageUrl: 'https://res.cloudinary.com/dczbdtglm/image/upload/v1747491798/licka_heykmv.png' },
    { id: 27, name: "Jarmila Hájková", info: "divadelní manažerka", imageUrl: 'https://res.cloudinary.com/dczbdtglm/image/upload/v1747491797/hajkova_u8yxkq.png' },
    { id: 28, name: "Eva Dřízgová-Jirušová", info: "operní pěvkyně", imageUrl: 'https://res.cloudinary.com/dczbdtglm/image/upload/v1747491797/drizgova_oe0wzg.png' },
    { id: 29, name: "Rostislav Olesz", info: "hokejista", imageUrl: 'https://res.cloudinary.com/dczbdtglm/image/upload/v1747491799/olesz_uylooh.png' },
    { id: 30, name: "Tomáš Etzler", info: "novinář", imageUrl: 'https://res.cloudinary.com/dczbdtglm/image/upload/v1747491797/etzler_dcrisa.png' }
];

// Globální proměnné
let supabaseClient = null;
let currentImageUrl = null;
let useLocalStorage = false;
let localVotes = {};
let votedPoliticians = []; // Pole URL osobností, pro které již uživatel hlasoval v této relaci

// Načtení náhodné osobnosti
function loadRandomImage() {
    try {
        // Vybrat náhodnou osobnost
        const randomIndex = Math.floor(Math.random() * politicians.length);
        const politician = politicians[randomIndex];
        
        const imageElement = document.getElementById('currentImage');
        const nameElement = document.getElementById('politicianName');
        const infoElement = document.getElementById('politicianInfo');
        
        // Zobrazení načítacího indikátoru
        document.getElementById('loadingOverlay').classList.remove('hidden');
        
        // Skrytí výsledků při načítání nové osobnosti
        document.getElementById('results').classList.add('hidden');
        
        // Nastavení základních informací
        nameElement.textContent = politician.name;
        infoElement.textContent = politician.info;
        
        // Načtení obrázku
        imageElement.src = '';
        imageElement.src = politician.imageUrl;
        
        // Kontrola, zda již bylo hlasováno pro tuto osobnost
        const hasVotedForThisPolitician = votedPoliticians.includes(politician.imageUrl);
        
        // Aktivace/deaktivace hlasovacích tlačítek podle toho, zda uživatel již hlasoval pro tuto osobnost
        const voteButtons = [
            document.getElementById('btnCategoryA'),
            document.getElementById('btnCategoryB'),
            document.getElementById('btnCategoryC')
        ];
        
        voteButtons.forEach(button => {
            if (hasVotedForThisPolitician) {
                // Pokud uživatel již hlasoval pro tuto osobnost, deaktivuje tlačítka
                button.disabled = true;
                button.classList.add('opacity-50', 'cursor-not-allowed');
            } else {
                // Jinak je aktivuje
                button.disabled = false;
                button.classList.remove('opacity-50', 'cursor-not-allowed');
            }
        });
        
        // Odstranění zprávy o deaktivovaném hlasování, pokud existuje
        const messageElement = document.getElementById('votingDisabledMessage');
        if (messageElement) {
            messageElement.remove();
        }
        
        imageElement.onload = function() {
            // Skrytí načítacího indikátoru po načtení obrázku
            document.getElementById('loadingOverlay').classList.add('hidden');
            imageElement.classList.add('fade-in');
            
            // Přizpůsobení kontejneru velikosti obrázku
            const imageHeight = imageElement.naturalHeight;
            const containerHeight = Math.min(imageHeight, 500); // Maximální výška 500px
            
            // Odstranit časovač pro fade-in efekt
            setTimeout(() => {
                imageElement.classList.remove('fade-in');
            }, 500);
        };
        
        // Uložení aktuálního obrázku pro hlasování
        currentImageUrl = politician.imageUrl;
        
        // Pokud uživatel již hlasoval pro tuto osobnost, zobrazit výsledky
        if (hasVotedForThisPolitician) {
            // Načíst a zobrazit výsledky pro aktuální osobnost
            showResults(currentImageUrl);
        }
        
    } catch (error) {
        console.error('Chyba při načítání náhodného obrázku:', error);
        showNotification('error', 'Chyba načítání', 'Nepodařilo se načíst náhodný obrázek.');
    }
}

// Zobrazení zprávy, že hlasování je deaktivováno
function showVotingDisabledMessage() {
    // Vytvoření zprávy nad tlačítky hlasování (pokud ještě neexistuje)
    let messageElement = document.getElementById('votingDisabledMessage');
    
    if (!messageElement) {
        messageElement = document.createElement('div');
        messageElement.id = 'votingDisabledMessage';
        messageElement.className = 'mb-4 p-2 bg-yellow-50 border border-yellow-200 text-yellow-800 rounded-lg text-sm';
        messageElement.textContent = 'Již jste v této relaci hlasovali. Pro nové hlasování obnovte stránku.';
        
        // Přidání elementu před hlasovací tlačítka
        const voteButtonsContainer = document.querySelector('.flex.flex-col.sm\\:flex-row.justify-center.mb-6.gap-3');
        if (voteButtonsContainer) {
            voteButtonsContainer.parentNode.insertBefore(messageElement, voteButtonsContainer);
        }
    }
}

// Inicializace databáze - kontrola, zda existují záznamy pro všechny obrázky
async function initializeDatabase() {
    try {
        if (!supabaseClient) {
            console.warn('Supabase klient není inicializován, používám lokální úložiště');
            useLocalStorage = true;
            initializeLocalStorage();
            return;
        }
        
        // Nejprve ověříme, zda tabulka votes existuje
        try {
            const { error: tableError } = await supabaseClient
                .from('votes')
                .select('*')
                .limit(1)
                .maybeSingle();

            // Pokud tabulka neexistuje, přepneme na lokální režim
            if (tableError) {
                console.error('Chyba při ověřování tabulky votes:', tableError);
                useLocalStorage = true;
                initializeLocalStorage();
                return;
            }
        } catch (error) {
            console.error('Nelze ověřit existenci tabulky:', error);
            useLocalStorage = true;
            initializeLocalStorage();
            return;
        }
        
        // Pokračujeme s inicializací dat, pokud tabulka existuje
        let hasError = false;
        for (const politician of politicians) {
            try {
                const { data, error } = await supabaseClient
                    .from('votes')
                    .select('image_url')
                    .eq('image_url', politician.imageUrl)
                    .maybeSingle();
                    
                if (error) throw error;
                
                if (!data) {
                    const { error: insertError } = await supabaseClient
                        .from('votes')
                        .insert({ 
                            image_url: politician.imageUrl, 
                            category_a: 0, 
                            category_b: 0, 
                            category_c: 0,
                            politician_name: politician.name,
                            politician_info: politician.info
                        });
                        
                    if (insertError) throw insertError;
                }
            } catch (error) {
                console.warn(`Nelze inicializovat data pro ${politician.name}:`, error);
                hasError = true;
            }
        }
        
        if (hasError) {
            showNotification('warning', 'Částečný úspěch', 'Některá data nebyla inicializována. Aplikace bude používat lokální ukládání.');
            useLocalStorage = true;
            initializeLocalStorage();
        } else {
            showNotification('success', 'Připraveno', 'Aplikace je připravena k hlasování s databází.');
        }
        
    } catch (error) {
        console.error('Chyba při inicializaci databáze:', error);
        showNotification('warning', 'Lokální režim', 'Aplikace běží v lokálním režimu bez databáze.');
        
        // Inicializujeme lokální data
        useLocalStorage = true;
        initializeLocalStorage();
    }
}

// Správa hlasovaných obrázků v localStorage
function initializeLocalStorage() {
    // Vytvoření prázdných hlasů pro každou osobnost
    politicians.forEach(politician => {
        if (!localVotes[politician.imageUrl]) {
            localVotes[politician.imageUrl] = {
                category_a: 0,
                category_b: 0,
                category_c: 0,
                politician_name: politician.name,
                politician_info: politician.info
            };
        }
    });
    
    // Načtení existujících dat, pokud existují
    const savedVotes = localStorage.getItem('localVotes');
    if (savedVotes) {
        const savedData = JSON.parse(savedVotes);
        // Sloučení existujících dat s výchozími hodnotami
        Object.keys(savedData).forEach(key => {
            localVotes[key] = savedData[key];
        });
    }
    
    // Uložení do localStorage
    localStorage.setItem('localVotes', JSON.stringify(localVotes));
    
    showNotification('info', 'Lokální režim', 'Aplikace běží v lokálním režimu bez připojení k databázi.');
}

// Hlasování pro vybranou kategorii
async function vote(category) {
    try {
        if (!currentImageUrl) {
            showNotification('error', 'Chyba hlasování', 'Nebyla nalezena aktuální osobnost pro hlasování.');
            return;
        }
        
        // Kontrola, zda uživatel již hlasoval pro tuto osobnost
        if (votedPoliticians.includes(currentImageUrl)) {
            showNotification('warning', 'Již jste hlasovali', 'Pro tuto osobnost jste již hlasovali.');
            return;
        }
        
        // Deaktivace hlasovacích tlačítek během zpracování
        const voteButtons = [
            document.getElementById('btnCategoryA'),
            document.getElementById('btnCategoryB'),
            document.getElementById('btnCategoryC')
        ];
        
        voteButtons.forEach(button => {
            button.disabled = true;
            button.classList.add('opacity-50', 'cursor-not-allowed');
        });
        
        // Přidat osobnost do seznamu hlasovaných
        votedPoliticians.push(currentImageUrl);
        
        if (useLocalStorage) {
            // Přidání hlasu do lokálního úložiště
            if (!localVotes[currentImageUrl]) {
                // Najít jméno a info podle URL
                const politician = politicians.find(p => p.imageUrl === currentImageUrl);
                localVotes[currentImageUrl] = {
                    category_a: 0,
                    category_b: 0, 
                    category_c: 0,
                    politician_name: politician ? politician.name : 'Neznámá osobnost',
                    politician_info: politician ? politician.info : ''
                };
            }
            
            localVotes[currentImageUrl][category]++;
            localStorage.setItem('localVotes', JSON.stringify(localVotes));
            
            // Zobrazení výsledků
            await showResults(currentImageUrl);
            
            showNotification('success', 'Hlas zaznamenán', 'Váš hlas byl úspěšně započítán.');
            
            return;
        }
        
        // Získání aktuálního počtu hlasů ze Supabase
        const { data, error } = await supabaseClient
            .from('votes')
            .select(category)
            .eq('image_url', currentImageUrl)
            .maybeSingle();
            
        if (error) {
            console.error('Chyba při získávání hlasů:', error);
            // Přepnutí na lokální ukládání při chybě
            useLocalStorage = true;
            initializeLocalStorage();
            vote(category);
            return;
        }
        
        // Přidání hlasu
        const newVoteCount = (data && data[category] ? data[category] : 0) + 1;
        const { error: updateError } = await supabaseClient
            .from('votes')
            .update({ [category]: newVoteCount })
            .eq('image_url', currentImageUrl);
            
        if (updateError) {
            console.error('Chyba při aktualizaci hlasů:', updateError);
            // Přepnutí na lokální ukládání při chybě
            useLocalStorage = true;
            initializeLocalStorage();
            vote(category);
            return;
        }
        
        // Zobrazení výsledků
        await showResults(currentImageUrl);
        
        showNotification('success', 'Hlas zaznamenán', 'Váš hlas byl úspěšně započítán.');
        
    } catch (error) {
        console.error('Chyba při hlasování:', error);
        showNotification('error', 'Chyba hlasování', 'Nepodařilo se zaznamenat váš hlas.');
        
        // Přepnutí na lokální ukládání při chybě
        useLocalStorage = true;
        initializeLocalStorage();
        
        // Odebrat osobnost ze seznamu hlasovaných v případě chyby
        const index = votedPoliticians.indexOf(currentImageUrl);
        if (index !== -1) {
            votedPoliticians.splice(index, 1);
        }
        
        // Opětovná aktivace hlasovacích tlačítek v případě chyby
        const voteButtons = [
            document.getElementById('btnCategoryA'),
            document.getElementById('btnCategoryB'),
            document.getElementById('btnCategoryC')
        ];
        
        voteButtons.forEach(button => {
            button.disabled = false;
            button.classList.remove('opacity-50', 'cursor-not-allowed');
        });
    }
}

// Zobrazení výsledků pro daný obrázek
async function showResults(imageUrl) {
    try {
        console.log("Načítání výsledků pro:", imageUrl);
        let categoryA = 0; 
        let categoryB = 0; 
        let categoryC = 0;
        
        if (useLocalStorage) {
            console.log("Používám localStorage pro výsledky");
            // Získání dat z lokálního úložiště
            if (localVotes[imageUrl]) {
                categoryA = localVotes[imageUrl].category_a || 0;
                categoryB = localVotes[imageUrl].category_b || 0;
                categoryC = localVotes[imageUrl].category_c || 0;
                console.log("Data z localStorage:", { categoryA, categoryB, categoryC });
            }
        } else {
            // Získání dat ze Supabase
            console.log("Používám Supabase pro výsledky");
            try {
                const { data, error } = await supabaseClient
                    .from('votes')
                    .select('category_a, category_b, category_c')
                    .eq('image_url', imageUrl)
                    .maybeSingle();
                    
                if (error) {
                    console.error('Chyba při načítání výsledků ze Supabase:', error);
                    // Přepneme na lokální úložiště při chybě
                    useLocalStorage = true;
                    initializeLocalStorage();
                    return showResults(imageUrl);
                }
                
                if (data) {
                    categoryA = data.category_a || 0;
                    categoryB = data.category_b || 0;
                    categoryC = data.category_c || 0;
                    console.log("Data ze Supabase:", { categoryA, categoryB, categoryC });
                } else {
                    console.log("Žádná data nebyla nalezena v Supabase pro tento obrázek");
                }
            } catch (e) {
                console.error("Chyba při získávání dat ze Supabase:", e);
                useLocalStorage = true;
                initializeLocalStorage();
                return showResults(imageUrl);
            }
        }
        
        // Výpočet celkového počtu hlasů a procent
        const totalVotes = categoryA + categoryB + categoryC;
        console.log("Celkový počet hlasů:", totalVotes);
        
        // Výpočet procent a formátování
        const percentA = totalVotes > 0 ? Math.round((categoryA / totalVotes) * 100) : 0;
        const percentB = totalVotes > 0 ? Math.round((categoryB / totalVotes) * 100) : 0;
        const percentC = totalVotes > 0 ? Math.round((categoryC / totalVotes) * 100) : 0;
        console.log("Procenta:", { percentA, percentB, percentC });
        
        // Nastavení textu výsledků
        const resultA = document.getElementById('resultA');
        const resultB = document.getElementById('resultB');
        const resultC = document.getElementById('resultC');
        
        if (resultA) resultA.textContent = `${categoryA} ${getVoteForm(categoryA)}`;
        if (resultB) resultB.textContent = `${categoryB} ${getVoteForm(categoryB)}`;
        if (resultC) resultC.textContent = `${categoryC} ${getVoteForm(categoryC)}`;
        
        // Nastavení procent
        const percentAEl = document.getElementById('percentA');
        const percentBEl = document.getElementById('percentB');
        const percentCEl = document.getElementById('percentC');
        
        if (percentAEl) percentAEl.textContent = `${percentA}%`;
        if (percentBEl) percentBEl.textContent = `${percentB}%`;
        if (percentCEl) percentCEl.textContent = `${percentC}%`;
        
        // Nastavení šířky progress barů
        const barA = document.getElementById('barA');
        const barB = document.getElementById('barB');
        const barC = document.getElementById('barC');
        
        if (barA) barA.style.width = `${percentA}%`;
        if (barB) barB.style.width = `${percentB}%`;
        if (barC) barC.style.width = `${percentC}%`;
        
        // Zobrazení výsledků
        const results = document.getElementById('results');
        if (results) results.classList.remove('hidden');
        
    } catch (error) {
        console.error('Chyba při zobrazování výsledků:', error);
        showNotification('error', 'Chyba výsledků', 'Nepodařilo se načíst výsledky hlasování.');
    }
}

// Načtení celkových statistik
async function showTotalStats() {
    try {
        console.log("Načítám celkové statistiky...");
        let totalA = 0, totalB = 0, totalC = 0;
        let personalRankings = {
            categoryA: [],
            categoryB: [],
            categoryC: []
        };
        
        // Zobrazení načítacího indikátoru
        const totalStatsElement = document.getElementById('totalStats');
        const statsLinkElement = document.getElementById('statsLink');
        
        if (!totalStatsElement || !statsLinkElement) {
            console.error('Chybí elementy pro zobrazení statistik');
            return;
        }
        
        totalStatsElement.classList.remove('hidden');
        statsLinkElement.classList.add('hidden');
        
        if (useLocalStorage) {
            console.log("Používám lokální úložiště pro statistiky");
            // Výpočet celkových součtů z lokálního úložiště
            Object.entries(localVotes).forEach(([imageUrl, vote]) => {
                totalA += vote.category_a || 0;
                totalB += vote.category_b || 0;
                totalC += vote.category_c || 0;
                
                // Příprava dat pro žebříčky
                const politician = politicians.find(p => p.imageUrl === imageUrl);
                if (politician) {
                    const name = vote.politician_name || politician.name;
                    const voteA = vote.category_a || 0;
                    const voteB = vote.category_b || 0;
                    const voteC = vote.category_c || 0;
                    
                    if (voteA > 0) {
                        personalRankings.categoryA.push({ name, votes: voteA });
                    }
                    if (voteB > 0) {
                        personalRankings.categoryB.push({ name, votes: voteB });
                    }
                    if (voteC > 0) {
                        personalRankings.categoryC.push({ name, votes: voteC });
                    }
                }
            });
            
            console.log("Data z lokálního úložiště:", { totalA, totalB, totalC, personalRankings });
        } else {
            // Získání součtu všech hlasů ze Supabase
            try {
                console.log("Používám Supabase pro statistiky");
                const { data, error } = await supabaseClient
                    .from('votes')
                    .select('politician_name, image_url, category_a, category_b, category_c');
                    
                if (error) throw error;
                
                console.log("Získaná data ze Supabase:", data);
                
                // Výpočet celkových součtů
                data.forEach(vote => {
                    totalA += vote.category_a || 0;
                    totalB += vote.category_b || 0;
                    totalC += vote.category_c || 0;
                    
                    // Příprava dat pro žebříčky
                    const name = vote.politician_name || 'Neznámá osobnost';
                    const voteA = vote.category_a || 0;
                    const voteB = vote.category_b || 0;
                    const voteC = vote.category_c || 0;
                    
                    if (voteA > 0) {
                        personalRankings.categoryA.push({ name, votes: voteA });
                    }
                    if (voteB > 0) {
                        personalRankings.categoryB.push({ name, votes: voteB });
                    }
                    if (voteC > 0) {
                        personalRankings.categoryC.push({ name, votes: voteC });
                    }
                });
            } catch (error) {
                console.error('Chyba při načítání celkových statistik ze Supabase:', error);
                // Přepneme na lokální úložiště při chybě
                useLocalStorage = true;
                initializeLocalStorage();
                return showTotalStats();
            }
        }
        
        const totalVotes = totalA + totalB + totalC;
        
        // Výpočet procent
        const percentA = totalVotes > 0 ? Math.round((totalA / totalVotes) * 100) : 0;
        const percentB = totalVotes > 0 ? Math.round((totalB / totalVotes) * 100) : 0;
        const percentC = totalVotes > 0 ? Math.round((totalC / totalVotes) * 100) : 0;
        
        console.log("Celkové výsledky:", { percentA, percentB, percentC });
        
        // Získání elementů pro zobrazení výsledků
        const totalResultA = document.getElementById('totalResultA');
        const totalResultB = document.getElementById('totalResultB');
        const totalResultC = document.getElementById('totalResultC');
        const totalPercentA = document.getElementById('totalPercentA');
        const totalPercentB = document.getElementById('totalPercentB');
        const totalPercentC = document.getElementById('totalPercentC');
        const totalBarA = document.getElementById('totalBarA');
        const totalBarB = document.getElementById('totalBarB');
        const totalBarC = document.getElementById('totalBarC');
        
        // Kontrola, zda existují všechny potřebné elementy
        if (!totalResultA || !totalResultB || !totalResultC || 
            !totalPercentA || !totalPercentB || !totalPercentC || 
            !totalBarA || !totalBarB || !totalBarC) {
            console.error('Chybí některé elementy pro zobrazení výsledků');
            return;
        }
        
        // Nastavení textu výsledků
        totalResultA.textContent = `${totalA} ${getVoteForm(totalA)}`;
        totalResultB.textContent = `${totalB} ${getVoteForm(totalB)}`;
        totalResultC.textContent = `${totalC} ${getVoteForm(totalC)}`;
        
        // Nastavení procent
        totalPercentA.textContent = `${percentA}%`;
        totalPercentB.textContent = `${percentB}%`;
        totalPercentC.textContent = `${percentC}%`;
        
        // Nastavení šířky progress barů
        totalBarA.style.width = `${percentA}%`;
        totalBarB.style.width = `${percentB}%`;
        totalBarC.style.width = `${percentC}%`;
        
        console.log("Zobrazuji žebříčky osobností...");
        console.log("Žebříček A:", personalRankings.categoryA);
        console.log("Žebříček B:", personalRankings.categoryB);
        console.log("Žebříček C:", personalRankings.categoryC);
        
        // Seřazení a zobrazení žebříčků podle počtu hlasů (sestupně)
        displayRankings('rankingA', personalRankings.categoryA, 'red');
        displayRankings('rankingB', personalRankings.categoryB, 'gray');
        displayRankings('rankingC', personalRankings.categoryC, 'black');
        
    } catch (error) {
        console.error('Chyba při zobrazování celkových statistik:', error);
        showNotification('error', 'Chyba statistik', 'Nepodařilo se načíst celkové statistiky.');
    }
}

// Zobrazení žebříčku osobností
function displayRankings(elementId, rankingData, color) {
    // Zkontrolovat, zda element existuje, a pokud ne, vytvořit ho
    const container = document.getElementById(elementId);
    if (!container) {
        console.error(`Element s ID ${elementId} nebyl nalezen`);
        return;
    }
    
    // Debug log pro kontrolu dat
    console.log(`Zobrazuji žebříček ${elementId}:`, rankingData);
    
    // Seřazení podle počtu hlasů (sestupně)
    rankingData.sort((a, b) => b.votes - a.votes);
    
    // Omezení na TOP 10
    const topRankings = rankingData.slice(0, 10);
    
    if (topRankings.length === 0) {
        container.innerHTML = '<p class="text-sm text-gray-500 italic">Zatím žádné hlasy.</p>';
        return;
    }
    
    // Vytvoření HTML pro žebříček
    let html = '';
    topRankings.forEach((item, index) => {
        const colorClass = 
            color === 'red' ? 'text-red-600' : 
            color === 'gray' ? 'text-gray-600' : 
            'text-gray-900';
        
        html += `
            <div class="flex items-center justify-between py-1 border-b border-gray-100">
                <div class="flex items-center">
                    <span class="font-bold mr-2 ${colorClass}">${index + 1}.</span>
                    <span class="text-sm">${item.name}</span>
                </div>
                <span class="text-sm font-medium">${item.votes} ${getVoteForm(item.votes)}</span>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// Funkce pro aktualizaci navigačních prvků
function toggleStats() {
    const statsElement = document.getElementById('totalStats');
    const linkElement = document.getElementById('statsLink');
    const toggleBtn = document.getElementById('toggleStatsBtn');
    
    if (!statsElement || !linkElement) {
        console.error('Chybí elementy pro zobrazení/skrytí statistik');
        return;
    }
    
    if (statsElement.classList.contains('hidden')) {
        statsElement.classList.remove('hidden');
        linkElement.classList.add('hidden');
        if (toggleBtn) {
            toggleBtn.textContent = 'Skrýt celkové výsledky';
        }
        showTotalStats();
    } else {
        statsElement.classList.add('hidden');
        linkElement.classList.remove('hidden');
        if (toggleBtn) {
            toggleBtn.textContent = 'Zobrazit celkové výsledky';
        }
    }
}

// Zobrazení notifikace
function showNotification(type, title, message) {
    try {
        const notification = document.getElementById('notification');
        const notificationTitle = document.getElementById('notificationTitle');
        const notificationMessage = document.getElementById('notificationMessage');
        const notificationIcon = document.getElementById('notificationIcon');
        
        if (!notification || !notificationTitle || !notificationMessage || !notificationIcon) {
            console.error('Notifikační elementy nebyly nalezeny');
            return;
        }
        
        // Nastavení ikony podle typu
        let iconHTML = '';
        let bgColor = '';
        
        switch (type) {
            case 'success':
                iconHTML = '<svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>';
                bgColor = 'bg-green-50 border-green-100';
                break;
            case 'error':
                iconHTML = '<svg class="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path></svg>';
                bgColor = 'bg-red-50 border-red-100';
                break;
            case 'warning':
                iconHTML = '<svg class="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>';
                bgColor = 'bg-yellow-50 border-yellow-100';
                break;
            default:
                iconHTML = '<svg class="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>';
                bgColor = 'bg-blue-50 border-blue-100';
        }
        
        // Nastavení obsahu
        notificationTitle.textContent = title;
        notificationMessage.textContent = message;
        notificationIcon.innerHTML = iconHTML;
        
        // Nastavení tříd
        notification.className = `fixed bottom-4 right-4 max-w-xs bg-white border ${bgColor} rounded-lg shadow-lg transform transition-transform duration-300`;
        
        // Zobrazení notifikace
        notification.classList.add('slide-in');
        
        // Automatické skrytí po 3 sekundách
        setTimeout(() => {
            notification.classList.remove('slide-in');
            notification.classList.add('slide-out');
        }, 3000);
    } catch (err) {
        console.error('Chyba při zobrazování notifikace:', err);
    }
}

// Pomocné funkce
function getVoteForm(count) {
    if (count === 1) {
        return 'hlas';
    } else if (count >= 2 && count <= 4) {
        return 'hlasy';
    } else {
        return 'hlasů';
    }
}

// Inicializace aplikace
document.addEventListener('DOMContentLoaded', async function() {
    try {
        // Inicializujeme pole hlasovaných osobností
        votedPoliticians = [];
        
        // Inicializace Supabase klienta
        if (typeof supabase === 'undefined') {
            showNotification('error', 'Chyba připojení', 'Nepodařilo se načíst Supabase knihovnu.');
            useLocalStorage = true;
            initializeLocalStorage();
        } else {
            supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
        }
        
        // Inicializace databáze
        await initializeDatabase();
        
        // Odstranění progress baru, není potřeba
        const progressBarElement = document.querySelector('.w-full.max-w-md.mx-auto.mb-6.px-4');
        if (progressBarElement) {
            progressBarElement.style.display = 'none';
        }
        
        // Odstraníme jakoukoliv existující zprávu o deaktivovaném hlasování
        const votingDisabledMessage = document.getElementById('votingDisabledMessage');
        if (votingDisabledMessage) {
            votingDisabledMessage.remove();
        }
        
        // Načtení prvního náhodného obrázku
        loadRandomImage();
        
        // Přidat event listener na tlačítko "Další náhodná osobnost"
        const nextRandomBtn = document.getElementById('nextRandomBtn');
        if (nextRandomBtn) {
            nextRandomBtn.addEventListener('click', loadRandomImage);
        }
        
    } catch (error) {
        console.error('Chyba při inicializaci aplikace:', error);
        showNotification('error', 'Chyba aplikace', 'Nepodařilo se inicializovat aplikaci.');
        useLocalStorage = true;
        initializeLocalStorage();
        loadRandomImage();
    }
});