import Container from "@/components/layout/container";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function CustomerAnalyticsPage() {
  return (
    <main className="section-padding">

      <Container className="max-w-6xl">

        {/* HERO */}

        <section className="mb-28">

          <p className="font-semibold tracking-widest text-primary uppercase">
            Machine Learning Case Study
          </p>

          <h1 className="mt-5 text-5xl font-extrabold leading-tight lg:text-6xl">
            Customer Analytics & Spending Prediction
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-muted-foreground">
            An end-to-end machine learning project focused on understanding
            customer purchasing behaviour, uncovering key spending patterns,
            and developing predictive models capable of estimating future
            customer spending using Python and Scikit-learn.
          </p>

          {/* Technologies */}

          <div className="mt-10 flex flex-wrap gap-3">

            {[
              "Python",
              "Pandas",
              "Scikit-learn",
              "Matplotlib",
              "Machine Learning",
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
              href="https://github.com/eniolamary/Customer-Analytics-ML"
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
              A retail bookstore sought to gain deeper insight into customer
              purchasing behaviour and better understand the factors that
              influence overall customer spending. While transaction data had
              been collected over time, it had not been fully explored to
              uncover meaningful business insights or support data-driven
              decision-making.
            </p>

            <p>
              This project combined data cleaning, exploratory data analysis,
              feature engineering, and machine learning to transform raw
              customer data into actionable insights. Multiple regression
              models were trained and evaluated to identify the most effective
              approach for predicting customer spending while providing
              recommendations that could support future marketing and customer
              engagement strategies.
            </p>

          </div>

        </section>

        {/* BUSINESS PROBLEM */}

        <section className="mb-24">

          <h2 className="text-4xl font-bold">
            Business Problem
          </h2>

          <p className="mt-8 text-lg leading-8 text-muted-foreground">

            A retail bookstore had accumulated a large volume of customer transaction data but lacked the analytical capability to transform that information into actionable business insights. As a result, the business had limited visibility into customer purchasing behaviour, factors influencing spending, and opportunities to improve customer retention and revenue generation.

            Without a reliable forecasting approach, management was unable to accurately identify high-value customers, anticipate future spending patterns, or make data-driven decisions regarding marketing campaigns and customer engagement strategies.

            The objective of this project was to analyse historical customer data, uncover behavioural trends, and develop a machine learning model capable of predicting customer spending to support strategic business decision-making.

          </p>

        </section>

        {/* PROJECT OBJECTIVES */}

        <section className="mb-28">

          <h2 className="text-4xl font-bold">
            Project Objectives
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            {[
              "Clean and prepare raw customer data for analysis.",
              "Explore customer purchasing behaviour and identify key trends.",
              "Engineer meaningful features to improve predictive performance.",
              "Train and evaluate multiple machine learning regression models.",
              "Compare model performance using evaluation metrics.",
              "Generate actionable business insights and recommendations.",
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
                    Dataset
                </p>

                <h3 className="mt-3 text-3xl font-bold text-primary">
                    12,000+
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                    Customer Records
                </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-card p-6">
                <p className="text-sm text-muted-foreground">
                    Features
                </p>

                <h3 className="mt-3 text-3xl font-bold text-primary">
                    17
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                    Variables
                </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-card p-6">
                <p className="text-sm text-muted-foreground">
                    Best Model
                </p>

                <h3 className="mt-3 text-2xl font-bold text-primary">
                    Random Forest
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                    Highest Performance
                </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-card p-6">
                <p className="text-sm text-muted-foreground">
                    Target Variable
                </p>

                <h3 className="mt-3 text-2xl font-bold text-primary">
                    Total Spent
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                    Regression Task
                </p>
                </div>

            </div>

        </section>

        {/* DATASET */}

        <section className="mb-28">

            <h2 className="text-4xl font-bold">
                Dataset
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-muted-foreground">

                <p>
                The dataset consisted of customer demographic information,
                purchasing behaviour, store locations, loyalty membership,
                transaction history, customer ratings, and escalation records.
                These features provided a comprehensive view of customer
                behaviour and served as the foundation for predictive modelling.
                </p>

                <p>
                Before analysis, the dataset required cleaning and preparation
                to ensure consistency, improve data quality, and produce reliable
                analytical results.
                </p>

            </div>

        </section>
        
        {/* ===================================================== */}
        {/* PROJECT WORKFLOW */}
        {/* ===================================================== */}

        <section className="my-28">

            <div className="flex items-center gap-6">

                <div className="h-px flex-1 bg-white/10" />

                <div className="rounded-full border border-primary/30 bg-primary/10 px-6 py-2">
                <span className="font-semibold tracking-widest text-primary uppercase">
                    Project Workflow
                </span>
                </div>

                <div className="h-px flex-1 bg-white/10" />

            </div>

            <p className="mx-auto mt-8 max-w-3xl text-center leading-8 text-muted-foreground">
                The following sections document the complete analytical workflow,
                from preparing raw customer data through exploratory analysis,
                feature engineering, machine learning, and business recommendations.
            </p>

        </section>

        {/* DATA CLEANING */}

        <section className="mb-28">

            <h2 className="text-4xl font-bold">
                Data Cleaning & Preparation
            </h2>

            <div className="mt-10 grid gap-6">

                {[
                {
                    title: "Handled Missing Values",
                    description:
                    "Filled missing numerical values using regional median imputation and replaced missing categorical values with meaningful defaults.",
                },
                {
                    title: "Converted Date Columns",
                    description:
                    "Converted transaction and signup dates into datetime format to enable feature engineering and time-based analysis.",
                },
                {
                    title: "Feature Engineering",
                    description:
                    "Created Customer Tenure and Purchase Lifespan to better represent customer behaviour over time.",
                },
                {
                    title: "Encoding & Scaling",
                    description:
                    "Applied one-hot encoding to categorical variables and standardized numerical features before model training.",
                },
                {
                    title: "Prepared ML Dataset",
                    description:
                    "Removed unnecessary columns and selected the target variable before splitting the dataset for training and testing.",
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

        {/* ===================================================== */}
        {/* EXPLORATORY DATA ANALYSIS */}
        {/* ===================================================== */}


        <section className="mb-28">

            <h2 className="text-4xl font-bold">
                Exploratory Data Analysis
            </h2>

            <p className="mt-8 max-w-4xl text-lg leading-8 text-muted-foreground">

                Exploratory Data Analysis (EDA) was conducted to understand customer
                behaviour, identify trends and anomalies, explore relationships between
                variables, and generate business insights before developing machine
                learning models. Both univariate and bivariate analyses were performed
                using visualizations and summary statistics to better understand the
                underlying characteristics of the dataset.

            </p>

        </section>



        <section className="mb-24">

            <h3 className="text-3xl font-bold">
            Numerical Variables Distribution
            </h3>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">

            The numerical features were analysed to understand customer spending,
            purchase behaviour, customer ratings, online purchasing patterns,
            and estimated customer lifetime value. Distribution analysis also
            helped identify skewness, variability and potential outliers.

            </p>

            <Image
            src="/images/case-studies/customer-analytics/Numerical Variables Distribution.PNG"
            alt="Numerical Variables Distribution"
            width={800}
            height={500}
            className="mt-10 rounded-2xl border border-white/10"
            />

            <div className="mt-10 rounded-2xl border border-primary/20 bg-primary/5 p-7">

            <h4 className="font-semibold text-primary">
            Business Insights
            </h4>

            <ul className="mt-4 list-disc space-y-3 pl-6 leading-8 text-muted-foreground">

            <li>
            Customer spending is positively skewed, indicating that most customers
            spend relatively small amounts while a smaller group contributes
            significantly higher revenue.
            </li>

            <li>
            Purchase-related variables display similar patterns, suggesting that a
            small number of highly engaged customers generate a substantial
            proportion of total sales.
            </li>

            <li>
            Customer ratings remain generally positive, indicating satisfactory
            overall customer experience.
            </li>

            </ul>

            </div>

        </section>

        <section className="mb-24">

            <h3 className="text-3xl font-bold">
            Customer Engagement
            </h3>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">

            Customer engagement metrics such as annual visits and visits during
            2023 were explored to understand purchasing frequency and customer
            activity levels.

            </p>

            <Image
            src="/images/case-studies/customer-analytics/Customer Engagement Distribution.PNG"
            alt="Customer Engagement"
            width={800}
            height={500}
            className="mt-10 rounded-2xl border border-white/10"
            />

            <div className="mt-10 rounded-2xl border border-primary/20 bg-primary/5 p-7">

            <h4 className="font-semibold text-primary">
            Business Insights
            </h4>

            <ul className="mt-4 list-disc space-y-3 pl-6 leading-8 text-muted-foreground">

            <li>
            Most customers demonstrate moderate purchasing activity rather than
            extremely frequent visits.
            </li>

            <li>
            A relatively small group of highly engaged customers presents valuable
            opportunities for retention and loyalty initiatives.
            </li>

            <li>
            Increasing engagement among average customers could improve long-term
            customer lifetime value.
            </li>

            </ul>

            </div>

        </section>

        <section className="mb-24">

            <h3 className="text-3xl font-bold">
            Categorical Variables Distribution
            </h3>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">

            Categorical variables were analysed to understand customer segmentation
            across regions, loyalty membership, home stores, escalation history,
            and escalation reasons.

            </p>

            <Image
            src="/images/case-studies/customer-analytics/Categorical Variables Distribution.PNG"
            alt="Categorical Variables"
            width={800}
            height={500}
            className="mt-10 rounded-2xl border border-white/10"
            />

            <div className="mt-10 rounded-2xl border border-primary/20 bg-primary/5 p-7">

            <h4 className="font-semibold text-primary">
            Business Insights
            </h4>

            <ul className="mt-4 list-disc space-y-3 pl-6 leading-8 text-muted-foreground">

            <li>
            Most customers are not enrolled in the loyalty programme, suggesting an
            opportunity to increase customer retention through membership
            initiatives.
            </li>

            <li>
            Calgary Downtown represents the largest customer segment across the
            dataset.
            </li>

            <li>
            Late Delivery emerged as the most common customer escalation,
            highlighting an operational improvement opportunity.
            </li>

            </ul>

            </div>

        </section>

        <section className="mb-24">

            <h3 className="text-3xl font-bold">
            Customer Behaviour Across Segments
            </h3>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">

            Relationships between customer categories and purchasing behaviour were
            analysed to understand how spending differs across customer groups.

            </p>

            <Image
            src="/images/case-studies/customer-analytics/Categorical vs Numerical Distribution.PNG"
            alt="Categorical vs Numerical"
            width={800}
            height={500}
            className="mt-10 rounded-2xl border border-white/10"
            />

            <Image
            src="/images/case-studies/customer-analytics/Categorical vs Categorical Distribution.PNG"
            alt="Categorical vs Categorical"
            width={800}
            height={500}
            className="mt-10 rounded-2xl border border-white/10"
            />

            <div className="mt-10 rounded-2xl border border-primary/20 bg-primary/5 p-7">

            <h4 className="font-semibold text-primary">
            Business Insights
            </h4>

            <ul className="mt-4 list-disc space-y-3 pl-6 leading-8 text-muted-foreground">

            <li>
            Loyalty membership is associated with stronger customer engagement and
            purchasing activity.
            </li>

            <li>
            Customer behaviour varies across store locations, suggesting regional
            differences in purchasing patterns.
            </li>

            <li>
            Escalation history appears to influence customer satisfaction and
            engagement.

            </li>

            </ul>

            </div>

        </section>

        <section className="mb-24">

            <h3 className="text-3xl font-bold">
            Correlation Analysis
            </h3>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">

            Correlation analysis was conducted to identify relationships between
            numerical variables and determine which features were most strongly
            associated with customer spending.

            </p>

            <Image
            src="/images/case-studies/customer-analytics/Numerical vs Numerical Heatmap.PNG"
            alt="Correlation Heatmap"
            width={700}
            height={450}
            className="mt-10 rounded-2xl border border-white/10"
            />

            <Image
            src="/images/case-studies/customer-analytics/Numerical vs Numerical Distribution.PNG"
            alt="Scatterplots"
            width={800}
            height={500}
            className="mt-10 rounded-2xl border border-white/10"
            />

            <div className="mt-10 rounded-2xl border border-primary/20 bg-primary/5 p-7">

            <h4 className="font-semibold text-primary">
            Business Insights
            </h4>

            <ul className="mt-4 list-disc space-y-3 pl-6 leading-8 text-muted-foreground">

            <li>
            Total Purchases demonstrated the strongest positive relationship with
            Total Spent, making it one of the most influential predictors in the
            machine learning models.
            </li>

            <li>
            Annual Visits also showed a meaningful relationship with customer
            spending, indicating that more frequent customer engagement generally
            leads to higher revenue.
            </li>

            <li>
            Scatterplot analysis confirmed these relationships visually while also
            revealing variability that justified the use of non-linear machine
            learning models.

            </li>

            </ul>

            </div>

        </section>

        <section className="mb-28">

            <h2 className="text-4xl font-bold">
            Key Findings
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-2">

            {[
            "Most customers spend below the overall average.",
            "Purchase frequency is the strongest predictor of customer spending.",
            "Loyalty members generally exhibit stronger purchasing behaviour.",
            "Calgary Downtown contains the largest customer population.",
            "Late Delivery is the most common escalation reason.",
            "Customer ratings remain generally positive.",
            "Correlation analysis identified Total Purchases and Annual Visits as the strongest predictive features.",
            "EDA findings guided feature engineering and model selection."
            ].map((finding) => (

            <div
            key={finding}
            className="rounded-2xl border border-white/10 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
            >

            {finding}

            </div>

            ))}

            </div>

        </section>

        {/* ===================================================== */}
        {/* FEATURE ENGINEERING */}
        {/* ===================================================== */}

        <section className="mb-28">

            <h2 className="text-4xl font-bold">
                Feature Engineering
            </h2>

            <p className="mt-8 max-w-4xl text-lg leading-8 text-muted-foreground">

                To improve the predictive capability of the machine learning models,
                additional features were engineered from the existing dataset.
                These new variables captured customer purchasing behaviour more
                effectively while categorical variables were prepared for modelling
                through encoding and numerical variables were standardised for
                consistent model performance.

            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-2">

                {[
                {
                    title: "Customer Tenure",
                    text: "Calculated the number of days between the customer's signup date and their most recent purchase to measure long-term customer relationships."
                },
                {
                    title: "Purchase Lifespan",
                    text: "Measured the duration between a customer's first and last recorded purchase to better understand purchasing consistency."
                },
                {
                    title: "Categorical Encoding",
                    text: "Converted categorical variables into numerical representations using one-hot encoding, allowing machine learning algorithms to process non-numeric data."
                },
                {
                    title: "Feature Scaling",
                    text: "Applied StandardScaler to numerical variables so that features with different ranges contributed fairly during model training."
                }
                ].map((feature) => (

                <div
                    key={feature.title}
                    className="rounded-2xl border border-white/10 bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
                >

                    <h3 className="text-xl font-semibold text-primary">
                    {feature.title}
                    </h3>

                    <p className="mt-4 leading-8 text-muted-foreground">
                    {feature.text}
                    </p>

                </div>

                ))}

            </div>

            <div className="mt-10 rounded-2xl border border-primary/20 bg-primary/5 p-7">

                <h3 className="font-semibold text-primary">
                Why Feature Engineering?
                </h3>

                <p className="mt-4 leading-8 text-muted-foreground">

                Feature engineering transformed raw customer information into more
                meaningful variables that better represented customer behaviour.
                These engineered features helped the models identify stronger
                relationships within the data, contributing to improved predictive
                performance and more valuable business insights.

                </p>

            </div>

        </section>

        {/* ===================================================== */}
        {/* MACHINE LEARNING PIPELINE */}
        {/* ===================================================== */}

        <section className="mb-28">

            <h2 className="text-4xl font-bold">
                Machine Learning Pipeline
            </h2>

            <p className="mt-8 max-w-4xl text-lg leading-8 text-muted-foreground">

                After preparing the dataset, a supervised machine learning workflow
                was implemented to predict customer spending. Multiple regression
                algorithms were trained and evaluated to determine which model
                produced the most accurate predictions while maintaining strong
                generalisation on unseen data.

            </p>

            {/* Pipeline */}

            <div className="mt-14 space-y-5">

                {[
                {
                    title: "1. Define Target Variable",
                    text: "Total Spent was selected as the prediction target because it represents overall customer value."
                },
                {
                    title: "2. Train-Test Split",
                    text: "The dataset was divided into training and testing sets using an 80/20 split to evaluate model performance on unseen data."
                },
                {
                    title: "3. Train Multiple Models",
                    text: "Four regression algorithms were trained and compared: Linear Regression, Decision Tree, Random Forest and Gradient Boosting."
                },
                {
                    title: "4. Evaluate Performance",
                    text: "Models were assessed using R² Score, Mean Squared Error (MSE) and Root Mean Squared Error (RMSE)."
                },
                {
                    title: "5. Select Best Model",
                    text: "The best-performing model was selected based on prediction accuracy and overall generalisation."
                },
                ].map((step) => (

                <div
                    key={step.title}
                    className="rounded-2xl border border-white/10 bg-card p-7 transition-all duration-300 hover:border-primary/40 hover:shadow-xl"
                >

                    <h3 className="text-xl font-semibold text-primary">
                    {step.title}
                    </h3>

                    <p className="mt-3 leading-8 text-muted-foreground">
                    {step.text}
                    </p>

                </div>

                ))}

            </div>

            {/* Models */}

            <div className="mt-14">

                <h3 className="text-2xl font-bold">
                Models Evaluated
                </h3>

                <div className="mt-8 grid gap-6 md:grid-cols-2">

                {[
                    {
                    model: "Linear Regression",
                    description:
                        "Established a simple baseline model for predicting customer spending."
                    },
                    {
                    model: "Decision Tree",
                    description:
                        "Captured non-linear relationships by learning decision rules from customer behaviour."
                    },
                    {
                    model: "Random Forest",
                    description:
                        "Combined multiple decision trees to improve prediction accuracy and reduce overfitting."
                    },
                    {
                    model: "Gradient Boosting",
                    description:
                        "Sequentially improved model performance by correcting errors from previous trees."
                    },
                ].map((model) => (

                    <div
                    key={model.model}
                    className="rounded-2xl border border-white/10 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
                    >

                    <h4 className="text-xl font-semibold text-primary">
                        {model.model}
                    </h4>

                    <p className="mt-4 leading-8 text-muted-foreground">
                        {model.description}
                    </p>

                    </div>

                ))}

                </div>

            </div>

        </section>

        {/* ===================================================== */}
        {/* MODEL EVALUATION */}
        {/* ===================================================== */}

        <section className="mb-28">

            <h2 className="text-4xl font-bold">
                Model Evaluation
            </h2>

            <p className="mt-8 max-w-4xl text-lg leading-8 text-muted-foreground">

                The trained models were evaluated using three standard regression
                metrics: R² Score, Mean Squared Error (MSE), and Root Mean Squared
                Error (RMSE). Comparing multiple algorithms ensured that the final
                model balanced predictive accuracy with strong generalisation.

            </p>

            <Image
                src="/images/case-studies/customer-analytics/Model Evaluation Table.PNG"
                alt="Model Evaluation Results"
                width={600}
                height={400}
                className="mt-12 rounded-2xl border border-white/10"
            />

            <div className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-8">

                <h3 className="text-2xl font-bold text-primary">
                Best Performing Model
                </h3>

                <p className="mt-5 leading-8 text-muted-foreground">

                Among the four algorithms evaluated, the Random Forest Regressor
                achieved the strongest overall performance. It produced the
                highest predictive accuracy while maintaining the lowest prediction
                error across unseen customer data. Gradient Boosting performed
                similarly, while Linear Regression provided a strong baseline and
                Decision Tree showed comparatively weaker generalisation.

                </p>

            </div>

        </section>

        {/* ===================================================== */}
        {/* BUSINESS RECOMMENDATIONS */}
        {/* ===================================================== */}

        <section className="mb-28">

            <h2 className="text-4xl font-bold">
                Business Recommendations
            </h2>

            <p className="mt-8 max-w-4xl text-lg leading-8 text-muted-foreground">

                Insights generated from the exploratory analysis and machine
                learning models provide several opportunities for improving customer
                retention, increasing revenue, and supporting data-driven decision
                making.

            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-2">

                {[
                {
                    title: "Expand Loyalty Membership",
                    text: "Encourage more customers to join the loyalty programme through targeted incentives and personalised offers."
                },
                {
                    title: "Improve Delivery Operations",
                    text: "Reduce late deliveries to minimise customer escalations and improve overall satisfaction."
                },
                {
                    title: "Target High-Value Customers",
                    text: "Use predictive insights to identify valuable customers early and tailor marketing campaigns accordingly."
                },
                {
                    title: "Increase Customer Engagement",
                    text: "Encourage repeat purchases through personalised promotions and retention strategies."
                },
                {
                    title: "Support Business Planning",
                    text: "Leverage predictive models to forecast customer spending and improve inventory and resource planning."
                },
                {
                    title: "Monitor Customer Behaviour",
                    text: "Continuously track purchasing patterns to detect behavioural changes and emerging business opportunities."
                },
                ].map((item) => (

                <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
                >

                    <h3 className="text-xl font-semibold text-primary">
                    {item.title}
                    </h3>

                    <p className="mt-4 leading-8 text-muted-foreground">
                    {item.text}
                    </p>

                </div>

                ))}

            </div>

        </section>

        {/* ===================================================== */}
        {/* CHALLENGES ENCOUNTERED */}
        {/* ===================================================== */}

        <section className="mb-28">

            <h2 className="text-4xl font-bold">
                Challenges Encountered
            </h2>

            <p className="mt-8 max-w-4xl text-lg leading-8 text-muted-foreground">

                Like most real-world datasets, the customer data presented several
                challenges before meaningful analysis and modelling could begin.
                Addressing these issues was an essential part of developing a
                reliable machine learning solution.

            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-2">

                {[
                {
                    title: "Missing Values",
                    text: "Several variables contained missing observations that required appropriate imputation techniques to preserve data quality without introducing significant bias."
                },
                {
                    title: "Data Quality",
                    text: "Date formats, inconsistent data types, and customer ratings required preprocessing before meaningful analysis and feature engineering could be performed."
                },
                {
                    title: "Feature Selection",
                    text: "Selecting the most informative variables while avoiding redundant information was important for improving model performance and reducing complexity."
                },
                {
                    title: "Model Comparison",
                    text: "Different regression algorithms produced varying results, requiring careful evaluation using multiple performance metrics before selecting the final model."
                }
                ].map((challenge) => (

                <div
                    key={challenge.title}
                    className="rounded-2xl border border-white/10 bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
                >

                    <h3 className="text-xl font-semibold text-primary">
                    {challenge.title}
                    </h3>

                    <p className="mt-4 leading-8 text-muted-foreground">
                    {challenge.text}
                    </p>

                </div>

                ))}

            </div>

        </section>

        {/* ===================================================== */}
        {/* LESSONS LEARNED */}
        {/* ===================================================== */}

        <section className="mb-28">

            <h2 className="text-4xl font-bold">
                Lessons Learned
            </h2>

            <p className="mt-8 max-w-4xl text-lg leading-8 text-muted-foreground">

                This project strengthened both my technical and analytical skills,
                demonstrating that successful machine learning projects rely just
                as much on understanding the data as they do on selecting the right
                algorithm.

            </p>

            <div className="mt-12 space-y-5">

                {[
                "Data cleaning and preparation have a significant impact on model performance and should never be overlooked.",
                "Exploratory data analysis provides valuable business insights that guide better feature engineering and model development.",
                "Feature engineering can improve predictive performance by transforming raw variables into more meaningful information.",
                "Comparing multiple machine learning algorithms leads to more informed model selection than relying on a single approach.",
                "Effective data storytelling is essential for communicating technical findings to business stakeholders."
                ].map((lesson) => (

                <div
                    key={lesson}
                    className="rounded-2xl border border-white/10 bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-xl"
                >

                    {lesson}

                </div>

                ))}

            </div>

        </section>

        {/* ===================================================== */}
        {/* NEXT PROJECT */}
        {/* ===================================================== */}

        <section className="mb-16">

            <div className="rounded-3xl border border-primary/20 bg-primary/5 p-10">

                <p className="font-semibold text-primary">
                Continue Exploring
                </p>

                <h2 className="mt-4 text-3xl font-bold">
                SQL Sales Analytics Dashboard
                </h2>

                <p className="mt-6 max-w-3xl leading-8 text-muted-foreground">

                Explore how SQL was used to clean transactional sales data,
                perform customer segmentation, analyse revenue trends, and
                generate business insights that were later visualised in an
                interactive Power BI dashboard.

                </p>

                <div className="mt-8">

                <Link href="/case-studies/sales-dashboard">

                    <Button>

                    Read Case Study →

                    </Button>

                </Link>

                </div>

            </div>

        </section>

      </Container>

    </main>
  );
}