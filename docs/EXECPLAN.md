# Build a local SQL fulfillment lab

This livingExecPlan follows~/.codex/PLANS.md. Maintainprogress, discoveries, decisionsandoutcomes.

## Purpose / Big Picture

Students can inspect orders/shipment joins and identifyunshippedorder value byregion/product. Tinyknowncase showsmistaken$750grossjoin versuscorrect$550,$275shipped,$275outstanding. Switch to2,400syntheticorders/7,200lines and editrealSQL locally.

## Progress

- [x] (2026-10-09) Actualsimulatedplanningandtinycaseconfirmed.
- [x] (2026-10-09) Newisolatedroot withmanagedstarter/theming prepared.
- [ ] VerifyEHworker, exacttypesandactualreadonlyenforcement beforeclaimingit.
- [ ] Implementdataset/model/queries, localenginecancellation and originalUI.
- [ ] Testactualbrowserknownanswers/errors/cancel/import-freeworkflow/precision/layout.
- [ ] Independentreview/fixloop and freshness; rootpublication.

## Surprises & Discoveries

Pendingreadonlyproof. PriorisolatedEHprobe supports localworker/WASM, permissionrejectionofremote/extension/config anderrorrecovery. ItdoesnotproveimmutableSQLexploration.

## Decision Log

Onlybundledgenerateddata, noarbitraryimports (studentconfirmed). Fourtables orders,lineitems,products,shipmentlines. Currencyintegercents, exactaggregates. EChartsforboundedtwo-columncategoricalnumericresults, exacttablecanonical. UsecandidateDuckDBEHonlyundercoordinatortrialauthorization; retainexpectedcheckerrejection.2026-10-09.

## Outcomes & Retrospective

Planningcomplete; technicalproof/implementationpending. Donotclaimreadonlybeforeactualevidence.

## Context and Orientation

Root/private/tmp/bab-recipe-examples-2026-10-09/sql. app/data.js owns deterministicrowsand handcase; app/queries.js authorsexampleSQL; app/engine.js owns localEHworker/database/settings/cancel/reset/resultserialization; app/app.js ownsDOMandcharts; testsimportsactualmodulesandqueries. ReviewerownsREVIEW.md. Nootherapp/coursefilesedited.

## Plan of Work

Installpinned@duckdb/duckdb-wasm1.32.0 andecharts6.1.0. Inspectinstalleddeclarations/source forfileaccess/read-only/parser APIs; writebrowserproof intests withvisiblepass/fail. Obtainstudentdecisionifreadonlyisnotpractical. Implementlargeandtinydata; meaningfulSQLaggregations and explicitduplicateinflationexample. UIretainsSQL onfailures, boundsresultsandquerytime, cancelterminatesworkerandresetfreshusableengine. Showsettings/firstloadandlocal-onlylimits honestly. Useexactintegerstrings forlargevaluesanddocumentchartcoercionbound.

## Concrete Steps

Fromthisroot:npm install --save-exact @duckdb/duckdb-wasm@1.32.0 echarts@6.1.0 --cache /private/tmp/bab-npm-cache. Then npmci withsamecache; npmrunbuild; dependencycheckerexpectedcandidaterejectionrecorded. Run npm run test:browser -- --port 9513 and npm run preview -- --port 9514. Testhttp://127.0.0.1:9513/tests/ andproductionhttp://127.0.0.1:9514/bab-example-sql/. BrowseronlyCUA,noalternateautomation. Keepownserversforreviewer.

## Validation and Acceptance

Tinyfourlinesgross55000cents,ship27500,out27500. Naive75000demonstratesduplicatedA. East10000out,West17500out; Notebook17500,Lamp10000. Threeorders,fourlineitems,twoproducts,fourshipmentevents. Testsindependentarithmetic,notduplicatingSQLalgorithm. TestremoteCSV/LOAD/INSTALL/re-enableaccess plusmutableDDL/DML andmulti-statementrequests withactualenginebehavior. ErrorsretainSQL. Aheavyquerymustreallycancel, thenSELECT42work. Displaycapdoesnotpretendtolimitcomputation. ExactBigInt/DECIMALdisplay andempty/textsafevalues. Narrow320/390/desktop1440; keyboardactions andsource/notices/prefix. Reviewactualcheckpointandcleanrelevantsource/PLANafterchecks.

## Idempotence and Recovery

Repeatnpmci/buildsafely; onlydistgenerated. Datasetreplacementresetsexpendableworker; noexternaldataorsideeffects. Cancelmustterminaterunningworker, thenrebuildchosenbundle. Retainqueryinputforcorrection. NoSQLuserfilespublished. RootownsGitHubcreation/Pages afterPASS.

## Artifacts and Notes

RoleplayexactrepliesstoredPLANNING-CONVERSATION.md. Candidateauthorizationfromroot2026-10-09; checkerstatus remainsliteral.

## Interfaces and Dependencies

@duckdb/duckdb-wasm1.32.0EH, ECharts6.1.0, Vite8.3.4; localassets withVite?url. Oneenginegenerationtracksasyncrequests; close/terminateondisposal/reset. ModeldataindependentofUI/worker. ExactmoneyinBigIntintegercents; JSON-safe stringsreturnedtoUI. Chartonlyfinite/safevalues withunitcaption. Noauth/backend/remoteextensions.

Revisionnote2026-10-09: originalconfirmedplanandspecifictechnicalproofmilestone beforeimplementation.

## Current progress — supersedes pending implementation notes above

- [x] Dataset, authored SQL, local engine, UI and exact result serialization implemented.
- [x] Native prepared SELECT and READ ONLY transaction verified; rejected remote JSON-extension approach preserved.
- [x] Real browser integration suite36/36; production build and clean npm ci pass.
- [x] Independent coordinator production precision, cancel/recovery, large oracle, history and narrow keyboard/chart/table observations received.
- [x] Final timeout/export witness reported PASS by the coordinator.
- [ ] Independent reviewer verdict and coordinator candidate promotion/publication.

The early read-only and implementation-pending prose is historical planning state. Current source uses no JSON parser extension. The engine's own tokenizer and prepared-statement parser preserve exact literals and reject multiple statements, with an independent native read-only transaction. Developer browser availability was lost after an interrupted download wait; remaining narrow and lifecycle observations are attributed to the coordinator. No alternate browser automation was used.


## Authorized live revision milestones — 2026-10-09

Purpose: make the substantial SQL example approachable from its first query, with useful editor schema and exact human-readable money. User authorization expands the original scope; no additional student roleplay was invented. Preserve the native engine and all failed historical rounds.

- [x] Read current plugin/design guidance, common/app checklist, original brief and whole application. Fetch clean origin and retain existing recipe.
- [x] Implement large default, three introductory queries, controlled schema insertion, exact-dollar presentation, query provenance, local fonts and public build story.
- [x] Fresh npm ci and approved dependency check pass. Initial build failed after a broad startup edit entered the nonasync lesson handler; corrected the handler and retained the failed round. Successful build retains 34 font/package notice sections.
- [ ] Source/PLAN checkpoint, 41 meaningful real-engine cases and actual production interactions.
- [ ] Independent review, fixes if required, coordinator publication and live verification.

Validation uses test port 9715 and production 9716. Expected first result: 12 alphabetized products, Book stand / Organization first and Task timer / Accessories last. Aggregation: 600 orders each in Central, East, South, West. Independently enumerated filter ordering yields L1010 / 40 / 2650 cents first among 20 maximum-unit lines. Tiny totals and mistaken join remain 55000/27500/27500 cents and 75000 versus 55000. Currency boundaries include 900719925474099301 cents → $9,007,199,254,740,993.01 and -1 cent → -$0.01; unknown aliases remain raw.

Local app/presentation.js owns shared table/chart currency semantics, while engine.js continues to own SQL safety and exact serialization. tests/review.html provides an authored same-origin iframe for 1440/390/320 checks; ignored dist receives a local review copy after build. npm ci/build are repeatable, no external services or new dependencies, and root controls publication after independent PASS.

The new first query exposed the old cyclic category labels (for example Book stand was Lighting). Replaced only product category labels with explicit plausible categories; IDs, prices, orders and shipment generation remain identical, so all monetary oracles are unchanged. A fresh source checkpoint and real-engine rerun cover the corrected introductory result.

## Revision outcomes

- [x] Final source/PLAN checkpoint 7e2cfd8c7588520a13568c04ed76d16ba7bf695a, with 41/41 real-engine cases at the source-identical model/test checkpoint b331239 and affected final CSS production checks completed.
- [x] Actual large/default, tiny known answers, schema cursor/selection insertion, keyboard execution, exact money, invalid-query retention, cancel/reset, history and responsive/font/resource checks completed. EVALUATION.md preserves the build failure, tall exploratory layout, narrow-table correction and unscoped navigation diagnostic.
- [ ] Independent review and coordinator publication/live checks remain pending.

The final result teaches one table before joins while keeping the substantial data and explicit tiny hand-check. Money units are consistent without sacrificing raw export precision. Final layout refinements compact optional references and fit normal two-column USD results at 320 px; full result sets remain scrollable. Reports do not change the tested source or PLAN.

- [x] Independent coordinator PASS at 7e2cfd8, publication of 5de66d0, successful Actions 37966909822 and actual live default/tiny/reload/log checks completed. DEPLOYMENT.md distinguishes retained navigation diagnostics from fresh live logs. Only this report follows the tested source; owned review servers are stopped.

## Remaining-checklist correction milestones — 2026-10-09

Students should reconstruct the tiny duplicate-join trap from raw rows, investigate an explained result in the large dataset, preserve their SQL when trying a starter, and save enough context to reproduce their CSV. This revision follows ~/.codex/PLANS.md and preserves all historical rounds above. The root user authorized implementation; no new simulated approval is implied.

First add tiny-lines and tiny-shipments starters in app/queries.js and adjacent inspection buttons in app/index.html. Both select the tiny dataset and run ordinary bounded SQL. Add a single previous-query slot in app/app.js, set only when a starter replaces different text, with Restore previous query beside Save SQL. Keep both states transient and say so beside the editor. Second put chart eligibility/reasons and error guidance in app/presentation.js; app/app.js uses them to show an absent-chart reason with an example query while retaining exact database errors and previous results. Add a result note built from the completed query, dataset and retained row count; it must not use later editor text. The CSV retains existing raw-value/formula escaping. Third write BUILD-STORY.md's predict/change/reconcile/limitation path through large region totals, with the tiny rows as the independent grain proof.

From this repository run npm ci --cache /private/tmp/bab-npm-cache-sql, then node /Users/jordan/Projects/decision-999/plugins/browser-app-builder/scripts/check-dependencies.mjs . and npm run build. Serve tests with npm run test:browser -- --host 127.0.0.1 --port 9715 and production with npm run preview -- --host 127.0.0.1 --port 9716. The real-engine tests retain all prior enforcement/precision cases and add raw inspections, explicit chart boundaries and independently calculated large region totals. Root will run actual browser checks because CUA is unavailable in this agent: default12products, raw tiny4lines/4events, restore custom SQL, syntax/column/cancel recovery with old provenance, result-count/companion downloads, long advanced query skip-link arrival,320px and separately200% font enlargement using tests/review.html. Reapply authored enlargement after creating new content; it is not native browser zoom. Preserve any failed round. Actual screen-reader and novice sessions cannot be inferred from these checks.

- [x] Read current revised checklist and whole app/data/query/presentation/engine source.
- [x] Implement corrections and meaningful boundaries; source checkpoint follows.
- [ ] Clean build, actual browser/production/layout evidence and independent root review before push.

Decision: retain one previous-query slot rather than automatic persistent history; it solves accidental replacement with one visible concept. Save SQL remains durable. Do not alter editor caret during ordinary input. No engine capability or dependency changes are planned. Repeatable builds only replace ignored dist, never source; ports9715/9716 are owned by this app. New evidence will be recorded separately from historical41-case results.

Correction build check: clean npm ci installed48 packages with zero reported vulnerabilities; dependency checker and production build pass, including34 license sections and the existing large-chunk advisory. The suite now contains47 real-engine cases, including an accelerated30ms timeout exercising the production cancellation path (the production limit remains8seconds). Actual browser runs and layout checks remain pending; build success does not close them.
