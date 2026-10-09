# Evaluation — Fulfillment Lab

Current status: developer implementation and actual **36/36 browser integration checks passed**. Independent review is in progress in reviewer-owned REVIEW.md. The coordinator subsequently reported the real deadline and download checks passing; its detailed witness is recorded separately. Do not interpret earlier failed approaches as current success.

## Preserved failed approaches

1. File-backed READ_ONLY setup was attempted in the actual EH browser engine. Opening a missing file in AUTO/READ_ONLY failed; READ_WRITE creation/checkpoint also failed in this setup. It was abandoned. `tests/history/readonly-file-attempt.js.txt` preserves the original probe.
2. Native JSON serialization appeared to parse SELECT/CTE queries and preserve exact literals. It only worked before locking extension access. Integrated setup then failed **0/1**: JSON functions were unavailable after autoload was disabled. An explicit built-in check also failed **0/1**. The observed metadata changed from JSON installed=false/loaded=false to installed=false/loaded=true when the early parser was prepared. Official [DuckDB-Wasm extension documentation](https://www.duckdb.org/docs/current/clients/wasm/extensions) explains that WASM extensions load from the repository at runtime. This establishes the autoload mistake; the exact remote request URL was not captured and is not invented here. The non-executing original probe is retained under `tests/history/json-parser-probe.js.txt`. No application PASS was issued for this approach.
3. One download event wait stalled until the coordinator interrupted the turn. No result file was found from that attempt. This was not counted as successful export evidence. After interruption the developer CUA inventory had no browsers; remaining browser observations were delegated to the coordinator's independent active tab.

## Current engine evidence

The current engine removes the JSON extension completely. Actual integration run first passed 31/31, then passed **36/36** after adding wrapper escapes, UTF-8/trailing comments, preserved orders and explicit JSON loaded=false. Tests import the actual engine, raw data generator and authored queries. They execute the bundled EH worker; no mocked SQL engine or expected-result substitution is used.

Observed cases include tiny counts 3 orders/2 products/4 lines/4 events; 21 ordered and 11 shipped units; gross55,000/shipped27,500/outstanding27,500 cents; West17,500/East10,000 outstanding; Notebook17,500/Lamp10,000; mistaken75,000 versus corrected55,000; O3 no-shipment preservation; A's two events aggregated to five units. Native prepare rejects writes, EXPLAIN, multiple statements and wrapper escapes including `SELECT 1) AS escaped; COMMIT; DELETE FROM orders; --`. Orders remain intact afterward.

Independent raw READ ONLY transaction rejects DELETE even without the editor wrapper. Raw extension loading and configuration re-enabling fail; remote CSV and nested mutation attempts fail. Quoted semicolons and trailing comments, including café/emoji UTF-8 offsets, work. JSON loaded=false after successful queries. Exact values9007199254740993 and12345678901234567890.12 survive worker→Arrow→display strings; negative−0.01 and zero0.00 scale correctly. NULL, empty results, literal HTML text and500-row cap are distinct. A syntax error followed by SELECT42 recovers. Cancelling an actual trillion-pair trigonometric aggregation stops the worker; a fresh large database then answers correctly.

Large SQL agrees with independent integer row arithmetic. The reviewer separately recomputed the raw data with Python and obtained 2,400 orders,12 products,7,200 lines,9,900 events;158,399 ordered/106,704 shipped units;611,718,275 gross/409,332,550 shipped/202,385,725 outstanding cents. The production coordinator observed matching regional totals.

## Production UI observations

Developer production observations at `/bab-example-sql/`: default West17,500/East10,000 cents, $750/$550 comparison, exact BIGINT/22-digit DECIMAL table, literal `<b>safe</b>`,−0.01 and result/editor attribution. Normal console had no warnings/errors. Source/notices links use the intended repository/base.

The coordinator independently exercised actual keyboard execution, exact large numbers, expensive-query Cancel→Reset→SELECT42, large regional totals and history navigation before interaction. Nondefault large/products/custom SQL returned consistently to tiny/regions/default SQL with West17,500/East10,000 and one canvas. Persisted bfcache was not proven. Narrow320 frame measured319px content width without page overflow; the result table had238px local viewport/290px scroll width. Actual native keyboard submission rendered a long-category query and large cents values, and keyboard horizontal scrolling moved51.5px. Its screenshot shows truncated chart labels with complete table alternatives, USD chart units and visible focus. These are coordinator observations, not developer screenshots. Campaign records are `sql/UI-WITNESS.md`, `root-narrow-hero.png` and `root-narrow-results.png` in the course evidence directory.

## Build and observation limits

Clean npm ci completed with zero audit findings at this time. Production build passed with32 package notices and a disclosed bundle-size warning. The canonical dependency checker rejected the still-candidate DuckDB package as expected under the coordinator's trial authorization; promotion is a separate coordinator gate.

Production pageAssets inventory listed only local app JS/CSS/EH worker and favicon. It does not expose worker-internal WASM requests and is not a complete network trace. Local asset imports/build output, blocked external attempts and JSON loaded=false jointly support the local-only configuration. Browser coverage is this host's in-app Chromium surface, not a cross-browser compatibility claim. Fixed-width frames exercise actual production CSS but do not emulate every mobile input/device characteristic.

## Final coordinator follow-up

After recovering from another browser download-event hang, the coordinator reported actual deadline and download PASS. This closes the two previously pending observations; the earlier stalled event wait remains a tool failure and is not counted as a successful export. No source or PLAN changed. Detailed coordinator observations and the independent reviewer verdict remain authoritative; this report does not independently claim a new browser run. Future checks use the actual download button followed by inspection of the known synthetic file, never another waitForEvent download call.

Coordinator promotion gate: reviewed source7a957523d776471eec7283311a562a9793d7f729 received independent APPLICATION PASS. The exact EH local-worker configuration is now approved and the normal canonical dependency checker passed. Relevant source, PLAN, tests, dependencies, configuration and workflow remain identical to the checkpoint. Actual CSV parsing independently confirmed the exact values and escaped formula text; raw CSV precision does not promise a spreadsheet's automatic import behavior.


## Live revision exploratory build failure — 2026-10-09

The first revision build failed because a broad edit placed an await inside the nonasync join-lesson click handler. No tested checkpoint or deployment used that source. Restored the handler's existing reset call; font loading is confined to module startup. This failed build is retained and requires a fresh successful build and browser checks.


## Live revision exploratory browser round — source 8a790a9

Actual browser suite passed 41/41. Large first load showed 2,400 orders / 7,200 lines / 9,900 events and 12 alphabetized products. Tiny join lesson rendered $750 versus $550. All three local fonts loaded; 1440 and 320 frames showed no page overflow, initial external resources or undersized targets. Narrow page height was still 3,587 px and the editor appeared too far down after the optional hand-check and schema. Compacted these secondary references into disclosures; affected layout/keyboard checks require a fresh source checkpoint. This exploratory result does not claim final layout approval.


The introductory result exposed implausible historical cyclic categories such as Book stand / Lighting. Replaced descriptive categories with an explicit plausible catalog while retaining all product IDs, prices and fulfillment data. The next checkpoint reruns the real-engine suite; all earlier monetary expectations remain unchanged. During actual Back/cancel checks the browser captured one unscoped MutationObserver.observe error without an app URL/stack. The app resumed with consistent large/default controls and results; cancellation/reset then SELECT 42 succeeded. The diagnostic is retained and a clean-load log comparison will follow.


At b331239 the final 320 px region chart was readable, but inherited 145 px table column minima pushed even the two-column dollar result offscreen inside the local scroll region. Reduced the minimum to 110 px and allowed numeric headings to wrap while preserving unbroken numeric values. Wider queries and very large values still scroll locally. This is an affected-layout correction; model tests at b331239 remain 41/41 and the engine is unchanged.

## Authorized live revision — final developer round, 2026-10-09

Final source checkpoint 7e2cfd8c7588520a13568c04ed76d16ba7bf695a includes PLAN, app, tests, config/tooling and licenses. Clean npm ci completed with zero audit vulnerabilities; current dependency checker approves the unchanged DuckDB-Wasm 1.32.0 / ECharts 6.1.0 recipe. Production build retains 34 font/package notice sections. The unchanged engine is a substantial payload: 34.24 MB Wasm (7.78 MB gzip), 772.75 kB worker and a 1,331.62 kB main JS bundle (423.07 kB gzip); the Vite chunk advisory is disclosed. Everything loads from the repository prefix and same origin.

Actual real-engine browser suite at b331239286fcda977b23bf5029b42ff9da65fc0e passed 41/41, zero failures. The final checkpoint changes only CSS and this report; engine, model, tests and PLAN match that passing round. Added checks cover three introductory queries, exact huge/sign/zero monetary values, and unknown-alias/noninteger nonconversion; the original 36 parser, read-only, external-access, precision, cap, cancellation and arithmetic checks remain intact. No trivial UI-mirroring tests were added.

The production default uses 2,400 orders / 7,200 lines / 9,900 shipment events. Its short first SELECT yields 12 alphabetized product rows, Book stand / Organization first and Task timer / Accessories last. Explicit catalog labels correct the earlier implausible cyclic categories without altering IDs or any amounts. The aggregation starter rendered 600 orders each for Central, East, South and West. Independent Python enumeration before the browser specified the filtered starter's first row as L1010 / 40 / 2650 cents; the actual-engine test confirmed it.

Keyboard Enter activated the tiny join lesson: $750 mistaken gross versus $550 correct. The region query displayed West $175 and East $100, with an explicit outstanding (USD) table heading and matching USD chart/caption. Numeric cells align right. Storage types are behind a disclosure. Known integer fields preserve exact dollars without Number conversion: a custom query displayed $9,007,199,254,740,993.01, unknown invented_cents stayed raw 17500, and negative one-cent shipped value displayed -$0.01. CSV code still serializes original raw values and names; this revision did not alter the already verified export path or claim a new downloaded-file witness.

Actual editor/schema checks: opening products and activating Insert product from products with Enter at the cursor produced SELECT "product" FROM products;, returned focus to the editor, selected Custom query and showed the older-result warning. Ctrl/Command+Enter ran successfully and produced Notebook/Lamp. Selecting the entire editor and clicking Insert products replaced precisely that selection with "products" and restored focus. A syntax/missing-table query preserved its text and prior huge-money result with a clear failure message. A genuinely expensive query was cancelled by the UI; the worker stopped, Reset rebuilt it and SELECT 42 returned 42.

After selecting the tiny case and editing SQL, navigating to the local review page and Back restored large dataset, first starter SQL, 12 matching rows and consistent counts before interaction. One unscoped MutationObserver.observe error appeared during that navigation sequence without a URL/stack; it is retained as an unattributed diagnostic. A new production tab loaded the final logic and the error/warning query returned []. This observation does not claim exhaustive browser/network certification.

Final same-origin production frames measured client/scroll widths 1439/1439, 389/389 and 319/319. All three local font faces loaded, no initial external-resource entries appeared, and no observed controls were below 24 px. Final page heights and exact metric output are preserved in the course evidence. The 320 px region chart is readable; its two-column table measures 238/238 client/scroll width, with both $175/$100 visible and an explicitly wrapping USD header. Wider SQL results still scroll locally. Desktop, first-load narrow and narrow chart/table screenshots were visually inspected. The shared browser's screenshot clip coordinates scale unusually, so captures were adjusted using the documented screenshot API; frames are measured CSS layouts, not device emulation or a full screen-reader audit.

A separate simplification pass kept one canonical currency policy shared by table/chart, retained the native editor/engine and exact CSV path, used controlled names for schema insertion, and let query text determine starter/provenance state instead of maintaining a second state copy. No framework, dependency upgrade, persistence or runtime service was introduced. Source/PLAN freshness comparison against 7e2cfd8 is clean before this report; subsequent edits are reports/ExecPlan only. Independent review and live deployment remain distinct steps.

Independent coordinator PASS received for final source 7e2cfd8. Reviewer confirmed 41/41 tests, actual default/aggregate/tiny answers, narrow fonts/resources/targets/layout and keyboard USD table fit, and reviewed the whole engine boundary plus changed source. Full attributed verdict is in REVIEW.md. Source/PLAN comparison remains clean; publication is authorized, with live verification pending.

## Remaining-checklist corrections — source b31605ff11c8882e40b7b564a651a2514427790c — browser review pending

Clean install, approved-dependency check and production build passed. This checkpoint addresses the revised126-item checklist rather than the previous live-revision review. BUILD-STORY contains a bounded authored student task and exact answers; it is not an actual novice observation. The suite contains47 cases, with current browser execution pending. CUA returned no available browsers in the implementation agent; parent review has the actual test/production URLs on9715/9716. The authored320/200%text harness is available at the production/review.html; font enlargement is not native browser zoom. Actual screen-reader and novice walkthroughs remain open, and no readiness claim is made. Source/PLAN paths are committed; generated dist/node_modules stay ignored. No publication has occurred for this correction round.

## Independent source/model review — PASS at b31605ff11c8882e40b7b564a651a2514427790c

Reviewer: collaborating agent `/root/live_revision_operations`, October 9, 2026. The independent agent read full app/model/query/engine/presentation/data/index/BUILD-STORY and relevant CSS/tests. A plain BigInt reduction independently confirmed gross 611,718,275 cents, shipped 409,332,550 cents, outstanding 202,385,725 cents, 158,399 ordered / 106,704 shipped units; regional outstanding West 83,151,325 cents, Central 49,160,225 cents, East 39,928,875 cents and South 30,145,300 cents. Query restore, chart reasons, executed-result note, cap/page labels and error guidance aligned. No actionable source blocker was found.

This is source/model approval only. Actual production interaction, keyboard, imports/downloads, 320px and 200% text checks remain separate root-owned observations. Actual screen-reader and novice sessions remain open; none is inferred from this review.


## SQL-11 production review — retained failure and focused repair

The coordinator's actual narrow production check at sourceb31605ff11c8882e40b7b564a651a2514427790c found that explicit Skip to SQL editor could arrive with the advanced query caret at557 and horizontal scrollLeft177 in the319px frame. The query beginning was not visible on arrival. This is a real editor-navigation failure; a correct query result or DOM label did not establish the usable arrival path.

Collaborating developer `/root/live_revision_models` repaired only the explicit skip action at `5c1caf4a6e3ac9251fa97012c2ab8a58fb673b7a`: prevent default anchor navigation, focus without scrolling, set the selection to0/0, reset horizontal/vertical editor scroll and bring the visible SQL query label into view with16px scroll margin. Ordinary editing does not reset the caret. The developer built production and restored the ignored local review harness. The source/engine/model is otherwise unchanged. Actual319px follow-up is pending the coordinator's observation; no pass is inferred from this source repair.


## Targeted SQL-11 production follow-up — PASS at 5c1caf4a6e3ac9251fa97012c2ab8a58fb673b7a

The coordinator selected the advanced fourth starter in an actual319 CSS-pixel production frame and activated Skip to SQL editor with Enter. Observed: editor focused, selection start0, scrollLeft0, scrollTop0, editor width277px with565px internally scrollable SQL text. The query label and beginning were visibly present; screenshot is retained in course evidence as sql/narrow-query-start.png. This repairs the prior caret557/scrollLeft177 arrival failure without changing ordinary editing behavior.

A separate1439 CSS-pixel production frame with200% computed font sizes had1439px page width and no horizontal page overflow. The editor beginning and Run/Cancel/Save/Restore controls were reachable and the screenshot was viewed. SQL's internal horizontal text scrolling remains intentional. This is authored font enlargement, not a native browser-zoom or screen-reader claim. The coordinator also confirmed exact restoration of the earlier query ending DESC;, actionable unknown-column guidance with prior-result provenance, and the tiny join-trap output $750 versus $550. These are actual browser observations reported by root, not this agent's DOM/source inference.


## Final bounded correction review — source 5c1caf4a6e3ac9251fa97012c2ab8a58fb673b7a

The coordinator confirmed47/47 actual browser cases at b31605ff11c8882e40b7b564a651a2514427790c. The subsequent5c1caf4 correction changes only the explicit editor skip action, its visible label and scroll margin; engine/model/query/presentation/tests are unchanged. The prior47-case model result remains applicable to those unchanged paths; no new47-case run is invented. The narrow skip failure and successful5c1caf4 production follow-up are preserved above.

At b31605f, actual production confirmed restoration of the exact query ending DESC;, unknown-column recovery guidance with visibly attributed old results, and the tiny raw-join trap $750 versus$550. At5c1caf4, the319px advanced-starter skip path and separate1439px/200% computed-font editor/control path passed the scoped checks above. SQL-01/04/07/08/09/10/12 are implemented; SQL-11 has the targeted real browser repair evidence. Native paired CSV/result-note export remains unverified this round. Malformed SQL, timeout and cancellation have model/engine test coverage, but their complete current production recovery interactions were not newly witnessed; keep that distinction explicit.

ALL-02/05/07/14 paths are implemented; ALL-08 is not applicable. ALL-12 has the scoped narrow/editor/enlarged-text evidence described above, not a universal accessibility certification. ALL-11 remains open for an actual screen-reader task and ALL-16 for an actual novice. The prepared12-app walkthrough packet supplies tasks and facilitator reference only.

Before this report, committed/staged/working source, tests, PLAN, workflow, packages, scripts and licenses match5c1caf4; only EVALUATION.md differs. No push or corrected live deployment is claimed. Production9716/test9715 remain available for coordinator gates.


## Actual generated-export and error-recovery workflow — PASS at test checkpoint 5e815286c49b0ed7f75b68401de391fd5b7a802b

Application source remains 5c1caf4a6e3ac9251fa97012c2ab8a58fb673b7a. The later 5e81528 checkpoint adds only tests/export-workflow.html. Root ran its production copy through CUA with the real app forms and bundled worker: 5/5 primary checks passed, followed by the separate unaccelerated eight-second timeout and recovery PASS. Exact observations are in course sql/browser-export-recovery.json. The earlier 47/47 engine/model suite at b31605f remains applicable to those unchanged model/test paths; this new result is a separate UI workflow run.

The uncapped tiny export contained all four independently specified raw line rows; its note retained the executed SQL, tiny dataset, source counts, integer-cent units and four-row uncapped status after the editor was changed to an unexecuted draft. A generated 501-row query retained/exported exactly 500 rows while the visible page showed 50; every CSV row matched sequence × 101 cents, ending at 499 / 50399. The paired note identified the cap and completed SQL, not the later draft. Both notes contained valid completion timestamps and matching CSV filenames.

Actual unknown-column and malformed-SQL failures preserved editor text, executed-query attribution, visible row count and sampled prior cells; corrected queries recovered. Cancel was activated on the real heavy query at 253.3 ms and produced stopped-worker/reset guidance. The actual timeout occurred after 8002.4 ms without changing the application's eight-second limit. After both events, Reset preserved SQL and a fresh worker returned 42. This closes the previously unwitnessed authored UI recovery paths for SQL-12; it is not a timing benchmark.

SQL-09/10 and ALL-14 now have actual generated CSV/note evidence, and SQL-12 has all four real error/recovery paths. Capturing the app's Blob handoff does not establish native save-dialog behavior. First-two-row snapshots do not claim exhaustive retained table-cell equality; exported CSV comparisons cover every exported row. Actual keyboard/narrow work remains under its earlier separate record. ALL-11 and ALL-16 remain open for actual screen-reader and novice sessions. No application copy change, new dependency, model-test change or push was made for this report.
