# Come contribuire

## Preparazione

    nvm use [solo su Linux]
    npm install   # installa anche gli hook di Git

## Flusso di lavoro

1. Ogni modifica parte da una issue.
2. Crea un branch breve da `main`: `feat/descrizione` o `fix/descrizione`.
3. Apri una pull request verso `main` e chiedi una review.
4. Il merge avviene solo con CI verde e almeno un'approvazione (squash merge).

## Messaggi di commit e titoli delle PR

Seguiamo [Conventional Commits](https://www.conventionalcommits.org/it/).
Con lo squash merge, il titolo della PR diventa il commit su `main` e decide la versione:

| Tipo                              | Esempio                             | Effetto sulla versione |
| --------------------------------- | ----------------------------------- | ---------------------- |
| `fix:`                            | `fix: corregge l'arrotondamento`    | patch (1.0.0 → 1.0.1)  |
| `feat:`                           | `feat: aggiunge le unità di coppia` | minor (1.0.0 → 1.1.0)  |
| `feat!:` o `BREAKING CHANGE:`     | `feat!: nuovo formato di risposta`  | major (1.0.0 → 2.0.0)  |
| `docs:`, `chore:`, `ci:`, `test:` | `docs: aggiorna il README`          | nessuna release        |

## Prima di aprire una PR

    npm run lint
    npm test
