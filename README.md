# AGID Country Index

Global public index for AGID country, territory, autonomous-region, disputed-region, and ocean repositories.

This repo is the source of truth for staged repository creation. It is intentionally created before mass country repos so the project can track split strategy, postal status, source policy, repo creation status, and quality gates without producing hundreds of empty repositories.

## First-wave repositories

- Core: `agid-country-index`, `agid-country-template`, `agid-postal-country-pack-template`, `agid-repository-governance`
- Representative country packs: `agid-country-jp`, `agid-country-us`, `agid-country-ca`, `agid-country-hk`, `agid-country-ae`, `agid-country-ke`
- Marine geography: `agid-ocean`

## Non-goals

This repository does not store personal addresses, recipients, precise private coordinates, proof witnesses, private keys, or third-party raw extracts.

## Registry files

- `registry/agid-repository-placement.json`: world-scale repository placement table.
- `registry/agid-ocean-repository-placement.json`: ocean and sea repository placement table.
- `registry/agid-americas-repository-creation-plan.json`: Americas staged creation plan.
- `registry/agid-ca-repository-creation-plan.json`: Canada full setup plan.
- `registry/rollout-status.json`: creation status for this first wave.
