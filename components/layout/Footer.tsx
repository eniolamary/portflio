import Container from "./container";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">

      <Container>

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          <div>

            <h3 className="text-xl font-bold">
              Mary Eniola Olalere
            </h3>

            <p className="mt-2 text-muted-foreground">
              Data Analyst • AI • Machine Learning
            </p>

          </div>

          <p className="text-sm text-muted-foreground">

            © {new Date().getFullYear()} Mary Eniola Olalere.
            Built with Next.js & Tailwind CSS.

          </p>

        </div>

      </Container>

    </footer>
  );
}