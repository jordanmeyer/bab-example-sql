# Deployment handoff

Configured repository: `bab-example-sql`. Public source link: `https://github.com/jordanmeyer/bab-example-sql`. Vite base: `/bab-example-sql/`.

The managed GitHub Actions workflow builds on main with the pinned Node version and publishes only `dist/`. The local source repository excludes `node_modules/` and `dist/`; no credentials or private data are included. Runtime worker and WASM assets are in the output under the same prefix. Source and notices links were inspected in production.

The developer does not create, push or publish the repository. The coordinator must receive an independent reviewer PASS for the actual executable checkpoint, reconcile the candidate dependency gate, confirm source/PLAN freshness and then create/push/publish. A successful local build is not a live-site claim. Record live checks separately after deployment.
