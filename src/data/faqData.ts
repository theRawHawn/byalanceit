/**
 * FAQ DATA — SEO + AEO + GEO Optimized
 * =====================================
 * All questions are phrased as real Google/voice searches.
 * Answers are structured: direct answer first, then explanation.
 * Each set feeds into <FAQSchema> (JSON-LD) AND <FAQSection> (visible UI accordion).
 *
 * Pages using this data:
 *  - Homepage       → homeFAQs
 *  - GST Services   → gstFAQs
 *  - ITR Services   → itrFAQs
 *  - TDS Services   → tdsFAQs
 *  - Payroll        → payrollFAQs
 *  - Accounting     → accountingFAQs
 */

export interface FAQItem {
  question: string;
  answer: string;
}

// ─────────────────────────────────────────────
// HOMEPAGE FAQs
// ─────────────────────────────────────────────
export const homeFAQs: FAQItem[] = [
  {
    question: 'What services does Byalance offer?',
    answer:
      'Byalance offers end-to-end virtual accounting and compliance services for Indian businesses — including Accounting & Bookkeeping, GST Filing, TDS Management, Income Tax Return (ITR) Filing, and Payroll Processing. We serve startups, MSMEs, freelancers, and growing businesses across India from our base in Bengaluru, Karnataka.',
  },
  {
    question: 'How much does Byalance charge per month?',
    answer:
      'Byalance pricing starts at ₹1,999/month (Starter Plan) covering GST returns and basic bookkeeping. The Growth Plan (₹7,499–₹14,999/month) adds TDS, full accounting, and financial reports. The Pro Plan (₹15,499–₹20,000+/month) includes payroll, advanced reports, and priority support. Custom pricing is also available for complex requirements.',
  },
  {
    question: 'Is Byalance a virtual accounting firm?',
    answer:
      'Yes. Byalance is a fully virtual accounting firm. All services are delivered remotely — you share documents via WhatsApp, email, or cloud, and our certified accountants handle filings, reconciliations, and reports. You get big-firm quality at MSME-friendly pricing, with no need to visit a physical office.',
  },
  {
    question: 'Which cities does Byalance serve?',
    answer:
      'Byalance is headquartered in JP Nagar, Bengaluru (Karnataka) but serves businesses across India. Our virtual model means we can work with clients in Mumbai, Delhi, Hyderabad, Chennai, Pune, and Tier 2/3 cities with equal efficiency. All filings are done online through the GSTN, Income Tax Portal, and EPFO portals.',
  },
  {
    question: 'Can Byalance handle accounting for my startup?',
    answer:
      'Absolutely. Byalance specialises in startups and early-stage businesses. We set up your books from scratch, handle GST registration, manage TDS obligations, and ensure payroll compliance from day one — so you can focus on growth instead of paperwork. Our Starter Plan is designed specifically for bootstrapped and seed-stage startups.',
  },
  {
    question: 'How do I get started with Byalance?',
    answer:
      'Getting started is simple. WhatsApp us at +91 74062 96116 or fill out the contact form on the website. We schedule a free 15-minute consultation to understand your business, current compliance status, and recommend the right plan. Onboarding typically takes 2–3 working days.',
  },
  {
    question: 'Does Byalance work with Tally, Zoho, or QuickBooks?',
    answer:
      'Yes. Byalance works with Tally Prime, Zoho Books, QuickBooks, and Excel-based accounting setups. We adapt to your existing system without disrupting your workflow. If you are not using any software yet, we help you set up the right tool for your business size and budget.',
  },
];

// ─────────────────────────────────────────────
// GST SERVICES FAQs
// ─────────────────────────────────────────────
export const gstFAQs: FAQItem[] = [
  {
    question: 'Who needs to register for GST in India?',
    answer:
      'GST registration is mandatory if your annual turnover exceeds ₹40 lakh (goods) or ₹20 lakh (services), or ₹10 lakh in special category states. It is also compulsory for e-commerce sellers, inter-state suppliers, and businesses making taxable supplies regardless of turnover. Byalance handles the entire registration process — from document collection to GSTIN issuance.',
  },
  {
    question: 'What is the penalty for late GST filing in India?',
    answer:
      'Late GST filing attracts a penalty of ₹50 per day (₹25 CGST + ₹25 SGST) for regular returns, with a maximum of ₹10,000 per return. For nil returns, the late fee is ₹20/day (₹10 each). Additionally, unpaid tax attracts 18% annual interest. Byalance files all returns before due dates to ensure you never pay unnecessary penalties.',
  },
  {
    question: 'What is GSTR-2B and why does it matter?',
    answer:
      'GSTR-2B is the auto-generated Input Tax Credit (ITC) statement available on the GSTN portal. It shows the ITC you are eligible to claim based on your suppliers\' GSTR-1 filings. If you claim ITC not reflected in GSTR-2B, you risk interest and penalties during audits. Byalance reconciles your purchase records against GSTR-2B every month to ensure you claim only valid credits.',
  },
  {
    question: 'What is the difference between GSTR-1, GSTR-3B, and GSTR-9?',
    answer:
      'GSTR-1 reports outward supplies (sales) — filed monthly or quarterly. GSTR-3B is a monthly summary return showing tax liability and ITC claimed — payment is made here. GSTR-9 is the annual GST return reconciling the whole financial year\'s data. Byalance files all three accurately and ensures GSTR-1 and GSTR-3B are reconciled before each submission.',
  },
  {
    question: 'Can I claim Input Tax Credit on all my purchases?',
    answer:
      'No. ITC can only be claimed on business-related purchases where the supplier has filed their GSTR-1 and the amount appears in your GSTR-2B. ITC is blocked on personal expenses, motor vehicles (with exceptions), food and beverages, and certain other categories under Section 17(5). Byalance reviews your purchase register monthly to maximise legitimate ITC and flag blocked credits.',
  },
  {
    question: 'What is e-invoicing and does my business need it?',
    answer:
      'E-invoicing is mandatory for businesses with turnover above ₹5 crore. It requires generating invoices through the IRP (Invoice Registration Portal), which assigns a unique IRN and QR code. Byalance configures your e-invoicing setup, integrates with your accounting software, and ensures every invoice is IRP-compliant before it reaches your customer.',
  },
  {
    question: 'How do I switch from Composition Scheme to Regular GST?',
    answer:
      'To switch from Composition to Regular GST, you must file Form GST CMP-04 on the GSTN portal and begin filing GSTR-1 and GSTR-3B from the next month. You will also need to reverse ITC on opening stock. Byalance manages the entire transition — filing the withdrawal application, restructuring your compliance calendar, and updating your invoice format.',
  },
  {
    question: 'What GST services does Byalance provide in Bengaluru?',
    answer:
      'Byalance provides complete GST compliance services for businesses in Bengaluru and across Karnataka — including GST registration, monthly GSTR-1 and GSTR-3B filing, GSTR-9 annual return, ITC reconciliation (2B vs books), e-invoicing setup, e-way bill management, and resolution of GST notices and demands. We serve clients in JP Nagar, Koramangala, Whitefield, HSR Layout, and all other parts of Bengaluru.',
  },
];

// ─────────────────────────────────────────────
// ITR SERVICES FAQs
// ─────────────────────────────────────────────
export const itrFAQs: FAQItem[] = [
  {
    question: 'Who is required to file an Income Tax Return in India?',
    answer:
      'ITR filing is mandatory if your income exceeds the basic exemption limit (₹3 lakh under new regime / ₹2.5 lakh under old regime), if you have foreign assets, if TDS has been deducted and you want a refund, or if you want to carry forward losses. It is also mandatory for companies and LLPs regardless of profit. Byalance first checks your exact applicability before filing.',
  },
  {
    question: 'What is the last date to file ITR in India?',
    answer:
      'For salaried individuals and businesses not requiring audit, the ITR due date is 31st July of the assessment year. For businesses requiring a tax audit (turnover above ₹1 crore for business / ₹50 lakh for professionals), the deadline is 31st October. A belated return can be filed until 31st December. Byalance tracks all deadlines and sends you reminders to ensure timely filing.',
  },
  {
    question: 'What is the penalty for not filing ITR on time?',
    answer:
      'A late filing fee of ₹5,000 applies if you file after the due date (reduced to ₹1,000 if income is below ₹5 lakh). Beyond this, you lose the ability to carry forward business losses, and interest at 1% per month applies on unpaid tax under Section 234A. Byalance files your return before the deadline every year to avoid these costs.',
  },
  {
    question: 'Which ITR form should I file?',
    answer:
      'The correct ITR form depends on your income type: ITR-1 (Sahaj) for salaried individuals with income up to ₹50 lakh; ITR-2 for individuals with capital gains or foreign income; ITR-3 for business income; ITR-4 (Sugam) for presumptive taxation; ITR-5 for firms/LLPs; ITR-6 for companies; ITR-7 for trusts and political parties. Filing the wrong form results in a defective return notice. Byalance selects the correct form based on your income profile.',
  },
  {
    question: 'What is Form 26AS and why should I check it before filing?',
    answer:
      'Form 26AS is a consolidated tax statement showing all TDS deducted on your income, advance tax paid, and self-assessment tax paid. The Income Tax Department matches your ITR against 26AS — any mismatch can trigger a scrutiny notice. Byalance cross-checks your Form 26AS, AIS (Annual Information Statement), and TIS (Taxpayer Information Summary) before filing to ensure your return is accurate and notice-proof.',
  },
  {
    question: 'What deductions can I claim to reduce my income tax?',
    answer:
      'Key deductions include: Section 80C (up to ₹1.5 lakh for PPF, ELSS, LIC, home loan principal); Section 80D (health insurance premiums up to ₹25,000–₹50,000); Section 24(b) (home loan interest up to ₹2 lakh); HRA exemption for rent paid; Section 80G for donations. Note these are available under the old tax regime. Byalance advises on the optimal regime (old vs new) for your income profile every year.',
  },
  {
    question: 'I received an income tax notice — what should I do?',
    answer:
      'Do not ignore an income tax notice. Common notices include Section 143(1) for minor mismatches, Section 139(9) for defective returns, and Section 143(2) for scrutiny. Each has a specific response deadline. Byalance reviews the notice, identifies the cause, prepares the response with supporting documents, and files it on the income tax portal within the due date.',
  },
  {
    question: 'Can freelancers and self-employed professionals file ITR with Byalance?',
    answer:
      'Yes. Byalance specialises in ITR filing for freelancers, consultants, doctors, lawyers, architects, and other self-employed professionals. We compute your net income after deducting legitimate business expenses, check TDS deducted by clients against Form 26AS, advise on advance tax obligations, and file the correct ITR form (typically ITR-3 or ITR-4) before the due date.',
  },
];

// ─────────────────────────────────────────────
// TDS SERVICES FAQs
// ─────────────────────────────────────────────
export const tdsFAQs: FAQItem[] = [
  {
    question: 'What is TDS and who needs to deduct it?',
    answer:
      'TDS (Tax Deducted at Source) is a mechanism where the payer deducts tax at specified rates before making certain payments — such as salary, rent, contractor fees, professional charges, and interest. Any business or individual whose accounts are audited, or who pays rent above ₹2.4 lakh/year, must deduct TDS. Byalance determines your exact TDS obligations and sets up a compliance system from day one.',
  },
  {
    question: 'What is the penalty for not deducting TDS?',
    answer:
      'If you fail to deduct TDS, you are liable for interest at 1% per month from the date TDS was due to be deducted. If TDS is deducted but not deposited to the government, interest is 1.5% per month. Additionally, the expense on which TDS was not deducted may be disallowed by the Income Tax Department under Section 40(a)(ia), increasing your tax liability significantly.',
  },
  {
    question: 'When is TDS due to be deposited to the government?',
    answer:
      'TDS deducted in any month (except March) must be deposited to the government by the 7th of the following month. For March deductions, the due date is 30th April. TDS returns (Form 24Q for salary, 26Q for non-salary) are filed quarterly — due on 31st July, 31st October, 31st January, and 31st May respectively. Byalance manages all challan payments and quarterly filings.',
  },
  {
    question: 'What are Form 16 and Form 16A?',
    answer:
      'Form 16 is the TDS certificate issued by an employer to an employee for TDS deducted on salary — it contains salary details and tax computation. Form 16A is the TDS certificate for non-salary payments (contractor fees, rent, professional charges, etc.). Both must be issued within specified deadlines after the end of the financial year. Byalance generates both forms and ensures they are issued to payees on time.',
  },
  {
    question: 'What is TAN and how do I apply for one?',
    answer:
      'TAN (Tax Deduction and Collection Account Number) is a 10-digit alphanumeric number mandatory for every entity required to deduct TDS. Without TAN, you cannot file TDS returns or deposit TDS challans. Applications are made through the NSDL portal using Form 49B. Byalance handles the entire TAN application process and typically secures your TAN within 7–10 working days.',
  },
  {
    question: 'I have a TDS default from a previous year — can Byalance fix it?',
    answer:
      'Yes. Byalance specialises in resolving prior TDS defaults — including unpaid interest, late filing fees under Section 234E, and demand notices from TRACES. We file correction statements, compute outstanding interest, assist with voluntary payment, and help respond to intimations from the Assessing Officer. Early resolution prevents the default from escalating into prosecution proceedings.',
  },
  {
    question: 'What is Section 194N and does it apply to my business?',
    answer:
      'Section 194N requires banks and co-operative societies to deduct TDS at 2% on cash withdrawals exceeding ₹1 crore in a financial year (or 2% on amounts above ₹20 lakh if ITR has not been filed for 3 years). This applies to all account holders — individuals, businesses, and firms. Byalance advises on managing cash withdrawal patterns and ensures your ITR filing history is up to date to avoid the higher TDS rate.',
  },
];

// ─────────────────────────────────────────────
// PAYROLL SERVICES FAQs
// ─────────────────────────────────────────────
export const payrollFAQs: FAQItem[] = [
  {
    question: 'What does payroll processing include?',
    answer:
      'Payroll processing covers salary computation, statutory deductions (PF, ESI, Professional Tax, LWF), TDS on salary, payslip generation, payroll register preparation, Form 16 issuance, and statutory return filings (EPF, ESI, PT returns). Byalance handles every step of this monthly cycle so you never miss a deadline or make a calculation error.',
  },
  {
    question: 'Is PF registration mandatory for all businesses in India?',
    answer:
      'EPF (Employee Provident Fund) registration is mandatory for businesses with 20 or more employees. Once registered, all employees earning up to ₹15,000/month must be enrolled. Employer contribution is 12% of basic salary + DA; employee contribution is also 12%. Byalance handles EPF registration, monthly ECR (Electronic Challan cum Return) filing, and UAN activation for new employees.',
  },
  {
    question: 'What is ESI and which businesses need to register?',
    answer:
      'ESI (Employees\' State Insurance) is a social security scheme for employees earning up to ₹21,000/month. It is mandatory for businesses with 10 or more employees (20 in some states). Employee contribution is 0.75% and employer contribution is 3.25% of gross wages. Byalance manages ESI registration, monthly contributions, and half-yearly return filing.',
  },
  {
    question: 'How much does payroll outsourcing cost with Byalance?',
    answer:
      'Byalance offers payroll processing as part of the Growth Plan (₹7,499–₹14,999/month) and Pro Plan (₹15,499–₹20,000+/month), or as a standalone service. Pricing depends on employee count and statutory filing requirements. For a custom quote based on your headcount and compliance obligations, WhatsApp us at +91 74062 96116.',
  },
  {
    question: 'What is Professional Tax and which states require it?',
    answer:
      'Professional Tax (PT) is a state-level tax on salaried employees and self-employed individuals. It is applicable in Karnataka, Maharashtra, West Bengal, Andhra Pradesh, Telangana, Tamil Nadu, Gujarat, and several other states. In Karnataka, the employer deducts PT from employee salaries and remits it to the state government monthly. Byalance handles PT registration, monthly deduction, and return filing for all applicable states.',
  },
  {
    question: 'What is Full and Final Settlement (F&F) in payroll?',
    answer:
      'Full and Final Settlement is the process of computing and paying all amounts owed to an employee on their last working day — including pending salary, earned leave encashment, gratuity (if applicable), reimbursements, and deduction of any advances. Byalance prepares the F&F computation statement, ensures tax is correctly deducted on the terminal payout, and issues the relieving documents.',
  },
  {
    question: 'Can Byalance handle payroll for remote or contractual employees?',
    answer:
      'Yes. Byalance manages payroll for all employee types — full-time, part-time, contractual, and remote workers. For contractors, we handle TDS under Section 194C on fees paid, ensuring 26Q compliance. For remote employees across states, we account for varying PT slabs and ensure PF/ESI applicability is correctly assessed for each individual.',
  },
];

// ─────────────────────────────────────────────
// ACCOUNTING & BOOKKEEPING FAQs
// ─────────────────────────────────────────────
export const accountingFAQs: FAQItem[] = [
  {
    question: 'What is the difference between accounting and bookkeeping?',
    answer:
      'Bookkeeping is the systematic recording of daily financial transactions — sales, purchases, payments, receipts. Accounting is the broader process of summarising, interpreting, and reporting that data — producing P&L statements, balance sheets, and tax-ready financials. Byalance handles both: clean bookkeeping on a monthly basis and formal accounting reports for compliance and business decisions.',
  },
  {
    question: 'How often should a small business do bookkeeping?',
    answer:
      'Small businesses should ideally do bookkeeping monthly. Quarterly or annual bookkeeping leads to backlogs, missed GST reconciliations, incorrect TDS filings, and poor cash flow visibility. Byalance works on a monthly cadence — all entries are recorded, bank statements reconciled, and reports shared within the first 10 working days of each month.',
  },
  {
    question: 'What accounting software does Byalance use?',
    answer:
      'Byalance works with Tally Prime, Zoho Books, QuickBooks Online, and Excel-based setups. We adapt to your existing software rather than forcing a change. If you are starting from scratch, we recommend and set up the right tool based on your turnover, GST obligations, and team size — at no extra cost.',
  },
  {
    question: 'What is bank reconciliation and why is it important?',
    answer:
      'Bank reconciliation is the process of matching your accounting records with your bank statement to identify discrepancies — such as unrecorded transactions, bounced cheques, or bank charges. Without monthly reconciliation, your books may show incorrect cash balances leading to wrong GST filings or cash flow mismanagement. Byalance performs bank reconciliation every month as standard.',
  },
  {
    question: 'What financial reports does Byalance prepare?',
    answer:
      'Byalance prepares the full set of standard financial statements: Profit & Loss Account (Income Statement), Balance Sheet, Cash Flow Statement, Trial Balance, Accounts Receivable Aging, Accounts Payable Aging, and Bank Reconciliation Report. Growth and Pro plan clients also receive monthly MIS (Management Information System) reports for business performance tracking.',
  },
  {
    question: 'How does Byalance handle data security for my financial records?',
    answer:
      'Byalance treats client financial data with strict confidentiality. Documents are shared through encrypted channels (WhatsApp or email with password protection), and access is restricted to the assigned accountant. We follow a strict data handling policy — you can review our full Data Handling Policy on the website. We do not share your data with third parties under any circumstances.',
  },
  {
    question: 'Can Byalance clean up messy books from previous years?',
    answer:
      'Yes. Byalance offers data cleanup and catch-up bookkeeping services for businesses with incomplete, incorrect, or backlogged accounts. We reconstruct entries from bank statements, invoices, and receipts, reconcile the books against filed GST and TDS returns, and bring your accounts up to date. This is often the first step for new clients onboarding from another accountant.',
  },
];
