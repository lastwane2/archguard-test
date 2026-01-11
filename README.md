# archguard-test

Test repository for ArchGuard PR checks.

## Architecture (FSD)

```
src/
  app/        → pages, widgets, features, shared
  pages/      → widgets, features, shared
  widgets/    → features, shared
  features/   → entities, shared
  entities/   → shared
  shared/     → (nothing - leaf layer)
```

Each layer can only import from layers below it.
