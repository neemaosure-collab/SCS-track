# Access map -- the reference shop (an invented business) -- SCS3.1

Who should have which access, and why?  One row per person, or per identical job.
Groups are people; units are settings; every person is in one unit and many groups.
Why: the three questions in one line -- what the job needs, what goes wrong with more, who decided.
This map is of an invented business and may be committed.  Your client's map never comes here:
it lives in the client folder (Clients, in your Windows SCS folder).

| Person (job) | What the job needs | OU | Groups | Admin role | Why (one line) |
|---|---|---|---|---|---|
| The owner | Full tenant control, billing, and emergency recovery | /Trainees/nestine | all-staff@shop.example, management@shop.example | super-admin | Needs full oversight of business accounts and billing; giving super-admin to others risks total tenant takeover; the owner decided. |
| The accountant (a sandbox user, ticket 4) | Email, Drive, and accounting sheets without standing admin access | /Trainees/nestine/Staff | all-staff@shop.example, finance@shop.example | none | Needs financial records and billing documents; permanent admin rights risk unauthorized setting changes or data exposure; the owner decided. |
| The shop manager | Daily team rotas, staff coordination, and operational folders | /Trainees/nestine/Staff | all-staff@shop.example, management@shop.example | none | Needs staff schedules and shared shop files; admin access risks accidental user deletion or policy edits; the owner decided. |
| Counter staff (four) | Customer bookings, shared counter inbox, and point-of-sale tools | /Trainees/nestine/Staff/Front Desk | all-staff@shop.example, counter@shop.example | none | Needs customer-facing booking tools and counter email; wider access exposes payroll and supplier contracts; the shop manager decided. |
| The new starter (a sandbox user, ticket 1) | Basic counter email and onboarding guides with restricted chat | /Trainees/nestine/Staff/Front Desk | all-staff@shop.example, counter@shop.example | none | Needs counter email and training docs; unrestricted apps or admin rights risk data leaks during onboarding; the shop manager decided. |
| Welders (three) | Job sheets, safety notices, and workshop shift schedules | /Trainees/nestine/Staff | all-staff@shop.example, workshop@shop.example | none | Needs job specs and safety updates; broader access exposes customer billing and HR records; the shop manager decided. |
| Drivers (two) | Delivery manifests, route sheets, and dispatch messages | /Trainees/nestine/Staff | all-staff@shop.example, drivers@shop.example | none | Needs delivery routes and dispatch email; extra access risks exposing financial systems on mobile devices; the shop manager decided. |
| Me (the admin) | Routine user, group, and OU administration for the shop | /Trainees/nestine | all-staff@shop.example, it-admin@shop.example | User Management Admin | Needs to manage accounts, groups, and resets; standing super-admin risks accidental tenant-wide changes; the owner decided. |

## The partner's cold read

Partner: ____.  One person with more than the job needs, or "none" and why: ____.
