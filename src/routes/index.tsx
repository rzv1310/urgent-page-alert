import { createFileRoute } from "@tanstack/react-router";
import { Faq } from "@/components/Faq";

export const Route = createFileRoute("/")({
  component: Index,
});

const PHONE_DISPLAY = "031 632 01 83";
const PHONE_TEL = "+40316320183";
const WHATSAPP_HREF = "https://wa.me/40745506443";

type Service = { title: string; body: string };

const SERVICES: readonly Service[] = [
  {
    title: "În drept penal, nu tratez dosarul ca pe o simplă formalitate",
    body: "Asigur apărare și reprezentare în fața organelor de urmărire penală și a instanțelor, inclusiv în cauze cu grad ridicat de complexitate, documentație voluminoasă și implicații profesionale sau personale importante.",
  },
  {
    title: "În dosarele economice, înțeleg atât mecanismul financiar, cât și riscul penal",
    body: "Reprezint persoane fizice și juridice în cauze privind fraudă, delapidare, fals, evaziune fiscală și alte acuzații economice, cu o abordare care combină analiza juridică și înțelegerea mecanismelor financiare.",
  },
  {
    title: "În cauzele de corupție, discreția și strategia sunt esențiale",
    body: "Acord asistență în dosare privind dare sau luare de mită, abuz în serviciu, trafic de influență, obținere nelegală de foloase și conflict de interese, cu atenție la impactul juridic, profesional și reputațional.",
  },
  {
    title: "În cauzele cu active cripto, ai nevoie de apărare care înțelege și tehnologia",
    body: "Cauze care implică tranzacții cu criptomonede, active digitale, blockchain și suspiciuni de fraudă sau dețineri nedeclarate, unde analiza juridică trebuie dublată de înțelegere tehnică.",
  },
  {
    title: "În dosarele privind droguri, verific atent legalitatea probelor și procedurilor",
    body: "Apăr clienți acuzați de deținere, trafic de droguri sau conducere sub influența substanțelor psihoactive, cu accent pe respectarea garanțiilor procedurale și pe analiza probelor administrate.",
  },
  {
    title: "În dosarele de spălare de bani, apărarea începe cu înțelegerea traseului financiar",
    body: "Reprezint clienți în cauze privind spălarea banilor, ascunderea bunurilor sau proveniența fondurilor, în contexte financiare complexe care cer analiză atentă a documentelor și tranzacțiilor.",
  },
  {
    title: "În cauzele de malpraxis, apărarea trebuie să fie și juridică, și tehnică",
    body: "Acord asistență medicilor, juridic, tehnic sau economic acuzați de răspundere penală în legătură cu erori profesionale, decizii de serviciu sau presupuse încălcări ale obligațiilor legale.",
  },
  {
    title: "În accidentele rutiere grave, contează atât probele, cât și contextul uman",
    body: "Reprezint clienți implicați în accidente rutiere cu vătămări corporale sau deces, tratând cauza cu rigoare juridică, atenție la expertize și înțelegere pentru consecințele personale ale dosarului.",
  },
  {
    title: "În incidentele de muncă, analizez responsabilitatea reală, nu doar acuzația",
    body: "Acord consultanță și apărare în cauze privind accidente de muncă, încălcări ale normelor de securitate, neglijență sau răspunderea angajatorului, mai ales când cazul are consecințe penale.",
  },
  {
    title:
      "Pentru victime, urmăresc nu doar tragerea la răspundere, ci și recuperarea prejudiciului",
    body: "Asist persoanele vătămate în dosare penale pentru protejarea intereselor lor, obținerea despăgubirilor și reprezentare în fața organelor de urmărire penală, instanțelor sau în negocieri pentru soluții echitabile.",
  },
];

type Testimonial = {
  name: string;
  meta: string;
  when: string;
  body: string;
  initialColor: string;
};

const TESTIMONIALS: readonly Testimonial[] = [
  {
    name: "Lidia Caescu",
    meta: "Local Guide · 23 de recenzii · O fotografie",
    when: "acum 6 luni",
    body: "Cautam un avocat in Bucuresti si din fericire l-am intalnit pe dl avocat Bogdan Lamatic. Din primul moment mi-a castigat increderea prin profesionalismul sau, calmul si empatia cu care m-a ascultat. Nu e doar un avocat excelent gasind solutii la orice problema ci in primul rand un OM in sensul adevarat al cuvantului. Il recomand din toata inima celor care au nevoie de un specialist si un sprijin real intr-un moment dificil.",
    initialColor: "bg-emerald-700",
  },
  {
    name: "Florian Claudiu Lazar",
    meta: "O recenzie",
    when: "acum 7 luni",
    body: "Domnul avocat Bogdan Lamatic nu doar ca știe legea, dar o și explică pe înțelesul oricui. Si îți dă siguranță pe tot timpul procesului. Recomand cu caldura!",
    initialColor: "bg-rose-700",
  },
  {
    name: "Robert Boloaja",
    meta: "3 recenzii",
    when: "acum 3 luni",
    body: "Dosar penal complicat, cu acuzații serioase. Domnul avocat Bogdan Lamatic a fost excepțional: extrem de profesionist, strategie foarte bună, calm și pregătit maxim. A identificat rapid punctele slabe ale dosarului și a gestionat totul cu fermitate. Disponibil oricând, explică totul clar și realist, fără promisiuni false. Rezultatul a fost mult peste ce speram. Recomand cu încredere totală oricui are nevoie de un avocat penalist de top! Mulțumesc din suflet!",
    initialColor: "bg-sky-700",
  },
  {
    name: "Alexandru Alex",
    meta: "2 recenzii",
    when: "acum 7 luni",
    body: "Intr-un dosar penal foarte greu Bogdan a reusit sa obtina un rezultat pe care il credeam imposibil. Recomand 100%!",
    initialColor: "bg-amber-700",
  },
];

const FAQ_ITEMS: readonly { q: string; a: string }[] = [
  {
    q: "Discuția rămâne confidențială?",
    a: "Da, fără excepție. Secretul profesional al avocatului este garantat de lege (art. 35 din Legea 51/1995), iar tot ce îmi spui, la telefon, pe WhatsApp sau la birou, nu poate fi dezvăluit nimănui fără acordul tău.",
  },
  {
    q: "Răspundeți și în afara orelor de program, în weekend sau noaptea?",
    a: "Da, când este o urgență reală (reținere, percheziție, audiere fixată pentru a doua zi). Sună la 031 632 01 83. Dacă nu răspund imediat, revin în maximum 30 de minute.",
  },
  {
    q: "Preluați dosare și în afara Bucureștiului?",
    a: "Da, reprezint clienți în fața instanțelor din întreaga țară. Pentru cauze din provincie, costurile de deplasare se discută transparent înainte, fără surprize ulterioare.",
  },
  {
    q: "Cât costă reprezentarea într-un dosar penal?",
    a: "Onorariul depinde de complexitatea dosarului și de stadiul procesului. La prima consultanță (gratuită) stabilesc un tarif estimativ și toate costurile sunt prevăzute transparent în contract. Sunați-mă la +40 (31) 632 01 83",
  },
  {
    q: "Oferiți consultanță inițială gratuită?",
    a: "Da, ofer o primă discuție gratuită pentru evaluarea situației juridice și a posibilelor strategii de apărare. Telefon +40 (31) 632 01 83",
  },
  {
    q: "Aveți experiență în dosare penale legate de droguri?",
    a: "Da, am reprezentat clienți în cauze variate, de la infracțiuni economice, la infracțiuni contra persoanei sau trafic de droguri, cu rezultate favorabile.",
  },
  {
    q: "Cât durează un proces penal?",
    a: "Poate varia de la câteva luni la câțiva ani, în funcție de complexitatea cazului și etapele procesuale. Voi face tot posibilul să accelerez procedura în limitele legii. Sunați-mă la +40 (31) 632 01 83 pentru o consultație gratuită.",
  },
  {
    q: "Care sunt drepturile mele ca suspect sau inculpat?",
    a: "Aveți dreptul la avocat, la informarea corectă asupra acuzațiilor, la consultarea dosarului și la un proces echitabil. Le voi explica detaliat în raport cu cazul dvs. Telefon +40 (31) 632 01 83",
  },
  {
    q: "Mă reprezentați dvs. personal în instanță sau trimiteți pe altcineva din echipă?",
    a: "Da, mă ocup personal de dosar și de reprezentarea în fața instanței. Dacă este nevoie, colaborez și cu parteneri de încredere, dar eu rămân avocatul de contact.",
  },
  {
    q: "Ce opțiuni am dacă hotărârea instanței nu îmi este favorabilă?",
    a: "Putem folosi căi de atac - apel, căi de atac extraordinare - în funcție de situația juridică și termenele legale.",
  },
  {
    q: "Cum pot găsi un avocat bun în România sau în București?",
    a: "Experiența si expertiza mea sunt detaliate aici: https://avocatpenalbucuresti.ro/despre-mine\nSunați-mă pentru o consultație gratuită la 0316320183",
  },
  {
    q: "Pot evita cazierul judiciar dacă îmi recunosc vina?",
    a: "În anumite situații, legea permite aplicarea unor pedepse fără înscriere în cazier (ex. renunțarea la urmărirea penală, amenda administrativă, renunțarea la aplicarea pedepsei). Fiecare caz se analizează individual. Sunați-ma la +40 (31) 632 01 83",
  },
  {
    q: "Ce drepturi am în cazul reținerii de către poliție?",
    a: "Aveți dreptul să fiți informat asupra motivelor, să beneficiați de avocat ales sau din oficiu, să cereți un interpret dacă nu vorbiți româna și să primiți asistență medicală dacă este nevoie. Mă puteți suna începând cu ora 6 dimineața. Telefon +40 (31) 632 01 83",
  },
  {
    q: "Ce este eliberarea condiționată și pot beneficia de ea?",
    a: "Eliberarea condiționată este posibilitatea de a fi pus în libertate înainte de termen, dacă ați executat o parte din pedeapsă, ați avut bună purtare și ați îndeplinit condițiile legale.",
  },
  {
    q: "Cât timp poate dura o anchetă penală?",
    a: "Durata depinde de complexitatea cazului și de numărul probelor, însă legea nu prevede termene maxime pentru fiecare etapă. Sunați-mă la +40 (31) 632 01 83",
  },
  {
    q: "Pot refuza să dau declarații împotriva mea?",
    a: "Da, aveți dreptul să nu vă autoincriminați, conform Codului de Procedură Penală, Constituției României și Convenției Europene a Drepturilor Omului.",
  },
  {
    q: "Ce trebuie să fac dacă nu sunt de acord cu acuzațiile care mi se aduc?",
    a: "Contactați-mă imediat la +40 (31) 632 01 83. Voi analiza acuzațiile, voi pregăti apărarea și voi contesta probele sau procedurile ilegale pentru a vă proteja drepturile.",
  },
  {
    q: "Am fost prins conducând sub influența alcoolului. Ce risc?",
    a: "În funcție de alcoolemie, fapta poate fi contravenție sau infracțiune. Se poate ajunge la dosar penal, suspendarea permisului și chiar pedeapsă cu închisoarea. Apărarea corectă poate reduce sancțiunea. Sunați-mă la +40 (31) 632 01 83",
  },
  {
    q: "Poliția a găsit droguri asupra mea, dar erau pentru consum propriu. Ce urmează?",
    a: "Deținerea de droguri pentru consum este infracțiune. În anumite condiții, se poate obține renunțarea la urmărirea penală sau suspendarea pedepsei. Este important să aveți avocat încă din prima fază. Sunați-mă la +40 (31) 632 01 83",
  },
  {
    q: "Am fost acuzat de furt, dar nu există probe clare. Cum mă pot apăra?",
    a: "Lipsa probelor suficiente sau probe obținute ilegal pot duce la clasarea dosarului sau la achitare. Vom analiza actele dosarului și vom formula apărările necesare. Telefon +40 (31) 632 01 83",
  },
  {
    q: "Ce se întâmplă dacă refuz testul de alcoolemie sau de droguri?",
    a: "Refuzul testării este infracțiune distinctă și atrage dosar penal. Este mai grav decât un rezultat pozitiv, de aceea e important să cereți imediat asistență juridică. Sunați-mă la +40 (31) 632 01 83",
  },
  {
    q: "Sunt suspect de violență domestică. Care sunt consecințele?",
    a: "Violența domestică este infracțiune, iar pe lângă pedeapsă se pot dispune ordine de protecție. Voi construi apărarea luând în calcul declarațiile martorilor, probele și circumstanțele. Telefon +40 (31) 632 01 83",
  },
  {
    q: "Am primit citație ca martor într-un dosar penal. Pot să nu merg?",
    a: "Nu. Prezența este obligatorie. Refuzul poate atrage amendă sau chiar aducerea cu mandat. Totuși, aveți dreptul la a fi asistat de un avocat ales și aveți dreptul să refuzați să vă autoincriminați.",
  },
  {
    q: "Ce fac dacă sunt acuzat pe nedrept?",
    a: "Contactați imediat un avocat. Sunați-mă la +40 (31) 632 01 83 Vom contesta probele, vom aduce martori și expertize independente, iar în unele cazuri putem formula plângere pentru denunț calomnios.",
  },
  {
    q: "Pot fi reținut mai mult de 24 de ore de poliție?",
    a: "Reținerea nu poate depăși 24 de ore. Prelungirea se face prin arestare preventivă dispusă de judecător, pentru care se impune apărare în fața instanței.",
  },
  {
    q: "Ce înseamnă acord de recunoaștere a vinovăției?",
    a: "Este o procedură prin care recunoașteți fapta în schimbul unei pedepse reduse. Se aplică doar în anumite situații și trebuie analizat cu atenție, pentru a nu accepta o soluție dezavantajoasă.",
  },
];

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.49a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.24 1.02l-2.2 2.2z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 32 32" fill="currentColor" className={className}>
      <path d="M16 .4C7.4.4.4 7.4.4 16c0 2.8.7 5.5 2.1 7.9L.3 31.7l8-2.1A15.6 15.6 0 0 0 31.6 16C31.6 7.4 24.6.4 16 .4Zm0 28.4c-2.4 0-4.7-.6-6.7-1.8l-.5-.3-4.7 1.2 1.3-4.6-.3-.5A12.7 12.7 0 1 1 16 28.8Zm7.3-9.5c-.4-.2-2.4-1.2-2.8-1.3-.4-.1-.7-.2-1 .2-.3.4-1.1 1.3-1.3 1.6-.2.3-.5.3-.9.1-.4-.2-1.7-.6-3.2-2-1.2-1-2-2.3-2.2-2.7-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7l.4-.6c.1-.2.1-.4 0-.6 0-.2-1-2.3-1.3-3.1-.3-.8-.7-.7-1-.7h-.8c-.3 0-.7.1-1.1.5s-1.4 1.4-1.4 3.5 1.5 4 1.6 4.3c.2.3 2.8 4.3 6.9 6 .9.4 1.7.7 2.3.9.9.3 1.8.2 2.5.1.8-.1 2.4-1 2.7-1.9.3-.9.3-1.7.2-1.9 0-.2-.3-.3-.7-.5Z" />
    </svg>
  );
}

function ShieldCheck({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function GoogleLogo({ className }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 272 92" className={className}>
      <path
        fill="#EA4335"
        d="M115 47c0 13-10 22-22 22S71 60 71 47s10-22 22-22 22 9 22 22Zm-10 0c0-8-6-13-12-13s-12 5-12 13 6 13 12 13 12-5 12-13Z"
      />
      <path
        fill="#FBBC05"
        d="M163 47c0 13-10 22-22 22s-22-9-22-22 10-22 22-22 22 9 22 22Zm-10 0c0-8-6-13-12-13s-12 5-12 13 6 13 12 13 12-5 12-13Z"
      />
      <path
        fill="#4285F4"
        d="M209 27v40c0 16-10 23-21 23-11 0-17-7-19-13l9-4c1 3 5 8 11 8 7 0 11-4 11-12v-3h-1c-2 3-7 5-12 5-11 0-21-10-21-22s10-22 21-22c6 0 10 3 12 5h1v-5h9Zm-9 20c0-8-5-13-11-13-7 0-12 6-12 13 0 8 5 13 12 13 6 0 11-5 11-13Z"
      />
      <path fill="#34A853" d="M225 4v64h-10V4h10Z" />
      <path
        fill="#EA4335"
        d="m261 53 7 5c-2 4-8 11-17 11-12 0-21-9-21-22 0-13 9-22 20-22 12 0 17 9 19 14l1 3-30 12c2 4 6 7 11 7 5 0 8-2 10-5Zm-23-8 20-8c-1-3-4-5-8-5-5 0-12 4-12 13Z"
      />
      <path
        fill="#4285F4"
        d="M35 41v-9h31c0 2 1 4 1 6 0 8-2 18-9 25-7 7-16 10-27 10C10 73 0 56 0 36S10 0 31 0c11 0 19 4 25 10l-7 7c-4-4-10-7-18-7-15 0-26 12-26 26s11 26 26 26c10 0 15-4 19-8 3-3 5-7 6-13H35Z"
      />
    </svg>
  );
}

function StarRow({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex gap-0.5 text-gold ${className}`} aria-label="5 din 5 stele">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
          <path d="M10 1.5l2.7 5.6 6.1.9-4.4 4.3 1 6.1L10 15.6l-5.4 2.8 1-6.1L1.2 8l6.1-.9L10 1.5z" />
        </svg>
      ))}
    </span>
  );
}

function Index() {
  return (
    <div className="flex flex-col">
      {/* 1. Sticky top call bar */}
      <a
        href={`tel:${PHONE_TEL}`}
        className="sticky top-0 z-50 flex items-center justify-center gap-3 bg-black px-4 py-3 text-white"
      >
        <span className="grid h-7 w-7 place-items-center rounded-full bg-gold">
          <PhoneIcon className="h-3.5 w-3.5 text-black" />
        </span>
        <span className="text-[15px]">Sună acum</span>
        <span className="text-[15px] font-semibold text-gold underline underline-offset-4">
          {PHONE_DISPLAY}
        </span>
      </a>

      {/* 2. Brand header */}
      <header className="mx-auto w-full max-w-md px-4 pt-5 min-[400px]:px-5">
        <div className="flex items-center justify-between gap-3 min-[400px]:gap-4">
          <div className="leading-tight">
            <p className="text-[9px] font-medium tracking-[0.18em] text-slate-eyebrow min-[400px]:text-[11px] min-[400px]:tracking-[0.22em]">
              CABINET AVOCAT
            </p>
            <p className="font-script text-[26px] leading-none text-slate-eyebrow min-[400px]:text-[32px]">
              Bogdan Lamatic
            </p>
          </div>
          <a
            href={WHATSAPP_HREF}
            className="whitespace-nowrap rounded-md bg-[#25D366] px-2.5 py-2 text-[11px] font-semibold text-white shadow-sm min-[400px]:px-3.5 min-[400px]:py-2.5 min-[400px]:text-[13px]"
          >
            WhatsApp Confidențial
          </a>
        </div>
        <hr className="mt-5 border-rule" />
      </header>

      {/* 3. Hero */}
      <section className="mx-auto w-full max-w-md px-4 pt-6 min-[400px]:px-5">
        <p
          className="block w-full whitespace-nowrap rounded-md bg-zinc-800 px-2 py-1.5 text-center font-medium tracking-tight text-white"
          style={{ fontSize: "clamp(9px, calc(2.85vw + 2px), 15px)" }}
        >
          +18 ani EXPERIENȚĂ • RĂSPUNS RAPID • IMPLICARE 100%
        </p>
        <h1 className="mt-4 text-[26px] font-bold leading-[1.1] tracking-tight text-ink min-[400px]:text-[34px]">
          Ai nevoie urgentă de un avocat penal în București?
        </h1>
        <p className="mt-5 text-[16px] leading-6 text-ink/80 min-[400px]:text-[17px] min-[400px]:leading-7">
          Primești apărare clară în dosare penale, audieri, acuzații, rețineri, percheziții, citații
          și situații urgente.
        </p>
        <ul className="mt-5 list-disc space-y-1 pl-5 text-[16px] leading-6 text-ink min-[400px]:text-[17px] min-[400px]:leading-7">
          <li>Discuți direct cu mine</li>
          <li>Afli rapid ce pași să urmezi</li>
          <li>Discreție absolută</li>
        </ul>

        <a
          href={`tel:${PHONE_TEL}`}
          className="mt-6 flex h-12 w-full items-center justify-center gap-3 rounded-xl bg-cta-yellow text-[17px] font-bold tracking-wide text-black shadow-md min-[400px]:h-14 min-[400px]:text-[19px]"
        >
          <PhoneIcon className="h-5 w-5" />
          SUNĂ-MĂ ACUM
        </a>

        <div className="mt-5 flex items-center gap-2 text-[15px]">
          <span className="font-semibold text-ink">5.0</span>
          <StarRow />
          <span className="text-ink/70">din 28 recenzii</span>
          <GoogleLogo className="ml-1 h-4 w-auto" />
        </div>

        {/* Hero portrait */}
        <figure className="-mx-4 mt-6 bg-zinc-900 min-[400px]:-mx-5">
          <div className="relative aspect-[11/10] w-full bg-zinc-800">
            <img
              src="/formal_1.webp"
              alt="Avocat Bogdan Lamatic, portret în costum"
              fetchPriority="high"
              sizes="(max-width: 480px) 100vw, 448px"
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
          </div>
          <figcaption className="bg-black px-4 py-3 text-center text-[14px] text-white">
            Avocat Bogdan Lamatic <span className="text-gold">· Drept penal București</span>
          </figcaption>
        </figure>
      </section>

      {/* 4. Don't go alone - dark section */}
      <section className="bg-night text-white">
        <div className="mx-auto w-full max-w-md px-5 py-12">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-9 w-9 text-gold" />
            <p className="inline-block rounded-md bg-zinc-800 px-3 py-1.5 text-[14px] font-semibold text-gold">
              +18 ani experiență în drept penal
            </p>
          </div>
          <h2 className="mt-8 text-[34px] font-semibold leading-[1.15] tracking-tight">
            Nu merge singur la audieri și nu lua decizii sub presiune sau frică
          </h2>
          <div className="mt-7 space-y-5 text-[17px] leading-7 text-white/85">
            <p>
              Într-un dosar penal, primele declarații, primele semnături și primele reacții pot
              conta enorm.
            </p>
            <p>
              Când ești chemat la poliție, parchet sau instanță, este ușor să spui prea mult, să
              omiți ceva important sau să iei o decizie fără să înțelegi consecințele.
            </p>
            <p>
              Îți explic drepturile și ce trebuie să eviți, iar apărarea ta începe înainte ca
              greșelile să fie greu de reparat.
            </p>
          </div>
          <a
            href={`tel:${PHONE_TEL}`}
            className="mt-8 flex h-13 w-full items-center justify-center gap-3 rounded-md border-[1.5px] border-gold px-4 py-3.5 text-[16px] font-semibold text-gold"
          >
            <PhoneIcon className="h-5 w-5" />
            Sună pentru apărare urgentă!
          </a>
        </div>
      </section>

      {/* 5. Testimonials */}
      <section className="bg-night-soft text-white">
        <div className="mx-auto w-full max-w-md px-5 py-12">
          <ul className="space-y-8">
            {TESTIMONIALS.map((t, i) => (
              <li key={i}>
                <div className="flex items-start gap-3">
                  <span
                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-full text-[15px] font-semibold text-white ${t.initialColor}`}
                  >
                    {t.name.charAt(0)}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[15px] font-semibold leading-tight">{t.name}</p>
                    <p className="mt-0.5 text-[12px] text-white/60">{t.meta}</p>
                  </div>
                  <svg
                    aria-hidden
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4 text-white/40"
                  >
                    <circle cx="12" cy="6" r="1.6" />
                    <circle cx="12" cy="12" r="1.6" />
                    <circle cx="12" cy="18" r="1.6" />
                  </svg>
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <StarRow />
                  <span className="text-[12px] text-white/60">{t.when}</span>
                </div>
                <p className="mt-3 whitespace-pre-line text-[14px] leading-6 text-white/85">
                  {t.body}
                </p>
              </li>
            ))}
          </ul>
          <a
            href={`tel:${PHONE_TEL}`}
            className="mt-10 flex h-14 w-full items-center justify-center gap-3 rounded-md bg-cta-yellow px-4 text-[17px] font-semibold text-black shadow-md"
          >
            <PhoneIcon className="h-5 w-5" />
            Vreau avocat!
          </a>
        </div>
      </section>

      {/* 6. Apărare construită pe analiză */}
      <section className="bg-paper">
        <div className="mx-auto w-full max-w-md px-5 py-12">
          <figure className="overflow-hidden rounded-xl bg-zinc-900">
            <div className="relative aspect-[3/2] w-full bg-zinc-800">
              <img
                src="/desk.webp"
                alt="Avocat Bogdan Lamatic la birou, cu Codul Penal și statueta Justiției"
                loading="lazy"
                sizes="(max-width: 480px) 100vw, 448px"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </figure>
          <p className="mt-6 inline-block rounded-md bg-zinc-800 px-3 py-1.5 text-[14px] font-semibold text-gold">
            Apărare construită pe analiză, nu pe presupuneri
          </p>
          <h2 className="mt-3 text-[30px] font-bold leading-[1.15] tracking-tight text-ink">
            Înțelegi unde te afli în dosar și care este cea mai bună direcție de apărare.
          </h2>
          <div className="mt-5 space-y-4 text-[17px] leading-7 text-ink/80">
            <p>
              O strategie bună pornește de la analiza atentă a actelor, probelor, declarațiilor și
              riscurilor specifice cazului tău.
            </p>
            <p>
              Primești o evaluare clară a situației, o explicație realistă a variantelor disponibile
              și o abordare construită pas cu pas, în funcție de obiectivul tău:{" "}
              <strong className="font-semibold text-ink">
                protejarea libertății, reputației și intereselor tale.
              </strong>
            </p>
          </div>
          <div className="my-8 flex items-center gap-3">
            <span className="h-px flex-1 bg-gold/40" />
            <ShieldCheck className="h-5 w-5 text-gold" />
            <span className="h-px flex-1 bg-gold/40" />
          </div>
          <a
            href={`tel:${PHONE_TEL}`}
            className="flex h-14 w-full items-center justify-center gap-3 rounded-md bg-cta-yellow px-4 text-[16px] font-semibold text-black shadow-md"
          >
            <PhoneIcon className="h-5 w-5" />
            Cere o evaluare confidențială
          </a>
        </div>
      </section>

      {/* 7. Services */}
      <section className="bg-paper">
        <div className="mx-auto w-full max-w-md px-5 pb-12">
          <h2 className="text-[32px] font-bold leading-[1.15] tracking-tight text-ink">
            Apărare penală strategică pentru dosare complexe, nu soluții standard
          </h2>
          <p className="mt-4 inline-block rounded-md bg-zinc-800 px-3 py-2 text-[17px] font-semibold leading-6 text-gold">
            Apărarea este construită personalizat, cu atenție la detalii juridice, financiare,
            tehnice și procedurale.
          </p>
          <ul className="mt-8 space-y-7">
            {SERVICES.map((s, i) => (
              <li key={i} className="border-l-[3px] border-gold pl-4">
                <h3 className="text-[19px] font-bold leading-snug text-ink">{s.title}</h3>
                <p className="mt-2 text-[17px] leading-7 text-ink/75">{s.body}</p>
              </li>
            ))}
          </ul>
          <a
            href={WHATSAPP_HREF}
            className="mt-10 flex h-14 w-full items-center justify-center gap-3 rounded-md bg-[#128C7E] px-4 text-[17px] font-semibold text-white shadow-md"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Scrie-mi aici confidențial
          </a>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="bg-paper">
        <div className="mx-auto w-full max-w-md px-5 pb-12">
          <h2 className="mb-6 text-[28px] font-bold tracking-tight text-ink">
            Întrebări frecvente
          </h2>
          <Faq items={FAQ_ITEMS} />
        </div>
      </section>

      {/* 9. Final CTA */}
      <section className="bg-paper">
        <div className="mx-auto w-full max-w-md">
          <div className="relative aspect-[8/5] w-full bg-zinc-200">
            <img
              src="/formal_2.webp"
              alt="Avocat Bogdan Lamatic, portret în cămașă albă"
              loading="lazy"
              sizes="(max-width: 480px) 100vw, 448px"
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
            <div className="absolute bottom-3 right-3 flex items-center gap-2 rounded-md bg-white/95 px-2.5 py-1.5 shadow-sm">
              <span className="text-[13px] font-semibold text-ink">5.0</span>
              <StarRow />
              <GoogleLogo className="h-3.5 w-auto" />
            </div>
          </div>
          <div className="px-5 py-8">
            <h2 className="text-[28px] font-bold leading-[1.2] tracking-tight text-gold">
              Nu aștepta ca dosarul să avanseze fără o apărare bine pregătită
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-ink/80">
              Amânarea poate însemna declarații date greșit sau probe neanalizate la timp.
            </p>
            <h3 className="mt-7 text-[22px] font-bold text-ink">De ce să suni astăzi:</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex gap-3 text-[15px] leading-7 text-ink/85">
                <svg
                  aria-hidden
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-1 h-5 w-5 shrink-0 text-gold"
                >
                  <path d="M5 12l5 5L20 7" />
                </svg>
                <span>
                  Cu cât discuți mai repede cu un avocat, cu atât poți înțelege mai clar riscurile,
                  ce să pregătești și cum să abordezi următoarea etapă.
                </span>
              </li>
              <li className="flex gap-3 text-[15px] leading-7 text-ink/85">
                <svg
                  aria-hidden
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-1 h-5 w-5 shrink-0 text-gold"
                >
                  <path d="M5 12l5 5L20 7" />
                </svg>
                <span>Eviți deciziile luate sub presiune.</span>
              </li>
            </ul>
            <a
              href={`tel:${PHONE_TEL}`}
              className="mt-7 flex h-14 w-full items-center justify-center gap-3 rounded-md bg-cta-yellow px-4 text-[19px] font-bold text-black shadow-md"
            >
              <PhoneIcon className="h-5 w-5" />
              {PHONE_DISPLAY}
            </a>
            <p className="mt-4 text-center text-[14px] font-semibold text-ink">
              Discuți direct cu mine <span className="text-gold">·</span> Discreție absolută
            </p>
          </div>
        </div>
      </section>

      {/* 10. Footer */}
      <footer className="bg-night text-white/70">
        <div className="mx-auto w-full max-w-md px-5 py-8 text-[13px]">
          <p className="font-semibold text-white">Cabinet Avocat Bogdan Lamatic</p>
          <p className="mt-1 text-white/60">Drept penal · București</p>
          <p className="mt-4">
            © {new Date().getFullYear()} Cabinet Avocat Bogdan Lamatic. Toate drepturile rezervate.
          </p>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-white/60">
            <a href="https://avocatpenalbucuresti.ro/gdpr" className="hover:text-gold">
              GDPR
            </a>
            <a href="https://avocatpenalbucuresti.ro/politica-cookies" className="hover:text-gold">
              Politică cookies
            </a>
            <a
              href="https://avocatpenalbucuresti.ro/termeni-si-conditii"
              className="hover:text-gold"
            >
              Termeni și condiții
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
