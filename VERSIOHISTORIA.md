<div lang="fi-FI">

# Versiohistoria

<!-- New entries inserted automatically after this line -->

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
