<div lang="fi-FI">

# response200/eslint-config

Kireät ESLint-säännöt JavaScript/TypeScript/JSX-projekteihin yhdessä kätevässä paketissa. Linttaus pitää koodisi siistinä ja yhtenäisenä sekä auttaa välttämään sudenkuoppia ja suoranaisia virheitä.

<a href="README-en.md" hreflang="en-GB" rel="alternate" lang="en-GB">English documentation in README-en.md</a>

JS-, TS- ja JSX-säännöt voi jokaisen erikseen kytkeä tai jättää kytkemättä päälle. `response200/eslint-config` käyttää pohjana seuraavia säännöstöjä, joiden lisäksi paketti sisältää lisäsääntöjä ja joidenkin sääntöjen kiristyksiä.

* [eslint/recommended](https://eslint.org/docs/latest/rules)
* [neostandard](https://github.com/neostandard/neostandard)
* [eslint-plugin-import-x](https://github.com/un-ts/eslint-plugin-import-x)
* [eslint-plugin-promise](https://github.com/eslint-community/eslint-plugin-promise)
* [@stylistic/eslint-plugin](https://eslint.style/rules)
* [@typescript-eslint/eslint-plugin](https://typescript-eslint.io/rules)
* [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react)
* [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)

Paketin mukana tulee `lint.sh`-työkalu, jonka avulla on kätevä lintata erilaisia tiedostovalikoimia. Lisää siitä alempana kohdassa [lint.sh](#lintsh).

## Asennus

Asentaaksesi aja seuraava komento:

```sh
npm install --save-dev @response200/eslint-config
```

## Konfigurointi

Lisää `eslint.config.js`-tiedostoon seuraavat konfiguraatiot:

```js
import { configs } from '@response200/eslint-config'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  {
    extends: [
      configs.recommended,
      configs.recommendedJsx
    ]
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    extends: [
      configs.recommendedTypeScript
    ],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname
      }
    }
  }
])
```

Jos et käytä TypeScriptiä tai halua käyttää siihen liittyviä sääntöjä, voit jättää pois seuraavat rivit.

```js
  {
    files: ['**/*.ts', '**/*.tsx'],
    extends: [
      configs.recommendedTypeScript
    ],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname
      }
    }
  }
```

Jos et käytä JSX:ää tai halua käyttää siihen liittyviä sääntöjä, voit jättää pois seuraavan rivin.

```js
      configs.recommendedJsx
```

## Mainittavaa JSX-säännöistä ja Reactista

`response200/eslint-config` sisältää JSX-sääntöjä ja `eslint-plugin-react`-moduuli asennetaan automaattisesti sen mukana. JSX-sääntöjen joukossa on React-spesifejä sääntöjä. Vaikka `response200/eslint-config` pyrkii olemaan geneerinen lint-säännöstö, voi jotain muuta JSX-kirjastoa kuin Reactia käyttävissä projekteissa joutua kytkemään React-spesifit säännöt pois päältä manuaalisesti.

## lint.sh

`response200/eslint-config`-paketissa tulee mukana `lint.sh`. Se on kätevä komentorivityökalu, jonka avulla erilaisten tiedostovalikoimien linttaaminen git-versiohallinnoidussa projektissa onnistuu nopeasti ja helposti. Työkalu on apuväline eslintin ajamiseen.

Työkalulla on neljä toimintamoodia:

* paths (linttaa määrätyt tiedostot ja hakemistot)
* changed (linttaa committaamattomat muutetut tiedostot ml. staged-tilassa olevat)
* staged (linttaa staged-tilassa olevat committaamattomat muutetut tiedostot)
* rev (linttaa tiedostot, joita on muutettu määrätyn commitin jälkeen)

Lint.sh kokoaa listan muutetuista .js, .jsx, .ts ja .tsx-tiedostoista `git diffin` avulla. `paths`-moodissa lista muodostuu käyttäjän määräämän mukaisesti. Lista ja muut lint.sh:lle mahdollisesti annetut komentoriviargumentit passataan eslintille.

Esimerkki 1: linttaa määrätyt tiedostot ja hakemistot
```sh
npx lint.sh paths foo.js bar.tsx directory/subdirectory
```


Esimerkki 2: linttaa määrätyt tiedostot ja ohjeista eslint tekemään automaattiset korjaukset
```sh
npx lint.sh paths foo.js bar.tsx --fix
```


Esimerkki 3: linttaa committaamattomat muutetut tiedostot
```sh
npx lint.sh changed
```


Esimerkki 4: linttaa staged-tilassa olevat committaamattomat muutetut tiedostot
```sh
npx lint.sh staged
```

**Vinkki:** skriptaa gitin pre-commit-koukku ajamaan `node_modules/.bin/lint.sh staged --fix`. Automatisoitu linttaus ja automaattinen virheiden korjaus commitin yhteydessä!


Esimerkki 5: linttaa viimeisimmässä commitissa muutetut tiedostot
```sh
npx lint.sh rev HEAD~1..HEAD
```

**Vinkki:** `rev`-moodi hyväksyy minkä tahansa git-revision argumentikseen. Katso `man 7 gitrevisions`, mihin kaikkeen git-revisioita voikaan käyttää.


Esimerkki 6: linttaa tiedostot, jotka ovat muuttuneet suhteessa päähaaraan
```sh
npx lint.sh rev main..HEAD
```

**Vinkki:** laita CI-ympäristösi suorittamaan `node_modules/.bin/lint.sh rev main..HEAD` pull requestin yhteydessä ja estä haaran/pull requestin liittäminen päähaaraan, jos lint.sh palauttaa linttausvirheitä (paluukoodi muu kuin 0). Automatisoitu koodin laadun- ja koodauskäytäntöjen valvonta.

**Lisävinkki:** moodeista voi käyttää myös lyhenteitä p, c, s ja r.

## Yleisiä ongelmia

### Pisteellä alkavien tiedostojen linttaaminen epäonnistuu TypeScript-projektissa

Kun TypeScript-projektissa yrittää lintata pisteellä alkavaa tiedostoa, saattaa linttaus epäonnistua ja seuraava virhe tulee tulostetuksi:

```
/path/to/.file.js
  0:0  error  Parsing error: "parserOptions.project" has been set for @typescript-eslint/parser.
The file does not match your project config: .file.js.
The file must be included in at least one of the projects provided
```

Ongelma johtuu siitä, ettei `tsc` oletuksena käsittele pisteellä alkavia tiedostoja. Ongelman voi korjata lisäämällä `tsconfig.json`-tiedostoon seuraavat rivit:

```json5
{
  // This include array enables linting of dotfiles.
  "include": ["**/*", "**/.*"]
}
```

## Lisenssi

[BSD 3-Clause](LICENCE.md). Toteuttanut Joel Posti.

## Tue response200/eslint-configin kehitystä

`response200/eslint-config` on ilmainen avoimen lähdekoodin projekti. Toivon, että se olisi hyödyksi. Jos haluat tukea sen kehitystä tai olet muuten vain avokätisellä tuulella, voit lahjoittaa sopivaksi katsomasi summan [PayPalilla](https://paypal.me/joelposti).
</div>
