# Landing page explorations

These static previews live on the `design/landing-options` branch. Open `/designs/` to compare all three; each option has independent HTML and CSS. Shared imagery, accessibility styles, and the optional region selector are in `shared/`.

- `/designs/option-1/`: Into the Jungle
- `/designs/option-2/`: The Travel Journal
- `/designs/option-3/`: Maya, Today

Run `python3 -m http.server 8768` from the repository root, then open `http://localhost:8768/designs/`.

GitHub Actions deploys pushes to this branch as Cloudflare Pages previews using the actual Git branch name. Pushes to `main` remain production deployments. Do not merge the design branch until a design has been selected and prepared for production.

The region selector progressively enhances five readable articles into button-controlled panels; it requires no backend. There are no booking or signup submissions. Text about future journeys is intentionally undated.

Imagery is derived from the repository's existing Calakmul photograph, with existing SomosMaya brand assets reused directly. Regional artwork in option 3 is abstract decoration, not a geographic map or historical symbol.

## Round two — variations on The Travel Journal

Compare at `/designs/journal/`. The original No. 2 remains available unchanged.

- `/designs/journal-1/`: Letters from Mexico — postcard and letter composition. The postcard toggle progressively enhances two readable sides.
- `/designs/journal-2/`: The Slow Atlas — magazine composition with a landscape photograph and a restrained green palette.
- `/designs/journal-3/`: Field Notes — notebook composition, native expandable destination notes, and a local-only packing checklist.

Each variation owns its HTML and CSS; shared image and base accessibility styles remain in `shared/`. All are preview deployments on the existing design branch.
