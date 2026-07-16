import Container from "@/components/layout/container";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function BusinessReportingPage() {
  return (
    <main className="section-padding">

      <Container className="max-w-6xl">

        {/* HERO */}

        <section className="mb-28">

          <p className="font-semibold tracking-widest text-primary uppercase">
            Excel Case Study
          </p>

          <h1 className="mt-5 text-5xl font-extrabold leading-tight lg:text-6xl">
            Excel Data Cleaning & Data Preparation
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-muted-foreground">
            Transforming a raw retail sales dataset into a clean, structured, and analysis-ready dataset using Microsoft Excel. 
          </p>

          {/* Technologies */}

          <div className="mt-10 flex flex-wrap gap-3">

            {[
              "Excel",
              "Data Cleaning",
              "Data Validation",
              "Formulas",
              "Data Preparation",
              "GitHub",
            ].map((tool) => (

              <span
                key={tool}
                className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium"
              >
                {tool}
              </span>

            ))}

          </div>

          {/* Divider */}

          <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="https://github.com/eniolamary/Excel-Data-Cleaning"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>
                View GitHub
              </Button>
            </a>

            <Link href="/">
              <Button variant="outline">
                ← Back to Portfolio
              </Button>
            </Link>

          </div>

        </section>

        {/* PROJECT OVERVIEW */}

        <section className="mb-24">

          <h2 className="text-4xl font-bold">
            Project Overview
          </h2>

          <div className="mt-8 space-y-6 text-lg leading-8 text-muted-foreground">

            <p>
              Raw business datasets often contain missing values, inconsistent formatting, duplicate records, 
              and calculation errors that reduce the reliability of business reporting. 
              Before any meaningful analysis can take place, the data must first be cleaned and standardised.

            </p>

            <p>
                In this project, Microsoft Excel was used to transform a raw retail sales dataset into a structured, 
                analysis-ready dataset by resolving data quality issues, validating calculations, 
                and applying consistent formatting throughout the workbook.
            </p>
              
            

          </div>

        </section>

        {/* BUSINESS PROBLEM */}

        <section className="mb-24">

          <h2 className="text-4xl font-bold">
            Business Problem
          </h2>

          <p className="mt-8 text-lg leading-8 text-muted-foreground">
            The retail dataset contained numerous data quality issues including duplicate records, 
            inconsistent category names, missing values, incorrect calculations, and formatting inconsistencies. 
            These problems reduced confidence in the dataset and prevented reliable business reporting.

            The objective was to clean, validate, and standardise the dataset 
            while preserving as much useful information as possible, 
            producing a reliable foundation for future analysis and reporting.
          </p>

        </section>

        {/* PROJECT OBJECTIVES */}

        <section className="mb-28">

          <h2 className="text-4xl font-bold">
            Project Objectives
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            {[
              "Standardise data types",
              "Handle missing values",
              "Remove duplicate records",
              "Correct calculation errors",
              "Validate cleaned data",
              "Produce an analysis-ready dataset",
            ].map((item) => (

              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
              >
                {item}
              </div>

            ))}

          </div>

        </section>

        {/* PROJECT SNAPSHOT */}

        <section className="mb-28">

            <h2 className="text-4xl font-bold">
                Project Snapshot
            </h2>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

                <div className="rounded-2xl border border-white/10 bg-card p-6">
                <p className="text-sm text-muted-foreground">
                    Industry
                </p>

                <h3 className="mt-3 text-3xl font-bold text-primary">
                    Retail Sales
                </h3>
                </div>

                <div className="rounded-2xl border border-white/10 bg-card p-6">
                <p className="text-sm text-muted-foreground">
                    Dataset
                </p>

                <h3 className="mt-3 text-3xl font-bold text-primary">
                    Retail Transactions
                </h3>
                </div>

                <div className="rounded-2xl border border-white/10 bg-card p-6">
                <p className="text-sm text-muted-foreground">
                    Tool
                </p>

                <h3 className="mt-3 text-3xl font-bold text-primary">
                    Microsot Excel
                </h3>
                </div>

                <div className="rounded-2xl border border-white/10 bg-card p-6">
                <p className="text-sm text-muted-foreground">
                   Focus
                </p>

                <h3 className="mt-3 text-2xl font-bold text-primary">
                    Data Cleaning
                </h3>
                </div>

            </div>

        </section>

        {/* RAW DATASET */}

        <section className="mb-28">

          <h2 className="text-4xl font-bold">
            Raw Dataset
          </h2>

          <div className="mt-8 space-y-6 text-lg leading-8 text-muted-foreground">

            <p>
              The original retail dataset contained a variety of common data quality
              issues that prevented reliable analysis. Missing values, duplicate
              records, inconsistent text formatting, incorrect calculations, and
              mixed data types reduced the overall quality and usability of the
              dataset.
            </p>

            <p>
              Before any meaningful business analysis could be performed, the data
              required systematic cleaning and validation to ensure consistency,
              accuracy, and completeness across all records.
            </p>

          </div>

          {/* Image 1 */}

          <div className="mt-12">

            <h3 className="text-2xl font-bold">
              Original Dataset (Sample 1)
            </h3>

            <p className="mt-4 leading-8 text-muted-foreground">
              The first section of the raw dataset illustrates several data quality
              issues, including inconsistent formatting, missing information, and
              calculation errors that required correction before analysis.
            </p>

            <div className="mt-8 flex justify-center">

              <Image
                src="/images/case-studies/business-reporting/messy.PNG"
                alt="Raw Dataset Sample 1"
                width={700}
                height={450}
                className="w-full max-w-5xl rounded-2xl border border-white/10 shadow-xl"
              />

            </div>

          </div>

          {/* Image 2 */}

          <div className="mt-20">

            <h3 className="text-2xl font-bold">
              Original Dataset (Sample 2)
            </h3>

            <p className="mt-4 leading-8 text-muted-foreground">
              Additional inconsistencies were observed throughout the dataset,
              reinforcing the need for thorough cleaning before the data could be
              considered reliable for reporting or business analysis.
            </p>

            <div className="mt-8 flex justify-center">

              <Image
                src="/images/case-studies/business-reporting/messy2.PNG"
                alt="Raw Dataset Sample 2"
                width={700}
                height={450}
                className="w-full max-w-5xl rounded-2xl border border-white/10 shadow-xl"
              />

            </div>

          </div>

        </section>

        {/* DATA CLEANING */}

        <section className="mb-28">

            <h2 className="text-4xl font-bold">
                Data Cleaning Process
            </h2>

            <div className="mt-10 grid gap-6">

                {[
                {
                    title: "Standardised Data Types",
                    description:
                    "Converted columns into appropriate text, numeric and date formats to ensure consistency throughout the dataset.",
                },
                {
                    title: "Unified Inconsistent Values",
                    description:
                    "Standardised product categories, payment methods and location names by correcting inconsistent spellings and formatting.",
                },
                {
                    
                  title: "Missing Values",
                    description:
                    "Replaced non-critical missing values with Unknown where appropriate and reconstructed values using logical relationships whenever possible.",
                },
                {
                    
                  title: "Duplicate Records",
                    description:
                    "Identified and removed duplicate rows to ensure every transaction represented a unique business record.",
                },
                {
                    
                  title: "Corrected Calculations",
                    description:
                    "Recalculated Total Spent = Price × Quantity to eliminate incorrect formulas and maintain numerical accuracy.",
                },
                {
                    
                  title: "Removed Invalid Records",
                    description:
                    "Deleted records containing critical missing information that could not be accurately reconstructed.",
                },
                ].map((step) => (

                <div
                    key={step.title}
                    className="rounded-2xl border border-white/10 bg-card p-7"
                >

                    <h3 className="text-xl font-semibold">
                    {step.title}
                    </h3>

                    <p className="mt-3 leading-7 text-muted-foreground">
                    {step.description}
                    </p>

                </div>

                ))}

            </div>

        </section>

        <section className="mb-28">

          <h2 className="text-4xl font-bold">
            Data Validation
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            {[
              "Verified Total Spent calculations",
              "Checked for missing values",
              "Validated date formats",
              "Confirmed categorical consistency",
              "Performed final duplicate scan",
              "Reviewed unrealistic values",
            ].map((item) => (

              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
              >
                {item}
              </div>

            ))}

          </div>

        </section> 

        {/* CLEANED DATASET */}

        <section className="mb-28">

          <h2 className="text-4xl font-bold">
            Final Clean Dataset
          </h2>

          <div className="mt-8 space-y-6 text-lg leading-8 text-muted-foreground">

            <p>
              After completing the cleaning process, the dataset became fully
              structured, consistent, and ready for business analysis. Missing values
              were appropriately handled, duplicate records were removed,
              calculations were validated, and formatting was standardised across
              every column.
            </p>

            <p>
              The cleaned dataset provides a reliable foundation for exploratory
              analysis, dashboard development, and future machine learning
              applications by ensuring the underlying data is accurate and
              trustworthy.
            </p>

          </div>

          {/* Image 1 */}

          <div className="mt-12">

            <h3 className="text-2xl font-bold">
              Clean Dataset (Sample 1)
            </h3>

            <p className="mt-4 leading-8 text-muted-foreground">
              The cleaned dataset now follows a consistent structure with corrected
              calculations, standardised formatting, and validated records suitable
              for downstream analysis.
            </p>

            <div className="mt-8 flex justify-center">

              <Image
                src="/images/case-studies/business-reporting/cleaned.PNG"
                alt="Clean Dataset Sample 1"
                width={700}
                height={450}
                className="w-full max-w-5xl rounded-2xl border border-white/10 shadow-xl"
              />

            </div>

          </div>

          {/* Image 2 */}

          <div className="mt-20">

            <h3 className="text-2xl font-bold">
              Clean Dataset (Sample 2)
            </h3>

            <p className="mt-4 leading-8 text-muted-foreground">
              The final output demonstrates a fully prepared dataset that is accurate,
              consistent, and ready to support reliable reporting and business
              decision-making.
            </p>

            <div className="mt-8 flex justify-center">

              <Image
                src="/images/case-studies/business-reporting/cleaned 2.PNG"
                alt="Clean Dataset Sample 2"
                width={700}
                height={450}
                className="w-full max-w-5xl rounded-2xl border border-white/10 shadow-xl"
              />

            </div>

          </div>

        </section>

        {/* LESSONS LEARNED */}

        <section className="mb-28">

            <h2 className="text-4xl font-bold">
                Lessons Learned
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-muted-foreground">

                <p>

                    This project reinforced the importance of data quality as the foundation of every analytical workflow. 
                    Even simple reporting can produce misleading conclusions when underlying data contains inconsistencies or 
                    calculation errors.

                </p>

                <p>

                   Working through the complete cleaning process strengthened my understanding of 
                   Excel as a practical tool for preparing reliable business datasets before analysis begins.

                </p>

            </div>

        </section>

        {/* NEXT PROJECT */}

        <section className="mb-16 rounded-3xl border border-primary/20 bg-primary/5 p-10">

            <p className="font-semibold text-primary uppercase tracking-widest">

                Next Case Study

            </p>

            <h2 className="mt-4 text-4xl font-bold">

                Customer Analytics & Machine Learning

            </h2>

            <p className="mt-6 max-w-3xl leading-8 text-muted-foreground">

                Explore how customer purchasing behaviour was analysed using
                Python and machine learning to predict customer spending,
                evaluate multiple regression models, and generate
                data-driven business recommendations.

            </p>

            <div className="mt-10">

                <Link href="/case-studies/customer-analytics">

                    <Button>

                        Read Case Study →

                    </Button>

                </Link>

            </div>

        </section>

      </Container>

    </main>
  );
}