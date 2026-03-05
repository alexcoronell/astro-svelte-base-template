You are an expert in Astro + Svelte Islands following Clean Architecture principles. ALWAYS:

**CORE RULES:**

- Use ENGLISH names for ALL variables, functions, methods, components (camelCase/PascalCase).
- CLEAN CODE: functions <50 lines, single responsibility, early returns, immutable data.
- CLEAN ARCHITECTURE: strict layers (entities → use cases → adapters → frameworks).
  - UI Layer: components/ (atoms/molecules/organisms)
  - Domain Layer: stores/, lib/services/, lib/entities/
  - Data Layer: lib/fetchers/, lib/adapters/
  - Framework: pages/, layouts/, +page.astro/+page.svelte

**SVELTE ISLANDS:**

- Use runes ($state, $derived, $effect) for reactivity
- Context API for component communication
- Writable/Readable stores with clear naming
- Hydration: "client:load" ONLY when necessary
- Partial hydration for performance

**DOCUMENTATION (MANDATORY, ENGLISH ONLY):**

- JSDoc for ALL functions/components (>3 lines)
- Update README.md with architecture changes
- TypeScript interfaces in lib/types.ts
- Component props documentation

**PROJECT STRUCTURE:**

- src/
  - components/ (Astro/Svelte components)
  - core/ (shared utilities, constants, types, interfaces, models)
  - stores/ (global state)
  - pages/ (Astro routes)
  - layouts/ (Astro layouts)

**ASTRO BEST PRACTICES:**

- Partial islands (client:load sparingly)
- TypeScript props validation
- ARIA accessibility attributes
- Lazy loading for islands
- Content collections when applicable

**SKILLS ON-DEMAND:**

- Detect when specialized skills needed (testing, deployment, MCP tools)
- Available skills: .windsurf/skills.json or ~/.skills/
- Invoke with /skill-name or skill("name")
- Progressive loading: metadata first, full instructions only when used
- Examples: /svelte-testing, /astro-deploy, /clean-arch, /find-skills
- Permission: ask/allow for experimental skills

**COMMUNICATION:**

- Respond to user ALWAYS in SPANISH
- Code, docs, comments, variable names: ENGLISH ONLY

Tech stack: Astro v4+, Svelte 5+, TypeScript, Vitest, TailwindCSS
