# Vefforritun 2 2026, verkefni 4

Verkefnið snýst um að setja upp react framenda fyrir vefþjónustu gerða í verkefni 3.

## Markmið

- Uppsetning og notkun á React.
- Noktun á React components með props og state.
- Routing í React verkefnum.

## Vefþjónustur og gögn

Þið getið notað þá vefþjónustu sem þið smíðuðuð í verkefni 3 eða notað [sýnilausn á verkefni 3](https://github.com/vefforritun/vef2-2026-v3-synilausn).

## Virkni

Setja skal upp a.m.k. þrjár síður:

- Forsíðu sem birtir fréttir með „paging“ möguleika svo hægt sé að skoða allar fréttir.
- Fréttasíðu sem birtir staka frétt með öllum upplýsingum.
- Síðu sem leyfir að vinna með gögn, eitt af eftirfarandi:
  - Búa til, breyta og eyða höfund.
  - Búa til frétt með höfund.
  - Breyta frétt með höfund.

Setja skal upp gagnvirkni, sjá að neðan.

Nota má React gegnum Vite eða Next.js. Ef Next.js er notað skal nota app directory og server components.

### Forsíða

Forsíða með einhverjum titli og birting á öllum fréttum: titli, útdrátt og höfund. Setja upp síðuflettingu þ.a. hægt sé að skoða allar fréttir.

### Fréttasíða

Síða sem birtir staka frétt með öllum upplýsingum: titli, útdrátt, höfund og texta.

Ef frétt er ekki til skal birta viðeigandi skilaboð.

### Unnið með gögn

Eitt af eftirfarandi:

- Búa til, breyta og eyða höfund.
- Búa til frétt með höfund.
- Breyta frétt með höfund.

Ef villur koma upp frá vefþjónustu skal birta þær, bæði ef upp kemur almenn `500` villa og ef upp koma villur vegna notanda, t.d. `400` villa.

Ekki þarf að útfæra neina auka validation í framendanum fyrir utan að setja viðeigandi attribute á `<input>` ef það er talið nauðsynlegt.

Hægt er að útfæra fleiri en eitt atriði til upphækkunar, hámarkseinkunn 10.

### Components

Setja skal upp a.m.k. fimm componenta sem halda utan um viðeigandi stöðu og taka við gögnum gegnum props. Það er frjálst að útbúa fleiri componenta ef það er nauðsynlegt.

Hugmyndir að componentum:

- `Layout` component sem heldur utan um header, efni og footer á síðu.
- `NewsList` component sem birtir lista af fréttum.
- `NewsItem` component sem birtir staka frétt.
- Form componenta: `Form`, `Input` og `Button`.

## Tæki, tól og test

Setja skal upp (eða nota uppsettningu með viðeigandi framework) `eslint`. Engar villur skulu vera til staðar.

Ekki er krafa um að skrifa test.

## Annað

Grunnslóð (_base url_) á vefþjónustu ætti að geyma í env breytu.

## GitHub og hýsing

Setja skal upp vefinn í hýsingu gegnum GitHub.

## Mat

- 10% — Tengt við vefþjónustu.
- 20% — Forsíða sem birtir fréttir.
- 20% — Fréttasíða sem birtir staka frétt.
- 20% — Unnið með gögn.
  - Aukalega +10% fyrir hvert auka atriði.
- 20% — Components útfærðir, a.m.k. fimm.
- 10% — Tæki og tól; GitHub og hýsing.

Hámarkseinkunn er 100% eða 10.

## Sett fyrir

Verkefni sett fyrir í fyrirlestri miðivkudaginn 4. mars 2026.

## Skil

Skila skal í Canvas í seinasta lagi fyrir lok dags fimmtudaginn 19. mars 2026.

Skil skulu innihalda:

- Slóð á verkefni keyrandi á Netlify.
- Slóð á GitHub repo fyrir verkefni. Dæmatímakennurum skal hafa verið boðið í repo. Notendanöfn þeirra eru:
  - `KristinFrida`
  - `MarzukIngi`
  - `osk`

## Aðstoð

Leyfilegt er að ræða, og vinna saman að verkefni en **skrifið ykkar eigin lausn**. Ef tvær eða fleiri lausnir eru mjög líkar þarf að færa rök fyrir því, annars munu allir hlutaðeigandi hugsanlega fá 0 fyrir verkefnið.

Ekki er heimilt að nota stór mállíkön til að vinna verkefni í námskeiðinu, [sjá nánar um notkun](https://github.com/vefforritun/vef2-2026/blob/main/mallikon.md).

## Einkunn

Sett verða fyrir ([sjá nánar í kynningu á áfanga](https://github.com/vefforritun/vef2-2026/blob/main/namsefni/01.kynning/1.kynning.md)):

- fimm minni sem gilda 10% hvert, samtals 50% af lokaeinkunn.
- tvö hópverkefni þar sem hvort um sig gildir 20%, samtals 40% af lokaeinkunn.
- einstaklingsverkefni sem gildir 15–25% af lokaeinkunn.

---

> Útgáfa 0.1

| Útgáfa | Breyting      |
| ------ | ------------- |
| 0.1    | Fyrsta útgáfa |
