import './style.css';

const facts = [
  // T/M standart işinin 4 altın kuralı
  ['Standart iş — 1. altın kural', 'Standart Operasyon Tablosunda belirtilen iş sırasına uygun olarak çalışır.', 'standart'],
  ['Standart iş — 2. altın kural', 'İş Standart Formlarında belirtilen key pointlere (önemli noktalara) uygun olarak çalışır.', 'standart'],
  ['Standart iş — 3. altın kural', 'Proses başlama-bitiş çizgilerine uyarak çalışır.', 'standart'],
  ['Anormallik — standart iş', "Anormallik durumunda andon çekerek TL'ine haber verir; anormalliği kanban asarak görselleştirir.", 'standart'],
  ['Hata kanbanı — 2 araç', 'Hata kanbanı 2 araç sonra gelmez ise andon çeker.', 'standart'],
  // 10 montaj disiplini
  ['Montaj disiplini — manifest', 'Manifeste bakar, elle gösterir ve manifest ile parça markalamasını karşılaştırır.', 'disiplin'],
  ['Montaj disiplini — kutu kontrolü', 'Kutudaki ilk parça kontrolünü yapar.', 'disiplin'],
  ['Montaj disiplini — parça alma', 'Önce ışık yanan raftan parçayı alır, sonra DPS butonuna basar.', 'disiplin'],
  ['Montaj disiplini — taşıma ve takma', 'Parça alma ve taşıma esnasında seri davranır; takma anında son harekette konsantre olur, montaj noktasına bakarak işini tamamlar.', 'disiplin'],
  ['Montaj disiplini — doğru duruş', 'Çalışırken doğru vücut duruşunu sağlar; kendi sağlığını korumaya çalışır.', 'disiplin'],
  ['Montaj disiplini — kutu sırası', 'Kutudaki parçaları sırası ile alır, karıştırmaz.', 'disiplin'],
  ['Montaj disiplini — ara stok', 'Rafın kenarına ilave parça koymaz, ara stok hazırlamaz.', 'disiplin'],
  ['Montaj disiplini — kalan parça', 'Kutudaki son parçaya kadar kullanır; son kalan parçaları erkenden alıp yeni kutuya aktarmaz.', 'disiplin'],
  ['Montaj disiplini — yabancı madde', "Kutuda yağ, su, keçe parçası veya metal tozu gibi yabancı madde varsa TL'ine temizletir.", 'disiplin'],
  ['Montaj disiplini — standart miktar', 'Bir hamlede standart sayıda parçayı, avucuna bakarak ve sayarak alır.', 'disiplin'],
  ['Montaj disiplini — parça düştüğünde', "Montaj esnasında parça düşerse alır kullanır; bulamazsa andon ile TL'ine haber verir.", 'disiplin'],
  ['Montaj disiplini — eksik parça', "Montaj sonunda elinde eksik parça kalırsa düşmüş olabilir; andon ile TL'ine haber verir.", 'disiplin'],
  ['Montaj disiplini — opsiyon konnektörü', 'Önce opsiyon konnektörünü takar; sayarak takar, klik sesini duyar ve taktıktan sonra çek-it kontrolü yapar.', 'disiplin'],
  ['Montaj disiplini — konuşma', 'Proseste konuşmaz, yalnızca işine odaklanır ve standart işini kesinlikle bölmez.', 'disiplin'],
  ['Montaj disiplini — anormallik', 'Anormallik olduğunda Andon’a basar, hata kanbanını asar, kendi tamir yapmaz.', 'disiplin'],
  ['Montaj disiplini — DPS pokayoke', "DPS pokayokesi hattı durdurduğunda kendin müdahale etmez; kanban asıp Andon çekerek TL’ini çağırır.", 'disiplin'],
  ['Montaj disiplini — başlangıç', 'Üretim başında TPM ve Proses kontrol formunu doldurur.', 'disiplin'],
  ['Montaj disiplini — mola', 'Molaya, mola öncesi prosese giren aracı tamamladıktan sonra çıkar.', 'disiplin'],
  // STOP-6
  ['STOP-6: Araya sıkışma', 'Müdahale öncesi acil durdurma butonuna basar veya Lockout uygular; alanı çevirir ve çalıştırmadan önce alanı kontrol edip yüksek sesle uyarır.', 'stop6'],
  ['STOP-6: Büyük cisimle temas', 'Yükün kemer bağlantı noktalarını el ve göz ile kontrol eder; yükü hafifçe kaldırıp tartar ve ağırlık merkezini kontrol eder.', 'stop6'],
  ['STOP-6: Asılı yük', 'Asılı yükün 5 metreden yakınına girmez; halat/destek profili ile uzaktan yönlendirir.', 'stop6'],
  ['STOP-6: Çarpışma', 'Forklift / tır sahasına girmez; 5 temel yürüme kuralına uyar ve sürücü ile göz teması kurup teyitleşir.', 'stop6'],
  ['STOP-6: Düşme — 2 m altı', '2 m altı çalışmada A tipi merdiveni destek alarak kullanır ve çene bağlı baretini takar.', 'stop6'],
  ['STOP-6: Düşme — 2 m üstü', '2 m üstü çalışmada emniyet kemerini takar.', 'stop6'],
  ['STOP-6: Elektriğe kapılma', 'Yetkin dışında elektrik panolarına müdahale etmez; çalışma öncesi ana veya ara güç kaynağının kapalı olduğunu teyit eder ve yalıtkan KKD kullanır.', 'stop6'],
  ['STOP-6: Yangın', 'Yangın anında yetkin değilse müdahale etmez, alanı boşaltır ve liderine haber verir.', 'stop6'],
  ['STOP-6: Ateşli çalışma', 'Ateşli çalışmalarda işini 1 saat önce bitirir ve gözlem yapar.', 'stop6'],
  ['STOP-6: Statik elektrik', 'Statik elektrik oluşturacak işlemlerde uygun topraklamayı yapar.', 'stop6'],
  // 5 temel yürüme kuralı ve KKD
  ['Yürüme kuralı — eller', 'Ellerini cebinde yürütmez.', 'yurume'],
  ['Yürüme kuralı — yol', 'Yaya yollarından yürür; çapraz geçiş yapmaz.', 'yurume'],
  ['Yürüme kuralı — telefon', 'Yürürken cep telefonu kullanmaz.', 'yurume'],
  ['Yürüme kuralı — karşıdan karşıya', 'Karşıdan karşıya geçişlerde solunu ve sağını kontrol eder.', 'yurume'],
  ['Yürüme kuralı — merdiven', 'Merdivenlerden inip çıkarken korkuluklardan tutunur.', 'yurume'],
  ['KKD — kıyafet', 'TMMT ceketini kapalı kullanır.', 'yurume'],
  ['KKD — şapka', 'Fabrikada şapka takar (öğle yemeği hariç).', 'yurume'],
  ['KKD — proses', 'Proseste gözlük ve eldiven kullanır.', 'yurume'],
];

const terms = [
  ['Hardware', 'Hatlarda kullanılan cıvata, somun, vida, metal kelepçe vb. malzemelere verilen genel isimdir.'],
  ['S.O.T. (Standart Operasyon Tablosu)', 'Proseste yapılacak olan iş adımlarının tamamını gösteren listedir.'],
  ['Standart Çalışma', 'Üretimi verimli ve kaliteli bir halde sürdürebilmek için ekipman, makine ve kişileri başarılı şekilde bir araya getirip üretim yapma şeklidir.'],
  ['Yürüme Yolu Formu', 'Proses çalışmasında yapılacak standart yürüme yoludur.'],
  ['İ.S.F.’ler (İş Standart Formları)', 'S.O.T. listesindeki her bir iş adımı için yapılacak detayları gösteren formlardır.'],
  ['Hata', 'Standart dışı (araç üzerinde) olan her şey hatadır.'],
  ['Hata kanbanı', 'Çalışma anında oluşan hatanın onarım yapılmadan hattı terk etmesini engellemek için kullanılır.'],
  ['Delta S Hata', 'Oluştuğunda müşteri güvenliğini etkileyecek ya da kazaya sebep olacak hatalardır; en riskli hata tipidir.'],
  ['Delta R Hata', 'Müşteri tarafından belirtilen ve araç üzerinde olması istenen özelliklerin karşılanmamasıdır.'],
  ['Delta E Hata', 'Aracın çalışması anında atmosfere salınan kirletici zararlı gazlara emisyon denir; yasal sınırların üzerine çıkmasına sebep olabilecek hatalar Delta E’dir.'],
  ['Manifest', 'Üretilecek araca hangi parçaların takılması gerektiğini gösteren iş istek listesidir.'],
  ['Jidoka', 'Güvenli, kaliteli ve verimli üretimin sağlanması için kullanılan akıllı otomasyon sistemidir; %100 kalitesi tamamlanmamış ürünün sonraki istasyona geçişini engeller.'],
  ['Andon', 'Hattın anlık bilgilerinin görülebildiği, aynı zamanda hat çalışanı ile TL arasında sesli ve görsel iletişimi sağlayan ışıklı panolardır.'],
  ['Short', 'Önceki hat araç veremediği için hat çalışamıyor.'],
  ['Full', 'Sonraki hat ilerlemediğinden hat çalışamıyor.'],
  ['Poka-Yoke', 'Hat çalışanlarının hata yapmalarını engellemeye çalışan düzeneklerdir; hatanın sonraki proseslere geçişini engeller.'],
  ['5S', '1: Sınıflandırma · 2: Düzenleme · 3: Temizlik · 4: Standartlaştırma · 5: Disiplin.'],
  ['Muda', 'Üretim uğruna değer katmayan her türlü faaliyettir.'],
  ['Muri', 'İnsanların ya da makinaların doğal sınırlarının üzerinde zorlanmasıdır.'],
  ['Mura', 'Düzensizlik anlamına gelir; üretim sayılarının dalgalanmasıdır.'],
  ['Telemail', 'Sıralı gelen parçaların hangi parça olduğu, özelliği vb. açıklamaları gösteren kağıtlardır.'],
  ['Katashiki', 'Üretilecek aracın genel özelliklerini belirten 12 karakterden oluşan tip bilgisidir.'],
  ['Raf Etiketi', 'Raf üzerinde kullanılacak aracın özelliklerini, parçanın ismini ve nosunu gösteren etiketlerdir.'],
  ['Harigami', 'Araç üzerinde oluşan hataları haber vermek için kullanılan A5 kağıtlardır; araç üzerine yapıştırılarak QA’e haber verilmesini sağlar.'],
  ['Sıkım torku', 'Cıvata, somun ve screw yardımıyla sıkım yapılan noktalar için gerekli bağlantı kuvvetidir.'],
  ['İmpakto', 'Havalı veya şarjlı sıkım aletleridir.'],
  ['Soket', 'Havalı sıkım aletlerinin ucuna takılan, cıvata ve somunu tutarak sıkılmasını sağlayan ara parçadır.'],
  ['Wagon Daisha', 'Montaj esnasında aracın yanında senkronize şekilde hareket edebilen, üzerine parça ve hardware malzemeleri koyulduğu yardımcı araçlardır.'],
  ['C-Seat', 'Araç içerisine girebilen ve çalışanın ergonomik yükünü azaltarak rahat çalışmayı sağlayan hareketli koltuklardır.'],
  ['Flowrack', 'Hatta kullanılacak parçaların arka taraftan koyularak kullanım noktasına kadar akarak ulaşmasını sağlayan raflardır.'],
  ['FIFO', 'İlk giren ilk çıkar kuralıdır; fabrikaya ilk giren parçanın daha sonra giren parçadan önce takılmasıdır.'],
  ['Ekiden', 'Toyota fabrikalarında düzenlenen takım koşusudur.'],
  ['Multiskill', 'Çoklu beceri kazanmadır.'],
  ['Rotasyon', 'Kazanılan çoklu beceriler sayesinde birden fazla istasyonda değişerek çalışmadır.'],
  ['Scrap', 'Araca takılacak parçanın TMMT çalışanı tarafından hasarlanmasıdır; maliyeti şirkete yansır.'],
  ['Reject', 'Firmadan gelen araca takılacak parçanın hasarlı ya da arızalı olmasından dolayı firmaya iade edilmesidir.'],
  ['Safety fence', 'Giriş yapılmasının istenmediği yerlerin çevresine monte edilen metal engeldir.'],
  ['Id kodu (Shikibetsu)', 'Parça üzerinde olan ayırdedici semboldür.'],
  ['Henkaten', 'Mevcut durumdan farklı durumdur (farklılık).'],
  ['Ryohin Joken', 'Kaliteli parça üretim koşullarının sağlanmasıdır.'],
  ['MTCE (Maintenance)', 'Bakım grubudur.'],
  ['Logistics', 'Hatlara parça temini ve getirilmesini sağlayan gruptur.'],
  ['Local (Logistics)', 'Araca takılacak yerli parçaların fabrikaya kabulünü yapan gruptur.'],
  ['Devan (Logistics)', 'Araca takılacak Avrupa ve Japonya’dan konteynırlar ile gelen parçaların fabrikaya kabulünü yapan gruptur.'],
  ['Conveyance (Logistics)', 'Araca takılacak parçaların stok bölgesinden hat kenarına dağıtımını yapan gruptur.'],
  ['Jundate', 'Tek bir parçanın hattan geçecek araç sırasına göre dizilerek hat kenarına getirilmesidir.'],
  ['SPS (Sıralanmış parça hazırlığı)', 'Hat üzerinde araca takılacak tüm parçaların yardımcı araç üzerine setlenerek hat kenarına getirilmesidir.'],
  ['Jikotei Kanketsu', 'Yerinde kaliteyi sağlama çalışmalarıdır.'],
  ['5N1K', 'Ne, nerede, ne zaman, nasıl, neden + kim sorularının sorularak analiz ve raporlama yöntemidir.'],
  ['SPEC', 'Özellik, tip, çeşittir.'],
].map(([term, definition]) => [term, definition, 'terimler']);

const all = [...facts, ...terms];
const categoryLabels = { standart: 'Standart İş', disiplin: '10 Montaj Disiplini', stop6: 'STOP-6', yurume: 'Yürüme ve KKD', terimler: 'Teknik Terimler' };
const state = { deck: [], index: 0, score: 0, streak: 0, answered: false, wrong: [], mode: 'home', selectedCategory: 'all' };
const saved = JSON.parse(localStorage.getItem('hat-hafizasi') || '{"mastered":0,"best":0}');

function shuffle(items) { return [...items].sort(() => Math.random() - .5); }
function optionSet(answer, pool) { return shuffle([answer, ...shuffle(pool.filter(x => x !== answer)).slice(0, 3)]); }
function buildDeck(category, retry = []) {
  const source = retry.length ? retry : all.filter(x => category === 'all' || x[2] === category);
  return shuffle(source).slice(0, Math.min(15, source.length)).map(item => {
    const isTerm = item[2] === 'terimler';
    const samePool = isTerm ? terms : facts;
    return isTerm
      ? { prompt: `“${item[0]}” nedir?`, answer: item[1], options: optionSet(item[1], samePool.map(x => x[1])), category: item[2], source: 'Teknik Terimler' }
      : { prompt: item[0], answer: item[1], options: optionSet(item[1], samePool.map(x => x[1])), category: item[2], source: categoryLabels[item[2]] };
  });
}
function persist() { localStorage.setItem('hat-hafizasi', JSON.stringify(saved)); }
function start(category = 'all', retry = []) { Object.assign(state, { deck: buildDeck(category, retry), index: 0, score: 0, streak: 0, answered: false, wrong: [], mode: 'quiz', selectedCategory: category }); render(); }
function render() {
  const app = document.querySelector('#app');
  if (state.mode === 'home') {
    app.innerHTML = `<section class="shell home"><div class="hero"><span class="eyebrow">MONTAJ EĞİTİMİ • HIZLI TEKRAR</span><h1>Hat<br><em>Hafızası</em></h1><p>Kartlardaki kuralları sınav stresine değil, refleksine dönüştür.</p><div class="road"><i></i><i></i><i></i></div></div><div class="stats"><div><b>${saved.mastered}</b><span>doğru cevap</span></div><div><b>${saved.best}</b><span>en iyi seri</span></div></div><button class="primary big" data-start="all">Karışık Hız Turu <span>→</span></button><p class="section-title">KONU SEÇ</p><div class="category-grid">${Object.entries(categoryLabels).map(([key, label], i) => `<button class="category c${i}" data-start="${key}"><span>${['◎','◈','⚠','↗','⌘'][i]}</span>${label}<small>${all.filter(x => x[2] === key).length} kart</small></button>`).join('')}</div><div class="tip"><b>Akılda kalıcı ipucu</b><p>Önce doğruyu seç, sonra kartın sesli tekrarını dinle. Zorlandığın kartlar tur sonunda tekrar gelir.</p></div></section>`;
  } else if (state.mode === 'quiz') {
    const q = state.deck[state.index]; const progress = ((state.index) / state.deck.length) * 100;
    app.innerHTML = `<section class="shell quiz"><header><button class="back" data-home>‹</button><div class="progress"><div style="width:${progress}%"></div></div><span>${state.index + 1}/${state.deck.length}</span></header><div class="chip">${q.source}</div><div class="question-card"><span class="question-number">SORU ${String(state.index + 1).padStart(2, '0')}</span><h2>${q.prompt}</h2></div><p class="instruction">En doğru ifadeyi seç</p><div class="options">${q.options.map((option, i) => `<button class="option" data-option="${encodeURIComponent(option)}"><b>${'ABCD'[i]}</b><span>${option}</span></button>`).join('')}</div><div class="feedback" hidden></div></section>`;
  } else {
    const percent = Math.round((state.score / state.deck.length) * 100);
    app.innerHTML = `<section class="shell result"><div class="result-orb">${percent}<small>%</small></div><span class="eyebrow">TUR TAMAMLANDI</span><h1>${percent >= 80 ? 'Harika tempo.' : percent >= 60 ? 'Temel yerleşiyor.' : 'Bir tur daha!'}</h1><p><b>${state.score}</b> doğru · <b>${state.wrong.length}</b> tekrar kartı</p><div class="result-note">${state.wrong.length ? 'Yanlışların, bir sonraki turda önceliklendirilmek üzere hazır.' : 'Bu turdaki tüm kartları doğru bildin.'}</div>${state.wrong.length ? '<button class="primary big" data-retry>Yanlışları Tekrarla <span>↻</span></button>' : ''}<button class="secondary" data-start="${state.selectedCategory}">Yeni Tur Başlat</button><button class="text-button" data-home>Ana sayfaya dön</button></section>`;
  }
}
document.addEventListener('click', e => {
  const startBtn = e.target.closest('[data-start]'); if (startBtn) return start(startBtn.dataset.start);
  if (e.target.closest('[data-home]')) { state.mode = 'home'; return render(); }
  if (e.target.closest('[data-retry]')) return start(state.selectedCategory, state.wrong);
  const btn = e.target.closest('[data-option]'); if (!btn || state.answered) return;
  state.answered = true; const selected = decodeURIComponent(btn.dataset.option); const q = state.deck[state.index]; const correct = selected === q.answer;
  document.querySelectorAll('.option').forEach(el => { const val = decodeURIComponent(el.dataset.option); if (val === q.answer) el.classList.add('correct'); else if (el === btn) el.classList.add('incorrect'); el.disabled = true; });
  if (correct) { state.score++; state.streak++; saved.mastered++; saved.best = Math.max(saved.best, state.streak); persist(); } else { state.streak = 0; state.wrong.push(q); }
  const feedback = document.querySelector('.feedback'); feedback.hidden = false; feedback.className = `feedback ${correct ? 'good' : 'bad'}`; feedback.innerHTML = `<b>${correct ? 'Doğru — aynen böyle.' : 'Tekrar notu'}</b><span>${correct ? q.answer : `Doğru cevap: ${q.answer}`}</span><button class="primary" data-next>${state.index + 1 === state.deck.length ? 'Sonucu Gör' : 'Sonraki Soru →'}</button>`;
});
document.addEventListener('click', e => { if (!e.target.closest('[data-next]')) return; if (state.index + 1 >= state.deck.length) state.mode = 'result'; else { state.index++; state.answered = false; } render(); });
if ('serviceWorker' in navigator) window.addEventListener('load', () => navigator.serviceWorker.register('/service-worker.js'));
render();
