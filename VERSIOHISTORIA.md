<div lang="fi-FI">

# Versiohistoria

<!-- New entries inserted automatically after this line -->

## [4.0.1](https://github.com/response200/eslint-config/compare/v4.0.0...v4.0.1) (2025-05-09)

### Fixes
- The file `scripts/helpers/paths.sh` was missing from the 4.0.0 npm package. Fixed the issue by adding the file to `files` in package.json.

## [4.0.0](https://github.com/response200/eslint-config/compare/v3.0.0...v4.0.0) (2025-05-09)

### Rikkovat muutokset ml. muutokset linttaussääntöihin
- Muutettu säännöstöt default, recommended, recommended-jsx ja recommended-typescript ESLint 9:n käyttämään ”flat config”-formaattiin. 

- Pyrkimyksenä on ollut pitää edellä mainitut säännöstöt niin hyvin taaksepäin yhteensopivina versioon 3.0.0 nähden kuin mahdollista. Siirtyminen ESLint 9:ään, riippuvuuksien päivittäminen ja korvaaminen uusilla, muutokset eri sääntöjen heuristiikkaan ja muutokset joidenkin sääntöjen nimissä voi kuitenkin johtaa siihen, että linttaaminen tällä uudella 4.0.0-versiolla nostaa esiin uusia tai erinimisen säännön alla olevia sääntörikkomuksia projektissasi.

- Edellä mainitut säännöstöt eivät ole enää yhteensopivia ESLint 8:n kanssa. ESLint 8:n mukainen `.eslintrc`, `.eslintrc.js` tai `.eslintrc.json`-konfiguraatiotiedosto täytyy korvata projektissasi ESLint 9:n mukaisella `eslint.config.js`, `eslint.config.cjs` tai `eslint.config.mjs`-konfiguraatiotiedostolla. README.md-tiedostossa on esimerkki konfiguraatiotiedostosta.

- Poistettu `lint.sh`-työkalusta `branch`-toimintamoodi. Se oli käytännössä `rev`-toimintamoodi argumentilla `master..HEAD`. Nykyään on kuitenkin yleistynyt käytäntö, jossa päähaaran nimi on main. Näin ollen `branch`-toimintamoodin olettama siitä, että päähara on nimeltään master, ei ole enää hyvä. Korvaavana toimintamoodina voi käyttää edellä mainittua `rev`-toimintamoodia argumentilla `master..HEAD`, `main..HEAD` tai muulla vastaavalla päähaaraan viittaavalla argumentilla.

### Uudet ominaisuudet
- Lisätty `lint.sh`-työkaluun tuki tiedostopäätteille `.cjs`, `.mjs`, `.cts` ja `.mts`.

- Otetaan `NODE_BIN`-ympäristömuuttuja huomioon `lint.sh`-työkalussa, kun se suorittaa eslintin `node`-prosessissa. Ympäristömuuttuja mahdollistaa `node`-prosessin käynnistämisen jostain tietystä polusta tai tietyillä komentoriviargumenteilla.

- Lisätty `lint.sh`-työkaluun tuki suorittaa se git-koodisäilön ulkopuolisesta hakemistosta.

### Ylläpitotoimenpiteet
- Päivitetty riippuvuus eslint-plugin-jsx-a11y versiosta 6.9.0 versioon 6.10.2 ja siirretty se peer-riippuvuuksista tavallisiin riippuvuuksiin. Vaikuttaa siltä, että ESLint 9:n myötä käytännöksi on tullut laittaa riippuvuuksina olevat nk. `shareable configit` tavallisiin riippuvuuksiin.

- Poistettu kaikki muut peer-riippuvuudet. Ne korvattiin lisäämällä neostandard tavallisiin riippuvuuksiin.
  * Neostandard korvaa standardin ja eslint-config-standardin. Eslint-config-standardia ei enää ylläpidetä eikä se tue ESLint 9:ää.
  * Eslint-config-standard-jsx-säännöstöä ei enää ylläpidetä eikä se tue ESLint 9:ää. Neostandard tarjoaa hyvin samanlaisen JSX-säännöstön.
  * Eslint-config-love (aiemmin eslint-config-standard-with-typescript) poistettiin riippuvuuksista, koska sitä ei enää tarvita. Neostandard tarjoaa hyvin samanlaisen TypeScript-säännöstön.
  * Poistettu @typescript-eslint/eslint-plugin riippuvuuksista. Se tulee asennetuksi muutenkin, koska se on transitiivinen riippuvuus neostandardin kautta.

- Lisätty @eslint/js riippuvuuksiin. Se sisältää ESLint 9:n omat JavaScript-säännöstöt.

- Lisätty eslint peer-riippuvuuksiin versiotarkenteella `>=9`. Tätä suositellaan [ESLintin shareable configeja käsittelevässä dokumentaatiossa](https://eslint.org/docs/latest/extend/shareable-configs#publishing-a-shareable-config).

- Päivitetty kehitysriippuvuudet @babel/*, @cucumber/cucumber ja typescript niiden tuoreimpiin versioihin.

- Korjattu haavoittuvuus https://github.com/advisories/GHSA-968p-4wvh-cqc8 (@babel/helpers) päivittämällä transitiivinen @babel/helpers-riippuvuus versiosta 7.20.7 versioon 7.27.0.

- Korjattu haavoittuvuus https://github.com/advisories/GHSA-3xgq-45jj-v275 (cross-spawn) päivittämällä transitiivinen cross-spawn-riippuvuus versiosta 7.0.3 versioon 7.0.6.

- Korjattu haavoittuvuus https://github.com/advisories/GHSA-952p-6rrq-rcjv (micromatch) päivittämällä transitiivinen micromatch-riippuvuus versiosta 4.0.7 versioon 4.0.8.

- Korvattu `lint.sh`-työkalussa ja muissa skripteissä `git rev-parse --show-toplevel`-pohjainen aktiivisen hakemiston normalisointilogiikka toisenlaisilla logiikoilla. Tämä poistaa skripteistä kokonaan tai osittain riippuvuuden `git`-binääriin.

- Päivitetty tekstit ja ohjeet tiedostoissa README.md ja README-en.md olemaan yhteensopivat ESLint 9:n kanssa ja linjassa @response200/eslint-configin nyt käyttämien säännöstöjen kanssa.

## [3.0.0](https://github.com/response200/eslint-config/compare/v2.0.0...v3.0.0) (2024-07-26)

### Muutokset linttaussääntöihin
- Joitakin sääntöjä lisätty ja joidenkin sääntöjen asetuksia muuttunut päivitetyissä peer-riippuvuuksissa.

- Löysennetty @typescript-eslint/naming-convention-sääntöä: jos objektin kentän nimi vaatii lainausmerkit ympärilleen, sallitaan kentän nimi olevan minkälainen vain. Tämä mahdollistaa kenttille nimet, jotka vastaavat esimerkiksi HTTP-otsakkeita kuten `'Content-Type': 'application/json'`.

### Ylläpitotoimenpiteet
- Päivitetty peer-riippuvuudet. Korvattu eslint-config-standard-with-typescript eslint-config-lovella, koska ensimmäinen on deprekoitu ja jälkimmäinen on sen jatkaja. Asennettu eslint-config-love versio 47.0.0 (päivätty 2024-04-10) uusimman version sijaan, koska 47.0.0 on viimeinen versio, joka tukee ESLint 8.x -tyylistä non-flat-konfiguraatiotiedostoja. Toistaiseksi ei ole aikataulua sille, milloin siirrytään käyttämään ESLint 9.x -tyylistä flattiä konfiguraatioformaattia.

- Päivitetty kehitysriippuvuudet.

- Poistettu babel-plugin-module-resolver kehitysriippuvuuksista korvaamalla se yksinkertaisemmalla omalla toteutuksella.

- Poistettu chai ja @types/chai kehitysriippuvuuksista. Käytetään Node.js:n assert/strict-paketin toimintoja niiden sijaan.

- Korjattu haavoittuvuus https://github.com/advisories/GHSA-9c47-m6qq-7p4h (json5) päivittämällä transitiivinen json5-riippuvuus versiosta 1.0.1 versioon 1.0.2.

- Korjattu haavoittuvuus https://github.com/advisories/GHSA-c2qf-rxjj-qqgw (semver) päivittämällä transitiivinen semver-riippuvuus versiosta 5.7.1 versioon 5.7.2.

- Korvattu viittaus eslint-config-standard-with-typescriptiin viittauksella eslint-config-loveen README-tiedostoissa.

- Poistettu osio ‘Npm 6 tai vanhempi’ README-tiedostoista. Npm 6 on varsin vanha. Sitä ei tarvitse tukea enää.

## [2.0.0](https://github.com/response200/eslint-config/compare/v1.1.0...v2.0.0) (2022-12-26)

### Muutokset linttaussääntöihin
- Lisätty
  @typescript-eslint/no-duplicate-enum-values,
  @typescript-eslint/no-meaningless-void-operator,
  @typescript-eslint/no-redundant-type-constituents,
  @typescript-eslint/no-unsafe-declaration-merging ja
  @typescript-eslint/no-useless-empty-export-säännöt
  recommended-typescript-säännöstöön.

- Lisätty promise/no-multiple-resolved-sääntö recommended-säännöstöön.

- Löysennetty @typescript-eslint/consistent-type-assertions-säännön `objectLiteralTypeAssertions`-asetusta. Tyyppiväittämien tekeminen objektiliteraaleille on nyt sallittua. Sellaisten tyyppiväittämien tekemiselle on joitakin oikeita käyttötarpeita.

- Poistettu @typescript-eslint/no-implicit-any-catch-sääntö recommended-typescript-säännöstöstä. Sääntöä ei enää tarvita, koska TypeScript 4.4:stä lähtien on ollut mahdollista asettaa `useUnknownInCatchVariables`-asetus päälle tsconfig.json-tiedostossa.

- @typescript-eslint/naming-convention-sääntö on korjattu @typescript-eslint/eslint-pluginissa. Aiempi versio ei tarkistanut luokkien kenttien nimiä.

- @typescript-eslint/consistent-type-imports-sääntö tukee nyt `type`-avainsanoja import-komentojen aaltosulkujen sisällä.

- @typescript-eslint/comma-dangle-säännön `enums`, `generics` ja `tuples`-asetusten oletusarvot olivat muuttuneet asentoon `ignore`. Asetukset piti eksplisiittisesti kääntää takaisin asentoon `never`.

- Poistettu @typescript-eslint/no-unsafe-argument-sääntö recommended-typescript-säännöstöstä. Sääntöä ei tarvitse enää eksplisiittisesti kytkeä päälle, koska se on oletuksena päällä @typescript-eslint/eslint-pluginin tuoreimmissa versioissa.

### Ylläpitotoimenpiteet
- Päivitetty peer-riippuvuudet. Lopetettu kokeilu liittyen `>=`-versiorajauksiin. Käytetään jatkossa `^`-merkintää peer-riippuvuuksien versiorajauksina.

- Päivitetty kehitysriippuvuudet.

- Poistettu fs-extra kehitysriippuvuuksista. Sitä tarvittiin hakemistojen kopioimiseen rekursiivisesti. Node.js 16.7.0:sta lähtien fs.promises.cp on tukenut rekursiivista hakemistojen kopiointia.

## [1.1.0](https://github.com/response200/eslint-config/compare/v1.0.0...v1.1.0) (2021-08-08)

### Muutokset linttaussääntöihin
- Lisätty @typescript-eslint/no-unsafe-argument-sääntö recommended-typescript-säännöstöön. Nyt kaikki @typescript-eslint/no-unsafe-*- säännöt ovat päällä.

- Enumien avainten kirjoitusasu pakotetaan nyt StrictPascalCase-muotoon. Aiemmin myös strictCamelCase sallittiin.

- Kytketty @typescript-eslint/comma-dangle-sääntö päälle ja comma-dangle-sääntö pois päältä recommended-typescript-säännöstössä. Nyt enumin viimeisen kentän perässä ei enää saa olla pilkkua.

- Poistettu @typescript-eslint/member-ordering-sääntö recommended-typescript-säännöstöstä. Sääntö oli liian kireä ja sen hyöty oli kyseenalainen erityisesti, kun ottaa huomioon, ettei sääntörikkomuksia voinut korjata automaattisesti `--fix`-vivulla.

- Operator-linebreak-sääntö ei toiminut oikein .ts- ja .tsx-tiedostoissa. Nyt sääntö toimii oikein.

### Ylläpitotoimenpiteet
- Päivitetty kehitysriippuvuudet.

- Korjattu vain kehitysriippuvuuksia koskettanut haavoittuvuus: https://npmjs.com/advisories/1747 (browserslist).

## [1.0.0](https://github.com/response200/eslint-config/compare/v0.0.0...v1.0.0) (2021-05-19)

Ensimmäinen julkaisu.

</div>
