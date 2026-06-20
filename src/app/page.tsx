export default function Page() {
  return (
    <main className="min-h-screen">
      <section className="max-w-3xl mx-auto py-24 px-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight">
          Olá, eu sou o Fermino
        </h1>
        <p className="mt-6 text-lg text-neutral-600">
          Desenvolvedor Full-Stack em formação, criando projetos práticos com Next.js, TypeScript, Tailwind, Prisma, Docker e Vercel.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="https://github.com/Fermino655/meu-projeto"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-neutral-300 px-4 py-2 text-sm font-medium hover:border-neutral-900"
          >
            Ver repositório
          </a>
          <a
            href="https://meu-projeto-ebon-five.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800"
          >
            Abrir deploy
          </a>
        </div>
      </section>
    </main>
  );
}
