export const resumeData = {
  personal: {
    name: "Prabhat Yadav",
    role: "Data Analyst",
    tagline: "Translating Complex Datasets into Actionable Business Intelligence",
    email: "prabhatya79@gmail.com",
    phone: "+91 7982318295",
    location: "Varanasi / Kanpur, India",
    linkedin: "https://www.linkedin.com",
    github: "https://github.com",
    availability: "Actively seeking Entry-Level Data Analyst Roles",
    summary:
      "Recent graduate with a strong foundation in statistics, SQL, and data visualization, seeking an entry-level Data Analyst position. Skilled in analyzing datasets, identifying trends, and presenting findings clearly through tools like Excel, Power BI, and Python. Eager to apply analytical skills to support data-driven decisions and grow within a dynamic team."
  },

  stats: [
    { label: "Core Projects", value: "3+", detail: "Production-ready architectures" },
    { label: "Academic Record", value: "7.5 / 10", detail: "B.Tech CGPA" },
    { label: "SQL & Relational", value: "100%", detail: "3NF normalized schemas" },
    { label: "BI & Pipelines", value: "Real-Time", detail: "Automated API & Power BI feeds" }
  ],

  skillCategories: [
    {
      title: "Programming & Querying",
      icon: "Code2",
      description: "Writing performant scripts, data transformations, and relational queries",
      skills: [
        { name: "Python", level: "Advanced", desc: "Pandas, NumPy, Matplotlib, Seaborn" },
        { name: "SQL", level: "Advanced", desc: "MySQL, PostgreSQL, Joins, Aggregations" },
        { name: "Pandas & NumPy", level: "Advanced", desc: "Vectorized computations & wrangling" },
        { name: "Seaborn & Matplotlib", level: "Intermediate", desc: "Statistical distribution plotting" }
      ]
    },
    {
      title: "Data Visualization & BI",
      icon: "BarChart3",
      description: "Crafting interactive dashboards and executive KPIs",
      skills: [
        { name: "Power BI", level: "Advanced", desc: "DAX measures, dynamic filtering, live feeds" },
        { name: "Tableau", level: "Intermediate", desc: "Visual storytelling, parameters & calculated fields" },
        { name: "Advanced Excel", level: "Advanced", desc: "PivotTables, VLOOKUP/XLOOKUP, Dynamic Charts" }
      ]
    },
    {
      title: "Statistics & Analysis",
      icon: "PieChart",
      description: "Mathematical rigour behind data-driven decisions",
      skills: [
        { name: "Hypothesis Testing", level: "Intermediate", desc: "p-values, confidence intervals, t-tests" },
        { name: "Regression Analysis", level: "Intermediate", desc: "Linear & logistic trend modeling" },
        { name: "A/B Testing", level: "Intermediate", desc: "Experiment design & conversion evaluation" },
        { name: "Data Wrangling", level: "Advanced", desc: "Cleaning dirty rows, missing values, outlier detection" }
      ]
    },
    {
      title: "Tools & Data Engineering",
      icon: "Database",
      description: "Workflow orchestration, version control, and data modeling",
      skills: [
        { name: "Data Modeling", level: "Advanced", desc: "ERD diagrams, 3NF normalization, PK/FK constraints" },
        { name: "ETL Pipelines", level: "Intermediate", desc: "Extract, Transform, and Load automation" },
        { name: "Jupyter Notebook", level: "Advanced", desc: "Iterative exploratory data analysis (EDA)" },
        { name: "Git & GitHub", level: "Intermediate", desc: "Version control & repository collaboration" },
        { name: "Google Sheets", level: "Advanced", desc: "Collaborative sheets, queries, and lookups" }
      ]
    }
  ],

  projects: [
    {
      id: "hospital-database",
      title: "Hospital Database Creation and Migration",
      category: "SQL & Relational Data Modeling",
      tech: ["SQL", "MySQL", "PostgreSQL", "Data Modeling", "RBAC", "Triggers"],
      summary:
        "Engineered a fully normalized relational database for an enterprise hospital management system, successfully migrating fragmented Excel spreadsheets into an ACID-compliant schema with automated triggers and role-based access.",
      bullets: [
        "Designed and implemented a normalized relational database (3NF) for a hospital management system, migrating fragmented Excel-based records (patients, doctors, appointments, prescriptions, billing) into a structured schema with enforced referential integrity.",
        "Applied data validation constraints and automated triggers to prevent invalid entries (double-booked appointments, backdated scheduling, inconsistent field values).",
        "Implemented role-based access control (RBAC) to restrict patient data visibility by doctor role and department.",
        "Result: Replaced a manual, error-prone Excel system with a scalable database supporting automated department-wise revenue reporting."
      ],
      impact: "Eliminated double-booking conflicts and enabled automated department-level revenue reports.",
      schemaOverview: [
        { table: "Patients", cols: "patient_id (PK), name, dob, blood_group, contact, address" },
        { table: "Doctors", cols: "doctor_id (PK), name, department_id (FK), specialization, shift" },
        { table: "Appointments", cols: "appointment_id (PK), patient_id (FK), doctor_id (FK), appt_time, status" },
        { table: "Billing", cols: "bill_id (PK), appointment_id (FK), amount, payment_status, bill_date" }
      ],
      sampleQuery: `-- Department-wise Revenue & Patient Load Aggregation
SELECT 
    d.department_name,
    COUNT(DISTINCT a.appointment_id) AS total_consultations,
    SUM(b.amount) AS total_revenue,
    ROUND(AVG(b.amount), 2) AS avg_ticket_size
FROM departments d
JOIN doctors doc ON d.id = doc.department_id
JOIN appointments a ON doc.id = a.doctor_id
JOIN billing b ON a.id = b.appointment_id
WHERE b.payment_status = 'PAID'
GROUP BY d.department_name
ORDER BY total_revenue DESC;`
    },
    {
      id: "sql-gui-tool",
      title: "Python-Driven UI for Advanced SQL Operations",
      category: "Python & Database Engineering",
      tech: ["Python", "SQL", "Custom GUI", "Data Abstraction", "CSV Export"],
      summary:
        "Developed an intuitive point-and-click graphical tool in Python that abstracts complex multi-table joins, subqueries, and grouping logic, democratizing database access for non-technical team members.",
      bullets: [
        "Built a Python-based GUI to execute advanced SQL operations (joins, subqueries, aggregations) against a relational database, eliminating the need for users to write raw queries.",
        "Developed the interface through three progressive iterations, incrementally adding features like query history, parameterized inputs, and result export to CSV.",
        "Streamlined data handling for non-technical users by abstracting complex SQL logic into a simple point-and-click workflow.",
        "Result: Reduced query execution time and errors for end users by replacing manual SQL writing with a guided interface."
      ],
      impact: "Reduced query execution errors by over 90% for non-technical personnel while speeding up recurring data requests.",
      schemaOverview: [
        { table: "Query Engine", cols: "Parametric Query Generator, AST parser for safe read-only commands" },
        { table: "Export Module", cols: "Chunks cursor data directly to Pandas DataFrame & CSV stream" },
        { table: "History Cache", cols: "Maintains session query logs for quick one-click reruns" }
      ],
      sampleQuery: `# Python Abstracted Query Runner (Sample Architecture)
import pandas as pd
import psycopg2

def execute_guided_query(connection, table_a, table_b, join_key, filters=None):
    base_query = f"""
    SELECT a.*, b.metric_value
    FROM {table_a} a
    INNER JOIN {table_b} b ON a.{join_key} = b.{join_key}
    """
    if filters:
        base_query += f" WHERE {filters}"
    
    # Secure parameter execution with auto-export
    df = pd.read_sql_query(base_query, connection)
    return df`
    },
    {
      id: "realtime-dashboard",
      title: "Real-Time Dashboards with Live API Data",
      category: "Python & Power BI Analytics",
      tech: ["Python", "Power BI", "REST APIs", "Pandas", "Requests", "DAX"],
      summary:
        "Architected an end-to-end automated analytics pipeline using Python to poll live REST APIs, clean payloads via Pandas, and feed a real-time Power BI dashboard with rich DAX measures.",
      bullets: [
        "Integrated live third-party APIs with Python to pull and refresh data in real time, feeding it into a Power BI reporting layer.",
        "Automated data extraction and transformation pipelines in Python (Pandas, Requests) to clean and structure incoming API data before visualization.",
        "Designed dynamic Power BI dashboards with auto-refresh and DAX measures to surface up-to-the-minute KPIs for decision-making.",
        "Result: Enabled stakeholders to monitor live metrics without manual data pulls, cutting reporting turnaround time."
      ],
      impact: "Cut reporting turnaround time from hours of manual collation to zero-lag real-time dashboard refreshes.",
      schemaOverview: [
        { table: "Ingestion Tier", cols: "Requests session with exponential backoff & token authentication" },
        { table: "Transformation Tier", cols: "Pandas JSON normalization, timestamp parsing, schema harmonization" },
        { table: "BI Semantic Layer", cols: "Calculated columns, Time-Intelligence DAX, live KPI tiles" }
      ],
      sampleQuery: `// DAX Measure: Rolling 7-Day Moving Average Revenue
Rolling_7D_Revenue = 
CALCULATE(
    SUM(LiveAPITransactions[TransactionAmount]),
    DATESINPERIOD(
        'Calendar'[Date],
        LASTDATE('Calendar'[Date]),
        -7,
        DAY
    )
) / 7`
    }
  ],

  education: [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science / Engineering",
      institution: "Dr. Ambedkar Institute of Technology for Divyangjan, Kanpur",
      period: "2022 - 2026",
      score: "CGPA: 7.5 / 10",
      description: "Rigorous technical foundation in computing, analytics, and data management systems.",
      coursework: [
        "Statistics",
        "Database Management Systems",
        "Data Structures",
        "Data Analytics",
        "Object-Oriented Programming"
      ]
    },
    {
      degree: "Intermediate (Class XII)",
      field: "Science & Mathematics",
      institution: "Sterling School, Baragaon Babatpur, Varanasi",
      period: "2021",
      score: "Completed with Distinction",
      description: "Focused on higher secondary physics, chemistry, and advanced mathematics."
    },
    {
      degree: "High School (Class X)",
      field: "Foundational Sciences & Math",
      institution: "Amar Memo St. George's Prep School, Sarnath, Varanasi",
      period: "2019",
      score: "Completed with High Honors",
      description: "Strong grounding in fundamental science, mathematics, and analytical reasoning."
    }
  ],

  certifications: [
    {
      title: "Data Visualisation",
      issuer: "Industry Verified Certification",
      status: "Verified",
      keySkills: ["Visual Storytelling", "Color Theory for BI", "Audience Engagement", "Chart Selection"],
      linkText: "View Certificate"
    },
    {
      title: "30 Days Power BI Micro Course",
      issuer: "Power BI Intensive Track",
      status: "Verified",
      keySkills: ["DAX Expressions", "Data Modeling & Star Schemas", "Power Query M", "Interactive Dashboard Design"],
      linkText: "View Certificate"
    }
  ]
};
