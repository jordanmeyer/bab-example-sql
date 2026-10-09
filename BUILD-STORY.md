# How Fulfillment Lab was built

The original request was a browser SQL workspace over a substantial synthetic wholesale dataset: find regions and products with value tied up in unfulfilled units, inspect schemas, edit real SQL and demonstrate how shipment-event joins can duplicate order value. It includes a hand-checkable tiny case and a larger classroom example.

[Original simulated planning conversation](PLANNING-CONVERSATION.md) records the actual role-play and choices. It is not a real student's testimonial. [PLAN](PLAN.md), [decisions](DECISIONS.md) and the [living implementation plan](docs/EXECPLAN.md) retain scope, assumptions and revisions. The user later authorized bringing the live app up to current guidance; that added the progressive learning path, larger default, insertable schema, exact-dollar display and licensed local typography without inventing further student replies.

Browser App Builder's plan, build, evaluate and deploy workflows supplied the managed Vite lifecycle. Its DuckDB and ECharts recipes handle real local SQL and suitable numeric result charts. Campus Designer supplies the color/type guidance, with local licensed EB Garamond and Open Sans. No institutional affiliation or endorsement is implied. The app uses DuckDB-Wasm 1.32.0, ECharts 6.1.0 and Vite 8.3.4; package and font licenses ship in the linked notices.

The model keeps integer cents, aggregates shipments before joining, and uses native parser/configuration/read-only transactions with bounded runs. Exact values remain available in the table and CSV. [Evaluation](EVALUATION.md) preserves failed rounds and actual browser checks, [independent review](REVIEW.md) distinguishes reviewer approval, and [deployment](DEPLOYMENT.md) records published revisions. [Tests](tests/engine.test.js) run the actual engine, including tiny known answers, large independent arithmetic, blocked mutations/external access, cancellation, precision and new beginner-query/display boundaries.

## Student investigation

This bounded practice task supplies an answer for reconciliation. It is not an observed novice walkthrough or evidence of learning outcomes.

1. Keep the **Large** dataset. Run the first three starters: inspect products, filter lines, then count orders by region. Predict which region has the greatest unshipped order value. All four have 600 orders, so counts alone do not answer the value question.
2. Select **Where is value waiting?** Before running it, follow the clauses: the `shipped` block groups shipment events by `line_id` and sums units; `fulfillment` left joins that one-row-per-line total to each order line, turns missing shipment totals into zero, and subtracts shipped from ordered units. The final query joins each line to its order to obtain region, multiplies outstanding units by the original price, sums within each region and sorts the largest value first. Run it and reconcile the supplied result below.
3. Change the final region query to inspect only West by adding `WHERE o.region = 'West'` immediately before `GROUP BY`. Predict whether its value will change. Run the query: the retained West total is the same. Explain why this filter removes other groups instead of changing West's underlying lines. Use **Save SQL** to keep this draft locally.
4. Select **Reconcile every cent**. Compare total gross, shipped and outstanding values. Then choose a different starter and use **Restore previous query** to recover the prior editor text. For error recovery, change a column name to `nonexistent`, run, read the exact error and guidance, and correct it. The old result remains attributed to its executed SQL until a new query succeeds.
5. Download the CSV and its matching result note. Use the note to identify the dataset, executed SQL, raw cents and any cap. Explain why outstanding value does not show which orders are late, unpaid or profitable. Due dates, payment status and costs are absent.

### Supplied large-data answer

| Region | Orders | Unshipped order value |
| --- | ---: | ---: |
| West | 600 | $831,513.25 |
| Central | 600 | $491,602.25 |
| East | 600 | $399,288.75 |
| South | 600 | $301,453.00 |

Gross $6,117,182.75 = shipped $4,093,325.50 + outstanding $2,023,857.25. The data contains 158,399 ordered units and 106,704 shipped units. West has the same 600 orders as every other region, but different line values and shipment completion. It is a place to investigate, not a causal explanation or proof of lateness. These exact answers were independently recomputed from the deterministic generation rules with integer arithmetic; actual SQL tests compare to them.

### Reconstruct the tiny join rule

Open **The four-line hand-check case**, then use its two inspection actions. They select the tiny dataset and run ordinary inspection queries; the replaced editor text remains one Restore previous query action away. Predict gross value before revealing the deliberately mistaken join.

| Line | Order | Product | Ordered units | Unit price | Raw shipped events |
| --- | --- | --- | ---: | ---: | --- |
| A | O1 | P1 Notebook | 10 | $20 | S1: 3; S2: 2 |
| B | O1 | P2 Lamp | 5 | $30 | S3: 5 |
| C | O2 | P1 Notebook | 4 | $25 | S4: 1 |
| D | O3 | P2 Lamp | 2 | $50 | None |

The four gross line values are $200 + $150 + $100 + $100 = $550. Joining raw shipment events repeats A's $200 twice, so the mistaken left join totals $750. First aggregating A's 3 + 2 shipments to 5 units keeps one A row and restores $550. Shipped value is $275 and outstanding value is $275. Keeping D through the left join matters: no shipment means zero shipped units, not a missing order.

### Save and recovery limits

SQL text and the one-step replacement restore are transient. Save SQL before leaving the tab. Result CSV exports every retained row up to the 500-row cap, while each visible table page contains at most 50. Its matching note saves the executed query rather than later editor changes. Charts require two suitable columns and a small complete grouping; an absent-chart explanation and a valid example query help distinguish an unsuitable result from a broken chart. Exact tables and raw-value CSV remain the reference.
