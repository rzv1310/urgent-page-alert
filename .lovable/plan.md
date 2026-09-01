# Schimbare număr telefon în +40 745 506 443

## Obiectiv
Înlocuirea tuturor aparițiilor numărului vechi de telefon (`031 632 01 83` / `+40 (31) 632 01 83` / `+40316320183`) cu noul număr `+40 745 506 443` (link `tel:+40745506443`), păstrând intact numărul WhatsApp care este deja corect.

## Locuri identificate
1. `src/routes/index.tsx`
   - constantele `PHONE_DISPLAY` și `PHONE_TEL`
   - toate string-urile din răspunsurile FAQ care conțin numărul vechi
2. `src/components/Faq.tsx`
   - constantele `PHONE_DISPLAY`, `PHONE_TEL`, `PHONE_VARIANTS`
   - regex-ul `PATTERN` care detectează numerele pentru link-uri click-to-call
3. `src/routes/__root.tsx`
   - JSON-LD `telephone`
   - meta `description` și `og:description`

## Modificări tehnice
- `PHONE_DISPLAY` devine `"+40 745 506 443"`
- `PHONE_TEL` devine `"+40745506443"`
- Variante de recunoaștere în FAQ devin: `["+40 745 506 443", "0745 506 443", "+40745506443"]`
- Regex actualizat pentru a evidenția și link-ui noile variante
- Descrierile SEO actualizate cu noul număr

## Verificare
După editare se va rula o căutare în proiect pentru a confirma că nu mai există apariții ale vechilor numere.
